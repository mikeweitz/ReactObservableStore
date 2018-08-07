// import Store from '../../../src/ReactObservableStore';
// let Store = window.store.default

const Store = window.store.default;

export const updateSync = (newTitle) => {
    Store.set('namespace.title.nested', newTitle);
};

export const updateAsync = (newTitle) => {
    Store.update('namespace', {loading: true});
    setTimeout(() => {
        Store.update('namespace', {loading: false, title: {nested: newTitle}});
    }, 1000);
};
