import React from 'react'

export default class ResponsesCont extends React.Component {

    renderResponses = (responses) => {

        console.log(responses.map(response => response.postcard_id))
        
    }

   
    render() {
        return (<div>
            {/* {console.log(this.props.responses)} */}
            {this.renderResponses(this.props.responses)}
        </div>)
    }
}