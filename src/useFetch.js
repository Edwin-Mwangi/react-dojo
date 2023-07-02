import { useState, useEffect } from "react"

//CUSTOM HOOK
const useFetch = (url) => {
    const [ blogs, setBlogs] = useState(null);
    const [isPending, setIsPending ] = useState(true)
    const [error, setError] = useState(null)

    useEffect((url) => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    //account for errors after server is reached
                    throw Error("couldn't fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [])

    return {blogs, isPending, error};
}
 
export default useFetch;