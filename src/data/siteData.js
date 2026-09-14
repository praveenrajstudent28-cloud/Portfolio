export const siteData = {
  name: "Praveen Raj",
  email: "praveenrajstudent28@gmail.com",
  phone: "+91 97980 20110",
  resumeUrl: "/Praveen_Raj_Resume.pdf",
  photoUrl: "/praveen-raj.jpeg",
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/praveen-raj-471419230/",
    },
    { label: "GitHub", url: "https://github.com/praveenrajstudent28-cloud" },
  ],
  projects: [
    {
      title: "CAR-PUF",
      category: "Machine learning",
      year: "2024",
      context: "CS771 · IIT Kanpur · Prof. Purushottam Kar",
      summary:
        "Modeled challenge-response behavior with a C-SVM classifier, transforming 32-bit challenge vectors into 528-dimensional feature representations.",
      outcome:
        "99.07% cross-validation accuracy, alongside 99.19% training accuracy.",
      stack: ["Python", "C-SVM", "Feature engineering"],
      visual: "model",
    },
    {
      title: "Online Real Estate Platform",
      category: "Software engineering",
      year: "2024",
      context: "CS253 · IIT Kanpur · Prof. Indranil Saha",
      summary:
        "Led a 10-member team to build a responsive web application for property discovery, listing publication, and buyer-seller coordination, with SQL-backed property and user records.",
      outcome:
        "Delivered a working prototype to VeerX and incorporated stakeholder feedback, supported by requirements, system design, test scenarios, and acceptance validation.",
      stack: ["JavaScript", "SQL", "HTML / CSS", "SDLC"],
      visual: "platform",
    },
    {
      title: "Who is the Real Winner?",
      category: "Applied data science",
      year: "2024",
      context: "CS253 · IIT Kanpur · Prof. Indranil Saha",
      summary:
        "Built a Random Forest multiclass pipeline to predict state-election winners’ education levels from candidate data. Used one-hot encoding, F1-score evaluation, and GridSearchCV for model selection.",
      outcome:
        "Reported private / public test scores of 0.22386 / 0.22177, and visualized candidate assets and criminal-record profiles to explore the dataset.",
      stack: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      visual: "data",
    },
    {
      title: "OOPSify",
      category: "Programming foundations",
      year: "2023",
      context: "Association of Computing Activities · IIT Kanpur",
      summary:
        "Implemented C++ data structures with dynamic memory management and object-oriented design, applying constructors, destructors, and operator overloading.",
      outcome:
        "Practiced inheritance, polymorphism, and abstraction through hands-on implementation of core programming concepts.",
      stack: ["C++", "OOP", "Memory management"],
      visual: "code",
    },
  ],
  experience: [
    {
      period: "Jan 2026 — Present",
      role: "AI Application Developer",
      company: "Oracle India",
      location: "Hyderabad",
      current: true,
      bullets: [
        "Architected a customer-data query chatbot agent for secure access to customer information.",
        "Configured an internal MCP server and automated birthday-email notifications and employee leave tracking.",
        "Resolve BASE program support tickets and help business teams debug and optimize AI agents.",
      ],
      tags: ["GenAI agents", "MCP", "Workflow automation"],
    },
    {
      period: "Jun 2025 — Dec 2025",
      role: "Data Scientist",
      company: "Axis Bank",
      location: "Bangalore",
      bullets: [
        "Engineered automation for real-time API testing and LLM token-cost optimization; built GenAI applications with CrewAI and Copilot Studio.",
        "Implemented loan-approval and risk-scoring models to estimate probability of default and support lending decisions.",
        "Validated data pipelines and delivered portfolio, profitability, and channel analytics using Python, SQL, Power BI, and Tableau.",
      ],
      tags: ["MLOps", "CrewAI", "Risk modeling"],
    },
    {
      period: "May 2024 — Jul 2024",
      role: "Summer Intern",
      company: "Reliance Industries",
      location: "India",
      bullets: [
        "Analyzed 4–5 years of LLDPE extruder data to investigate barrel leakage, dryer-current overload, and related operating issues.",
        "Supported engineering troubleshooting and managed purchase orders and requisitions in SAP.",
        "Received a pre-placement offer for internship performance and contribution.",
      ],
      tags: ["Data analysis", "Root-cause investigation", "SAP"],
    },
  ],
  achievements: [
    {
      value: "PPO",
      title: "Reliance Industries",
      detail:
        "Received a pre-placement offer following the 2024 summer internship.",
    },
    {
      value: "3531",
      title: "JEE Advanced · All India Rank",
      detail: "Ranked among 1.2 lakh shortlisted candidates in 2021.",
    },
    {
      value: "5416",
      title: "JEE Main · All India Rank",
      detail: "Secured All India Rank 5416 in 2021.",
    },
    {
      value: "37",
      title: "International Mathematics Rank",
      detail:
        "SilverZone Olympiad, 2019 · Zonal rank 4. Also qualified for RMO in 2019.",
    },
  ],
  techGroups: [
    {
      title: "AI & machine learning",
      items: [
        "Python",
        "CrewAI",
        "MCP",
        "Copilot Studio",
        "Scikit-learn",
        "LangExtract",
      ],
    },
    {
      title: "Data & analytics",
      items: ["SQL", "PySpark", "Pandas", "NumPy", "Power BI", "Tableau"],
    },
    {
      title: "Software engineering",
      items: ["C / C++", "JavaScript", "React", "HTML / CSS", "Git", "GitHub"],
    },
  ],
};
