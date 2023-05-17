# React Level 2 Certification demo application

## How to run

I used __vite__ to build the site, it provides a better developer experience as it used _no-bundling_ in developer mode.

To launch in local : `npm run dev`

## Architecture

- As the application is quite simple, we don't use _redux_ to manage the state, just local component state in a root component. 
- I used the project as an opportunity to learn styling with _tailwind_ (previously was used to boostrap), and _react-query_ to manage simple server-state.
- Had I had more time, I would have experimented to use _suspense_ + _error boundary_ to manage asynchronous UX feedback (also from a UX perspective, I would have replaced by spinner by skeletons)
