export const PORTFOLIO = {
  identity: {
    name: 'Jeet Shah',
    monogram: 'JS',
    handle: '@jeet9108',
    avatar: 'https://avatars.githubusercontent.com/u/198361971?v=4',
    role: 'IT Developer & Founder of OptSkill',
    headline: 'Building offline-first AI systems, full-stack software & student communities.',
    location: 'Mumbai, India (IST · UTC+5:30)',
    educationBadge: "Diploma in IT · SVKM's SBMP",
    availability: 'Open to Collaborations',
    summary:
      'Information Technology diploma student in Mumbai with hands-on skills across Python, Java, C++, SQL, React.js, and Machine Learning fundamentals. Builder of FinAuditPro, MedAI (Smart Hospital Management System), and an ML-Based Digital Lawyer. Founder of OptSkill.community.',
    aboutParagraphs: [
      'I am an Information Technology diploma student at SVKM’s Shri Bhagubhai Mafatlal Polytechnic and College of Engineering, Mumbai, focused on building practical software that works reliably even in constrained, real-world environments.',
      'Across academic, hackathon, and open-source work, I bridge desktop systems, full-stack web engineering, and applied machine learning — from offline-first rural healthcare (MedAI, presented at NeoFuture Hackathon) to statutory CA audit tooling (FinAuditPro) and NLP-powered legal query classification.',
      'Beyond writing code, I founded OptSkill.community to create a peer-driven learning ecosystem for students, and served as Web Development & Technical Head Intern at Nivaah.org.'
    ]
  },

  contact: {
    email: 'jeetshah090108@gmail.com',
    phone: '+91 8104939863',
    location: 'Mumbai, Maharashtra, India',
    github: 'https://github.com/jeet9108',
    githubHandle: '@jeet9108',
    linkedin: 'https://www.linkedin.com/in/jeet-shah-341b68318/',
    linkedinHandle: 'in/jeet-shah-341b68318',
    optskillLinkedin: 'https://www.linkedin.com/company/optskillcommunity/',
    optskillInstagram: 'https://www.instagram.com/optskill.community/'
  },

  flagship: {
    badge: 'Flagship Open Source',
    statusTag: 'Offline-First Statutory Audit OS',
    highlightTag: 'ICAI SA 200–700 · CARO 2020',
    title: 'FinAuditPro — CA Audit Interface System',
    subtitle:
      'Standalone offline AI-assisted audit operating system for Indian Chartered Accountants, built with Python, Tkinter, and SQL with deterministic paise-level accounting math.',
    command: 'git clone https://github.com/jeet9108/FinAuditPro-An-Interface-for-CA',
    repoUrl: 'https://github.com/jeet9108/FinAuditPro-An-Interface-for-CA',
    tech: ['Python', 'Tkinter', 'SQL', 'Relational DB', 'ICAI Compliance']
  },

  projects: [
    {
      id: 'finauditpro',
      title: 'FinAuditPro — CA Audit Interface System',
      category: 'Systems & Desktop',
      featured: true,
      badge: 'Flagship · Python',
      shortDesc:
        'Standalone offline AI-assisted statutory audit assistant & desktop GUI engineered for Indian Chartered Accountants.',
      fullDesc:
        'Developed an interactive desktop audit management system using Python, Tkinter, and relational SQL databases for Chartered Accountants. Supports client data entry, audit tracking, deterministic paise-level financial math, and workflows aligned with the Companies Act 2013, ICAI Standards on Auditing (SA 200–SA 700), CARO 2020, and Tax Audit Form 3CD.',
      highlights: [
        '100% offline-first architecture ensuring client financial privacy',
        'Interactive Tkinter GUI for client onboarding and audit trail tracking',
        'Relational SQL backend for secure CRUD operations and record retrieval',
        'Companion prototype repository maintained at jeet9108/Python'
      ],
      tech: ['Python', 'Tkinter', 'SQL', 'Relational Databases', 'CRUD'],
      github: 'https://github.com/jeet9108/FinAuditPro-An-Interface-for-CA',
      secondaryGithub: 'https://github.com/jeet9108/Python',
      year: '2025 – 2026'
    },
    {
      id: 'medai',
      title: 'MedAI — Smart Hospital Management System',
      category: 'Full-Stack & AI',
      featured: true,
      badge: 'NeoFuture Hackathon',
      shortDesc:
        'Offline-first MERN & FastAPI ML healthcare PWA designed for rural accessibility and low-connectivity environments.',
      fullDesc:
        'Built a web-based Smart Hospital Management System and accessible preventive healthcare PWA tailored for rural areas with intermittent or absent internet connectivity. Integrates React.js + Vite frontend, Node.js/Express.js + Socket.io backend for real-time doctor-patient messaging, nearby hospital discovery, and a Python FastAPI ML disease prediction microservice.',
      highlights: [
        'Presented at NeoFuture Hackathon organized by L.R. Tiwari College of Engineering',
        'Offline-first PWA architecture engineered for low-connectivity rural clinics',
        'Integrated FastAPI machine learning disease prediction service',
        'Real-time doctor-patient communication powered by Socket.io'
      ],
      tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'FastAPI', 'PWA'],
      github: 'https://github.com/jeet9108/MedAI',
      year: '2025 – 2026'
    },
    {
      id: 'digital-lawyer',
      title: 'ML-Based Digital Lawyer',
      category: 'AI & ML',
      featured: true,
      badge: 'NLP · Classification',
      shortDesc:
        'AI-powered legal assistance system analyzing user legal queries through NLP preprocessing and ML classification.',
      fullDesc:
        'Developing an intelligent legal assistance system that parses natural-language legal questions, applies structured text preprocessing pipelines, and classifies queries to surface relevant legal guidance. Continuously iterating on model training and evaluation metrics to improve classification accuracy and automation.',
      highlights: [
        'End-to-end NLP text cleaning, tokenization, and feature extraction',
        'Supervised classification models trained for legal domain categorization',
        'Systematic model evaluation pipeline for precision and accuracy gains'
      ],
      tech: ['Python', 'Machine Learning', 'Text Preprocessing', 'Classification', 'Model Evaluation'],
      github: 'https://github.com/jeet9108/ML-Based-Digital-Lawyer',
      year: '2025 – Present'
    },
    {
      id: 'flavours-of-india',
      title: 'Flavours of India',
      category: 'Full-Stack & AI',
      featured: true,
      badge: 'React.js',
      shortDesc:
        'Interactive React.js web experience showcasing India’s diverse culinary heritage and regional culture.',
      fullDesc:
        'Designed and built an interactive React.js web application celebrating India’s diverse regional cuisines and cultural stories through clean component architecture, responsive layouts, and intuitive browsing.',
      highlights: [
        'Modular React.js component design with smooth client-side navigation',
        'Responsive visual layout crafted for desktop and mobile discovery'
      ],
      tech: ['React.js', 'JavaScript', 'CSS', 'Responsive UI'],
      github: 'https://github.com/jeet9108/Flavours-of-India',
      year: '2025'
    },
    {
      id: 'tata-forage-viz',
      title: 'Tata Business Data Visualization',
      category: 'Data & Web',
      featured: false,
      badge: 'Forage Simulation',
      shortDesc:
        'Executive visual reporting & interactive validated UI built during Tata’s Data Visualization simulation.',
      fullDesc:
        'Completed the Tata Data Visualization job simulation on Forage, translating raw business datasets into clear executive insights and pairing visual analytics with a responsive web interface featuring interactive UI components and client-side validation.',
      highlights: [
        'Interpreted business KPIs and multi-dimensional datasets for executive decision-making',
        'Built responsive web interface with interactive UI and input validation'
      ],
      tech: ['Data Visualization', 'HTML', 'CSS', 'JavaScript', 'Excel'],
      github: 'https://github.com/jeet9108/Tata-Business-Data-Visualization',
      year: '2025'
    },
    {
      id: 'school-website',
      title: 'School Website',
      category: 'Data & Web',
      featured: false,
      badge: 'Frontend Web',
      shortDesc:
        'Clean multi-section institutional school website built with semantic HTML, CSS, and JavaScript.',
      fullDesc:
        'Created a structured institutional website featuring clear navigation, academic information sections, and responsive page styling using foundational web technologies.',
      highlights: [
        'Semantic HTML5 structure and responsive CSS styling',
        'Published and maintained on GitHub Pages / public repository'
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/jeet9108/School-website',
      year: '2025'
    }
  ],

  experience: [
    {
      id: 'optskill',
      role: 'Founder',
      organization: 'OptSkill.community',
      type: 'Community Leadership',
      period: 'Present',
      active: true,
      location: 'Mumbai, India',
      summary:
        'Founded and lead OptSkill, a student-driven tech and upskilling community focused on hands-on learning, peer collaboration, and career readiness.',
      bullets: [
        'Established OptSkill.community from the ground up, building a collaborative space for student developers and learners.',
        'Direct community strategy, technical initiatives, workshops, and member outreach across LinkedIn and Instagram.',
        'Mentor peers on building practical projects across web development, Python, and AI fundamentals.'
      ],
      links: [
        { label: 'OptSkill LinkedIn', url: 'https://www.linkedin.com/company/optskillcommunity/' },
        { label: 'Instagram @optskill.community', url: 'https://www.instagram.com/optskill.community/' }
      ]
    },
    {
      id: 'dwarkadhish-neuralstack',
      role: 'Internship Offer — 6 Months',
      organization: 'Dwarkadhish Neuralstack Limited',
      type: 'Offer Letter',
      period: '6 Months',
      active: false,
      statusLabel: 'Offer Letter · 6 Months',
      location: 'India',
      summary:
        'Selected and issued an official 6-month Internship Offer Letter by Dwarkadhish Neuralstack Limited.',
      bullets: [
        'Received a formal 6-month internship offer letter from Dwarkadhish Neuralstack Limited.',
        'Recognized for foundational skills in Python, web technologies, databases, and machine learning.'
      ],
      links: []
    },
    {
      id: 'nivaah',
      role: 'Web Development & Technical Head Intern',
      organization: 'Nivaah.org',
      type: 'Internship',
      period: '2 Months',
      active: false,
      statusLabel: 'Completed · 2 Months',
      location: 'Remote / India',
      summary:
        'Successfully completed a 2-month Web Development and Technical Head Internship at Nivaah.org, owning frontend delivery and technical coordination.',
      bullets: [
        'Successfully completed the 2-month internship with an official Internship Completion Certificate.',
        'Led web development workflows and technical execution across responsive web pages and interactive UI features.',
        'Collaborated with team members to ship reliable web deliverables on schedule.'
      ],
      links: []
    }
  ],

  certifications: [
    {
      id: 'nivaah-internship-cert',
      title: 'Web Development & Technical Head Internship — Completion Certificate',
      issuer: 'Nivaah.org',
      category: 'Internships & Letters',
      type: 'Internship Certificate',
      details:
        'Successfully completed a 2-month Web Development and Technical Head Internship at Nivaah.org, leading frontend architecture and technical deliverables.',
      skills: ['Web Development', 'Technical Leadership', 'Frontend UI', '2 Months']
    },
    {
      id: 'dwarkadhish-offer-letter',
      title: '6-Month Internship Offer Letter',
      issuer: 'Dwarkadhish Neuralstack Limited',
      category: 'Internships & Letters',
      type: 'Offer Letter',
      details:
        'Official 6-month internship offer letter issued by Dwarkadhish Neuralstack Limited.',
      skills: ['6-Month Offer', 'Software & AI', 'Industry Selection']
    },
    {
      id: 'tata-forage',
      title: 'Empowering Business with Effective Insights — Tata Data Visualization',
      issuer: 'Forage (Licensed Course)',
      category: 'Data & Analytics',
      type: 'Certification',
      details:
        'Completed Tata Group’s licensed data visualization simulation focused on framing business scenarios, choosing effective visuals, and communicating insights to leadership.',
      skills: ['Data Visualization', 'Business Insights', 'Executive Reporting']
    },
    {
      id: 'ai-tools-be10x',
      title: 'AI Tools Workshop',
      issuer: 'Raj Computers · Be10x',
      category: 'AI & ML',
      type: 'Workshop',
      details:
        'Hands-on training covering practical AI productivity workflows, prompt engineering, and automation tools for software and analytical tasks.',
      skills: ['AI Workflows', 'Automation', 'Prompting']
    },
    {
      id: 'os-cs401',
      title: 'Operating Systems (CS401)',
      issuer: 'Saylor Academy',
      category: 'Systems & CS',
      type: 'Course Certificate',
      details:
        'Core computer science coursework covering process management, CPU scheduling, concurrency, memory management, virtual memory, and file systems.',
      skills: ['Processes & Threads', 'Memory Management', 'File Systems']
    },
    {
      id: 'network-fundamentals',
      title: 'Network Fundamentals Course',
      issuer: 'Udemy',
      category: 'Systems & CS',
      type: 'Course Certificate',
      details:
        'Foundational computer networking covering OSI & TCP/IP models, IP addressing, subnetting, routing, DNS, HTTP/HTTPS, and network troubleshooting.',
      skills: ['TCP/IP', 'OSI Model', 'Routing & Protocols']
    },
    {
      id: 'dsa-cpp',
      title: 'Data Structures Using C/C++',
      issuer: 'Coursera',
      category: 'Programming',
      type: 'Course Certificate',
      details:
        'Algorithmic foundations and implementation of arrays, linked lists, stacks, queues, trees, recursion, and sorting/searching techniques in C and C++.',
      skills: ['C', 'C++', 'Data Structures', 'Algorithms']
    }
  ],

  skills: [
    {
      group: 'Programming Languages',
      icon: 'code',
      items: ['Python', 'Java', 'C', 'C++', 'PHP', 'SQL']
    },
    {
      group: 'Web & Full-Stack',
      icon: 'language',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Express.js', 'Node.js']
    },
    {
      group: 'Machine Learning & AI',
      icon: 'psychology',
      items: ['Text Preprocessing', 'Classification', 'Model Evaluation', 'FastAPI ML', 'NLP Basics']
    },
    {
      group: 'Databases & Persistence',
      icon: 'database',
      items: ['SQL', 'Relational Databases', 'CRUD Operations', 'MongoDB']
    },
    {
      group: 'Tools & Platforms',
      icon: 'build',
      items: ['Git', 'GitHub', 'Tkinter', 'Microsoft Excel', 'Microsoft PowerPoint']
    }
  ],

  education: [
    {
      degree: 'Diploma in Information Technology',
      institution: "SVKM's Shri Bhagubhai Mafatlal Polytechnic and College of Engineering",
      location: 'Mumbai, India',
      period: 'Present',
      status: 'Pursuing',
      highlights: [
        'Core coursework in Programming (C, C++, Java, Python), Web Technologies, Database Management, Operating Systems, and Computer Networks.',
        'Active builder across hackathons (NeoFuture Hackathon) and founder of OptSkill.community.'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Sri Poorna Prajana High School',
      location: 'Mumbai, India',
      period: '2023 – 2024',
      status: 'Completed',
      highlights: [
        'Completed secondary schooling with a strong foundation in mathematics, logic, and computer science fundamentals.'
      ]
    }
  ],

  hackathons: [
    {
      id: 'neofuture-hackathon',
      title: 'NeoFuture Hackathon',
      organizer: 'L.R. Tiwari College of Engineering, Mumbai',
      role: 'Project Lead & Developer',
      year: '2025 – 2026',
      badge: 'Presented Prototype',
      projectBuilt: 'MedAI — Smart Hospital Management System',
      description:
        'Engineered and presented MedAI, an offline-first accessible and preventive healthcare platform designed for rural clinics with intermittent connectivity. Features real-time doctor-patient messaging, nearest hospital discovery, and Python FastAPI ML disease prediction.',
      highlights: [
        'Presented project to jury at NeoFuture Hackathon (L.R. Tiwari College of Engineering)',
        'Built offline-first synchronization architecture for low-connectivity environments',
        'Integrated FastAPI machine learning service for early symptom & disease prediction'
      ],
      tech: ['React.js', 'Express.js', 'FastAPI', 'MongoDB', 'Socket.io', 'PWA'],
      links: [
        { label: 'View MedAI on GitHub', url: 'https://github.com/jeet9108/MedAI' }
      ]
    },
    {
      id: 'brainwave-hackathon',
      title: 'BrainWave Hackathon Portal',
      organizer: 'BrainWave Innovation Challenge',
      role: 'Full-Stack Developer',
      year: '2026',
      badge: 'Platform Engineering',
      projectBuilt: 'BrainWave Hackathon Portal & Integrated Admin Panel',
      description:
        'Engineered an event management platform and registration portal featuring pre-event problem statement reveals, optimistic sync for registration toggles, and isolated admin dashboards.',
      highlights: [
        'Designed registration workflows with optimistic state synchronization',
        'Built secure admin control panel with schedule toggles and problem statement releases',
        'Engineered 1-click startup automation and port-freeing launcher'
      ],
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'REST APIs'],
      links: []
    }
  ],

  pillars: [
    {
      icon: 'terminal',
      title: 'Offline-First & Practical Systems',
      description:
        'From FinAuditPro for Chartered Accountants to MedAI for low-connectivity rural clinics, I focus on software that stays fast, private, and reliable without constant internet.'
    },
    {
      icon: 'neurology',
      title: 'Applied ML & Full-Stack Web',
      description:
        'Combining React.js and Express.js interfaces with Python ML pipelines (NLP classification, disease prediction APIs) to turn models into usable products.'
    },
    {
      icon: 'groups',
      title: 'Student Community Leadership',
      description:
        'As Founder of OptSkill.community and former Technical Head Intern at Nivaah.org, I organize peers around real engineering, open source, and skill building.'
    }
  ],

  interests: [
    'Full-Stack Web Engineering',
    'Offline-First PWAs & Desktop Systems',
    'Applied Machine Learning & NLP',
    'Civic & Healthcare Tech',
    'FinTech & Audit Automation',
    'Student Tech Communities'
  ]
};
