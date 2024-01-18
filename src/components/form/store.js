import { writable } from 'svelte/store';
import uniqid from 'uniqid';

export const formData = writable({
    uid: uniqid(),
    name: "",
    batch: "",
    program: "",
    phone: "",
    email: "",
    domain: "",
    sports: "",
    tnom: 1,
    payment: ""
});