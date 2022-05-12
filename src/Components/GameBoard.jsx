import Dice from './Dice'
import './GameBoard.css';

const GameBoard = ({connection, rolledNumber, counter}) =>
{
    return (
        <div>
            <table>
                <tr>
                    <td className="redField"> </td>
                    <td className="redField"> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="19"> 19</td>
                    <td className='runningField' id="20"> 20</td>
                    <td className='blueField' id="21">21 </td>
                    <td> </td>
                    <td> </td>
                    <td className='blueField'> </td>
                    <td className='blueField'> </td>
                </tr>
                <tr>
                    <td className="redField"> </td>
                    <td className="redField"> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="18">18 </td>
                    <td className='blueField'> </td>
                    <td className='runningField' id="22">22 </td>
                    <td> </td>
                    <td> </td>
                    <td className='blueField'> </td>
                    <td className='blueField'> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="17">17 </td>
                    <td className='blueField'> </td>
                    <td className='runningField' id="23"> 23</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="16">16 </td>
                    <td className='blueField'> </td>
                    <td className='runningField' id="24">24 </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td className="redField" id="11">11 </td>
                    <td className='runningField' id="12">12 </td>
                    <td className='runningField' id="13">13 </td>
                    <td className='runningField' id="14">14 </td>
                    <td className='runningField' id="15">15 </td>
                    <td className='blueField'> </td>
                    <td className='runningField' id="25">25 </td>
                    <td className='runningField' id="26">26 </td>
                    <td className='runningField' id="27">27 </td>
                    <td className='runningField' id="28">28 </td>
                    <td className='runningField' id="29"> 29</td>
                </tr>
                <tr>
                    <td className='runningField' id="10">10 </td>
                    <td className="redField"> </td>
                    <td className="redField"> </td>
                    <td className="redField"> </td>
                    <td className="redField"> </td>
                    <td> </td>
                    <td className="greenField"> </td>
                    <td className="greenField"> </td>
                    <td className="greenField"> </td>
                    <td className="greenField"> </td>
                    <td className='runningField' id="30">30 </td>
                </tr>
                <tr>
                    <td className='runningField' id="9">9 </td>
                    <td className='runningField' id="8">8 </td>
                    <td className='runningField' id="7">7 </td>
                    <td className='runningField' id="6"> 6</td>
                    <td className='runningField' id="5"> 5</td>
                    <td className="yellowField"> </td>
                    <td className='runningField' id="35">35 </td>
                    <td className='runningField' id="34">34 </td>
                    <td className='runningField' id="33">33 </td>
                    <td className='runningField' id="32">32 </td>
                    <td className="greenField" id="31">31 </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="4"> 4</td>
                    <td className='yellowField'> </td>
                    <td className='runningField' id="36"> 36</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="3">3 </td>
                    <td className='yellowField'> </td>
                    <td className='runningField' id="37"> 37</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td className='yellowField'> </td>
                    <td className='yellowField'> </td>
                    <td> </td>
                    <td> </td>
                    <td className='runningField' id="2">2 </td>
                    <td className='yellowField'> </td>
                    <td className='runningField' id="38"> 38</td>
                    <td > </td>
                    <td> </td>
                    <td className="greenField"> </td>
                    <td className="greenField"> </td>
                </tr>
                <tr>
                    <td className='yellowField'> </td>
                    <td className='yellowField'> </td>
                    <td> </td>
                    <td> </td>
                    <td className='yellowField' id="1">1 </td>
                    <td className='runningField' id="40">40 </td>
                    <td className='runningField' id="39"> 39</td>
                    <td> </td>
                    <td> </td>
                    <td className="greenField"> </td>
                    <td className="greenField"> </td>
                </tr>
            </table>
            <Dice connection={connection} rolledNumber={rolledNumber} counter={counter}></Dice>
        </div>
    )
}

export default GameBoard;