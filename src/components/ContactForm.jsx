import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validate() {
    const newErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  function handleReset() {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We'll get back to you shortly.</p>
        <button onClick={handleReset} className={styles.resetButton}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.inputError : ''}
          placeholder="Your name"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.inputError : ''}
          placeholder="you@example.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? styles.inputError : ''}
          placeholder="What is this regarding?"
        />
        {errors.subject && <span className={styles.error}>{errors.subject}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? styles.inputError : ''}
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
