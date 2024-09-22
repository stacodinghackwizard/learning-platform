<template>
    <!-- button -->
    <div class="button d-flex gap-0 pt-0 mt-0 enrol-hr">
        <!-- Cart button -->
        <a
        id="add_to_cart_btn_4"
        class="buy-btn active"
        href="#"
        style="width: 90%;"
        onclick=""
        > Buy Now</a 
        >
        <a
            id="added_to_cart_btn_4 "
            class="text-align-center"
            href="#"
            style="border: 1px solid #333; background-color: #fff;"
            
            ><i class="fas fa-heart "></i> </a
        >
        
            
        <hr/>
    </div>
</template>

<script>
export default {
  props: ['course'],
  methods: {
    getIncludeIconClass(include) {
      // Implementation
    },
  },
};
</script>