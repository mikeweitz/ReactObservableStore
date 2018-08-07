import Store from '../../../../src';

window.store = Store.init({
    namespace: {
        loading: false,
        title: {
            nested: 'Welcome to Observable Store'
        }
    }
}, true);

export default window.store
