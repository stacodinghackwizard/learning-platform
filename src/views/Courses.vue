<template>
  <div class="courses-list">
    <CourseCard 
      v-for="course in userCourses" 
      :key="course.id" 
      :course="course"
    />
    <h1>Your Courses</h1>
    <div v-for="course in userCourses" :key="course.id" class="course-accordion">
      <details>
        <summary>{{ course.title }}</summary>
        <div v-if="course.content">
          <div v-for="(week, index) in course.content" :key="index" class="week-content">
            <h3>{{ week.title }}</h3>
            <ul>
              <li v-for="(lecture, lectureIndex) in week.lectures" :key="lectureIndex">
                {{ lecture.title }}
                <span v-if="lecture.duration">({{ lecture.duration }})</span>
                <span v-if="lecture.type">({{ lecture.type }})</span>
                <span v-if="lecture.completed !== undefined">
                  {{ lecture.completed ? '✓' : '○' }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>No content available for this course.</div>
      </details>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CourseCard from '@/components/CourseCard.vue';
import api from '@/services/api';

export default defineComponent({
  components: {
    CourseCard
  },
  data() {
    return {
      userCourses: []
    };
  },
  created() {
    const userId = 1; // Replace with actual user ID
    api.getUserCourses(userId).then(courses => {
      this.userCourses = courses;
    });
  }
});
</script>

<style scoped>
.course-accordion {
  margin-bottom: 1rem;
}

.week-content {
  margin-left: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 1rem;
}
</style>
