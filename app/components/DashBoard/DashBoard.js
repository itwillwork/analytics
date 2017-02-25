import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import styles from './DashBoard.scss';
import classNames from 'classnames/bind';
const cls = classNames.bind(styles);

import Button from '../Button/Button';
import SimpleGraph from '../SimpleGraph/SimpleGraph';
import { addGraph, removeGraph } from '../../redux/actions';
import { connect } from 'react-redux';

//тут что-то типо higher-order component
class DashBoard extends Component {
    constructor(props) {
        super(props);

        this.handleAddGraph = this.handleAddGraph.bind(this);
        this.handleRemoveGraph = this.handleRemoveGraph.bind(this);
    }
    handleAddGraph() {
        this.props.dispatch(addGraph());
    }
    handleRemoveGraph(graph) {
        this.props.dispatch(removeGraph(graph));
    }
    render() {
        const { graphs } = this.props;
        return (
            <div className={cls("DashBoard")}>
                <div className={cls("DashBoard__title")}>Analytics</div>
                <div className={cls("DashBoard__actions DashBoard__separator")}>
                    <Button title="+ Add random graph" onClick={this.handleAddGraph} />
                </div>
                <div className={cls("DashBoard__graphArea DashBoard__separator")}>
                    {graphs.map((graph, key) => (
                        <SimpleGraph
                            key={key}
                            graph={graph}
                            onRemoveGraph={this.handleRemoveGraph}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default connect((state)=>({graphs: state}))(DashBoard)