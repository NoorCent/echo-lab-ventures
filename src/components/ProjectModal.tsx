import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { projects } from '@/data/site';

type Project = (typeof projects)[number];

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modal = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
        opacity: 0,
        y: 30,
        scale: 0.97,
        transition: { duration: 0.25, ease: [0.55, 0.06, 0.68, 0.19] },
    },
};

/**
 * Project detail modal   slides up with backdrop blur.
 * Full-screen sheet on mobile, centered card on desktop.
 */
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    // Lock body scroll while open & close on Escape
    useEffect(() => {
        if (!project) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', handleKey);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    key="project-modal-backdrop"
                    className="fixed inset-0 z-50 flex items-end justify-center md:items-center md:p-6"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal panel */}
                    <motion.div
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative z-10 flex max-h-[95vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white dark:bg-[#1a1a1a] shadow-2xl md:max-w-3xl md:rounded-2xl"
                    >
                        {/* Hero image */}
                        <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#f5f5f5] dark:bg-white/5 sm:h-56 md:h-64">
                            <img
                                src={project.imageUrl}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-white/10 text-[#2a2a2a] dark:text-gray-100 shadow-md backdrop-blur-sm transition-colors hover:bg-white dark:hover:bg-white/20 cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            {/* Title overlay at bottom of image */}
                            <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 md:px-8 md:pb-5">
                                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                                    {project.stack}
                                </p>
                                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                                    {project.name}
                                </h2>
                            </div>
                        </div>

                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8">
                            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                                {/* Description */}
                                <div className="md:w-3/5">
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#999] dark:text-gray-400">
                                        Overview
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[#555] dark:text-gray-200 md:text-base">
                                        {project.detailedDescription}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="md:w-2/5">
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#999] dark:text-gray-400">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2.5 text-sm"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span className="text-[#444] dark:text-gray-200">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tech stack badges + View Project link */}
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#e8e8e8] dark:border-white/10 pt-5">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.split(', ').map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.href && project.href !== '#' && (
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                                    >
                                        View Project
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
