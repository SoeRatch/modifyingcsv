import React from 'react'
import _ from 'lodash';
import "./Table.css";
import { addRow } from './actions/act'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class RowEdit extends React.Component{
	state={
		isinput: true,
		inputarr: []
	}

	changetoinp = () =>{
 		let ins = this.props.index;
		let rowz = this.props.row;
		let res=[];

		for(var keyz in rowz){
			res.push(rowz[keyz].name[ins])
		}


		this.setState({
			...this.state,
			inputarr: res,
			isinput: !this.state.isinput
		});
 	}


 	onChange = e => {
 		let i = e.target.id;
 		let res = this.state.inputarr;
 		res[i] = e.target.value;

 		this.setState({
		...this.state,
		inputarr:res
	});

 }

 onSubmit =(e) =>{
 	e.preventDefault();
		let index=this.props.index;
		let inputarr=this.state.inputarr;
		this.props.addRow(index,inputarr);
		this.setState({
			...this.state,
			isinput: !this.state.isinput
		});
	};


	render(){
		const row = this.props.row;
		const index = this.props.index;
		const isinp = this.state.isinput;
		const inputarr = this.state.inputarr;
		
		return(

				<tbody >
				        
				                { 
							isinp? <tr>
				                    {_.map(row, r => <td>{r.name[index]}</td>)}
				                    
				                    	<div onClick={this.changetoinp} className="editbutton" role="presentation">
											  <span><i className="fa fa-pencil" /></span>
										</div>
									
				                </tr>:
				                <tr>
				                	{_.times(row.length, j => 
				                		<td><input
				                			className="inpa"
											type="text"  
											id={j}
											name={inputarr[j]}
											value={inputarr[j]}
											placeholder={inputarr[j]}
											onChange={this.onChange}
										/></td>
                                  
                                )}
				                    	<div  className="editbutton" onClick={this.onSubmit}>
											  <span> <i className="fa fa-floppy-o" /></span>
										</div>
									
				                </tr>

				            }

					</tbody>

			);
	}
}

RowEdit.propTypes={
    addRow: PropTypes.func.isRequired
};
                            
export default connect(null, {addRow})(RowEdit);
	