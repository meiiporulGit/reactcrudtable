import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

import "./styles.css";
import Delete from "./delete";
import Update from "./editData";

// axios.defaults.baseURL = 'http://localhost:8080/Persons'

export default function Show() {
  const [getData, setData] = useState([]);
  const [update, setUpdate] = useState({});
  const[updat,setUpdat]=useState()
  const [popup, setPop] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/Persons/getall")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, [popup]);

  const remove = (del) => {
    const newList = getData.filter((item) => !(item._id === del._id));
    console.log(newList);
    setData(newList);
  };   

  return (
    <div>
     
      {popup ? (
        <Update
          dataup={update}
          removePop={() => {
            setPop(!popup);
            
          }}
      
        />
      ) : (
        <Delete
        delete={getData}
        removeData={remove}
        EditInfo={(del) => {
          setUpdate(del);
        }}
        showPopup={() => {
          setPop(!popup);
        }}
      />
      )}
    </div>
  );
}
