import Store from '../../../../src';

Store.init({
    namespace: {
        loading: false,
        title: {
            nested: 'Welcome to Observable Store'
        }
    }
}, true);

console.log('store entry', window.store)

export default Store
