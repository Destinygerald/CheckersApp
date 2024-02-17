import { createContext, useContext, useRef, useCallback } from "react"

type CommentContextProps = {
	currentPlayer: string;
	switchPlayer: () => void;
}

const CommentContext = createContext({} as CommentContextProps)

export function CommentContextFunction () {
	return (
		useContext(CommentContext)
	)
}

export function CommentContextProvider ({children}: ReactNode) {
	
	const currentPlayer = useRef("White");

	function switchPlayer() {
		if (currentPlayer.current === "White") {
			// console.log(currentPlayer, "Black")
			
			document.querySelector('.player').textContent = "Black"
			return currentPlayer.current = "Black"
		} else {
			// console.log(currentPlayer, "White")

			document.querySelector('.player').textContent = "White"
			return currentPlayer.current = "White"
		}
	}

	return (
		<CommentContext.Provider value={{currentPlayer, switchPlayer}}>
			{children}
		</CommentContext.Provider>
	)
}