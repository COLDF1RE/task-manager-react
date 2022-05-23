const url = 'http://93.95.97.34/api'

const request = async (url, method = 'GET', body) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    });
    // if (response.status === 200) {
        return await response.json();
    // }
}


///////////////////////// TASKS ///////////////////////////////

export const getFilteredTasks = (filterTasks) => {
    let filteredData
        if(filterTasks) {
            filteredData = {
                filter: filterTasks,
                page: 0,
                limit: 0
            }
        } else {
            filteredData = {
                filter: {},
                // filter: {
                //     query: '',
                //     assignedUsers: [],
                //     userIds: [],
                //     type: [],
                //     status: [],
                //     rank: []
                // },
                page: 0,
                limit: 0
            }
        }
  return request(url + '/tasks', 'POST', filteredData)
}


////////// DELETE TASK /////////////
export const deleteTask = (taskId) => {
    return request(url + '/tasks/' + taskId, 'DELETE')
}


////////// WORKTIME TASK /////////
export const changeWorkTimeTask = (taskId, body) => {
    // {
    //     "timeInMinutes": 0,
    //     "comment": "string",
    //     "currentUser": "string"
    // }
    return request(url + '/tasks/' + taskId + '/worktime/', 'PATCH', body)
}


/////////// STATUS TASK /////////
export const changeStatusTask = (taskId, status) => {
    return request(url + '/tasks/' + taskId + '/status/' + status, 'PATCH')
}


////////// ADD & EDIT TASK /////////////
export const changeTimeWorkTask = (taskId, body) => {
    const body1 = {
        "timeInMinutes": 0,
        "comment": "string",
        "currentUser": "string"
    }
    return request(url + '/tasks/' + taskId + '/worktime', 'PATCH', body1)
}

////////// ADD & EDIT TASK/////////////
export const createOrEditTask = (body) => {
    const body1 =
        {
            "id": "string",
            "userId": "string",
            "assignedId": "string",
            "title": "string",
            "description": "string",
            "type": "task",
            "dateOfCreation": "2022-05-07T14:48:59.879Z",
            "dateOfUpdate": "2022-05-07T14:48:59.879Z",
            "timeInMinutes": 0,
            "status": "opened",
            "rank": "low"
        }
    return request(url + '/tasks/createOrEdit', 'PUT', body)
}

// export const editTask = (body) => {
//     const body1 =
//         {
//             "id": "string",
//             "userId": "string",
//             "assignedId": "string",
//             "title": "string",
//             "description": "string",
//             "type": "task",
//             "dateOfCreation": "2022-05-07T14:48:59.879Z",
//             "dateOfUpdate": "2022-05-07T14:48:59.879Z",
//             "timeInMinutes": 0,
//             "status": "opened",
//             "rank": "low"
//         }
//     return request(url + '/tasks/createOrEdit', 'PUT', body1)
// }
///////////////////////////////////


////////////////////////////////// COMMENTS ////////////////////////////////
export const getComments = (tasksId) => {
    return request(url + '/comments/' + tasksId , 'GET')
}

export const createOrEditComment = (body) => {
    const body1=
        {
            "id": "string",
            "taskId": "string",
            "userId": "string",
            "text": "string"
        }
    return request(url + '/comments/createOrEdit', 'PUT', body)
}

export const deleteComment = (commentId) => {
    return request(url + '/comments/' + commentId, 'DELETE')
}




/////////////////////////////////// USERS //////////////////////////////////
export const getAllUsers = () => {
    return request(url + '/users/all' , 'GET')
}

export const editUser = (body) => {
    return request(url + '/users/edit' , 'PUT', body)
}

export const loginUser = (body) => {
    // const body =
    //     {
    //         "login": "string",
    //         "password": "string"
    //     }
    return request(url + '/users/login' , 'POST', body)
}



// export const addEvent = (data) => {
//     const eventData = {
//         ...data,
//         favorite: false,
//         archive: false
//     }
//     return request(url, 'POST', eventData);
// }


