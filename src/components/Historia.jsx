import React from 'react'

import Header from './Header'
import Menu from './Menu'
import ListItem from './ListItem'
import ContainerCenter from './ContainerCenter'
import Docs from './Docs'
import GoblinContainer from './GoblinContainer'

export default function Historia(props) {
  return (
    <>
      <Header />
      <ContainerCenter>
        <Menu>
          <ListItem texto={"age1"}>A Primeira Era</ListItem>
          <ListItem texto={"age2"}>A Segunda Era</ListItem>
          <ListItem texto={"age3"}>A Terceira Era</ListItem>
        </Menu>
        <Docs />
        <GoblinContainer />
      </ContainerCenter>
    </>
  )
}
