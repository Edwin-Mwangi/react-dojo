//writing blog lists on each page component is redudant so...bloglist is a reusable component
//though we must now receive props from parent to work correctly

import { Link } from "react-router-dom/cjs/react-router-dom";

//undestructured
// const Bloglist = ( props ) => {
    // const blogs = props.blogs;
    // const title = props.title;
    //console.log(props, blogs) //to see how they look like...blogs is an array inside props obj

//destructured
const Bloglist = ( {blogs, title, handleDelete} ) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                // to click the blogs to goto individual blogs
                <Link to={`/blogs/${ blog.id }`}>
                    <div className="blog-preview" key={blog.id}>
                        <h3>{ blog.title }</h3>
                        <p>Written by { blog.author }</p>
                        {/* //to del list handleDel() defined and passed as prop in parent(Home.js) */}
                        <button onClick={() => {handleDelete(blog.id)}}>Delete Blog</button>
                    </div>
                </Link>
                
            ))}
        </div>
     );
}
 
export default Bloglist;