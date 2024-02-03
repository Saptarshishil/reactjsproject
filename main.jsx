import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
      <div>
        <h1>Custom App | chai</h1>
      </div>
  )
}
/*const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}*/
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit
  google</a>
  )
const anotherUser = " chai aur react"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser
  )
ReactDOM.createRoot(document.getElementById('root')).
render(
  //<React.StrictMode>//
     //<App />
     // <MyApp /> //function//jsx syntax//in vite it is used as a bundler
  //</React.StrictMode>,//
reactElement

)
