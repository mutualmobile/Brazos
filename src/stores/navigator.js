import { store } from 'rfx-core';
import NavigationStore from './NavigationStore'; 
let nav = new NavigationStore();

export default store.setup({
	nav: nav
});

export {nav};