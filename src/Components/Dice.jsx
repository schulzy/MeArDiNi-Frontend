import { Button, Form } from "react-bootstrap"
import './Dice.css'
import { useEffect, useRef } from 'react';

const Dice = ({connection, rolledNumber, counter}) =>{
    const rolledNumberRef = useRef();

    useEffect(() => {
        console.log("use effect");
        console.log("rolledNumber", rolledNumber);
        console.log("counter", counter);
        if(rolledNumberRef && rolledNumberRef.current){
            console.log("use effect");
            
        }
        drawDice();
    }, [counter]);

    const rollDice = async() => {
        await connection.invoke("RollDice");
    }

    const drawDice=async()=>{
        const die = [...document.querySelectorAll(".die-list")][0];
        toggleClasses(die);
        
        console.log(rolledNumber);
        die.dataset.roll = rolledNumber;
    }  

    return (
    <div>
        <div class="dice">
            <ol class="die-list even-roll" data-roll="1" id="die-1">
                <li class="die-item" data-side="1">
                <span class="dot"></span>
                </li>
                <li class="die-item" data-side="2">
                <span class="dot"></span>
                <span class="dot"></span>
                </li>
                <li class="die-item" data-side="3">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                </li>
                <li class="die-item" data-side="4">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                </li>
                <li class="die-item" data-side="5">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                </li>
                <li class="die-item" data-side="6">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                </li>
            </ol>
        </div>
        <Form
            onSubmit={e => {
                e.preventDefault();
                rollDice();
            }}>
            <Button variant="primary" type="submit" id="roll-button">Roll Dice</Button>
        </Form>
    </div>);
} 
  
function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
}

export default Dice;