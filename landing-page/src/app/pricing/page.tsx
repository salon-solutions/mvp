import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PricingPage } from '@/modules/pricing';

export const metadata: Metadata = {
  title: 'Preços - ParlorHub',
  description: 'Conheça nossos planos e escolha o ideal para seu salão de beleza',
};

export default function Pricing() {
  return (
    <>
      <Header />
      <PricingPage />
      <Footer />
    </>
  );
}
