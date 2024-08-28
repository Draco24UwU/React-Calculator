import { useState, useEffect } from "react"

const useFetch = (url: string) => {

    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState<null | Error>(null);
    const [controller, setcontroller] = useState<AbortController | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        setcontroller(abortController);
        setLoading(true);
        fetch(url, {signal: abortController.signal})
            .then((res) => res.json())
            .then((data) => setdata(data))
            .catch((error: Error)=> {
                error.name == "AbortError" ? console.log("Request cancelled") : seterror(error);
            })
            .finally(()=> setLoading(false))
        return () => abortController.abort();

    },[url]);

    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
        }
    }

    return {data, loading, error, handleCancelRequest};
}

export default useFetch;