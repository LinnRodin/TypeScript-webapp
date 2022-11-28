import React from 'react'
import BreadCrumbSection from '../Sections/BreadCrumbSection'
import ContactFormSection from '../Sections/ContactFormSection'
import FooterSection from '../Sections/FooterSection'
import MapSection from '../Sections/MapSection'
import TopMenuSection from '../Sections/TopMenuSection'

const ContactsView: React.FC = () => {
  document.title = 'Contacts | Fixxo.'

  return (
    <>
      <TopMenuSection />
      <BreadCrumbSection currentPage="Contacts"/>
      <MapSection allowFullScreen={false} />
      <ContactFormSection />
      <FooterSection />
    </>  
  )
}

export default ContactsView
