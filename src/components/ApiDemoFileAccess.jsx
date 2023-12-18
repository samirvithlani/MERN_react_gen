import axios from "axios";
import React, { useEffect, useState } from "react";

export const ApiDemoFileAccess = () => {
    const [files, setfiles] = useState([])
  const getAllFiles = async () => {
    const res = await axios.get("http://localhost:3000/upload/all");
    console.log(res.data);
    setfiles(res.data.files);
  };

  useEffect(() => {
    getAllFiles();
  }, []);

  return <div>
    {
        files.map((f)=>{
            return<div style={{height:200,width:200}}>
                <h1>{f.id}</h1>
                <img  crossOcligin="anonymous" src = {`https://drive.google.com/file/d/${f.id}/view`}></img>
            </div>
        })
    }
    
  </div>;
};
