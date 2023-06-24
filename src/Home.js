import { useState } from "react"


//outputting lists by cucling blogs
const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum dolor...', author: 'mario', id: 1},
        {title: 'Revamped website', body: 'lorem ipsum dolor...', author: 'luigi', id: 2},
        {title: 'The ten rings', body: 'lorem ipsum dolor...', author: 'yoshi', id: 3}
    ]);
 
    return ( 
        <div className="home">
            {blogs.map((blog) => ( //jsx goes inside () instead 0f {}
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            )
            )}
        </div>
     );
}
 
export default Home;