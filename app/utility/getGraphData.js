import mock from './mockData';

module.exports = async(
    params
) => {
    const res = await new Promise((res, rej) => {
        //захардкоженная версия мока
        setTimeout(() => {
            res(mock[params.type]);
        }, 2000);
    });
    //какие-нибудь манипуляции с ответом
    return res;
};