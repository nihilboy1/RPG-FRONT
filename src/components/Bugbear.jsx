import React from 'react'
import Header from "./Header"
import ContainerCenter from "./ContainerCenter"
import Menu from './Menu'
import ListItem from './ListItem'
import GoblinContainer from './GoblinContainer'

const Bugbear = () => {
  return (<>
  <Header/>
  <ContainerCenter>
    <Menu>
    <ListItem>DND 5E</ListItem>
    </Menu>
    <GoblinContainer/>
  </ContainerCenter>
  </>)
}

export default Bugbear
