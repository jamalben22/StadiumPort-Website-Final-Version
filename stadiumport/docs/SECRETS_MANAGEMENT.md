# Secrets Management & Security Architecture

This document outlines the security architecture and secrets management strategy for the StadiumPort project. We follow industry best practices to ensure that sensitive information remains private and the application is secure.

## 1. Secrets Management

### Principles
*   **No Secrets in Code:** Credentials, API keys, and passwords must **never** be hardcoded in the source code.
*   **Environment Variables:** All configuration that varies between environments (development, staging, production) or contains secrets must be stored in environment variables.
*   **Git Ignore:** `.env` files are ignored by git to prevent accidental commits.

### Implementation
*   **Local Development:** Use a `.env.local` file (not committed) to store your local secrets. Use `.env.example` as a template.
*   **Production (Vercel/CI):** Secrets are managed via the platform's secret management system (e.g., Vercel Environment Variables, GitHub Actions Secrets).

### Required Environment Variables
Refer to `.env.example` for the complete list of required variables.

*   `SMTP_*`: Email configuration.
*   `JWT_SECRET`: Secret key for signing JSON Web Tokens.
*   `NEXT_PUBLIC_SUPABASE_*`: Supabase configuration (publicly safe, but managed via envs).

## 2. CI/CD Security

Our CI/CD pipeline (GitHub Actions) is secured as follows:

*   **Secret Scanning:** We use automated tools to scan every commit for accidentally committed secrets.
*   **Dependency Review:** Pull requests are automatically scanned for vulnerable dependencies.
*   **Least Privilege:** CI jobs run with minimal required permissions.

## 3. Web Security

The application implements the following web security measures:

*   **Content Security Policy (CSP):** Restricts the sources from which content (scripts, styles, images) can be loaded to prevent XSS.
*   **HSTS (HTTP Strict Transport Security):** Enforces HTTPS connections.
*   **X-Frame-Options:** Prevents clickjacking attacks.
*   **X-Content-Type-Options:** Prevents MIME-sniffing.
*   **Input Validation:** All user inputs are validated on both client and server sides.

## 4. How to Rotate Secrets

If a secret is compromised:

1.  **Revoke:** Immediately revoke the compromised credential at the provider (e.g., reset database password, regenerate API key).
2.  **Update:** Update the environment variable in the deployment platform (Vercel) and GitHub Secrets.
3.  **Redeploy:** Trigger a new deployment to apply the changes.
4.  **Audit:** Check logs for any unauthorized access during the exposure window.
