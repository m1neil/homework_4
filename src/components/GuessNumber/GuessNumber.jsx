import { useState } from "react"
import GuessNumbers from "../GuessNumbers/GuessNumbers"
import Player from "../Player/Player"

function GuessNumber() {
	const [numbers, setNumbers] = useState(getArrayNumbers)
	const [indexGuessNumber, setIndexGuessNumber] = useState(0)
	const [players, setPlayers] = useState(() => [
		{
			id: 1,
			idRival: 2,
			number: null,
			guessNumbers: [],
			amountMove: 1
		},
		{
			id: 2,
			idRival: 1,
			number: null,
			guessNumbers: [],
			amountMove: 1
		}
	])

	const onSetGuessNumber = (id, number) => {
		setPlayers(prevPlayers => prevPlayers.map(player => (
			player.id === id ?
				{
					...player,
					number: number,
					amountMove: player.amountMove - 1,
				} : player
		)))
	}

	const isNumberRivalsCoincides = (idRival, numberPlayer) => {
		const rival = players.find(player => player.id === idRival)
		if (!rival) return
		return rival.number === numberPlayer
	}

	function getArrayNumbers() {
		const randomValue = Math.floor(Math.random() * (999 - 101) + 100)
		return (
			randomValue
				.toString()
				.split('')
				.map(value => (
					{
						value: parseInt(value),
						isGuess: false
					}
				))
		)
	}

	return (
		<div className="guess-number">
			<div className="guess-number-container">
				<GuessNumbers
					numbers={numbers}
					indexGuessNumber={indexGuessNumber}
				/>
				<div className="guess-number-players">
					{players.map(({ id, number, idRival, amountMove }) => (
						<Player
							key={id}
							id={id}
							idRival={idRival}
							initNumber={number}
							amountMove={amountMove}
							onSetGuessNumber={onSetGuessNumber}
							isNumberRivalsCoincides={isNumberRivalsCoincides}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default GuessNumber