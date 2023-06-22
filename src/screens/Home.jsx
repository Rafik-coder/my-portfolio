import React from 'react'

// Components
import TopNav from '../sections/topNav/TopNav';
import Header from '../sections/header/Header';
import About from '../sections/about/About';
import Portfolio from '../sections/portfolio/Portfolio';
import Contact from '../sections/coontact/Contact';
import Footer from '../sections/footer/Footer';


const Home = () => {
  return (
    <section className=' relative'>
      <TopNav />
      <main className='Home'>
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </section>
  )
}

export default Home
