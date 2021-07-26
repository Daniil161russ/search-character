import React from 'react'
import { Row, Col } from 'antd';
import { Input, Select } from 'antd';

import './CharacterPanel.scss'

const { Option } = Select;

const SearchPanel = () => {
	return (
		<div className="search-panel">
			<Row justify="space-between">
      <Col span={4}>
				<span>Имя:</span>
				<Input placeholder="Введите имя" />
			</Col>
      <Col span={4}>
				<span>Статус:</span>
				<Select defaultValue="active">
					<Option value="active">Активный</Option>
					<Option value="deactivation">Не активный</Option>
				</Select>
			</Col>
      <Col span={4}>
				<span>Вид:</span>
				<Select defaultValue="human">
					<Option value="human">Человек</Option>
					<Option value="alian">НЛО</Option>
				</Select>
			</Col>
      <Col span={4}>
				<span>Пол:</span>
				<Select defaultValue="man">
					<Option value="man">Мужской</Option>
					<Option value="woman">Женский</Option>
				</Select>
			</Col>
    </Row>
		</div>
	)
}

export default SearchPanel
