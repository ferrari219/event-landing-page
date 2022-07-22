const theme = {
	color: {
		main: '#4b67f7',
		def: '#485367',
		light: {
			bg: '#eff3ff',
			content: '#485367',
			btn: {
				def: '#d9d9d9',
				// act: '#486FF2',
				// err: '#d95959', //에러났을때
				// suc: '#1AB987', //성공했을때
			},
		},
		dark: {
			// bg: '#eff3ff',
			content: '#fff',
			btn: {
				def: '#d9d9d9',
				// act: '#486FF2',
				// err: '#d95959', //에러났을때
				// suc: '#1AB987', //성공했을때
			},
		},
	},
	pc: {
		maxwidth: '100rem',
		size: {
			sm: '1.2rem',
			md: '1.4rem',
			base: '1.6rem',
			lg: '1.8rem',
			xlg: '2.2rem',
			h2: '5.8rem',
			h3: '3.6rem',
			h4: '2.8rem',
		},
		padding: {
			section: '8rem',
			h2p: '3rem',
			h3p: '2rem',
			h3btn: '3rem',
			h3h4: '2rem',
			h4p: '2rem',
		},
		shadow: {
			// https://getcssscan.com/css-box-shadow-examples
			lv0: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
			lv7: 'rgba(100, 100, 111, 1) 0px 7px 29px 0px;',
		},
	},
	mo: {
		size: {
			sm: '2.4vw',
			md: '3vw',
			base: '4vw',
			lg: '4.4vw',
			xlg: '6.8vw',
			h2: '8vw',
			h3: '7vw',
			h4: '5vw',
		},
		padding: {
			section: '10vw',
			width: '4vw', //width 100%, 좌우 여백
			h2p: '6vw',
			h3p: '4vw',
			h3btn: '4vw',
			h3h4: '4vw',
			h4p: '1vw',
		},
	},
};

export default theme;
