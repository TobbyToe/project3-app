import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import MonthlyCalendar from './components/MonthlyCalendar'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <ProtectedRoute path="/home" exact component={Home} />
                <ProtectedRoute
                    path="/calendar"
                    exact
                    component={MonthlyCalendar}
                />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
