import React ,{useState,useEffect, useContext}from "react";
import "./projects.css";
import Project from "../UI/WebAppUI/Project";
import {Link,Routes,Route, Outlet} from 'react-router-dom';
import AndApp from "../UI/AndroidAppUI/AndApp";
import {useDispatch,useSelector} from 'react-redux'
import {getProjects} from "../../Redux/Actions/projectActions";
import { ProjectContext } from "../../App";


// const client = axios.create({
//   baseURL: "http://localhost:3400/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

function Projects() {
  const [webapp,setWebapp] = useState('');
  const projects = useContext(ProjectContext)
  // console.log(projects);
  return (
    <div className="projects">
      <div className="container-wrapper">
      <div className="projects-title">
        <h1>projects</h1>
      </div>
      <div className="projects-selection">
        <div className="project-web cat">
          <Link to="/webProjects"><div className="web-button">web app</div></Link>

        </div>
        <div className="project-and cat">
          <Link to="/androidProjects"><div className="and-button">android app</div></Link>

        </div>
      </div>
      
        {/* <Route path="/webapp"  element={WebProjects()}/>
        <Route path="/andapp" element={AndProjects()}/> */}
            
      </div>
      <div>
        <Outlet/>
    </div>

    </div>
  );

  // function WebProjects() {
  //   return ;
  // }

  // function AndProjects() {
  //   return <div className="projects-container">
  //     <h1>andapp</h1>
  //     <AndApp/>
  //     <AndApp/>
  //     <AndApp/>
  //     <AndApp/>

  //   </div>;
  // }
}

export default Projects;
