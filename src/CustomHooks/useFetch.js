
import { useEffect, useState } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [ispending, setIspending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('EROR NOT AVIABLE URL!')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIspending(false)
                    setError(null)
                    console.log(data)
                })
                .catch(error => {
                    setError(error)
                })
        }, 0)
    }, [])
    return {data,ispending,error}
}

export default useFetch;