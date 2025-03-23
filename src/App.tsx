import { useState } from 'react'

import './App.css'
import {Counter} from "./Counter.tsx";
import {ButtonInc} from "./ButtonInc.tsx";
import {ButtonReset} from "./ButtonReset.tsx";

function App() {

    const [counter, setCounter] = useState(0);


  return (
   <div className={'container1'}>
       <Counter counter={counter} />
       <div className={'containerButton'}>
           <ButtonInc counter={counter} setCounter={setCounter} />
           <ButtonReset counter={counter} setCounter={setCounter}/>
       </div>
   </div>
  )
}

export default App
