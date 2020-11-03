import {createStore} from "redux";

const reducer = function(state={},action) {
	switch(action.type) {

	}
}

let store = createStore(reducer,{isLoggedin:true});

export default store;