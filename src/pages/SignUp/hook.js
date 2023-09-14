import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../API/firebase";

const useSignUp = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };
  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // updateProfile(auth.currentUser, {
      //   displayName: name,
      // });
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  return {
    ...props,
    formData,
    setFormData,
    onChange,
    name,
    email,
    password,
    onSubmit,
    showPassword,
    setShowPassword,
    navigate,
    db,
  };
};

export default useSignUp;
