import React, { useEffect, useState } from 'react'
import goblingalante from '../images/goblins/goblingalante.jpg'
import goblinsacer from '../images/goblins/goblinsacer.png'
import goblinbard from '../images/goblins/goblinbard.png'
import goblindice from '../images/goblins/goblindice.png'
import goblintocha from "../images/goblins/goblintocha.png"
import bugbear from "../images/goblins/bugbear.png"

const GoblinContainer = () => {
  const [goblin, setGoblin] = useState()
  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setGoblin(goblingalante)
        break
      case '/historia':
        setGoblin(goblinsacer)
        break
      case '/diarios':
        setGoblin(goblinbard)
        break
      case '/regras':
        setGoblin(goblindice)
        break
      case '/npcs':
        setGoblin(goblintocha)
        break
      case "/bugbear":
        setGoblin(bugbear)
        break
      default:
        setGoblin('')
        break
    }
  }, [])

  return (
    <div className="img_container">
      <img id="goblin" src={goblin} alt={goblin} />
    </div>
  )
}

export default GoblinContainer
