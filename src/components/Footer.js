import React from 'react'
import styled from 'styled-components'
import Mail from './mail'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaDev,
} from 'react-icons/fa'

import Section from './Section'
import SocialMedia from './SocialMedia'

const MY_LINKEDIN = 'https://www.linkedin.com/in/ferozmuhaiyadeen/'
const MY_GITHUB = 'https://github.com/ferozmuhaiyadeen'
const MY_GMAIL = 'ferozmuhaiyadeen@gmail.com'
//const MY_TWITTER = 'https://twitter.com/facosta_marina'
//const MY_DEV = 'https://dev.to/marinafroes'

const Mailbox = styled.div`
align items: left;
`
const Contacts = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
`


const SocialMediaContainer = styled.div`
  padding: 2rem 0rem 0rem 0rem;
`

const CvLink = styled.a`
  font-size: 1.5rem;
  padding: 0.8rem;
  text-align: center;
  border: 2px solid #347b98;
  color: #000;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    background-color: #347b98;
    color: #fff;
  }
`

const Footer = () => (

  
  <Section heading='Contact'>
    
    <Contacts>
    <Mailbox>
      <Mail/>
    </Mailbox>  
      {<CvLink href="https://drive.google.com/file/d/1NkgEy0zXzo6v4NjoKP8kqfpTLQfM-QHi/view?usp=sharing" download target="_blank"
        rel="noopener noreferrer">Download my CV</CvLink> }
      <SocialMediaContainer>
        <SocialMedia icon={<FaEnvelope />} address={`mailto:${MY_GMAIL}`} />
        <SocialMedia icon={<FaGithub />} address={MY_GITHUB} />
        <SocialMedia icon={<FaLinkedin />} address={MY_LINKEDIN} />

      </SocialMediaContainer>
    </Contacts>
  </Section>
)

export default Footer
