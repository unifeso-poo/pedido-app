import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export const useMutation = <TBody, TResult>(path: string) => {
    const [result, setResult] = useState<TResult>();
    const [error, setError] = useState<any>();
    const [isExecuting, setIsExecuting] = useState(false);
    const { getAccessTokenSilently } = useAuth0();

    const put = async (body: TBody) => {
        try {
            setIsExecuting(true);
            const accessToken = await getAccessTokenSilently();

            const requestOptions = {
                method: "PUT",
                headers: new Headers({
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(body)
            };

            const response = await fetch(`https://localhost:5001/v1${path}`, requestOptions);
            const result = await response.json();
            setResult(result.data);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setIsExecuting(false);
        }
    };

    return {
        isExecuting,
        error,
        result,
        put
    };
};