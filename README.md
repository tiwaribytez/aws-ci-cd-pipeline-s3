# AWS CI/CD Pipeline Deployment (S3 & CodePipeline)

This project demonstrates building a **CI/CD Pipeline** using **AWS CodePipeline**, **AWS CodeBuild**, and **Amazon S3** for static website hosting.

Whenever you push code to GitHub, the pipeline automatically:
- Pulls the latest commit.
- Builds the code (optional for static sites).
- Deploys it to an S3 bucket configured for static website hosting.

---

## 🚀 Tech Stack

- **AWS S3** — Static Website Hosting
- **AWS CodePipeline** — Orchestration of CI/CD
- **AWS CodeBuild** — Building the application (optional)
- **GitHub** — Source Control

---

## 📋 Steps to Deploy

### 1. Create an S3 Bucket
- Create a new bucket in S3.
- Enable **Static Website Hosting**.
- Set appropriate permissions (public read access or via CloudFront).

### 2. Set Up CodePipeline
- Create a new pipeline.
- **Source Stage**: Connect GitHub repository and select branch.
- **Build Stage**: Create or select an AWS CodeBuild project (see Step 3).
- **Deploy Stage**: Deploy to the configured S3 Bucket.

### 3. Set Up CodeBuild (Optional for Static Sites)
- Create a CodeBuild Project:
  - **Environment**: Ubuntu/Linux image.
  - **Buildspec**: Use `buildspec.yml` from the repository.

### 4. Push Code to GitHub
- On every push, the pipeline triggers automatically:
  - Fetches latest code.
  - Runs build steps (if configured).
  - Deploys output to the S3 bucket.

---

## 📂 Project Structure

```bash
.
├── README.md
├── buildspec.yml
└── docs/
    └── project-summary.md
```

---

## 📈 Pipeline Flow Diagram

```mermaid
graph LR
A[GitHub Commit] --> B[Source Stage - CodePipeline]
B --> C[Build Stage - CodeBuild (Optional)]
C --> D[Deploy Stage - S3 Static Hosting]
D --> E[Live Website!]
```

---

## 📣 About Me

**Author**: Abhishek Bhagat  
**LinkedIn**: [Connect with me](https://linkedin.com/in/abhishekbhagat98)  

I love building cloud-native solutions and automating workflows! 🚀

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

