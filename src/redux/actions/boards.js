import * as types from '../types/boards';

const { ADD_BOARD, DELETE_BOARD, UPDATE_BOARD, UPDATE_CURRENT_BOARD } = types;

export const addBoard = (board) => {
	return {
		type: ADD_BOARD,
		payload: board,
	};
}

export const deleteBoard = (id) => {
	return {
		type: DELETE_BOARD,
		payload: id,
	};
}

export const updateBoard = (board) => {
	return {
		type: UPDATE_BOARD,
		payload: board,
	};
}

export const updateCurrentBoard = (id) => {
	return {
		type: UPDATE_CURRENT_BOARD,
		payload: id,
	};
}
