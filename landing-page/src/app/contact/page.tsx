'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactPage } from '@/modules/contact';

export default function Contact() {
  return (
    <>
      <Header />
      <ContactPage />
      <Footer />
    </>
  );
}
