import React from 'react'
import _ from 'lodash';
import { DragSource, DropTarget } from 'react-dnd'  
import { pipe } from 'ramda'
import "./Table.css";

const headingSource = {  
    beginDrag(props) {
        return {
            index: props.index
        }
    }
}

const headingTarget = {  
    drop(props, monitor, component) {
        let draggedRowindex = monitor.getItem()
        let temp ={
        	index:component.props.index
        }
        let targetRowindex = temp
        // trigger drag action
        props.drag(draggedRowindex, targetRowindex)
    }
}

function collect(connect, monitor) {  
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function collectDrop(connect, monitor) {  
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}


const Row = ({row,index, connectDropTarget, connectDragSource, isOver, isDragging}) => (
	<tbody style={{
            opacity: isOver ? 0.5 : 1,
            backgroundColor: isOver ? 'yellow' : 'inherit'
        }}>
        
        		{
            connectDropTarget(connectDragSource(
                <tr>
                    {_.map(row, r => <td>{r.name[index]}</td>)}
                </tr>
            ))
        }
      
				
					

	</tbody>
	);



export default pipe(DragSource('row', headingSource, collect), DropTarget('row', headingTarget, collectDrop))(Row)
                            

	