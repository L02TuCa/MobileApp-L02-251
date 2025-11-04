Based on your `pom.xml`, here's how to run your Spring Boot application with Docker:

## 1. Create a Dockerfile

Create a `Dockerfile` in your project root:

```dockerfile
# Use OpenJDK 21 with Alpine Linux for a smaller image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the JAR file to the container
COPY target/BK_sharing-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app runs on (default 8080)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 2. Build and Run Steps

### Step 1: Build your application
```bash
mvn clean package
```

### Step 2: Build Docker image
```bash
docker build -t bk-sharing-app .
```

### Step 3: Run the container
```bash
docker run -p 8080:8080 bk-sharing-app
```

## 3. Docker Compose (Recommended)

Since you have `spring-boot-docker-compose` dependency, create a `compose.yaml` file:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/your_database
      - SPRING_DATASOURCE_USERNAME=your_username
      - SPRING_DATASOURCE_PASSWORD=your_password
    depends_on:
      - mysql
    networks:
      - app-network

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: your_database
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_USER: your_username
      MYSQL_PASSWORD: your_password
    ports:
      - "3306:3306"
    networks:
      - app-network
    volumes:
      - mysql_data:/var/lib/mysql

networks:
  app-network:

volumes:
  mysql_data:
```

Then run with:
```bash
docker-compose up
```

## 4. Multi-stage Dockerfile (Optimized)

For a more optimized build:

```dockerfile
# Build stage
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=build /app/target/BK_sharing-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 5. Application Properties

Make sure your `application.properties` or `application.yml` is configured for Docker:

```properties
# In src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://mysql:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password

# For local development, you might want a different profile
```

## 6. Complete Workflow

```bash
# 1. Build the project
mvn clean package

# 2. Build Docker image
docker build -t bk-sharing-app .

# 3. Run with Docker Compose (includes database)
docker-compose up

# Or run standalone
docker run -p 8080:8080 bk-sharing-app
```

## 7. Useful Docker Commands

```bash
# View running containers
docker ps

# Stop container
docker stop <container_id>

# View logs
docker logs <container_id>

# Remove container
docker rm <container_id>

# Remove image
docker rmi bk-sharing-app
```

## Important Notes:

1. **Database Configuration**: Update the database connection details in both `compose.yaml` and your application properties
2. **Port Mapping**: Ensure the port in `EXPOSE` and `-p` flags matches your Spring Boot server port
3. **Environment Variables**: Use environment variables for sensitive data like database passwords
4. **.dockerignore**: Create a `.dockerignore` file to exclude unnecessary files:

```
.git
target
*.iml
.idea
```

This setup will create a containerized Spring Boot application with MySQL database connectivity.