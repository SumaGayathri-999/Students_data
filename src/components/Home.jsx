import React from 'react'
import {useState} from 'React';

function Home() {
    let [studentsData,setstudentsData] = useState(null);
    function getData(){
        let data = new Promise((resolve,reject)=>{
            resolve([
                {
                id :1,
                name:"suma",
                age:15,
                class:10,
                total_marks:100,
               },
               {
                id :2,
                name:"Gayathri",
                age:14,
                class:9,
                total_marks:95
               },
               {
                id :3,
                name:"Keerthi",
                class:8,
                age:13,
                total_marks:80
               },
             ])
        });
       data.then((res)=>{
         setstudentsData(res);
       })
    }
  return (
    <div classname="conatiner students_container">
        <h1 className="mt-3" >Students Data</h1>
        <btn className="ml-3 btn btn-info btn-outline-dark"  onClick={getData}>Click here</btn>
        <div className="container center">
          {studentsData && 
            <table class="table table-dark">
                <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Name</th>
                <th scope="col">Class</th>
                <th scope="col">Age</th>
                <th scope="col">Total Marks</th>

              </tr>
            </thead>
            {studentsData.map((student)=>{
                return (
                <>
            <tbody>
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.age}</td>
                <td>{student.total_marks}</td>
              </tr>
              </tbody>
                </>
            )})}
            </table>
          }
 
        </div>
    </div>
  )
}

export default Home