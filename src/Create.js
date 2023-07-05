import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = () => {
        e.preventDefault();
        setIsPending(true)
        //store input data in an obj literal (blog)
        const blog = { title, blog, author }
        console.log(blog)

        //POST request
        fetch("http://localhost:8000/blogs/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added')
                setIsPending(false)
            })
            .catch((err) => console.log('Post error: ', err.message))
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    // 2 way data binding
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value)}
                 />
                 <label>Blog Body</label>
                <textarea 
                    type="text"
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value)}
                 />
                 <label>Blog Author</label>
                 <select>
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value)}
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                 </select>
                 {!isPending && <button>Add blog</button>}
                 {!isPending && <button disabled>Adding blog...</button>}
                <p>{ title}</p>
            </form>
        </div>
     );
}
 
export default Create;