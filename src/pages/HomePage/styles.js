import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #E3F2FD;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 30px;
    column-gap: 30px;
`

export const SingleCardContainer = styled.div`
    width: 250px;
    height: 300px;
    background-color: #1C3144;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    color: white;
    font-size: 20px;
    box-shadow: 5px 5px 10px 2px #1C3144;

    button{
        margin-bottom: 10px;
	background-color:#cfd4c5;
	border-radius:28px;
	border:1px solid #cfd4c5;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size:14px;
	padding:8px 34px;
	text-decoration:none;
	text-shadow:0px 1px 0px #4c574b;

    &:hover {
	    background-color:#a6ab9c;
}
    &:active {
	    position:relative;
	    top:1px;
}
    }
`

export const SelectCategory = styled.select`
    margin-bottom: 50px;
    margin-top: 20px;
	background-color:#db5462;
	border-radius:19px;
	border:2px solid #db5462;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size:18px;
	padding:6px 51px;
	text-decoration:none;
	text-shadow:0px 1px 0px #8f313a;

&:hover {
	background-color:#b0444f;
} 

&:active {
	position:relative;
	top:1px;
}
`

