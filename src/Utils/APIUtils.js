import { ACCESS_TOKEN, API_URL } from '../index.js';
import axios from 'axios';
const fetch = require('node-fetch');

const request = (options) => {
    const headers = new fetch.Headers({
        'Content-Type' : 'application/json',
    })
    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response => response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

const download = (options) => {
    const headers = new fetch.Headers({ 
        'Content-Type' : 'application/json',
        'Origin': 'localhost:80'
    })
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url)
        .then(response => {
            var filename = response
                .headers.get('Content-Disposition')
                .split('=')[1].replace(/['"]+/g, '');
            response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
        });
    })
}

export function login(loginRequest) {
    return request({
        url: API_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    })
};

export function fetchGroups() {
    return request({
        url: API_URL + "/groups",
        method: 'GET'
    })
}

export function removeGroup(id) {
    return request({
        url: API_URL + `/group/${id}`,
        method: 'DELETE'
    })
}

export function editGroup(editGroupRequest) {
    return request({
        url: API_URL + (editGroup.id)?  `/group/${editGroup.id}`: `/group`,
        method: (editGroup.id)? 'PUT' : 'POST',
        body: JSON.stringify(editGroupRequest)
    })
}

export function fetchGroup(id) {
    return request({
        url: API_URL + `/group/${id}`,
        method: 'GET'
    })
}

export function fetchDocument(name) {
    return download({
        url: API_URL + `/downloadFile/${name}`,
        method: 'GET'
    })
}
