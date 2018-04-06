import * as types from './constants'
import _ from 'lodash';

const initialState = {  
    table: {
        headings: [
            {
                name: 'Column 1'
            },
            {
                name: 'Column 2'
            },
            {
                name: 'Column 3'
            },
            {
                name: 'Column 4'
            }
        ],
        rows: [
            {
                name: ['15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','',''],
                column: 'Column 1'
            },
            {
                name: ['15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','',''],
                column: 'Column 2'
            },
            {
                name: ['15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','',''],
                column: 'Column 3'
            },
            {
                name: ['15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','','','15','26','','','','','','','',''],
                column: 'Column 4'
            }

        ]
    }
}


export default function drag(state = initialState, action) {  
    switch (action.type) {
        case types.DRAG:
            return reOrderCols(state, action.draggedCol, action.targetCol)
        case types.DRAGROW:
            return reOrderRows(state, action.draggedRowindex, action.targetRowindex)
        case types.ADDCSV:
            return action.table
        case types.ADDROW:
            return addarow(state,action.index,action.inputarr)
        default:
            return state
    }
}
const reOrderCols = (state, draggedCol, targetCol) => { 

    let colOrder = state.table.headings.map((heading) => heading.name)  
    let columns = state.table.headings.slice()
    let draggedColIndex = colOrder.indexOf(draggedCol.name)
    let targetColIndex = colOrder.indexOf(targetCol.name)
    columns.splice(draggedColIndex, 1)
    columns.splice(targetColIndex, 0, draggedCol)
    let rowOrder = columns.map((col) => {
        // eslint-disable-next-line
        return state.table.rows.filter((row) => {
            if (col.name === row.column) {
            	return row
            }
        })[0]
    })

    
    return { table: { headings: columns, rows: rowOrder } }
}

const reOrderRows = (state,draggedRowindex, targetRowindex) => { 

    let columns = state.table.headings.slice()
    let rowOrder = state.table.rows;


    let draggedRowindexs=draggedRowindex.index;
    let targetRowindexs=targetRowindex.index;
    _.map(rowOrder, row =>{

        let am = row.name;
        let temp = am[draggedRowindexs];
        am[draggedRowindexs]=am[targetRowindexs];
        am[targetRowindexs]=temp;
        

    } )

    return { table: { headings: columns, rows: rowOrder } }
}


const addarow = (state,index,inputarr) => { 
    let columns = state.table.headings.slice()

    let rowz = state.table.rows;
        for(var keyz in rowz){
            rowz[keyz].name[index] = inputarr[keyz];
        }

    
    return { table: { headings: columns, rows: rowz } }

}


