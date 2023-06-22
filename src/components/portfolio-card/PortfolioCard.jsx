import React from 'react';


const PortfolioCard = () => {
  return (
    <div className=' mr-3'>
        <div>
            <div className='card p-3 h-80 md:h-96 mb-3 rounded-md shadow-lg bg-white'>
                <h2 className='p-1 text-lg font-bold sm:text-2xl'>Title</h2>
                <div className='h-full w-full '>
                    <div className='h-[80%] card-hover-container relative cursor-pointer'>
                        <img src="" alt="" className='h-full w-full border-none outline-none rounded-md' />
                        <div
                            className='
                                w-full h-full absolute 
                                flex flex-col justify-center items-center 
                                top-0 p-2 card-hover rounded-lg opacity-0
                                transition-opacity duration-1000
                                hover:opacity-95
                            '
                        >
                            <article className='text-center'>
                                this is what it was use for, blablablabla, and sososososososososos
                            </article>
                            <div className='softwares p-1  w-fit flex'>
                                <span className='text-md font-bold text-yellow-400'>Softwares: </span>
                                <span className='ml-2'> React </span>
                            </div>
                            <div className='w-fit '>
                                <a href="#" className=' p-2 bg-blue-400 rounded-md text-white'>
                                    <span className='btn'>Visit</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <span className='date text-gray-500 text-xs'>Dec 12, 2022</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard