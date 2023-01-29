import React from "react"
import { useSelector } from "react-redux";
import AllBoards from "./AllBoards";
import SwitchMode from "./SwitchMode";
import ChevronDown from './assets/chevron-down.svg'
import ChevronUp from './assets/chevron-up.svg'

const BoardsModal = ({ open, setOpenModal }) => {
	const currentBoard = useSelector(state => state.boards.find(board => board.isActive));
	return (
		<>
			<div className="selectedBoard dark:text-white flex justify-between items-center gap-2 cursor-pointer hover:rounded-lg hover:dark:bg-dark-primary hover:bg-stone-200 p-2 pr-3 pl-5 text-slate-800 text-2xl font-bold"
				onClick={() => setOpenModal()}>
				{currentBoard.name}
				<span>
					<img src={open ? ChevronUp : ChevronDown} alt="cheveron down icon" />
				</span>
				{
					<div className={`allBoards-modal modal pt-2 dark:bg-dark-secondary ${open && "active"}`}>
						<SwitchMode />
						<AllBoards />
					</div>
				}
			</div>
		</>
	)
};

export default BoardsModal;
