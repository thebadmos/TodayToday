import React from 'react'
import "antd/dist/antd.css";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Make() {

return (
	<div style={{
	display: 'block', width: 300
	}}>
	
	<>
		<Dropdown
		overlay={(
			
			<Menu
			// onClick={onClick}
			items={[
			  {
				label: 'LG',
				key: '1',
			  },
			  {
				label: 'Thermocool',
				key: '2',
			  },
			  {
				label: 'Scanfrost',
				key: '3',
			  },
			]}
		  />
		)}
		trigger={['click']}>
		<a className='text-sm hover:text-black'
			onClick={e => e.preventDefault()}>
			LG
			<DownOutlined className='ml-4' />
         {/* <span> <DownOutlined /></span>   */}
		</a>
        
		</Dropdown>
	</>
	</div>
);
}
