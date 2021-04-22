import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.button`
background-color: ${props => props.active ?
        "#d1db56" :
        "white"
    };
margin: 10px auto;
box-sizing: border-box;
width: 200px;
border: 1px solid black;
padding: 6px;
text-align: left;
`;



const FilmsList = ({ movies }) => {
    const [isActive, setActive] = useState(false);
    const onCardClick = (title) => { setActive(title); };

    return (
        movies.map((elem) => {
            const { title } = elem;
            return (
                <Card onClick={() => onCardClick(title)} active={isActive === title} key={title}>{title}</Card>
            )
        })
    );


}

export default FilmsList;