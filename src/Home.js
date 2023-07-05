import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    
    const {isPending, error, blogs} = useFetch("http://localhost:8000/blogs")

 
    return ( 
        <div className="home">
            { isPending && <div>Loading ...</div> } 
            { blogs && < Bloglist blogs = { blogs } title = 'All blogs' /> }
            { blogs && <Bloglist blogs = { blogs.filter(blog => blog.author === 'mario') } title = "Mario's blogs"/>}
            { error && <div>{ error}</div> } 
        </div>
     );
}
 
export default Home;