# Security Policy

## Supported Versions

Only the `main` branch is supported with security updates.

## Reporting a Vulnerability

If you believe you have found a security vulnerability:

- Do not open a public GitHub issue.
- Email: security@stadiumport.com
- Include: reproduction steps, impacted URLs/routes, and any proof-of-concept details.

We aim to acknowledge reports within 72 hours and will coordinate a fix and disclosure timeline.

## Secret Handling

- Never commit secrets (API keys, tokens, passwords, private keys, database credentials).
- Use `.env.local` for local development and keep it untracked (`.env*` is ignored).
- Use your hosting provider secret manager (e.g., Vercel Environment Variables) and GitHub Actions Secrets for CI.
- Rotate any secret that was ever committed, even if removed later.

## CI/CD Safety

- CI workflows must consume secrets only via the platform secret store.
- Avoid printing environment variables or request headers in production logs.
- Treat deploy hooks and internal tokens as secrets and scope them to the smallest access possible.

