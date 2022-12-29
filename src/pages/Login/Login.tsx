import React, { useState } from "react";
import { Link } from "react-router-dom";

type Input = {
  name: string;
  email: string;
  pass: string;
  img: string;
};

function Login() {
  const [inputText, setInputText] = useState<Input>({
    name: "",
    email: "",
    pass: "",
    img: "",
  });

  const [btnDisable, setBtnDisable] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="my-12 pt-12">
        <div className="container">
          <div className="w-full max-w-lg bg-white rounded-lg mx-auto p-12">
            <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-8 font-sans">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Profile Picture
                </label>
                <input
                  value={inputText.img}
                  onChange={(e) =>
                    setInputText({ ...inputText, img: e.target.value })
                  }
                  type="text"
                  placeholder="Only Url"
                  className="input input-bordered w-full bg-white"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Email" className="font-medium">
                  Email
                </label>
                <input
                  value={inputText.email}
                  onChange={(e) =>
                    setInputText({ ...inputText, email: e.target.value })
                  }
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-white"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  value={inputText.pass}
                  onChange={(e) =>
                    setInputText({ ...inputText, pass: e.target.value })
                  }
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full bg-white"
                />
              </div>
              <div className="mt-2 text-sm">
                Already Have an account?{" "}
                <Link to={"/login"} className="text-primary hover:underline">
                  {" "}
                  Login.{" "}
                </Link>
              </div>
              <div className="mt-6 text-center mx-auto">
                {btnDisable === false ? (
                  <button
                    className="btn btn-primary btn-fit mx-auto"
                    type="submit"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button className="btn loading">loading</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
