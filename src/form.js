import React from 'react'

class Form extends React.Component {
    // state = {
    //     searchTerm:''
    // }

    // handleSearchTermChange = event => {
    //     this.setState({searchTerm:event.target.value},()=>console.log(this.state))
    // }

    render() {
        return (
            <form id="pokemon-search-form">
                <input onChange={this.props.handleSearchTermChange} id="pokemon-search-input" type="text" name="" value={this.props.searchTerm} />
            </form>
        )
    }
}

export default Form
