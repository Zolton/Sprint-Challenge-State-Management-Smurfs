1. What problem does the context API help solve?

The benefit of redux, a sole source of truth, without all the boilerplate.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - sole source of truth
action - effort/function to change the store
reducer - gatekeeper, only allows pre-approved actions through

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application - global state
component - local state

use local for local functions or operations, use global to effect the entire app

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

enables async, a way to tell javascript to wait while another function runs

allows us to tell our action creators to fire off and do somthing whiel the rest of the applicatino waits

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Hooks.  Simplicity, local, easy to understand and use.  Redux is extremely useful, but it'd be a lot more bearable with snippets and less typing out of boilerplate.  The only thing of consequence that's type is in the reducer, everything else is just passing props
