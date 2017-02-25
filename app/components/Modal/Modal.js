import React from 'react';
import Link from '../Link/Link';
import {findDOMNode} from 'react-dom';
import styles from './Modal.scss';
import classNames from 'classnames/bind';
const cls = classNames.bind(styles);

export class PseudoModal extends React.Component {
    getRatioSize() {
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;
        //график пока квадрат по этому так
        return width < height ? width : height;
    }
    render() {
        const width = this.getRatioSize();
        return (
            <div className={cls("PseudoModal")}>
                <div
                    className={cls("PseudoModal__container")}
                    style={{ width }}
                >
                        {this.props.children}
                </div>
                <div className={cls("PseudoModal__closeWrap")}>
                    <Link onClick={this.props.closePortal} title="close"/>
                </div>
            </div>
        );
    }

}

export default PseudoModal