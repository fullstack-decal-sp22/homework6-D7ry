const Comments = ({ body }) => {
    return <div font-size style={{ textAlign: 'left', marginBottom: '12px'}}>
      {
        body ? 
        body.map(c => <p>{c}</p>) : "Nobody has commented. Leave a message!"
      }

    </div>
  }
export default Comments;