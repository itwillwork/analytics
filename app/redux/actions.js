import T from './type'
import getRandomGraph from '../utility/getRandomGraph';

export const addGraph = () => ({
    type: T.ADD_GRAPH,
    payload: getRandomGraph()
});

export const needFetch = (graph) => ({
    type: T.NEED_FETCH,
    graph,
});

export const successFetch = (graph, res) => ({
    type: T.SUCCESS_FETCH,
    graph,
    res,
});

export const removeGraph = (graph) => ({
    type: T.REMOVE_GRAPH,
    graph,
});
