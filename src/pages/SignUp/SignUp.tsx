import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

type Input = {
  name: string;
  email: string;
  pass: string;
  img: string;
};

type Context = {
  signUp?: Function | undefined;
  updateUser?: Function | undefined;
};

function SignUp() {
  const { signUp, updateUser }: Context = useContext(AuthContext);

  const [inputText, setInputText] = useState<Input>({
    name: "",
    email: "",
    pass: "",
    img: "",
  });

  const [btnDisable, setBtnDisable] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBtnDisable(true);

    try {
      if (signUp) {
        const { user } = await signUp(inputText.email, inputText.pass);
        if (updateUser) {
          await updateUser(inputText.name, inputText.img);
        }

        setInputText({
          name: "",
          email: "",
          pass: "",
          img: "",
        });
      }
    } catch (err: any) {
      toast.error(err.message);
    }
    setBtnDisable(false);
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
                  value={inputText.name}
                  onChange={(e) =>
                    setInputText({ ...inputText, name: e.target.value })
                  }
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
                <Link to={"/login"} className="text-blue-500 hover:underline">
                  {" "}
                  Login.{" "}
                </Link>
              </div>
              <div className="mt-6 text-center mx-auto">
                {btnDisable === false ? (
                  <PrimaryButton shadow={false} txt={<>Sign Up</>} />
                ) : (
                  <button className="btn loading btn-disabled">Sign Up</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
