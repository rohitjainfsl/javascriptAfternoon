import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Head>
        <img src='images/logo.svg' alt='Logo'></img>
        <CenterMenu>
            <li><a href="?">Model 3</a></li>
            <li><a href="?">Model 3</a></li>
        </CenterMenu>
        <RightMenu>
            <li><a href="?">Shop</a></li>
            <li><a href="?">Menu</a></li>
        </RightMenu>
    </Head>
  )
}

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    font-family: Roboto, sans-serif;

    ul{
        display: flex;
        list-style: none;


        a{
            text-decoration: none
        }    

    }
`

const CenterMenu = styled.ul`
    &:hover{
        font-size: 2rem
    }
    &:first-of-type{}
`

const RightMenu = styled.ul``

export default Home