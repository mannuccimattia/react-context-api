import { useAlertContext } from "../assets/contexts/AlertContext";

const Alert = () => {

  const { alertData, setAlertData } = useAlertContext()
  const { type, message } = alertData;

  return (
    <div className={`alert alert-${type}`}>
      <span>Visit: </span>
      <a
        href="https://www.w3schools.com/"
        target="_blank"
        className="text-decoration-none"
      >
        {message}
      </a>
    </div>
  );
}

export default Alert
