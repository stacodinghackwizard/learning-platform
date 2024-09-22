<template>
  <div class="course-right-section">
    <div class="course-card">
      <CourseImage  />
      <PriceInfo v-if="course" :courseInclude="course" />
      <PurchaseButtons/>
      <CourseInclude  v-if="course" :courseInclude="course"/>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
import CourseImage from './CourseImage.vue';
import PriceInfo from './PriceInfo.vue';
import PurchaseButtons from './PurchaseButtons.vue';
import CourseInclude from './CourseInclude.vue';
import { defineComponent } from 'vue';

export default {
    props: ['course'],
    
  components: {
    CourseImage,
    PriceInfo,
    PurchaseButtons,
    CourseInclude,
  },
  data() {
    return {
        userCourses: [],
        currentWeek: 1
    };
  },
  mounted() {
    this.userCourses = this.course.user_courses;
    console.log('this.course', this.course);
  }
};
</script>

<style scoped>
@import "../assets/dist/css/cd-responsive.css";
@import "../assets/dist/css/course.css";

.buy-btn{
    /* padding-left: 20px !important;
    padding-right: 20px !important; */
    /* width: 70%; */
}
a:hover {
  text-decoration: none !important;
}
.accordion-button.locked {
  color: #6c757d;
  cursor: not-allowed;
}

.accordion-button.locked:hover {
  background-color: #f8f9fa;
}

.accordion-button.locked .fa-lock {
  margin-left: 10px;
  color: #6c757d;
}

.info-tag p, .info-tag i{
    color: black !important ;
}
.font-20{
  font-size: 20px;
  color: #6a6f73;
}

@media screen and (max-width: 576px) {
  .nav.nav-tabs {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .instructor .instructor-img img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    margin-bottom: 10px;
  }

  .instructor-text {
    text-align: center;
  }

  .instructor-icon {
    width: fit-content;
    margin: auto;
    margin-bottom: 30px;
  }

  .course-description {
    margin: 20px 0px;
    line-height: 2;
    font-size: 15px;
  }
}

.course-content {
  font-family: Arial, sans-serif;
  max-width: 100%;
  margin: 0 auto;
}

.expand-all {
  color: #5624d0;
  text-decoration: none;
  float: right;
}

.accordion-item {
  border: none;
  border-bottom: 1px solid #d1d7dc;
}

.accordion-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 16px 0;
  border: none;
  background-color: white;
  box-shadow: none;
  position: relative;
}

.accordion-button::after {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0;
  margin-right: auto;
  order: -1;
}

.accordion-button:not(.collapsed) {
  background-color: white;
  color: inherit;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
}

.week-title {
  font-weight: bold;
  margin-left: 24px;
  padding-left: 20px;
}

.week-progress {
  display: flex;
  align-items: center;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke: #5624d0;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart .percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}

.accordion-body {
  padding: 0 0 16px 48px;
}

.lecture-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.lecture-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.lecture-icon {
  width: 20px;
  height: 20px;
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lecture-icon i {
  font-size: 16px;
  color: #6a6f73;
}

.lecture-title {
  flex-grow: 1;
  font-size: 14px;
}

.lecture-duration {
  color: #6a6f73;
  margin-right: 16px;
  font-size: 14px;
}

.lecture-completed {
  color: #5624d0;
}
.radius{
  border-radius: 20px !important;
}
</style>