// import { CommentContextFunction } from "../Context/CommentContext"

export function drawBoard() {
    const board = document.querySelector(".game-board");

     for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('id', i)
        board.appendChild(cell)

        const ROW = Math.floor(i / 8) ;

        if ( ROW == 0 || ROW % 2 == 0 ) {
          if ( i % 2 == 0) {
            cell.classList.add('dark')
          }
        } else {

          if ( i % 2 == 1) {
            cell.classList.add('dark')
          }
        
        }
     }


    const cells = document?.querySelectorAll('.cell');
    
    for (let i = 0; i < 12; i++) {
      const SUBROW = Math.floor(i / 4)
      const piece = document.createElement('div')
      piece.classList.add("piece")
      piece.classList.add("White")
      piece.setAttribute('id', "piece " + i)
      if ( SUBROW == 0 || SUBROW % 2 == 0 )
      {
        cells[i * 2].appendChild(piece)  
      } else {
        cells[i * 2 + 1].appendChild(piece)
      }
    }

    for (let i = 20; i < 32; i++) {
      const SUBROW = Math.floor(i / 4)
      const piece = document.createElement('div')
      piece.classList.add("piece")
      piece.classList.add("Black")
      piece.classList.add('op-piece')
      piece.setAttribute('id', i - 8)
      if ( SUBROW == 0 || SUBROW % 2 == 0 )
      {
        cells[i * 2].appendChild(piece)  
      } else {
        cells[i * 2 + 1].appendChild(piece)
      }
    }

}

