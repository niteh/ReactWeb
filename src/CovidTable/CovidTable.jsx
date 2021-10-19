import React, {  useState, useEffect } from "react";
import axios from "axios";
import Heading from "../Heading";

const CovidTable = () =>{

const [posts, setPosts] = useState([]);

  useEffect(()=>{
     
    axios.get('http://lssnp.gov.lr/MIS//api/SubmitGrievanceApi/17')
    .then( res => { 
      
      debugger;
      setPosts(JSON.parse(res.data).County)})
   
    

  })

    return (
    <>
    <Heading heading="Data from API" />
    <div className="container my-4">
       <div className="row">
           <div className="col-10 mx-auto"></div>
           <div className="table-responsive">
               <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                       
                       
                    </tr>
                </thead>

          
              <tbody>
       
                    {
                        posts.map((curElem,index)=>{
                            return(
                          <tr key={index}>
                            <td>{curElem.adminboundary1id}</td>
                            <td>{curElem.name}</td>
                           

                          </tr>
                          )

                        })
                    }
                 </tbody>
             
               </table>
           </div>

           </div>
           </div>
           

    </>
    )
}

export default CovidTable;