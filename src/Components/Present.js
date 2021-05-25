import React from 'react';
import style from './Present.module.css';
import Block from './Block.js';
import NavbarItem from './NavbarItem.js';

const You = () => {
	let logo = 'https://img1.freepng.ru/20180519/cur/kisspng-three-stripes-adidas-brand-logo-clothing-5b001e1149b751.371977081526734353302.jpg';
	let logoU = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/800px-Youtube.png';

	let logo1 = "https://dpage.ru/media/k2/items/cache/c9b002fe1bb0320831a8ae78670fdb6f_L.jpg";
	let logo2 = 'https://img.icons8.com/ios/452/settings.png';
	let logo3 = 'https://www.vhv.rs/dpng/d/74-741629_-hd-png-download.png';
	let logo4 = 'https://e7.pngegg.com/pngimages/91/455/png-clipart-computer-icons-businessperson-company-man-icon-company-people.png';
	return(
		<div>
			<div className={style.head}>
				<div>
					<img src={logo} className={style.header}/>
					<img src={logoU} className={style.header}/>
				</div>
				<div>
					<input/>
				</div>
				<div>
					<img src={logo1} className={style.header}/>
					<img src={logo2} className={style.header}/>
					<img src={logo3} className={style.header}/>
					<img src={logo4} className={style.header}/>
				</div>
			</div>
			<div className={style.body}>
				<div className={style.navbar}>
					<NavbarItem img = {logo1} text = 'asdfgfd'/>
					<NavbarItem img = {logo2} text = 'tyjgh'/>
					<NavbarItem img = {logo3} text = 'cxvzvb'/>
					<NavbarItem img = {logo4} text = 'yrtiiuo'/>
				</div>
				<div>
					<Block img='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg' text='ababagalamaga'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>
					<Block img='https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' text='girl'/>

				</div>
			</div>
		</div>
	);
}

export default You;
