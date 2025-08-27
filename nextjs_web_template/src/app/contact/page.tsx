import React from 'react'
import ContactComponent from '../components/ContactComponent'
import ContactForm from '../components/ContactForm'
import PageHeader from '../components/ui/PageHeader'
function page() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <PageHeader title='Kontakt' />
      <ContactComponent />
      <ContactForm />
    </div>
  )
}

export default page