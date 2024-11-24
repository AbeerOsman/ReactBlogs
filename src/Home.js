import {useState, useEffect} from 'react';
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBloges]= useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        setTimeout(()=>{
            
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            if (!res.ok){
                throw Error('Could not fetch the data from this server...')   
            }
            else
            return res.json();
        })

        .then(data => {
            setBloges(data);
            setIsloading(false); 
            setError(null); //if the data is fetched susseccfully 
        })

        .catch(err =>{
            setError(err.message);
            setIsloading(false); //if the data is NOT fetched susseccfully

        })
    
        }, 1000)

        
    }, []);


    const handelDelete= (id)=> {
        const newBlog= blogs.filter(blog => blog.id !==id);
        setBloges(newBlog);
    }
    return ( 
        <div className="home">
            {error && <div>{error}</div> }
            {isLoading && <div>Loading...</div> }
           { blogs && <BlogList blogs={blogs} title="All The Blogs" handelDelete={handelDelete}/>}

           {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === "Abeer")} title="Abeer's Blogs"/>}
        </div>
     );
}
 
export default Home; 