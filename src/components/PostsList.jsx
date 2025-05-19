const PostsList = ({ posts }) => {
  return (
    <>
      <h2>Post List</h2>

      <hr />

      {posts.map(post => (
        <div key={post.id} className="mt-4">
          <div>{post.title}</div>
          <div>{post.content}</div>
          <div>{post.category}</div>
        </div>
      ))}
    </>
  )
}

export default PostsList
