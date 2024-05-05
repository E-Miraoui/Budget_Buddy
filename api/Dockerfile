# Use the official Maven/Java image to create a build artifact
FROM maven:3.9.6-openjdk-21 AS builder

# Copy the Maven project and build it
WORKDIR /app
COPY api/ /app
RUN mvn clean package

# Use AdoptOpenJDK for the final runtime image
FROM adoptopenjdk/openjdk-11:alpine-jre

# Set the working directory in the container
WORKDIR /app

# Copy the compiled app from the build stage
COPY --from=builder /app/target/*.jar /app/app.jar

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
