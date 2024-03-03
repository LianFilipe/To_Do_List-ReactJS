import { useState } from 'react';
import Todo from './comps/Todo.jsx';
import "./App.css";
import Todo_add from './comps/Todo_add.jsx';
import Search from './comps/Search.jsx';
import Filter from './comps/Filter.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade de backup no sistema",
      description:'adicionar a função de save de versoes para segurança',
      category: "Informática",
      status: 'inprogress',
      isCompleted: false,
    },
    {
      id: 2,
      text: "Treinar modelos deep learning",
      description:'Melhorar desempenho dos modelos de visão computacional',
      category: "Operacional",
      status: 'inprogress',
      isCompleted: false,
    },
    {
      id: 3,
      text: "Separar e digitalizar novos documentos",
      description:'Adicionar novos documentos ao gerenciador de arquivos virtual',
      category: "Organizacional",
      status: 'inprogress',
      isCompleted: false,
    }
  ])
  /* definindo variáveis de busca, filtragem e ordenação */
  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('All');

  const [sort, setSort] = useState("Asc");

  /* criando função de atualização para adição de nova tarefa, integrado aos inputs recebidos de 'comps/Todo_add.jsx'*/
  const addTodo = (text, description, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 100000),
      text:text,
      category: category,
      description: description,
      isCompleted: false,
    }];

    setTodos(newTodos);
  }
  /* criando função de atualização para remoção de tarefa, integrado ao botão x presente em 'comps/Todo.jsx'*/
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  }
  /* criando função de atualização para conclusão de tarefa, integrado ao botão completar presente em 'comps/Todo.jsx'*/
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    newTodos.map((todo) => todo.id === id ? todo.status = "" : todo)
    setTodos(newTodos)
  }

  /* criando função de atualização para alteração do status da tarefa, integrado ao botão completar 
     presente em 'comps/Todo.jsx'*/
  const handleStatusChange = (id, newStatus) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id && todo.isCompleted != true ? todo.status = newStatus : todo)
    setTodos(newTodos)
  };

  return <div className='app'>
    <h1 className="titulo">Lista de tarefas Trackfy</h1>
    {/* adicionando funções de busca, filtragem e ordenação a aplicação linhas(80-105)*/}
    <Search search={search} setSearch={setSearch} />

    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

    <div className="horizontal-line"></div>

    <div className='todo-list'>
     
      {todos
        .filter((todo) =>
          filter === "All"
            ? true
            : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted
        )

        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))


        .sort((a, b)=> 
          sort ==="Asc" 
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
        )

        
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            handleStatusChange={handleStatusChange} />
        ))}

    </div>
    <Todo_add
      addTodo={addTodo} />
  </div>
}

export default App;
