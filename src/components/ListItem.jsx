import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../providers/Context'

const ListItem = props => {
  const { setTexto, arquivos } = React.useContext(Context)

  async function showText() {
    await setTexto(props.texto)
    let texto = document.getElementsByClassName('nada texto')
    texto[0].className = 'texto'
  }

  async function showArq() {
    let container = document.getElementsByClassName('container_center')[0]
    container.innerHTML = ''
    Object.entries(arquivos).forEach((item, index) => {
      let link_arq = document.createElement("a")
      link_arq.className = "arquivo_box"
      link_arq.target = "_blank"
      link_arq.href = item[1][0]
      let img_arq = document.createElement("img")
      img_arq.className = "img_arquivo"
      img_arq.src = item[1][1]
      let container_center = document.getElementsByClassName("container_center")
      container_center[0].className = "container_center margintop"
      link_arq.appendChild(img_arq)
      container.appendChild(link_arq)
    })
  }

  function hideComp() {
    let menu_itens = document.getElementsByClassName('menu_nav')
    let goblin = document.getElementsByClassName('img_container')
    goblin[0].className = 'nada'
    menu_itens[0].className = 'nada'
    if (window.location.pathname !== '/bugbear') {
      showText()
    } else {
      showArq()
    }
  }

  if (props.path) {
    return (
      <Link to={`${props.path}`} className="link">
        <li>{props.children}</li>
      </Link>
    )
  }
  return (
    <Link to="#" className="link">
      <li onClick={hideComp} className="text_option">
        {props.children}
      </li>
    </Link>
  )
}

export default ListItem
