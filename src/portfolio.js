import navpic from "./components/Access/JK.png"
import resume from "./components/Access/resume.pdf"

const header = {
  homepage: 'https://Jayasree-Kurmannagari.github.io/Jayasree',
  title: navpic,
}

const home = {
  name: 'Jayasree Kurmannagari',
  role: 'Full stack developer',
  description:
    "I'm  a software engineer specialized in building things on the internet with a wide range of tools. I'm a Blogger and a CSS artist, currently working on 5G and Networking.",
  resume: resume
}


const work = [
  {
    "title": "gNB Robustness - K8s",
    "years": "2021 - Commscope",
    "description": "A Python framework to fetch the information of a Gnodeb device deployed on Kubernetes platform and to perform various operations on nodes and its containers",
    "technologies":["Python","Kubernetes","Shell script","Robot Framework","InfluxDB","Grafana"]
  },
  {
    "title": "SOAK-UE Management",
    "years": "2021 - Commscope",
    "description": "A FrontEnd application that displays and manages User equipments(UE) connected to a Raspberry Pi and performs operations on a single or a group of UEs'.",
    "technologies": ["HTML","Javascript","PHP","CSS","Shell script"]
  },
  {
    "title": "Throughput Statistics",
    "years": "2022 - Commscope",
    "description": "A fullstack Application that collects the throughput statistics of eNodeB and gNodeB and visualizes the raw data in graphical forms",
    "technologies":["Javascript","PHP","Python","PostgreSQL","Grafana","HTML","CSS"]
  },
  {
    "title": "DAS - Temperature",
    "years": "2022 - Commscope",
    "description": "A fullstack application that fetches the temperature information of devices and stores/retrieves the information from the database",
    "technologies": ["Javascript","jQuery","C++","MySQL"]
  },
  {
    "title": "Application containerization",
    "years": "2022 - Commscope",
    "description": "Containerized a fullstack application that can bind the new data and deployed on various servers",
    "technologies": ["Docker","Shell script"]
  }
]

const projects = [
  {
    name: 'Portfolio',
    description:
      'A website that showcase the basic information about myself, the projects that I have worked on and the technologies that I use. It is a static website and showcases my contact information, github profiles, blog and codepen profiles.',
    stack: ['React', 'HTML', 'Javascript','CSS','npm'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'Monty Hall Game',
    description:
      'Monty hall game is based on the famous Monty hall problem that deals with probabilistic decision making. In the monty hall problem the user is given two choices to pick among 3 doors behind one of which lies a desirable price',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Jayasree77/Front-end/tree/master/MontyHall',
    livePreview: 'https://codepen.io/Jayasree_0708/pen/xxZpZqV',
  },
  {
    name: 'Infinite loader',
    description:
      'Infinite scrolling is a web-design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination.',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Jayasree77/Front-end/tree/master/Infinite%20Scroll',
    livePreview: 'https://codepen.io/Jayasree_0708/pen/ZEQmVEd',
  },
]

const skills = [
  {"skill" : 'HTML', "icon": "fab fa-html5 icon"},
  {"skill" : 'CSS', "icon": "fab  fa-css3 icon"},
  {"skill" : 'JavaScript', "icon": 'fab fa-js icon'},
  {"skill" : 'Python', "icon": 'fab fa-python icon'},
  {"skill" : 'PHP', "icon": 'fab fa-php icon'},
  {"skill" : 'Java', "icon": 'fab fa-java icon'},
  {"skill" : 'Shell script', "icon": 'fa fa-file-code shellscript icon'},
  {"skill" : 'PostgreSQL', "icon": 'fa fa-database icon'},
  {"skill" : 'InfluxDB', "icon": 'fa fa-database icon'},
  {"skill" : 'React', "icon": 'fab fa-react icon'},
  {"skill" : 'jQuery', "icon": "fab fa-js icon"},
  {"skill" : 'Bootstrap', "icon": 'fab fa-bootstrap icon'},
  {"skill" : 'Grafana', "icon": 'fa fa-chart-area icon'},
  {"skill" : 'Docker', "icon": 'fab fa-docker icon'},
  {"skill" : 'Git', "icon": 'fab fa-git-alt icon'}
]

const contact = {
  social: {
      linkedIn: 'https://www.linkedin.com/in/jayasree0708/',
      github: 'https://github.com/Jayasree77',
      blog: 'https://jayasree.hashnode.dev/',
      codepen: 'https://codepen.io/Jayasree_0708'
    },
  email: 'jayasree0708@gmail.com',
  
}

export { header, home, work ,projects, skills, contact }
