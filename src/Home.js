import { useState } from "react"
import Bloglist from "./Bloglist";


//outputting lists by cucling blogs
const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum dolor...', author: 'mario', id: 1},
        {title: 'Revamped website', body: 'lorem ipsum dolor...', author: 'luigi', id: 2},
        {title: 'The ten rings', body: 'lorem ipsum dolor...', author: 'mario', id: 3}
    ]);
 
    return ( 
        <div className="home">
            {/* <Bloglist/>   returns blogs & blog not defined in Bloglist so use props */}

            {/* props defined */}
            {/* you can pass str vals as props hence '' */}
            <Bloglist blogs = { blogs } title = 'All blogs'/> 
            {/* filtered based on author */}
            <Bloglist blogs = { blogs.filter(blog => blog.author === 'mario') } title = "Mario's blogs "/>   

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