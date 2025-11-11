Here’s a clean, beginner-friendly **`README.md`** you can include in your backend repo — it assumes the user has *nothing installed yet* and guides them step-by-step to run your project successfully.

---

````markdown
# 📘 BK Sharing Backend

A Spring Boot backend for the **BK Sharing** project — a platform for students to share and access academic materials such as lecture notes, assignments, and projects.

---

## 🧰 Prerequisites

Make sure you have these installed before starting:

| Tool | Version | Install Guide |
|------|----------|----------------|
| **Java** | 17+ | [Download](https://adoptium.net/) |
| **Maven** | 3.8+ | [Install Maven](https://maven.apache.org/install.html) |
| **Docker Desktop** | Latest | [Get Docker](https://www.docker.com/products/docker-desktop/) |
| **Git** | Latest | [Download Git](https://git-scm.com/downloads) |

To verify installation:

```bash
java -version
mvn -version
docker -v
git --version
````

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/L02TuCa/MobileApp-L02-251.git
git checkout backend/code
cd MobileApp-L02-251/BK_sharing_backend
```

---

### 2️⃣ Build the Project (Maven)

```bash
mvn clean package
```

This will:

* Download all dependencies
* Compile the project
* Generate a JAR file inside the `target/` folder

---

### 3️⃣ Run with Docker Compose (Recommended)

Docker Compose will automatically:

* Build the Spring Boot backend image
* Create and connect a MySQL database container
* Populate initial data (admin + sample users)

```bash
docker-compose up -d --build
```

Then visit your app at:

👉 [http://localhost:8080](http://localhost:8080/)

---

### 4️⃣ Run Manually (Without Docker Compose)

If you already have MySQL running locally:

1. Update your database credentials in
   **`src/main/resources/application.properties`**

2. Then run:

   ```bash
   mvn spring-boot:run
   ```

3. Or use the generated JAR file:

   ```bash
   java -jar target/bk-sharing-app.jar
   ```

---

## 🧱 Docker Workflow

### Common Commands

```bash
# Build Docker image
docker build -t bk-sharing-app .

# Run app container
docker run -p 8080:8080 bk-sharing-app

# Stop and remove containers
docker-compose down

# Run containers in background
docker-compose up -d

# Force rebuild containers and run
docker-compose up -d --build

# View running containers
docker ps

# Stop container
docker stop <container_id>

# View container logs
docker logs <container_id>

# Remove container
docker rm <container_id>

# Remove Docker image
docker rmi bk-sharing-app
```

---

## ⚙️ Configuration Notes

1. **Database Configuration**

    * Check `compose.yaml` and `application.properties` for database credentials.
    * Default MySQL port: `3306`.

2. **Port Mapping**

    * Spring Boot default port: `8080`
    * Ensure your Docker `EXPOSE` and `-p` flags match this port.

3. **Environment Variables**

    * Store sensitive data (like DB passwords) in `.env`:

      ```bash
      MYSQL_ROOT_PASSWORD=yourpassword
      MYSQL_DATABASE=bk_sharing
      MYSQL_USER=bk_user
      MYSQL_PASSWORD=secret
      ```

4. **Ignore Unnecessary Files**

    * Create `.dockerignore`:

      ```
      .git
      target
      *.iml
      .idea
      ```

---

## 🔐 Default Accounts

| Role        | Username    | Password     |
| ----------- | ----------- | ------------ |
| **Admin**   | `admin`     | `admin123`   |
| **Student** | `student01` | `student123` |

*(All passwords are securely hashed using BCrypt in the database.)*

---

## 🧪 Verify Database

After containers are up, connect to MySQL:

```bash
docker exec -it <mysql_container_name> mysql -u root -p
```

Then check tables:

```sql
USE bk_sharing;
SHOW TABLES;
SELECT * FROM user;
```

---

## 🛠 Troubleshooting

| Problem             | Solution                                                         |
| ------------------- | ---------------------------------------------------------------- |
| Database empty      | Try `docker-compose down -v` then `docker-compose up -d --build` |
| Port 8080 in use    | Change port in `application.properties` or `docker-compose.yml`  |
| Maven build fails   | Run `mvn clean package -U` to force update dependencies          |
| Docker not starting | Ensure Docker Desktop is running                                 |

---

## 💡 Tips for Developers

* Use `mvn spring-boot:run` for quick testing.
* Use `docker-compose up -d --build` before deployment.
* Logs: `docker-compose logs -f` for live backend logs.
* To rebuild database with new test data, run:

  ```bash
  docker-compose down -v && docker-compose up -d --build
  ```

---

## 🧾 License

MIT License © 2025 — BK Sharing Team

```

---

Would you like me to include a section showing **how to modify and reload the sample SQL seed file** (so new developers can change initial data like users or categories)?
```
