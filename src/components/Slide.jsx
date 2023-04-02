import React, { useEffect, useState } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/Bs';
import * as hi2 from 'react-icons/hi2'
import { Link } from 'react-router-dom';

export const Slide = ({ images, Right, Left, Button, Time }) => {
  
  // states
  const [index, setIndex] = useState(0)

  const links = ['video/tt0460649','video/tt4154796','video/tt9271672','video/tt0463985'];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, Time? Time : 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <section className='w-full overflow-hidden bg-transparent relative h-[35vh] md:h-[35vh] lg:h-[55vh] xl:h-[65vh]'>
      <div className='absolute w-screen h-full bg-transparent flex justify-between items-center p-10 z-10'>
        <button
          onClick={() =>
            setIndex((index) => (index === 0 ? images.length - 1 : index - 1))
          }
          className='rounded-full p-4 opacity-70 hover:opacity-100'
        >
          {Left? Left : <hi2.HiChevronLeft className='h-10 w-10' />}
        </button>
        <button
          onClick={() => setIndex((index) => (index + 1) % images.length)}
          className='rounded-full p-4 opacity-70 hover:opacity-100'
        >
          {Right? Right : <hi2.HiChevronRight className='h-10 w-10' />}
        </button>
      </div>
      <article
        className='h-full flex items-top transition-transform duration-1000'
        style={{
          transform: `translateX(-${index * 100/images.length}%)`,
          width: `${images.length * 100}vw`,
        }}
      >
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            className='w-screen mx-auto'
            alt={`Slider image ${i + 1}`}
          />
        ))}
      </article>
      <div className='absolute w-screen bg-transparent z-50 bottom-8 h-[20px] flex justify-center items-center'>
        {images.map((image, i) => 
          {return Button ? Button : <button key={i} onClick={() => setIndex(i)} className={`mx-2 bg-slate-300 rounded-full ${i == index? ' border-[2px] border-slate-500 w-[17px] h-[17px]' : 'w-[15px] h-[15px]'}`}></button>}
        )}
      </div>
      <div className='absolute z-50 bottom-20 left-20 btn btn-warning lg:h-6' >
        <Link to ={links[index]} className='flex justify-around flex-wrap'>More Information <BsFillInfoCircleFill/> </Link>
      </div>
    </section>
  );
}