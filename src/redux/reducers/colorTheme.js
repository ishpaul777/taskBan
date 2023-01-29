const SWITCH_THEME = 'SWITCH_THEME';

const initialState = localStorage.getItem('isDark') || window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;

const darkThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_THEME:
			localStorage.setItem('isDark', !state);
			return !state;
		default:
			return state;
	}
};

export const switchTheme = () => {
	return {
		type: SWITCH_THEME,
	};
};

export default darkThemeReducer;
