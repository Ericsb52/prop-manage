import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log("submit");
        // if(button == 'submit'){
        //     console.log('trying to handle submit')
        // }
        console.log("submit");
        this.props.history.push('/dashboard');
    }
    onCancel = () => {
        console.log("cancel");
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;