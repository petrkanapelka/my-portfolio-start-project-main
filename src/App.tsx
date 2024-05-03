import './App.css';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/main/Main';
import { Projects } from './layouts/sections/projects/Projects';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
        </div>
    );
}

export default App;