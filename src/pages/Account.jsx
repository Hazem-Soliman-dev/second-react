import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center mt-16">
      <img
        className="h-96 w-96 rounded-full object-cover object-center mb-5"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <Button onClick={() => navigate(-1)}>back</Button>
    </div>
  );
};

export default Account;
