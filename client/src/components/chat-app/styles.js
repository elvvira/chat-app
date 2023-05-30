import styled from 'styled-components';

const ContainerChat = styled.div`
	width: 80%;
	margin-right: auto;
	margin-left: auto;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-align: center;
`;
const StyledChat = styled.div`
	border: 1px solid black;
	width: 100%;
	height: 300px;
	border-radius: 1rem;
	/* overflow: scroll; */
	font-size: 1.5rem;
	font-weight: bold;
	padding-right: 2rem;
	text-align: right;
`;
const StyledInput = styled.input`
	width: 88%;
	margin-right: 1rem;
	height: 30px;
	border-radius: 0.8rem;
	border: 1px solid black;
`;
const StyledForm = styled.form`
	display: flex;
	align-items: center;
`;
const ButtonSend = styled.button`
	background-color: black;
	border-radius: 3rem;
	width: 36px;
	height: 36px;
	border: transparent;
	color: white;
`;
const StyledIcon = styled.img`
	filter: invert(1);
	width: 20px;
`;
export {
	ContainerChat,
	StyledChat,
	StyledInput,
	ButtonSend,
	StyledForm,
	StyledIcon
};
