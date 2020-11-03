import Environment from './environment.js';

let defaultHeaders = {
	"Content-Type": "application/json;charset=utf-8",
}
const createQueryParams= function(params) {
	var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
	return queryString
}
const apiCall = function(payload) {
	let requestObj = {
		headers:payload.headers ? {...payload.headers} : defaultHeaders,
		credentials: payload.credentials || "omit",
		method:payload.method		
	}
	let token = sessionStorage.getItem("token")
	token && (requestObj.headers.Authorization = `Bearer ${token}`)
	let apiUrl = payload.url;
	if(payload.method !== "GET"){
		requestObj.body = JSON.stringify(payload.body)
	} else {
		apiUrl = payload.body ? apiUrl + '?' + createQueryParams(payload.body) : apiUrl
	}
	console.log(Environment.API_ENDPOINT + apiUrl,requestObj)
	fetch(Environment.API_ENDPOINT + apiUrl,requestObj).then((res)=>{
		return res.json()
	}).then((parsedRes)=>{
		if(!parsedRes.success) {
			payload.fallback && payload.fallback(parsedRes)
		} else {
			payload.callback && payload.callback(parsedRes)
		}
	})
}

export default apiCall;