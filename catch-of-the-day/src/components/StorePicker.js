import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {
    /* constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    } */

    goToStore(event) {
        event.preventDefault();
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" action="" onSubmit={(e) => this.goToStore(e)}>
                
                <h2>Please enter a store</h2>
                <input ref={(input) => {this.storeInput = input}} type="text" required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;