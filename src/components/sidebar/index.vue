<template>
    <div class="sidebar-wrapper">
        <button class="sidebar-toggle d-md-none" @click="toggleSidebar">
            <i class="fas fa-bars"></i>
        </button>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar" :class="{ 'show': isSidebarOpen }">
            <div class="sidebar-content pt-4 ">
                <div class="logo" >
                  <div class="logo-img d-flex justify-content-between align-items-center " style="width: 50px; height: 50px;">
                    <img  src="/src/assets/image/logo.jpg" style="width: 100%; height: 100%;" > <i>EduTec</i>
                    <!-- <i class="fas fa-logo"></i> -->
                  </div>
                  
                </div>
                <ul class="nav flex-column mb-3">
                    <li class="nav-item" disabled>
                        <router-link class="nav-link disabled" tabindex="-1" aria-disabled="true" to="/home"><i class="fas fa-home"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/"><i class="fas fa-book"></i> Courses</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/user/1"><i class="fas fa-trophy"></i> Achievements</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link disabled" tabindex="-1" aria-disabled="true" to="/messages"><i class="fas fa-envelope"></i> Messages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link disabled" tabindex="-1" aria-disabled="true" to="/wishlist"><i class="fas fa-heart"></i> Wishlist</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link disabled" tabindex="-1" aria-disabled="true" to="/notifications"><i class="fas fa-bell"></i> Notifications</router-link>
                    </li>
                    
                </ul>
            </div>
            
            <div class="user-profile">
                <div v-if="loading" class="user-info">Loading profile...</div>
                <div v-else-if="error" class="user-info">Error: {{ error }}</div>
                <div v-else-if="user" class="user-info ">
                  <router-link class="d-flex align-items-center gap-3" :to="{ name: 'UserDetails', params: { id: user.id } }">
                    <div class="user-avatar">
                      <img v-if="user.avatar" :src="user.avatar" :alt="user.name">
                      <i v-else class="fas fa-user"></i>
                    </div>
                    <span class="user-name text-black">{{ user.name }}</span>
                  </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        user: null,
        loading: true,
        error: null,
        isSidebarOpen: false
      };
    },
    created() {
      this.fetchUser();
    },
    methods: {
      async fetchUser() {
        try {
          const response = await api.getUser(1); // Assuming we're fetching user with ID 1
          this.user = response.data;
        } catch (err) {
          this.error = err.response ? err.response.data : err.message;
          console.error('Error fetching user data:', err);
        } finally {
          this.loading = false;
        }
      },
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      }
    }
  };
</script>

<style scoped>
  .sidebar-wrapper{
    
   
    background-color: #f8f9fa;
  }
  .nav-link.router-link-active {
    background-color: #e6f2ff;
    color: black;
    font-weight: 700;
    
  }
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .sidebar {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 1rem;
      }

      .sidebar-content {
        flex-grow: 1;
      }

      .logo {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .nav-item {
        padding: 0.5rem 0;
      }

      .nav-link {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        transition: background-color 0.3s;
      }

      .nav-link:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .nav-link i {
        margin-right: 0.5rem;
      }

      .user-profile {
        position: fixed;
        bottom: 20px;
        padding-top: 1rem;
        border-top: 1px solid #e9ecef;
      }

      .user-info {
        display: flex;
        align-items: center;
      }

      .user-info img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      .sidebar-toggle {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1030;
        padding: 0.25rem 0.75rem;
        font-size: 1.25rem;
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
      }

      @media (max-width: 767.98px) {
        .sidebar {
          position: fixed;
          top: 0;
          left: -100%;
          height: 100vh;
          width: 80%;
          max-width: 300px;
          z-index: 1020;
          transition: left 0.3s ease-in-out;
        }

        .sidebar.show {
          left: 0;
        }
      }
</style>