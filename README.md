# 🚀 AWS CI/CD Pipeline Deployment (S3 & CodePipeline)

This project demonstrates setting up a **CI/CD pipeline** for a **React application** using **AWS CodePipeline**, **AWS CodeBuild**, and **Amazon S3**.

---

## 📌 Project Overview

Automate the deployment process so that any code pushed to GitHub is automatically built and deployed to an S3 static website.

---

## 🛠️ AWS Services Used

| Service             | Purpose                                                   |
|---------------------|-----------------------------------------------------------|
| **AWS CodePipeline** | Automates the source → build → deploy process             |
| **AWS CodeBuild**   | Installs dependencies, builds the React app                |
| **Amazon S3**       | Hosts the static React website                             |
| **GitHub**          | Source code repository                                     |

---

## 🧩 Key Concepts Implemented

### ✅ CI/CD Workflow

- **Continuous Integration**: Automatically build and test React code when pushed.
- **Continuous Deployment**: Automatically deploy successful builds to S3.

---

## 🚀 Step-by-Step Workflow

### 1. Create an S3 Bucket
- Enable **Static Website Hosting**.
- Configure the bucket for **public read access**.
- Apply a bucket policy for security:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### 2. Create a GitHub Repository
- Initialize a repo and push the React project.

### 3. Add a buildspec.yml File

Sample `buildspec.yml`:

```yaml
version: 0.2

phases:
  install:
    commands:
      - npm install
  build:
    commands:
      - npm run build
artifacts:
  files:
    - '**/*'
  base-directory: dist
```

- This file instructs CodeBuild on how to install, build, and package the app.

### 4. Set Up AWS CodeBuild
- Connect CodeBuild to the GitHub repo.
- Use the Node.js 18 runtime environment.
- Point it to the `buildspec.yml` file.

### 5. Set Up AWS CodePipeline
- **Source**: GitHub repo (triggered on push).
- **Build**: CodeBuild project.
- **Deploy**: S3 static website bucket.

---

## ❗ Common Issue Encountered

### 403 Forbidden Error
- **Issue**: S3 site returned a 403 error after deployment.
- **Fix**: Corrected the bucket policy to allow public read access to the files.

---

## 🎯 Final Outcome

- Successfully deployed a React web app to S3 using a fully automated CI/CD pipeline.
- Future GitHub pushes automatically rebuild and redeploy the app!

---

## 📎 Documentation

For a detailed walk-through with step-by-step notes, refer to:

[📄 AWS CI-CD Pipeline Deployment with S3 and CodePipeline.pdf](./AWS%20CI-CD%20Pipeline%20Deployment%20with%20S3%20and%20CodePipeline.pdf)

---

## 👤 About Me

I’m Abhishek Bhagat, a Cloud Engineer passionate about automating deployments and building secure, scalable AWS architectures.  
Check out more on [GitHub](https://github.com/abhishekbhagat98)!