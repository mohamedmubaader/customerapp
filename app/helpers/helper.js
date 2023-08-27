
const BASE_URL = "http://127.0.0.1:3000/"

//all users
export const getCustomers = async () => {
    const res = await fetch(`http://127.0.0.1:3000/api/customers`);
 
    const customers = await res.json()

    return customers   
}

//single user
export const getCustomer = async (customerId) => {
    const res = await fetch(`${BASE_URL}/api/customers/${customerId}`);
    //await new Promise((resolve) => setTimeout(resolve, 3000)) // wait 3 second
    const customer = await res.json()
    if (customer) return customer
    else
    return {}
}

//posting a new user
export const addCustomer = async (formData) => {
    try {
        const Options = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        }
        const res = await fetch(`${BASE_URL}api/customers`,Options);
        //await new Promise((resolve) => setTimeout(resolve, 3000)) // wait 3 second
        const customer = await res.json()
        return customer
        
    } catch (error) {
        return error
    }
}

//Updating a new user

export async function updateCustomer(customerId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        const res = await fetch(`${BASE_URL}/api/customers/${customerId}`, Options);
        //await new Promise((resolve) => setTimeout(resolve, 3000)) // wait 3 second
        const customer = await res.json();
        return customer;

    } catch (error) {
        return error;
    }
}

//Deleting a user

export async function deleteCustomer(customerId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        const res = await fetch(`${BASE_URL}/api/customers/${customerId}`, Options);
        //await new Promise((resolve) => setTimeout(resolve, 3000)) // wait 3 second
        const customer = await res.json();
        return customer;

    } catch (error) {
        return error;
    }
}

