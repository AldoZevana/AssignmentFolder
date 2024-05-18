import './App.css';
import { BrowserRouter,Routes,Route,useParams} from 'react-router-dom';
import Home from "./components/Home"
import Number from"./components/Number"
import Word from './components/Word';
import HelloStyled from './components/HelloStyled';


function App() {

return (
	<BrowserRouter>

		<Routes>


		

			<Route exact path="/" element={<h3>You are in default </h3>} />
        	<Route path="/home" element={<Home/>} />
			<Route exact path="/:input" element={<DynamicRoute/>} />
			<Route exact path="/:word/:color/:bgColor" element={<HelloStyled/>}/>
		</Routes>
	
	
	</BrowserRouter>
);
}
const DynamicRoute = () => {
	const { input } = useParams();
	return !isNaN(+input) ? <Number input={input} /> : <Word input={input} />;
  };

export default App;