import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseInit";

const ReadItem = ({ dbName, setData }) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const dataCollection = collection(db, `${dbName}`);
    getDocs(dataCollection)
      .then((response) => {
        const dta = response.docs.map((doc) => {
          return { data: doc.data(), id: doc.id };
        });
        setData(dta);
      })
      .catch((error) => console.log(error.message));
  };
};

export default ReadItem;
