import React, { Component } from 'react';
import User from '../api/user';
import Session from '../api/session';
const { Consumer, Provider } = React.createContext({});

const initialState = {
	loading: true,
	user: null
};

export class Authenticator extends Component {
	constructor(props) {
		super(props);

		this.reload = this.reload.bind(this);
		this.signOut = this.signOut.bind(this);

		this.state = {
			...initialState,
			reload: this.reload,
			signOut: this.signOut
		};
	}

	signOut() {
    if (window.confirm("Log out?")) {
      return Session.destroy().then(() => this.reload());
    }
	}

	reload() {
		this.setState({ loading: true });

		return User.current().then(data => {
			if (data.status !== 401) {
				this.setState({ loading: false, user: data });
			} else {
				this.setState({ loading: false, user: null });
			}
		});
	}

	componentDidMount() {
		this.reload();
	}

	render() {
		const { children } = this.props;
		return <Provider value={this.state}>{children}</Provider>;
	}
}

export const Authenticate = Consumer;