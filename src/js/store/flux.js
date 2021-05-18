const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
              profileUser: {},
              specialistsAvailable: [],
			  startDate: new Date(),
			  counter: 0,
              especialist: []
		},
		actions: {
			setProfile:(data)=>{
				const store = getStore();
				setStore({profileUser: data})
            },
			setCalendar:(date) =>{
				const store = getStore();
				setStore({startDate: date})
				},
			setAvailable:(data) =>{
				const store = getStore();
				setStore({specialistsAvailable: data})
				},
			setCounter:() =>{
				const store = getStore();
				setStore({counter: store.counter + 1 })
				},
            
        }
	};
};
export default getState;