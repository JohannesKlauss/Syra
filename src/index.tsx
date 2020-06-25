import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createClient, Provider as UrqlProvider} from 'urql';

const client = createClient({
    url: 'https://graphql.fauna.com/graphql',
    fetchOptions: () => ({
        headers: {authorization: 'Bearer fnADo0-YxNACABRjBX8ER9FjEkUOzluRKoPYKhwh'},
    }),
});

ReactDOM.render(
    <React.StrictMode>
        <UrqlProvider value={client}>
            <App/>
        </UrqlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
