import {DRAG,ADDCSV, DRAGROW,ADDROW} from '../constants';

const kor = (draggedCol, targetCol) =>({
	type: DRAG,
	draggedCol,
	targetCol
});

const dragrowingsmall = (draggedRowindex, targetRowindex) =>({
	type: DRAGROW,
	draggedRowindex,
	targetRowindex
});


const koran = (table) =>({
	type: ADDCSV,
	table
});

const addrow = (index,inputarr) =>({
	type: ADDROW,
	index,
	inputarr
});


export const kora = (draggedCol, targetCol) => (dispatch) =>
		dispatch(kor(draggedCol, targetCol));

export const dragrowing = (draggedRowindex, targetRowindex) => (dispatch) =>
		dispatch(dragrowingsmall(draggedRowindex, targetRowindex));


export const korana = (table) => (dispatch) =>
		dispatch(koran(table));

export const addRow = (index,inputarr) => (dispatch) =>
		dispatch(addrow(index,inputarr));


