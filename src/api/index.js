import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://bibliotekagestalt.pl//wp-json/wp/v2/',
})

export const endpoints = {
  posts: 'posts/'
}