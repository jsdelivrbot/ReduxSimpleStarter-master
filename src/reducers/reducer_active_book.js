// State argument is not appliction state, only the state
// this reducer is responsible for
export default function (state = null, action) {
  console.log("aaa",action.type);
  switch(action.type) {
    case 'BOOK_SELECTED':
    console.log('111');
      return action.payload;
  }
  return state;
}