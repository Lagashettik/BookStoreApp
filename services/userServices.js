import AsyncStorage from '@react-native-async-storage/async-storage'

export default class UserServices {
    userRegistration = (userData) => {
        return new Promise(async (resolve, reject) => {
            let uid = await this.keyIdGenerater()
            console.log('uid : ' + uid)
            let userDetails = { [uid]: userData }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails)
            }
            await fetch('http://10.0.2.2:8000/users/', requestOptions)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    userLogin = (userData) => {
        return new Promise(async (resolve, reject) => {
            await this.checkUserLogin(userData).then(uid => {
                this.storeUIDToStorage(uid)
                resolve(uid)
            })
                .catch(error => reject(error))
        })
    }

    checkUserLogin = (userData) => {
        return new Promise(async (resolve, reject) => {
            await this.getAllUsers().then(async allUsers => {
                await Object.getOwnPropertyNames(allUsers)
                    .filter(uid => allUsers[uid].emailId == userData.emailId && allUsers[uid].password == userData.password)
                    .map(uid => {
                        if (uid != undefined && uid != null)
                            resolve(uid)
                        else reject('Email or Password incorrect')
                    })
            })
                .catch(error => reject(error))

        })

    }

    getAllUsers = () => {
        return new Promise((resolve, reject) => {
            fetch('http://10.0.2.2:8000/users/')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    keyIdGenerater = () => {
        return '_' + Math.random().toString(36).substring(2);
    }

    storeUIDToStorage = async (uid) => {
        try {
            await AsyncStorage.setItem('uid', uid)
        }
        catch (error) {
            console.log(error)
        }
    }

    getUIDFromStorage = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('uid').then(uid => {
                if (uid != null)
                    resolve(uid)
                else
                    reject("Uid is null, Uid is not present please login or register")
            })
                .catch(error => reject(error.message))
        })

    }
}