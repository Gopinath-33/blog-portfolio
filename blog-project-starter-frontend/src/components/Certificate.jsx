import React, { useEffect, useState } from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

function Certificate() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const certificates = [
    {
      id: 1,
      title: 'Object Oriented Programming Using Python',
      issuer: 'Infosys Springboard',
      category: 'Programming',
      date: '2024',
      credentialId: 'INFOSYS-OOP-PY-2024',
      description:
        'Comprehensive training covering classes, inheritance, polymorphism, encapsulation, and modular Python programming patterns.',
      skills: ['Python', 'OOP', 'Problem Solving'],
      verifyUrl: 'https://infyspringboard.onwingspan.com/'
    },
    {
      id: 2,
      title: 'Generative AI with IBM Cloud',
      issuer: 'IBM',
      category: 'AI & Cloud',
      date: '2024',
      credentialId: 'IBM-GENAI-CLOUD-2024',
      description:
        'Hands-on foundation on Large Language Models, prompt engineering patterns, foundation models, and cloud-based AI deployments.',
      skills: ['Generative AI', 'IBM Cloud', 'Prompt Engineering'],
      verifyUrl: 'https://www.credly.com/'
    },
    {
      id: 3,
      title: 'MongoDB Basics for Students',
      issuer: 'MongoDB University',
      category: 'Database',
      date: '2024',
      credentialId: 'MDB-BASICS-STUDENT',
      description:
        'Mastered NoSQL data modeling, document schemas, CRUD operations, indexing strategies, and aggregation pipelines.',
      skills: ['MongoDB', 'NoSQL', 'Database Design'],
      verifyUrl: 'https://university.mongodb.com/'
    },
    {
      id: 4,
      title: 'Web Design Certification',
      issuer: 'ILIFE Technologies',
      category: 'Web Development',
      date: '2025',
      credentialId: 'ILIFE-WD-2025',
      description:
        'Practical assessment on modern responsive UI architectures, semantic HTML structure, CSS Flexbox/Grid, and cross-browser performance.',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      verifyUrl: 'https://github.com/Gopinath-33'
    }
  ]

  const categories = ['All', 'Web Development', 'Programming', 'AI & Cloud', 'Database']

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-14 space-y-16">
        {/* Header */}
        <section className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Honors & Credentials
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Licenses & <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Certificates</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verified milestones, skill credentials, and industry course completions validating my technical knowledge across modern development disciplines.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCertificates.map((cert) => (
            <article
              key={cert.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 shadow-xl hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Top Badge & Issuer */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{cert.date}</span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Credential
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1 group/link"
                >
                  Verify Certificate
                  <span className="group-hover/link:translate-x-0.5 transition-transform">↗</span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Certificate