import { useEffect, useState } from 'react';
import {
	ButtonSend,
	ContainerChat,
	StyledChat,
	StyledForm,
	StyledIcon,
	StyledInput
} from './styles';
import { v4 } from 'uuid';
import socket from '../../socket/socket';

const ChatApp = () => {
	const [chatText, setChatText] = useState(['']);
	useEffect(() => {
		socket.on('test', data => {
			console.log(data);
			setChatText(prevMessages => [...prevMessages, data]);
		});
	}, []);

	console.log(chatText);
	return (
		<ContainerChat>
			<h1>chat</h1>
			<StyledChat>
				{chatText.map(message => {
					return <p key={v4()}>{message}</p>;
				})}
			</StyledChat>
			<StyledForm onSubmit={e => writeChat(e, chatText, setChatText)}>
				<StyledInput type='text' name='chatText' />
				<ButtonSend>
					<StyledIcon src='public/paper-plane-solid.svg' alt='' />
				</ButtonSend>
			</StyledForm>
		</ContainerChat>
	);
};

const writeChat = (e, chatText, setChatText) => {
	e.preventDefault();
	setChatText([...chatText, e.target.chatText.value]);
	// socket.emit('new-message', e.target.chatText.value);
	e.target.reset();
};

export default ChatApp;
