import styled from 'styled-components';

const Load = styled.p`
background-color: white;
width: 60px;
min-height: 30px;
margin: 30px auto;
box-sizing: border-box;
`;



const Loading = () => {
    return (
        <Load>Пожалуйста подождите</Load>
    )
}

export default Loading;