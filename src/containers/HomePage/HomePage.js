import React, { Component} from 'react';
import "./HomePage.css";
import {Link} from 'react-router-dom';

export default class HomePage extends Component {


	render() {
		return(
			<div>

      <div className="upload" >
        <Link to = '/drag' >
        <button className={["button", "button2"].join(' ')}>
                                    <span>Import Files to get started</span>
        </button>
      </Link>
      </div>

      <div className="upload2" >
      <Link to = '/save' >
        <button  className={["button", "button2"].join(' ')}><span>open previously saved set of files</span></button>
      </Link>
      </div>

		</div>
			);
	}

}