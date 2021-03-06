import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletter-latest';
import Button from '../button';

class NewsletterGrid extends Component {
    
    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    componentDidMount(){
        this.props.fetchNewsletters();
    }

    render() {

        const latest = {
              }

        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}

export default connect( null, actions )(NewsletterGrid);