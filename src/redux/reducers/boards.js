import data from '../data.json';
import * as types from '../types/boards';

const { ADD_BOARD, DELETE_BOARD, UPDATE_BOARD, UPDATE_CURRENT_BOARD } = types;

const initialState = data.boards;
export default function boardsReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_BOARD: {
			return [...state, action.payload];
		}
		case DELETE_BOARD: {
			return state.filter((board) => board.id !== action.payload);
		}
		case UPDATE_CURRENT_BOARD: {
		 return state.map((board) => {
				if (board.id === action.payload) {
					return { ...board, isActive: true };
				}
				return { ...board, isActive: false };
			});
		}
		case UPDATE_BOARD: {
			return state.map((board) => {
				if (board.id === action.payload.id) {
					return action.payload;
				}
				return board;
			});
		}
		default: {
			return state;
		}
	}
};
