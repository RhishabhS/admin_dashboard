import {useRouteError} from "react-router-dom"
import './ErrorPage.css'
const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
  return (
    <div className="error-container">
    <h1 className="error-title">We have an error!</h1>
    <p className="error-desc">{error.data}</p>
    </div>
            
  )
}

export default ErrorPage;