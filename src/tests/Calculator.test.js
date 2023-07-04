import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId
    ('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId
    ('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId
    ('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId
    ('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should handle multiple number button clicks', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('41');
  })

  it('should chain opperations', () => {
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId
    ('operator-equals');
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('-2');
  })

  it('clear running total without affecting calculation', () => {
    const button4 = container.getByTestId('number4');
    const buttonClear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId
    ('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonClear);
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('8');
  })


})

// TICK calculator.add() - add 1 to 4 and get 5 
// TICK calculator.subtract() subtract 4 from 7 and get 3
// TICK calculator.multiply() - multiply 3 by 5 and get 15
// TICK calculator.divide() - divide 21 by 7 and get 3
// TICK calculator.numberClick() - concatenate multiple number button clicks
// TICK calculator.operatorClick() - chain multiple operations together
// TICK calculator.clearClick() - clear the running total without affecting the calculation