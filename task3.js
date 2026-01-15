// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";
import { listUsers } from "./task2.js";


export async function addUser(first_name, last_name, email) {

    //MANDAR HEADERS
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const users = await listUsers();
    const newId = (Math.max(...users.map(user => user.id || 0)) + 1).toString();


    const response = await fetch(getServerURL() + "users", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            id: newId,
            first_name: first_name,
            last_name: last_name,
            email: email

        })
    });


}
