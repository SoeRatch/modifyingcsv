import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import ReactFileReader from 'react-file-reader';
import Table from './Table';
import { korana } from './actions/act';
import "./Drag.css";
import {Link} from 'react-router-dom';
var fs = require('browserify-fs');
var JSZip = require("jszip");
const Papa = require("papaparse/papaparse.min.js");
var FileSaver = require('file-saver');


class Drag extends Component {

	state={
        max:1,
        heads:[],
        arrofarr:[]
    }



	handleFiles = files => {
	    var reader = new  window.FileReader();
	    var newelement;
	    reader.onload = function(e) {
		     newelement = Papa.parse(reader.result, {
	      header: true
	    });

	     let a = newelement.data;
	     const heads = this.state.heads;
	     const body = [];
	     const arrofarr = this.state.arrofarr;
	     

	     if(this.state.max === 1){
		    	for (var key in a[0]) {
		    		let temp={
		    			name: key
		    		}
	  			heads.push(temp);
				}



				for(let i = 0; i<heads.length;i++){
							let nams=[];	 
							for(let j=0;j<a.length;j++){
									let keyz=heads[i].name;
									nams.push(a[j][keyz]);
								}

							for(let j=a.length;j<10;j++){
									nams.push("");
								}

							arrofarr.push(nams);

							let temp={
								name:nams,
								column:heads[i].name
									}
							body.push(temp)
				}

				const tab = {
					table:{
					headings:heads,
					rows:body
					}
				}

				this.props.korana(tab);

	     }



	      if(this.state.max >1){

				    for(let i = 0; i<heads.length;i++){
				     		
							 
							for(let j=0;j<a.length;j++){
									let keyz=heads[i].name;
									
									arrofarr[i].push(a[j][keyz]);
								}

							for(let j=a.length;j<10;j++){
									
									arrofarr[i].push("")
								}
							let nams = arrofarr[i];
							
							let temp={
								name:nams,
								column:heads[i].name
							}
							body.push(temp)

					}


					const tab = {
							table:{
							headings:heads,
							rows:body
								}
							}
					this.props.korana(tab);

	      }

		
	    	this.setState({
			heads:heads,
			max:this.state.max+1,
			arrofarr:arrofarr
			})
	   
		  }.bind(this)

  reader.readAsText(files[0]);


}

 writethat = () =>{
 		let ab = this.props.table.headings;
 	let head=[];
 	for(let i=0;i<ab.length;i++){
 		head.push(ab[i].name);
 	}

 	let bc = this.props.table.rows;
 	let cd = [];
 	for(let i = 0; i<head.length;i++){
 		cd.push(bc[i].name);

 	}

 	let len = cd[0].length;
 
 	let result=[];
 	for(let i = 0;i<len;i++){
 		let jzon = {};

 		let ef=[];
 		for(let j = 0; j<head.length;j++){
 		ef.push(head[j]);

 		}



 		for(let j = 0; j<head.length;j++){
 			let x = ef[j];
	 		jzon[x]=cd[j][i];

	 		}
 		
 		result.push(jzon);
 	}



let element = Papa.unparse(result);

fs.writeFile('/home/set1.csv', element, function() {
        fs.readFile('/home/set1.csv', 'utf-8', function(err, data) {
            console.log(data);
        });
    });




 }

downn = () =>{

	let ab = this.props.table.headings;
 	let head=[];
 	for(let i=0;i<ab.length;i++){
 		head.push(ab[i].name);
 	}

 	let bc = this.props.table.rows;
 	let cd = [];
 	for(let i = 0; i<head.length;i++){
 		cd.push(bc[i].name);

 	}

 

 	let len = cd[0].length;
 


 	let result=[];
 	for(let i = 0;i<len;i++){
 		let jzon = {};

 		let ef=[];
 		for(let j = 0; j<head.length;j++){
 		ef.push(head[j]);

 		}



 		for(let j = 0; j<head.length;j++){
 			let x = ef[j];
	 		jzon[x]=cd[j][i];

	 		}
 		
 		result.push(jzon);
 	}


let allfiles=[];
let reslen = (result.length)/10;


for(let j = 0; j<reslen; j++){
	let x = j*10;
	let y = x+10;
	let res = result.slice(x,y);
	res = Papa.unparse(res);
	allfiles.push(res);
}


	var zip = new JSZip();

	var photoZip = zip.folder("SETS");

	for(let j = 0; j<reslen; j++){
	if(j===0){
		photoZip.file("set1.csv", allfiles[j]);
	}
	if(j===1){
		photoZip.file("set2.csv", allfiles[j]);
	}
	if(j===2){
		photoZip.file("set3.csv", allfiles[j]);
	}
	if(j===3){
		photoZip.file("set4.csv", allfiles[j]);
	}
}


photoZip.generateAsync({type:"blob"})
.then(function (blob) {
    FileSaver.saveAs(blob, "SETS");
});



}



  render() {

 		
  		let lt='<';
    return(
      <div>

      		<div className="father">

      			<Link to = '/' >
			        <div className="round-button">{lt}</div>
			      </Link>
      			<div className="rihanna">
		      		<h3 >Upload upto 4 csv files </h3>    	
		     	</div>

      			<div>
					<ReactFileReader multiple handleFiles={this.handleFiles} fileTypes={'.csv'}>
																    <button className={["button", "button2"].join(' ')}>
																    <span>Upload File1</span>
																    </button>
					</ReactFileReader>
				</div>
				<div>
					<ReactFileReader multiple handleFiles={this.handleFiles} fileTypes={'.csv'}>
																    <button className={["button", "button2"].join(' ')}>
																    <span>Upload File2</span>
																    </button>
					</ReactFileReader>
				</div>
				<div>
					<ReactFileReader multiple handleFiles={this.handleFiles} fileTypes={'.csv'}>
																    <button className={["button", "button2"].join(' ')}>
																    <span>Upload File3</span>
																    </button>
					</ReactFileReader>
				</div>
				<div>
					<ReactFileReader multiple handleFiles={this.handleFiles} fileTypes={'.csv'}>
																    <button className={["button", "button2"].join(' ')}>
																    <span>Upload File4</span>
																    </button>
					</ReactFileReader>
				</div>
			</div>	

  
      	   	
      	<div className="uncle">
      		<div className="nephew">
      		<h3 >Interchange rows and headers by dragging and dropping </h3>
      		</div>
      		<div>
      		 <div onClick={this.writethat} role="presentation" className="nephew">
		      		<button className={["btn", "stripedshadow", "dark"].join(' ')}>
		      		<span>save this </span>
		      		</button>
		     </div>
		     <div onClick={this.downn} role="presentation" className="nephew">
		      		<button className={["btn", "stripedshadow", "dark"].join(' ')}>
		      		<span>Download </span>
		      		</button>
		     </div>
		     
		     </div>
      	</div>
      	

          <Table />
      </div>
      );
  }

}

Drag.propTypes={
    korana: PropTypes.func.isRequired,
    table: PropTypes.shape({
     headings: PropTypes.arrayOf({
                         name: PropTypes.string.isRequired,
                         
                       }).isRequired,

     rows: PropTypes.arrayOf({
                         name: PropTypes.arrayOf(PropTypes.number).isRequired,
                         column: PropTypes.string.isRequired
                         
                       }).isRequired
   }).isRequired
};

function mapStateToProps(state){
    return{
        table:state.drag.table
    };
}

export default connect(mapStateToProps,{korana})(Drag);

