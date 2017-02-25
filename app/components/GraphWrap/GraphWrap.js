import React, {Component} from 'react';

import styles from './GraphWrap.scss';
import classNames from 'classnames/bind';
import LoaderSvg from '../LoaderSvg/LoaderSvg'
import ZoomSvg from '../ZoomSvg/ZoomSvg'
import Link from '../Link/Link';

const cls = classNames.bind(styles);

import Portal from 'react-portal';
import PseudoModal from '../Modal/Modal';

class GraphWrap extends Component {
    constructor() {
        super();
        this.state = {
            isOpenedModalWindow: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleRemoveGraph = this.handleRemoveGraph.bind(this);
    }
    handleRemoveGraph() {
        const {graph, onRemoveGraph} = this.props;
        onRemoveGraph && onRemoveGraph(graph);
    }
    handleOpenModal () {
        this.setState({
            isOpenedModalWindow: true
        })
    }
    handleCloseModal () {
        this.setState({
            isOpenedModalWindow: false
        })
    }
    render() {
        const { isOpenedModalWindow } = this.state;
        const { graph } = this.props;
        const isShowLoader = !graph.data.success;
        return (
            <div className={cls('GraphWrap')}>
                <div className={cls('GraphWrap__layout')}>
                    <div className={cls('GraphWrap__title')}>
                        <span className={cls('title')}> {graph.type} </span>
                        <Link
                            title="remove"
                            onClick={this.handleRemoveGraph}
                        />
                    </div>
                    <div className={cls('GraphWrap__content')}>
                        <Portal
                            closeOnEsc
                            onClose={this.handleCloseModal}
                            isOpened={isOpenedModalWindow}
                        >
                            <PseudoModal>
                                {this.props.children}
                            </PseudoModal>
                        </Portal>
                        <div className={cls('GraphWrap__graph')}>
                            {isShowLoader
                                ? (
                                    <div className={cls('GraphWrap__loader')}>
                                        <LoaderSvg />
                                    </div>
                                )
                                : this.props.children
                            }
                        </div>
                    </div>
                    {graph.availableZoom && <div className={cls('GraphWrap__zoom')} onClick={this.handleOpenModal}><ZoomSvg /></div>}
                </div>
            </div>
        );
    }
}

export default GraphWrap