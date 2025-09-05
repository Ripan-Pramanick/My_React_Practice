import React, { useEffect, useState } from 'react'

const Github = () => {
    // We'll initialize state with an empty object since the API returns a single user object.
    const [data, setData] = useState({});

    useEffect(() => {
      // The API endpoint for a user's profile returns a user object which includes the follower count.
      fetch('https://api.github.com/users/octocat')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        }) 
        .catch(err => console.log(err));
        
        // This cleanup function is good to have, but not strictly necessary for this specific case
        // as the effect only runs once and there are no ongoing subscriptions to clean up.
        return () => {
          console.log('Component unmounted');
        };
        
    }, []);
    
    return (
        <>
            <div className='text-3xl text-center m-4 bg-gray-500 text-white p-4 rounded-lg'>GitHub Page</div>
            {/* The new API response directly contains the followers property, so we can access it here. */}
            <div className='text-center text-2xl'>GitHub Followers: {data.followers} </div>
        </>
    )
}

export default Github
