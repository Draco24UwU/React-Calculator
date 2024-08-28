import { useState, useEffect } from "react"

interface Dog {
    fileSizeBytes: number,
    url: string
}

const useFetchMany = (url: string, fetchNumber: number) => {

    const [data, setdata] = useState<Dog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState<null | Error>(null);
    const [controller, setcontroller] = useState<AbortController | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        setcontroller(abortController);
        setLoading(true);
        for (let n = 0; n < fetchNumber; n++) {
            fetch(url, {signal: abortController.signal})
            .then((res) => res.json())
            .then((data) => setdata(prevData => [...prevData, data]))
            .catch((error: Error)=> {
                error.name == "AbortError" ? console.log("Request cancelled") : seterror(error);
            })
            .finally(()=> setLoading(false))
        }
        return () => abortController.abort();

    },[url, fetchNumber]);

    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
        }
    }

    return {data, loading, error, handleCancelRequest};
}

export default useFetchMany;