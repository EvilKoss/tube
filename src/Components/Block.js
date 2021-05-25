import React from 'react';
import style from './Present.module.css';

const Block = (props) => {
	return (
		<div className={style.block}>
			<div>
				<img src={props.img} className={style.img}/>
			</div>
			<div>
				{props.text}
			</div>
		</div>
	)
}

export default Block;
