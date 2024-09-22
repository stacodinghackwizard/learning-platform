# Learning Platform Documentation

## Component Structure

The project follows a component-based architecture:

- `App.vue`: The main component that includes the router view and global layout.
- `components/`:
  - `CourseBanner.vue`: Displays the course title, instructor, and other key information.
  - `CourseContent.vue`: Shows the course content structure, including sections and lectures.
  - `CourseDetail.vue`: Detailed view of a single course.
  - `CourseImage.vue`: Displays the course image.
  - `CourseInclude.vue`: Lists what's included in the course.
  - `CourseLayout.vue`: The main layout for the course page.
  - `CourseSidebar.vue`: Sidebar component for course information and actions.
  - `PriceInfo.vue`: Displays the course price and discount information.
  - `PurchaseButtons.vue`: Contains buttons for purchasing or saving the course.
  - `header/`:
    - `CourseHeader.vue`: The header component specific to the course page.
- `views/`:
  - `UserDashboard.vue`: The user's dashboard page showing enrolled courses and progress.

## Technical Specifications

The project is built using the following key technologies and versions:

- Vue.js: 3.2.13
- Vite: 5.4.6
- JSON Server: 0.17.3
- Axios: 1.7.7
- Vue Router: 4.4.5
- Bootstrap: 4.6.0

These specific versions were used during development and testing. It's recommended to use these versions or compatible ones to ensure the project runs as intended.

### Version Justifications:

1. **Vue.js 3.2.13**: Chosen for its improved performance and Composition API support.
2. **Vite 5.4.6**: Used as the build tool for its fast development server and optimized production builds.
3. **JSON Server 0.17.3**: Implemented for creating a full fake REST API with zero coding.
4. **Axios 1.7.7**: Selected for making HTTP requests due to its ease of use and wide browser support.
5. **Vue Router 4.4.5**: Used for client-side routing in Vue 3 applications.
6. **Bootstrap 4.6.0**: Chosen for its comprehensive set of responsive design components and utilities.

## Mock API Implementation

The mock API is implemented using JSON Server. The `db.json` file in the project root serves as the database. The API endpoints include:

- `/courses`: Get all courses.
- `/courses/1`: Get a single course by ID.
- `/users`: Get all users.
- `/users/1`: Get a single user by ID.

The `api.js` file in the `services` folder contains the Axios configuration and methods for interacting with the API.

## Additional Design and Technical Choices

1. **Vite**: Chosen as the build tool for its fast development server and optimized builds.
2. **Vue Router**: Used for client-side routing, providing a smooth, single-page application experience.
3. **Axios**: Selected for making HTTP requests due to its ease of use and wide browser support.
4. **Responsive Design**: Implemented using CSS media queries and Bootstrap classes for responsive layouts.
5. **Component Reusability**: Components like CourseInclude and PriceInfo are designed to be reusable across different views.
6. **CSS Organization**: Multiple CSS files are used for different purposes:
   - `cd-bootstrap.css`: Bootstrap styles
   - `cd-custom.css`: Custom styles overriding or extending Bootstrap
   - `cd-responsive.css`: Responsive design styles
   - `cd-style.css`: General custom styles
   - `dashboard.css`: Styles specific to the dashboard view
7. **Font Awesome Integration**: Used for icons throughout the application.
8. **Error Handling**: Basic error handling is implemented in API calls and displayed to the user.

## Future Improvements

- Implement full user authentication and authorization.
- Add more advanced filtering and sorting options for courses.
- Integrate a state management solution like Pinia for more complex state handling.
- Implement unit and integration tests using Vue Test Utils and Jest.
- Enhance the UI with animations and transitions for a more engaging user experience.
- Optimize asset loading and implement lazy loading for images and components.
