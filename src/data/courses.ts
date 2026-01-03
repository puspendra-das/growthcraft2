import { Code2, Palette, Cloud, Brain, Rocket, Globe, Smartphone, Shield, Wrench, ShoppingCart, Briefcase, FolderGit2 } from "lucide-react";

export interface Course {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  topics: string[];
  description?: string;
}

export interface TrainingProgram {
  id: string;
  name: string;
  domain: string;
  duration: string;
  focusAreas: string[];
  techStack: string[];
}

export interface Event {
  id: string;
  name: string;
  type: "Workshop" | "Bootcamp" | "Hackathon";
  duration: string;
  domain: string;
  topics: string[];
}

export const courseCategories = [
  { id: "programming", icon: Code2, name: "Programming & CS", courses: 4, description: "Core programming, algorithms, and competitive coding" },
  { id: "web-dev", icon: Globe, name: "Web Development", courses: 18, description: "Frontend, backend, and full-stack web technologies" },
  { id: "data-science", icon: Brain, name: "Data Science & Analytics", courses: 12, description: "Python, ML, AI, and data visualization tools" },
  { id: "devops", icon: Cloud, name: "DevOps & Cloud", courses: 8, description: "CI/CD, containers, AWS, Azure, and GCP" },
  { id: "cybersecurity", icon: Shield, name: "Cybersecurity", courses: 5, description: "Ethical hacking, network security, and bug bounty" },
  { id: "mobile", icon: Smartphone, name: "Mobile Development", courses: 5, description: "Flutter, React Native, iOS, and Android apps" },
  { id: "ui-ux", icon: Palette, name: "UI/UX & Design", courses: 6, description: "Figma, design systems, and user experience" },
  { id: "software-eng", icon: Wrench, name: "Software Engineering", courses: 6, description: "Git, Agile, system design, and architecture" },
  { id: "projects", icon: FolderGit2, name: "Project-Based Learning", courses: 4, description: "Real-world projects and internship simulations" },
  { id: "career", icon: Briefcase, name: "Career Prep & Soft Skills", courses: 4, description: "Resume, interviews, and communication skills" },
  { id: "cms", icon: ShoppingCart, name: "CMS & eCommerce", courses: 8, description: "WordPress, Shopify, and headless CMS development" },
];

export const courses: Course[] = [
  // Programming & CS
  { id: "python-101", name: "CodeCraft: Python 101", category: "Programming & CS", subcategory: "Core Programming", level: "Beginner", duration: "25 hrs", topics: ["Python Basics", "Data Types", "Loops", "Functions"] },
  { id: "java-cpp-csharp", name: "CodeCombat: Java, C++, C# Crash Course", category: "Programming & CS", subcategory: "Core Programming", level: "Intermediate", duration: "30 hrs", topics: ["Java", "C++", "C#", "OOP", "Error Handling"] },
  { id: "dsa-mastery", name: "AlgoAce: Mastering DSA", category: "Programming & CS", subcategory: "CS Concepts", level: "Intermediate", duration: "35 hrs", topics: ["Arrays", "Linked Lists", "Trees", "Graphs"] },
  { id: "cp-bootcamp", name: "CP Sprint: Competitive Coding Bootcamp", category: "Programming & CS", subcategory: "Competitive Programming", level: "Advanced", duration: "40 hrs", topics: ["Codeforces", "AtCoder", "LeetCode"] },
  
  // Web Development - Frontend
  { id: "html-essentials", name: "HTML Essentials", category: "Web Development", subcategory: "Frontend Development", level: "Beginner", duration: "15 hrs", topics: ["HTML5 Tags", "Forms", "SEO Tags"] },
  { id: "css-creatives", name: "CSS for Creatives", category: "Web Development", subcategory: "Frontend Development", level: "Beginner", duration: "20 hrs", topics: ["Flexbox", "Grid", "Animations"] },
  { id: "js-launchpad", name: "JavaScript Launchpad", category: "Web Development", subcategory: "Frontend Development", level: "Intermediate", duration: "25 hrs", topics: ["DOM", "Events", "Fetch API"] },
  { id: "webstart-html", name: "WebStart: HTML to DOM", category: "Web Development", subcategory: "Frontend Development", level: "Beginner", duration: "20 hrs", topics: ["HTML5", "CSS3", "DOM", "Responsive Design"] },
  { id: "react-ready", name: "React Ready: Build with Components", category: "Web Development", subcategory: "Frontend Development", level: "Intermediate", duration: "28 hrs", topics: ["React", "JSX", "Props", "State", "Routing"] },
  { id: "react-rockets", name: "ReactRockets: React.js Mastery", category: "Web Development", subcategory: "Frontend Development", level: "Intermediate", duration: "30 hrs", topics: ["Hooks", "Context", "Router"] },
  { id: "vue-verse", name: "VueVerse: Vue.js Mastery", category: "Web Development", subcategory: "Frontend Development", level: "Advanced", duration: "32 hrs", topics: ["Vue CLI", "Vuex", "Vue Router", "SSR"] },
  { id: "vue-vibes", name: "Vue Vibes", category: "Web Development", subcategory: "Frontend Development", level: "Intermediate", duration: "28 hrs", topics: ["Vue Directives", "State Mgmt"] },
  
  // Web Development - Backend
  { id: "backend-basics", name: "Backend Basics: Node.js & Express", category: "Web Development", subcategory: "Backend Development", level: "Beginner", duration: "20 hrs", topics: ["Express Setup", "Routing", "Middleware"] },
  { id: "backend-builder", name: "BackendBuilder: API Basics", category: "Web Development", subcategory: "Backend Development", level: "Beginner", duration: "22 hrs", topics: ["Node.js", "Express", "REST APIs", "JSON"] },
  { id: "django-pro", name: "Django Pro: Web Apps with Python", category: "Web Development", subcategory: "Backend Development", level: "Intermediate", duration: "30 hrs", topics: ["Django Models", "Views", "Admin", "ORM"] },
  { id: "django-drive", name: "Django Drive", category: "Web Development", subcategory: "Backend Development", level: "Intermediate", duration: "25 hrs", topics: ["ORM", "Django Admin", "API Views"] },
  
  // Web Development - Full Stack
  { id: "mern-fusion", name: "FullStack Fusion: MERN Track", category: "Web Development", subcategory: "Full-Stack Tracks", level: "Advanced", duration: "45 hrs", topics: ["MongoDB", "Express", "React", "Node.js"] },
  { id: "mern-forge", name: "FullStack Forge: MERN Bootcamp", category: "Web Development", subcategory: "Fullstack", level: "Advanced", duration: "45 hrs", topics: ["MongoDB", "Express", "React", "Node"] },
  { id: "nextjs-ninja", name: "Next.js Ninja", category: "Web Development", subcategory: "Fullstack", level: "Advanced", duration: "35 hrs", topics: ["SSR", "SSG", "File Routing"] },
  
  // Data Science & Analytics
  { id: "python-analysts", name: "DataX: Python for Analysts", category: "Data Science & Analytics", subcategory: "Foundations", level: "Beginner", duration: "26 hrs", topics: ["Python", "Pandas", "NumPy", "SQL"] },
  { id: "pylab-data", name: "PyLab: Python for Data Science", category: "Data Science & Analytics", subcategory: "Foundations", level: "Beginner", duration: "30 hrs", topics: ["Numpy", "Pandas", "Matplotlib"] },
  { id: "sql-skills", name: "SQL Skills Builder", category: "Data Science & Analytics", subcategory: "Databases & SQL", level: "Beginner", duration: "20 hrs", topics: ["Joins", "Aggregates", "Subqueries"] },
  { id: "datadrill-excel", name: "DataDrill: Excel & Google Sheets", category: "Data Science & Analytics", subcategory: "Analytics Tools", level: "Beginner", duration: "18 hrs", topics: ["Functions", "Pivot Tables", "Visualization"] },
  { id: "powerbi-beginners", name: "PowerUp BI: Power BI for Beginners", category: "Data Science & Analytics", subcategory: "Analytics Tools", level: "Intermediate", duration: "25 hrs", topics: ["DAX", "Power Query", "Dashboards"] },
  { id: "tableau-trail", name: "Tableau Trailblazer", category: "Data Science & Analytics", subcategory: "Analytics Tools", level: "Intermediate", duration: "22 hrs", topics: ["Visual Analytics", "Storytelling"] },
  { id: "analytics-guru", name: "Analytics Guru: Visualize Everything", category: "Data Science & Analytics", subcategory: "Analytics Tools", level: "Intermediate", duration: "30 hrs", topics: ["Power BI", "Tableau", "Dashboards", "KPIs"] },
  { id: "ml-launchpad", name: "ML Launchpad: Machine Learning Essentials", category: "Data Science & Analytics", subcategory: "Advanced Tracks", level: "Intermediate", duration: "34 hrs", topics: ["Supervised Learning", "Scikit-learn", "Linear Regression"] },
  { id: "ml-quest", name: "ML Quest: Intro to Machine Learning", category: "Data Science & Analytics", subcategory: "Machine Learning", level: "Intermediate", duration: "30 hrs", topics: ["Linear Regression", "Classification"] },
  { id: "genai-build", name: "AI & You: Build with GenAI", category: "Data Science & Analytics", subcategory: "Advanced Tracks", level: "Advanced", duration: "38 hrs", topics: ["LLMs", "LangChain", "OpenAI API", "Prompt Engineering"] },
  { id: "deepdive-ai", name: "DeepDive AI: Neural Networks Bootcamp", category: "Data Science & Analytics", subcategory: "Deep Learning", level: "Advanced", duration: "40 hrs", topics: ["CNNs", "RNNs", "PyTorch"] },
  { id: "nlp-navigator", name: "NLP Navigator", category: "Data Science & Analytics", subcategory: "Machine Learning", level: "Advanced", duration: "35 hrs", topics: ["Text Preprocessing", "Transformers"] },
  
  // DevOps & Cloud
  { id: "devops-jumpstart", name: "DevOps Jumpstart", category: "DevOps & Cloud", subcategory: "DevOps Foundations", level: "Beginner", duration: "20 hrs", topics: ["Linux", "Bash", "Git", "CI/CD Basics"] },
  { id: "devops-drive", name: "DevOps Drive: Foundations", category: "DevOps & Cloud", subcategory: "DevOps", level: "Beginner", duration: "20 hrs", topics: ["DevOps Lifecycle", "GitOps"] },
  { id: "cicd-crash", name: "CI/CD Crash Course", category: "DevOps & Cloud", subcategory: "DevOps", level: "Intermediate", duration: "22 hrs", topics: ["Jenkins", "GitHub Actions", "Pipelines"] },
  { id: "cloudclimb", name: "CloudClimb: AWS & Azure Foundations", category: "DevOps & Cloud", subcategory: "Cloud Track", level: "Intermediate", duration: "32 hrs", topics: ["EC2", "S3", "IAM", "GCP Intro", "Azure Fundamentals"] },
  { id: "cloudbasics", name: "CloudBasics: AWS, Azure, GCP", category: "DevOps & Cloud", subcategory: "Cloud Providers", level: "Beginner", duration: "25 hrs", topics: ["IAM", "EC2", "Storage", "Billing"] },
  { id: "cloudbuilder", name: "CloudBuilder: AWS Projects", category: "DevOps & Cloud", subcategory: "Cloud Providers", level: "Intermediate", duration: "28 hrs", topics: ["Lambda", "S3", "DynamoDB"] },
  { id: "docker-domination", name: "Docker Domination", category: "DevOps & Cloud", subcategory: "Containers", level: "Intermediate", duration: "25 hrs", topics: ["Dockerfile", "Compose", "Volumes"] },
  { id: "dockit-containers", name: "DockIt: Containers and Orchestration", category: "DevOps & Cloud", subcategory: "Containers & Orchestration", level: "Advanced", duration: "35 hrs", topics: ["Docker", "Docker Compose", "Kubernetes", "Helm"] },
  { id: "kubernetes-kraft", name: "Kubernetes Kraft", category: "DevOps & Cloud", subcategory: "Containers", level: "Advanced", duration: "30 hrs", topics: ["Pods", "Services", "Deployments"] },
  
  // Cybersecurity
  { id: "cyberstart-intro", name: "CyberStart: Intro to Cybersecurity", category: "Cybersecurity", subcategory: "Fundamentals", level: "Beginner", duration: "20 hrs", topics: ["Threats", "CIA Triad", "Encryption"] },
  { id: "cyberstart-hacking", name: "CyberStart: Fundamentals of Ethical Hacking", category: "Cybersecurity", subcategory: "Cybersecurity Fundamentals", level: "Beginner", duration: "24 hrs", topics: ["OWASP Top 10", "Phishing", "Firewalls"] },
  { id: "netshield", name: "NetShield: Network Security", category: "Cybersecurity", subcategory: "Fundamentals", level: "Beginner", duration: "20 hrs", topics: ["OSI Model", "Firewalls", "IDS/IPS"] },
  { id: "ethical-hacker", name: "Ethical Hacker Express", category: "Cybersecurity", subcategory: "Advanced Security", level: "Intermediate", duration: "28 hrs", topics: ["Kali Linux", "Scanning", "Metasploit"] },
  { id: "hackops-bugbounty", name: "HackOps: Bug Bounty & CTF Lab", category: "Cybersecurity", subcategory: "Advanced Cyber Topics", level: "Advanced", duration: "36 hrs", topics: ["CTF Platforms", "Burp Suite", "Network Exploits"] },
  { id: "bug-bounty", name: "Bug Bounty Bootcamp", category: "Cybersecurity", subcategory: "Advanced Security", level: "Advanced", duration: "35 hrs", topics: ["XSS", "SQLi", "IDOR"] },
  
  // Mobile Development
  { id: "appstarter-flutter", name: "AppStarter: Mobile Dev with Flutter", category: "Mobile App Development", subcategory: "Native & Cross Platform", level: "Beginner", duration: "28 hrs", topics: ["Dart", "Flutter Widgets", "Layouts"] },
  { id: "android-kotlin", name: "Android Starter: Kotlin Kickoff", category: "Mobile Development", subcategory: "Native App Development", level: "Beginner", duration: "25 hrs", topics: ["UI Layouts", "Intents", "Jetpack"] },
  { id: "ios-swift", name: "iOS Insights: Swift Basics", category: "Mobile Development", subcategory: "Native App Development", level: "Beginner", duration: "22 hrs", topics: ["Swift Syntax", "Storyboards", "Xcode"] },
  { id: "ios-insight", name: "iOS Insight: Swift Essentials", category: "Mobile App Development", subcategory: "Native & Cross Platform", level: "Intermediate", duration: "30 hrs", topics: ["Swift", "Xcode", "UI Kit", "MVVM"] },
  { id: "flutterverse", name: "FlutterVerse: Cross-Platform Apps", category: "Mobile Development", subcategory: "Cross-platform", level: "Intermediate", duration: "28 hrs", topics: ["Widgets", "State Mgmt", "Firebase"] },
  { id: "react-native-rider", name: "React Native Rider", category: "Mobile Development", subcategory: "Cross-platform", level: "Intermediate", duration: "30 hrs", topics: ["Navigation", "Redux", "Expo"] },
  { id: "mobilecloud-backend", name: "MobileCloud: Backend for Apps", category: "Mobile App Development", subcategory: "Backend for Mobile Apps", level: "Intermediate", duration: "26 hrs", topics: ["Firebase", "Supabase", "Auth", "Realtime DB"] },
  
  // UI/UX & Design
  { id: "ui-essentials", name: "UI Essentials: Intro to UI Design", category: "UI/UX & Design", subcategory: "Fundamentals", level: "Beginner", duration: "15 hrs", topics: ["Color", "Typography", "Layout"] },
  { id: "ux-genesis", name: "UX Genesis: Intro to User Experience", category: "UI/UX & Design", subcategory: "UI/UX Principles & Tools", level: "Beginner", duration: "20 hrs", topics: ["Design Thinking", "Wireframing", "Figma Basics"] },
  { id: "figma-flow", name: "FigmaFlow: From Sketch to Screen", category: "UI/UX & Design", subcategory: "UI/UX Principles & Tools", level: "Intermediate", duration: "25 hrs", topics: ["Components", "Auto Layout", "Prototypes"] },
  { id: "figma-design", name: "Figma Flow: Design to Prototype", category: "UI/UX & Design", subcategory: "Tools & Software", level: "Intermediate", duration: "25 hrs", topics: ["Wireframes", "Components", "Prototypes"] },
  { id: "ux-impact", name: "UX Impact: Journey Mapping", category: "UI/UX & Design", subcategory: "Experience Design", level: "Intermediate", duration: "20 hrs", topics: ["Empathy Maps", "User Flows", "Personas"] },
  { id: "ux-lab", name: "UX Lab: Microinteractions and Testing", category: "UI/UX & Design", subcategory: "UI/UX Principles & Tools", level: "Advanced", duration: "30 hrs", topics: ["User Testing", "Animation", "A/B Testing"] },
  { id: "design-systems", name: "Design Systems Deep Dive", category: "UI/UX & Design", subcategory: "Advanced Design", level: "Advanced", duration: "30 hrs", topics: ["Tokens", "Pattern Libraries"] },
  
  // Software Engineering
  { id: "gitwise", name: "GitWise: Version Control 101", category: "Software Engineering", subcategory: "Version Control, SDLC, System Design", level: "Beginner", duration: "18 hrs", topics: ["Git Basics", "Branching", "GitHub Workflow"] },
  { id: "gitguru", name: "GitGuru: Version Control with Git", category: "Software Engineering", subcategory: "Tools & Tech", level: "Beginner", duration: "15 hrs", topics: ["Commits", "Branches", "GitHub"] },
  { id: "sdlc-simplified", name: "SDLC Simplified", category: "Software Engineering", subcategory: "Process & Practices", level: "Beginner", duration: "18 hrs", topics: ["Agile", "Scrum", "Waterfall"] },
  { id: "agileops", name: "AgileOps: Mastering Clean Code & Scrum", category: "Software Engineering", subcategory: "Version Control, SDLC, System Design", level: "Intermediate", duration: "24 hrs", topics: ["Agile", "Scrum", "Code Reviews", "Refactoring"] },
  { id: "agile-pro", name: "Agile Pro: Jira & Team Collaboration", category: "Software Engineering", subcategory: "Process & Practices", level: "Intermediate", duration: "22 hrs", topics: ["Sprint Planning", "Kanban", "Burndown Charts"] },
  { id: "design-patterns", name: "Design Patterns Unlocked", category: "Software Engineering", subcategory: "Architecture", level: "Intermediate", duration: "28 hrs", topics: ["Singleton", "Factory", "Observer"] },
  { id: "systemsprint", name: "SystemSprint: Design Scalable Apps", category: "Software Engineering", subcategory: "Version Control, SDLC, System Design", level: "Advanced", duration: "36 hrs", topics: ["HLD", "LLD", "Databases", "Load Balancing"] },
  { id: "system-design-starter", name: "System Design Starter", category: "Software Engineering", subcategory: "Architecture", level: "Advanced", duration: "35 hrs", topics: ["Scalability", "Caching", "DB Sharding"] },
  
  // Project-Based Learning
  { id: "capstone-builder", name: "Capstone Builder: Mini Portfolio Projects", category: "Project-Based Learning", subcategory: "Mini + Capstone Projects", level: "Beginner", duration: "20 hrs", topics: ["Portfolio Website", "Resume Site"] },
  { id: "simuworks", name: "SimuWorks: Internship Project Simulations", category: "Project-Based Learning", subcategory: "Mini + Capstone Projects", level: "Intermediate", duration: "30 hrs", topics: ["Clone Projects", "Real-World Flows"] },
  { id: "project-forge", name: "Project Forge: Real-world Internship Project", category: "Project-Based Learning", subcategory: "Internship Simulations", level: "Intermediate", duration: "30 hrs", topics: ["Version Control", "Real APIs"] },
  { id: "realworld-pro", name: "RealWorld Pro: Startup Projects", category: "Project-Based Learning", subcategory: "Mini + Capstone Projects", level: "Advanced", duration: "40 hrs", topics: ["Full Product Development", "Client Handoffs"] },
  { id: "capstone-connect", name: "Capstone Connect", category: "Project-Based Learning", subcategory: "Final Projects", level: "Advanced", duration: "40 hrs", topics: ["Product Design", "Team Collaboration"] },
  
  // Career Prep
  { id: "jobjumpstart", name: "JobJumpstart: Resume + LinkedIn Revamp", category: "Career Prep", subcategory: "Soft Skills & Interview Prep", level: "Beginner", duration: "15 hrs", topics: ["Resume Writing", "GitHub Setup", "LinkedIn SEO"] },
  { id: "resume-ready", name: "ResumeReady: Portfolio & Resume Builder", category: "Career Prep & Soft Skills", subcategory: "Career Building", level: "Beginner", duration: "12 hrs", topics: ["Resume Formats", "GitHub Portfolio"] },
  { id: "speaktech", name: "SpeakTech: Communication for Engineers", category: "Career Prep & Soft Skills", subcategory: "Soft Skills", level: "Beginner", duration: "15 hrs", topics: ["Presentations", "Meetings", "Feedback"] },
  { id: "crackit-interviews", name: "CrackIt: System Design + DSA Interviews", category: "Career Prep", subcategory: "Soft Skills & Interview Prep", level: "Intermediate", duration: "30 hrs", topics: ["Mock Interviews", "Problem Solving"] },
  { id: "interview-crack", name: "InterviewCrack: Mock Interview Series", category: "Career Prep & Soft Skills", subcategory: "Interview Prep", level: "Intermediate", duration: "20 hrs", topics: ["DSA Round", "System Design Round"] },
  { id: "techpro-leadership", name: "TechPro: Leadership & Team Dynamics", category: "Career Prep", subcategory: "Soft Skills & Interview Prep", level: "Advanced", duration: "24 hrs", topics: ["Communication", "Team Management", "Feedback Culture"] },
  
  // CMS & eCommerce
  { id: "wp-wizard", name: "WP Wizard: WordPress from Scratch", category: "CMS & eCommerce", subcategory: "Website CMS", level: "Beginner", duration: "22 hrs", topics: ["WordPress Basics", "Elementor", "Themes"] },
  { id: "wordpress-wizard", name: "WordPress Wizard", category: "CMS & eCommerce", subcategory: "WordPress", level: "Beginner", duration: "20 hrs", topics: ["Themes", "Plugins", "Customization"] },
  { id: "woocommerce-magic", name: "WooCommerce Magic: Store Setup", category: "CMS & eCommerce", subcategory: "Website CMS", level: "Intermediate", duration: "26 hrs", topics: ["Products", "Payment Gateways", "Checkout Flow"] },
  { id: "shopify-starter", name: "Shopify Starter: Ecom in a Week", category: "CMS & eCommerce", subcategory: "E-commerce Platforms", level: "Beginner", duration: "20 hrs", topics: ["Store Setup", "Themes", "Shopify Admin"] },
  { id: "shopify-sprint", name: "Shopify Sprint: Store Setup", category: "CMS & eCommerce", subcategory: "Shopify", level: "Beginner", duration: "18 hrs", topics: ["Product Listing", "Checkout", "Themes"] },
  { id: "liquid-mastery", name: "Liquid Mastery: Shopify Theme Dev", category: "CMS & eCommerce", subcategory: "E-commerce Platforms", level: "Intermediate", duration: "28 hrs", topics: ["Liquid", "Shopify CLI", "Sections", "Dynamic Content"] },
  { id: "magento-mastery", name: "Magento Mastery", category: "CMS & eCommerce", subcategory: "Magento", level: "Intermediate", duration: "22 hrs", topics: ["Product Catalog", "Admin Panel"] },
  { id: "bigcommerce", name: "BigCommerce Bootcamp", category: "CMS & eCommerce", subcategory: "BigCommerce", level: "Intermediate", duration: "22 hrs", topics: ["Store Setup", "Inventory Mgmt"] },
  { id: "cmslab", name: "CMSLab: Build & Deploy a CMS Site", category: "CMS & eCommerce", subcategory: "Project-Based CMS Builds", level: "Intermediate", duration: "30 hrs", topics: ["API Integration", "Deployment", "CMS Theming"] },
  { id: "wp-unchained", name: "WP Unchained: Headless CMS Build", category: "CMS & eCommerce", subcategory: "Project-Based CMS Builds", level: "Advanced", duration: "34 hrs", topics: ["WordPress REST API", "Next.js", "Deployment"] },
  { id: "shopify-headless", name: "Shopify Headless: Hydrogen Projects", category: "CMS & eCommerce", subcategory: "E-commerce Platforms", level: "Advanced", duration: "36 hrs", topics: ["Shopify Hydrogen", "GraphQL", "Custom APIs"] },
  { id: "headless-hero", name: "Headless Hero: JAMstack for CMS", category: "CMS & eCommerce", subcategory: "Headless CMS", level: "Advanced", duration: "30 hrs", topics: ["Gatsby", "Strapi", "Contentful"] },
];

export const trainingPrograms: TrainingProgram[] = [
  { id: "appfoundry", name: "AppFoundry: Mobile App Development with React Native", domain: "Mobile Development", duration: "40 Days", focusAreas: ["Cross-platform mobile app development", "Firebase integration", "UI building", "Navigation"], techStack: ["React Native", "Expo", "Firebase", "Redux"] },
  { id: "mern-masters", name: "MERN Masters: Full Stack Web Dev Internship", domain: "Web Application Development", duration: "40 Days", focusAreas: ["Full-stack development", "API integration", "Authentication", "Deployment"], techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Git", "Netlify"] },
  { id: "wp-wizard-internship", name: "WP Wizard: CMS Web Design & Customization with WordPress", domain: "CMS Web Development", duration: "40 Days", focusAreas: ["Theme design", "Plugin usage", "WooCommerce", "Elementor", "SEO basics"], techStack: ["WordPress", "Elementor", "WooCommerce", "cPanel", "MySQL"] },
  { id: "design-sprint", name: "DesignSprint: UI/UX Design Internship Program", domain: "UI/UX Design", duration: "40 Days", focusAreas: ["Design principles", "Wireframing", "Prototyping", "User testing", "Design systems"], techStack: ["Figma"] },
  { id: "devops-launchpad", name: "DevOps Launchpad: DevOps Engineering Internship", domain: "DevOps", duration: "40 Days", focusAreas: ["CI/CD", "Automation", "Containers", "Infrastructure as code", "Monitoring"], techStack: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Jenkins", "AWS"] },
];

export const events: Event[] = [
  { id: "promptcraft", name: "PromptCraft: AI Prompt Engineering Workshop", type: "Workshop", duration: "1 Day", domain: "AI / GenAI", topics: ["ChatGPT", "Midjourney", "Prompt Design"] },
  { id: "visionhub", name: "VisionHub: Computer Vision Bootcamp", type: "Bootcamp", duration: "2 Days", domain: "AI/ML", topics: ["OpenCV", "Image Processing", "Deep Learning"] },
  { id: "chainstart", name: "ChainStart: Blockchain Fundamentals Workshop", type: "Workshop", duration: "1 Day", domain: "Web3 / Blockchain", topics: ["Smart Contracts", "Solidity", "Ethereum"] },
  { id: "cybershield", name: "CyberShield: Ethical Hacking 101", type: "Bootcamp", duration: "3 Days", domain: "Cybersecurity", topics: ["Kali Linux", "Burp Suite", "Recon", "OWASP"] },
  { id: "dataviz-lab", name: "DataViz Lab: Storytelling with Data", type: "Workshop", duration: "1 Day", domain: "Data Analytics", topics: ["Tableau", "Power BI", "Dashboards"] },
  { id: "designhack", name: "DesignHack: Figma + UX Jam", type: "Hackathon", duration: "2 Days", domain: "UI/UX", topics: ["Figma", "Prototyping", "User Journey Mapping"] },
  { id: "fullstack-rush", name: "FullStack Rush: Build & Deploy a Web App", type: "Bootcamp", duration: "3 Days", domain: "MERN Stack", topics: ["Frontend", "Backend", "Deployment"] },
  { id: "cloudrush", name: "CloudRush: Deploy to the Cloud", type: "Bootcamp", duration: "2 Days", domain: "Cloud Computing", topics: ["AWS/GCP/Azure", "EC2", "S3", "IAM"] },
  { id: "gamestorm", name: "GameStorm: Intro to Game Dev with Unity", type: "Workshop", duration: "1 Day", domain: "Game Development", topics: ["Unity", "C#", "2D Game Project"] },
  { id: "prodmind", name: "ProdMind: Product Thinking for Developers", type: "Workshop", duration: "1 Day", domain: "Product Management", topics: ["MVPs", "Market Fit", "User Personas"] },
  { id: "securecode", name: "SecureCode: Web App Security Crash Course", type: "Workshop", duration: "1 Day", domain: "Cybersecurity", topics: ["SQLi", "XSS", "CSRF", "Auth Flaws"] },
  { id: "datalab", name: "DataLab: Build a Regression Model", type: "Bootcamp", duration: "2 Days", domain: "Data Science", topics: ["Pandas", "Sklearn", "Linear Regression"] },
  { id: "wpgo", name: "WPGo: WordPress Design Challenge", type: "Hackathon", duration: "2 Days", domain: "CMS/Web", topics: ["Elementor", "WooCommerce", "Blogging"] },
  { id: "nativex", name: "NativeX: React Native Deep Dive", type: "Bootcamp", duration: "3 Days", domain: "Mobile Development", topics: ["RN Navigation", "Firebase", "APIs"] },
  { id: "scriptninja", name: "ScriptNinja: JavaScript + DOM Workshop", type: "Workshop", duration: "1 Day", domain: "Web Development", topics: ["JS Basics", "DOM Projects"] },
  { id: "vrjam", name: "VRJam: Intro to AR/VR Design", type: "Workshop", duration: "1 Day", domain: "AR/VR", topics: ["Unity", "Oculus SDK", "3D Design"] },
];

// Helper to get featured courses
export const getFeaturedCourses = () => courses.slice(0, 6);

// Helper to get courses by category
export const getCoursesByCategory = (category: string) => 
  courses.filter(c => c.category === category || c.category.includes(category));

// Helper to get courses by level
export const getCoursesByLevel = (level: Course["level"]) => 
  courses.filter(c => c.level === level);
