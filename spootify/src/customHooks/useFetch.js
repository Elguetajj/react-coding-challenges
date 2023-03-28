import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, config=null, axiosInstance=null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();
        const caller = axiosInstance ? axiosInstance : axios
        setLoading(true)
        caller.get(url, config, { cancelToken: source.token })
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            setError('An error occurred. Awkward..')
        })
        .finally(() =>{
            setLoading(false)
        })

        return () => {
            source.cancel();
        }
        
    }, [url])

    return { data, loading, error }
}

export default useFetch;
