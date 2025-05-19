const PostCard = ({ post }) => {
  const { title, content, category } = post;


  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-12">
          <h3>{title}</h3>
        </div>
        <div className="col-12">
          <p>{content}</p>
        </div>
        <div className="col-12">
          <div><em>{category}</em></div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default PostCard
