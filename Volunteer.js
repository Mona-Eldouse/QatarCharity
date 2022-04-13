import React, { useEffect, useState } from 'react'
import './App.css';
import db from './db'

function Volunteer({ navigate }) {

  const [volunteer, setVolunteer] = useState([])
  const [id, setId] = useState(0)
  const [name, setName] = useState("")

  // in React useEffect does initialization
  useEffect(() => setVolunteer(db.Volunteer.findAll()), [])


  console.log(volunteer)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Volunteer</h1>
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
              volunteer.map(volunteer =>
                <tr key={volunteer.id}>
                  <td>{volunteer.name}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </header>
    </div >
  );
}

export default Volunteer;
