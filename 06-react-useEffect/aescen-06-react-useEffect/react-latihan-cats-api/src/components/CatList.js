import { useState, useEffect } from 'react'
import axios from 'axios';
import CatItem from '../components/CatItem'
import logo from '../logo.svg'


export default function Cats() {
  const [cats, setCats] = useState([])
  const [catsTmp, setCatsTmp] = useState([])
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    const getCats = async () => {
      const response = await axios
        .get('https://api.thecatapi.com/v1/breeds')
      setCats(response.data)
      setCatsTmp(response.data)
    }

    getCats()
  }, [])

  useEffect(() => {
    const found = catsTmp.filter((item) => (
      item.name.toLowerCase()
        .includes(inputSearch.trim().toLowerCase())
    ))
    setCats(found)
  }, [inputSearch, catsTmp])

  return (
    <div>
      <input
        type='text'
        value={inputSearch}
        onChange={(ev) => setInputSearch(ev.target.value)}
        placeholder='search for cat'
        style={{
          fontSize: '16px',
          margin: '8px',
          padding: '8px',
        }}
      />
      <br />
      <div style={{
        marginTop: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {
          cats.map((item, idx) => (
            <CatItem
              key={idx}
              name={item.name || 'loading...'}
              image={item.image || logo}
              origin={item.origin || 'loading...'}
            />
          ))
        }
      </div>
    </div>
  )
}
