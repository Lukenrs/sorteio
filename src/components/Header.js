import React from "react"
import styled from "styled-components"

const Top = styled.div`
    width:100%;
    height:17vh;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    `
const Title = styled.h1`
    font-size:2.2vw;
    text-transform:uppercase;
    color:#485DD9;
`
export default function Header(){
    return(
        <Top>
            <Title>Sorteio</Title>
        </Top>
    )
}
