import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    state = {
      editing: false,
    }

    handleUpdatedDone = (event) => {
      if (event.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const { id, completed, title } = this.props.todo;
      const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      const viewMode = {};
      const editMode = {};

      if (this.state.editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input className={styles.checkbox} type="checkbox" checked={completed} onChange={() => handleChangeProps(id)} />
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
            <button onClick={() => deleteTodoProps(id)}>
              Delete
            </button>
          </div>
          <input
            type="text"
            className={styles.textInput}
            style={editMode}
            value={title}
            onChange={(e) => {
              setUpdate(e.target.value, id);
            }}
          />
        </li>
      );
    }
}

export default TodoItem;
