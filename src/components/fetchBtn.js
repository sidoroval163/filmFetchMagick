import styled from 'styled-components';

const Button = styled.button`
background-color: white;
width: 160px;
min-height: 30px;
margin: 30px auto;
box-sizing: border-box;
text-align: left;
`;



const FetchBtn = ({ callback }) => {
    return (
        <Button onClick={callback}>Load</Button>
    )
}

export default FetchBtn;