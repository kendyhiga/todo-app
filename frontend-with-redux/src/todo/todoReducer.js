const INITIAL_STATE = {
  description: 'Read books',
  list: [{
    _id: 1,
    description: 'Pay bills',
    done: true
  }, {
    _id: 2,
    description: 'Medical check-up',
    done: false
  }, {
    _id: 3,
    description: 'Buy groceries',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    default:
      return state
  }
}
