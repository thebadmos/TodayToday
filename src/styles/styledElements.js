import styled, { css } from 'styled-components'

export const Main = styled.div`
background: #f6f5f7;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: "Montserrat", sans-serif;
height: 100vh;
margin: -20px 0 50px;
}
`;
export const ReviewStar = styled.div`
color: #FFA500;
`;
// export const PriceCard = styled.div`
// color: #f6f5f7;
// `;


export const Button = styled.button`
border-radius: 8px;
	border: 1px solid #077C6B;
	background-color: #077C6B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  width: 280px;
}
`;
export const OtherButton = styled.button`
border-radius: 8px;
	border: 1px solid #077C6B;
	background-color: #077C6B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 5px;
	letter-spacing: 1px;
	transition: transform 80ms ease-in;
  width: 120px;
}
`;

export const Button1 = styled.button`
border-radius: 8px;
	border: 1px solid #077C6B;
	background-color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	transition: transform 80ms ease-in;
  width: 280px;
}`
export const Container = styled.div`
background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 520px;
`;
export const Container2 = styled.div`
background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 550px;
`;
export const FormContainer = styled.div`
position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
  }
`;

export const OverlayContainer = styled.div`
position: absolute;
	top: 0;
	right: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
`
export const LinkStyle = styled.div`
color: #333;
font-size: 2px;
text-decoration: none;
margin: 5px 0;
`;