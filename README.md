# Interview Question 008

## Setup after clone

### 1. Setup Backend


สร้าง PostgreSQL database ชื่อ:

```text
interview-question-008
```

แก้ไฟล์ connection string:
```text
backend/Tcc.Exam.Api/appsettings.json
```

เปลี่ยน `your_password` เป็นรหัส PostgreSQL ของเครื่องตัวเอง

```json
"DefaultConnection": "Host=localhost;Port=5432;Database=interview-question-008;Username=postgres;Password=your_password"
```

จากนั้นรัน Backend:

```bash
cd backend/Tcc.Exam.Api
dotnet restore
dotnet ef database update
dotnet run
```

Backend URL:

```text
http://localhost:5068
```

Swagger:

```text
http://localhost:5068/swagger
```

---

### 2. Setup Frontend

เปิด Terminal ใหม่ แล้วรัน:

```bash
cd frontend/exam-web
npm i
```

สร้างไฟล์ environment:

```powershell
Copy-Item src/environments/environment.example.ts src/environments/environment.ts
```

รัน Frontend:

```bash
ng serve
```

Frontend URL:

```text
http://localhost:4200
```

---

## Version Notes

โปรเจคนี้พัฒนาด้วยเวอร์ชันหลักดังนี้:

```text
Node.js: 20.x
Angular CLI: 18.x
.NET SDK: 8.x
Entity Framework CLI: 8.0.11
PostgreSQL: 16.x หรือใกล้เคียง
```

ถ้ายังไม่มี Angular CLI ให้ติดตั้งด้วยคำสั่ง:

```bash
npm install -g @angular/cli@18
```

ถ้ายังไม่มี Entity Framework CLI ให้ติดตั้งด้วยคำสั่ง:

```bash
dotnet tool install --global dotnet-ef --version 8.0.11
```

ตรวจสอบเวอร์ชันได้ด้วยคำสั่ง:

```bash
node -v
ng version
dotnet --version
dotnet ef --version
```

---

## Notes

ต้องรัน Backend และ Frontend พร้อมกัน

- Backend: `http://localhost:5068`
- Frontend: `http://localhost:4200`