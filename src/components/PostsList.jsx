import { useContext } from "react"
import PostsContext from "../assets/contexts/PostsContext"
import PostCard from "./PostCard";

const PostsList = () => {
  const posts = useContext(PostsContext);

  return (
    <>
      <div className="row">
        <div className="col-auto bg-secondary mx-auto px-5 rounded text-white">
          <h2 className="text-center">Post List</h2>
        </div>
      </div>

      <div className="col 12">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostsList
