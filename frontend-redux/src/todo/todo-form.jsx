import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/icon-button'

import { changeDescription, search, add, clear } from './todo-actions'

class TodoForm extends Component {
  constructor (props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler (e) {
    const { add, search, description, clear } = this.props
    if (e.key === 'Enter') e.shiftKey ? search() : add(description)
    else if (e.key === 'Escape') clear()
  }

  componentWillMount () {
    this.props.search()
  }

  render () {
    const { add, search, description, clear } = this.props
    const formMsg = 'Formulário de nova tarefa'
    return (
      <div role='form' className='container input-group todo-form' >
        <input type='text' id='description' className='form-control input-md' title={formMsg} alt={formMsg} placeholder='Adicione uma nova tarefa' onChange={this.props.changeDescription} onKeyUp={this.keyHandler} value={description} />
        <div className='input-group-btn'>
          <IconButton size='md' message='Adicionar Tarefa' style='success' icon='plus' onClick={() => add(description)} />
          <IconButton size='md' message='Buscar' style='info' icon='search' onClick={() => search()} />
          <IconButton size='md' message='Limpar Campo' style='default' icon='close' onClick={() => clear()} />
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
