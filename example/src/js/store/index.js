import Store from '../../../../src';

Store.init({
    namespace: {
        loading: false,
        title: {
            nested: 'Welcome to Observable Store'
        }
    }
}, true);

console.log('store entry')

export default Store
