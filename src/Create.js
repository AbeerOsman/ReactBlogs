import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Abeer');
    const [isloading, setIsLoading] = useState(false)
    // useHistory() Hook helps to go forword/backword throgh the pages 
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //The preventDefault() method stops the default behavior of the browser
        const blog = { title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        // after we find the endpoint and we send the data do this:
        .then(() => {
            console.log("new blog added");
            setIsLoading(false);
            // history.go(-1); means go backworld one page, it goes to last page that we in it befor this page
            // but in our case, we need to go after the submition to the home page where the all blogs are there, to that:
            history.push('/'); 

        })
    }
    return (
        <div className="create">
            <h3>Create a New Blog</h3>

            <form onSubmit={handleSubmit}>

                <label >Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label >Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>

                </textarea>

                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Abeer">Abeer</option>
                    <option value="Yaser">Yaser</option>
                </select>

                {isloading && <button disabled>Adding Blog</button>}
                {!isloading && <button >Add Blog</button>}

                <p>{title}</p>
                <br />
                <p>{body}</p>
                <br />
                <p>{author}</p>

            </form>

        </div>);
}

export default Create;