import './App.css';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/main/Main';
import { Projects } from './layouts/sections/projects/Projects';
import { Technologies } from './layouts/sections/technologies/Technologies';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
        </div>
    );
}

export default App;