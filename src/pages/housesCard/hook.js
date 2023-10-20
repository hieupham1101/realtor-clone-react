import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../API/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const useHomeCard = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);

  const navigate = useNavigate();

  const fetchHouses = async () => {
    try {
      const response = await getDocs(collection(db, "houses"));
      const houses = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHouses(houses);
      setData(houses);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHouses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "houses", id);
      await deleteDoc(docRef);
      fetchHouses();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = () => {
    navigate("/house/edit");
  };

  return {
    ...props,
    data,
    houses,
    loading,
    handleEdit,
    handleDelete,
  };
};

export default useHomeCard;
