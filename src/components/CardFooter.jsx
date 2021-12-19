import React from 'react'
import { CardFooterWrapper, CreatedByWrapper, CreationOfLabel, CreationOfText } from '../styles/Card.styled'
import avatar from '../img/image-avatar.png'

const CardFooter = ({ creator }) =>
{
	return (
		<CardFooterWrapper>
			<img style={{ border: "1px solid white", borderRadius: "50%" }} height={"100%"} src={avatar} alt='user avatar' />
			<CreatedByWrapper>
				<CreationOfLabel>Creation of</CreationOfLabel>
				<CreationOfText>{creator}</CreationOfText>
			</CreatedByWrapper>
		</CardFooterWrapper>
	)
}

export default CardFooter
