import { useEffect, useState } from "react"
import GuessNumbers from "../GuessNumbers/GuessNumbers"
import Player from "../Player/Player"
import './GuessNumber.css'

function GuessNumber() {
	const [numbers, setNumbers] = useState(getArrayNumbers)
	const [indexGuessNumber, setIndexGuessNumber] = useState(0)
	const [numberLoserPlayer, setNumberLoserPlayer] = useState(null)
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

	useEffect(() => {
		if (
			indexGuessNumber === numbers.length ||
			players.some(player => player.number === null)
		) return

		const guessNumber = numbers[indexGuessNumber].value
		const idPlayerWinner = players.find(player => player.number === guessNumber)?.id

		if (indexGuessNumber === numbers.length - 1)
			setNumberLoserPlayer(idPlayerWinner)

		if (idPlayerWinner !== undefined) {
			updateGuessNumbers()
			setIndexGuessNumber(prevIndex => prevIndex + 1)
		}

		updatePlayers(idPlayerWinner, guessNumber)
	}, [players])

	const updatePlayers = (idPlayerWin, guessNumber) => {
		setPlayers(prevPlayers => (
			prevPlayers.map(player => {
				const newPlayer = { ...player, number: null, amountMove: 1 }
				if (
					idPlayerWin !== undefined &&
					player.id === idPlayerWin
				) newPlayer.guessNumbers = [...player.guessNumbers, guessNumber]
				return newPlayer
			})
		))
	}

	const updateGuessNumbers = () => {
		setNumbers(prevNumbers => (
			prevNumbers.map((number, index) => (
				index === indexGuessNumber ? { ...number, isGuess: true } : number
			))
		))
	}

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
		return players.find(player => (
			player.id === idRival && player.number === numberPlayer
		))
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

	let elLoserPlayer = null
	if (numberLoserPlayer || numberLoserPlayer === 0) {
		elLoserPlayer = (
			<div className="guess-number-loser">
				Пограв гравець {numberLoserPlayer}
			</div>
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
					{players.map(({ id, number, idRival, amountMove, guessNumbers }) => (
						<Player
							key={id}
							id={id}
							idRival={idRival}
							initNumber={number}
							amountMove={amountMove}
							guessNumbers={guessNumbers}
							onSetGuessNumber={onSetGuessNumber}
							isNumberRivalsCoincides={isNumberRivalsCoincides}
						/>
					))}
				</div>
				{elLoserPlayer}
			</div>
		</div>
	)
}

export default GuessNumber