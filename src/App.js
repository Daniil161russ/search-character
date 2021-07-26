import React from 'react'
import { Row, Col } from 'antd';

import { SearchPanel, CharacterTable, SearchHistory} from './components'

const App = () => {
	return (
		<div className="character-search">
			<Row>
				<Col span={18}>
					<h1>Character Search</h1>
					<SearchPanel />
					<CharacterTable />
				</Col>
				<Col span={6}>
					<SearchHistory />
				</Col>
			</Row>
		</div>
	)
}

export default App
