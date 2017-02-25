import loader from './loader';
import graphsConfig from './graphsConfig';

export default () => {
    let randomConfIdx = (Math.random() * graphsConfig.length ^ 0);
    return {
        ...graphsConfig[randomConfIdx],
        data: {
            ...loader.initial(),
            data: null
        }
    };
}