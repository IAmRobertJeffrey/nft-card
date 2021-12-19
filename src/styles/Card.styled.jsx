import styled from "styled-components";

export const CardWrapper = styled.main`
	
	background-color: hsl(216, 50%, 16%);
	width:350px;
	height:600px;
	border-radius: 1rem;
	box-shadow:
  		0px 2.5px 13px rgba(0, 0, 0, 0.2),
  		0px 20px 104px rgba(0, 0, 0, 0.158);
	padding:25px;
	box-sizing:border-box;

	@media (max-width: 365px) {
		width:90%;
  }

`

export const CardImageWrapper = styled.main`
	width:100%;
	border-radius:0.5rem;
	display:grid;
	> img {
		border-radius:0.5rem;
	} 
`

export const CardImageOverlay = styled.div`
	width:100%;
	height:100%;
	border-radius:0.5rem;
	
	background-color:rgba(0, 255, 247, 0%);
	grid-area: overlay;
	z-index:100;
	transition: all 200ms ease;
	display:flex;
	align-items:center;
	justify-content:center;
	opacity:0;
	&:hover{
		
		opacity:1;
		background-color:rgba(0, 255, 247, 50%);
		cursor:pointer;
	}


`


export const CardPicture = styled.img`
	width:100%;
	 height:100%;
	 grid-area: image;
	  src={image};
	 
	 
`

export const CardContentWrapper = styled.main`
	
`

export const CardContentTitle = styled.p`
	color: hsl(0, 0%, 100%);
	font-size: 22px;
	font-family: 'Outfit'; 
	font-weight: 600;

	&:hover{
		color:hsl(178, 100%, 50%);
		cursor:pointer;
	}
`
export const CardContentDescription = styled.p`
	color: hsl(215, 51%, 70%);
	font-size: 18px;
	font-family: 'Outfit';
	font-weight: 300;
	margin-bottom:25px;
`

export const CardFooterWrapper = styled.main`
	display:flex;
	gap:10px;
	
	align-items:center;
	margin-top:15px;
`

export const NftDetailsWrapper = styled.div`
	display:flex;
	justify-content:space-between;
	width:100%;
	height:fit-content;
	margin-bottom:20px;

	@media (max-width: 310px) {
		flex-direction:column-reverse;
		gap:10px;
  }
`

export const NftPrice = styled.div`
	display:flex;
	gap:7.5px;
	align-items:center;
	color:hsl(178, 100%, 50%);
	font-weight:600;
	font-size:18px;
`

export const NftTimeLeft = styled.div`
	color: hsl(215, 51%, 70%);
	font-size: 16px;
	font-family: 'Outfit';
	font-weight: 300;
	display:flex;
	gap:7.5px;
	align-items:center;
	font-size:16px;
	font-weight:400;
`

export const DividingLine = styled.hr`
	color:hsl(215, 32%, 27%);
`

export const CreatedByWrapper = styled.div`
 display: flex; 
 flex-direction:row;
 gap:6px ;

 @media (max-width: 310px) {
		flex-direction:column;
		align-items:flex-start;
		justify-content:center;
		gap:0;
		
		
  }

`
export const CreationOfLabel = styled.p`
	color:hsl(215, 51%, 70%);
	font-weight:400;
	font-family: 'Outfit';

	@media (max-width: 310px) {
		
		margin:0;
		padding:0;
  }
`

export const CreationOfText = styled.p`
	color:white;
	font-weight:400;
	font-family: 'Outfit';
	@media (max-width: 310px) {
		
		margin:0;
		padding:0;
  }

	&:hover{
		color:hsl(178, 100%, 50%);
		cursor:pointer;
	}

`