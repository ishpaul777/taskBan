import React, { useState } from "react";

function ToggleButton() {
	const [isToggled, setToggled] = useState(false);

	return (
		<label
			className="relative inline-block w-20 h-8 bg-accent cursor-pointer rounded-full"
			onClick={() => setToggled(!isToggled)}
		>
			<input
				type="checkbox"
				className="absolute opacity-0 w-0 h-0"
				checked={isToggled}
			/>
			<span
				className={`relative block w-10 h-10 rounded-full transition-all duration-300 bg-white ${isToggled ? "left-20" : "left-0"}`}
			/>
		</label>
	);
}

export default ToggleButton;
