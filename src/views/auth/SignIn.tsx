import Button from "components/ui/Button";
import Input from "components/ui/Input";
import AuthContext from "context/AuthContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { login } = useContext(AuthContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target);
    login?.({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  };

  return (
    <div className="flex min-h-full min-w-[50%] flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={require("assets/images/logo.png")}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input
                className={`w-full`}
                type={"email"}
                name={"email"}
                placeholder={""}
                autoComplete="email"
                onChange={function (
                  e: React.ChangeEvent<HTMLInputElement>
                ): void {
                  // throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Input
                className={`w-full`}
                type={"password"}
                name={"password"}
                placeholder={""}
                autoComplete="current-password"
                onChange={function (
                  e: React.ChangeEvent<HTMLInputElement>
                ): void {
                  // throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
          <div>
            <Button type="submit" isAction={true} className="w-full">
              Sign in
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/auth/sign-up"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
