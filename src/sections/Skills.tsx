import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Brain, 
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});

  const skillCategories: SkillCategory[] = [
    {
      title: 'LANGUAGES',
      icon: Code2,
      color: '#00F0FF',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 88 },
        { name: 'C/C++', level: 80 },
        { name: 'Go', level: 70 },
        { name: 'SQL', level: 82 },
      ],
    },
    {
      title: 'FRONTEND',
      icon: Palette,
      color: '#FF0055',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'BACKEND',
      icon: Server,
      color: '#00F0FF',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'REST APIs', level: 88 },
      ],
    },
    {
      title: 'DATABASE',
      icon: Database,
      color: '#FF0055',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      title: 'AI / DATA SCIENCE',
      icon: Brain,
      color: '#00F0FF',
      skills: [
        { name: 'OpenCV', level: 85 },
        { name: 'YOLO / Object Detection', level: 82 },
        { name: 'Pandas / NumPy', level: 88 },
        { name: 'Scikit-learn', level: 78 },
        { name: 'NVIDIA DeepStream', level: 75 },
      ],
    },
    {
      title: 'TOOLS & DEVOPS',
      icon: GitBranch,
      color: '#FF0055',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Linux', level: 82 },
        { name: 'Power BI', level: 75 },
        { name: 'Docker', level: 70 },
      ],
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

  // Animate skill bars when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const levels: Record<string, number> = {};
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            levels[`${category.title}-${skill.name}`] = skill.level;
          });
        });
        setAnimatedLevels(levels);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest mb-4 block">
            &lt;TECH_ARSENAL /&gt;
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] mb-4">
            SKILLS & <span className="text-gradient">EXPERTISE</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience across the full development stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative bg-[#111] border border-[#222] rounded-lg p-6 hover:border-[${category.color}] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = category.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222';
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-2 rounded-lg bg-[#0a0a0a] border border-[#222] group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = category.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                  }}
                >
                  <category.icon size={20} style={{ color: category.color }} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#E0E0E0]">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-[#888]">{skill.name}</span>
                      <span 
                        className="font-mono text-xs"
                        style={{ color: category.color }}
                      >
                        {animatedLevels[`${category.title}-${skill.name}`] || 0}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedLevels[`${category.title}-${skill.name}`] || 0}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                          transitionDelay: `${skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div 
                className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, transparent 50%, ${category.color}20 50%)` 
                }}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 p-4 bg-[#111] border border-[#222] rounded-lg">
            <Terminal className="text-[#00F0FF]" size={24} />
            <div>
              <div className="font-heading font-semibold text-[#E0E0E0]">Clean Code</div>
              <div className="font-mono text-xs text-[#666]">Best practices & patterns</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-[#111] border border-[#222] rounded-lg">
            <Layers className="text-[#FF0055]" size={24} />
            <div>
              <div className="font-heading font-semibold text-[#E0E0E0]">Full Stack</div>
              <div className="font-mono text-xs text-[#666]">End-to-end development</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-[#111] border border-[#222] rounded-lg">
            <Brain className="text-[#00F0FF]" size={24} />
            <div>
              <div className="font-heading font-semibold text-[#E0E0E0]">AI Integration</div>
              <div className="font-mono text-xs text-[#666]">Machine learning & CV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
