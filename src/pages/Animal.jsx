import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Animal({ round, score, setScore }) {
	const [options, setOptions] = useState([]);
	const navigate = useNavigate();
	const [tempScore, setTempScore] = useState(1500);
	const timerRef = useRef(null);

	function generateOptions() {
		let animalOptions = [];
		animalOptions[round[0].correctOption] = round[0].correctURL.animal;
		let count = 0;
		if (round[0].correctOption === 0) {
			count = 1;
		}
		round[0].options.animal.forEach((option) => {
			if (count !== round[0].correctOption) {
				animalOptions[count] = option;
			}
			if (count + 1 === round[0].correctOption) {
				count += 2;
			} else {
				count++;
			}
		});
		setOptions(animalOptions);
	}

	const handleOptionSelected = (index) => {
		clearInterval(timerRef.current);
		let temp = score;
		if (index === round[0].correctOption) {
			temp += tempScore;
			setScore(temp);
		}
		navigate("/game/thing");
	};

	const startTimer = () => {
		let temp = 1500;
		timerRef.current = setInterval(() => {
			temp -= 35;
			setTempScore(temp);
			if (temp <= 0) {
				clearInterval(timerRef.current);
				navigate("/game/thing");
			}
		}, 100);
	};

	useEffect(() => {
		if (!round) return navigate("/");
		generateOptions();
		startTimer();
	}, []);

	return (
		<>
			{round && (
				<div id="game-page" className="df-col aic">
					<div className="df jcc aic" id="nav">
						<div id="game-name">Animal</div>
						<div id="timing">{tempScore}</div>
						<div id="letter">{round[0].roundLetter}</div>
					</div>
					<div className="choiceHolder df jcc aic">
						{options.map((option, index) => (
							<div
								key={index}
								className="choice df jcc aic"
								onClick={() => handleOptionSelected(index)}
							>
								<img src={option} alt={option} />
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}
