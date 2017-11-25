import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/icon-button'
import Grid from '../template/grid'

import { remove as todoRemove, toggleStatus as todoToggleStatus } from './todo-actions'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <div className='todo container' key={todo._id}>

        <Grid cols='8 10'
          customClasses={(todo.done ? 'is-done' : '') + ' todo-description'}
          handleClick={() => props.todoToggleStatus(todo)} >
          {todo.description} {/* content  */}
        </Grid>

        <Grid cols='4 2' customClasses='todo-actions'>
          <IconButton message='Completar Tarefa' size='sm' style='info pull-right' icon='check'
            hidden={todo.done}
            onClick={() => props.todoToggleStatus(todo)} />

          <IconButton message='Remover Tarefa' size='sm' style='danger pull-right' icon='trash-o'
            hidden={!todo.done}
            onClick={() => props.todoRemove(todo)} />

          <IconButton message='Recomeçar Tarefa' size='sm' style='default pull-right' icon='undo'
            hidden={!todo.done}
            onClick={() => props.todoToggleStatus(todo)} />
        </Grid>

      </div>
    ))
  }

  return (
    <div className='container todo-list'>
      <Grid cols='8 10'>
        <h4>Descrição</h4>
      </Grid>

      <Grid cols='4 2' customClasses='todo-actions'>
        <h4 className='pull-right' >Ações</h4>
      </Grid>

      {renderRows()}
    </div>
  )
}

const mapStateToProps = state => (
  {list: state.todo.list}
)

const mapDispatchToProps = dispatch => bindActionCreators({ todoRemove, todoToggleStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
