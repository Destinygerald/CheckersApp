import "../App.css";
import { useEffect, useState, useRef } from "react"
import { CommentContextFunction } from "../Context/CommentContext"
import { drawBoard } from "../Static/Functions"

const GameBoard = () => {

  const [ readyToMove, setReadyToMove ] = useState<boolean>(false)
  const cellSelected = useRef<number>();
  const [ pieceSelected, setPieceSelected ] = useState<string>()
  const personToPlay = useRef("White")
  const pieces = useRef();
  const cells = useRef();


  const { switchPlayer, currentPlayer } = CommentContextFunction();


  useEffect(() => {
    const board = document.querySelector(".game-board");

    board.innerHTML = ''

    drawBoard()

  },[])


  useEffect(() => {

    pieces.current = document.querySelectorAll('.piece')
    let piece ;
    cells.current = document.querySelectorAll('.cell')
    let num ;

    /////////////////////////

    function handleClick (e) {

      e.preventDefault()

      const parentNode = e.target.parentNode

      cellSelected.current = parseInt(parentNode.id)

      piece = e.target

      num = parseInt(parentNode.id)

      pieces.current.forEach(piece => {
        try {
          piece.parentNode.classList.remove('selected-cell')
        } catch (err) {
          console.log(err);
        }
      })

      cells.current.forEach(cell => {
        cell.classList.remove('possible-move')
        cell.classList.remove('killable')
      })
      
      parentNode.classList.add('selected-cell')  

      if (e.target.classList[1] !== document.querySelector('.player').textContent ) return;
      setPieceSelected(e.target.classList[1])

      let newCell7 = document.getElementById(num + 7);
      let newCell9 = document.getElementById(num + 9);
      let newCell18 = document.getElementById(num + 18);
      let newCell14 = document.getElementById(num + 14);


      if (newCell9.innerHTML !== '') {
        if ( newCell9.querySelector('.piece').classList[1] !== e.target.classList[1] && newCell18.innerHTML === '' && parseInt(newCell9.id)%8 != 7){
          newCell9.classList.add('killable')
          if (newCell18.innerHTML == "") {
           newCell18.classList.add('possible-move')
          }
        }
      }

      if (newCell7.innerHTML !== '') {
        if ( newCell7.querySelector('.piece').classList[1] !== e.target.classList[1] && (parseInt(newCell7.id))%8 !== 0 && newCell14.innerHTML === '' ){
          newCell7.classList.add('killable')
          newCell14.classList.add('possible-move')
        }
      }


      if ( !newCell9.innerHTML == '' && !newCell7.innerHTML == ''  ) return;

      if ( num % 8 == 0 ) {
        if (!newCell9.innerHTML == '' ) return;

        newCell9.classList.add("possible-move")
        return;  
      }

      if ( !newCell9.innerHTML == '' && newCell7.innerHTML == '' ) {
        // if (num % 8 == 7) return;
        newCell7.classList.add("possible-move")
        return;  
      }

      if ( !newCell7.innerHTML == '' && newCell9.innerHTML == '' && num % 8 !== 7 ) {
        newCell9.classList.add("possible-move")
        return;  
      }


      if ( num % 8 == 7 ) {
        const newCell7 = document.getElementById(num + 7)
        newCell7.classList.add("possible-move")
        return;  
      }

      newCell7.classList.add("possible-move")

      newCell9.classList.add("possible-move")
      
    }

    function cellClick (e) {
      e.preventDefault()

      let pickedBox = parseInt(e.target.id)      

      const selectedSquare = e.target.classList;

      if (!e.target.classList.contains('possible-move')) return;

      if( selectedSquare.contains('possible-move') ) {
        switchPlayer()
        // console.log(pickedBox)
      }

        e.target.append(piece);

        if ( pickedBox - cellSelected.current == 14) {

          try {
            let cell = document.getElementById(pickedBox - 7)
            let element = cell.querySelector('.piece') 
            element.remove()
            pieces.current = document.querySelectorAll('.piece')
          } catch (err) {
            console.log(err)
            return;
          }
        }

        if ( pickedBox - cellSelected.current == 18) {
          
          try {
            let cell = document.getElementById(pickedBox - 9)
            let element = cell.querySelector('.piece') 
            element.remove()
            pieces.current = document.querySelectorAll('.piece')
          } catch (err) {
            console.log(err)
            return; 
          }
        }

        cells.current.forEach((cell) => {
          cell.classList.remove('possible-move')
          cell.classList.remove('selected-cell')
          cell.classList.remove('killable')
        })

        cells.current.forEach((cell) => {
          const id = cell.id
          cell.id = 63 - id
        })
    }

    pieces.current.forEach((piece) => {
      piece.addEventListener('pointerdown', handleClick);
      return( () => piece.removeEventListener('pointerdown', handleClick) )
    })

    cells.current.forEach(cell => {
      cell.addEventListener('pointerdown', cellClick)
      return( () => cell.removeEventListener('pointerdown', cellClick) )
    })

  })


	return (
  	<div className="game-board">
            
    </div>
  )
}

export default GameBoard;
