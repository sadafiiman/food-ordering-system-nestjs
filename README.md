<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">🍔 Food Ordering System API</h1>

<p align="center">
A scalable backend system built with <a href="https://nestjs.com/">NestJS</a>, Prisma ORM, PostgreSQL, and JWT authentication.
</p>

---

## 🚀 Features

- 🔐 JWT Authentication (Register / Login)
- 👤 User & Admin roles
- 🧑‍🍳 Food management (Admin)
- 📦 Order system
- 📅 Food availability scheduling
- 🛡️ Role-based access control (RBAC)
- 🐘 PostgreSQL + Prisma ORM
- 🐳 Docker support

---

## 📦 Project Setup

```bash
npm install
```

---

## ⚙️ Environment Variables

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/food_db"

JWT_SECRET="your_secret_key"
JWT_EXPIRES_IN="1d"
```

---

## 🗄️ Database (Prisma)

- Generate Prisma client
```bash
npx prisma generate
```

- Run migrations
```bash
npx prisma migrate dev
```

- Reset database (fresh start)
```bash
npx prisma migrate reset
```

## 🌱 Seeder (Default Admin User)

```bash
npm run seed
```

---

## 🐳 Docker Setup

```bash
docker compose up --build
```


---

## 🧪 Postman Collection
- Import this file into Postman:
```bash
Food-Ordering-System.postman_collection.json
```

---

## 📚 Tech Stack
- NestJS
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt
- Docker


---

## 📌 Notes

- Admin can activate/deactivate users
- Users start as inactive by default
- Only active users can login
- Menu is public, everything else is protected

---


## 🧠 Future Improvements

- Payment integration
- Email verification
- Redis caching
- Swagger API docs
- Rate limiting


---

## 🚀 If you want next step

I can help you upgrade this project to production-level:

- Swagger documentation (`/api/docs`)
- RBAC guard (ADMIN vs USER properly enforced)
- Seeder script (real Prisma seed file)
- Docker compose (Postgres + API + migration auto-run)
- Clean architecture refactor (modules separation like enterprise apps)

Just tell me 👍


