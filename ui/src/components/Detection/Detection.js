import './Detection.css';
import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';

function Detection() {
	return (
		<div className="detection">
			<h2>COVID-19 DETECTOR</h2>
			<p className="detection__help">
				<span>How it works: </span>Click the <strong>UPLOAD</strong> image button to upload the image and Click the{' '}
				<strong>DETECT</strong> button to get the result.
			</p>
			<div className="detection__sampleInputs">
				<h3>Sample Inputs</h3>
				<div className="detection__sampleInputsImages">
					<img src="https://www.radiologyinfo.org/gallery-items/images/chest-xray.jpg" alt="" />
					<img src="https://www.itnonline.com/sites/default/files/Covid_lungs.jpeg" alt="" />
					<img
						src="https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg"
						alt=""
					/>
					<img
						src="https://prod-images-static.radiopaedia.org/images/381278/5757c0787c96e99ee6f7a3cdb48ed1_jumbo.jpeg"
						alt=""
					/>
				</div>
			</div>

			<div className="detection__uploadDetect">
				<Button className="detection__uploadDetectUpload">
					UPLOAD
					<PublishIcon fontSize="small" className="detection__uploadDetectUploadIcon" />
				</Button>
				<Button className="detection__uploadDetectDetect">
					DETECT
					<SearchIcon fontSize="small" className="detection__uploadDetectUploadIcon" />
				</Button>
			</div>
		</div>
	);
}

export default Detection;
