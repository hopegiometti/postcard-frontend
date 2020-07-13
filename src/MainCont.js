import React from 'react'
import PostcardCont from './PostcardCont'
import PostcardForm from './PostcardForm'

export default class MainCont extends React.Component {
    state={
        postcardsArr: [],
        responsesArr: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/postcards")
        .then(r => r.json())
        .then((postcards) => {
          this.setState({
            postcardsArr: postcards
          })
        })

        fetch("http://localhost:3000/responses")
        .then(r => r.json())
        .then((responses) => {
          this.setState({
            responsesArr: responses
          })
        })
        
    }

    createPostcard = (newCard) => {
      console.log(newCard)
    }


    render() {
        return (<div>
            {console.log(this.state)}
            <PostcardForm createPostcard={this.createPostcard}/>
            <PostcardCont cards={this.state.postcardsArr} responses={this.state.responsesArr}/>
        </div>)
    }
}