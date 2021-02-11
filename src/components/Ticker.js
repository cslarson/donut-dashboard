import React from 'react';
import getDonutStats from '../services/coingecko-service';
import DownArrow from '../img/down-arrow.svg';
import UpArrow from '../img/up-arrow.svg';

class Ticker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            donutUSD: 0,
            donutETH: 0,
            usdDonut: 0,
            ethDonut: 0,
            usd24hr: 0,
            eth24hr: 0,
            usdVolume: 0,
            ethVolume: 0,
            usdMarketCap: 0,
            ethMarketCap: 0
        }

        this.formatNumber = this.formatNumber.bind(this);
    }

    async componentDidMount() {
        let donutStats = await getDonutStats();

        this.setState({
             donutUSD: donutStats.donutUSD,
             donutETH: donutStats.donutETH,
             usdDonut: donutStats.usdDonut,
             ethDonut: donutStats.ethDonut,
             usd24hr: donutStats.usd24hr,
             eth24hr: donutStats.eth24hr, 
             usdVolume: donutStats.usdVolume, 
             ethVolume: donutStats.ethVolume, 
             usdMarketCap: donutStats.usdMarketCap, 
             ethMarketCap: donutStats.ethMarketCap,
             isLoading: false
        });
    }
        
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }        

    render() {
        return (
            <div>
                {this.state.isLoading ? <p>Loading...</p> :
                <table className="ticker-table">
                    <thead>
                        <tr>
                            <th className="header">
                                <b>USD Value</b>
                            </th>
                            <th className="header">
                                <b>ETH Value</b>
                            </th>
                            <th className="header">
                                <b>Marketcap</b>
                            </th>
                            <th className="header">
                                <b>24hr Trading Volume</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="ticker-column">
                                <p>${this.state.donutUSD} <b>USD</b>
                                <br></br>
                                (1 <b>USD</b> = {this.formatNumber(Math.ceil(this.state.usdDonut))} <b>DONUT</b>)
                                <br></br>
                                {this.state.usd24hr >= 0 ? <img src={UpArrow} alt="Up arrow" className="green-arrow" /> : <img src={DownArrow} alt="Down arrow" className="red-arrow" />}
                                {this.state.usd24hr >= 0 ? <span className="upArrow">+{this.state.usd24hr.toFixed(2)}%</span> : <span className="downArrow">{this.state.usd24hr.toFixed(2)}%</span>}
                                </p>
                            </th>
                            <th className="ticker-column">
                                <p>{this.state.donutETH} <b>ETH</b>
                                <br></br>
                                (1 <b>ETH</b> = {this.formatNumber(Math.ceil(this.state.ethDonut))} <b>DONUT</b>)
                                <br></br>
                                {this.state.eth24hr >= 0 ? <img src={UpArrow} alt="Up arrow" className="green-arrow" /> : <img src={DownArrow} alt="Down arrow" className="red-arrow" />}
                                {this.state.eth24hr >= 0 ? <span className="upArrow">+{this.state.eth24hr.toFixed(2)}%</span> : <span className="downArrow">{this.state.eth24hr.toFixed(2)}%</span>}
                                </p>
                            </th>
                            <th className="ticker-column">
                                <p>${this.formatNumber(Math.ceil(this.state.usdMarketCap))} <b>USD</b>
                                <br></br>
                                {this.formatNumber(Math.ceil(this.state.ethMarketCap))} <b>ETH</b></p>
                            </th>
                            <th className="ticker-column">
                                <p>${this.formatNumber(Math.ceil(this.state.usdVolume))} <b>USD</b>
                                <br></br>
                                {this.formatNumber(Math.ceil(this.state.ethVolume))} <b>ETH</b></p>
                            </th>
                        </tr>
                    </tbody>                
                </table>
                }
            </div>
        );
    }
}

export default Ticker;