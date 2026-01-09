# Security Policy

## Supported Versions

The following versions of the StadiumPort project are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our systems seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### How to Report

Please do not report security vulnerabilities through public GitHub issues. Instead, please report them via email to:

**security@stadiumport.com**

Please include the following details in your report:

*   Description of the vulnerability.
*   Steps to reproduce the issue.
*   Potential impact of the vulnerability.
*   Any proof-of-concept code or screenshots.

### Response Timeline

*   We will acknowledge receipt of your report within 48 hours.
*   We will provide a timeline for fixing the vulnerability within 1 week.
*   We will notify you when the vulnerability has been fixed.

## Security Best Practices

We follow enterprise-grade security practices, including:

*   **Secret Management:** All secrets are stored in secure environment variables and never committed to the repository.
*   **Automated Scanning:** We use automated tools to scan for secrets and vulnerabilities in every commit.
*   **Dependency Audits:** We regularly audit our dependencies for known vulnerabilities.
*   **Secure Headers:** We implement strict HTTP security headers (HSTS, CSP, etc.).

For more details on our security architecture, please refer to [SECRETS_MANAGEMENT.md](docs/SECRETS_MANAGEMENT.md).
