<template>
    <div class="course-includes">
        <h4 class="px-3 pt-3">{{courseInclude.include_title}}</h4>
        
        <div class="enrol" v-for="(include, index) in courseInclude.includes" :key="index">
            <div class="icon text-align-center d-flex align-items-center gap-2 cursor-pointer">
                
                <i  :class="getIncludeIconClass(include)" class="mr-2 fw-700"></i>
                <h4>{{include}}</h4>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
 
  props: ['courseInclude'],
    data() {
        return {
            userCourses: [],
            // currentWeek: 1
        }
    },
    created(){
        console.log('this.courseInclude', this.courseInclude);
    },
  methods: {
   getIncludeIconClass(include) {
      if (include.type === 'video' || include.toLowerCase().includes('video')) {
        return 'fas fa-play-circle';
      } else if (include.type === 'document' || include.toLowerCase().includes('downloadable')) {
        return 'fas fa-cloud-download-alt';
      } else if (include.type === 'quiz' || include.toLowerCase().includes('mobile')) {
        return 'fas fa-mobile-alt';
    }
       else if (include.type === 'quiz' || include.toLowerCase().includes('article')) {
        return 'fas fa-file-alt';
      } else if (include.type === 'code' || include.toLowerCase().includes('exercise')) {
        return 'fas fa-code';
      }
       else if (include.type === 'certificate' || include.toLowerCase().includes('completion')) {
        return 'fas fa-award';
      }
       else {
        // Default icon for unknown types
        return 'fas fa-file';
      }
    },
  },
};
</script>