import React from 'react';
import {Redirect, Route} from "react-router-dom";
import { Context } from "../store/appContext";

const PrivateRoute = ({children, ...rest}) =>{
    const {store: {auth}} = useContext(Context);
    return(
        <Route>
            
        </Route>
    );
}