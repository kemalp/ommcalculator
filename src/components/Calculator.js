import React, {Component} from 'react';
import * as math from 'mathjs';
import update from 'immutability-helper';
import Button from './Button';
import Pad from './Pad';
import View from './View';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { calculations: [] }
    }

    valueCalculator = (operator) => {
        let calculation = this.state.calculations.join('');
        if (calculation) {
            calculation = math.evaluate(calculation);
            calculation = math.format(calculation);
            calculation = String(calculation);
        }
        if (operator === 'sqrt') {
            calculation = math.sqrt(calculation);
        }
        this.setState({
            calculations: [calculation],
        })
    }

    clickHandler = e => {
        const value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({
                    calculations: [],
                })
                break;
            case 'equal':
                this.valueCalculator();
                break;
            case 'sqrt':
                this.valueCalculator('sqrt');
                break;
            case 'ce':
                const removeLast = update(this.state.calculations, {
                    $splice: [this.state.calculations.length - 1, 1]
                });
                this.setState({
                    calculations: removeLast,
                });
                break;
            default:
                const newCalculations = update(this.state.calculations, {
                    $push: [value],
                });
                this.setState({
                    calculations: newCalculations,
                });
                break;
        }
    }

    render(){
        return(
            <div className="Calculator">
                <View data={this.state.calculations} />
                <Pad>
                    <Button onClick={this.clickHandler} label="ON/C" value="clear" />
                    <Button onClick={this.clickHandler} label="CE" value="ce" />
                    <Button onClick={this.clickHandler} label="MRC" value="clear" />
                    <Button onClick={this.clickHandler} label="M-" value="clear" />
                    <Button onClick={this.clickHandler} label="M+" value="clear" />

                    <Button onClick={this.clickHandler} label="7" value="7" />
                    <Button onClick={this.clickHandler} label="8" value="8" />
                    <Button onClick={this.clickHandler} label="9" value="9" />
                    <Button onClick={this.clickHandler} label="%" value="%" />
                    <Button onClick={this.clickHandler} label="&radic;" value="sqrt" />

                    <Button onClick={this.clickHandler} label="4" value="4" />
                    <Button onClick={this.clickHandler} label="5" value="5" />
                    <Button onClick={this.clickHandler} label="6" value="6" />
                    <Button onClick={this.clickHandler} label="x" value="*" />
                    <Button onClick={this.clickHandler} label="/" value="/" />

                    <Button onClick={this.clickHandler} label="1" value="1" />
                    <Button onClick={this.clickHandler} label="2" value="2" />
                    <Button onClick={this.clickHandler} label="3" value="3" />
                    <Button onClick={this.clickHandler} label="+" value="+" />
                    <Button onClick={this.clickHandler} label="-" value="-" />

                    <Button onClick={this.clickHandler} label="0" value="0" />
                    <Button onClick={this.clickHandler} label="." value="." />
                    <Button onClick={this.clickHandler} label="+/-" value="+/-" />
                    <Button onClick={this.clickHandler} label="" value="null" />
                    <Button onClick={this.clickHandler} label="=" value="equal" />
                </Pad>
            </div>
        );
    }
}

export default Calculator;