import { createStore } from 'redux';

const myReducer = (state = { counter: 0 }, action) => {
    if(action.type==="INCREMENT"){
        return{counter:state.counter +1}
    }else if(action.type==="DECREMENT")
    {
        return{counter:state.counter -1}
    } else if(action.type==="RESET"){
        return {counter: 0};
    }else{
        return state;
    }
};

const store = createStore(myReducer);

export default store;