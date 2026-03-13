import styles from './CompanyInfo.module.css'

function CompanyInfo() {
  return (
    <aside className={styles.info}>
      <h3>Contact Information</h3>

      <div className={styles.block}>
        <h4>Address</h4>
        <p>123 Business Ave, Suite 200<br />Chicago, IL 60601</p>
      </div>

      <div className={styles.block}>
        <h4>Phone</h4>
        <p><a href="tel:+13125550100">(312) 555-0100</a></p>
      </div>

      <div className={styles.block}>
        <h4>Email</h4>
        <p><a href="mailto:info@smithgrp.net">info@smithgrp.net</a></p>
      </div>

      <div className={styles.block}>
        <h4>Business Hours</h4>
        <p>
          Monday – Friday: 8:00 AM – 6:00 PM<br />
          Saturday: 9:00 AM – 1:00 PM<br />
          Sunday: Closed
        </p>
      </div>
    </aside>
  )
}

export default CompanyInfo
