# Learning Platform

This project is a Vue.js-based learning platform that allows users to browse and enroll in courses.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/learning-platform.git
   cd learning-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the mock API (JSON Server):
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. In a new terminal, start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port Vite provides).

## Running the Mock API

The project uses JSON Server to mock the API. To start the mock API:

1. Ensure you're in the project root directory.
2. Run the following command:
   ```bash
   npx json-server --watch db.json
   ```
3. The API will be available at `http://localhost:3000`.

## Implementation Notes

- This project uses Vue 3 with the Composition API.
- Vite is used as the build tool and development server.
- The mock API is implemented using JSON Server.
- Axios is used for making HTTP requests to the API.
- Vue Router is used for client-side routing.
- The project structure follows a component-based architecture.

## Additional Features

- Responsive design for mobile and desktop views.
- Course filtering and search functionality.
- User authentication (mock implementation).
- Course enrollment system.

For more detailed information about the component structure and API implementation, please refer to the documentation in the `docs` folder.
