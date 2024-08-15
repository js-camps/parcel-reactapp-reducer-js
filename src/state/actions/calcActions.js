export const ADD = "ADD"
export const SUBTRACT = "SUBTRACT"


let addAction = (value) => {
    return { type: ADD, payload: value }
}
let subtractAction = (value) => {
  return { type: SUBTRACT, payload: value }
}


export default {
    addAction: addAction,
    subtractAction: subtractAction
}