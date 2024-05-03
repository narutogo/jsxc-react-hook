import React from 'react'
import ReactDOM from 'react-dom/client'
import Sel from './Sel';
import { AliveScope } from 'react-activation'

ReactDOM.createRoot(document.getElementById('root')!).render(
  (
      <AliveScope>
      <Sel/>
      </AliveScope>
  )
)
