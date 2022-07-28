import React from 'react'
import "antd/dist/antd.css";
import { Menu, Dropdown,message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function productType() {
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
return (
	<div style={{
	display: 'block', width: 300
	}}>
	
	<>
    
		<Dropdown
		overlay={(
			
			<Menu
			onClick={onClick}
			items={[
			  {
				label: 'New',
				key: '1',
			  },
			  {
				label: 'Used',
				key: '2',
			  },
			 
			]}
		  />
		)}
		>
		<a className='text-sm hover:text-black'
			onClick={e => e.preventDefault()}>
			Used
			<DownOutlined className='ml-4' />
         {/* <span> <DownOutlined /></span>   */}
		</a>
        
		</Dropdown>
	</>
	</div>
);
}
