import React from 'react'

import './CharacterTable.scss'

const CharacterTable = ({characters}) => {
	return (
		<div className="character-table">
			<div className="character-table__descriptions">
				<span>Фото</span>
				<span>Имя</span>
				<span>Статус</span>
			</div>
			<div className="character-table__list">
				{characters &&
					characters.map(character => (
						<div className="character-table__item" key={character.id}>
							<img src={character.image} alt="avatar" className="character-table__avatar"/>
							<span className="character-table__name">{character.name}</span>
							<span className="character-table__status">{character.status}</span>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default CharacterTable
