import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'


function App() {

  const winCondition=(ticket)=>{
    return sum(ticket) === 15;
      //return ticket.every((num)=>num === ticket[0]);
    // return ticket[0] === 0;
  }
 
  return (
    <>
     <h4>Sum of all number = 15 is winner ticket</h4>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
