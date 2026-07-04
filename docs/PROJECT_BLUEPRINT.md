# IMPORTANT
This document is the official project blueprint.
Its purpose is ONLY to provide context and define the design system, architecture, goals, UI philosophy, component library, and development rules.
DO NOT modify any code after reading this document.
DO NOT generate implementation.
DO NOT create files.
DO NOT edit existing files.
DO NOT start any task automatically.
Wait until a dedicated implementation prompt is provided.
Every future prompt should be considered as a separate implementation task while this document remains the permanent reference.


Job Platform Blueprint v2.0.
Project Definition:
Project Name: Employment & Recruitment Platform.
Project Type: Multi-Service Employment Ecosystem Platform.
Target Market: Saudi Arabia.
Front-End Stack:
HTML5
Bootstrap 5.3+
CSS3
Vanilla JavaScript
Design Style
Modern SaaS + Employment Marketplace

Inspired By:
Linear
Stripe
Vercel
Framer
Clerk

Core Mission:
إنشاء منصة تجمع جميع خدمات سوق العمل في مكان واحد.
المنصة لا تقتصر على الوظائف فقط.
بل تشمل:
الباحثين عن عمل
الشركات
شركات التوظيف
شركات الاستقدام
شركات تأجير العمالة
العمالة المنزلية
التنازل عن العمالة
العمل الموسمي
العمل الجزئي
العمل عن بعد

User Types:
Candidate:
الباحث عن عمل
Goals:
البحث عن وظائف
إنشاء حساب
رفع السيرة الذاتية
التقديم على الوظائف

Employer:
الشركات
Goals:
نشر الوظائف
البحث عن المرشحين
إدارة الوظائف

Recruitment Company:
شركات التوظيف
Goals:
عرض الخدمات
إدارة الوظائف
استقطاب المرشحين

Recruitment Office:
مكاتب التوظيف
Goals:
عرض الخدمات
استقبال الطلبات

Labor Services:
Goals:
تأجير العمالة
العمالة المنزلية
التنازل عن العمالة


Site Map
Home
├── Jobs
│   ├── Executive Jobs
│   ├── Professional Jobs
│   ├── Remote Jobs
│   ├── Part Time Jobs
│   └── Seasonal Jobs
│
├── Companies
│   ├── Company Listing
│   └── Company Details
│
├── Recruitment
│   ├── Recruitment Companies
│   ├── Recruitment Offices
│   └── Recruitment Details
│
├── Labor Services
│   ├── Labor Rental
│   ├── Domestic Workers
│   └── Transfer Workers
│
├── Candidates
│   ├── Candidate Listing
│   └── Candidate Profile
│
├── Post Job
│
├── About
├── Contact
├── FAQ
│
├── Login
├── Register
└── Dashboard


Home Page Architecture:
Section 01: Navbar
Section 02: Hero
Section 03: Main Search Engine

Section 04: Main Service Portals
7 Portal Cards:
Executive Jobs
Professional Jobs
Recruitment Companies
Recruitment Offices
Labor Rental
Transfer Workers
Domestic Workers

Section 05: Flexible Work
Remote
Part-Time
Seasonal

Section 06:
Featured Jobs
Latest jobs

Section 07:
Executive Jobs
Premium positions

Section 08:
Professional Jobs
Popular jobs

Section 09:
Featured Companies
Top employers

Section 10:
Recruitment Companies
Featured agencies

Section 11:
Labor Services
HR Solutions

Section 12:
Featured Candidates
Talent showcase

Section 13: Platform Statistics
Section 14: How It Works
Section 15: Why Choose Us
Section 16: Testimonials
Section 17: FAQ
Section 18: CTA
Section 19: Footer

User Flow:
Candidate:
Home
↓
Search Job
↓
Job Details
↓
Register/Login
↓
Apply
↓
Dashboard

Employer:
Home
↓
Post Job
↓
Register/Login
↓
Employer Dashboard
↓
Manage Jobs

Recruitment Company:
Home
↓
Company Page
↓
Register
↓
Publish Services


Design Tokens:
Border Radius:
12px
16px
20px
24px

Shadows:
Soft Shadow
Medium Shadow

Container Widths:
1320px
1140px
960px
Bootstrap Standard.

Color System:
Light Theme:
Primary      #2563EB
Secondary    #7C3AED
Success      #10B981
Warning      #F59E0B
Danger       #EF4444
Background   #F8FAFC
Surface      #FFFFFF
Text         #0F172A
Muted        #64748B
Border       #E2E8F0

Dark Theme:
Primary      #3B82F6
Secondary    #8B5CF6
Background   #0F172A
Surface      #1E293B
Text         #F8FAFC
Muted        #94A3B8
Border       #334155

Portal Colors:
Purple
Blue
Green
Orange
Amber
Indigo
Teal

Typography:
Font Family: Arabic (Cairo)
Fallback:  - IBM Plex Sans Arabic

Component Library:
Shared Components:
Buttons:
Primary
Secondary
Outline

Cards:
Job Card
Company Card
Candidate Card
Service Portal Card
Statistic Card
Testimonial Card

UI Components:
Breadcrumb
Accordion
Tabs
Pagination
Dropdown
Modal
Toast
Search Form
Section Header
Theme Toggle

Animations:
Allowed:
Fade Up
Fade In
Slide Up
Hover Lift
Counter Animation

Not Allowed:
Excessive Rotation
Heavy Parallax
Distracting Motion

Responsive Rules:
Mobile: 320px+
Tablet: 768px+
Laptop: 992px+
Desktop: 1200px+
Large Desktop: 1400px+

Development Rules For VS Code Agent
Bootstrap First
إذا وفر Bootstrap الميزة فلا تكتب CSS إضافي.

CSS Rules:
استخدام CSS Variables حيثما أمكن.
إزالة التكرار.
عدم استخدام !important إلا للضرورة القصوى.
عدم استخدام Inline CSS.

JavaScript Rules:
عدم استخدام jQuery.
استخدام Vanilla JS فقط.
عدم استخدام Inline JS.
فصل المنطق عن الواجهة.

Accessibility:
Semantic HTML.
Alt Images.
Keyboard Navigation.
Focus States.

Performance:
Lazy Loading.
Minified Assets.
Reusable Components.