import React from 'react'
import ContainerCenter from './ContainerCenter'
import GoblinContainer from './GoblinContainer'
import Header from './Header'
import ListItem from './ListItem'
import Menu from './Menu'
import Docs from "./Docs"

const Diarios = () => {
  return (
    <>
      <Header />
      <ContainerCenter>
        <Menu>
          <ListItem texto={"lostmine"}>A Mina Perdida de Phandelver</ListItem>
        </Menu>
        <Docs/>
        <GoblinContainer />
      </ContainerCenter>
    </>
  )
}

export default Diarios
