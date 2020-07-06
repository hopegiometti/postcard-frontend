import React from 'react'

export default class MainCont extends React.Component {

    renderCards = (cards) => (
        cards.map(card => {
           return <div><img src={card.photo} alt="postcard photo"/><div>{card.message}</div></div>
        })
    )

   
    render() {
        return (<div>
            {this.renderCards(this.props.cards)}
        </div>)
    }
}