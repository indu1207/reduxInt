//take initialState

const initialState = {
    bal : 5000
};

//create the reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal+action.value
            }
            break;
        case "WITHDRAW":
            return{ 
                ...state,
                bal : state.bal-action.value
            }
            break;
    }
    return state;
};

//export the reducer
export default reducer;