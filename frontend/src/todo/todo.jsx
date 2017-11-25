import React, { Component } from 'react'
import PageHeader from '../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = { description: '', list: [] }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.refresh()
  }

  handleAdd () {
    const description = this.state.description
    axios.post(URL, { description }).then(res => this.refresh())
  }

  handleMarkAsDone (todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(res => this.refresh(this.state.description))
  }

  handleMarkAsPending (todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(res => this.refresh(this.state.description))
  }

  handleRemove (todo) {
    axios.delete(`${URL}/${todo._id}`).then(res => this.refresh(this.state.description))
  }

  handleChange (event) {
    this.setState({ ...this.state, description: event.target.value })
  }

  handleSearch () {
    this.refresh(this.state.description)
  }

  handleClear () {
    this.refresh()
  }

  refresh (description = '') {
    const search = description ? `&description__regex=/${description}/i` : ''
    axios.get(`${URL}?sort=-createdAt${search}`).then(
      res => this.setState({ ...this.state, description, list: res.data })
    )
  }

  render () {
    return (
      <div>

        <PageHeader name='Tarefas' small='Cadastro' />

        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />

        <TodoList
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          list={this.state.list} />
      </div>
    )
  }
}
