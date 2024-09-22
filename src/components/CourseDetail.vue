<template>
  <div class="course-detail">
    <div v-if="loading">Loading course...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else-if="course">
      <h2>{{ course.title }}</h2>
      <p>{{ course.description }}</p>
      <!-- Add more course details here -->
    </div>
    <div v-else>No course found</div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      course: null,
      loading: true,
      error: null
    };
  },
  created() {
    this.fetchCourse();
  },
  methods: {
    async fetchCourse() {
      const courseId = this.$route.params.id;
      try {
        const response = await api.getCourse(courseId);
        this.course = response.data;
      } catch (err) {
        this.error = err.response ? err.response.data : err.message;
        console.error('Error fetching course data:', err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.course-detail {
  padding: 20px;
}
</style>
