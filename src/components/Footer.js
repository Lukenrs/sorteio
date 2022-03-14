import React from "react"
import styled from "styled-components"

const Rod = styled.div`
    width: 100%;
    height: 16vh;
    background-color:#485DD9;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    font-size:1.5vw;
    color:white;
    text-transform: uppercase;
`

export default function Foooter(){

    return(
        <Rod>
            <Title>Desenvolvido por Luken</Title>
        </Rod>
    )
}