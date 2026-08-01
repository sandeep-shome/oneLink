# Contributing to OneLink

Thank you for taking the time to contribute to **OneLink**! We are excited to build a seamless, high-performance link-in-bio platform together.

Please take a moment to review this document to ensure a smooth collaboration process for everyone.

---

## 🛠 Getting Started

### 1. Prerequisites

Ensure you have the following installed locally:

- **Node.js** (v18.x or higher)
- **npm** or **pnpm** / **yarn**
- **PostgreSQL** (if using PERN stack) or **MongoDB** (if using MERN stack)
- **Git**

### 2. Fork and Clone

1. Fork the [OneLink repository](https://github.com/sandeep-shome/oneLink.git).
2. Clone your forked repository locally:
   ```bash
   git clone https://github.com/sandeep-shome/oneLink.git.git
   cd onelink
   ```
3. Set up the upstream remote:
   ```bash
   git remote add upstream https://github.com/sandeep-shome/oneLink.git
   ```

---

## 🌿 Branching Strategy & Workflow

To maintain code stability, **direct commits or pushes to the `main` or `master` branch are strictly prohibited.**

### Workflow Steps:

1. **Always sync with `upstream/main` before starting work:**
   ```bash
   git checkout main
   git pull upstream main
   ```
2. **Create a new topic/feature branch:**
   Use descriptive naming conventions for your branch:
   - `feature/add-analytics-dashboard`
   - `fix/link-reordering-bug`
   - `docs/update-readme-setup`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make modular, incremental commits.** Keep commit messages clean and descriptive:
   - Good: `feat(api): add endpoint for updating user handle`
   - Good: `fix(frontend): resolve drag-and-drop animation jitter`
   - Avoid: `updated stuff` or `fixed bug`

4. **Push your branch to your origin fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

---

## 🔀 Submitting Pull Requests (PR)

1. Open a Pull Request against the `main` branch of the official **OneLink** repository.
2. Provide a clear, detailed title and description explaining **what** was changed and **why**.
3. Link relevant issues in the PR description (e.g., `Closes #42`).
4. Ensure all automated tests, linters, and type checks pass locally before opening the PR:
5. Request a review from the repository maintainers. Be responsive to review comments and feedback.

---

## 🎨 Code Style & Quality Standard

- **Formatting:** Follow the project's Prettier and ESLint configurations. Do not bypass pre-commit hooks.
- **Component Structure:** Keep React components modular and reusable.
- **API Design:** Follow RESTful principles for backend routes (`/api/v1/...`).
- **Environment Variables:** Never commit sensitive keys, JWT secrets, or database URLs. Use `.env.example` to document required keys.

---

## 🐛 Reporting Bugs & Requesting Features

- Use **GitHub Issues** to report bugs or suggest new features.
- Before opening a new issue, check if a similar issue already exists.
- For bug reports, include:
  - Clear step-by-step reproduction steps.
  - Expected vs. actual behavior.
  - Screenshots, OS, Node/browser versions where applicable.

Thank you for helping build **OneLink**! 🚀
