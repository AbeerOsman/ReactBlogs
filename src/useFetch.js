// this file is a "Custom Hook" mean we creating a custom hook for the fetch feature, where it helps us to have a reusable component,
// so the feature of fetching is avilable to use anywhere by just line of code.

// the first step: creat a file inside src file.

import { useState, useEffect } from "react";
// second: creat function for the same file name.
// this file does 3 features [fetching for data, loading data, send error msg id there]

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {

            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data from this server...')
                    }
                    else
                        return res.json();
                })

                .then(data => {
                    setData(data);
                    setIsloading(false);
                    setError(null); //if the data is fetched susseccfully 
                })

                .catch(err => {
                    setError(err.message);
                    setIsloading(false); //if the data is NOT fetched susseccfully

                })

        }, 1000);
    }, [url]);



// this function "useFetch" should returen the 3's feature that does: 
return { data, isLoading, error };

} 

// we should write this line to make us use this function outside thi component/file.
export default useFetch; 