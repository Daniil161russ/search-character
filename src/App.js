import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd';
import axios from "axios"

import { SearchPanel, CharacterTable, SearchHistory} from './components'

const App = () => {
	const [characters, setCharacters] = useState(null);
	useEffect(() => {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data.results;
      setCharacters(allPersons);
    });
  }, [setCharacters]);
	console.log(characters);
	return (
		<div className="character-search">
			<Row>
				<Col span={18}>
					<h1>Character Search</h1>
					<SearchPanel />
					<CharacterTable characters={characters}/>
				</Col>
				<Col span={6}>
					<SearchHistory />
				</Col>
			</Row>
		</div>
	)
}

export default App
