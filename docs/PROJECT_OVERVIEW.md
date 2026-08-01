# 🚀 OneLink — Project Overview & Core Features

## 📌 Project Vision

**OneLink** is a lightweight, responsive "link-in-bio" application designed for creators, developers, and professionals. It allows users to create a single customizable landing page (`onelink.dev/username`) that consolidates all their important social links, custom URLs, and profile highlights into one place.

The goal is to keep the application **intuitive, fast, and simple**—focusing on core functionality and smooth customization rather than over-complicating the interface.

---

## 🛠 Key Features & Modules

### 1. User Authentication & Profile Handle

- **User Accounts:** Simple sign-up/login (Email + Password or OAuth).
- **Unique Slug/Handle:** Each user claims a unique URL route (e.g., `/username`).

### 2. Bio & Identity Customization

- **Profile Header:** Upload/update a **Profile Picture** and **Banner Image**.
- **Bio Info:** Display Name, Bio/Tagline.
- **Badges & Highlights:** Option to attach small visual badges to the profile header (e.g., _"Open to Work"_, _"Developer"_, _"Verified Creator"_).

### 3. Link Management

- **Social & Custom Links:** Users can add, edit, or delete links (e.g., GitHub, Twitter/X, Portfolio, LinkedIn, YouTube).
- **Link Ordering:** Simple drag-and-drop or up/down ordering so users can prioritize their top links.
- **Toggle Visibility:** Quick enable/disable switch for individual links without deleting them.

### 4. Public Profile Page (`/username`)

- **Clean Public View:** A minimalist, mobile-first page showing the user's avatar, banner, badges, bio, and interactive link buttons.
- **Fast Loading:** Highly optimized, SEO-friendly, and responsive across all device sizes.

---

## 📱 Core User Journey

1. **Sign Up & Claim Route:** User registers and sets their handle (`/username`).
2. **Setup Dashboard:** User updates profile details (Avatar, Banner, Badges, Bio).
3. **Add Links:** User pastes URLs and sets custom button labels.
4. **Share Page:** User copies their unique `/username` link to share across social platforms.

---

## 💡 Tech Stack Focus

- **Language:** TypeScript, JavaScript, HTML, CSS
- **Frontend:** React, Tailwindcss, DaisyUI (Clean, component-driven UI)
- **Backend:** Node.js + Express (REST APIs)
- **Database:** PostgreSQL or MongoDB (Handling user models, profile settings, and link relations)
