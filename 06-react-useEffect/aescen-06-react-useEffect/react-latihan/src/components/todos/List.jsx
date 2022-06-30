function List({ todo, handleDelete, handleEdit }) {
  return <div>
    <span>{todo}</span>
    <span>
      <button name='edit' onClick={handleEdit}>Edit</button>
      <button name='delete' onClick={handleDelete}>Delete</button>
    </span>
  </div>
}

export default List
