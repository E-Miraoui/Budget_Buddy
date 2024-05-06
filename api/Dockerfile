# Use the official Maven/Java image to create an executable JAR
FROM maven:3.8.3-openjdk-17 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project
COPY . .

# Package the application
RUN mvn clean package

# Use a smaller base image for the final container
FROM openjdk:17-jdk-alpine

# Copy the JAR file from the builder stage to the final image
COPY --from=builder /app/target/tpfinn-0.0.1-SNAPSHOT.jar /app/tpfinn-0.0.1-SNAPSHOT.jar

# Specify the command to run on container startup
CMD ["java", "-jar", "/app/tpfinn-0.0.1-SNAPSHOT.jar"]
