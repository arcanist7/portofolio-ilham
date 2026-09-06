import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import profilFoto from './assets/profil.jpeg';

// Import Video Background (Contoh: letakkan file video di folder assets)
import bgVideo from './assets/background-video.mp4';

// Import Gambar Asli Proyek
import mb1 from './assets/aplikasi media berita/proyek1.jpeg';
import mb2 from './assets/aplikasi media berita/proyek2.png';
import mb3 from './assets/aplikasi media berita/proyek3.png';
import tk3 from './assets/aplikasi administrasi TK/proyek3.jpeg';
import tk4 from './assets/aplikasi administrasi TK/proyek4.jpeg';
import pc6 from './assets/aplikasi pemesanan percetakan/proyek6.png';
import pc7 from './assets/aplikasi pemesanan percetakan/proyek7.png';
import pc8 from './assets/aplikasi pemesanan percetakan/proyek8.png';
import pc9 from './assets/aplikasi pemesanan percetakan/proyek9.png';
import at1 from './assets/aplikasi atlet seleksi/proyek1.jpeg';
import at2 from './assets/aplikasi atlet seleksi/proyek2.png';
import at3 from './assets/aplikasi atlet seleksi/proyek3.png';
import at4 from './assets/aplikasi atlet seleksi/proyek4.png';
import at5 from './assets/aplikasi atlet seleksi/proyek5.png';
import at6 from './assets/aplikasi atlet seleksi/proyek6.png';
import at7 from './assets/aplikasi atlet seleksi/proyek7.png';
import at8 from './assets/aplikasi atlet seleksi/proyek8.png';
import at9 from './assets/aplikasi atlet seleksi/proyek9.png';
import at10 from './assets/aplikasi atlet seleksi/proyek10.jpeg';
import mm1 from './assets/aplikasi pemilihan tempat minimarket/proyek1.png';
import mm2 from './assets/aplikasi pemilihan tempat minimarket/proyek2.png';
import mm3 from './assets/aplikasi pemilihan tempat minimarket/proyek3.png';
import mm4 from './assets/aplikasi pemilihan tempat minimarket/proyek4.png';
import mm5 from './assets/aplikasi pemilihan tempat minimarket/proyek5.png';
import mm6 from './assets/aplikasi pemilihan tempat minimarket/proyek6.png';
import mm7 from './assets/aplikasi pemilihan tempat minimarket/proyek7.png';
import mm8 from './assets/aplikasi pemilihan tempat minimarket/proyek8.png';
import mm9 from './assets/aplikasi pemilihan tempat minimarket/proyek9.png';

// Import Karakter Anime (Genshin Impact) 1 sampai 4
import gi1 from './assets/Genshin-Impact-1.png';
import gi2 from './assets/Genshin-Impact-2.png';
import gi3 from './assets/Genshin-Impact-3.png';
import gi4 from './assets/Genshin-Impact-4.png';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [scrollCharacterIndex, setScrollCharacterIndex] = useState(0);

  const projectSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectSectionRef,
    offset: ["start end", "end start"]
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const badgeTranslateX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const animeCharacters = [gi1, gi2, gi3, gi4];

  const characterThemeBackgrounds = [
    "bg-gradient-to-b from-sky-950 via-slate-950 to-blue-950",      
    "bg-gradient-to-b from-purple-950 via-zinc-950 to-indigo-950",   
    "bg-gradient-to-b from-amber-950 via-stone-950 to-orange-950",   
    "bg-gradient-to-b from-emerald-950 via-neutral-950 to-teal-950"  
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const progress = currentScroll / totalScroll;

      if (progress < 0.25) {
        setScrollCharacterIndex(0);
      } else if (progress < 0.55) {
        setScrollCharacterIndex(1);
      } else if (progress < 0.8) {
        setScrollCharacterIndex(2);
      } else {
        setScrollCharacterIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    { id: 1, role: "Content Writer & App Development", company: "Media Redaksi Berita Tangsel", year: "2024", desc: "Mengembangkan fitur web perusahaan dan menyusun konten berita untuk meningkatkan engagement.", element: "Pyro" },
    { id: 2, role: "Administrator", company: "Hallo Bogor Media", year: "2018", desc: "Analisis statistik tren berita dan evaluasi performa sistem harian.", element: "Hydro" }
  ];

  const programmingSkills = ["PHP", "JavaScript", "HTML", "Python", "Kotlin", "React.js", "Node.js", "MySQL", "CodeIgniter 3"];

  const hardwareSkills = [
    { name: "Smartphone Repair & Sparepart", level: "EXPERT" },
    { name: "Hardware Troubleshooting", level: "ADVANCED" },
    { name: "Progamming AI", level: "ADVANCED" },
    { name: "Software Skill", level: "ADVANCED" },
    { name: "System Maintenance", level: "ADVANCED" },
    { name: "API Testing (Postman)", level: "INTERMEDIATE" }
  ];

  const projects = [
    { title: "Media Berita", category: "web", tech: ["PHP", "CodeIgniter 3", "MySQL", "Database"], desc: "Portal berita dinamis yang dibangun dengan framework CodeIgniter 3 untuk manajemen konten yang efisien, didukung integrasi database MySQL yang terstruktur.", images: [mb1, mb2, mb3] },
    { title: "Administrasi TK", category: "web", tech: ["PHP", "MySQL", "CodeIgniter 3", "System"], desc: "Sistem informasi manajemen sekolah berbasis web yang mengoptimalkan pendataan siswa dan administrasi melalui arsitektur sistem yang terintegrasi.", images: [tk3, tk4] },
    { title: "Pemesanan Percetakan", category: "system", tech: ["PHP", "MySQL", "System"], desc: "Platform otomasi pemesanan percetakan yang dirancang dengan alur sistem berbasis PHP untuk mengelola transaksi secara real-time dan akurat.", images: [pc6, pc7, pc8, pc9] },
    { title: "Aplikasi Atlet", category: "system", tech: ["PHP", "MySQL", "CodeIgniter 3", "Database", "System"], desc: "Sistem pendataan dan pemantauan performa atlet seleksi Taekwondo dengan database terintegrasi untuk akurasi data statistik dan manajemen sistem yang handal.", images: [at1, at2, at3, at4, at5, at6, at7, at8, at9, at10] },
    { title: "Pemilihan Tempat Minimarket", category: "web", tech: ["PHP", "MySQL", "Algoritma", "Database"], desc: "Aplikasi sistem pendukung keputusan untuk penentuan lokasi strategis menggunakan implementasi logika pemrograman PHP, database MySQL, dan pemrosesan algoritma.", images: [mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9] }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const nextSlide = (e) => { e.stopPropagation(); setCurrentIdx((prev) => (prev + 1) % selectedProject.images.length); };
  const prevSlide = (e) => { e.stopPropagation(); setCurrentIdx((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length); };

  return (
    <div className={`min-h-screen ${characterThemeBackgrounds[scrollCharacterIndex]} text-white font-sans selection:bg-[#38bdf8] selection:text-black relative overflow-x-hidden transition-colors duration-1000`}>
      
      {/* BACKGROUND VIDEO DI BAGIAN TENGAH / KESELURUHAN HALAMAN */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-15 mix-blend-screen filter blur-[1px]"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-10 w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px] pointer-events-none z-0"></div>

      <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-end pointer-events-none">
        <div className="relative w-52 h-52 md:w-64 md:h-64 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] pointer-events-auto cursor-pointer group">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl group-hover:bg-white/25 transition-all"></div>
          <AnimatePresence mode="wait">
            <motion.img 
              key={scrollCharacterIndex}
              src={animeCharacters[scrollCharacterIndex]} 
              alt="Genshin Impact Companion" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
              className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            />
          </AnimatePresence>
        </div>
      </div>

      <nav className="flex items-center justify-between px-8 py-5 bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-sky-400">
            PORTFOLIO
          </span>
          <div className="hidden md:flex gap-6 text-xs font-mono text-zinc-300">
            <a href="#home" className="hover:text-white transition-colors cursor-pointer">HOME</a>
            <a href="#experience" className="hover:text-white transition-colors cursor-pointer">EXPERIENCE</a>
            <a href="#projects" className="hover:text-white transition-colors cursor-pointer">PROJECTS</a>
          </div>
        </div>
        <a 
          href="/Ilham Ngudi Slameto-Resume.pdf" 
          download="Ilham Ngudi Slameto-Resume.pdf" 
          className="px-5 py-2 rounded-full bg-white text-black font-bold font-mono text-xs tracking-wider hover:bg-zinc-200 transition-all shadow-lg"
        >
          DOWNLOAD CV
        </a>
      </nav>

      <section id="home" className="relative px-6 md:px-20 py-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[90vh] z-10">
        <div className="max-w-2xl z-10 flex flex-col items-start relative w-full">
          <div className="absolute -top-24 -left-20 w-[420px] h-[420px] md:w-[500px] md:h-[500px] pointer-events-none z-0 opacity-40 mix-blend-screen filter blur-[0.5px]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={scrollCharacterIndex}
                src={animeCharacters[scrollCharacterIndex]} 
                alt="Genshin Background Overlay" 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.5, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex flex-col items-start w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-sky-300 font-mono text-xs mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
              SCROLL DOWN TO SHIFT CHARACTER & BACKGROUND ({scrollCharacterIndex + 1}/4)
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.1]">
              Fullstack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-purple-300 to-pink-400">
                Engineer & Developer
              </span>
            </h1>
            
            <p className="mt-6 text-zinc-200 text-base md:text-lg leading-relaxed font-light max-w-xl">
              Berpengalaman dalam perancangan sistem berbasis web, penulisan konten teknis, dan maintenance hardware maupun software. Siap menghadirkan solusi digital yang efisien dan interaktif.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-black font-extrabold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-all shadow-xl">
                Explore Projects
              </a>
              <a href="#experience" className="px-8 py-4 rounded-xl bg-black/40 border border-white/15 text-white font-bold text-xs tracking-widest uppercase hover:bg-black/60 transition-all backdrop-blur-md">
                View Experience
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[480px] relative flex flex-col items-center justify-center gap-6 z-10">
            <div className="w-full h-[420px] md:h-[480px] relative flex justify-center items-center bg-black/35 backdrop-blur-md rounded-3xl border border-white/15 shadow-2xl overflow-hidden p-4">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

              <img 
                src={profilFoto} 
                alt="Ilham Ngudi Slameto" 
                className="w-full h-full object-cover rounded-2xl z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-black/65 border border-white/15 rounded-xl p-3 backdrop-blur-md flex justify-between items-center text-xs font-mono z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
                  <span className="text-zinc-300">PROFILE:</span>
                  <span className="text-white font-bold">Ilham Ngudi Slameto</span>
                </div>
                <span className="text-sky-300 font-mono text-[11px] font-bold uppercase bg-white/10 px-2.5 py-1 rounded border border-white/10">
                  S.kom
                </span>
              </div>
            </div>
        </div>
      </section>

      <div id="experience" className="max-w-6xl mx-auto px-6 pt-24 pb-24 grid md:grid-cols-2 gap-16 relative z-20">
        <div className="relative pt-16 overflow-visible">
          <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-30">
            <div className="relative w-36 h-36 flex justify-center items-center">
              <div className="absolute w-36 h-36 bg-sky-400/30 rounded-full blur-3xl animate-pulse"></div>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={scrollCharacterIndex}
                  src={animeCharacters[scrollCharacterIndex]} 
                  alt="Genshin Character Experience Peek" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4, 
                    y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
                  }}
                  className="w-36 h-36 object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] relative z-10"
                />
              </AnimatePresence>
            </div>
          </div>

          <section className="bg-black/40 border border-white/15 p-8 rounded-3xl backdrop-blur-md relative z-10 flex flex-col shadow-2xl overflow-hidden">
            <motion.div 
              style={{ x: badgeTranslateX }} 
              className="absolute -right-10 top-8 bg-sky-500/20 border border-sky-400/40 px-6 py-1 rounded-full text-[10px] font-mono text-sky-300 backdrop-blur-sm rotate-12 pointer-events-none shadow-lg z-20"
            >
              ✦ ELEMENTAL SYNC ACTIVE
            </motion.div>

            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-sky-300 mb-6">Professional_Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.div key={exp.id} whileHover={{ x: 4 }} className="border border-white/10 bg-black/40 p-6 rounded-2xl hover:border-white/30 transition-all backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-white/10 text-sky-200 px-2.5 py-0.5 rounded text-xs font-mono border border-white/10">{exp.year}</span>
                    <span className="text-xs font-mono text-zinc-300">[{exp.element}]</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-sky-300/90 font-mono text-xs mb-3">@{exp.company}</p>
                  <p className="text-sm text-zinc-200 leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative pt-16 overflow-visible">
          <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-30">
            <div className="relative w-36 h-36 flex justify-center items-center">
              <div className="absolute w-36 h-36 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={(scrollCharacterIndex + 1) % animeCharacters.length}
                  src={animeCharacters[(scrollCharacterIndex + 1) % animeCharacters.length]} 
                  alt="Genshin Character Skills Peek" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4, 
                    y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
                  }}
                  className="w-36 h-36 object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] relative z-10"
                />
              </AnimatePresence>
            </div>
          </div>

          <section className="bg-black/40 border border-white/15 p-8 rounded-3xl backdrop-blur-md relative z-10 flex flex-col shadow-2xl">
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-sky-300 mb-6">Technical_Capabilities</h2>
            <div className="space-y-6">
              <div className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-sky-300 font-mono text-xs mb-3 tracking-wider">{"// programming_languages"}</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/10 border border-white/10 text-zinc-100 rounded-lg text-xs font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-sky-300 font-mono text-xs mb-3 tracking-wider">{"// additional_skills"}</h3>
                <div className="space-y-3">
                  {hardwareSkills.map((skill, index) => (
                    <div key={index} className="flex justify-between items-center py-1.5 border-b border-white/10 last:border-none">
                      <span className="font-mono text-xs text-zinc-200">{`0${index + 1}. ${skill.name}`}</span>
                      <span className="text-[10px] bg-white/10 text-sky-200 px-2 py-0.5 rounded font-mono font-bold border border-white/10">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="projects" ref={projectSectionRef} className="max-w-6xl mx-auto px-6 py-12 relative z-20 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-sky-300">Featured_Projects</h2>
          <div className="flex gap-2 bg-black/50 p-1.5 rounded-xl border border-white/15 backdrop-blur-md">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${activeTab === 'all' ? 'bg-white text-black font-bold shadow' : 'text-zinc-300 hover:text-white'}`}>All</button>
            <button onClick={() => setActiveTab('web')} className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${activeTab === 'web' ? 'bg-white text-black font-bold shadow' : 'text-zinc-300 hover:text-white'}`}>Web Apps</button>
            <button onClick={() => setActiveTab('system')} className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${activeTab === 'system' ? 'bg-white text-black font-bold shadow' : 'text-zinc-300 hover:text-white'}`}>Systems</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {filteredProjects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -6, scale: 1.01 }} 
              className="border border-white/15 hover:border-white transition-all bg-black/40 rounded-3xl cursor-pointer overflow-visible flex flex-col justify-between backdrop-blur-md group shadow-xl relative" 
              onClick={() => { setSelectedProject(proj); setCurrentIdx(0); }}
            >
              <div>
                <div className="h-48 w-full overflow-hidden relative rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                  <motion.img 
                    style={{ y: imageParallaxY }}
                    src={proj.images[0]} 
                    alt={proj.title} 
                    className="w-full h-[130%] object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  <div className="absolute top-3 right-3 z-20 bg-black/70 border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-mono text-sky-300 backdrop-blur-md shadow-lg">
                    {proj.category.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{proj.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tech.map(t => <span key={t} className="text-[10px] text-sky-200 font-mono bg-white/10 px-2 py-0.5 rounded border border-white/10">#{t}</span>)}
                  </div>
                  <p className="text-zinc-200 text-xs leading-relaxed">{proj.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <span className="text-xs font-mono text-sky-300 group-hover:underline flex items-center gap-1">
                  View Gallery ({proj.images.length} images) →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 mt-20 border-t border-white/15 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-300 relative z-25">
        <p>© 2026 Ilham Ngudi Slameto. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamngudi1@gmail.com" target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">Gmail</a>
          <a href="https://www.linkedin.com/in/ilhamngudislameto" target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">LinkedIn</a>
          <a href="https://github.com/arcanist7/portofolio-ilham" target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">GitHub</a>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
            <button onClick={prevSlide} className="absolute left-6 md:left-12 text-white hover:text-sky-300 text-4xl z-50 bg-black/60 p-3 rounded-full border border-white/20 transition-all">❮</button>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="relative max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img src={selectedProject.images[currentIdx]} alt={selectedProject.title} className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/20 shadow-2xl" />
              <div className="mt-4 text-sky-300 font-mono bg-black/80 border border-white/20 px-4 py-1.5 rounded-full text-xs tracking-widest shadow">
                {selectedProject.title} — {currentIdx + 1} / {selectedProject.images.length}
              </div>
            </motion.div>
            <button onClick={nextSlide} className="absolute right-6 md:right-12 text-white hover:text-sky-300 text-4xl z-50 bg-black/60 p-3 rounded-full border border-white/20 transition-all">❯</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;