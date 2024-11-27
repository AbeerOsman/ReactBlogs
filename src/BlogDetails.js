import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // useParams is a hook that allows you to have access to dynamic parameters in the URL(Uniform Resource Locator)
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs'+ {id});
    const history = useHistory();
    const handleDelete =() =>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
           { isLoading && <div>Loading...</div>}
           {error && {error}}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;