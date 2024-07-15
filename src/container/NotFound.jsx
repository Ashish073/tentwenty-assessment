import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not Found - TenTwenty</title>
      </Helmet>
      <div>Not Found</div>
    </div>
  );
}

export default NotFound;
