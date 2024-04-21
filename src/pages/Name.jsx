import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Name({ round, score, setScore }) {
	const [options, setOptions] = useState([]);
	const navigate = useNavigate();
	const [tempScore, setTempScore] = useState(1500);
	const timer = useRef(null);

	// Functions
	function generateOptions() {
		let nameOptions = [];
		nameOptions[round[0].correctOption] = round[0].correctURL.name;
		let count = 0;
		if (round[0].correctOption === 0) {
			count = 1;
		}
		round[0].options.name.forEach((option) => {
			if (count !== round[0].correctOption) {
				nameOptions[count] = option;
			}
			if (count + 1 === round[0].correctOption) {
				count += 2;
			} else {
				count++;
			}
		});
		setOptions(nameOptions);
	}

	const handleOptionSelected = (index) => {
		clearInterval(timer.current);
		let temp = score;
		if (index === round[0].correctOption) {
			temp += tempScore;
			setScore(temp);
		}
		navigate("/game/place");
	};

	const startTimer = () => {
		let temp = 1500;
		timer.current = setInterval(() => {
			temp -= 35;
			setTempScore(temp);
			if (temp <= 0) {
				clearInterval(timer.current);
				navigate("/game/place");
			}
		}, 100);
	};

	// UseEffect
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
						<div id="game-name">Name</div>
						<div id="score">{tempScore}</div>
						<div id="letter">{round[0].roundLetter}</div>
					</div>
					<div className="choiceHolder df jcc aic">
						{options &&
							options.map((option, index) => {
								return (
									<button
										onClick={() => {
											handleOptionSelected(index);
										}}
										key={index}
										className="choice df jcc aic"
									>
										<img src={option} alt={option} />
									</button>
								);
							})}
					</div>
				</div>
			)}
		</>
	);
}
