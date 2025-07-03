import { useEffect, useState } from 'react'
import './Player.css'

function Player({
	id,
	initNumber,
	amountMove,
	guessNumbers,
	onSetGuessNumber,
	isNumberRivalsCoincides,
}) {
	const [number, setNumber] = useState('')

	const handleNumberChange = e => {
		const value = e.target.value
		const regExp = /\D/
		if (regExp.test(value) || value.length > 1) return
		setNumber(value)
	}

	const submitNumber = e => {
		e.preventDefault()
		if (!number) return
		onSetGuessNumber(id, parseInt(number))
	}

	useEffect(() => {
		if (initNumber === null)
			setNumber('')
	}, [initNumber])

	let isBlockButton = isNumberRivalsCoincides(id, parseInt(number))

	let elGuessNumbers
	if (guessNumbers.length > 0)
		elGuessNumbers = (
			<div className='player-guess-numbers'>
				Відгадані числа: {guessNumbers.join(' ')}
			</div>
		)

	return (
		<div className="player">
			<div className="player-form">
				<h4 className="player-number">Гравець: №{id}</h4>
				<div className="player-number-row">
					<label
						htmlFor={`guess-number-${id}`}
						className="player-label">
						Число
					</label>
					<input
						type="text"
						value={number}
						onChange={handleNumberChange}
						disabled={!amountMove}
						name={`guess-number-${id}`}
						id={`guess-number-${id}`}
						className="player-input input input-px-10 input-h-45"
					/>
				</div>
				<button
					onClick={submitNumber}
					disabled={isBlockButton || !amountMove}
					className="player-button button">
					Make a move
				</button>
				{elGuessNumbers}
			</div>
		</div>
	)
}

export default Player