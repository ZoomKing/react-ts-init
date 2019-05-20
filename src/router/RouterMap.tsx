import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Topics from '../pages/Topics';

interface IRouterItem {
    component: any;
    path: string;
}

const RouterList : IRouterItem[] = [
    {
        component: Home,
        path: '/'
    },
    {
        component: About,
        path: '/about'
    },
    {
        component: Topics,
        path: '/topics'
    },
]

const RouterMap = ()=> (
    <Switch>
        {
           RouterList.map(item=>(
               <Route
                    exact={true}
                    path= {item.path}
                    key={item.path}
                    component= {item.component}
                />
           )) 
        }
    </Switch>
)

export default RouterMap;