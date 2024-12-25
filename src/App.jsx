import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function App() {

  const [product, setProduct] = useState([]);
  
  useEffect(() => {

    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProduct(res.data.products)
      }).catch((err) => {
        console.log(err);

      })

  }, [])

  return (
    <>
      <h1>
        product list
      </h1>
      <div className='d-flex flex-wrap gap-3'>
        {
          product.map((item) => (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default App
