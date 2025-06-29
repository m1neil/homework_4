import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './MessengerForm.css'

function MessengerForm({ onAddNewMessage }) {
	const [text, setText] = useState('')

	const onSubmitMessage = e => {
		e.preventDefault()

		if (!text.trim()) return

		onAddNewMessage({
			id: uuidv4(),
			text: text.trim(),
			likedBy: [],
			dislikedBy: []
		})

		setText('')
	}

	return (
		<form
			action="#"
			className="messenger-form"
			onSubmit={onSubmitMessage}>
			<input
				type="text"
				name="message"
				value={text}
				placeholder="Type a new message"
				className="messenger-form-input input input-br-none"
				onChange={e => setText(e.target.value)}
			/>
			<button
				disabled={!text.trim()}
				className="messenger-form-button button"
			>Send
			</button>
		</form>
	)
}

export default MessengerForm