import PostsList from "../components/PostsList"

const PostsPage = ({ posts }) => {
  return (
    <>
      <div className="container">
        <h1>Posts Page</h1>

        <hr />

        <PostsList posts={posts} />
      </div>
    </>
  )
}

export default PostsPage
