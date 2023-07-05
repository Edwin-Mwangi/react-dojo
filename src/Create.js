import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add blog</button>
                <p>{ title}</p>
            </form>
        </div>
     );
}
 
export default Create;