import React from 'react'
import "antd/dist/antd.css";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function App() {

return (
	<div style={{
	// display: 'block', width: 700, padding: 30
	}}>
	
	<>
		<Dropdown
		overlay={(
			<Menu>
			<Menu.Item key="0">
				Nigeria
			</Menu.Item>
			<Menu.Item key="1">
			Menu Item Two
			</Menu.Item>
			<Menu.Item key="1">
			Menu Item Three
			</Menu.Item>
			</Menu>
		)}
		trigger={['click']}>
		<a className="ant-dropdown-link"
			onClick={e => e.preventDefault()}>
			NIgeria
         <span> <DownOutlined /></span>  
		</a>
        
		</Dropdown>
	</>
	</div>
);
}
