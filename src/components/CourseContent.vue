<script setup>
import "../assets/dist/css/cd-bootstrap.css";
import "../assets/dist/css/cd-custom.css";
import "../assets/dist/css/cd-responsive.css";
import "../assets/dist/css/cd-style.css";
import "../assets/dist/css/cd-all.min.css";

</script>
<template>
  <section class="course-decription">
    <div class="container-fluid">
      <div class="row">
        <div class="mx-0 px-0 col-lg-12 col-md-12 col-sm-12 order-2 order-lg-1">
          <div class="course-left-side">
            <div class="course-content px-0 mx-0">
              <div class="accordion px-0 mx-0" id="courseAccordion" v-if="course.content">
               
                <div class="accordion-item px-0 mx-0 w-100" v-for="(week, index) in course.content" :key="index">
                    <h2 class="accordion-header px-0 mx-0" :id="'heading' + index">
                        <button class="accordion-button" :class="{ collapsed: index !== 0, locked: isWeekLocked(index) }" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index" :disabled="isWeekLocked(index)">
                        <span class="week-title">
                            Week {{week.week}} - {{ week.title }}
                            <i v-if="isWeekLocked(index)" class="fas fa-lock ml-2"></i>
                        </span>
                            <span class="week-progress">
                                <svg width="30" height="30" viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle-bg"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path class="circle"
                                    :stroke-dasharray="`${getWeekCompletionPercentage(week)}, 100`"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">{{ getWeekCompletionPercentage(week) }}%</text>
                                </svg>
                            </span>
                        
                        </button>
                    </h2>
                    <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 && !isWeekLocked(index) }" :aria-labelledby="'heading' + index" data-parent="#courseAccordion">
                        <div class="accordion-body">
                        <ul class="lecture-list">
                            <li v-for="(lecture, lectureIndex) in week.lectures" :key="lectureIndex" class="lecture-item">
                            <span class="lecture-icon">
                                <i :class="[getLectureIconClass(lecture), lecture.completed ? 'text-secondary' : 'text-dark']"></i>
                            </span>
                            <span class="lecture-title" :class="{'text-secondary': lecture.completed}"> {{ lecture.title }}
                                <span v-if="lecture.completed !== undefined" class="px-2 lecture-completed">
                                    <i :class="lecture.completed ? 'fas fa-check-circle' : ''"></i>
                                </span>

                            </span>
                            <span class="lecture-duration" v-if="lecture.duration">{{ lecture.duration }}</span>
                        
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import { defineComponent } from 'vue';
export default {
  props: ['course'],
  data() {
    return {
        userCourses: [],
        currentWeek: 1
    }
  },
  
  methods: {
   isWeekLocked(weekIndex) {
      return weekIndex + 0 > this.currentWeek;
    },
    getWeekCompletionPercentage(week) {
      if (!week.lectures || week.lectures.length === 0) return 0;
      const completedLectures = week.lectures.filter(lecture => lecture.completed).length;
      const percentage = (completedLectures / week.lectures.length) * 100;
      return Math.round(percentage);
    },
    getLectureIconClass(lecture) {
      if (lecture.type === 'video') {
        return 'fas fa-play-circle';
      } else if (lecture.type === 'document' || lecture.title.toLowerCase().includes('read')) {
        return 'fas fa-file-alt';
      } else if (lecture.type === 'quiz' || lecture.title.toLowerCase().includes('question')) {
        return 'fas fa-question-circle';
      } else if (lecture.type === 'assignment' || lecture.title.toLowerCase().includes('project')) {
        return 'fas fa-file';
      }
       else {
        // Default icon for unknown types
        return 'fas fa-file';
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/dist/css/course.css";
</style>