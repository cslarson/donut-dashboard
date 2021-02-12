import React from 'react';
import DonutLogo from '../img/donut-logo.png';
import BannerLogo from '../img/donut-banner.png';
import MembershipLogo from '../img/donut-membership.png';
import TippingLogo from '../img/donut-tipping.png';
import VotingLogo from '../img/donut-voting.png';
import UniswapLogo from '../img/donut-uniswap.png';
import HooLogo from '../img/donut-hoo.png';
import HoneyswapLogo from '../img/donut-honeyswap.png';


class Donuts extends React.Component {

    render() {
        return (
            <div className="content">
                <img src={DonutLogo} alt="Donut Icon" className="logo-image" />
                <span className="title-text"><u>What are Donuts?</u></span>
                <img src={DonutLogo} alt="Donut Icon" className="logo-image" />

                <p className="left-body">Donuts are tokens that represent community contribution & engagement
                at the <a href="http://reddit.com/r/ethtrader" target="_blank" rel="noreferrer">/r/ethtrader subreddit</a>.  Users
                earn Donuts simply by participating and contributing content to /r/ethtrader. An easy way to
                think of them is a spendable and tradeable Karma, but exclusive to /r/ethtrader.</p>

                <p className="left-body">Donuts can be used for:</p>

                <table className="content-table">
                    <tbody>
                        <tr>
                            <th className="logo-column">
                                <img src={VotingLogo} alt="Voting Icon" className="logo-image-large" />
                            </th>
                            <th className="logo-column">
                                <img src={MembershipLogo} alt="Membership Icon" className="logo-image-large" />

                            </th>
                            <th className="logo-column">
                                <img src={BannerLogo} alt="Banner Icon" className="logo-image-large" />
                            </th>
                            <th className="logo-column">
                                <img src={TippingLogo} alt="Tipping Icon" className="logo-image-large" />
                            </th>
                        </tr>
                        <tr>
                            <th className="logo-column">
                                <span className="caption-heading">Voting</span>
                            </th>
                            <th className="logo-column">
                                <span className="caption-heading">Special Membership</span>
                            </th>
                            <th className="logo-column">
                                <span className="caption-heading">Banner Advertising</span>
                            </th>
                            <th className="logo-column">
                                <span className="caption-heading">Tipping</span>
                            </th>
                        </tr>
                        <tr>
                            <th className="logo-column">
                                <p className="caption-body">Donuts increase a user's vote weight in community governance polls.</p>
                            </th>
                            <th className="logo-column">
                                <p className="caption-body">Donuts can be used to purchase special memberships, which bring a number of aesthetic perks.</p>
                            </th>
                            <th className="logo-column">
                                <p className="caption-body">Donuts can be used to purchase control of the top banner, often used for advertising purposes.</p>
                            </th>
                            <th className="logo-column">
                                <p className="caption-body">Donuts can be used to tip other users for content you appreciate.</p>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <br></br>
                <p className="left-body">Following the ERC-20 token standard, Donuts are the first ever
                implementation of Reddit Community Points and the only Community Points token to currently
                exist on the Ethereum main net.</p>

                <p className="left-body">Donuts are available to be traded on the following exchanges:</p>

                <table className="content-table">
                    <tbody>
                        <tr>
                            <th className="logo-column">
                                <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9"  target="_blank" rel="noreferrer">
                                    <img src={UniswapLogo} alt="Uniswap Icon" className="logo-image-large" />
                                </a>
                            </th>
                            <th className="logo-column">
                                <a href="https://hoo.com/spot/donut-usdt"  target="_blank" rel="noreferrer">
                                    <img src={HooLogo} alt="Hoo Icon" className="logo-image-large" />
                                </a>
                            </th>
                            <th className="logo-column">
                                <a href="https://honeyswap.org/"  target="_blank" rel="noreferrer">
                                    <img src={HoneyswapLogo} alt="Honeyswap Icon" className="logo-image-large" />
                                </a>
                            </th>
                        </tr>
                        <tr>
                            <th className="logo-column">
                                <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9"  target="_blank" rel="noreferrer">
                                    <span className="caption-heading">Uniswap</span>
                                </a>
                            </th>
                            <th className="logo-column">
                                <a href="https://hoo.com/spot/donut-usdt"  target="_blank" rel="noreferrer">
                                    <span className="caption-heading">Hoo</span>
                                </a>
                            </th>
                            <th className="logo-column">
                                <a href="https://honeyswap.org/"  target="_blank" rel="noreferrer">
                                    <span className="caption-heading">Honeyswap</span>
                                </a>
                            </th>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }


}

export default Donuts;
