

export default class userServices{
    userRegistration = (userData) =>{
        return new Promise((resolve,reject) => {
            const requestOptions ={
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }

            fetch('http://10.0.2.2:8000/users/', requestOptions)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    userLogin = (userData) =>{
        return new Promise((resolve, reject) => {
            
        })
    }
}