import styled from "styled-components";

const ButtonStyled = styled.button`
background-color: #6278f7;
border: none;
cursor: pointer;
border-radius: 10px;
font-weight:700;
font-size: 1.5rem;
padding: 2rem;
color: #fff;
transition: 0.5s;

&:hover {
    color: #95FFD4
}
`


export const Button = (props) => {
    return <ButtonStyled>{props.children}</ButtonStyled>
}