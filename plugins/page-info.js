export default ({ app }, inject) => {
	inject('pageInfo', (that, title, tab) => {
		that.$store.commit('setPageTitle', title);
		that.$store.commit('setCurrentTab', tab); 
	});
	inject('resetPageInfo', (that) => {
		that.$store.commit('setPageTitle', null);
		that.$store.commit('setCurrentTab', null);
	});
}