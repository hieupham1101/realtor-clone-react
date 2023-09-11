import { useState } from "react";
import logogoogle from "../assets/google.svg";
import signin from "../assets/sign-in.jpg";
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };
  const { email, password } = formData;
  console.log(email);
  return (
    <section>
      <h1 className="text-center mt-6 text-3xl font-bold	">Sign In</h1>
      <div className="flex flex-wrap justify-center items-center  px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] md:re lg:w-[50%] mb-12 md:mb-6">
          <img src={signin} alt="sign-in" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <button className="w-full bg-blue-700 border-gray-300 rounded px-4 py-2 text-white	">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
