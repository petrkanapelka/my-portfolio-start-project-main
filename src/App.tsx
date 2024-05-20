import './App.css';
import { Footer } from './layouts/footer/Footer';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/sections/main/Main';
import { Contact } from './layouts/sections/contact/Contact';
import { Experience } from './layouts/sections/experience/Experience';
import { Projects } from './layouts/sections/projects/Projects';
import { Technologies } from './layouts/sections/technologies/Technologies';
import { Particle } from './components/Particle';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header />
            <Main />
            <Projects />
            <Technologies />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;