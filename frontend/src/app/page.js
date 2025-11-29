
import About from "./components/About";
import Banner from "./components/Banner";
import TextSection from "./components/TextSection";
import Service1 from './components/Service1'
import Service2 from './components/Service2'

import Method from './components/Method'
import Contact from "./components/Contact";

export default function Home() {
  return (
 <div>
<Banner/>
<TextSection/>
<About/>
<Method/>
<Service1/>
<Service2/>
<Contact/>

 </div>
  );
}
