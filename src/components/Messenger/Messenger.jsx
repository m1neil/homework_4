import { useState } from 'react';
import { messages } from '../../messengerData'
import './Messenger.css';
import MessageList from '../MessageList/MessageList';
import MessengerForm from '../MessengerForm/MessangerForm';

function Messenger() {
	const [messageList, setMessageList] = useState(messages)
	const userId = 34

	const onAddNewMessage = newMessage => {
		setMessageList(prevList => [...prevList, newMessage])
	}

	const onToggleLike = idMessage => {
		setMessageList(prevList => (
			prevList.map(message => (
				message.id === idMessage ? (
					{
						...message,
						likedBy: toggleIncludeElement(userId, message.likedBy),
						dislikedBy: message.dislikedBy.filter(id => id !== userId)
					}
				) : message
			))
		))
	}

	const onToggleDislike = idMessage => {
		setMessageList(prevList => (
			prevList.map(message => (
				message.id === idMessage ? (
					{
						...message,
						likedBy: message.likedBy.filter(id => id !== userId),
						dislikedBy: toggleIncludeElement(userId, message.dislikedBy)
					}
				) : message
			))
		))
	}

	const toggleIncludeElement = (idElement, list) => {
		return list.some(id => id === idElement) ?
			list.filter(id => id !== idElement) :
			[...list, idElement]
	}

	return (
		<div className="messenger">
			<div className="messenger-container">
				<MessageList
					messageList={messageList}
					userId={userId}
					onToggleLike={onToggleLike}
					onToggleDislike={onToggleDislike}
				/>
				<MessengerForm onAddNewMessage={onAddNewMessage} />
			</div>
		</div>
	)
}

export default Messenger