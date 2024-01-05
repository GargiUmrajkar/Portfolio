import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  opencv,
  python,
  html,
  css,
  reactjs,
  azure,
  cpp,
  nodejs,
  sql,
  mongodb,
  tensorflow,
  git,
  java,
  DT,
  PT,
  MB,
  imageeditor,
  eventbuzz,
  eazypark,
  venkatesh,
  raj,
  conversation,
  youtube,
  accident,
  vandit,
  chaitanya,
  akshit,
  deepak,
  ashish,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Ex",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: creator,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const bio = [
  {
    role: "Data Scientist",
  },
  {
    role: "Data Engineer",
  },
  {
    role: "Software Developer",
  },
  {
    role: "AI-ML Engineer",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Product Design Engineer - Data Engineer",
    company_name: "Daimler Truck Innovation Centre India (DTICI)",
    company_url: "https://locations.daimlertruck.com/en/career/locations/detail/bengaluru-daimler-truck-innovation-center-india-private-limited",
    icon: DT,
    iconBg: "#E4E4E4",
    date: "Jul 2022 - Jul 2023",
    points: [
      `Developed a cost-effective Quality Management Backend for Truck Parts, saving $1 million annually by eliminating the need for third-party software and reducing processing time by 95%. Implemented statistical tools, achieving a 90% improvement in data-driven decision-making through graphs like Probability Distribution and Time Series`,
      `Led team management, spearheading sprint planning and Kanban updates to enhance team efficiency and project delivery`,
      `Executed an initiative to replace third-party software, creating a streamlined packaging system`,
    ],
  },
  {
    title: "Student Trainee - Developer Intern",
    company_name: "Daimler Truck Innovation Centre India (Formerly MBRDI)",
    company_url: "https://locations.daimlertruck.com/en/career/locations/detail/bengaluru-daimler-truck-innovation-center-india-private-limited",
    icon: DT,
    iconBg: "#E4E4E4",
    date: "Nov 2021 - May 2022",
    points: [
      `Engineered a bottleneck analysis visualization system cutting physical analysis time across diverse manufacturing lines, with an 85% accuracy rate in bottleneck detection. Showcased a flexible model applicable to various manufacturing scenarios, streamlining operations for improved efficiency`,
    ],
  },
  {
    title: "Student Trainee - Developer Intern",
    company_name: "Mercedes Benz Research and Development India (MBRDI)",
    company_url: "https://www.mbrdi.co.in/#/",
    icon: MB,
    iconBg: "#E4E4E4",
    date: "Sep 2021 - Oct 2021",
    points: [
      `Conducted comprehensive analysis of automation challenges, leveraging Tableau to formulate and deliver innovative software
      solutions`,
      `Established a robust database system to catalog and manage supplier quality data on the azure sql platform. Conducted data
      processing and feature engineering to strengthen its utility and value`,
    ],
  },
  {
    title: "AI-ML Intern",
    company_name: "Plural Technology Private Limited",
    company_url: "https://www.pluraltechnology.com/",
    icon: PT,
    iconBg: "#E4E4E4",
    date: "Mar 2021 - Jul 2021",
    points: [
      `Executed component classification utilizing supervised learning techniques, resulting in a highly accurate model. Deployed the model on 
      the AWS cloud platform, ensuring scalability and accessibility. This initiative significantly improved the efficiency of a Fortune 500 
      company's parts classification process, reducing manual efforts by 95% and achieving an accuracy rate of 90%`,
      `Adopted applied Agile project management methodologies to drive efficient project execution and demonstrated leadership in
      the management of JIRA, optimizing team collaboration and workflow management`,
      `Secured a full-time position as an AI-ML Trainee in recognition of exceptional performance from a team of 5`,
    ],
  },
];

const projects = [
  {
    name: "Image Editor",
    description:
      "Developed a Java Image Processing application with Java Swing for the UI, applying OOD principles like MVC and Builder patterns to ensure maintainability. Version control facilitated team collaboration and code stability. The UI was designed for easy navigation, optimizing user experience, while JUnit ensured robust functionality. The Builder pattern was key to streamlining feature development, cutting implementation time by 70%.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "junit",
        color: "pink-text-gradient",
      },
    ],
    image: imageeditor,
    source_code_link: "https://github.com/GargiUmrajkar/ImageProcessor",
  },
  {
    name: "EventBuzz",
    description:
      "Led 'EventBuzz', significantly enhancing event planning efficiency by 30% through the implementation of CRUD operations, and improving reliability by 25% using MySQL and Node.js. Integrated advanced logging mechanisms, achieving a remarkable 99.9% uptime. Employed React for creating a dynamic, user-friendly front end, contributing to a robust and adaptive event management platform. These enhancements streamlined coordination and adapted to user needs.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: eventbuzz,
    source_code_link: "https://github.com/GargiUmrajkar/EventBuzz",
  },
  {
    name: "Youtube Adviews Prediction",
    description:
      `Advanced advertising strategies with a predictive model utilize Decision Tree Regressor, Random Forest Regressor, and 
      Artificial Neural Network to forecast adview counts based on diverse YouTube metrics. 
      This approach significantly optimizes ad placement and timing by understanding viewer behavior, 
      leading to a substantial 65% performance boost for advertisers.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: eazypark,
    source_code_link: "https://github.com/Gargi-U/Youtube-Adviews-Prediction",
  },
];

const research_papers = [
  {
    name: "Machine Learning enabled models for YouTube Ranking Mechanism and Views Prediction",
    description:
      "Designed and implemented a predictive model using machine learning and AI to estimate YouTube video metrics, incorporating a ranking system based on trending data. Enhanced the model with a Random Forest algorithm, achieving a notable 78.4% accuracy, aiding creators in evaluating content authenticity and competitive strategy before publication",
    tags: [
      {
        name: "analytics",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "youtube",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://arxiv.org/abs/2211.11528",
    authors: [
      {
        name: "Vandit Gupta",
        image: vandit,
        linkedin: "https://www.linkedin.com/in/vandit-gupta/",
      },
      {
        name: "Akshit Diwan",
        image: akshit,
        linkedin: "https://www.linkedin.com/in/akshit-diwan/",
      },
      {
        name: "Dr. Ashish Khanna",
        image: ashish,
        linkedin: "https://www.linkedin.com/in/dr-ashish-khanna-2381b778/",
      },
    ],
  },
  {
    name: "Classifying text using machine learning models and determining conversation drift",
    description:
      "In this research, Naive Bayes, Logistic Regression, and SVM algorithms were optimized for off-topic text detection, achieving an F1 score of 0.81. This significantly advances discussion moderation techniques, enhancing accuracy and efficiency. The work contributes to better engagement in digital conversations and suggests further applications in language and moderation technology.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "deepLearning",
        color: "pink-text-gradient",
      },
    ],
    image: conversation,
    source_code_link: "https://arxiv.org/abs/2211.08365",
    authors: [
      {
        name: "Chaitanya Chadha",
        image: chaitanya,
        linkedin: "https://www.linkedin.com/in/chaitanyachadha12/",
      },
      {
        name: "Vandit Gupta",
        image: vandit,
        linkedin: "https://www.linkedin.com/in/vandit-gupta/",
      },
      {
        name: "Dr. Deepak Gupta",
        image: deepak,
        linkedin: "https://www.linkedin.com/in/deepak-gupta-90156685/",
      },
    ],
  },
  {
    name: "Accident Detection Using Mask R-CNN",
    description:
      "The paper presents the Mask R-CNN model as a viable, efficient tool for accident detection, utilizing deep learning for accurate instance segmentation. The model uses the Intersection over Union concept to precisely detect and identify accidents on roads. By effectively identifying mishaps, it aids in averting traffic jams and expediting emergency response, which could save lives and crucial time. The Mask R-CNN model's accuracy and potential to integrate with response systems mark significant advancements in traffic safety and management.",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "objectDetection",
        color: "pink-text-gradient",
      },
    ],
    image: accident,
    source_code_link: "http://ijmtst.com/volume7/issue01/15.IJMTST0612325.pdf",
    authors: [
      {
        name: "Vandit Gupta",
        image: vandit,
        linkedin: "https://www.linkedin.com/in/vandit-gupta/",
      },
      {
        name: "Akshit Diwan",
        image: akshit,
        linkedin: "https://www.linkedin.com/in/akshit-diwan/",
      },
      {
        name: "Chaitanya Chadha",
        image: chaitanya,
        linkedin: "https://www.linkedin.com/in/chaitanyachadha12/",
      },
    ],
  },
];

const achievements = [
  {
    title: "Rookie of the Quarter",
    points: [
      "Received the 'Rookie of the Quarter' award at Infosys for exceptional performance and significant contributions to project success, rapidly adapting and boosting team efficiency.",
    ],
  },
  {
    title: "Insta Award",
    points: [
      "Earned the 'Insta Award' at Infosys for mastering Azure tools like Data Factory, Data Lake, and Synapse Warehouse, excelling in project development, coordination, and timely delivery.",
    ],
  },
  {
    title: "ZS Campus Beats Challenge",
    points: [
      "Secured a spot in the Top 11-100 teams in the ZS Campus Beats Case Challenge 2020, earning an interview for Business Technology Analyst at ZS and advancing to Phase-3.",
    ],
  },
  {
    title: "Best Student in Computer Science",
    points: [
      "Honored as the best Computer Science student in 12th grade at NC Jindal Public School, recognizing my academic excellence and leadership in the field.",
    ],
  },
  {
    title: "Academic Excellence Awards",
    points: [
      "Received the Scholar's Badge and Certificate of Scholarship for outstanding academic achievements throughout 11th and 12th grade.",
    ],
  },
  {
    title: "Published Research",
    points: [
      "Published four impactful research papers in machine learning, including innovative works on text classification, YouTube ranking, COVID-19 detection, and accident identification using advanced deep learning techniques.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vandit never stopped asking questions from the day he joined the team. I have worked with him for a year where he has shown tremendous ability to learn new skills. He was one of the core members in the team, who was involved in the successful implementation of a re-engineering program in support of the latest azure cloud offering. I highly recommend Vandit to any organisation.",
    name: "Venkatesh AV",
    designation: "Lead Data Engineer",
    company: "The Open University",
    image: venkatesh,
    linkedin: "https://www.linkedin.com/in/venkatesh-av-74382946/",
  },
  {
    testimonial:
      "I wholeheartedly endorse Vandit Gupta for his outstanding academic and research contributions. His innovative approach, leadership in collaborative projects, and significant conference papers highlight his deep understanding of technology and research. Vandit's dedication and technical acumen make him an exemplary candidate for advanced endeavors.",
    name: "Dr. Deepak Gupta",
    designation: "Assistant Professor",
    company: "Maharaja Agrasen Institute of Technology",
    image: deepak,
    linkedin: "https://www.linkedin.com/in/deepak-gupta-90156685/",
  },
  {
    testimonial:
      "Vandit's passion, proficiency, and problem-solving skills make him a standout team member with a rare blend of technical prowess and interpersonal skills. At Open University, he's been pivotal in data solutions, displaying deep knowledge in data pipelines and ETL processes. His commitment to cooperation and continuous learning makes him an invaluable asset.",
    name: "Raj Basu",
    designation: "Data Engineering Lead",
    company: "The Open University",
    image: raj,
    linkedin: "https://www.linkedin.com/in/raj-basu-852bb114/",
  },
];

export {
  services,
  bio,
  technologies,
  experiences,
  testimonials,
  projects,
  research_papers,
  achievements,
};