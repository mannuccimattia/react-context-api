const PostCard = ({ post }) => {
  const { title, content, category } = post

  return (
    <div className="mt-4">
      <div>{title}</div>
      <div>{content}</div>
      <div>{category}</div>
    </div>
  )
}

export default PostCard
