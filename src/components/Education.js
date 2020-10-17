import React, { Component, useReducer } from 'react';
import Widecard from './Widecard';
import Section from './Section'
import Awards from '../components/awards'
//import Certifications from './Certifications'
import styled from 'styled-components'
import collegeicon from '../assets/images/college_logo.png';
import schoolicon from '../assets/images/school_logo.png';
//import { PROJECTS_INFO } from '../utils/projectInfo';


const AboutMeContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  display: flex;
  width: 90%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media only screen and (max-width: 700px) {
    width: 80%;
    flex-direction: column;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`
const AboutMeText = styled.div`
  display: flex;
  padding: 2rem;

  @media only screen and (max-width: 1366px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`
const Skills = styled.div`
  width: 50%;
`
const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 2rem;
  margin: 0;
  margin-top: 2rem;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`
const UserDiv = styled.div`
  
  
  justify-content: left;
  align-items: left;
  border-right: 2px solid #e6e6e6;
  

  @media only screen and (max-width: 700px) {
    border: none;
  }
`


class Education extends Component {
    render() {
        return (
          <Section heading="Education">
            <AboutMeContainer>
            
            
            
            
            <AboutMeText>
            <UserDiv>
            <Widecard title="B.E. Computer Science and Engineering" where="Sri Sairam Engineering College - Anna University" logo= {<a href="https://sairam.edu.in/"><img alt="sairam" src={collegeicon} className="edulogo"></img></a>} from="July 2014" to="March 2018"/>
            </UserDiv>
            
            <Widecard title="SSLC | HSC" where="Zion Matriculation Higher Secondary School" logo= {<a href="http://www.zionschool.ac.in/"><img alt="zion" src={schoolicon} className="schoollogo"></img></a>} from="2010" to="2014"/>
            <UserDiv></UserDiv>
        <Widecard title="Awards/Recognition" where={<Awards/>} from="2014" to="2018" />

            
            </AboutMeText>
            
            </AboutMeContainer>
          </Section>
            
            )
        }
    }
    
export default Education
    