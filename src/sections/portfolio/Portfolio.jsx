import React from 'react'
import PortfolioCard from '../../components/portfolio-card/PortfolioCard'
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className='portfolio w-full h-fit flex sm:justify-center p-2 mb-32'>
        <div className='md:w-[80%] sm:w-[95%] w-full'>
            <div className='w-full h-fit'>
                <div className='text-center w-full mb-3 flex-col justify-center items-center'>
                    <h1 className='text-lg sm:text-2xl'>My Portfolio</h1>
                    {/* <div className='underline'></div> */}
                    <p>Below are the List of Projects I have worked On</p>
                </div>
                <div className='p-2 sm:grid md:grid-cols-3 items-center sm:grid-cols-2'>
                    <PortfolioCard />
                    <PortfolioCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio