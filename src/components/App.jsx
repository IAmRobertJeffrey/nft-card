import Card from "./Card";
import { useState } from "react";
import image from '../img/image-equilibrium.jpg'; // with import
import { AppWrapper } from "../styles/App.styled";

function App()
{
	const [cardImage] = useState(image)
	const [cardTitle] = useState("Equilibrium #3429")
	const [cardContent] = useState("Our Equilibrium collection promotes balance and calm.")
	const [cardCreator] = useState("Jules Wyvern")
	const [cardPrice] = useState(0.041)
	const [cardTimeLeft] = useState("3 days left")
	return (
		<AppWrapper>
			<Card image={cardImage} title={cardTitle} content={cardContent} price={cardPrice} timeLeft={cardTimeLeft} creator={cardCreator} />


		</AppWrapper>
	);
}

export default App;
