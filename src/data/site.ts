/**
 * Site data   company info, team, services, and projects.
 */

export const site = {
  name: 'Rhizan',
  tagline: 'Web, Mobile & AI Solutions',
  description: 'We build web and mobile applications that scale. From full-stack products to AI and ML solutions, we deliver clear, maintainable software with your business goals in mind.',
  email: 'nebiyumusbah378@gmail.com',
  logoUrl: '/logo.svg',
  logoMinimalUrl: '/logo_minimal.png',
  phone: '+251 90 802 4092',
  address: 'Addis Ababa, Ethiopia',
  heroImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
} as const;

/** Services: title, description, detailed copy, and link. */
export const services = [
  {
    title: 'Web & Mobile Development',
    description: 'Custom web and mobile applications built to scale.',
    detailedDescription:
      'We design and build responsive web apps and cross-platform mobile applications tailored to your needs. From idea to launch, we use modern stacks and agile delivery so you get a product that performs and grows with you.',
    highlights: [
      'Full-stack web (React, Next.js, Node.js)',
      'Cross-platform mobile (React Native, Flutter)',
      'Agile delivery with clear milestones',
      'Post-launch support and iteration',
    ],
    href: '#contact',
    imageUrl: '/assets/t.png',
  },
  {
    title: 'Backend & APIs',
    description: 'APIs, services, and infrastructure that last.',
    detailedDescription:
      'We architect and implement backend systems and APIs that are secure, fast, and maintainable. Whether you need a new service layer or to refactor an existing one, we focus on clarity and long-term reliability.',
    highlights: [
      'RESTful and GraphQL API design',
      'Node.js, TypeScript, PostgreSQL, MongoDB',
      'Authentication, caching, and monitoring',
      'Documentation and developer experience',
    ],
    href: '#contact',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop',
  },
  {
    title: 'AI & ML Solutions',
    description: 'Data pipelines, models, and intelligent features.',
    detailedDescription:
      'We help you add intelligence to your product with data pipelines, machine learning models, and AI-powered features. From recommendation systems to process automation, we build solutions that are practical and deployable.',
    highlights: [
      'Data pipelines and model training',
      'NLP, computer vision, and forecasting',
      'Integration with your existing apps',
      'Privacy-aware and compliant design',
    ],
    href: '#contact',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=240&fit=crop',
  },
  {
    title: 'UI/UX & Product Design',
    description: 'Interfaces and experiences users love.',
    detailedDescription:
      'We combine clean design with solid usability so your product looks great and is easy to use. From wireframes and prototypes to design systems and front-end implementation, we keep the user at the centre.',
    highlights: [
      'User research and wireframing',
      'Visual design and design systems',
      'Responsive and accessible interfaces',
      'Design-to-development handoff',
    ],
    href: '#contact',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=240&fit=crop',
  },
] as const;

/** Team: names, roles, and profile links. */
export const team = [
  {
    name: 'Nebiyu Musbah',
    role: 'Full Stack & AI Developer',
    initials: 'NM',
    imageUrl: '/nebiyu-musbah.png',
    linkedin: 'https://www.linkedin.com/in/nebiyu-musbah/',
    github: 'https://github.com/neba378',
  },
  {
    name: 'Abdulaziz Isa',
    role: 'Full Stack & Mobile App Developer',
    initials: 'AI',
    imageUrl: '/abdulaziz.png',
    linkedin: 'https://www.linkedin.com/in/abdulaziz-isa-1696b027a/',
    github: 'https://github.com/Abdulazizgr',
  },
  {
    name: 'Sadam Husen',
    role: 'Backend & ML Engineer',
    initials: 'SH',
    imageUrl: '/sadam.jpeg',
    linkedin: 'https://www.linkedin.com/in/sadam-husen-16s/',
    github: 'https://github.com/Urz1',
  },
  {
    name: 'Abdallah Abdurazak',
    role: 'UI/UX & Web Developer',
    initials: 'AA',
    imageUrl: '/abdallah.jpg',
    linkedin: 'https://www.linkedin.com/in/abdallah-abdurazak-728aa7278/',
    github: 'https://github.com/Abd453',
  },
] as const;

/** Testimonials: client quotes. */
export const testimonials = [
  {
    quote:
      "They built our Koket Bakery platform from the ground up. We can now take orders online and our customers track their cakes from order to delivery exactly what we needed. Professional, responsive, and the result speaks for itself. I'd work with them again without hesitation.",
    author: 'Hamza',
    role: 'Owner, Koket Bakery',
    project: 'Koket Bakery',
    projectHref: 'https://koket-bakery.com/',
  },
] as const;

/** Projects. */
export const projects = [
  {
    name: 'Koket Bakery',
    context: 'Order cakes online and track your order status from checkout to delivery.',
    detailedDescription:
      'Koket Bakery is an e-commerce platform for handcrafted cakes and desserts in Ethiopia. Customers browse products, place custom orders, and track their order status in real time. The site showcases the brand and streamlines ordering for celebrations and events.',
    features: [
      'Product catalogue and custom order flow',
      'Order placement and payment',
      'Order status tracking for customers',
      'Responsive design with Tailwind CSS',
    ],
    stack: 'Next.js, Node.js, TypeScript, MongoDB, Tailwind',
    href: 'https://koket-bakery.com/',
    imageUrl: '/koket.png',
    placeholderColor: 'from-primary/20 to-primary/5',
  },
  {
    name: 'Synth Studio',
    context: 'Use and share your data freely   without putting real people at risk.',
    detailedDescription:
      'Synth Studio lets teams work with realistic-looking data that behaves like the real thing, without containing any actual personal information. Upload your dataset, and it generates a safe version you can share, test with, or hand off to partners   no real names, emails, or sensitive details ever leave your hands.',
    features: [
      'Generates fake-but-realistic data that mirrors your real dataset',
      'Automatically spots and flags personal information before anything is processed',
      'Works without any coding   upload a file and get results',
      'Shows you how closely the safe data matches the original',
      'Produces compliance reports ready for audits',
      'Free to use and open source   no sign-up required to try it',
    ],
    stack: 'Python, React, CTGAN, TVAE, Differential Privacy',
    href: 'https://www.synthdata.studio/',
    imageUrl: '/SynthStudio.png',
    placeholderColor: 'from-primary/20 to-primary/5',
  },
  {
    name: 'Guzo',
    context: 'Explore Ethiopia\'s landscapes, culture, and history through a stunning travel guide.',
    detailedDescription:
      'Guzo   meaning "journey" in Amharic   is a travel website built to showcase the beauty of Ethiopia. From ancient ruins to mountain highlands and vibrant city life, it gives visitors a rich, visual introduction to the country and inspires them to start planning their own trip.',
    features: [
      'Beautiful destination pages with rich photography',
      'Cultural and historical context for each location',
      'Smooth, cinematic transitions as you browse',
      'Fully responsive   works great on phone, tablet, or desktop',
    ],
    stack: 'React, TypeScript, Tailwind CSS, Framer Motion',
    href: 'https://guzo-cyan.vercel.app/',
    imageUrl: '/Guzo.png',
    placeholderColor: 'from-primary/20 to-primary/5',
  },
  {
    name: 'Æther & Essence',
    context: 'A luxury fragrance shop that helps you discover your perfect scent online.',
    detailedDescription:
      'Æther & Essence is an online boutique for high-end fragrances. It walks you through finding a scent that matches your mood and personality, lets you save favourites, request samples before committing to a full bottle, and keep a personal journal of everything you\'ve tried   all wrapped in an elegant, immersive experience.',
    features: [
      'Personalized scent finder based on your mood and preferences',
      'Full shopping experience with cart and wishlist',
      'Sample request program   try before you buy',
      'Personal scent journal to track what you\'ve loved',
    ],
    stack: 'React, TypeScript, Tailwind CSS, Framer Motion',
    href: 'https://perfume-store-silk.vercel.app/',
    imageUrl: '/perfume.png',
    placeholderColor: 'from-primary/20 to-primary/5',
  },
] as const;
