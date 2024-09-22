import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',  // Changed from 'http://localhost:3000' to '/api'
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getCourses() {
    return apiClient.get('/courses');
  },
  getCourse(id) {
    return apiClient.get(`/courses/${encodeURIComponent(id)}`);
  },
  getUsers() {
    return apiClient.get('/users');
  },
  getUser(id) {
    return apiClient.get(`/users/${encodeURIComponent(id)}`);
  },
  getUserCourses(userId) {
    return apiClient.get(`/users/${userId}`).then(response => {
      const user = response.data;
      return apiClient.get('/courses').then(coursesResponse => {
        const allCourses = coursesResponse.data;
        return allCourses.filter(course => user.enrolledCourses.includes(course.id));
      });
    });
  }
};
