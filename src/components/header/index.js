import Logo from './../../assets/graphics/logo.png';

import './styles.scss';

export default function Header() {
	return (
		<header data-test="headerComponent">
			<div className="wrap">
				<div className="logo">
					<img data-test="logoIMG" src={Logo} alt="Logo" />
				</div>
			</div>
		</header>
	)
}
