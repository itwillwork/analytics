import React, {Component} from 'react';
import styles from './SimpleGraph.scss';
import classNames from 'classnames/bind';
var rd3 = require('react-d3');
const cls = classNames.bind(styles);

const getGraphData = require('../../utility/getGraphData');
import GraphWrap from '../GraphWrap/GraphWrap'
import { needFetch, successFetch } from '../../redux/actions'
import { connect } from 'react-redux';

class SimpleGraph extends Component {
    constructor() {
        super();
    }
    getData(graph) {
        return graph.data.data;
    }
    componentDidMount() {
        const {
            dispatch,
            graph
        } = this.props;

        dispatch((dispatch, getState) => {
            dispatch(needFetch(graph));
            getGraphData(graph)
                .then((res) => {
                    dispatch(successFetch(graph, res));
                });
        });
    }
    render() {
        const {
            onRemoveGraph,
            graph
        } = this.props;

        const RuntimeComponent = rd3[graph.type];

        return (
            <GraphWrap
                onRemoveGraph={onRemoveGraph}
                graph={graph}
                >
                <div className={cls("graph")}>
                    <RuntimeComponent
                        height='100%'
                        width='100%'
                        {...graph}
                        data={this.getData(graph)}
                    />
                </div>
            </GraphWrap>

        );
    }
}

//чтобы дать компоненту dispatch, но он по прежнему тупой
export default connect()(SimpleGraph)