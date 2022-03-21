import React from 'react'
import ContainerCenter from './ContainerCenter'
import GoblinContainer from './GoblinContainer'
import Header from './Header'
import ListItem from './ListItem'
import Menu from './Menu'

const Regras = () => {
  return (
    <>
      <Header />
      <ContainerCenter>
      <Menu>
        <ListItem>Regras para Viagens</ListItem>
        <ListItem>Acertos e Falhas Críticas</ListItem>
      </Menu>
      <GoblinContainer/>
      </ContainerCenter>
    </>
  )
}

export default Regras
