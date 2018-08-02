import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import SecondaryEntry from './SecondaryEntry';
import Store from '../../../src';

Store.init({
    namespace: {
        loading: false,
        title: {
            nested: 'Welcome to Observable Store'
        }
    }
}, true);

ReactDOM.render(<Root />, document.getElementById('app'));

ReactDOM.render(<SecondaryEntry />, document.getElementById('Secondary'));
