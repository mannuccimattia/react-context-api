import PostsList from "../components/PostsList"
import { useAlertContext } from "../assets/contexts/AlertContext"
import Alert from "../components/Alert";

const PostsPage = () => {

  const { alertData, setAlertData } = useAlertContext();

  const handleAlert = () => {
    (alertData.type != "" && alertData.message != "") ? (
      setAlertData({
        type: "",
        message: ""
      })
    ) : (
      setAlertData({
        type: "warning",
        message: `https://www.w3schools.com/`
      })
    )
  };



  return (
    <>
      <div className="container">
        <h1>Posts Page</h1>

        <hr />

        <PostsList />

        <hr />

        <button
          className={
            `btn mb-3 ${alertData.type && alertData.message ? "btn-secondary" : "btn-primary"}`
          }
          onClick={handleAlert}
        >
          Get more
        </button>
        <div>
          {alertData.type != "" && alertData.message != "" ? <Alert /> : ""}
        </div>
      </div>
    </>
  )
}

export default PostsPage
