import styled from 'styled-components';

const Error = styled.p`
background-color: white;
width: 60px;
min-height: 30px;
margin: 30px auto;
box-sizing: border-box;
`;



const ErrorMsg = () => {
    return (
        <Error>Произошла ошибка :(</Error>
    )
}

export default ErrorMsg;