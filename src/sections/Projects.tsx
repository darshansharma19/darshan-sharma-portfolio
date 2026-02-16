import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X, Code2, Shield } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  features: string[];
  icon: React.ElementType;
  color: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

const projects: Project[] = [
  {
    id: 'synthera',
    title: 'Synthera',
    shortDesc: 'Solana-powered AI model marketplace with NFT royalties',
    fullDesc: 'Synthera is a Solana-powered AI model marketplace where developers can mint, sell, and license AI models as NFTs with automatic royalty distribution.',
    technologies: ['Solana', 'React', 'TypeScript', 'AI/ML', 'Next.js', 'NFTs', 'Blockchain'],
    features: [
      'Mint and sell AI models as NFTs',
      'Automatic royalty distribution',
      'Secure blockchain-based transactions',
      'Marketplace for AI developers',
    ],
    icon: Code2,
    color: '#00F0FF',
    liveUrl: 'https://synthera-kappa.vercel.app/',
    githubUrl: 'https://github.com/darshansharma19',
  },
  {
    id: 'safaai-setu',
    title: 'Safaai Setu',
    shortDesc: 'Smart doorstep waste collection platform',
    fullDesc: 'Safaai Setu is a smart doorstep waste collection platform developed with the Indore Municipal Corporation. It enables residents to quickly request waste pickups, track requests, and participate in cleanliness initiatives — all in one place.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js'],
    features: [
      'Request and track waste pickups',
      'Participate in municipal cleanliness initiatives',
      'User-friendly web interface',
      'Real-time status updates for residents',
    ],
    icon: Shield,
    color: '#FF0055',
    liveUrl: 'https://safaai-setu.vercel.app/',
    githubUrl: 'https://github.com/darshansharma19',
  },
  {
    id: 'e-nirvachan',
    title: 'E-Nirvachan',
    shortDesc: 'Decentralized blockchain voting app',
    fullDesc: 'E-Nirvachan is a decentralized voting platform leveraging blockchain technology to ensure secure, transparent, and tamper-proof elections. Built with React, Flask, and Tailwind CSS, it offers a seamless experience for casting votes and viewing analytics.',
    technologies: ['React', 'Flask', 'Python', 'Tailwind CSS', 'Blockchain', 'Vite'],
    features: [
      'Secure blockchain-based voting',
      'Real-time voting analytics dashboard',
      'Blockchain visualization of all transactions and blocks',
      'Responsive and user-friendly UI',
    ],
    icon: ExternalLink,
    color: '#00F0FF',
    liveUrl: 'https://github.com/darshansharma19/-e-Nirvachan',
    githubUrl: 'https://github.com/darshansharma19/-e-Nirvachan',
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest mb-4 block">
            &lt;PROJECT_SHOWCASE /&gt;
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] mb-4">
            FEATURED <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise across the full stack and AI domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className="relative h-full bg-[#111] border border-[#222] rounded-lg overflow-hidden hover:border-[#00F0FF] transition-all duration-500"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#222';
                }}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-lg bg-[#0a0a0a] border border-[#222] group-hover:scale-110 transition-transform duration-300"
                      style={{ borderColor: `${project.color}30` }}
                    >
                      <project.icon size={28} style={{ color: project.color }} />
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[#666] hover:text-[#E0E0E0] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[#666] hover:text-[#E0E0E0] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[#E0E0E0] mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0a0a0a] border border-[#222] rounded text-xs font-mono text-[#666]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono text-[#555]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 border border-[#222] rounded-lg font-mono text-sm text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    VIEW DETAILS
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.color}10, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-lg"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111] border border-[#222] rounded-lg animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#111] border-b border-[#222] p-6 flex items-start justify-between z-10">
              <div className="flex items-center gap-4">
                <div 
                  className="p-3 rounded-lg bg-[#0a0a0a] border"
                  style={{ borderColor: `${selectedProject.color}30` }}
                >
                  <selectedProject.icon size={28} style={{ color: selectedProject.color }} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-[#E0E0E0]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[#666] text-sm">{selectedProject.shortDesc}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-[#666] hover:text-[#E0E0E0] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="font-mono text-sm text-[#00F0FF] mb-2">DESCRIPTION</h4>
                <p className="text-[#888] leading-relaxed">{selectedProject.fullDesc}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-mono text-sm text-[#00F0FF] mb-2">KEY FEATURES</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#888]">
                      <span className="text-[#00F0FF] mt-1">›</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-sm text-[#00F0FF] mb-2">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#0a0a0a] border border-[#222] rounded text-sm font-mono text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-[#111] border-t border-[#222] p-6 flex gap-4">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#0a0a0a] border border-[#222] rounded-lg font-mono text-sm text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github size={16} />
                  VIEW CODE
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#00F0FF] text-[#050505] rounded-lg font-mono text-sm font-medium hover:bg-[#00F0FF]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
