/**
 * =======================================================================
 * PORTFOLIO DATA & CONFIGURATION
 * =======================================================================
 * All customizable links, personal details, project URLs, and asset
 * placeholders are centralized here for easy maintenance and replacement.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featuredBadge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'Code2' | 'BrainCircuit' | 'Database' | 'Globe' | 'Wrench';
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Jassim A",
    professionalTitle: "Aspiring AI & Data Science Engineer",
    tagline: "Building intelligent solutions with AI, ML and modern technologies.",
    heroGreeting: "Hi, I'm Jassim A",
    heroSubtitle: "AI & Data Science Student",
    rolesForTyping: [
      "AI & Data Science Student",
      "Aspiring AI Engineer",
      "Machine Learning Enthusiast",
      "Problem Solver"
    ],
    aboutText: "I am Jassim A, a B.Tech Artificial Intelligence and Data Science student at VSB College of Engineering Technical Campus, Coimbatore, with a strong interest in Artificial Intelligence, Machine Learning, Data Analytics, and modern software development. I am driven by the curiosity to build practical, scalable technology solutions that address real-world challenges. Continuously sharpening my problem-solving acumen and algorithmic thinking, I actively develop hands-on projects spanning machine learning models, natural language interfaces, and computer vision systems. I am seeking internship and entry-level placement opportunities where I can contribute to forward-thinking engineering teams.",
    college: "VSB College of Engineering Technical Campus, Coimbatore",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    currentYear: "3rd Year",
    expectedGraduation: "2028",
    cgpa: "8.0",
    twelfthPercentage: "70%",
    location: "Coimbatore, India",
    phone: "8148508991",
    email: "jassimameer19@gmail.com",
    // Core Links & Placeholders
    githubUrl: "[GITHUB_URL]",
    linkedinUrl: "[LINKEDIN_URL]",
    leetcodeUrl: "[LEETCODE_URL]",
    resumeUrl: "[RESUME_URL]",
    profileImageUrl: "[PROFILE_IMAGE_URL]",
  },

  skillsCategories: [
    {
      title: "Programming",
      iconName: "Code2",
      skills: ["Python", "JavaScript"],
    },
    {
      title: "AI & Machine Learning",
      iconName: "BrainCircuit",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs"],
    },
    {
      title: "Data",
      iconName: "Database",
      skills: [
        "SQL",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Power BI",
        "Excel",
      ],
    },
    {
      title: "Web / Development",
      iconName: "Globe",
      skills: ["HTML", "CSS", "Flask", "Node.js"],
    },
    {
      title: "Tools",
      iconName: "Wrench",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: "B.Tech – Artificial Intelligence and Data Science",
      institution: "VSB College of Engineering Technical Campus, Coimbatore",
      timeline: "Expected Graduation: 2028",
      score: "CGPA: 8.0",
      status: "Currently in 3rd Year",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "State Board Education",
      timeline: "Completed",
      score: "Percentage: 70%",
      status: "Science / Mathematics Stream",
    },
  ],

  projects: [
    {
      id: "fake-job-detection",
      title: "Fake Job Detection",
      description:
        "An AI/ML-based application designed to help identify whether a LinkedIn or online job posting appears genuine by analyzing the provided job description.",
      problem:
        "Helps users identify potentially suspicious or fake job postings and improves awareness of fraudulent recruitment content.",
      technologies: ["Machine Learning", "Flask", "Node.js", "Postman"],
      githubUrl: "[FAKE_JOB_GITHUB_URL]",
      liveUrl: "[FAKE_JOB_LIVE_URL]",
      imageUrl: "[FAKE_JOB_IMAGE]",
      featuredBadge: "AI / ML Security",
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot application that uses LLM technology to interact with users and provide intelligent responses based on job-description-related queries.",
      problem:
        "Streamlines understanding of job roles and requirements through conversational context queries.",
      technologies: ["LLM", "Flask", "Node.js", "Postman"],
      githubUrl: "[AI_CHATBOT_GITHUB_URL]",
      liveUrl: "[AI_CHATBOT_LIVE_URL]",
      imageUrl: "[AI_CHATBOT_IMAGE]",
      featuredBadge: "Generative AI / LLM",
    },
    {
      id: "invisible-cloak",
      title: "Invisible Cloak",
      description:
        "A computer vision project built using Python, OpenCV, and NumPy that creates an invisible-cloak effect by detecting a selected color region and replacing it with the previously captured background.",
      problem:
        "Demonstrates real-time color masking, morphological operations, and frame-substitution in Computer Vision.",
      technologies: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      githubUrl: "[INVISIBLE_CLOAK_GITHUB_URL]",
      liveUrl: "[INVISIBLE_CLOAK_LIVE_URL]",
      imageUrl: "[INVISIBLE_CLOAK_IMAGE]",
      featuredBadge: "Computer Vision",
    },
  ] as Project[],

  experience: [
    {
      organization: "Inamigose Foundation",
      role: "AI & Data Analytics Intern",
      duration: "2 Months",
      year: "2026",
      description:
        "Worked on an AI and Data Analytics project involving data analysis and visualization while gaining practical exposure to industry-oriented workflows.",
      technologies: ["Power BI", "Excel", "Data Analytics"],
    },
  ],

  certifications: [
    {
      title: "AI & Data Analytics Internship",
      organization: "Inamigose Foundation",
      year: "2026",
      type: "Internship Certificate",
      certificateUrl: "[CERTIFICATE_URL]",
      credentialId: "INAM-AIDA-2026",
    },
  ],

  achievements: [
    {
      title: "80+ LeetCode Problems Solved",
      description: "Consistent problem-solving in data structures and algorithms.",
      profileUrl: "[LEETCODE_URL]",
      badge: "Problem Solving",
      metric: "80+",
    },
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      metric: "80+ problems solved",
      subtitle: "Data Structures & Algorithms",
      url: "[LEETCODE_URL]",
      icon: "Code2",
    },
    {
      platform: "GitHub",
      metric: "5 repositories",
      subtitle: "Open Source & Projects",
      url: "[GITHUB_URL]",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      metric: "Professional Network",
      subtitle: "Career & Placement",
      url: "[LINKEDIN_URL]",
      icon: "Linkedin",
    },
  ],
};
