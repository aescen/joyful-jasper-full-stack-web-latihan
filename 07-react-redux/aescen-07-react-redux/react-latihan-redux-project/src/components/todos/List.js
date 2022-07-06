function List({ todo, handleDelete, handleEdit }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 8px' }}>
    <div style={{ marginRight: '8px', fontSize: '16px' }}>{todo}</div>
    <div>
      <button
        name='edit'
        onClick={handleEdit}
        style={{ margin: '4px', padding: '4px 8px' }}
      >
        Edit
      </button>
      <button
        name='delete'
        onClick={handleDelete}
        style={{ margin: '4px', padding: '4px 8px' }}
      >
        Delete
      </button>
    </div>
  </div>
}

export default List
