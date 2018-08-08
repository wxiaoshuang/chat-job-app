// reducers
function counter(state = 0, action) {
    switch(action.type) {
        case 'add':
        return state + 1 ;
        case 'remove':
        return state - 1;
        default:
        return state;
    }
}
// action creators
function addCount() {
    return {type: 'add'}
}
function removeCount() {
    return {type: 'remove'}
}
function addCountAsync() {
    return dispatch => {
        setTimeout(()=> {
            dispatch(addCount())
        },2000);     
    }
}
export {counter,addCount,removeCount,addCountAsync};