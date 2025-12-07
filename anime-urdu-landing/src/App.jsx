import React from 'react';
import Hero from './components/Hero';
import AdminList from './components/AdminList';
import MembersPortfolio from './components/MembersPortfolio';
import GroupRules from './components/GroupRules';
import WhatsAppSection from './components/WhatsAppSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-evaDark min-h-screen text-white font-sans selection:bg-evaGreen selection:text-black overflow-x-hidden">
      <Hero />
      <AdminList />
      <MembersPortfolio />
      <GroupRules />
      <WhatsAppSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
