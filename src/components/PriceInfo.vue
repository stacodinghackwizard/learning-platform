<script setup>
import "/src/assets/dist/css/cd-bootstrap.css";
import "/src/assets/dist/css/cd-custom.css";
import "/src/assets/dist/css/cd-responsive.css";
import "/src/assets/dist/css/cd-style.css";
import "/src/assets/dist/css/cd-all.min.css";

</script>
<template>
    <!-- <div v-for="course in userCourses" :key="course.id"> -->

        <div class="ammount d-flex flex-column flex-md-row align-items-md-center justify-content-between w-100">
             <div class="d-flex align-items-center mb-2 mb-md-0">
                 <div class="d-flex align-items-center"><span class="fw-700 font-20">$</span> <h1 class="fw-700 me-2">{{courseInclude.price}}</h1></div>
                 <span class="text-decoration-line-through font-20">{{courseInclude.originalPrice}}</span>
             </div>
             <p class="text-danger fw-700 mb-0">{{ courseInclude.discount}} % Off</p>
        </div>
    <!-- </div> -->
</template>

<script>
import { defineComponent } from 'vue';
import api from '@/services/api';

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
    }

    
};
</script>

<style scoped>
@import "../assets/dist/css/course.css";

</style>



