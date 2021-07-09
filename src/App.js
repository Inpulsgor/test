import React, { Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { CommonLoading as Loader } from "react-loadingg";

import Main from "./components/layout/Main";
import { Home, Learn, Register} from './views/index'

const App = () => {
  return (
	<Suspense 
		fallback={
			<Loader
			color="orange"
			size="large"
			className="loader"
			/>}>
		<Main>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/learn" component={Learn} />
				<Route path="/register" component={Register} />
				<Redirect to="/" />
			</Switch>
		</Main>
	</Suspense>
  );
}

export default App;
