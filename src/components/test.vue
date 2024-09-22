                             
                    <div class="row text-dark">
                        <div class="info-tag">

                            <h2 class="course-content-title">{{course.course_content}}</h2>
                        </div>
                        <div class="col-12 course-heading-info  ">     
                            
                            <div class="info-tag course-info-container space-between w-100 display-flex justify-content-between flex-wrap">
                            
                                <p class="course-info ">
                                    <span class="info-item">{{course.sections}} sections</span>
                                    <span class="info-item">{{course.lectures}} lectures</span>
                                    <span class="info-item">{{course.totalLength}} total length</span>
                                </p>
                                <a href="#" class="expand-all text-decoration-double-dashed">Expand all sections</a>
                            </div>
                        </div>
                        
                    </div>


                    
<style scoped>
.course-title {
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  width: 100%;
  word-wrap: break-word;
  
  /* Fluid typography */
  font-size: clamp(1.5rem, 4vw + 1rem, 2.5rem);
}

/* Fine-tuning for specific breakpoints if needed */
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
  font-size: clamp(1.3rem, 3vw + 0.5rem, 1.8rem);
  margin-bottom: 1rem;
}

.course-info-container {
  gap: 1rem;
}

.course-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 0;
}

.info-item {
  white-space: nowrap;
  font-size: clamp(0.8rem, 2vw + 0.3rem, 1rem);
}

.info-item:not(:last-child)::after {
  content: "•";
  margin-left: 10px;
}

.expand-all {
  font-size: clamp(0.8rem, 2vw + 0.3rem, 1rem);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .course-info-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .course-info {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .expand-all {
    align-self: flex-end;
  }
}

@media (max-width: 576px) {
  .course-info-container {
    align-items: center;
  }

  .course-info {
    justify-content: center;
    text-align: center;
  }

  .info-item {
    flex-basis: auto;
  }

  .info-item:not(:last-child)::after {
    content: "";
    margin-left: 0;
  }

  .expand-all {
    align-self: center;
    margin-top: 0.5rem;
  }
}


</style>
