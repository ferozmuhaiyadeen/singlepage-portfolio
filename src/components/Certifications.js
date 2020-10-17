import React from 'react'
import styled from 'styled-components'
import Project from "./Project";
import Section from "./Section";
import ScrollAnimation from "react-animate-on-scroll";
const MY_PROFILE = "https://github.com/MarinaFroes";
const MY_GITHUB = "https://marinafroes.github.io";


const SkillTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: #347b98;
  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
`

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-bottom: 2rem;
`

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

const CertificateContainer = ({ projectInfo, heading }) => (
    <Section heading="Courses">
    <ProjectsSection>
        {projectInfo.map((project, index) => (
          <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={false}>
            <Project
              title={project.title}
              src={project.src}
              alt={project.alt}
              project={project.isDeployed ? `${MY_GITHUB}${project.link}` : null}
              code={`${MY_PROFILE}${project.link}`}
              technologies={project.technologies}
            />
          </ScrollAnimation>
        ))}
    </ProjectsSection>
    </Section>
    
  );

export default CertificateContainer
