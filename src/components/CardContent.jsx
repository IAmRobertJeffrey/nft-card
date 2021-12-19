import React from 'react'
import { CardContentWrapper, CardContentTitle, CardContentDescription, NftDetailsWrapper, NftPrice, NftTimeLeft, DividingLine } from '../styles/Card.styled'
import clock from '../img/icon-clock.svg'
import eth from '../img/icon-ethereum.svg'

const CardContent = ({ content, title, price, timeLeft }) =>
{
	return (
		<CardContentWrapper>
			<CardContentTitle>{title}</CardContentTitle>
			<CardContentDescription>{content}</CardContentDescription>
			<NftDetailsWrapper>
				<NftPrice><img src={eth} alt='etherium price' />{price} ETH</NftPrice>
				<NftTimeLeft><img src={clock} alt='time left'></img>{timeLeft}</NftTimeLeft>
			</NftDetailsWrapper>
			<DividingLine></DividingLine>
		</CardContentWrapper>
	)
}

export default CardContent
