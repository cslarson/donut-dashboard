import React from 'react';
import DonutLogo from '../img/donut-logo.png';
import distribution from '../distribution/most_recent.json';

class Distribution extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            distribution: []
        }
    }

    async componentDidMount() {
        this.setState({
            distribution: distribution
        });
    }

    render() {
        return (
            <div className="content">
                <img src={DonutLogo} alt="Donut Logo" className="logo-image" />
                <span className="title-text"><u>Most Recent Donut Distribution</u></span>
                <img src={DonutLogo} alt="Donut Logo" className="logo-image" />
                <br></br>
                <i>The most recent distribution occurred on January 21st, 2021.</i>
                <br></br>
                <i>The next distribution will occur on February 18th, 2021.</i>


                <table className="donut-table">
                    <thead>
                        <tr>
                            <th className="donut-header">
                                Username
                            </th>
                            <th className="donut-header">
                                Donuts Received
                            </th>
                            <th className="donut-header">
                                Contributor / Moderator
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                        <tr></tr>
                    {this.state.distribution.map((row) => {
                            return (<tr key={row.username + row.contributor_type}>
                                <th className="contentColumn">
                                    {row.username}
                                </th>
                                <th className="contentColumn">
                                    {row.points}
                                </th>
                                <th className="contentColumn">
                                    {row.contributor_type === "moderator" ? <span className="moderator">{row.contributor_type}</span> : <span>{row.contributor_type}</span> }
                                </th>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        );
    }


}

export default Distribution;
