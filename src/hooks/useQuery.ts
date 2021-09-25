import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const useQuery = <TResult>(path: string) => {
    const [result, setResult] = useState<TResult>();
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const { getAccessTokenSilently } = useAuth0();


    useEffect(() => {
        const execute = async () => {
            try {
                setIsLoading(true);
                const accessToken = await getAccessTokenSilently();

                const requestOptions = {
                    method: "GET",
                    headers: new Headers({
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    })
                };

                const response = await fetch(`https://localhost:5001${path}`, requestOptions);
                const result = await response.json();
                setResult(result.data);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        };

        execute();
    }, [getAccessTokenSilently, path]);

    return {
        isLoading,
        error,
        result
    };
};