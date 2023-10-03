import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const onLogOut = () => {
    try {
      auth.signOut();
      navigate("/sign_up");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center mt-6 ">My Profile</h1>
        <div className=" w-full md:w-[50%] mt-6 px-3">
          <Form>
            <Input
              value={name}
              disabled={false}
              label="Display name"
              className="w-full mt-6 bg-white px-4 py-2 text-xl text-gray border border-gray-200  rounded transition ease-in-out"
            />
            <Input
              value={email}
              disabled={false}
              label="Email"
              className="w-full mt-6 bg-white px-4 text-xl text-gray border border-gray-200 rounded transition ease-in-out"
            />
            <div className="flex justify-between mt-6 whitespace-nowrap text-sm sm:text-lg">
              <p>
                Do you want change your name?
                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                onClick={onLogOut}
              >
                Sign out{" "}
              </p>
            </div>
          </Form>
          {/* <form>
            <input
              className="w-full mt-6 bg-white px-4 py-2 text-xl text-gray border border-gray-200  rounded transition ease-in-out "
              disabled
              type="text"
              id="name"
              value={name}
            />
            <input
              className="w-full mt-6 bg-white px-4 text-xl text-gray border border-gray-200 rounded transition ease-in-out "
              disabled
              type="text"
              id="email"
              value={email}
            />

            <div className="flex justify-between mt-6 whitespace-nowrap text-sm sm:text-lg">
              <p>
                Do you want change your name?
                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">
                Sign out{" "}
              </p>
            </div>
          </form> */}
        </div>
      </section>
    </>
  );
}
