import Hero from "../components/home/Hero"
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section6 from "../components/home/Section6";
import Section5 from "../components/home/Section5";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section2/>      
      <Section3/>      
      <Section4/>      
      <Section5/>      
      <Section6/>      
      <Footer/>
    </div>
  )
}

export default Home
