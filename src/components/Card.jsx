import React from 'react'
import { CardWrapper } from '../styles/Card.styled'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardFooter from './CardFooter'

const Card = ({ image, title, content, price, timeLeft, creator }) =>
{
	return (
		<CardWrapper>
			<CardImage image={image} />
			<CardContent content={content} title={title} price={price} timeLeft={timeLeft} />
			<CardFooter creator={creator} />
		</CardWrapper>
	)
}

export default Card
