import React, {useState} from "react"
import Form from './components/Form';
import ShowList from './components/ShowList';

function App() {
    const [stuff, setStuff] = useState([])

    return (
        <div className="App">
            <Form stuff = {stuff} setStuff={setStuff} />
            <ShowList stuff = {stuff} setStuff={setStuff} />
        </div>
    );
}

export default App;