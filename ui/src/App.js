import './App.css';
import About from './components/About/About';
import Detection from './components/Detection/Detection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="app">
			<Header />

			<div>
				<About />
				<img src="" alt="" />
			</div>

			<Detection />

			<Footer />
		</div>
	);
}

export default App;
