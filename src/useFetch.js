import { useState, useEffect } from "react"

//CUSTOM HOOK
const useFetch = (url) => {
    const [ data, setData] = useState(null);
    const [isPending, setIsPending ] = useState(true)
    const [error, setError] = useState(null)

    useEffect((url) => {
        // to abort fetching data if we goto new page 
        const abortFetch = new AbortController();
        // var responseClone;
        // fetch(url, {signal: abortFetch.signal})
        fetch(url)
            .then(res => {
                if(!res.ok){
                    //account for errors after server is reached
                    throw Error("couldn't fetch data for that resource")
                }
                // responseClone = res.clone();
                return res.json()
            })
            .then(data => {
                setData(data)
                console.log(data)
                setIsPending(false)
            },

            // function (rejectionReason) { 
            //     console.log('Error parsing JSON from response:', rejectionReason, responseClone)
            //     responseClone.text() 
            //     .then(function (bodyText) {
            //     console.log('Received the following instead of valid JSON:', bodyText);
            //     });
            // })
            
            )
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                    console.log(abortFetch);
                }else{
                    setError(err.message)
                    setIsPending(false)
                }
                
            })
            return () => abortFetch.abort();
    }, [])

    return {data, isPending, error};
}
 
export default useFetch;