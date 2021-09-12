import { daysInWeek } from "date-fns";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
              profileUser: localStorage.getItem('loginUser') == null ? {} : JSON.parse(localStorage.getItem('loginUser')),
              specialistsAvailable: [],
			  startDate: new Date(),
			  counter: 0,
			  specialists: 0,
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
			setSpecialists:() =>{
				const store = getStore();
				setStore({specialists: store.specialists + 1 })
				},
			setCounter:() =>{
				const store = getStore();
				setStore({counter: store.counter + 1 })
				},
			resetSpecialists:() =>{
				const store = getStore();
				setStore({specialists: 0 })
				},
            
        }
	};
};
export default getState;