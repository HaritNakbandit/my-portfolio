# Contentful — Content Model schema

Field definitions to create under **Content model** tab. Create all 3 content types below before entering any data (see `contentful-data.md` for the actual values to fill in once these exist).

## 1. Experience

| Field name | Type | หมายเหตุ |
|---|---|---|
| `company` | Short text | ชื่อบริษัท/โรงเรียน (ใช้ content type นี้ร่วมกับ Education ก็ได้) |
| `role` | Short text | ตำแหน่ง หรือ วุฒิ/สาขา |
| `startDate` | **Date** | ค่าเป็นวันที่จริง เช่น 2021-09-01 |
| `endDate` | **Date** | ไม่ต้องติ๊ก Required — ปล่อยว่างไว้แทนคำว่า "Present" |
| `description` | Long text | รายละเอียดงาน (ปล่อยว่างได้ถ้าไม่มี) |

## 2. Project

| Field name | Type | หมายเหตุ |
|---|---|---|
| `title` | Short text | ชื่อโปรเจกต์ |
| `image` | Media | อัปโหลดรูปจาก `public/assets/` |
| `year` | Short text | เช่น "2021" |
| `tools` | Short text | เช่น "React.js, MUI" |
| `link` | Short text | URL โปรเจกต์ |
| `description` | Long text | |

## 3. Skill

| Field name | Type | หมายเหตุ |
|---|---|---|
| `category` | Short text | เช่น "Programming Language" |
| `items` | Short text — **ติ๊ก "Many values" (list)** | array ของชื่อ skill เช่น ["React", "TypeScript"] |

## 4. Profile

Singleton — สร้างแค่ **1 entry เดียว** เท่านั้น (ไม่ใช่ list ของหลายรายการแบบ 3 ตัวข้างบน)

| Field name | Type | หมายเหตุ |
|---|---|---|
| `name` | Short text | ชื่อเต็ม |
| `jobTitle` | Short text | ตำแหน่ง เช่น "Frontend Developer" |
| `bio` | Long text | ข้อความ bio ใน Hero |
| `resumeFile` | Media | อัปโหลดไฟล์ resume PDF |
| `profilePhoto` | Media | อัปโหลดรูปจาก `public/assets/profile.jpg` |

---

## ลำดับที่แนะนำ

1. สร้างทั้ง 4 content type ให้ครบก่อน (ยังไม่ต้องใส่ข้อมูล)
2. ค่อยไปแท็บ **Content** แล้วกรอกข้อมูลจริงตาม `contentful-data.md`
3. เอา Space ID + Access Token มาให้ผมเขียนโค้ดเชื่อมต่อ
