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
    // } else if (response.status === 401) {
    //
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
                page: 0,
                limit: 0
            }
        }
  return request(url + '/tasks', 'POST', filteredData)
}

export const deleteTask = (taskId) => {
    return request(url + '/tasks/' + taskId, 'DELETE')
}

export const changeWorkTimeTask = (taskId, body) => {
    return request(url + '/tasks/' + taskId + '/worktime/', 'PATCH', body)
}

export const changeStatusTask = (taskId, status) => {
    return request(url + '/tasks/' + taskId + '/status/' + status, 'PATCH')
}

export const createOrEditTask = (body) => {
    return request(url + '/tasks/createOrEdit', 'PUT', body)
}


////////////////////////////////// COMMENTS ////////////////////////////////
export const getComments = (tasksId) => {
    return request(url + '/comments/' + tasksId , 'GET')
}

export const createOrEditComment = (body) => {
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
    return request(url + '/users/login' , 'POST', body)
}