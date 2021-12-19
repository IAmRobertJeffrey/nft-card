import React from 'react'
import { CardImageWrapper, CardPicture, CardImageOverlay } from '../styles/Card.styled'
import view from '../img/icon-view.svg'

const CardImage = ({ image }) =>
{
	return (
		<CardImageWrapper>
			<CardImageOverlay>
				<img src={view} alt='view' />
			</CardImageOverlay>
			<CardPicture width={"100%"} height={"100%"} src={image} alt='nft' />

		</CardImageWrapper>
	)
}

export default CardImage
