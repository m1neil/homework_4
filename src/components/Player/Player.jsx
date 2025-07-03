import { useState } from 'react'
import './Player.css'

function Player({ id, idRival, initNumber, amountMove, onSetGuessNumber, isNumberRivalsCoincides }) {
	const [number, setNumber] = useState(initNumber === null ? '' : initNumber)
	const [isBlockButton, setIsBlockButton] = useState(false)

	const handleNumberChange = e => {
		const value = e.target.value
		const regExp = /\D/
		if (regExp.test(value) || value.length > 1) return
		setIsBlockButton(isNumberRivalsCoincides(idRival, parseInt(value)))
		setNumber(value)
	}

	const submitNumber = e => {
		e.preventDefault()
		if (!number) return
		onSetGuessNumber(id, parseInt(number))
	}

	return (
		<div className="player">
			<div action="#" className="player-form">
				<div className="player-row">
					<label htmlFor="guess-number" className="player-label">Число</label>
					<input type="text" value={number} onChange={handleNumberChange} name="guess-number" id="guess-number" className="player-input input" />
				</div>
				<button onClick={submitNumber} disabled={isBlockButton || !amountMove} className="player-button button">Make a move</button>
			</div>
		</div>
	)
}

export default Player