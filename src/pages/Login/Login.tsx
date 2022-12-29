import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

type Input = {
  email: string;
  pass: string;
};

type Context = {
  logIn?: Function | undefined;
};

function Login() {
  const { logIn }: Context = useContext(AuthContext);

  const [inputText, setInputText] = useState<Input>({
    email: "",
    pass: "",
  });
  const [btnDisable, setBtnDisable] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBtnDisable(true);

    try {
      if (logIn) {
        const { user } = await logIn(inputText.email, inputText.pass);

        setInputText({
          email: "",
          pass: "",
        });
        setBtnDisable(false);
        navigate("/");

        toast.success("Successfully Log in.");
      }
    } catch (err: any) {
      toast.error(err.message);
      setBtnDisable(false);
    }
  };

  return (
    <section>
      <div className="my-24">
        <div className="container">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-neumorphismHvr mx-auto p-12">
            <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-8 font-sans">
              Log In
            </h1>
            <form onSubmit={handleSubmit}>
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
                <Link to={"/signup"} className="text-blue-500 hover:underline">
                  sign up.
                </Link>
              </div>
              <div className="mt-6 text-center mx-auto">
                {btnDisable === false ? (
                  <PrimaryButton shadow={false} txt={<>Log In</>} />
                ) : (
                  <button
                    style={{ backgroundColor: "#ddd" }}
                    className="btn loading btn-disabled"
                  >
                    Log In
                  </button>
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
