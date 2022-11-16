import React from 'react'
import BreadCrumbSection from '../Sections/BreadCrumbSection'
import ContactFormSection from '../Sections/ContactFormSection'
import FooterSection from '../Sections/FooterSection'
import MapSection from '../Sections/MapSection'
import TopMenuSection from '../Sections/TopMenuSection'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
    <TopMenuSection />
    <BreadCrumbSection currentPage="Contacts"/>
    <MapSection />
    <ContactFormSection />
    <FooterSection />
    </>  
  )
}

export default ContactsView
