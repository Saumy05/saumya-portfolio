export type NavLink = {
  id: string
  label: string
}

export type Stat = {
  label: string
  value: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveLink: string
  githubLink: string
  detail: {
    problem: string
    solution: string
    achievements: string[]
  }
}

export type Experience = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export type Achievement = {
  title: string
  description: string
}

export type EngineeringHighlight = {
  title: string
  description: string
}

export const navLinks: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const stats: Stat[] = [
  { label: 'Systems Built', value: '6+' },
  { label: 'Latency Improvement', value: '30%' },
  { label: 'Booking Throughput Gain', value: '25%' },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Flask', 'Spring Boot', 'RESTful APIs'],
  },
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C++', 'JavaScript'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'SQL', 'Firebase'],
  },
  {
    category: 'Tools',
    skills: ['Docker', 'Git', 'Linux', 'Vercel', 'Netlify'],
  },
]

export const projects: Project[] = [
  {
    id: 'aura',
    title: 'Aura - AI Voice Assistant',
    description:
      'Real-time AI voice assistant engineered with low-latency backend APIs and asynchronous command execution.',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=80',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Web Speech API'],
    liveLink: 'https://example.com/aura-demo',
    githubLink: 'https://github.com/Saumy05',
    detail: {
      problem:
        'Real-time voice interactions often degrade with delayed command execution and inefficient request orchestration.',
      solution:
        'Designed modular backend services for command processing and session workflows with async handling across speech-to-action stages.',
      achievements: [
        'Cut command response latency by approximately 30% using asynchronous request handling.',
        'Implemented real-time Web Speech API integration with persistent interaction history in MongoDB.',
        'Shipped a scalable API architecture to support modular feature growth.',
      ],
    },
  },
  {
    id: 'vastravista',
    title: 'VastraVista - AI Fashion Recommendation',
    description:
      'AI-based recommendation engine that maps skin-tone analysis to practical clothing color suggestions.',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Python', 'OpenCV', 'React', 'Tailwind CSS'],
    liveLink: 'https://example.com/vastravista',
    githubLink: 'https://github.com/Saumy05',
    detail: {
      problem:
        'Personal styling tools rarely provide image-driven recommendations grounded in user-specific color traits.',
      solution:
        'Built a lightweight CV pipeline for skin-tone detection and integrated it with a responsive React interface for real-time recommendations.',
      achievements: [
        'Implemented end-to-end AI pipeline from image input to recommendation output.',
        'Focused on accuracy and response performance for interactive user sessions.',
        'Delivered reliable recommendations using deterministic color-matching logic.',
      ],
    },
  },
  {
    id: 'ai-notes',
    title: 'AI Notes & Task Manager',
    description:
      'Productivity platform using LLM-powered suggestions, task prioritization, and high-speed local caching.',
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'OpenAI API', 'JavaScript', 'Local Storage'],
    liveLink: 'https://example.com/ai-notes',
    githubLink: 'https://github.com/Saumy05',
    detail: {
      problem:
        'Manual note triage and task ordering create friction in day-to-day execution and consistency.',
      solution:
        'Integrated OpenAI-driven suggestion workflows with clean state management and async data handling for fast interactions.',
      achievements: [
        'Improved app responsiveness by approximately 30% using local caching and asynchronous updates.',
        'Generated intelligent suggestions for notes and actionable task planning.',
        'Structured scalable component/state patterns for long-term maintainability.',
      ],
    },
  },
  {
    id: 'airline',
    title: 'Airline Reservation System (Hackathon)',
    description:
      'Multi-threaded reservation engine with dynamic pricing and concurrency-safe booking under load.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    techStack: ['C++', 'Multi-threading', 'Concurrency', 'Algorithms'],
    liveLink: 'https://example.com/airline-system',
    githubLink: 'https://github.com/Saumy05',
    detail: {
      problem:
        'Airline booking systems require strict concurrency control to prevent seat conflicts and throughput collapse.',
      solution:
        'Built thread-safe booking and seat-allocation modules with optimized algorithms and surge-pricing logic.',
      achievements: [
        'Raised booking efficiency by approximately 25% through concurrency control and optimized data handling.',
        'Developed pricing, seat allocation, and loyalty modules for complete reservation flow.',
        'Led a 4-member team and delivered end-to-end integration in a 24-hour hackathon.',
      ],
    },
  },
]

export const experiences: Experience[] = [
  {
    role: 'Research Intern',
    company: 'ISRO (NARL)',
    period: 'Sep 2025 - Jan 2026',
    highlights: [
      'Engineered backend-driven dashboards for real-time lightning data visualization and analysis workflows.',
      'Automated atmospheric data processing scripts, improving reporting reliability and operational efficiency.',
      'Optimized backend data flow with research teams to improve processing accuracy and system stability.',
      'Improved maintainability of analytical web tools through modular processing and cleaner pipeline design.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Acmegrade',
    period: 'Feb 2024 - Apr 2024',
    highlights: [
      'Executed security testing aligned with OWASP Top 10 across web application attack surfaces.',
      'Identified and validated SQL injection, XSS, CSRF, and authentication weaknesses in backend-integrated flows.',
      'Assessed network traffic and application behavior to strengthen defensive posture and remediation quality.',
    ],
  },
]

export const achievements: Achievement[] = [
  {
    title: 'IBM Hackathon Finalist (Top 1%)',
    description:
      'Built and shipped a multi-threaded airline reservation system with dynamic pricing in a 24-hour national hackathon.',
  },
  {
    title: 'Mentored 100+ Students in DSA and Problem Solving',
    description:
      'Ran focused peer mentorship on coding efficiency, algorithmic thinking, and interview-style problem breakdown.',
  },
]

export const engineeringHighlights: EngineeringHighlight[] = [
  {
    title: 'Performance Engineering',
    description:
      'Reduced voice-command response latency by approximately 30% and improved AI Notes responsiveness by approximately 30% using asynchronous request design and caching strategies.',
  },
  {
    title: 'Scalable Backend Design',
    description:
      'Built modular REST API architectures, automated data pipelines, and backend-driven dashboards for reliable real-time data workflows.',
  },
  {
    title: 'Concurrency & Throughput',
    description:
      'Designed a multi-threaded reservation engine that improved booking efficiency by approximately 25% under concurrent demand.',
  },
  {
    title: 'Applied AI Systems',
    description:
      'Implemented AI-powered voice interactions, computer-vision recommendations with OpenCV, and LLM-assisted productivity features.',
  },
]

export const contactLinks = {
  email: 'saumy2475@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saumya-tiwari-390b79292',
  github: 'https://github.com/Saumy05',
}
