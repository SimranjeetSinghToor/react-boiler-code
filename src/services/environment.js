const Environment = {
	development:{
		API_ENDPOINT:''
	},
	sandbox:{
		API_ENDPOINT:'https://sboxapi.lazypay.in'
	},
	production:{
		API_ENDPOINT:"https://prodapi.lazypay.in"
	}
}

let env = process.env.REACT_APP_ENV.trim()

export default Environment[env];