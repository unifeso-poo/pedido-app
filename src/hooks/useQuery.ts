import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const useQuery = <TResult>(query: string) => {
    const [result, setResult] = useState<TResult>();
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const executeQuery = async () => {
            try {
                setIsLoading(true);
                const accessToken = await getAccessTokenSilently();
                const response = await fetch(`https://localhost:5001${query}`, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                });
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
    }, [getAccessTokenSilently, query]);

    return {
        isLoading,
        error,
        result
    };
};