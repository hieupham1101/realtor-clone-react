import { useState } from "react";
import { useNavigate } from "react-router";
const useSignIn = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
  }

  return {
    ...props,
    showPassword,
    setShowPassword,
    password,
    email,
    navigate,
    onChange,
    onSubmit,
  };
};

export default useSignIn;
