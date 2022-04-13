import React, { useEffect, useState } from 'react'
import './App.css';
import db from './db'

function Zakat({ navigate }) {

  const [zakat, setZakat] = useState([])
  const [id, setId] = useState(0)
  const [name, setName] = useState("")

  // in React useEffect does initialization
  useEffect(() => setZakat(db.Zakat.findAll()), [])


  console.log(zakat)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zakat</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
            {
              zakat.map(zakat =>
                <tr key={zakat.id}>
                  <td>{zakat.name}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </header>
    </div >
  );
}

export default Zakat;
