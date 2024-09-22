<template>
  <div class="user-dashboard">
    <h1>{{ user.name }}'s Dashboard</h1>
    <p>Email: {{ user.email }}</p>

    <div class="dashboard-metrics">
      <h3>Dashboard Metrics</h3>
      <p>Total Courses: {{ user.dashboard.totalCourses }}</p>
      <p>Completed Courses: {{ user.dashboard.completedCourses }}</p>
      <p>Hours Spent: {{ user.dashboard.hoursSpent }}</p>
    </div>

    <div class="enrolled-courses">
      <h3>Enrolled Courses</h3>
      <ul>
        <li v-for="course in enrolledCoursesDetailed" :key="course.id">
          {{ course.title }} - Progress: {{ course.progress }}%
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      user: {},
      enrolledCourses: [],
      enrolledCoursesDetailed: []
    };
  },
  async created() {
    const userId = this.$route.params.id;
    const userResponse = await api.getUser(userId);
    this.user = userResponse.data;
    this.enrolledCourses = this.user.enrolledCourses;

    // Fetch course details for each enrolled course
    for (const course of this.enrolledCourses) {
      const courseResponse = await api.getCourse(course.courseId);
      this.enrolledCoursesDetailed.push({
        ...courseResponse.data,
        progress: course.progress
      });
    }
  }
};
</script>

<style scoped>
/* Add your custom styles for the user dashboard */
.user-dashboard {
  padding: 20px;
}
.enrolled-courses ul {
  list-style-type: none;
  padding: 0;
}
</style>
