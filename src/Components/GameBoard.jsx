import Dice from './Dice';

const GameBoard = ({connection, rolledNumber, counter}) =>
{
    return (
        <div>
            <Dice connection={connection} rolledNumber={rolledNumber} counter={counter}></Dice>
        </div>
    )
}

export default GameBoard;