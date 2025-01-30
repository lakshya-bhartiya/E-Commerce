import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to home page if user is logged in
    }
  }, [navigate]);

  return <>{children}</>; // Render children if user is not logged in
};

export default Auth;
