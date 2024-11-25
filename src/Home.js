import { useState, useEffect } from 'react';
import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All The Blogs" />}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Abeer")} title="Abeer's Blogs" />}
        </div>
    );
}

export default Home; 