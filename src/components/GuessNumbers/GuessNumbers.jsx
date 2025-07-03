import './GuessNumbers.css'

function GuessNumbers({ numbers, indexGuessNumber }) {
	const getStylesNumber = (isGuess, index) => {
		const classGuessNumber = isGuess ? '-show' : ''
		const classCurrentGuess = index === indexGuessNumber ? '-current' : ''
		return `guess-numbers-item ${classCurrentGuess} ${classGuessNumber}`.trim()
	}

	return (
		<div className="guess-numbers">
			<div className="guess-numbers-label">Число</div>
			<div className="guess-numbers-items">
				{numbers.map(({ value, isGuess }, index) => (
					<div key={index} className={getStylesNumber(isGuess, index)}>
						<span>{value}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default GuessNumbers