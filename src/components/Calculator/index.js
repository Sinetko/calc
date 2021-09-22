import React, { useState } from 'react';
import { Container, Screen, Previous, Current, Button } from './Styled';

const Calculator = () => {

    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [operation, setOperation] = useState('');

    const appendValue = (el) => {
        let value = el.target.getAttribute('data');
        if (value === '.' && current.includes('.')) return;
        setCurrent(current + value);
    }

    const handleDelete = () => {
        setCurrent(String(current).slice(0, -1));
    }
    const handleAllClear = () => {
        setCurrent('');
        setPrevious('');
        setOperation('');
    }
    const chooseOperation = (el) => {
        if (current === '') return;
        if (previous !== '') {
            let value = compute();
            setPrevious(value);
        } else {
            setPrevious(current);
        }
        setCurrent('');
        setOperation(el.target.getAttribute('data'));
    }

    const equels = () => {
        let value = compute();
        if (value == undefined || value == null) return;

        setCurrent(value);
        setPrevious('');
        setOperation('');
    }
    const compute = () => {
        let result                                  //result of calculating
        let currentNumber = parseFloat(current);  //create number data grom string
        let previousNumber = parseFloat(previous); //create number data grom string

        if (isNaN(previousNumber) || isNaN(currentNumber)) return  //checking numbers 

        switch (operation) {
            case '+':
                result = currentNumber + previousNumber;
                break;
            case '-':
                result = currentNumber - previousNumber;
                break;
            case '/':
                result = previousNumber / currentNumber;
                break;
            case '*':
                result = currentNumber * previousNumber;
                break;
            default:
                return;
        }
        return result;
    }

    return (
        <Container>
            <Screen>
                <Previous>{previous} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button onClick={handleAllClear} control gridSpan={2} >AC</Button> {/* control gridSpan={2} - props for making style */}
            <Button onClick={handleDelete} control >DEL</Button>    {/* control - props for making style */}
            <Button data={'/'} onClick={chooseOperation} operation >/</Button>  {/* operation - props for making style */}
            <Button data={'7'} onClick={appendValue} >7</Button>
            <Button data={'8'} onClick={appendValue} >8</Button>
            <Button data={'9'} onClick={appendValue} >9</Button>
            <Button data={'*'} onClick={chooseOperation} operation >*</Button> {/* operation - props for making style */}
            <Button data={'4'} onClick={appendValue} >4</Button>
            <Button data={'5'} onClick={appendValue} >5</Button>
            <Button data={'6'} onClick={appendValue} >6</Button>
            <Button data={'+'} onClick={chooseOperation} operation >+</Button> {/* operation - props for making style */}
            <Button data={'1'} onClick={appendValue} >1</Button>
            <Button data={'2'} onClick={appendValue} >2</Button>
            <Button data={'3'} onClick={appendValue} >3</Button>
            <Button data={'-'} onClick={chooseOperation} operation >-</Button> {/* operation - props for making style */}
            <Button data={'.'} onClick={appendValue} period >.</Button> {/* period - props for making style */}
            <Button data={'0'} onClick={appendValue} >0</Button>
            <Button data={'='} onClick={equels} equels gridSpan={2}>=</Button> {/* equels gridSpan={2} - props for making style */}
        </Container>

    )
}

export default Calculator;