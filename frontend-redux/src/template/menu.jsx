import React from 'react'

export default props => {
  const toggleNavbar = (target) => {
    let element = document.getElementById(target)
    element.style.display = element.style.display === 'block' ? 'none' : 'block'
  }

  return (
    <nav className='navbar navbar-inverse bg-inverse'>
      <div className='container'>
        <div className='navbar-header'>
          <a href='#/' className='navbar-brand'>
            <i className='fa fa-calendar-check-o' /> TodoAPP
        </a>
          <button onClick={() => toggleNavbar('navbar')} type='button' className='navbar-toggle' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><a href='#/todos'>Tarefas</a></li>
            <li><a href='#/about'>Sobre</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
