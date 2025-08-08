

### 🚀 Live Site URL

[https://sproutly-515fc.web.app/]

---

### 🌿 Sproutlye: A Gardening Community & Resource Hub

A full-stack web application designed for gardening enthusiasts to connect, share knowledge, and grow together. The platform provides a space for users to discover gardening tips, find local gardeners, and share their own experiences. With robust authentication, a user-friendly interface, and dynamic content, GardenGrove is the perfect place for anyone with a passion for plants.

---

### ✨ Key Features

* **Secure Authentication:** 🔑 Users can securely sign up and log in using email/password or Google pop-up. Password validation rules are enforced on registration, and success/error messages are displayed using toast/sweetalert.
* **Comprehensive CRUD Functionality:** 🌱 The application supports **C**reate, **R**ead, **U**pdate, and **D**elete operations for gardening tips, allowing users to share, manage, and delete their own content.
* **Dynamic Content & Filtering:** 📋 The "Browse Tips" page displays publicly available tips in a clean table format. Users can filter these tips by **Difficulty Level** to easily find relevant content.
* **Interactive Community Hub:** 🧑‍🤝‍🧑 The platform features a dedicated "Explore Gardeners" page to showcase profiles of active gardeners and a "Top Trending Tips" section on the home page to highlight popular content with a working **Like button**.
* **Personalized Dashboards:** 📂 The "My Tips" page provides a private space for logged-in users to manage their own tips, including both public and hidden entries, with options to update or delete them.
* **Modern Design & Features:** 🎨 The website includes a custom **Dark/Light Theme toggle**, a beautiful slider on the homepage, and dynamic data displayed with animations from an integrated library like Lottie React or React Awesome Reveal.

---

### 🛠️ Technologies Used

#### **Client-Side**

* **React:** ⚛️ The core JavaScript library for building the UI.
* **React Router DOM:** ➡️ For handling all client-side routing.
* **Firebase:** 🔐 Used for user authentication (email/password and social login).
* **Toast / SweetAlert:** 🔔 For providing success and error notifications.
* **React-slick / Swiperjs:** 🖼️ For the homepage banner/slider.
* **Tailwind CSS / Custom CSS:** 🎨 For responsive and unique design.
* **Lottie React / React Awesome Reveal:** ✨ For implementing animations.

#### **Server-Side**

* **Node.js & Express.js:** ⚙️ The backend runtime and framework for the RESTful API.
* **MongoDB:** 📂 The NoSQL database used to store all tip, user, and gardener data.


### ⚙️ Installation & Setup

1.  **Clone the repositories:**
    ```bash
    git clone https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-tasinvoid.git
    git clone https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-tasinvoid.git
    ```
2.  **Install dependencies:**
    ```bash
    # In client directory
    npm install
    # In server directory
    npm install
    ```
3.  **Set up environment variables:**
    * Create a `.env` file in both the `client` and `server` directories.
    * Add your Firebase configuration keys to the client's `.env` file.
    * Add your MongoDB URI to the server's `.env` file.
4.  **Run the project:**
    ```bash
    # In client directory
    npm run dev
    # In server directory
    npm start
    ```

---

### 🚀 Hosting

The client is hosted on **Netlify  Firebase** and the server is hosted on **Vercel**. The application is configured to handle page reloads on any route without errors, and private routes are preserved correctly.
