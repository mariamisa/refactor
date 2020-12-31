import React from 'react'
import './App.css';
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'
import {EditTodoForm} from './components/EditTodoForm'

export class App extends React.Component {
state ={
  inputValue:'',
  updatedValue:'',
  todos :[],
  edit :false,
  todoStatus:'',
  todoFiltered :[],
  todoId :null,
  todoText:''
}

setTodoFiltered=(filtered)=>{
  this.setState({todoFiltered:filtered})
}
setTodoStatus=(status)=>{
this.setState({todoStatus:status})
}
setInputValue=(input)=>{
  this.setState({inputValue:input})
}
setUpdatedValue=(input)=>{
  this.setState({updatedValue:input})
}
setTodos=(todo)=>{
this.setState({todos:todo})
}

setEdit = (id,text)=>{
  this.setState({edit:!this.state.edit , todoId:id,todoText:text})
}

 handleSubmit=()=>{
  console.log(this.state.todoId,this.state.updatedValue)

  this.setTodos(this.state.todos.map((element)=>{
      if(element.id === this.state.todoId){
          // console.log({updatedValue})
          return{
              ...element,
              text : this.state.updatedValue
          }
         
      }
     
      return element;
  }))
  this.setUpdatedValue('')
  
  this.setEdit()
 
  
}



  render=()=>{
 const {inputValue,todos,edit,updatedValue,todoStatus,todoId,todoText}=this.state;
    return (
      <div  className='todo-app'>
        <h1>to-do app</h1>
       
        {
          (!edit ?
            (
              <div>
              <TodoForm inputValue={inputValue} setInputValue={this.setInputValue} todos={todos }
               setTodos={this.setTodos} todoStatus={todoStatus} setTodoStatus={this.setTodoStatus}/>
                  
            <TodoList  inputValue={inputValue} setInputValue={this.setInputValue} todos={todos}  setTodos={this.setTodos} edit={edit} 
            setEdit={this.setEdit} todoStatus={todoStatus} 
            handleEdit={this.handleEdit}
            updatedValue={updatedValue} setUpdatedValue={this.setUpdatedValue}/>  </div>)
            :
            <EditTodoForm handleSubmit={this.handleSubmit} setUpdatedValue={this.setUpdatedValue}
            todoText={todoText}
            />
            )
        }
       
      </div>
    );
  }

}

export default App;
