
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer"
import { Route, Switch } from 'react-router-dom';

import { useEffect } from 'react';

import {loginCheck} from "../redux/actions/authActions"
import {getAllQuestions} from "../redux/actions/questionActions"
import {useDispatch} from "react-redux"
import { CreateQuestion,Login,Signup,Home,Questions,QuestionDetail } from './';




export const Main = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loginCheck())
        dispatch(getAllQuestions())
    },[])
 
    return (

        <div className="App">
            <Navbar />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route exact path="/" component={Home} />
                        <Route path="/newquestion" component={CreateQuestion} />
                        <Route exact path="/questions" component={Questions} />
                        <Route exact path="/questions/:id" component={QuestionDetail} />
                    </Switch>

            <Footer />

        </div>

    );
}


