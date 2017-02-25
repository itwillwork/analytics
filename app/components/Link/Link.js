import React, {Component} from 'react';

import styles from './Link.scss';
import classNames from 'classnames/bind';
const cls = classNames.bind(styles);

class Link extends Component {
    constructor() {
        super();
    }
    render() {
        const {
            style,
            title,
            onClick: handleClick
        } = this.props;

        return (
            <span
                className={cls('Link')}
                onClick={handleClick}
            >{title}</span>
        );
    }
}

export default Link