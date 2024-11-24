const BlogList = ({blogs, title, handelDelete}) => {
    return ( 
        <div className="Blog-List">
            <h1>{title}</h1>
            {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id} >
                <h2>{blog.title}</h2>
                <p>The author : {blog.author}</p>
                <button onClick={()=>handelDelete(blog.id)}>Delete Blog</button>
             </div>
            ))}
        </div>
     );
}
 
export default BlogList;