import React, { useEffect, useState } from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'

function Project() {
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'UDEMY-CLONE',
      category: 'Web App',
      image: P1,
      description:
        'A fully responsive online learning marketplace interface replicating core Udemy courses, categorized filters, video modules, and responsive navigation.',
      technologies: [ 'CSS', 'JavaScript', 'HTML5'],
      liveUrl: 'https://github.com/Gopinath-33',
      githubUrl: 'https://github.com/Gopinath-33'
    },
    {
      id: 2,
      title: 'STAFF LEAVE MANAGEMENT',
      category: 'UI / UX',
      image: P2,
      description:
        'A comprehensive leave tracker application enabling faculty members to apply for permissions and allowing administrative authorities to approve or review records.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS','JavaScript'],
      liveUrl: 'https://github.com/Gopinath-33',
      githubUrl: 'https://github.com/Gopinath-33'
    },
    {
      id: 3,
      title: 'ATTENDANCE MANAGEMENT SYSTEM',
      category: 'Full Stack',
      image: P3,
      description:
        'A robust student and staff attendance monitoring system designed with automated percentage logs, date-wise reporting, and administrative controls.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS','JavaScript'],
      liveUrl: 'https://github.com/Gopinath-33',
      githubUrl: 'https://github.com/Gopinath-33'
    }
  ]

  const categories = ['All', 'Full Stack', 'Web App', 'UI / UX']

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-14 space-y-16">
        {/* Header */}
        <section className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of real-world web applications, user interfaces, and full-stack systems I have developed with clean architecture and performant design.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 shadow-xl hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-950/80 text-violet-300 border border-violet-500/30 backdrop-blur-md">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/40 mt-4">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-violet-500/50 transition-all duration-200"
                >
                  GitHub Code
                </a>
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-500/20 transition-all duration-200"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Project