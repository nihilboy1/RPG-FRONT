import React, { useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import ListItem from './ListItem'
import ContainerCenter from './ContainerCenter'
import GoblinContainer from './GoblinContainer'

export default function Home() {
  useEffect(() => {
    let btn = document.getElementsByClassName("home_btn_box")
    let btn2 = document.getElementsByClassName("home_btn_r")
    btn2[0].className = "nada"
    btn[0].className = "nada"
  },[])
  return (
    <>
      <Header/>
      <ContainerCenter>
        <Menu>
          <ListItem path="historia">Universo</ListItem>
          <ListItem path="diarios">Diários de Campanha</ListItem>
          <ListItem path="regras">Regras da Casa</ListItem>
          <ListItem path="npcs">Aventureiros</ListItem>
          <ListItem path="bugbear">O Bugbear Infrator</ListItem>
        </Menu>
        <GoblinContainer/>
      </ContainerCenter>
    </>
  )
}
