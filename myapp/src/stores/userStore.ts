import { writable } from 'svelte/store';

export interface User {
  email: string;
}

const initialUser: User = { email: '' };
const userStore = writable(initialUser);

export default userStore;
