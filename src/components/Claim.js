import React from 'react';
import DonutLogo from '../img/donut-logo.png';

class Claim extends React.Component {

    render() {
        return (
            <div className="content">
                <img src={DonutLogo} alt="Donut Logo" className="logo-image" />
                <span className="title-text"><u>How to Claim Donuts</u></span>
                <img src={DonutLogo} alt="Donut Logo" className="logo-image" />
                
                <table className="how-to-table">
                    <tbody>
                        <tr>
                            <th className="numColumn">
                            Step 1
                            </th>
                            <th className="contentColumn">
                                <p className="left-body">
                                    TBD
                                </p>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


}

export default Claim;