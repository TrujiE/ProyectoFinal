const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
          	profileUser: {}
		},
		actions: {
			setProfile:(data)=>{
				const store = getStore();
				setStore({profileUser: data})
			}
		}
	};
};
export default getState;