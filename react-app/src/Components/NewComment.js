import {useState} from "react";
import axios from 'axios';

const NewComment = (id) => {
  const [comment, setComment] = useState();

  const onSubmit = () => {
      console.log("new comment has been posted!");
    axios.post(`http://localhost:3002/post/${id}/comment`,
        {"comment": comment}
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  }

  return <div>
    <div>
      <input type="text" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default NewComment;