/**
  why this code will not work 
function model(state, element){
  element.value = state.value;
  element.addEventListener('change', () => {
  state.value = element.value;
  // Update displayed value
  });
}
This code will only update state.value when the user changes the input box, but it will NOT update the input box if you change state.value in your JavaScript code.

Why?

There is no mechanism to detect when state.value changes in code and update element.value accordingly.
The connection is one-way: input → state, but not state → input.
With Object.defineProperty:

Changing state.value in code also updates the input box (element.value).
This creates two-way binding.
Summary:
Your code only syncs changes from the input to the state, not from the state to the input. That’s why it won’t work for two-way binding.

module.exports = model;
**/

function model(state, element){
  element.value = state.value;
  element.addEventListener('change', () => {
      state.value = element.value;
      // Update displayed value
  });

  Object.defineProperty(state, 'value', {
      set(newValue) {
          state._value = newValue;
          element.value = newValue;
      },
      get() {
          return state._value;
      }
  });
}
module.exports = model;
