import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../Components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);
      const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section id='about' className={`${darkMode ? 'dark bg-black': 'light bg-transparent '} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10  `} >
        <div>
            <img data-aos="zoom-in" src= {aboutimg} alt='about-image' className=' rounded-2xl lg:w-[500px] lg:h-[600px]  ' />
        </div>

        <div className=' flex flex-col justify-center items-start gap-8' > 
            <h1 data-aos="zoom-in" className=' text-red-500 dark:text-white '  >WHO WE ARE ? </h1>
            <h1 data-aos="zoom-in" data-aos-delay="200" className=' text-black text-[40px] font-semibold leading-10 dark:text-white   ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante urna, imperdiet a cursus ultrices, lobortis sit amet dolor.</h1>
            <p data-aos="zoom-in" data-aos-delay="300" className=' text-gray-600 dark:text-white text-justify  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante urna, imperdiet a cursus ultrices, lobortis sit amet dolor.Fusce quis massa sit amet sapien euismod gravida non non quam. Duis cursus urna risus, a pharetra felis iaculis fringilla.</p>
            <button className=" bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300  ">READ MORE</button>
        </div>
    </section>
  )
}

export default About