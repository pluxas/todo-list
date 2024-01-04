import React, { useState } from "react";
import "./LIstItem.scss";

import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import Modal from "../Modal/Modal";

const ListItem = ({ gridToList, todos, onEditTodos, onDeleteTodos }) => {

  const { title, date, content } = todos;
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const editTodo = () => {
    setEdit(true);
  };

  const closeModal = () => {
    setEdit(false);
  }

  const editTodoClose = () => {
    if(editTitle && editContent) {
      onEditTodos(todos.id, editTitle, editContent);
      setEdit(false);
      setEditTitle(editTitle);
      setEditContent(editContent)
    }else {
      alert('Заполните все поля ')
    }
  }

  const deleteTodo = () => {
    onDeleteTodos(todos.id);
  }

  return (
    <>
      <div className="list">
        <div className={gridToList ? "list__wrapper active" : "list__wrapper"}>
          <h2 className="list__title">{title}</h2>
          <p className="list__date">{date}</p>
        </div>
        <p className="list__text">{content}</p>
        <div className="buttons">
          <button onClick={editTodo}>
            <GlobalSvgIcons id="edit" />
            <span>РЕДАКТИРОВАТЬ</span>
          </button>
          <button onClick={deleteTodo}>
            <GlobalSvgIcons id="trash" />
            <span>Удалить</span>
          </button>
        </div>
      </div>
      <Modal text='Изменить'
        openModal={edit}
        title={editTitle}
        setTitle={setEditTitle}
        content={editContent}
        setContent={setEditContent}
        addTodo={editTodoClose}
        handleCloseModal={closeModal}
      />
    </>
  );
};

export default ListItem;
