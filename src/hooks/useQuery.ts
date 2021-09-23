import { useEffect, useState } from "react";

export const useQuery = <TResult>(query: string) => {
    const [result, setResult] = useState<TResult>();
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const executeQuery = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_DEFAULT_BACKEND_URL}/${query}`);

                const result = await response.json();
                setResult(result);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        };

        executeQuery();
    }, [query]);

    return {
        isLoading,
        error,
        result
    };
};