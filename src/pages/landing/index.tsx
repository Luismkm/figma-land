/* import video from '../../assets/video.png'; */

import Header from '../../components/header';
import Partners from './components/partners';
import Testimonials from './components/testimonials';
import Pricing from './components/Pricing';
import Contact from './components/contact';
import Footer from '../../components/footer';
import Hero from './components/hero';
import Subscribe from './components/subscribe';
import Demo from './components/demo';
import Feature from './components/feature';

function Landing() {
  return (
    <>
      <div className="w-screen h-[930px] bg-people bg-center bg-no-repeat flex flex-col items-center">
        <Header />
        <Hero />
      </div>
      <section className="w-screen h-[1361px] mt-[112px] flex flex-col items-center">
        <Feature />
        {/* <div className="mt-20">
          <img src={video} alt="" />
        </div> */}
        <Demo />
        <Subscribe />
        <Partners />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default Landing;
