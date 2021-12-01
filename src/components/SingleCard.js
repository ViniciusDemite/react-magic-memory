import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
	const handleClick = () => {
		if (disabled) return;

		handleChoice(card);
	};

	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				<img className="front" src={card.src} alt="Card front" />
				<img
					onClick={handleClick}
					className="back"
					src="/img/cover.png"
					alt="Card back"
				/>
			</div>
		</div>
	);
}
