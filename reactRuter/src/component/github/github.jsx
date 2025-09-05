import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const github = () => {
    const data = useLoaderData();
    console.log(data);
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //   fetch('https://api.github.com/users/octocat')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     }) 
    //     .catch(err => console.log(err));
    //   return () => {
    //     // This is the cleanup function, it runs when the component unmounts
    //     console.log('Component unmounted');
    //   };      
    //   // cleanup function
    // }, []);
    
    return (
        <>
            <div className='text-3xl text-center m-4 bg-gray-500 text-white p-4 rounded-lg'>GitHub Page</div>
            <div className='text-center text-2xl'>GitHub Followers: {data.followers} 
                <img src={data.avater_url} alt="github profile" />
            </div>
        </>
    )
}

export default github

export const githubloader = async () => {
    const responce = await fetch('https://api.github.com/users/octocat');
    return responce;
}
