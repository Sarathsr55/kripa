export const initialState = null

export const reducer = (state,action)=>{
    switch (action.type){
        case 'SERVICE':
            return action.payload;
    }
}