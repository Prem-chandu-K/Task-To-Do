# Task-To-Do# 📝 Task-To-Do App

A full-stack Task Management application built with **Spring Boot** (backend) and **Angular** (frontend). This app allows users to register, log in, and manage their daily tasks (CRUD operations).

---

## 📁 Project Structure

Task-To-Do/ ├── TaskToDo-BackEnd/ # Spring Boot backend (Java) │ └── src/... ├── TaskToDo - FrontEnd/ # Angular frontend (TypeScript) │ └── src/... ├── README.md

yaml
Copy
Edit

---

## 🚀 Features

### ✅ Backend (Spring Boot)
- User registration and login with authentication
- Secure REST API endpoints
- Create, Read, Update, Delete (CRUD) for Todos
- MySQL database integration
- CORS configuration for Angular frontend

### ✅ Frontend (Angular)
- Login & Registration UI
- Display todos in a table
- Add, update, delete todo items
- Logout functionality
- Responsive layout

---

## ⚙️ Technologies Used

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | Angular (latest)   |
| Backend     | Spring Boot (Java) |
| Database    | MySQL              |
| Auth        | JWT or Session (based on config) |
| Tools       | Postman, VS Code, Eclipse |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Prem-chandu-K/Task-To-Do.git
cd Task-To-Do
2. Backend Setup (Spring Boot)
Open the TaskToDo-BackEnd folder in Eclipse or IntelliJ.

Set up your database in MySQL (e.g., taskdb) and update the application.properties file accordingly:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
Then run the backend:

bash
Copy
Edit
./mvnw spring-boot:run
3. Frontend Setup (Angular)
bash
Copy
Edit
cd "TaskToDo - FrontEnd"
npm install
ng serve
Access the app at: http://localhost:4200

📌 API Endpoints Overview

Method	Endpoint	Description
POST	/register	Register a user
POST	/login	Login a user
GET	/todos	Get all todos
POST	/todos	Add a new todo
PUT	/todos/{id}	Update a todo
DELETE	/todos/{id}	Delete a todo
🧪 Tools Used for Testing
Postman (for API testing)

Angular DevTools (for frontend debugging)

🌐 Deployment (Optional)
You can deploy the backend using Render or Railway, and the frontend using Netlify or Vercel.

👨‍💻 Author
Prem Chandu K
GitHub: @Prem-chandu-K
