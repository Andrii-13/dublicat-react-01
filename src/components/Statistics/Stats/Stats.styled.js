import styled from "styled-components"

export const Statistic = styled.ul`
display: flex;
height: 250px;
margin-bottom: 50px;

`

export const Licomponent = styled.li`
display: flex;
flex-direction: column;
background-color: rgb(200,150,100);
width: calc(100%/4);
font-size: 50px;
justify-content: center;
text-align: center;
border: 1px solid rgb(100,100,100);
`

export const Label = styled.span`
font-size: 30px;
padding: 10px;
font-weight: 500;
/* background: '#' + Math.floor(Math.random() * 16777215).toString(16); */
`

export const Percentage = styled.span`
font-size: 40px;
font-weight: 700;
`

