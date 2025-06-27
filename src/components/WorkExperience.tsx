import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const experiences = [
  {
    company: "Royal Holloway, University of London",
    position: "Teaching Fellow",
    duration: "Nov 2023 - Present",
    skills: ["Knowledge Expertise", "Project Management", "Leadership"],
    description: [
      "Delivered 8+ undergraduate and postgraduate modules such as User-Centred Design, Data Analysis, and Team Project.",
      "Supervised over 24+ BSc and MSc dissertation projects providing guidance on project scope, timeline, practices and modern technologies.",
      "Directed projects such as video creation for the British Computing Society accreditation and led departmental software development projects.",
    ],
  },
  {
    company: "Royal Holloway, University of London",
    position: "Research Assistant",
    duration: "Jul 2023 - Nov 2023",
    skills: ["Analytical", "Communication", "Critical Thinking"],
    description: [
      "Analysed the UN corpus to identify patterns and determine how climate change and global warming have been conceptualised throughout time using Modified PMI.",
      "Sythesized and presented summaries of findings to the research team in 30 minute presentations. Ensured clarity by using visual aids, laymen's term and examples to explain complex concepts.",
      "Proactively identified questions that could lead to practical insights e.g. what climate change causes are most frequently mentioned in the UN corpus?",
    ],
  },
  {
    company: "Royal Holloway, University of London",
    position: "Teaching Assistant",
    duration: "Sep 2021 - Jun 2023",
    skills: ["Pedagogical skills", "Project Supervision", "Troubleshooting"],
    description: [
      "Applied effective teaching methods and increased student engagement by 30%.",
      "Supervised and monitored over 50+ undergraduate programming projects. Motivated and empowered students by sharing previous experiences and providing an open environment.",
      "Asked effective questions to facilitate critical thinking and help students resolve loosely defined problems.",
    ],
  },
  {
    company: "Royal Holloway, Student Union",
    position: "President of Pokemon Society",
    duration: "Jun 2022 - Jun 2023",
    skills: ["Organisation", "Strategic", "User Experience"],
    description: [
      "Developed a comprehensive 12-month plan, outlining key objectives and initiatives to enhance the society’s impact and engagement. Delegated and prioritised tasks to commitee members and liased for weekly meetings.",
      "Changed society events based on semi-structured interviews with members and non-members regarding engagement. As a result, membership tripled and engagement average increased to 80%.",
      "Awarded with the Campus Community Shield by the Student Union for outstanding positive impact to the students and the University.",
    ],
  },
  {
    company: "MQ Mental Health",
    position: "Science Writer",
    duration: "Aug 2022 - Sep 2022",
    skills: ["Independent", "Time Management", "Digital Marketing"],
    description: [
      "Tasked to research and write 11 mental health conditions. Liased with line manager to establish deadlines and specifications of each articles.",
      "Planned when to conduct secondary research, when to write, check and send final drafts and publish pages on their website. As a result, I managed to deliver highly accessible content 2 weeks in advance.",
      "Conducted competitor's analaysis, identified gaps in MQ Mental Health's content and updated their content management system using WordPress",
    ],
  },
  {
    company: "Royal Holloway, University of London",
    position: "Student Ambassador",
    duration: "Feb 2021 - Sep 2022",
    skills: ["Communication", "Data Entry", "Interpersonal Skills"],
    description: [
      "Represented the University at open days, school visits and other events. Provided information about the University, courses and student life to prospective students.",
      "Assisted with administrative tasks such as Decision Maker and Front-line caller in Clearing. Entered data into the University’s CRM system and ensured accuracy of information.",
      "Actively listened to prospective students' questions and concerns, providing clear and concise answers. Relate experiences to their queries to help them make informed decisions",
    ],
  },
  {
    company: "Royal Holloway, Student Union",
    position: "Secretary of Pokemon Society",
    duration: "June 2020 -June 2021",
    skills: ["Social Media", "Risk Management", "Approachable"],
    description: [
      "Utilized Canva to create weekly marketing material to advertise events on Facebook, Instagram and Discord. Increased online engagement by 300%.",
      "Conducted comprehensive risk assessments for every event to identify potential hazards, likelihood and impact. Communicated mitigation strategies to the committee to ensure compliance.",
      "Maintained a positive and approachable attitude, fostering a welcoming environment for all members in person and in social media platforms.",
    ],
  },
];
