import React from 'react'
import ContainerCenter from './ContainerCenter'
import GoblinContainer from './GoblinContainer'
import Header from './Header'
import ListItem from './ListItem'
import Menu from './Menu'

const Npcs = () => {
  return (
    <>
      <Header />
      <ContainerCenter>
        <Menu>
          <ListItem>A Mina Perdida de Phandelver</ListItem>
        </Menu>
        <GoblinContainer/>
      </ContainerCenter>
    </>
  )
}

export default Npcs
