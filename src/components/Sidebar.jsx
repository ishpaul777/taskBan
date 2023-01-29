import React, { useState } from "react"

const Sidebar = () => {
	const [stateOpen, setStateOpen] = useState(false);

	if (!stateOpen) {
		return (
			<aside className="sidebar-open-toggle">
				<button onClick={() => setStateOpen(true)}>Open</button>
			</aside>
		);
	}

	return (
		<aside className="sidebar">
			<div className="board-list">
				{/* list of all boards */}
				{/* button for adding new board */}
			</div>
			<div>
				{/* for light/dark mode */}
				{/* hide sidebar */}
			</div>
		</aside>
	)
};

export default Sidebar;
