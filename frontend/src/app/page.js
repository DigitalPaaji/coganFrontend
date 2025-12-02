
import About from "./components/About";
import Banner from "./components/Banner";
import TextSection from "./components/TextSection";
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Method from './components/Method'
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from './components/Footer';

export default function Home() {
  return (
 <div>
<Banner/>
<About/>
<Method/>
{/* <TextSection/> */}

<Service1/>
<Service2/>

<Contact/>
<Team/>
<Footer/>
 </div>
  );
}
