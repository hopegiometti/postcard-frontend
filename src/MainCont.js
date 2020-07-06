import React from 'react'
import PostcardCont from './PostcardCont'

export default class MainCont extends React.Component {
    state={
        postcardsArr: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/postcards")
        .then(r => r.json())
        .then((postcards) => {
          this.setState({
            postcardsArr: postcards
          })
        })
    }


    render() {
        return (<div>
            {console.log(this.state)}
            <PostcardCont cards={this.state.postcardsArr}/>
        </div>)
    }
}