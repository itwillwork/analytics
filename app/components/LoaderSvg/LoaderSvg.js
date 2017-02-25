import React, {Component} from 'react';

class LoaderSvg extends Component {
    static defaultProps = {
        spinerColor: '#1A91EB'
    };
    constructor() {
        super();
    }
    render() {
        const { spinerColor } = this.props;
        return (
            <svg width='60px' height='60px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="0" y="0" width="100" height="100" fill="none"></rect>
                <circle cx="50" cy="50" r="40" stroke="#EFF3F6" fill="none" strokeWidth="10" strokeLinecap="round"></circle>
                <circle cx="50" cy="50" r="40" stroke={spinerColor} fill="none" strokeWidth="6" strokeLinecap="round">
                    <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
                    <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
                </circle>
            </svg>
        );
    }
}

export default LoaderSvg
