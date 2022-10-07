import { makeAutoObservable } from "mobx";
import { fetchUsers } from "../api/users";
import { user } from "../components/User";

interface UserStore {
    users: user[],
    filteredUsers: user[],
    filters: user
}

type userKeys  = keyof user

// MobX implementation
class UserStore {
  users: user[] = [];
  filteredUsers: user[] = [];
  filters:user = {
    name: '',
    email: '',
    location: '', 
    userID: '',
    userImage: ''
  }
  constructor() {
    makeAutoObservable(this);
    this.loadUsers();
  }

  async loadUsers() { 
    this.users = await fetchUsers();
  }

  addNewUser(user: user) { 
    this.users.push(user)
  }

  get filterIsOn() { 
    return Object.values(this.filters).every(filter => filter === null || filter === '');
  }
  get filteredUseres () {
    return this.filterIsOn ? this.users :this.filteredUsers ;
  }

  filterBy(key:userKeys , value='') {
    this.filters[key] = value;
    this.filteredUsers = this.users.filter(user => user[key].includes(value.trim()))
  }
  
  deleteUser(userToDelete:user) {
    this.users = this.users.filter(user => !(user.userID === userToDelete.userID && user.email === userToDelete.email))
  }

  updateUser(userToUpdate:user) { 
    const index = this.users.findIndex(user => user.userID === userToUpdate.userID);
    this.users[index] = userToUpdate
  }
}

export const userStore = new UserStore();
