import { propTypes } from "react-bootstrap/esm/Image";
import Comments from "./Comments";
import NewComment from "./NewComment";
const Post = ({ title, body, id, comments}) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments body = {comments}></Comments>
    <NewComment id = {id}/>
  </div>
  
}

export default Post;
