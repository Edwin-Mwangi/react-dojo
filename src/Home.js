import { useState, useEffect } from "react"
import Bloglist from "./Bloglist";


//outputting lists by cycling blogs
const Home = () => {
    const [ blogs, setBlogs] = useState(null);

    //to set loading...
    const [isPending, setIsPending ] = useState(true)

    //[] empty array for only 1st load
    useEffect(() => {
        fetch()
            .then(res => {
                return res.json()
            })
            .then(data => {
                //console.log(data)
                setBlogs(data)
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

        </div>
     );
}
 
export default Home;