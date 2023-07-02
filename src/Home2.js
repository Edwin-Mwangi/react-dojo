import { useState, useEffect } from "react"
import Bloglist from "./Bloglist";


//outputting lists by cycling blogs
const Home = () => {
    const [ blogs, setBlogs] = useState(null);

    //to set loading...
    const [isPending, setIsPending ] = useState(true)
    //to enable error output in DOM
    const [error, setError] = useState(null)

    //[] empty array for only 1st load
    useEffect(() => {
        fetch("dummy")
            .then(res => {
                //account for errors after server is reached..check catch
                //res is an obj with many properties eg ok
                if(!res.ok){
                    throw Error("couldn't fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                //console.log(data)
                setBlogs(data)
                setIsPending(false)
            })
            .catch(err => {
                //doesn't account for errors after server is reached
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
    }, [])

    //unnessary as data now called from server

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
 
    return ( 
        <div className="home">
            {/* loading txt... */}
            { isPending && <div>Loading ...</div> } 

            {/* props defined */}
            {/* bloglist has error as fetch is async(takes time) so blogs still null */} 
            {/* to solve error use conditional templating ie {blogs && ...} */}
            { blogs && < Bloglist blogs = { blogs } title = 'All blogs' /> }
            
            {/* filtered based on author */}
            { blogs && <Bloglist blogs = { blogs.filter(blog => blog.author === 'mario') } title = "Mario's blogs"/>}

            {/* error in DOM */}
            { error && <div>{ error}</div> } 

        </div>
     );
}
 
export default Home;