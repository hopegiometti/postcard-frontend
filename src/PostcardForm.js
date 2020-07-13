import React from 'react'

export default class PostCardForm extends React.Component {
    state={
        message: '',
        photo: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createPostcard(this.state)
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(<>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Message: 
                    <input type="text" value={this.state.message} name="message" onChange={this.onChange}/>
                </label>
                <label>
                    Postcard photo:
                    <input type="text" value={this.state.photo} name="photo" onChange={this.onChange}/>
                </label>
                <input type="submit" value="submit"/>

            </form>
        </>)
    }
}