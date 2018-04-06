import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColumnEdit from './ColumnEdit'; 
import RowEdit from './RowEdit';
import PropTypes from 'prop-types';
import _ from 'lodash';
import "./Table.css";
import {Link} from 'react-router-dom';

class EditTable extends Component{



  render() {
    // eslint-disable-next-line 
  	const ind = parseInt(this.props.match.params.paramt);
    // eslint-disable-next-line 
  	const table = this.props.table;
    const filenumber = ind/10+1;
    let lt='<';
    return(
       <div className="grandparent">
            <Link to = '/drag' >
              <div className="round-button">{lt}</div>
            </Link>
             <div className="parentt">
             <div>FILE {filenumber}</div>
					    <div className="containert">
					             

                                  <table>
                                      <thead>
                                          <tr className="header">

                                              {_.map(table.headings, column => 
                                                                  <ColumnEdit key={column.name} column={column} />
                                                            
                                                          )}

                                             
                                          </tr>
                                      </thead>
                                      



                                               {_.times(10, j =><RowEdit key={j+ind} index={j+ind} row={table.rows} />
                                                            
                                                )}
                                       




                                      
                                  </table>

					    	</div>
			</div>

		</div>


      );
  }


}


EditTable.propTypes={
    table: PropTypes.shape({
     headings: PropTypes.arrayOf({
                         name: PropTypes.string.isRequired,
                         
                       }).isRequired,

     rows: PropTypes.arrayOf({
                         name: PropTypes.arrayOf(PropTypes.number).isRequired,
                         column: PropTypes.string.isRequired
                         
                       }).isRequired
   }).isRequired,
    match: PropTypes.shape({
		params:PropTypes.shape({
			paramt:PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

function mapStateToProps(state){
    return{
        table:state.drag.table
    };
}

export default connect(mapStateToProps)(EditTable);