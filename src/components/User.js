import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    render() {
        const { name } = this.props;
        return <div>
                <p>Привет, {name}!</p>
            </div>
    }
}

User.PropTypes = {
    name: PropTypes.string.isRequired
}
