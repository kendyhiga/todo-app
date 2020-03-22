import { combineReducers } from  'redux'

const rootReducer = combineReducers({
  todo: () => ({
    decription: 'Read books',
    list: [{
      _id: 1,
      decription: 'Pay bills',
      done: true
    }, {
      _id: 2,
      decription: 'Medical check-up',
      done: false
    }, {
      _id: 3,
      decription: 'Buy groceries',
      done: false
    }]
  })
})

export default rootReducer
