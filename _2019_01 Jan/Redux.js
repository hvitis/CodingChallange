console.clear()
// I nedd to have 3 action creators for CREATE_POLICY, CREATE_CLAIM, DELETE_POLICY

// People dropping off a form
// This is action creator
const createPolicy = (name, amount) => {
  // This is an action that Action creator returns
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  // This is an action that Action creator returns
  return {
    type: 'DELETE_POLICY',
      payload: {
        name: name,
      }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  // This is an action that Action creator returns
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name, 
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}


// We skip the dispatch thing because it is a part of Redux library
//
//      SKIPPING DISPATCH
//

// Moving to reducers, a reducer is a department that chanells the action
// Whether or not data needs to be verified or changed depends on the action
//
//      REDUCERS
//

// Every reducer is always a function and it always has 2 aarguments

// Reducer 1
const claimsHistory = (oldListOfCLaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // We care about this action (form)
    // I could have dont smth like this
    // oldListOfClaims.push(action.payload)
    // but this solutions is wrong because I modify existing array
    // if we want to change something in a reducer we ALWAYS want to create a new array, a copy
    // never push
    return [...oldListOfCLaims, action.payload]
  }
  // We don't care about this action (form)
  return oldListOfCLaims
}

// Reducer 2 for accounting (money)
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount
  }
   return bagOfMoney 
}

// Reducer 3 for policies
const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies
}

console.log('That is Redux: ', Redux)
const { combineReducers, createStore } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})

const store = createStore( ourDepartments )

console.log('That is UPDATED Redux with created store, apparently no difference in the console.log : ', Redux)


//
// Now the DISPATCH function that is in Redux and was skipped
//
  
const action = createPolicy("Jack", 20)
const action2 = deletePolicy("Jack")
const actionClaim = createClaim('Jack', 50)
console.log('This is an action created and asdsiged to variable', action)

store.dispatch(action)
store.dispatch(actionClaim)
store.dispatch(action2)

// Now after dispatching the action all of the reducers have run and processed the action
// thats why data is changed if action did something

const plainObjectWithStoreInfo = store.getState()

console.log('That is UPDATED Redux \'s STATE after dispatching an action : ', plainObjectWithStoreInfo)