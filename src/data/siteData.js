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
      title: "APEX API Wrapper",
      category: "Backend engineering",
      year: "2026",
      context: "Public demo · Based on my API integration work",
      summary:
        "Built an asynchronous REST wrapper with Python, FastAPI and HTTPX to connect agent workflows to APEX services. Centralized upstream calls, configurable authentication, query forwarding, timeouts and error responses.",
      outcome:
        "The public demo runs against a local mock service and includes request logging, health checks, automated tests, Docker Compose and a Kubernetes deployment example.",
      stack: ["Python", "FastAPI", "HTTPX", "Docker", "Kubernetes"],
      visual: "api",
      resultLabel: "Explore the demo",
      repoUrl: "https://github.com/praveenrajstudent28-cloud/Apex-Wrapper",
      repoLabel: "View public demo",
      featured: true,
    },
    {
      title: "CAR-PUF",
      category: "Machine learning",
      year: "2024",
      context: "CS771 · IIT Kanpur · Prof. Purushottam Kar",
      summary:
        "Constructed a C-SVM model for CAR-PUF challenge-response prediction, transforming 32-bit challenge vectors into 528-dimensional features. Compared linear classifiers and studied the accuracy/training-time trade-off across C and tolerance settings.",
      outcome:
        "99.07% cross-validation accuracy, alongside 99.19% training accuracy.",
      stack: ["Python", "C-SVM", "Feature engineering"],
      visual: "model",
      repoUrl: "https://github.com/praveenrajstudent28-cloud/CS771-Assignment-CAR-PUF",
      repoLabel: "View repository overview",
    },
    {
      title: "Online Real Estate Platform",
      category: "Software engineering",
      year: "2024",
      context: "CS253 · IIT Kanpur · Prof. Indranil Saha",
      summary:
        "Led a 10-member team on a real-estate brokerage prototype using React, Django and MySQL. Co-authored the SRS and design documents, and contributed to frontend planning for property, portfolio, watchlist and funds pages.",
      outcome:
        "Co-designed eight state diagrams for account, property and order workflows. Presented the prototype to VeerX and refined requirements using faculty and stakeholder feedback.",
      stack: ["React", "Django", "MySQL", "System design"],
      visual: "platform",
      resultLabel: "My contribution",
      repoUrl: "https://github.com/praveenrajstudent28-cloud/Real_Estate_Broker_WebApp",
    },
    {
      title: "Who is the Real Winner?",
      category: "Applied data science",
      year: "2024",
      context: "CS253 · IIT Kanpur · Prof. Indranil Saha",
      summary:
        "Built a Random Forest pipeline to predict 10 education categories from election-candidate data. Normalized asset and liability amounts in Pandas and one-hot encoded state and party features alongside criminal-case data.",
      outcome:
        "Evaluated 72 hyperparameter combinations with five-fold GridSearchCV and micro-F1 scoring. Reported competition scores: 0.22386 private test and 0.22177 public test.",
      stack: ["Python", "Scikit-learn", "Pandas", "GridSearchCV"],
      visual: "data",
      repoUrl: "https://github.com/praveenrajstudent28-cloud/CS253-Assignment",
    },
    {
      title: "OOPSify",
      category: "Programming foundations",
      year: "2023",
      context: "Association of Computing Activities · IIT Kanpur",
      summary:
        "Implemented a command-line student-record manager in C++ using structs and vectors. Added records containing names, roll numbers and departments, and retrieved matching records through roll-number queries.",
      outcome:
        "Completed exercises in arithmetic swapping, combinations and string case conversion. Studied memory management and object-oriented concepts alongside these programming assignments.",
      stack: ["C++", "Structs & vectors", "Programming foundations"],
      visual: "code",
      repoUrl: "https://github.com/praveenrajstudent28-cloud/ACA-OOPSIFY-asssigments",
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
        "Built AI agents and GenAI workflows using prompt engineering to automate internal business processes, reducing manual effort by 86%.",
        "Developed REST API wrappers in Python (FastAPI) and JavaScript (Node.js/Express) for Oracle APEX services, with request timeouts, error handling and diagnostic logging.",
        "Provided BASE (Business AI Studio Enablement) technical support by resolving user tickets.",
        "Helped business teams debug and optimize AI agents, improving adoption and development efficiency.",
        "Architected a customer-data query chatbot agent for secure access to customer information.",
        "Built and configured an MCP server for employee events, automating birthday notifications, anniversary tracking and employee leave workflows.",
        "Received Rockstar of the Month (Applause Award) in May 2026.",
      ],
      tags: ["Python", "LangGraph", "LangChain", "FastMCP", "FastAPI", "Node.js / Express", "Docker", "Kubernetes"],
    },
    {
      period: "Jun 2025 — Dec 2025",
      role: "Data Scientist · MLOps & GenAI Application Development",
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
        "Executed engineering solutions that increased plant output and overall efficiency by 25%.",
        "Received a pre-placement offer for internship performance and contribution.",
      ],
      tags: ["Data analysis", "Root-cause investigation", "SAP"],
    },
  ],
  achievements: [
    {
      value: "May ’26",
      title: "Oracle · Rockstar of the Month",
      detail: "Received the Applause Award for contributions at Oracle.",
    },
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
        "LangGraph",
        "LangChain",
        "FastMCP",
        "Prompt engineering",
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
      items: ["C / C++", "JavaScript", "React", "Django", "FastAPI", "Node.js / Express", "REST APIs", "Docker", "Kubernetes", "Git / GitHub"],
    },
  ],
};
