import React from 'react';
import './App.css';
import styled from 'styled-components';

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
