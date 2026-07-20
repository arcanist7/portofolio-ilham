import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilFoto from './assets/profil.jpeg';

// Import Gambar
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

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const experiences = [
    { id: 1, role: "Content Writer & App Development", company: "Media Redaksi Berita Tangsel", year: "2024", desc: "Mengembangkan fitur web perusahaan dan menyusun konten berita untuk meningkatkan engagement." },
    { id: 2, role: "Administrator", company: "Hallo Bogor Media", year: "2018", desc: "Analisis statistik tren berita dan evaluasi performa sistem harian." }
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
    { title: "Media Berita", tech: ["PHP", "CodeIgniter 3", "MySQL", "Database"], desc: "Portal berita dinamis yang dibangun dengan framework CodeIgniter 3 untuk manajemen konten yang efisien, didukung integrasi database MySQL yang terstruktur.", images: [mb1, mb2, mb3] },
    { title: "Administrasi TK", tech: ["PHP", "MySQL", "CodeIgniter 3", "System"], desc: "Sistem informasi manajemen sekolah berbasis web yang mengoptimalkan pendataan siswa dan administrasi melalui arsitektur sistem yang terintegrasi.", images: [tk3, tk4] },
    { title: "Pemesanan Percetakan", tech: ["PHP", "MySQL", "System"], desc: "Platform otomasi pemesanan percetakan yang dirancang dengan alur sistem berbasis PHP untuk mengelola transaksi secara real-time dan akurat.", images: [pc6, pc7, pc8, pc9] },
    { title: "Aplikasi Atlet", tech: ["PHP", "MySQL", "CodeIgniter 3", "Database", "System"], desc: "Sistem pendataan dan pemantauan performa atlet seleksi Taekwondo dengan database terintegrasi untuk akurasi data statistik dan manajemen sistem yang handal.", images: [at1, at2, at3, at4, at5, at6, at7, at8, at9, at10] },
    { title: "Pemilihan Tempat Minimarket", tech: ["PHP", "MySQL", "Algoritma", "Database"], desc: "Aplikasi sistem pendukung keputusan untuk penentuan lokasi strategis menggunakan implementasi logika pemrograman PHP, database MySQL, dan pemrosesan algoritma.", images: [mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9] }
  ];

  const nextSlide = (e) => { e.stopPropagation(); setCurrentIdx((prev) => (prev + 1) % selectedProject.images.length); };
  const prevSlide = (e) => { e.stopPropagation(); setCurrentIdx((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length); };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 p-8 md:p-20 font-sans selection:bg-blue-900">
      <header className="mb-20 flex flex-col md:flex-row items-center gap-10">
        <motion.div whileHover={{ scale: 1.05 }} className="w-40 h-40 overflow-hidden border border-blue-500/30 shrink-0">
          <img src={profilFoto} alt="Ilham Ngudi Slameto" className="w-full h-full object-cover" />
        </motion.div>

        {/* Container Utama untuk Teks dan Tombol */}
        <div className="flex-1 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-blue-500 mb-2">// identity_profile</div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">ILHAM NGUDI SLAMETO</h1>
            <p className="text-xl text-blue-400 mt-4 font-mono tracking-widest">S1 TEKNIK INFORMATIKA // SOFTWARE ENGINEER</p>
          </div>

          <a 
            href="/Ilham Ngudi Slameto-Resume.pdf" 
            download="Ilham Ngudi Slameto-Resume.pdf" 
            className="px-6 py-2 border border-blue-500 text-blue-500 font-mono text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            DOWNLOAD CV
          </a>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-blue-500"></div>
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-gray-400">Professional_Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div key={exp.id} whileHover={{ x: 10 }} className="group relative border border-gray-800 p-8 hover:border-blue-900 transition-all">
                <span className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 font-mono text-xs text-blue-500">{exp.year}</span>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400">{exp.role}</h3>
                <p className="text-gray-500 font-mono text-sm mb-4">@{exp.company}</p>
                <p className="leading-relaxed text-gray-400">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-blue-500"></div>
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-gray-400">Technical_Capabilities</h2>
          </div>
          <div className="border border-gray-800 p-8 bg-gray-900/30 space-y-8">
            <div>
              <h3 className="text-blue-500 font-mono text-sm mb-4">{"// programming_languages"}</h3>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill) => <span key={skill} className="px-3 py-1 border border-gray-700 text-gray-300 text-xs font-mono">{skill}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-blue-500 font-mono text-sm mb-4">{"// additional_skills"}</h3>
              <div className="space-y-4">
                {hardwareSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center group">
                    <span className="font-mono text-white text-sm">{`0${index + 1}. ${skill.name}`}</span>
                    <span className="text-[10px] bg-blue-900/20 text-blue-400 px-2 py-1 border border-blue-900/50">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-10 bg-blue-500"></div>
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-gray-400">Featured_Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div key={idx} whileHover={{ y: -10, scale: 1.02 }} className="border border-gray-800 hover:border-blue-900 transition-all bg-gray-900/20 cursor-pointer overflow-hidden" onClick={() => { setSelectedProject(proj); setCurrentIdx(0); }}>
              <div className="h-40 w-full overflow-hidden mb-4"><img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover" /></div>
              <div className="px-8 pb-8">
                <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">{proj.tech.map(t => <span key={t} className="text-[10px] text-blue-400 font-mono bg-blue-900/10 px-2 py-1 border border-blue-900/30">#{t}</span>)}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-32 border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">© 2026 Ilham Ngudi Slameto.</p>
        <div className="flex gap-6 font-mono text-sm">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamngudi1@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors underline">Gmail</a>
          <a href="https://www.linkedin.com/in/ilhamngudislameto" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors underline">LinkedIn</a>
          <a href="https://github.com/arcanist7/portofolio-ilham" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors underline">GitHub</a>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedProject(null)}>
            <button onClick={prevSlide} className="absolute left-5 md:left-20 text-white text-5xl z-50">❮</button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={selectedProject.images[currentIdx]} className="max-w-full max-h-[80vh] border border-gray-700 shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <button onClick={nextSlide} className="absolute right-5 md:right-20 text-white text-5xl z-50">❯</button>
            <div className="absolute bottom-10 text-white font-mono bg-black/50 px-4 py-1 rounded-full">{currentIdx + 1} / {selectedProject.images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;