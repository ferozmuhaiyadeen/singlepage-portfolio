import Quiztro from '../assets/images/Quiztro.png'
import myblog from '../assets/images/myblog.jpg'
import todoapp from '../assets/images/todoapp.jpg'


export const PROJECTS_INFO = [
  {
    title: "Quiztro - Quiz Simulator",
    src: `${Quiztro}`,
    alt: "Screenshot of Quiztro",
    link: "/quiztro",
    isDeployed: true,
    technologies: 'HTML/CSS, JS, PHP, MySQL'
  },
  {
    title: "My-Blog - Personal Blog created during my React training",
    src: `${myblog}`,
    alt: "Screenshot of my-blog",
    link: "/my-blog",
    isDeployed: true,
    technologies: 'MongoDB,Express,React and Node'
  },
  {
    title: "To-Do App - CheckList of items to be done",
    src: `${todoapp}`,
    alt: "Screenshot of todo-app",
    link: "/MERN-ToDo-App",
    isDeployed: true,
    technologies: 'MongoDB,Express,React and Node'
  }
  ];
