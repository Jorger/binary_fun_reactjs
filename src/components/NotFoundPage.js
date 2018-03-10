import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <h2 className="title">Page not found!</h2>
        <Link to="/" className="button">Home</Link>
    </div>
);

export default NotFoundPage;