const url = 'http://93.95.97.34/api'

const request = async (url, method = 'GET', body) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    });
    return await response.json();
}

// ПОЛУЧЕНИЕ СПИСКА ЗАДАЧ
export const getFilteredTasks = (data) => {
    const filteredData = {
        "filter": {
            "query": "",
            "assignedUsers": [
                // "string"
            ],
            "userIds": [
                // "string"
            ],
            "type": [
                // "task"
            ],
            "status": [
                // "opened"
            ],
            "rank": [
                // "low"
            ]
        },
        "page": 0,
        "limit": 0
    }
  return request(url + '/tasks', 'POST', filteredData).then(movies => setTaskss(movies));
}












// export const getEvents = () => {
//     return request(url);
// }
//
// export const addEvent = (data) => {
//     const eventData = {
//         ...data,
//         favorite: false,
//         archive: false
//     }
//     return request(url, 'POST', eventData);
// }
//
// export const editEvent = (data) => {
//     return request(url, 'PUT', data);
// }
//
// export const deleteEvent = (id) => {
//     return request(url + '/' + id, 'DELETE');
// }
//
// export const clearArchive = () => {
//     return request(`${url}/archive/delete`, 'DELETE')
// }

