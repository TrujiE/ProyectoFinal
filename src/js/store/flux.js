const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
              profileUser: {},
              startDate: new Date(),
		},
		actions: {
			setProfile:(data)=>{
				const store = getStore();
				setStore({profileUser: data})
            },
            setCalendar:(date) =>{
                  setStore({startDate: date})
            }
        }
	};
};
export default getState;