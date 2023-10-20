/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Input } from "antd";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { v4 as uuid } from "uuid";
import { collection, addDoc, updateDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../API/firebase";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { validation } from "./validation";
import { serverTimestamp } from "firebase/firestore";

const useListHome = (props) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      type: "rent",
      name: "",
      bedrooms: 1,
      bathrooms: 1,
      parking: false,
      furnished: false,
      address: "",
      description: "",
      offer: false,
      regularPrice: 1,
      discountedPrice: 1,
      image: "",
      createdAt: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      onSubmitList(values);
      console.log(JSON.stringify(values));
    },
  });
  const navigate = useNavigate();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const { TextArea } = Input;
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 0,
    onDrop: (acceptedFiles) => {
      formik.setFieldValue("image", acceptedFiles[0]);
    },
  });

  const onSubmitList = async (values) => {
    try {
      const imageRef = storageRef(storage, `houses/${uuid()}`);
      const { ref } = await uploadBytes(imageRef, values.image);
      const url = await getDownloadURL(ref);
      console.log(values, url);
      const docRef = await addDoc(collection(db, "houses"), {
        ...values,
        image: url,
        createdAt: serverTimestamp(),
      });

      toast.success("Successfully");
      console.log(values);
      !values.offer && delete values.discountedPrice;
      navigate(`/category/${values.type}/${docRef.id}`);
    } catch (error) {
      console.log(error);
      formik.setSubmitting(false);
      toast.error("Not submitting", error);
    }
  };

  // console.log(formDataCopy);
  // console.log(onSubmitList());

  return {
    ...props,
    formik,
    getRootProps,
    getInputProps,
    onFormLayoutChange,
    componentSize,
    setComponentSize,
    TextArea,
  };
};

export default useListHome;
