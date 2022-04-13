import React, { useEffect, useState } from 'react'
import './App.css';
import Zakat from './Zakat'
import Volunteer from './Volunteer'
import SearchVolunteerByName from './SearchVolunteerByName'

function App() {

    const [content, setContent] = useState(null)

    useEffect(() => setContent(<Zakat navigate={setContent} />), [])

    return (
        <>
        <button onClick={() => setContent(<Zakat navigate={setContent}/>)}>Zakat</button>
        <button onClick={() => setContent(<Volunteer navigate={setContent}/>)}>Volunteer</button>
        <button onClick={() => setContent(<SearchVolunteerByName />)}>Search Volunteer By Name</button>
        { content }
        </>
    )
}

export default App