import { writable } from 'svelte/store';

export interface User {
  email: string;
  id: string | null;
}

const initialUser: User = { email: '' , id: null};
const userStore = writable(initialUser);

export default userStore;
