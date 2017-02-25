import T from './type'
import loader from '../utility/loader';

const getIdx = (state, action) => state.indexOf(action.graph);

function reducer(state = [], action) {
    let nextState = [...state];
    switch (action.type) {
        case T.ADD_GRAPH: {
            nextState.push({
                ...action.payload
            });
            return nextState;
        }
        case T.NEED_FETCH: {
            let graph = nextState[getIdx(state, action)];
            graph.data = {
                ...graph.data,
                ...loader.begin(),
            };
            return nextState;
        }
        case T.SUCCESS_FETCH: {
            let idx = getIdx(state, action);
            nextState[idx] = {
                ...nextState[idx],
                data: {
                    data: action.res,
                    ...loader.success(),
                }
            };
            return nextState;
        }
        case T.REMOVE_GRAPH: {
            const idx = getIdx(state, action);
            nextState.splice(idx, 1);
            return nextState;
        }
        default:
            return state
    }
}

export default reducer;