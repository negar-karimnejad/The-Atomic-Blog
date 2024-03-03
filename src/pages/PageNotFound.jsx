import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <section className="error-container pt-28">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
