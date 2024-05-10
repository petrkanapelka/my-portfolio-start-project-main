import './App.css';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/main/Main';
import { Contact } from './layouts/sections/contact/Contact';
import { Experience } from './layouts/sections/experience/Experience';
import { Projects } from './layouts/sections/projects/Projects';
import { Technologies } from './layouts/sections/technologies/Technologies';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Projects />
            <Technologies />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;