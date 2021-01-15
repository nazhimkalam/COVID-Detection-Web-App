import './App.css';
import About from './components/About/About';
import Detection from './components/Detection/Detection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="app">
			<Header />

			<div className="app__body">
				<div className="app__about">
					<About />
					<img src="https://nammco.no/wp-content/uploads/2020/04/597px-sars-cov-2_without_background.png" alt="" />
				</div>

				<Detection />
			</div>

			<Footer />
		</div>
	);
}

export default App;
