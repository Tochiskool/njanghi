import { useRouteError } from "react-router-dom";

 const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!!! An Unexprecter Error just occured</h1>
      <p>Stay calm we are working on it</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage