import React from 'react'  
import { connect } from 'react-redux'
import Column from './Column'  
import Row from './Row'
import { kora, dragrowing } from './actions/act'
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import _ from 'lodash';
import "./Table.css";
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Table extends React.Component {


  render() {
     const table = this.props.table;
    const kora = this.props.kora;
    const dragrowing = this.props.dragrowing;

    return(
      <div className="grandparent">
      
      <div className="parent">
        <div className="container">
      <div className="par1">File 1 </div>
      <NavLink to={`/edit/0`} ><div className="par2"><div className="plus"></div></div></NavLink>

      
      
              <table>
            <thead>
                <tr className="header">

                    {_.map(table.headings, column => 
                                        <Column key={column.name} column={column} drag={kora} />
                                  
                                )}

                   
                </tr>
            </thead>
            



                     {_.times(10, j => <Row key={j} index={j} row={table.rows} drag={dragrowing}/>
                                  
                                )}
             




            
        </table>
    </div>
    </div>
 


<div className="parent">
      <div className="container">
      <div className="par1">File 2 </div>
      

        <Link to={`/edit/10`} ><div className="par2"><div className="plus"></div></div></Link>
      
    <table className="tab">
        <thead>
            <tr className="header">

                {_.map(table.headings, column => 
                                    <Column key={column.name} column={column} drag={kora} />
                              
                            )}

               
            </tr>
        </thead>
        

                                {_.times(10, j => <Row key={j+10} index={j+10} row={table.rows} drag={dragrowing}/>
                              
                            )}


        
    </table>
</div>
    </div>


<div className="parent">
      <div className="container">
            <div className="par1">File 3 </div>
      <div className="par2">
            <Link to={`/edit/20`} ><div className="par2"><div className="plus"></div></div></Link>

        
      </div>

    <table className="tab">
        <thead>
            <tr className="header">

                {_.map(table.headings, column => 
                                    <Column key={column.name} column={column} drag={kora} />
                              
                            )}

               
            </tr>
        </thead>
        

                {_.times(10, j => <Row key={j+20} index={j+20} row={table.rows} drag={dragrowing}/>
                              
                            )}


        
    </table>
    </div>
    </div>


<div className="parent">
      <div className="container">
            <div className="par1">File 4 </div>
            <Link to={`/edit/30`} ><div className="par2"><div className="plus"></div></div></Link>

    <table className="tab">
        <thead>
            <tr className="header">

                {_.map(table.headings, column => 
                                    <Column key={column.name} column={column} drag={kora} />
                              
                            )}

               
            </tr>
        </thead>
        

                {_.times(10, j => <Row key={j+30} index={j+30} row={table.rows} drag={dragrowing}/>
                              
                            )}




        
    </table>
    </div>
    </div>

      </div>
      );
  }

}






Table.propTypes={
    kora: PropTypes.func.isRequired,
    dragrowing: PropTypes.func.isRequired,

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

export default connect(mapStateToProps, {kora,dragrowing})(DragDropContext(HTML5Backend)(Table));

