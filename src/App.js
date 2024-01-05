import { useEffect, useState } from "react";
import GlobalSvgIcons from "./assets/icons/GlobalSvgIcons";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav/Nav";
import {  useTranslation } from 'react-i18next'

const date = `${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.${new Date().getMonth() + 1 < 10 ?  + new Date().getMonth() + 1: new Date().getMonth() + 1}.${new Date().getFullYear()}`

const getTodos = () => {
  const todo = localStorage.getItem('todo')
  // JSON.parse() - преобразует строку в объект
  if (todo) {
    return JSON.parse(todo)
  } else {
    return []
  }
}

function App() {
  const [gridToList, setGridToList] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [todo, setTodo] = useState(getTodos())
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [search, setSearch] = useState('')


  const [t, i18n] = useTranslation()

  // useEffect() - выполняет функцию после рендера компонента  
  // Первый аргумент - функция , второй - массив зависимости

  useEffect(() => {
    // JSON.stringify - образует объект в строку 
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const toggleGridToList = () => {
    setGridToList(!gridToList)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = (e) => {
    e.preventDefault()
    setOpenModal(false)
  }

  const addTodo = () => {
    if(title && content ) {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        content,
        date
      }
  
      setTodo([...todo, newTodo])
      setOpenModal(false)
      setTitle('')
      setContent('')
    }
  }

  const onEditTodos = (id, title, content) => {
    const newTodos = todo.map(todo => {
      if(todo.id === id) {
        todo.title = title
        todo.content = content
        todo.date = date
      }
      return todo
    })
    setTodo(newTodos)
  }

  const onDeleteTodos = (id) => {
    setTodo([...todo.filter(todo => todo.id !== id)])
  }
  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="wrapper">
      <Header 
        openSearch={openSearch} 
        setOpenSearch={setOpenSearch} 
        search={search} 
        setSearch={setSearch}
      />
      <div className="container">
        <Nav gridToList={gridToList} toggleGridToList={toggleGridToList} />
        <div className={gridToList ? 'listItem' : 'grid'}>
          {todo.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())).map(todos => (
            <ListItem 
              gridToList={gridToList} 
              todos={todos}
              onEditTodos={onEditTodos}
              onDeleteTodos={onDeleteTodos}
            />
          ))}
        </div>
      </div>
      <div className="wrapper__btn">
        <Button click={handleOpenModal}>
          <GlobalSvgIcons id='edit' />
        </Button>
      </div>
      <Modal
        text='Добавить'
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addTodo={addTodo}
      />
      {/* <button onClick={() => changeLanguage('ru')}>ru</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <p>{t('hello')}</p> */}
    </div>
  );
}

export default App;
