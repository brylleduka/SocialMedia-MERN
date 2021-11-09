import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/profile/:username'>
					<Profile />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
