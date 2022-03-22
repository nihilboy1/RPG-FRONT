import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import cave from '../images/outros/caverna.png'

export default function Header(props) {
  const navigate = useNavigate()

  function actual() {
    window.location.reload()
  }
  function redirect() {
    navigate('/')
  }
  const [titulo, setTitulo] = useState('')
  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setTitulo('Repositório Goblinóide')
        break
      case '/historia':
        setTitulo('História Geral')
        break
      case '/diarios':
        setTitulo('Diarios de Campanha')
        break
      case '/regras':
        setTitulo('Regras da Casa')
        break
      case '/npcs':
        setTitulo('Aventureiros e Npcs')
        break
      case '/bugbear':
        setTitulo('O Bugbear Infrator')
        break
      default:
        setTitulo('')
        break
    }
  }, [])
  return (
    <header className="title">
      <div className="btn_box">
        <button onClick={redirect} className="home_btn_box">
          <img className="home_btn" src={cave} width={30} alt="cave_icon" />
          <div className="home_btn">Home</div>
        </button>
      </div>
      <h1 onClick={actual}>{titulo}</h1>
      <div onClick={redirect} className="home_btn_r">Home</div>
    </header>
  )
}
