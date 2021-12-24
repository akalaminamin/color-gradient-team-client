import React from "react";
import { Button, Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="loader">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="ms-2">Loading...</span>
      </Button>
    </div>
  );
};

export default Loader;
