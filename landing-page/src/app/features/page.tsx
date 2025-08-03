import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FeaturesPage } from '@/modules/features';

export const metadata: Metadata = {
  title: 'Recursos - ParlorHub',
  description: 'Descubra todos os recursos do ParlorHub que vão transformar seu salão de beleza',
};

export default function Features() {
  return (
    <>
      <Header />
      <FeaturesPage />
      <Footer />
    </>
  );
}
