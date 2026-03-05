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
    detailedDescription:
      'We design and engineer robust, scalable software tailored to your unique business needs. From responsive web platforms to cross-platform mobile apps, our full-cycle development process covers ideation, prototyping, development, testing, and deployment — ensuring a product that performs flawlessly from day one.',
    highlights: [
      'Full-stack web & mobile development',
      'Agile sprints with transparent delivery',
      'CI/CD pipelines & automated testing',
      'Post-launch support & iteration',
    ],
    href: '#',
    imageUrl: '/assets/t.png',
  },
  {
    title: 'IT Consulting',
    description: 'Strategy, architecture, and technology guidance.',
    detailedDescription:
      'Our consultants partner with your leadership team to align technology decisions with business objectives. We evaluate your current stack, identify bottlenecks, and craft a clear technology roadmap — helping you reduce costs, mitigate risk, and accelerate digital transformation.',
    highlights: [
      'Technology audits & gap analysis',
      'Digital transformation roadmaps',
      'Vendor evaluation & selection',
      'Team augmentation & mentorship',
    ],
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=240&fit=crop',
  },
  {
    title: 'System Design & Architecture',
    description: 'APIs, services, and infrastructure that last.',
    detailedDescription:
      'We architect resilient, high-performance systems designed to scale with your growth. From microservices and event-driven architectures to cloud-native infrastructure, we ensure your technical foundation is secure, maintainable, and ready for whatever comes next.',
    highlights: [
      'Microservices & API design',
      'Cloud-native infrastructure (AWS, GCP)',
      'Database design & optimization',
      'Security-first architecture patterns',
    ],
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop',
  },
  {
    title: 'Data Science & ML',
    description: 'Data pipelines, models, and actionable insights.',
    detailedDescription:
      'We turn raw data into competitive advantage. Our data engineers and ML specialists build end-to-end pipelines — from ingestion and cleaning to model training and deployment — delivering predictive analytics and intelligent automation that drive smarter business decisions.',
    highlights: [
      'ETL pipelines & data warehousing',
      'Predictive modeling & forecasting',
      'Natural language processing',
      'Real-time dashboards & reporting',
    ],
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
    detailedDescription:
      'A full-featured e-commerce platform built for a pastry and confectionery business. Customers browse a curated catalogue, customise orders, and pay online. The admin dashboard gives the owner real-time sales analytics, inventory alerts, and order management — all in one place.',
    features: [
      'Product catalogue with filtering & search',
      'Secure checkout with multiple payment methods',
      'Admin dashboard with live sales analytics',
      'Inventory management & low-stock alerts',
      'Order tracking & delivery notifications',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/20 to-primary/5',
  },
  {
    name: 'API Platform',
    context: 'Backend APIs and service layer for a growing startup.',
    detailedDescription:
      'A high-performance API gateway and service layer that powers a fast-growing SaaS startup. Designed for throughput and reliability, the platform handles thousands of requests per second with sub-50ms response times, backed by Redis caching and comprehensive monitoring.',
    features: [
      'RESTful API with OpenAPI documentation',
      'Redis caching layer for sub-50ms responses',
      'Rate limiting & API key management',
      'Automated testing with 95%+ coverage',
      'Health monitoring & alerting pipelines',
    ],
    stack: 'Node.js, TypeScript, Redis',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Analytics Dashboard',
    context: 'Real-time metrics, reporting, and data visualization for teams.',
    detailedDescription:
      'An interactive analytics dashboard that transforms raw business data into actionable insights. Teams can build custom reports, set KPI targets, and monitor performance in real time with live-updating charts and automated email digests.',
    features: [
      'Real-time data streaming & live charts',
      'Drag-and-drop custom report builder',
      'KPI tracking with target thresholds',
      'Scheduled PDF & email report exports',
      'Role-based access for team collaboration',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Mobile Banking App',
    context: 'Secure mobile banking with payments, transfers, and statements.',
    detailedDescription:
      'A secure, intuitive mobile banking application that lets users manage accounts, make instant transfers, pay bills, and view detailed transaction history. Built with bank-grade encryption and biometric authentication for maximum security.',
    features: [
      'Biometric login (fingerprint & face ID)',
      'Instant P2P transfers & bill payments',
      'Transaction history with smart filtering',
      'Push notifications for account activity',
      'Multi-currency support & exchange rates',
    ],
    stack: 'React Native, Node.js',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Inventory & Logistics',
    context: 'Warehouse and supply chain management with reporting.',
    detailedDescription:
      'An end-to-end warehouse management system that streamlines inventory tracking, purchase orders, and shipment coordination. Barcode scanning, automated reorder points, and route optimisation reduce manual work and cut fulfilment times.',
    features: [
      'Barcode / QR code scanning integration',
      'Automated reorder points & purchase orders',
      'Multi-warehouse inventory tracking',
      'Shipment coordination & route optimisation',
      'Comprehensive stock & movement reports',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'HR & Payroll',
    context: 'Employee management, leave, and payroll in one platform.',
    detailedDescription:
      'A unified HR platform that handles the full employee lifecycle — from onboarding and attendance to leave management and payroll processing. Managers get a bird\'s-eye view of team performance while employees self-serve through a dedicated portal.',
    features: [
      'Employee onboarding & document management',
      'Attendance tracking & leave management',
      'Automated payroll with tax calculations',
      'Performance reviews & goal tracking',
      'Employee self-service portal',
    ],
    stack: 'React, Node.js',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Learning Management System',
    context: 'Courses, assignments, and progress tracking for educators and students.',
    detailedDescription:
      'A comprehensive LMS that enables educators to create courses, assign homework, and track student progress. Students get an interactive learning environment with video lessons, quizzes, and a personalised dashboard showing their achievements.',
    features: [
      'Course creation with multimedia content',
      'Assignments, quizzes & auto-grading',
      'Student progress dashboards & analytics',
      'Discussion forums & messaging',
      'Certificate generation upon completion',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Fleet Management',
    context: 'Vehicle tracking, maintenance schedules, and driver assignments.',
    detailedDescription:
      'A real-time fleet management solution that gives operators full visibility over their vehicles. GPS tracking, maintenance scheduling, fuel monitoring, and driver performance analytics help reduce costs and improve fleet efficiency.',
    features: [
      'Real-time GPS vehicle tracking',
      'Preventive maintenance scheduling',
      'Fuel consumption monitoring & reports',
      'Driver assignment & performance scoring',
      'Geofencing & route history playback',
    ],
    stack: 'React, Node.js, MongoDB',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Healthcare Portal',
    context: 'Appointments, patient records, and telehealth for clinics.',
    detailedDescription:
      'A HIPAA-aware healthcare portal that connects patients and providers. Patients book appointments online, access their medical records, and join telehealth video consultations — while clinic staff manage schedules, prescriptions, and billing from a single interface.',
    features: [
      'Online appointment booking & reminders',
      'Electronic health records (EHR)',
      'Telehealth video consultations',
      'Prescription management & pharmacy integration',
      'Billing & insurance claims processing',
    ],
    stack: 'React, Node.js, PostgreSQL',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Real Estate Platform',
    context: 'Listings, virtual tours, and agent CRM in one place.',
    detailedDescription:
      'A modern real estate platform that brings property listings, virtual 360° tours, and agent tools together. Buyers search with map-based filters, save favourites, and schedule viewings — while agents manage their pipeline through an integrated CRM.',
    features: [
      'Map-based property search with filters',
      '360° virtual tours & photo galleries',
      'Agent CRM with lead management',
      'Saved searches & favourite listings',
      'Mortgage calculator & neighbourhood insights',
    ],
    stack: 'React, Next.js, Node.js',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    placeholderColor: 'from-primary/15 to-primary/5',
  },
] as const;
