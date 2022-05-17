/* eslint-disable default-case */
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

class AuthServcie {
	constructor() {
		this.firebaseAuth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
		this.githubProvider = new GithubAuthProvider();
	}
	login(providerName) {
		const provider = this.getProvider(providerName);
		return signInWithPopup(this.firebaseAuth, provider);
	}

	logout() {
		signOut(this.firebaseAuth);
	}

	getProvider(providerName) {
		switch (providerName) {
			case 'Google':
				return this.googleProvider;
			case 'Github':
				return this.githubProvider;
		}
	}

	onAuthChange(onUserChange) {
		onAuthStateChanged(this.firebaseAuth, user => {
			onUserChange(user);
		});
	}
}

export default AuthServcie;
