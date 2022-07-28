import React from 'react'
import "antd/dist/antd.css";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Location() {

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
				label: 'Lagos',
				key: '1',
			  },
			  {
				label: 'Abeokuta',
				key: '2',
			  },
			  {
				label: 'Abuja',
				key: '3',
			  },
			]}
		  />
		)}
		trigger={['click']}>
		<a className='text-sm hover:text-black'
			onClick={e => e.preventDefault()}>
			Abuja
			<DownOutlined className='ml-4' />
         {/* <span> <DownOutlined /></span>   */}
		</a>
        
		</Dropdown>
	</>
	</div>
);
}
