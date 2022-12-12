# React.js with Nginx

Template for deploying React application with Nginx. Consist of multistage docker file to generate image and build docker image.

## Run Locally

Build Docker image

```bash
  docker build . -t nginx-react
```

Run image

```bash
  docker run -p 80:80 --name nginx-react nginx-react
```

