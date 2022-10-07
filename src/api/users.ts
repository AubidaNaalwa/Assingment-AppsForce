import axios from "axios";
import { user } from "../components/User";

const USERS_API = 'https://randomuser.me/api/?results=10'

const mapData = (users: { name: { title: any; first: any; last: any; }; email: any; location: { country: any; city: any; street: { name: any; }; }; picture: { medium: any; }; id: { value: any; }; }[]):user[] => users.map((user: { name: { title: any; first: any; last: any; }; email: any; location: { country: any; city: any; street: { name: any; }; }; picture: { medium: any; }; id: { value: any; }; }) => 
    (
        {
            name: `${user.name.title} ${user.name.first} ${user.name.last}`, 
            email: user.email, 
            location: `${user.location.country} ${user.location.city} ${user.location.street.name}`,
            userImage: user.picture.medium ,
            userID: user.id.value + user.id.value,
        }))

export const fetchUsers = async ():Promise<user[]> => {

    try {
        const response = await axios.get(USERS_API);
        const mappedUsers = mapData(response.data.results)
        return mappedUsers;
        
    } catch (error) {
        console.error('failed to fetch from api error ', error)
        return [];
    }
}

