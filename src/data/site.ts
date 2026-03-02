/**
 * Noorcent site data — edit names, roles, projects, and image URLs here.
 * Using placeholder images so you see real photos; replace with your own URLs when ready.
 */

export const site = {
  name: 'Noorcent',
  tagline: ' Built with Clarity. Designed to Scale.',
  description: 'We design and build digital products that grow with your business  created with clarity, reliability, and long-term sustainability in mind.',
  email: 'hello@noorcent.com',
  logoUrl: '' as string | undefined,
  /** Hero image — replace with your own (e.g. team photo, office, product). */
  heroImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
} as const;

/** Services: template-aligned (title, description, Learn More link). */
export const services = [
  {
    title: 'Software Development',
    description: 'Custom web and mobile applications built to scale.',
    href: '#',
    imageUrl: '/assets/t.png',
  },
  {
    title: 'IT Consulting',
    description: 'Strategy, architecture, and technology guidance.',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=240&fit=crop',
  },
  {
    title: 'System Design & Architecture',
    description: 'APIs, services, and infrastructure that last.',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop',
  },
  {
    title: 'Data Science & ML',
    description: 'Data pipelines, models, and actionable insights.',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=240&fit=crop',
  },
] as const;

/** Team: placeholder photos (replace with real headshots when ready). */
export const team = [
  {
    name: 'Nebiyu Musbah',
    role: 'Full-Stack Developer & Team Lead',
    initials: 'NM',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Abdulaziz Isa',
    role: 'Mobile Developer & AI Specialist',
    initials: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Abdallah Abdurazak',
    role: 'Backend Developer & ML Engineer',
    initials: 'AA',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Sadam Husen',
    role: 'Frontend Developer & UI Designer',
    initials: 'SH',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=crop',
    linkedin: '#',
    github: '#',
  },
] as const;

/** Projects: add your own imageUrl and details when ready. */
export const projects = [
  {
    name: 'Sweet Delights',
    context: 'E-commerce platform — ordering, admin dashboard, and analytics.',
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/20 to-primary/5',
  },
  {
    name: 'API Platform',
    context: 'Backend APIs and service layer for a growing startup.',
    stack: 'Node.js, TypeScript, Redis',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Analytics Dashboard',
    context: 'Real-time metrics, reporting, and data visualization for teams.',
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Mobile Banking App',
    context: 'Secure mobile banking with payments, transfers, and statements.',
    stack: 'React Native, Node.js',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Inventory & Logistics',
    context: 'Warehouse and supply chain management with reporting.',
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'HR & Payroll',
    context: 'Employee management, leave, and payroll in one platform.',
    stack: 'React, Node.js',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Learning Management System',
    context: 'Courses, assignments, and progress tracking for educators and students.',
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Fleet Management',
    context: 'Vehicle tracking, maintenance schedules, and driver assignments.',
    stack: 'React, Node.js, MongoDB',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Healthcare Portal',
    context: 'Appointments, patient records, and telehealth for clinics.',
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Real Estate Platform',
    context: 'Listings, virtual tours, and agent CRM in one place.',
    stack: 'React, Next.js, Node.js',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
] as const;
