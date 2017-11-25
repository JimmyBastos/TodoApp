import React from 'react'
import IconButton from '../template/icon-button'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        {/* CONTEUDO */}
        <td className={todo.done ? 'is-done' : ''}>
          {todo.description}
        </td>
        {/* ICONES DE AÇÃO */}
        <td>
          <IconButton size='sm' style='info' icon='check'
            hidden={todo.done}
            onClick={() => props.handleMarkAsDone(todo)} />

          <IconButton size='sm' style='' icon='undo'
            hidden={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)} />

          <IconButton size='sm' style='danger' icon='trash-o'
            hidden={!todo.done}
            onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
  }

  return (
    <div className=''>
      <table className='table table-condensed table-hover'>
        <thead>
          <tr>
            <th>Description</th>
            <th className='table-actions' >Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}
