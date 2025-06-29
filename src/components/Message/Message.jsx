import './Message.css'

function Message({ id, text, amountLikes, onToggleLike, onToggleDislike, isLike, isDislike }) {
	return (
		<div className="message">
			<div className="message-text">{text}</div>
			<div className="message-actions">
				<button
					type="button"
					className={`massage-button button button-green ${isLike ? '-active' : ''}`}
					onClick={() => onToggleLike(id)}>
					Like
				</button>
				<button
					type="button"
					className={`massage-button button ${isDislike ? '-active' : ''}`}
					onClick={() => onToggleDislike(id)}>
					dislike
				</button>
			</div>
			<div className="message-amount">Likes: {amountLikes}</div>
		</div>
	)
}

export default Message