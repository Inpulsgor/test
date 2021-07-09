import React, { Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from "./components/layout/Main";
import { Loader } from "./components/";
import { Home, Learn, Register} from './views/'

const App = () => {
  return (
	<Suspense
		fallback={<Loader />}>
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
