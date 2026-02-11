import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X, Code2, Video, Shield } from 'lucide-react';

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
      id: 'code-with-buddy',
      title: 'Code with Buddy',
      shortDesc: 'Live coding platform with video chat and collaborative editor',
      fullDesc: 'A comprehensive live coding platform that enables developers to collaborate in real-time. Users can share a special URL to invite others, collaborate on code with a built-in editor, communicate via video chat, sketch ideas on a shared whiteboard, and record entire sessions for later reference.',
      technologies: ['JavaScript', 'ReactJS', 'CodeMirror', 'Socket.io', 'PeerJS', 'WebRTC'],
      features: [
        'Real-time collaborative code editing',
        'Integrated video chat using WebRTC',
        'Multi-language code compilation',
        'Interactive shared whiteboard',
        'Session recording and download',
        'Unique URL generation for rooms',
      ],
      icon: Code2,
      color: '#00F0FF',
      githubUrl: 'https://github.com/darshansharma19',
    },
    {
      id: 'protect-farm',
      title: 'Protect-Farm',
      shortDesc: 'IoT-based solution to protect farms from wild animals',
      fullDesc: 'An innovative IoT-based solution that uses computer vision and AI to protect farms from wild animals. The system detects animal presence using sensors and cameras, then triggers humane deterrents to keep animals away without causing harm. This approach helps farmers reduce crop damage by up to 30% while preserving wildlife.',
      technologies: ['YOLO v8', 'Ultralytics', 'OpenCV', 'Python', 'ReactJS', 'IoT Sensors'],
      features: [
        'Real-time animal detection using YOLO v8',
        'Humane deterrent activation system',
        'Mobile alerts and notifications',
        'Dashboard for monitoring and analytics',
        'Replaces harmful electric fences',
        'Eco-friendly wildlife protection',
      ],
      icon: Shield,
      color: '#FF0055',
      githubUrl: 'https://github.com/darshansharma19',
    },
    {
      id: 'flavour-trail',
      title: 'Flavour Trail',
      shortDesc: 'Full-stack restaurant website with reservation system',
      fullDesc: 'A visually appealing, fully functional restaurant website featuring menu showcasing, chef specials, online reservations, and customer feedback system. Built with a modern tech stack ensuring responsive design and seamless user experience.',
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
      features: [
        'Responsive and visually appealing interface',
        'Online reservation system',
        'Menu showcase with categories',
        'Customer feedback collection',
        'Admin dashboard for management',
        'Real-time updates and notifications',
      ],
      icon: Video,
      color: '#FFB800',
      liveUrl: '#',
    },
    {
      id: 'hrm-wicksignals',
      title: 'HRM for WickSignals',
      shortDesc: 'HR Management system with analytics dashboard',
      fullDesc: 'A comprehensive HR Relationship Management system developed for WickSignals. Features include lead tracking, customer data management, sales performance analytics, and robust reporting capabilities. The system streamlines operations and enhances business efficiency through real-time data access.',
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Power BI'],
      features: [
        'Modern dashboard for lead tracking',
        'Customer data management',
        'Sales performance analytics',
        'Robust API for data operations',
        'Scalable MongoDB structure',
        'Real-time reporting and insights',
      ],
      icon: ExternalLink,
      color: '#00F0FF',
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
