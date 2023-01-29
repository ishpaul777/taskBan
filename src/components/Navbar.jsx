import React from "react";
import { useDispatch } from "react-redux";
import logo from "./assets/logo-kanban.svg";
import BoardsModalSelection from "./BoardsModal";

const Navbar = () => {

	const [MDscreenSize, setScreenSizeMD] = React.useState(true);
	const [selectionModalIsOpen, setOpenModal] = React.useState(false)

	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setScreenSizeMD(true);
			} else {
				setScreenSizeMD(false);
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleOpenModal = () => {
		setOpenModal(!selectionModalIsOpen);
	}

	const dispatch = useDispatch();

	return (
		<nav className="navbar w-full dark:bg-dark-secondary bg-white p-5 flex flex-row justify-between items-center">
			<div className="logo justify-center flex items-center gap-2">
				<img src={logo} alt="logo" className="flex-none inline" />
				<h1 className="logo-text dark:text-white hidden md:inline text-slate-800 text-3xl font-extrabold">
					taskBan
				</h1>
				{/* if  screen size is small then render the all boards section */}
				{MDscreenSize && <BoardsModalSelection
					open={selectionModalIsOpen}
					setOpenModal={handleOpenModal}
				/>}
			</div>
			<div className="board-actions">
				<button type="button" className="add-new-board-btn">
					{/* icon for adding new board */}
				</button>
				<button type="button" className="show-more-actions-btn"
					onClick={() => {
						dispatch({ type: 'SWITCH_THEME' })
					}}
				>
					{/* for showing more options */}
					switch mode
				</button>
			</div>
		</nav>
	)
};

export default Navbar;
