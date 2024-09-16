function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oops! The page you are looking for doesn't exist.
        </p>
        <a href="/" className="home-link">
          Go back to the homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
