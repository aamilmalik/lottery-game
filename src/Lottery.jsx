import { genTicket, sum } from './helper';
import { useState } from "react";
import Ticket from './Ticket';
import Button from './Button';

function Lottery({n = 3, winCondition}) {
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    const buyTicket=()=>{
      setTicket(genTicket(n));
    }

    return ( 
        <div>
        
            <h1>Lottery Game</h1>
            
            <div className='ticket'>
             <Ticket ticket={ticket} />
            </div>
            <br />
                  <Button action={buyTicket} />
           
            <div>
              
              <h2>{isWinning && "Congratulations you won"}</h2>
            </div>
        </div>
     );
}

export default Lottery; 