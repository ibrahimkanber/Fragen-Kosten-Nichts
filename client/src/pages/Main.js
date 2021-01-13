
import Navbar from '../components/Navbar/Navbar';
import { Home } from './Home';
import Footer from "../components/Footer/Footer"
import { Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Signup } from './SignUp';

export const Main = ({location}) => {
 
    return (

        <div className="App">
            <Navbar />
            <TransitionGroup>
                <CSSTransition key={location.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/" component={Home} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer />

        </div>

    );
}


