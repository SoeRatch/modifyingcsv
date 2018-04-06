import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Drag from "../Drag/Drag";
import Savet from "../Drag/Savet";
import EditTable from '../Drag/EditTable';

class Main extends Component {



	render() {
		return(
			<div >
				
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route  path="/drag" exact component={Drag}/>}/>
					<Route  path="/save" exact component={Savet}/>}/>
					<Route  path="/edit/:paramt" exact component={EditTable}/>}/>
				</Switch>
			
			</div>
			);
	}

}

export default Main;