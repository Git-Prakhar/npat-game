import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/nameplat.png";

export default function Homepage({
	username,
	setUsername,
	avatar,
	setAvatar,
	setCurrentUser,
	avatarImages,
	setGameMode,
}) {
	// constants
	const navigate = useNavigate();

	// Functions
	const handleAvatarSelection = (code) => {
		const avatarButtons = document.querySelectorAll("#avatar-selection button");
		avatarButtons.forEach((button) => {
			button.classList.remove("avatar-selected");
		});
		avatarButtons[code].classList.add("avatar-selected");
		setAvatar(code);
	};

	const handlePracticeRoom = () => {
		if (username.trim() === "") {
			alert("Please enter a username");
			return;
		}
		setGameMode("practice");
		setCurrentUser({ username, avatar, role: "host" });
		navigate("/practice");
	};

	return (
		<div id="homepage" className="df jcc aic">
			<div id="main">
				<div className="df-col jcc aic">
					<div>
						<input
							type="text"
							autoComplete="off"
							id="username-field"
							placeholder="Enter your name"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="text"
							autoComplete="off"
							id="room-field"
							placeholder="Room Code [SOON]"
						/>
					</div>
					<div className="df jcc aic" id="selection-button-holder">
						<button className="selection-btn" onClick={handlePracticeRoom}>
							Practice
						</button>
						<button className="selection-btn">Create Room</button>
						<button className="selection-btn">Join Room</button>
					</div>
				</div>
				<div id="avatar-selection" className="df jcc aic">
					<button
						onClick={() => {
							handleAvatarSelection(0);
						}}
						className="avatar-selected"
					>
						<img draggable={false} src={avatarImages[0]} alt="" />
					</button>
					<button
						onClick={() => {
							handleAvatarSelection(1);
						}}
					>
						<img draggable={false} src={avatarImages[1]} alt="" />
					</button>
					<button
						onClick={() => {
							handleAvatarSelection(2);
						}}
					>
						<img draggable={false} src={avatarImages[2]} alt="" />
					</button>
					<button
						onClick={() => {
							handleAvatarSelection(3);
						}}
					>
						<img draggable={false} src={avatarImages[3]} alt="" />
					</button>
					<button
						onClick={() => {
							handleAvatarSelection(4);
						}}
					>
						<img draggable={false} src={avatarImages[4]} alt="" />
					</button>
					<button
						onClick={() => {
							handleAvatarSelection(5);
						}}
					>
						<img draggable={false} src={avatarImages[5]} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}
