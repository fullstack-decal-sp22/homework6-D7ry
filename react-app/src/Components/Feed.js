import React, {useState, useEffect}from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';

const Feed = () => {
  const [data, setData] = useState();
  const fetchData = () => {
    axios.get('http://localhost:3002/posts').then((a_response) => setData(a_response.data))
    .catch((error) => console.log(error));
  }
  
  //anything changes, fetch data.
  useEffect(() => {
    fetchData();
  }, [data]);

  return (

    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data ? //if not exist, simply show loading 
        data.map(d =>
           <Post title={d.title} body={d.body} id = {d.id} comments = {d.comments}/>
        ) : 'loading'
      }
      <NewPost/>
    </div>
  )

}


export default Feed;
