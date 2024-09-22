<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom w-100">
    <h1 class="course-title">
      <span class="text-muted mr-3">{{ course.breadcrump }}</span> / 
      <span class="mx-3">{{ course.breadcrump_category }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['course'],
};
</script>

<style scoped>
.course-title {
  font-size: 1.5rem;
  width: 100%;
}

@media (max-width: 768px) {
  .course-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 576px) {
  .course-title {
    font-size: 1.5rem;
  }
}
</style>
