import React from 'react';
import DonutLogo from '../img/donut-logo.png';
import getDonutStats from '../services/coingecko-service';

class Ticker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            donutUSD: 0,
            donutETH: 0,
        }
    }

    async componentDidMount() {
        let donutStats = await getDonutStats();

        this.setState({
             donutUSD: donutStats.donutUSD,
             donutETH: donutStats.donutETH,
             usdDonut: donutStats.usdDonut,
             ethDonut: donutStats.ethDonut,
        });
    }


    //<img src={DonutLogo} className='logo-image'/> 
    render() {
        return (
            <div>
                
                <h2>Value</h2>
                <p>${this.state.donutUSD} <b>USD</b>
                <br></br>
                (1 <b>USD</b> = {Math.ceil(this.state.usdDonut)} <b>DONUT</b>)</p>

                <p>{this.state.donutETH} <b>ETH</b>
                <br></br>
                (1 <b>ETH</b> = {Math.ceil(this.state.ethDonut)} <b>DONUT</b>)</p>
            </div>
        );
    }


}

export default Ticker;