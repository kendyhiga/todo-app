import { combineReducers } from  'redux'

const rootReducer = combineReducers({
  todo: () => ({
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
  })
})

export default rootReducer
