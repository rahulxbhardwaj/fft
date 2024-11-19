import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
	
		<Auth0Provider
			domain = "dev-e8gtczbsvzmakjnf.us.auth0.com"
			clientId="e6odmsAazSppPbwUNwKvuOrugGpPhj8H"
			authorizationParams={{
				redirect_uri: window.location.origin
			}}
		>
			<React.StrictMode>
		<App />
			</React.StrictMode>
			 </Auth0Provider>

)