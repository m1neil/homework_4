import Message from '../Message/Message'
import './MessageList.css'

function MessageList({ userId, messageList, onToggleLike, onToggleDislike }) {

	const isIncludeUserId = listIdUser => {
		return listIdUser.includes(userId)
	}

	return (
		<ul className="message-list">
			{messageList.map(({ id, text, likedBy, dislikedBy }) => (
				<li key={id} className='message-list-item'>
					<Message
						id={id}
						text={text}
						onToggleLike={onToggleLike}
						onToggleDislike={onToggleDislike}
						amountLikes={likedBy.length}
						isLike={isIncludeUserId(likedBy)}
						isDislike={isIncludeUserId(dislikedBy)}
					/>
				</li>
			))}
		</ul>
	)
}

export default MessageList