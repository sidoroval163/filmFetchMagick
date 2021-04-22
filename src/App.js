import styled from 'styled-components';
import { useMovies } from './services/useMovies';
import FetchBtn from "./components/fetchBtn";
import FilmsList from "./components/filmsList";
import ErrorMsg from './components/errorMsg';
import Loading from './components/loading';


const Wrapper = styled.div`
display:flex;
width:100%;
flex-direction:column;
justify-content:center;
`;
const Header = styled.h1`
background-color: white;
min-height: 30px;
margin: 30px auto;
box-sizing: border-box;
`;
function App() {
  const { isLoading, isError, loadMovies, movies, } = useMovies();
  const isShown = !isLoading && movies && movies.length;
  return (
    <Wrapper>
      <Header>Movies</Header>
      <FetchBtn callback={loadMovies}></FetchBtn>
      {isError && <ErrorMsg />}
      {isLoading && <Loading />}
      {isShown && < FilmsList movies={movies} />}
    </Wrapper >
  );
}

export default App;
