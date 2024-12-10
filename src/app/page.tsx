// pages/index.tsx

import React from 'react';
import NavBar from '../app/Components/NavBar';
import Footer from '../app/Components/Footer';
import Hero from '../app/Components/Hero';
import Features from '../app/Components/Features';
import Blog from '../app/Components/Blog';
import Logo from '../app/Components/Logo';
import Newsletter from '../app/Components/Newsletter';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Digitallink Saudi | Home",
  description: "Digitallink Saudi",
  openGraph: {
    title: "Digitallink Saudi",
    description: "Digitallink Saudi",
    url: "https://digitallink-sa.com",
    siteName: "Digitallink Saudi",
    type: "website",
  },
  alternates: {
    canonical: 'https://digitallink-sa.com'
  },
};


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Blog />
      <Logo />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
