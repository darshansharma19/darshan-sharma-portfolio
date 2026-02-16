import { useEffect, useRef, useState } from 'react';
import { Trophy, Star, GraduationCap, Code2, Award } from 'lucide-react';

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const achievements: Achievement[] = [
    {
      title: 'Winner of 8+ Hackathons',
      issuer: 'Multiple Domains',
      date: '2023-2025',
      description: 'Achieved top positions in 8+ hackathons spanning AI/ML, Web Development, and IoT, demonstrating innovation, teamwork, and rapid problem-solving skills.',
      icon: Award,
      color: '#FFB800',
    },
    {
      title: 'Co-Host - Solana & Avalanche Events',
      issuer: 'Indore Tech Community',
      date: '2024-2025',
      description: 'Co-hosted blockchain-focused events in Indore for Solana and Avalanche communities, organizing workshops, hackathons, and networking sessions for developers and enthusiasts.',
      icon: Star,
      color: '#FF0055',
    },
    {
      title: 'Team Lead - Google Developer Student Club',
      issuer: 'IPS Academy, Indore',
      date: '2024-2025',
      description: 'Led the college Google Developer Student Club team, coordinating tech events, mentorship programs, and project initiatives to encourage practical learning in Web3, AI, and Full-Stack development.',
      icon: GraduationCap,
      color: '#00F0FF',
    },
    {
      title: 'Top 5 in National AI Challenge',
      issuer: 'AI Society of India',
      date: '2024',
      description: 'Ranked among the top 5 participants nationwide for developing an intelligent recommendation system using Python and TensorFlow.',
      icon: Trophy,
      color: '#FFB800',
    },
    {
      title: 'Contributor to Open-Source AI Projects',
      issuer: 'GitHub / Community',
      date: '2023-2025',
      description: 'Contributed to multiple open-source AI/ML and Python projects, improving model performance, documentation, and code quality while collaborating with global developers.',
      icon: Code2,
      color: '#FF6F61',
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

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest mb-4 block">
            &lt;MILESTONES /&gt;
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] mb-4">
            ACHIEVEMENTS & <span className="text-gradient">AWARDS</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            Recognition and accomplishments that mark my journey of continuous learning and growth.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className="h-full bg-[#111] border border-[#222] rounded-lg p-6 hover:border-[#00F0FF] transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = achievement.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#222';
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-[#222] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: `${achievement.color}30` }}
                >
                  <achievement.icon size={28} style={{ color: achievement.color }} />
                </div>

                {/* Content */}
                <div className="mb-3">
                  <span
                    className="font-mono text-xs px-2 py-1 rounded border"
                    style={{
                      color: achievement.color,
                      borderColor: `${achievement.color}30`,
                      backgroundColor: `${achievement.color}10`,
                    }}
                  >
                    {achievement.date}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-[#E0E0E0] mb-1">
                  {achievement.title}
                </h3>

                <p className="text-[#00F0FF] text-sm mb-3">{achievement.issuer}</p>

                <p className="text-[#888] text-sm leading-relaxed">{achievement.description}</p>

                {/* Decorative Corner */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${achievement.color}20 50%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div
          className={`mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-[#E0E0E0] mb-2">
              GALLERY
            </h3>
            <p className="text-[#666] text-sm">Moments from my journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Graduation Photo */}
            <div className="group relative aspect-[4/3] bg-[#111] border border-[#222] rounded-lg overflow-hidden hover:border-[#00F0FF] transition-all duration-300">
              <img
                src="/graduation.jpg"
                alt="Graduation Ceremony"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-xs text-[#00F0FF]">GRADUATION</span>
                <p className="text-[#E0E0E0] text-sm">BTech in Computer Science</p>
              </div>
              <div className="absolute top-4 right-4 p-2 bg-[#111]/80 border border-[#222] rounded">
                <Trophy size={16} className="text-[#FFB800]" />
              </div>
            </div>

            {/* Speaking Photo */}
            <div className="group relative aspect-[4/3] bg-[#111] border border-[#222] rounded-lg overflow-hidden hover:border-[#FF0055] transition-all duration-300">
              <img
                src="/speaking.jpg"
                alt="Speaking at Event"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-xs text-[#FF0055]">PUBLIC SPEAKING</span>
                <p className="text-[#E0E0E0] text-sm">Tech Event Presentation</p>
              </div>
              <div className="absolute top-4 right-4 p-2 bg-[#111]/80 border border-[#222] rounded">
                <Star size={16} className="text-[#00F0FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
