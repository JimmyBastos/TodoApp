import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/icon-button'

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') e.shiftKey ? props.handleSearch() : props.handleAdd()
    else if (e.key === 'Escape') props.handleClear()
  }

  return (
    <div role='form' className='todo-form' >
      <Grid cols='12 9 10'>
        <input type='text' id='description' className='form-control' placeholder='Adicione uma nova tarefa' value={props.description} onChange={props.handleChange} onKeyUp={keyHandler} />
      </Grid>

      <Grid cols='12 3 2 '>
        <IconButton style='success' icon='plus' onClick={props.handleAdd} />
        <IconButton style='info' icon='search' onClick={props.handleSearch} />
        <IconButton style='' icon='close' onClick={props.handleClear} />
      </Grid>
    </div>
  )
}
