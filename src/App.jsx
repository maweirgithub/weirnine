import ContactForm from './components/ContactForm'
import CompanyInfo from './components/CompanyInfo'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Smith Group</h1>
        <p>smithgrp.net</p>
      </header>

      <main>
        <section className="intro">
          <h2>Get in Touch</h2>
          <p>Have a question or want to work together? We'd love to hear from you.</p>
        </section>

        <div className="content-grid">
          <ContactForm />
          <CompanyInfo />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Smith Group. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
