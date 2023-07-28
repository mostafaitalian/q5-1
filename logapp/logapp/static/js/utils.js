

export const devUrl = `http://127.0.0.1:8000/`
export const proUrl = `http://www.digitecxerox.org/`
export function getToken(data) {
    return fetch(`${devUrl}api/token/`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).catch(error => console.log('error', error))

}
export function getStore(store_id, token) {
    return fetch(`${devUrl}store/api/store/${store_id}`, {
        headers: {
            Authorization: `JWT ${token}`
        },
    })
        .then(
            res => res.json()
        )
}

export function getEngineer(engineer_id, token) {
    return fetch(`${devUrl}engineer/api/engineer/${engineer_id}`, {
        headers: {
            Authorization: `JWT ${token}`
        },
    })
        .then(
            res => res.json()
        )
}

export function getCall(call_id, token) {
    return fetch(`${devUrl}machine/api/call/${call_id}`, {
        headers: {
            Authorization: `JWT ${token}`
        }
    })
        .then(
            res => res.json()
        )
}


export function getCurrentUser(username) {
    return fetch(`${devUrl}users/api/current-user3/${username}/`,
     {
        mode: 'cors',
        credentials: 'same-origin',
        referrerPolicy:"origin",
        headers: {
            
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
    })
        .then(
            res => res.json()
        )
}