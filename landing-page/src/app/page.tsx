import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LandingPage } from '@/modules/landing';

export const metadata: Metadata = {
  title: 'ParlorHub - IA para Salões de Beleza',
  description: 'Transforme seu salão com inteligência artificial. Aumente sua receita em até 300% e reduza faltas em 95%.',
};

export default function Home() {
  return (
    <>
      <Header/>
      <LandingPage />
      <Footer/>
    </>
  );
}
