import React from 'react'; 
import Session from '../api/session';

function SignInPage(props) {
	function signIn(event) {
		event.preventDefault();
		const { history, auth } = props;
		const formData = new FormData(event.currentTarget);

		Session.create({
			email: formData.get('email'),
			password: formData.get('password')
		})
			.then(() => auth.reload())
			.then(() => {
				history.push('/');
			});
  }
        
	return (
		<main className="SignInPage">
			<form onSubmit={signIn}>
				<div>
					<label htmlFor="email">Email</label> <br />
					<input id="email" name="email" type="email" />
				</div>
				<div>
					<label htmlFor="password">Password</label> <br />
					<input id="password" name="password" type="password" />
				</div>
				<input type="submit" value="Login" />
			</form>
		</main>
	);
}

export default SignInPage;