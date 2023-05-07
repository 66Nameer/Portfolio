import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, Progress, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-whitebg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-amber">
          <About />
        </div>
        <Works /> 
        <Progress />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
