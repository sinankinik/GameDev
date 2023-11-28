import OurCourses from "./components/ourCourses/OurCourses";
import SlideArea from "./components/slideArea/SlideArea";
import Testimotionals from './components/testimotionals/Testimotionals';
import GetOurApp from './components/getOurApp/GetOurApp';
import Footer from "./components/footer/Footer";



export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-custom-lilac to-custom-gradient-dark h-[768px] px-116 pt-12 relative">
        <SlideArea />
        <div className='absolute bottom-0 right-[79px]'>
          <img src="/assets/hero-image 1.png" alt="" className='h-8[582px] w-[446px]' />
        </div>
      </div>
      <div className="px-116">
        <Testimotionals />
      </div>
      <div>
        <OurCourses />
        <GetOurApp />
        <Footer />
      </div>
    </>

  )
}