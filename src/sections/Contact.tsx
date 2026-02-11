import { useEffect, useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/darshansharma19', color: '#00F0FF' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/darshan-sharma-323422237/', color: '#FF0055' },
    { icon: Mail, label: 'Email', url: 'mailto:darshusharma9755@gmail.com', color: '#00F0FF' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'darshusharma9755@gmail.com', href: 'mailto:darshusharma9755@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9179136979', href: 'tel:+919179136979' },
    { icon: MapPin, label: 'Location', value: 'Indore, India', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest mb-4 block">
            &lt;INITIATE_CONTACT /&gt;
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] mb-4">
            LET&apos;S <span className="text-gradient">CONNECT</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-[#111] border border-[#222] rounded-lg overflow-hidden terminal-border">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-[#222]">
                <div className="w-3 h-3 rounded-full bg-[#FF0055]" />
                <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
                <div className="w-3 h-3 rounded-full bg-[#00F0FF]" />
                <span className="ml-4 font-mono text-xs text-[#666]">contact_form.sh</span>
              </div>

              {/* Form */}
              <div className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-[#00F0FF] mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-[#E0E0E0] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#888]">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm">
                        <span className="text-[#00F0FF]">&gt;</span>
                        <span className="text-[#666]">NAME</span>
                        <span className="text-[#FF0055]">=</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-[#0a0a0a] border rounded px-4 py-3 text-[#E0E0E0] font-mono text-sm focus:outline-none transition-all duration-300 ${
                          focusedField === 'name' ? 'border-[#00F0FF] glow-cyan' : 'border-[#222]'
                        }`}
                        placeholder="Enter your name..."
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm">
                        <span className="text-[#00F0FF]">&gt;</span>
                        <span className="text-[#666]">EMAIL</span>
                        <span className="text-[#FF0055]">=</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-[#0a0a0a] border rounded px-4 py-3 text-[#E0E0E0] font-mono text-sm focus:outline-none transition-all duration-300 ${
                          focusedField === 'email' ? 'border-[#00F0FF] glow-cyan' : 'border-[#222]'
                        }`}
                        placeholder="Enter your email..."
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm">
                        <span className="text-[#00F0FF]">&gt;</span>
                        <span className="text-[#666]">MESSAGE</span>
                        <span className="text-[#FF0055]">=</span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`w-full bg-[#0a0a0a] border rounded px-4 py-3 text-[#E0E0E0] font-mono text-sm focus:outline-none transition-all duration-300 resize-none ${
                          focusedField === 'message' ? 'border-[#00F0FF] glow-cyan' : 'border-[#222]'
                        }`}
                        placeholder="Type your message..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative py-4 bg-transparent border border-[#00F0FF] text-[#00F0FF] font-mono text-sm tracking-wider overflow-hidden transition-all duration-300 hover:text-[#050505] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 bg-[#00F0FF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="animate-pulse">TRANSMITTING...</span>
                          </>
                        ) : (
                          <>
                            TRANSMIT_MESSAGE
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info & Socials */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 p-4 bg-[#111] border border-[#222] rounded-lg hover:border-[#00F0FF] transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="p-3 rounded-lg bg-[#0a0a0a] border border-[#222] group-hover:border-[#00F0FF] group-hover:scale-110 transition-all duration-300">
                    <info.icon size={20} className="text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#666] mb-1">{info.label}</div>
                    <div className="text-[#E0E0E0] group-hover:text-[#00F0FF] transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-mono text-sm text-[#666] mb-4">CONNECT ON</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 bg-[#111] border border-[#222] rounded-lg hover:border-[#00F0FF] transition-all duration-300"
                  >
                    <social.icon 
                      size={20} 
                      className="transition-colors"
                      style={{ color: social.color }}
                    />
                    <span className="text-[#888] group-hover:text-[#E0E0E0] transition-colors">
                      {social.label}
                    </span>
                    <ExternalLink size={14} className="text-[#555] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-[#111] border border-[#222] rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#00F0FF]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#00F0FF] animate-ping" />
                </div>
                <span className="font-heading font-semibold text-[#E0E0E0]">
                  Available for Work
                </span>
              </div>
              <p className="text-[#888] text-sm">
                I&apos;m currently open to new opportunities, freelance projects, and collaborations. 
                Let&apos;s build something amazing together!
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#111] border border-[#222] rounded-lg text-center">
                <div className="font-heading text-2xl font-bold text-[#00F0FF]">24h</div>
                <div className="font-mono text-xs text-[#666]">Response Time</div>
              </div>
              <div className="p-4 bg-[#111] border border-[#222] rounded-lg text-center">
                <div className="font-heading text-2xl font-bold text-[#FF0055]">100%</div>
                <div className="font-mono text-xs text-[#666]">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
