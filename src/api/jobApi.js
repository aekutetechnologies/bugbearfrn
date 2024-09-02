import github from "../../public/assets/github.png";
import instagram from "../../public/assets/instagram.webp";

const jobs = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    salary: "$85k - $95k",
    type: ["Full-time", "Remote"],
    posted: "4 days ago",
    image: github,
    description: "As a Software Engineer at TechCorp, you will be responsible for developing, testing, and maintaining software applications. You will collaborate with cross-functional teams to deliver high-quality products.",
    responsibilities: [
      "Write clean, maintainable code.",
      "Collaborate with other engineers and teams.",
      "Troubleshoot and debug applications.",
      "Participate in code reviews."
    ],
    recruiterInfo: {
      recruiterName: "Jane Doe",
      recruiterPosition: "Senior Recruiter",
      foundedIn: "2005",
      organizationType: "Tech Company",
      companySize: "500+ employees",
      phone: "+123-456-7890",
      email: "jane.doe@techcorp.com",
      website: "https://techcorp.com"
    }
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions",
    salary: "$70k - $80k",
    type: ["Full-time", "On-site"],
    posted: "6 days ago",
    image: github,
    description: "As a Frontend Developer at WebSolutions, you'll create visually appealing and user-friendly web interfaces. You'll work closely with designers and backend developers to implement responsive designs.",
    responsibilities: [
      "Develop responsive web applications.",
      "Ensure cross-browser compatibility.",
      "Optimize applications for maximum speed.",
      "Collaborate with UX/UI designers."
    ],
    recruiterInfo: {
      recruiterName: "John Smith",
      recruiterPosition: "Talent Acquisition Specialist",
      foundedIn: "2010",
      organizationType: "Digital Agency",
      companySize: "200+ employees",
      phone: "+123-456-7891",
      email: "john.smith@websolutions.com",
      website: "https://websolutions.com"
    }
  },
  {
    title: "Backend Developer",
    company: "DataStream",
    salary: "$80k - $90k",
    type: ["Full-time", "Remote"],
    posted: "1 week ago",
    image: github,
    description: "Join DataStream as a Backend Developer and build robust, scalable server-side applications. You'll work with databases, APIs, and server infrastructure to support frontend applications.",
    responsibilities: [
      "Design and develop backend services.",
      "Integrate third-party APIs.",
      "Optimize database performance.",
      "Collaborate with frontend developers."
    ],
    recruiterInfo: {
      recruiterName: "Emily Clark",
      recruiterPosition: "Recruitment Manager",
      foundedIn: "2015",
      organizationType: "Software Solutions",
      companySize: "300+ employees",
      phone: "+123-456-7892",
      email: "emily.clark@datastream.com",
      website: "https://datastream.com"
    }
  },
  {
    title: "Data Scientist",
    company: "AnalyticsHub",
    salary: "$95k - $110k",
    type: ["Full-time", "Hybrid"],
    posted: "3 days ago",
    image: github,
    description: "As a Data Scientist at AnalyticsHub, you'll analyze complex data sets to uncover insights and support data-driven decision-making. You'll work on data modeling, predictive analytics, and machine learning projects.",
    responsibilities: [
      "Analyze and interpret complex data sets.",
      "Develop predictive models.",
      "Communicate findings to stakeholders.",
      "Support data-driven decision-making."
    ],
    recruiterInfo: {
      recruiterName: "Michael Brown",
      recruiterPosition: "Head of Recruitment",
      foundedIn: "2018",
      organizationType: "Analytics Firm",
      companySize: "150+ employees",
      phone: "+123-456-7893",
      email: "michael.brown@analyticshub.com",
      website: "https://analyticshub.com"
    }
  },
  {
    title: "Product Manager",
    company: "InnovateX",
    salary: "$100k - $120k",
    type: ["Full-time", "Remote"],
    posted: "2 weeks ago",
    image: github,
    description: "As a Product Manager at InnovateX, you will lead product development efforts from concept to launch. You will work with cross-functional teams to define product vision, strategy, and roadmap.",
    responsibilities: [
      "Define product vision and strategy.",
      "Collaborate with engineering and design teams.",
      "Conduct market research and competitive analysis.",
      "Manage product lifecycle and roadmap."
    ],
    recruiterInfo: {
      recruiterName: "Sarah Wilson",
      recruiterPosition: "Senior Recruiter",
      foundedIn: "2008",
      organizationType: "Tech Innovation",
      companySize: "400+ employees",
      phone: "+123-456-7894",
      email: "sarah.wilson@innovatex.com",
      website: "https://innovatex.com"
    }
  },
  {
    title: "UI/UX Designer",
    company: "Designify",
    salary: "$70k - $85k",
    type: ["Part-time", "On-site"],
    posted: "5 days ago",
    image: github,
    description: "As a UI/UX Designer at Designify, you will create intuitive and engaging user experiences. You will work closely with stakeholders to understand user needs and design solutions that meet those needs.",
    responsibilities: [
      "Design user interfaces and experiences.",
      "Conduct user research and usability testing.",
      "Create wireframes and prototypes.",
      "Collaborate with developers and stakeholders."
    ],
    recruiterInfo: {
      recruiterName: "Laura Johnson",
      recruiterPosition: "Recruitment Coordinator",
      foundedIn: "2012",
      organizationType: "Design Agency",
      companySize: "100+ employees",
      phone: "+123-456-7895",
      email: "laura.johnson@designify.com",
      website: "https://designify.com"
    }
  },
  {
    title: "DevOps Engineer",
    company: "CloudOps",
    salary: "$90k - $105k",
    type: ["Full-time", "Remote"],
    posted: "1 week ago",
    image: github,
    description: "As a DevOps Engineer at CloudOps, you'll work on automating and streamlining the software development lifecycle. You'll manage infrastructure, deploy applications, and ensure system reliability.",
    responsibilities: [
      "Automate deployment processes.",
      "Manage cloud infrastructure.",
      "Monitor system performance and reliability.",
      "Collaborate with development and operations teams."
    ],
    recruiterInfo: {
      recruiterName: "James Lee",
      recruiterPosition: "Talent Acquisition Lead",
      foundedIn: "2016",
      organizationType: "Cloud Services",
      companySize: "250+ employees",
      phone: "+123-456-7896",
      email: "james.lee@cloudops.com",
      website: "https://cloudops.com"
    }
  },
];

export default jobs;
