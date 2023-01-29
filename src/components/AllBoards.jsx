import React from "react";
import { ReactComponent as BoardSvg } from "./assets/board.svg";
import { useSelector, useDispatch } from "react-redux";
import * as Boardactions from "../redux/actions/boards";
import { currentBoard } from "./assets/fake";

const AllBoards = () => {
	const boards = useSelector(state => state.boards);
	const dispatch = useDispatch();
	const handleClickonBoard = (id) => {
		dispatch(Boardactions.updateCurrentBoard(id));
	}

	const listItemClasses = "board-name flex items-center p-4 gap-4 mb-3 text-base font-bold rounded-r-full hover:bg-primary-light dark:hover:bg-white  dark:hover:text-accent ";

	return (
		<div className="all-vobaords-container dark:text-white">
			<h2
				className="text-sm pl-4 font-bold text-slate-500 tracking-wide"> ALL BOARDS ({boards.length})</h2>
			<ul className="all-boards mt-3 pr-6">
				{boards.map((board) => (
					<li key={board.id}
						className={listItemClasses + (board.isActive ? "bg-accent text-white" : "text-slate-800 dark:text-white")}
						onClick={() => handleClickonBoard(board.id)}
					>
						<span>
							<BoardSvg />
						</span>
						<span className="board-name-text">
							{board.name}
						</span>
					</li>
				))}
				<li className={listItemClasses + "text-accent bg-white mb-0 sticky bottom-0 fill-accent"}>
					<span>
						<BoardSvg className="fill" />
					</span>
					<span className="board-name-text">
						+ New Board
					</span>
				</li>
			</ul>
		</div>
	)
};

export default AllBoards;
