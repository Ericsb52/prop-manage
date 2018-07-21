import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields, button) => {
        console.log("submit");
        // if(button == 'submit'){
        //     console.log('trying to handle submit')
        // }
        // this.props.hisstory.push('/dashboard')
    }
    onCancel = () => {
        console.log("cancel");

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