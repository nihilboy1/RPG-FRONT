import React, { useEffect, useState } from 'react'
import ascencaodetiamat from '../images/capas/riseoftiamat.PNG'
import avernus from '../images/capas/avernus.PNG'
import tempestade from '../images/capas/tempestade.PNG'
import lostmine from '../images/capas/lostmine.PNG'
import icespire from "../images/capas/icespire.PNG"

export const Context = React.createContext({})

export const ContextProvider = props => {
  const [texto, setTexto] = useState('')
  const [arquivos, setArquivos] = useState({})
  useEffect(() => {
    setArquivos({
      1: [
        'https://drive.google.com/file/d/1t75OyylBHwohTVkR6fLMS-jUixb6SYk4/view?usp=sharing',
        ascencaodetiamat
      ],
      2: [
        'https://drive.google.com/file/d/1pjagU3Y1z0XJ2moQI1vaznFQSclgBEOa/view?usp=sharing',
        avernus
      ],
      3: [
        'https://drive.google.com/file/d/1hWgRwP4hfCMc92oEBInOhIhhbR6ipZps/view?usp=sharing',
        tempestade
      ],
      4: [
        'https://drive.google.com/file/d/1QBzcWT8qOLX1NNBgRgo7CG1wUfd_HO_K/view?usp=sharing',
        lostmine
      ],
      5: [
        'https://drive.google.com/file/d/1rNxxZ1pX1Y6gLWjh_49Ps2TaudMUBytF/view?usp=sharing',
        icespire
      ]
    })
  }, [])

  return (
    <Context.Provider value={{ texto, setTexto, arquivos, setArquivos }}>
      {props.children}
    </Context.Provider>
  )
}
