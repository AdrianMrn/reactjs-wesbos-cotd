import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import { BrowserRouter, Match, Miss } from 'react-router';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import App from './components/App';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}/>
                <Match exactly pattern="/store/:storeId" component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

//render(<StorePicker/>, document.querySelector('#main'));
render(<Root/>, document.querySelector('#main'));
