import { useState, useEffect } from "react"
import Bloglist from "./Bloglist";


//outputting lists by cycling blogs
const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum dolor...', author: 'mario', id: 1},
        {title: 'Revamped website', body: 'lorem ipsum dolor...', author: 'luigi', id: 2},
        {title: 'The ten rings', body: 'lorem ipsum dolor...', author: 'mario', id: 3}
    ]);

    const [ name, setName ] = useState('mario')

    //rans when render happens
    //can specify only which renders it shouls ran using array as 2nd arg
    //[] empty array for only 1st load
    useEffect(() => {
        console.log('useEffect ran')
        console.log(blogs)
    }, [ name ])

    //passed as prop and called in Bloglist.js
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
 
    return ( 
        <div className="home">
            {/* <Bloglist/>   returns blogs & blog not defined in Bloglist so use props */}

            {/* props defined */}
            {/* you can pass str vals as props hence '' */}
            <Bloglist blogs = { blogs } title = 'All blogs' handleDelete = { handleDelete }/> 
            {/* filtered based on author */}
            <Bloglist blogs = { blogs.filter(blog => blog.author === 'mario') } handleDelete = { handleDelete } title = "Mario's blogs"/>   

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
 
export default Home1;