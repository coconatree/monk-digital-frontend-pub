import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>    
			<Route index path = "/" 	   	        />
			<Route 		 path = "/monk-bot/letters" />
			<Route 		 path = "/error/:msg"  	    />
			<Route 		 path = "*" 	   	   	    />
    </Route>
);