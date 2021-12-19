import Card from "./Card";
import { useState } from "react";
import image from './image-equilibrium.jpg'; // with import

function App()
{
	const [cardImage] = useState(image)
	const [cardTitle] = useState("Equilibrium #3429")
	const [cardContent] = useState("Our Equilibrium collection promotes balance and calm.")
	const [cardCreator] = useState("Jules Wyvern")
	const [cardPrice] = useState(0.041)
	const [cardTimeLeft] = useState("3 days left")
	return (
		<div className="App">
			<Card image={cardImage} title={cardTitle} content={cardContent} price={cardPrice} timeLeft={cardTimeLeft} creator={cardCreator} />
		</div>
	);
}

export default App;
