import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import API from "./utils/API";

function App() {
  const [empArray, setEmpArray] = useState([]);

  useEffect(()=>{
    API.search().then((res)=>{
      setEmpArray(res.data.results);
    })
  }, []);
  console.log(empArray);

    return (
    <>
      <Header />
      <Search searchValue={searchValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
      <Table empArray = {empArray} />
    </>
  );
}

export default App;
