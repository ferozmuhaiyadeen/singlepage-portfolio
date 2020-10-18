import React,{ useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { cleanData, getFingerprint } from './utils.';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsContainer from './components/ProjectsContainer';
import { PROJECTS_INFO } from '../src/utils/projectInfo';
//import { CHALLENGES_INFO } from '../src/utils/challengesInfo';
import {COURSES_INFO} from '../src/utils/courseinfo';
import Education from './components/Education';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [fingerprint, setFingerprint] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    if (showReport) {
      fetch("https://extreme-ip-lookup.com/json")
        .then(res => res.json())
        .then(ip => Promise.all([ip, getFingerprint()]))
        .then(([ip, finger]) => {
          let f = finger
            .map(({ key, value }) => ({ [key]: value }))
            .reduce((acc, curr) => ({
              ...acc,
              ...curr
            }));

          f = cleanData(f);
          ip = cleanData(ip);
          setFingerprint(f);
          setIpData(ip);
          setShowReport(false);
        });
    }
  }, [showReport]);


  return (
    <Main className="App">
      <Header/>
      <About />
      <Education/>
      <ProjectsContainer
       heading="Courses"
       projectInfo={COURSES_INFO}/>
      <ProjectsContainer
        heading="Projects"
        projectInfo={PROJECTS_INFO}
      />
      
      <Footer/>
    </Main>
  );

  
}


export default App;
