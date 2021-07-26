import React from 'react'

import './CharacterTable.scss'
import avatarImg from '../../assets/img/test_img.png'

const CharacterTable = () => {
	return (
		<div className="character-table">
			<div className="character-table__descriptions">
				<span>Фото</span>
				<span>Имя</span>
				<span>Статус</span>
			</div>
			<div className="character-table__item">
				<img src={avatarImg} alt="avatar" className="character-table__avatar"/>
				<span className="character-table__name">Вини Пух</span>
				<span className="character-table__status">Активен</span>
			</div>
			<div className="character-table__item">
				<img src={avatarImg} alt="avatar" className="character-table__avatar"/>
				<span className="character-table__name">Вини Пух</span>
				<span className="character-table__status">Активен</span>
			</div>
		</div>
	)
}

export default CharacterTable
