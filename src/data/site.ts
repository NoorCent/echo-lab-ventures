/**
 * Site data   company info, team, services, and projects.
 */

export const site = {
  name: 'Rhizan',
  tagline: 'Web, Mobile & AI Solutions',
  description: 'We build web and mobile applications that scale. From full-stack products to AI and ML solutions, we deliver clear, maintainable software with your business goals in mind.',
  email: 'contact@rhizantech.com',
  logoUrl: '/logo.svg',
  logoMinimalUrl: '/logo_minimal.png',
  phone: '0977236887',
  address: 'Addis Ababa, Ethiopia',
  heroImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  socials: [
    { label: 'X (Twitter)', href: 'https://x.com/rhizantechnolgy' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@rhizan_technologies' },
    { label: 'Facebook', href: 'https://www.facebook.com/rhizantechnologies' },
    { label: 'Instagram', href: 'https://www.instagram.com/rhizan_technologies' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rhizan-software' },
  ],
} as const;

/** Services: title, description, detailed copy, and link. */
export const services = [
  {
    title: 'Website & Web App Development',
    description: 'Beautiful, fast websites and web apps that grow with your business.',
    detailedDescription:
      'We create websites and web applications that look great, load fast, and work on any device. Whether you need a business website, an online platform, or a custom dashboard, we handle everything from design to launch so you can focus on running your business.',
    highlights: [
      'Custom websites and online platforms',
      'Works perfectly on phones, tablets, and desktops',
      'Built to rank well on Google',
      'Easy-to-use admin panels and content management',
    ],
    href: '#contact',
    imageUrl: '/assets/service-web.svg',
  },
  {
    title: 'Mobile App Development',
    description: 'Apps for iPhone and Android that your customers will love.',
    detailedDescription:
      'We build mobile apps that work smoothly on both iPhone and Android from a single codebase. From the first idea to publishing on the App Store and Play Store, we take care of the entire process so you get a polished app your users enjoy.',
    highlights: [
      'Works on both iPhone and Android',
      'Smooth, native-feeling experience',
      'Real-time notifications and offline access',
      'Published to the App Store and Play Store',
    ],
    href: '#contact',
    imageUrl: '/assets/service-mobile.svg',
  },
  {
    title: 'Data Science & ML',
    description: 'Turn your data into insights and smarter business decisions.',
    detailedDescription:
      'We help you make sense of your data and use it to make better decisions. Whether you want to predict trends, understand your customers, or automate analysis, we build custom models that fit your needs and plug right into your existing tools.',
    highlights: [
      'Custom data analysis and reporting',
      'Trend forecasting and predictions',
      'Image and text recognition',
      'Seamless integration with your current tools',
    ],
    href: '#contact',
    imageUrl: '/assets/service-ml.svg',
  },
  {
    title: 'AI & Automation Solutions',
    description: 'Let AI handle the repetitive work so your team can focus on what matters.',
    detailedDescription:
      'We help businesses save time and reduce manual work by adding smart automation to their daily operations. From AI assistants that answer customer questions to systems that process documents automatically, we build practical solutions that make your team more productive.',
    highlights: [
      'Smart chatbots and virtual assistants',
      'Automatic document reading and processing',
      'Workflow automation to cut manual tasks',
      'AI-powered tools tailored to your business',
    ],
    href: '#contact',
    imageUrl: '/assets/service-ai.svg',
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
