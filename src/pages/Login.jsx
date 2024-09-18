import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`http://localhost:3000/user`, {
        params: user,
      });

      if (data.length > 0) {
        navigate("/");
        onLogin("user");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800 justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-black dark:text-white">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-black dark:text-white">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-black dark:text-white">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black dark:text-white"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-black dark:text-white">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black dark:text-white"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            login
          </Button>
          {error && (
            <Typography variant="small" color="red" className="mt-4">
              {error}
            </Typography>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Login;
