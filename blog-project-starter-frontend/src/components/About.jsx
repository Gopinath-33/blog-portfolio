import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import CSS from '../assets/css-3.png'
import HTML from '../assets/html.png'
import DB from '../assets/data-server.png'
import JS from '../assets/js.png'
import REACTICON from '../assets/physics.png'
import NODE from '../assets/node-js.png'

function About() {
  const techStack = [
    { src: HTML, name: 'HTML5' },
    { src: CSS, name: 'CSS3' },
    { src: JS, name: 'JavaScript' },
    { src: REACTICON, name: 'React' },
    { src: DB, name: 'Database' },
    { src: NODE, name: 'Node.js' },
  ]

  const skills = [
    { category: 'Languages', items: ['Java'] },
    { category: 'Web Technologies', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js', 'PHP'] },
    { category: 'Database', items: ['MySQL', 'MongoDB (Basics)'] },
    { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Canva'] },
  ]

  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'ILIFE Technologies',
      period: 'May 2025 – June 2025',
      points: [
        'Built dynamic frontend components using HTML, CSS, and JavaScript.',
        'Collaborated using Git and GitHub workflows in production-like settings.',
      ],
    },
    {
      role: 'Java Intern',
      company: 'Greensoft Groups',
      period: 'May 2024 – June 2024',
      points: [
        'Learned OOP fundamentals and core Java architecture.',
        'Developed problem-solving skills across small-scale standalone modules.',
      ],
    },
  ]

  const education = [
    {
      title: 'B.Sc. in Computer Science',
      institution: 'SRM Trichy Arts and Science College, Trichy',
      score: 'CGPA: 8.20 / 77.88%',
      year: '2023 – 2026',
    },
    {
      title: 'MERN Stack Web Development (4-Month Program)',
      institution: 'ErrorMakes Clever',
      score: 'Professional Certification Track',
      year: 'Pursuing',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-14 space-y-20">
        
        {/* --- HEADER --- */}
        <section className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20">
            About Me
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            I'm <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Gopinath M</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
           MERN Stack Developer based in Trichy, Tamil Nadu, specializing in building scalable, responsive, and user-friendly web applications. I help businesses and individuals turn ideas into modern digital solutions using MongoDB, Express.js, React, and Node.js, with a focus on clean architecture, maintainable code, and reliable performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm text-slate-400">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800">📍 Trichy, India</span>
            <a href="mailto:gopinath04160@gmail.com" className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-violet-400 hover:border-violet-500/40 transition-colors">
              ✉️ gopinath04160@gmail.com
            </a>
            <a href="https://github.com/Gopinath-33" target="_blank" rel="noreferrer" className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-violet-400 hover:border-violet-500/40 transition-colors">
              💻 github.com/Gopinath-33
            </a>
          </div>
        </section>

        {/* --- TECHNOLOGIES & TOOLS --- */}
        <section className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-110"
              >
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 group-hover:border-violet-500 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <img src={tech.src} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </div>
                <span className="text-xs text-slate-400 font-medium group-hover:text-violet-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- TECHNICAL SKILLS MATRIX --- */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center md:text-left">
            Technical <span className="text-violet-400">Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 shadow-lg transition-all backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION DUAL COLUMN --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Internship <span className="text-violet-400">Experience</span>
            </h2>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-sm text-violet-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-400 list-disc list-inside">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Education & <span className="text-violet-400">Training</span>
            </h2>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-slate-100">{edu.title}</h3>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">{edu.institution}</p>
                  <p className="text-xs text-violet-400 font-semibold mt-2">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default About