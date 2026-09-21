import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

function Contact() {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    setErrorMessage('')

    // Ungaloda Updated EmailJS Credentials
    const SERVICE_ID = 'service_4p2zom4'
    const TEMPLATE_ID = 'template_nuc9myl'
    const PUBLIC_KEY = '2iS38PPjdmpdsYczl'

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setIsSending(false)
        setIsSent(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSent(false), 5000)
      })
      .catch((error) => {
        console.error('Email sending failed:', error)
        setIsSending(false)
        setErrorMessage(`Failed: ${error?.text || error?.message || 'Please check EmailJS setup'}`)
      })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-14 space-y-16">
        {/* --- HEADER --- */}
        <section className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Let’s Build <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Have a project in mind, a question, or an opportunity? Feel free to reach out directly.
          </p>
        </section>

        {/* --- CONTACT GRID --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info Side (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-white">Contact Info</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-violet-400 text-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Location</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Trichy, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-violet-400 text-lg">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Email</h3>
                    <a href="mailto:gopinath04160@gmail.com" className="text-xs sm:text-sm text-slate-400 hover:text-violet-400 transition-colors mt-0.5 block">
                      gopinath04160@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-violet-400 text-lg">
                    📞
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Phone</h3>
                    <a href="tel:+916380898186" className="text-xs sm:text-sm text-slate-400 hover:text-violet-400 transition-colors mt-0.5 block">
                      +91 6380898186
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-violet-400 text-lg">
                    💻
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">GitHub</h3>
                    <a 
                      href="https://github.com/Gopinath-33" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs sm:text-sm text-slate-400 hover:text-violet-400 transition-colors mt-0.5 block"
                    >
                      github.com/Gopinath-33
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-800/30 text-xs text-slate-300">
                ⚡ Available for freelance development and full-time junior developer opportunities.
              </div>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-2xl rounded-3xl pointer-events-none" />

              <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your-email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Feedback"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all resize-none"
                      required
                    />
                  </div>

                  {isSent && (
                    <div className="p-3 text-center text-xs font-medium rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-emerald-400">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-3 text-center text-xs font-medium rounded-lg bg-rose-950/50 border border-rose-800/50 text-rose-400">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 rounded-xl font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 cursor-pointer"
                  >
                    {isSending ? 'Sending Message...' : 'Send Message →'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact