import React, {Component} from 'react';

import styles from './Button.scss';
import classNames from 'classnames/bind';
const cls = classNames.bind(styles);

class Button extends Component {
    constructor() {
        super();
    }
    render() {
        const {
            onClick: handleClick,
            title
        } = this.props;
        return (
            <div
                className={cls("Button")}
                onClick={handleClick}
            >{title}</div>
        );
    }
}

export default Button