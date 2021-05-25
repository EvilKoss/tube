import React from 'react';
import style from './Present.module.css';

const NavbarItem = (props) => {
	let logo1 = "https://dpage.ru/media/k2/items/cache/c9b002fe1bb0320831a8ae78670fdb6f_L.jpg";
	let logo2 = 'https://img.icons8.com/ios/452/settings.png';
	let logo3 = 'https://www.vhv.rs/dpng/d/74-741629_-hd-png-download.png';
	let logo4 = 'https://e7.pngegg.com/pngimages/91/455/png-clipart-computer-icons-businessperson-company-man-icon-company-people.png';

	return(
		<div className={style.navbar}>
			<img src={props.img} className={style.header}/>
			{props.text}
		</div>

	)

}

export default NavbarItem;
