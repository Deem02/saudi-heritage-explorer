# Juthor (جذور) | Saudi Heritage Explorer

A modern, single-page frontend for exploring Saudi heritage through a clean and visual experience.

Built with **Angular Standalone Components**, **RTL support**, **Glassmorphism**, and an elegant Arabic font.

## Features

* Single-page Angular frontend
* Arabic RTL layout
* Responsive design for mobile and desktop
* Glassmorphism UI
* Saudi heritage categories and regions
* Static heritage data
* Modern visual design



## Project Structure

```text
src/app/models/
```

TypeScript interfaces and models for the heritage data.

```text
src/app/data/heritage-data.ts
```

Static data for heritage categories, featured items, and regions.

```text
src/app/components/
```

Standalone Angular components for each section:

* Hero
* Explore
* Featured
* Regions
* Closing

```text
public/assets/images/heritage/
```

Images used throughout the website.


## Technologies

* Angular
* TypeScript
* HTML5
* CSS3 / SCSS
* Nginx
* Docker

## Project Type

**Frontend only** 

This project does not include a backend or database.


## Run Locally

Install the project dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:4200/
```




## Production Build

Build the project for production:

```bash
npm run build
```

The production files are generated inside:

```text
dist/saudi-heritage-explorer/browser
```

---

# Docker

The project is containerized using **Docker** and **Nginx**.

The Docker setup uses a multi-stage build:

1. Node.js is used to build the Angular application.
2. Nginx is used to serve the production files.
3. The Angular production files are copied into the Nginx web root.
4. Nginx listens on port `80` inside the container.

## Build the Docker Image

From the project root:

```bash
docker build -t juthor .
```

The image is named `juthor` for this project.

## Run the Container Locally

Run the container using a host port of your choice.

Example:

```bash
docker run -d -p 8080:80 --name juthor-app juthor
```

The port mapping means:

```text
Host Port : Container Port
8080      : 80
```

The `8080` port is only an example for local testing. The application listens on port `80` inside the container.

Open the application at:

```text
http://localhost:8080
```

## Check the Container

```bash
docker ps
```


---

# Docker Hub

After testing the Docker image locally, the image can be pushed to Docker Hub.

## Login to Docker Hub

```bash
docker login
```

## Tag the Image

Replace `<docker-username>` with your Docker Hub username:

```bash
docker tag juthor <docker-username>/juthor:latest
```

## Push the Image

```bash
docker push <docker-username>/juthor:latest
```

The image is then available in the Docker Hub repository.

---

# Ubuntu Server Deployment

The application can be deployed to an Ubuntu server using Docker.

## 1. Connect to the Server

Connect to the Ubuntu server using SSH:

```bash
ssh <username>@<server-ip>
```

## 2. Install Docker

Docker must be installed on the Ubuntu server before running the application.

Verify the installation:

```bash
docker --version
```

## 3. Pull the Image from Docker Hub

Replace `<docker-username>` with your Docker Hub username:

```bash
docker pull <docker-username>/juthor:latest
```

## 4. Run the Application

Use the port assigned to the application on the server:

```bash
docker run -d -p <server-port>:80 --name juthor-frontend <docker-username>/juthor:latest
```

For example:

```bash
docker run -d -p 8081:80 --name juthor-frontend deem/juthor:latest
```


## 5. Verify the Container

```bash
docker ps
```

The application should show a port mapping similar to:

```text
0.0.0.0:<server-port>->80/tcp
```

## 6. Access the Application

Open the application using the server IP and assigned port:

```text
http://<server-ip>:<server-port>
```

This link can then be shared as the application URL.

---

# Deployment Flow

The complete deployment flow is:

```text
Angular Frontend
       ↓
Dockerfile
       ↓
docker build
       ↓
Docker Image
       ↓
Docker Hub
       ↓
SSH
       ↓
Ubuntu Server
       ↓
docker pull
       ↓
docker run
       ↓
Application URL
```

## Notes

* The application is a frontend-only project.
* No backend or database is required.
* Docker packages the Angular production build with Nginx.
* Server credentials should never be committed to the repository.
* The server port can be changed depending on the deployment environment.
