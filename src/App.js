import { Route } from 'react-router-dom';
import Main from "./components/layout/Main";
import { Home, Learn, Register} from './views/index'

const App = () => {
  return (
	<Main>
		<Route path="/" exact component={Home} />
		<Route path="/learn" component={Learn} />
		<Route path="/register" component={Register} />
	</Main>
  );
}

export default App;
