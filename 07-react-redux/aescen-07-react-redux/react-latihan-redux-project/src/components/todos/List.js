import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function List({ todo, handleDelete, handleEdit }) {
  return <Container maxWidth='sm' sx={{ alignItems: 'center', justifyContent: 'space-between', mt: '32px', padding: '4px 8px' }}>
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          Todo: {todo.id}
        </Typography>
        <Typography variant='body2'>
          {todo.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Box>
          <Button
            name='edit'
            onClick={handleEdit}
            startIcon={<EditIcon />}
            sx={{ margin: '4px', padding: '4px 8px' }}
          >
            Edit
          </Button>
          <Button
            name='delete'
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
            sx={{ margin: '4px', padding: '4px 8px' }}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  </Container >
}

export default List
