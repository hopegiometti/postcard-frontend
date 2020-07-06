import React from 'react'
import ResponsesCont from './ResponsesCont'

export default class PostcardCont extends React.Component {

    renderCards = (cards) => (
        cards.map(card => {
           return <div><img src={card.photo} alt="postcard photo"/><div>{card.message}</div></div>
        })
    )

   
    render() {
        return (<div>
            {this.renderCards(this.props.cards)}
            <ResponsesCont responses={this.props.responses}/>
        </div>)
    }
}