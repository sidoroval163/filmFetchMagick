import { useState, useCallback } from "react"
import { fetchMovies } from "./api";


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState(null);

    const loadMovies = useCallback(() => {
        setIsLoading(true);
        setIsError(false);
        fetchMovies()
            .then((movies) => {
                setMovies(movies);
            })
            .catch(() => {
                setIsError(true);
                setMovies(null);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [setIsLoading, setMovies])

    return {
        isLoading,
        isError,
        loadMovies,
        movies,
    }

}