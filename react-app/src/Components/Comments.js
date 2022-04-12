/*Comments belong to a single post. */
const Comments = ({ comments }) => {
    return <div font-size style={{ textAlign: 'left', marginBottom: '12px'}}>
      {
        comments ? 
        comments.map(c => <p>{c}</p>) : "Nobody has commented. Leave a message!"
      }

    </div>
  }
export default Comments;