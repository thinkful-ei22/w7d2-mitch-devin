import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayRate: 10,
            hours: 1
        }
    }

    render() {
        const rate = this.state.dayRate / this.state.hours;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                    handleNumChange={val =>{
                            this.setState({dayRate: val});
                        }
                    }/>
                <NumberInput id="hours" label="Hours" min={1} max={12} 
                    handleNumChange={val =>{
                            this.setState({hours: val});
                        }
                    } />
                <Output id="hourly-rate" label="Hourly rate" value={rate}
                />
            </form>
        );
    }
}

