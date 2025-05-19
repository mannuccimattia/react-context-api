import { useContext } from "react"
import PostsContext from "../assets/contexts/PostsContext"
import PostCard from "./PostCard";

const PostsList = () => {
  const posts = useContext(PostsContext);

  return (
    <>
      <h2>Post List</h2>

      <hr />

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostsList
