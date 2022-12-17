import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        &copy; Copyright {new Date().getFullYear()}, Joel Dietz, Inc
      </small>
    </div>
  );
}
