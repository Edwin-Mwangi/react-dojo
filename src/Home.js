import { useState, useEffect } from "react"
import Bloglist from "./Bloglist";


//outputting lists by cycling blogs
const Home = () => {
    const [ blogs, setBlogs] = useState(null);

    const [ name, setName ] = useState('mario')

    //rans when render happens
    //can specify only which renders it shouls ran using array as 2nd arg
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

    //passed as prop and called in Bloglist.js
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
 
    return ( 
        <div className="home">
            {/* props defined */}
            {/* bloglist has error as fetch is async(takes time) so blogs still null */} 
            {/* to solve error use conditional templating ie {blogs && ...} */}
            { blogs && < Bloglist blogs = { blogs } title = 'All blogs' handleDelete = { handleDelete }/> }
            
            {/* filtered based on author */}
            { blogs && <Bloglist blogs = { blogs.filter(blog => blog.author === 'mario') } handleDelete = { handleDelete } title = "Mario's blogs"/>}

               
            {/* changing name to show useEffect */}
            {/* only rans when u change name */}
            <button onClick={ () => setName('luigi')}>Change name</button>
            <p>{ name }</p>

            {/* redudant code below */}
            {/* {blogs.map((blog) => ( //jsx goes inside () instead 0f {}
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            )
            )} */}
        </div>
     );
}
 
export default Home;