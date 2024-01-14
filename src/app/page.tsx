import About from '@/components/About'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Work from '@/components/Work'

export default function Home() {
  return (
    <div id="home" className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  )
}
