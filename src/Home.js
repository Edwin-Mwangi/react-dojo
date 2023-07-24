import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs/")

 
    return ( 
        <div className="home">
            { error && <div className="error">{ error}</div> } 
            { isPending && <div>Loading ...</div> } 
            //error is here
            { blogs && < Bloglist blogs = { blogs } title = 'All blogs' /> }
            { blogs && <Bloglist blogs = { blogs.filter(blog => blog.author === 'mario') } title = "Mario's blogs"/>}
        </div>
     );
}
 
export default Home;