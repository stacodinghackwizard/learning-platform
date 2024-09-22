<template>
  <section class="pt-0 mt-0">
    <div class="bread-crumb courses-details pt-0 mt-0">
      <div class="container-fluid pt-0 mt-0">
        <div class="row pt-0 mt-0">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12 pt-0 mt-0 px-0 mx-0 " role="main">
            <div class="courses-details-1st-text px-0 mx-0 pt-0 mt-0 text-dark">
              <h1 class="course-title">{{ course.title }}</h1>
              
              <div class="col-lg-9 course-heading-info px-0 col-md-12 col-sm-12 col-12 info-tag space-between w-100 px-0 display-flex justify-content-between align-items-center">     
                                                        
                    
                        <p class="text-dark fw-500 course-info d-flex align-items-center"><i class="fas fa-star text-warning" style="color: #ffc107 !important;"></i> {{course.rating}} ( {{course.ratingCount }} ratings)</p>
                        <p class="text-dark fw-500 course-info d-flex align-items-center"><i class="fas fa-users"></i> {{course.studentCount}} students</p>
                        <p class="text-dark fw-500 course-info d-flex align-items-center"><i class="fas fa-user"></i> {{course.instructor}}</p>
                        
                   
                </div>
              <p class="mb-3 text-dark course-description px-0 mx-0">{{ course.description }}</p>
            
              <div class="review">
                                                
                    <div class="row text-dark">
                        <div class="info-tag">

                            <h2 class="course-content-title">{{course.course_content}}</h2>
                        </div>
                        <div class=" row py-lg-3 display-flex justify-content-between align-items-center ">     
                                                        
                                  <div class="col-lg-9 col-md-9 col-sm-12 course-info-wrapper " >

                                    <span class="info-item ">{{course.sections}} sections</span>
                                    <span class="info-item ">{{course.lectures}} lectures</span>
                                    <span class="info-item ">{{course.totalLength}} total length</span>
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-12">

                                    <a href="#" class="text-lg-end text-end  text-sm-center  expand-all text-decoration-double-dashed">Expand all sections</a>
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
export default {
  props: ['course'],
};
</script>

<style scoped>
.course-title {
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  width: 100%;
  word-wrap: break-word;
  

  font-size: clamp(1.5rem, 4vw + 1rem, 2.5rem);
}


@media (max-width: 768px) {
  .course-title {
    margin-bottom: 1rem;
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .course-title {
    margin-bottom: 0.75rem;
  }
}

.course-info {
  font-size: 1rem;
}

.course-description {
  font-size: 1.1rem;
}

.course-content-title {
  font-size: 1.8rem;
}
.expand-all {
    align-self: flex-end;
   
    text-decoration: underline;
    text-decoration-style: dashed;
    font-size: 1.2rem;
  }
.course-info-wrapper span{
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .course-title {
    font-size: 2rem;
  }

  .course-info {
    font-size: 0.9rem;
  }

  .course-description {
    font-size: 1rem;
  }

  .course-content-title {
    font-size: 1.5rem;
  }

  .section-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .course-info-wrapper {
    width: 100%;
    justify-content: space-between;
  }

  .expand-all {
    align-self: flex-end;
    margin-top: 0.5rem;
    text-decoration: underline;
    text-decoration-style: dashed;
  }
}

@media (max-width: 576px) {
  .course-title {
    font-size: 1.8rem;
  }

  .course-info {
    font-size: 0.8rem;
  }

  .course-description {
    font-size: 0.9rem;
  }

  .course-content-title {
    font-size: 1.3rem;
  }
  .course-info-wrapper {
    justify-content: center;
  }

  .info-item {
    flex-basis: calc(50% - 0.5rem);
    text-align: center;
  }

  .info-item:last-child {
    flex-basis: 100%;
  }

  .expand-all {
    align-self: center;
  }
}

.course-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.info-item {
  white-space: nowrap;
  font-size: 0.9rem;
}

.info-item:not(:last-child)::after {
  content: "•";
  margin-left: 10px;
}

@media (max-width: 576px) {
  .course-info {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px; */
    /* justify-content: center; */
  }

  .info-item {
    flex-basis: calc(50% - 5px);
  }

  .info-item:last-child {
    flex-basis: 100%;
    text-align: center;
  }

  .info-item:not(:last-child)::after {
    content: "";
    margin-left: 0;
  }
  .course-content-title{
    text-align: center;
  }

  .expand-all {
    /* width: 100%; */
    text-align: center !important;
    width: 100%;
    margin-top: 10px;
    white-space: nowrap;
    text-decoration: underline;
    text-decoration-style: dashed;
  }
}
.section-info{
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;
}
.course-info-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}
</style>
