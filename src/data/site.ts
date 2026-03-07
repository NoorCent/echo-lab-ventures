/**
 * Site data — company info, team, services, and projects.
 */

export const site = {
  name: 'Noorcent',
  tagline: 'Web, Mobile & AI Solutions',
  description: 'We build web and mobile applications that scale. From full-stack products to AI and ML solutions, we deliver clear, maintainable software with your business goals in mind.',
  email: 'nebiyumusbah378@gmail.com',
  logoUrl: '' as string | undefined,
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
      "They built our Koket Bakery platform from the ground up. We can now take orders online and our customers track their cakes from order to delivery—exactly what we needed. Professional, responsive, and the result speaks for itself. I'd work with them again without hesitation.",
    author: 'Hamza',
    role: 'Owner, Koket Bakery',
    project: 'Koket Bakery',
    projectHref: 'https://koket-bakery.com/',
  },
  {
    quote:
      "The team delivered our dashboard on time and the quality exceeded expectations. Clear communication throughout and they really understood our workflow. Highly recommend for anyone needing a solid web application.",
    author: 'Sarah M.',
    role: 'Operations Lead',
    project: 'Analytics Platform',
    projectHref: '#',
  },
  {
    quote:
      "We needed a mobile app that could work offline in the field. They nailed it—our team now captures data anywhere and everything syncs when they're back online. Game changer for our operations.",
    author: 'David K.',
    role: 'Field Manager',
    project: 'Field App',
    projectHref: '#',
  },
] as const;

/** Projects: real and placeholder. */
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
    name: 'Project Two',
    context: 'A scalable web platform with dashboard and reporting.',
    detailedDescription:
      'A full-stack web application with role-based access, dashboards, and reporting. Built with modern tools for performance and maintainability.',
    features: [
      'User authentication and roles',
      'Dashboard and analytics',
      'API integration and data sync',
      'Responsive UI',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Project Three',
    context: 'Mobile-first app for field teams and real-time updates.',
    detailedDescription:
      'A cross-platform mobile and web app that helps teams capture data in the field and keep stakeholders updated in real time.',
    features: [
      'Offline-capable forms',
      'Real-time sync and notifications',
      'Map and location features',
      'Admin and reporting views',
    ],
    stack: 'React Native, Node.js, MongoDB',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Project Four',
    context: 'Data and analytics platform for business insights.',
    detailedDescription:
      'An analytics and reporting platform that connects to your data sources and delivers dashboards, KPIs, and exportable reports.',
    features: [
      'Data connectors and ETL',
      'Custom dashboards and charts',
      'Scheduled reports and alerts',
      'Role-based access control',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Inventory Manager',
    context: 'Stock tracking and order management for small businesses.',
    detailedDescription:
      'A lightweight inventory and order management system that helps shops track stock levels, reorder points, and sales. Integrates with barcode scanning and basic reporting.',
    features: [
      'Stock levels and reorder alerts',
      'Barcode scanning support',
      'Sales and purchase history',
      'Simple reporting and export',
    ],
    stack: 'Next.js, TypeScript, SQLite',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Booking Hub',
    context: 'Appointments and reservations for services and venues.',
    detailedDescription:
      'A booking platform that lets service providers manage availability and lets customers book slots. Supports recurring appointments and email reminders.',
    features: [
      'Calendar and availability management',
      'Online booking and payments',
      'Email and SMS reminders',
      'Admin dashboard',
    ],
    stack: 'React, Node.js, Stripe, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Community Forum',
    context: 'Moderated discussion boards and user-generated content.',
    detailedDescription:
      'A forum and community platform with threads, replies, upvotes, and moderation tools. Built for engagement and easy content discovery.',
    features: [
      'Threads, replies, and nested comments',
      'Upvotes and sorting',
      'Moderation and reporting',
      'User profiles and notifications',
    ],
    stack: 'Next.js, Node.js, MongoDB, Redis',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Delivery Tracker',
    context: 'Real-time delivery tracking for logistics and last-mile.',
    detailedDescription:
      'A driver and customer app for delivery companies. Drivers update status; customers see live tracking and estimated arrival.',
    features: [
      'Live location and ETA',
      'Status updates and proof of delivery',
      'Driver and customer apps',
      'Dispatch and route view',
    ],
    stack: 'React Native, Node.js, Mapbox',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Learning Portal',
    context: 'Online courses, progress tracking, and certificates.',
    detailedDescription:
      'An LMS for creating and selling courses. Instructors upload content; learners track progress and earn certificates on completion.',
    features: [
      'Video and quiz content',
      'Progress and completion tracking',
      'Certificates and badges',
      'Payments and subscriptions',
    ],
    stack: 'React, Node.js, Stripe, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'HR Onboarding',
    context: 'New hire onboarding, tasks, and document collection.',
    detailedDescription:
      'Streamlined onboarding for new employees: checklists, document uploads, e-signatures, and team introductions—all in one place.',
    features: [
      'Onboarding checklists',
      'Document upload and e-sign',
      'Team intro and org chart',
      'HR analytics',
    ],
    stack: 'React, Node.js, AWS S3',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Event Ticketing',
    context: 'Sell tickets and manage check-in for events.',
    detailedDescription:
      'Event organisers create events and sell tickets; attendees get e-tickets and QR codes for check-in at the venue.',
    features: [
      'Event creation and ticketing',
      'QR check-in and scanning',
      'Sales and capacity limits',
      'Attendee list and analytics',
    ],
    stack: 'Next.js, Node.js, Stripe',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
] as const;
