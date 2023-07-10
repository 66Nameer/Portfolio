import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  Progress,
  Tech,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-whitebg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <Works />
        <Progress />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
