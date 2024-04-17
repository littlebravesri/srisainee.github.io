import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Work from "./components/Work";
import { Certificates } from "./components/Certificates";


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home ></Home>
      <About />
      <Work />
      <Certificates />
      <Contact></Contact>
    </div>
  );
}

export default App;
