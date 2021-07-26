import React from 'react'

import './SearchHistory.scss'

const SearchHistory = () => {
	return (
		<div className="search-history">
			<h2>История просмотренных персонажей</h2>
			<ul className="search-history__list">
				<li>
					<span>1</span>
					<span>Вини пух</span>
				</li>
				<li>
					<span>2</span>
					<span>Паук</span>
				</li>
			</ul>
		</div>
	)
}

export default SearchHistory
