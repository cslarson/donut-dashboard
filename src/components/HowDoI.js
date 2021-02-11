import React from 'react';

class HowDoI extends React.Component {

    render() {
        return (
            <div className="links">
                <span className="title-text"><u>How Do I...?</u></span>
                <p>
                <a href="https://www.reddit.com/r/ethtrader/wiki/donuts" target="_blank" rel="noreferrer">Register For Donuts</a>
                <br></br>
                <a href="https://www.reddit.com/r/ethtrader/comments/kl6ldu/donuts_faq/" target="_blank" rel="noreferrer">Claim Donuts</a>
                <br></br>
                <a href="https://client.aragon.org/#/ethtraderdao.eth/0xa2b6218673bac129127be86106a9d5d205814edc/" target="_blank" rel="noreferrer">Buy & Sell Donuts</a>
                </p>
            </div>
        );
    }


}

export default HowDoI;