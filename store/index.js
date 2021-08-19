export const state = () => ({
	pageTitle: null,
	currentTab: null,
});

export const mutations = {
	setPageTitle(state, title) {
		state.pageTitle = title;
	},
	setCurrentTab(state, tab) {
		state.currentTab = tab;
	}
}