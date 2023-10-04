import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../API/firebase";
import { toast } from "react-toastify";

export const useProfile = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const onLogOut = () => {
    try {
      auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log([e.target.id]);
  };
  const onSubmit = async () => {
    try {
      //update name in firebase authentication
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
      //update profile in firebase storage

      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, {
        name,
      });
      toast.success("Profile details updated");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return {
    ...props,
    formData,
    onChange,
    onSubmit,
    onLogOut,
    changeDetail,
    email,
    name,
    setChangeDetail,
  };
};
