import { useState, useEffect } from "react"

//CUSTOM HOOK
const useFetch = (url) => {
    const [ blogs, setBlogs] = useState(null);
    const [isPending, setIsPending ] = useState(true)
    const [error, setError] = useState(null)

    useEffect((url) => {
        // to abort fetching data if we goto new page
        const abortFetch = new AbortController();
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
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(err.message)
                    setIsPending(false)
                }
                
            })
            return () => abortFetch.abort();
    }, [])

    return {blogs, isPending, error};
}
 
export default useFetch;