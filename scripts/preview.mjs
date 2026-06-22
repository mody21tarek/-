import http from 'node:http';

const port = Number(process.env.PORT || 3000);
const services = ['بيع التكييفات', 'التركيب', 'الصيانة', 'التنظيف', 'شحن الفريون', 'عقود الصيانة', 'غرف التبريد', 'غرف التجميد', 'أنظمة VRF', 'التكييف المركزي'];
const products = ['تكييف سبليت 1.5 حصان', 'فلتر هواء عالي الكفاءة', 'كمبروسر تبريد', 'تكييف مركزي VRF'];
const kpis = ['إجمالي العملاء', 'العقود النشطة', 'إيراد الشهر', 'الطلبات المفتوحة'];

function layout(title, body) {
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>
  :root{--primary:#075985;--accent:#06b6d4;--dark:#0f172a;--muted:#64748b;--bg:#f8fafc;--card:#fff}*{box-sizing:border-box}body{margin:0;font-family:Tahoma,Arial,sans-serif;background:var(--bg);color:var(--dark)}a{text-decoration:none;color:inherit}.container{max-width:1180px;margin:auto;padding:0 20px}.nav{position:sticky;top:0;background:#ffffffdd;backdrop-filter:blur(12px);border-bottom:1px solid #e2e8f0}.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px}.brand{font-weight:900;color:var(--primary);font-size:28px}.links{display:flex;gap:18px}.btn{display:inline-flex;padding:12px 18px;border-radius:14px;background:var(--primary);color:white;font-weight:800}.secondary{background:#e0f2fe;color:var(--primary)}.hero{background:linear-gradient(135deg,#082f49,#0e7490);color:white;padding:76px 0}.grid{display:grid;gap:22px}.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.card{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:24px;box-shadow:0 12px 35px #0f172a0d}.section{padding:56px 0}.kicker{color:var(--accent);font-weight:900}.title{font-size:42px;line-height:1.25;margin:10px 0}.muted{color:var(--muted);line-height:1.9}.stat{font-size:34px;font-weight:900;color:var(--primary)}.footer{background:#0f172a;color:white;padding:32px 0}.whatsapp{position:fixed;bottom:20px;left:20px;background:#22c55e;color:white;border-radius:999px;padding:14px 18px;font-weight:900}.dashboard{display:grid;grid-template-columns:260px 1fr;min-height:100vh}.sidebar{background:#0f172a;color:white;padding:24px}.main{padding:28px}@media(max-width:800px){.grid-2,.grid-3,.grid-4,.dashboard{grid-template-columns:1fr}.links{display:none}.title{font-size:30px}}
  </style></head><body>${body}</body></html>`;
}

function nav() {
  return `<nav class="nav"><div class="container nav-inner"><a class="brand" href="/">Cold Air</a><div class="links"><a href="/#services">الخدمات</a><a href="/store">المتجر</a><a href="/projects">المشروعات</a><a href="/admin">لوحة التحكم</a><a class="btn" href="/#booking">طلب خدمة</a></div></div></nav>`;
}

function home() {
  return layout('Cold Air | كولد إير', `${nav()}<header class="hero"><div class="container grid grid-2"><div><p class="kicker">منصة عربية لإدارة خدمات التكييف والتبريد</p><h1 class="title">Cold Air تجمع الموقع التعريفي، المتجر، والحلول الإدارية في نظام واحد قابل للتوسع.</h1><p>بيع وتركيب وصيانة وتنظيف وشحن فريون وعقود سنوية وإدارة فروع وفنيين ومخزون وفواتير.</p><p><a class="btn" href="#booking">اطلب خدمة الآن</a> <a class="btn secondary" href="/store">تصفح المتجر</a></p></div><div class="card"><div class="stat">24/7</div><p class="muted">استقبال طلبات العملاء وتتبع الطلبات والعقود والفواتير من لوحة موحدة.</p></div></div></header><main><section id="services" class="section"><div class="container"><h2>خدماتنا</h2><div class="grid grid-3">${services.map((service) => `<article class="card"><h3>${service}</h3><p class="muted">خدمة احترافية مع جدولة، إسناد فني، وسجل متابعة كامل.</p></article>`).join('')}</div></div></section><section class="section"><div class="container"><h2>منتجات مميزة</h2><div class="grid grid-4">${products.map((product, index) => `<article class="card"><h3>${product}</h3><p>المخزون: ${24 - index * 4}</p><p class="muted">مواصفات، تقييمات، ومنتجات مرتبطة.</p></article>`).join('')}</div></div></section><section class="section"><div class="container grid grid-3"><div class="card"><h3>العلامات التجارية</h3><p class="muted">Carrier · LG · Samsung · Midea · Sharp</p></div><div class="card"><h3>لماذا نحن؟</h3><p class="muted">فنيون متخصصون، ضمان، تقارير، وفروع متعددة.</p></div><div class="card"><h3>آراء العملاء</h3><p class="muted">خدمة سريعة وتنظيم ممتاز ومتابعة بعد التركيب.</p></div></div></section><section id="booking" class="section"><div class="container card"><h2>تواصل واطلب خدمة</h2><p class="muted">نموذج الطلب يشمل بيانات العميل، الموقع، نوع الجهاز، الوصف، التاريخ المفضل، ورفع الصور.</p></div></section></main><a class="whatsapp" href="https://wa.me/201000000000">واتساب</a><footer class="footer"><div class="container">Cold Air © منصة عربية فقط</div></footer>`);
}

function admin() {
  const modules = ['الفروع', 'العملاء', 'الأجهزة', 'الطلبات', 'الفنيون', 'العقود', 'الفواتير', 'المخزون', 'الموردون', 'المالية', 'الكوبونات', 'سجل التدقيق'];
  return layout('Cold Air ERP', `<div class="dashboard"><aside class="sidebar"><h1>Cold Air ERP</h1>${modules.map((module) => `<p>${module}</p>`).join('')}</aside><main class="main"><h2>لوحة التحكم</h2><div class="grid grid-4">${kpis.map((kpi, index) => `<div class="card"><p>${kpi}</p><div class="stat">${[128, 34, '82K', 17][index]}</div></div>`).join('')}</div><section class="card" style="margin-top:24px"><h3>الطلبات الحديثة</h3><p class="muted">جديد · قيد المراجعة · مسند · قيد التنفيذ · مكتمل</p></section></main></div>`);
}

function store() {
  return layout('متجر Cold Air', `${nav()}<main class="section"><div class="container"><h1>المتجر</h1><div class="grid grid-3">${products.map((product) => `<article class="card"><h3>${product}</h3><p class="muted">دفع نقدي، فودافون كاش، أو إنستا باي.</p><a class="btn">أضف للسلة</a></article>`).join('')}</div></div></main>`);
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url ?? '/', `http://${request.headers.host}`);
  const page = url.pathname === '/admin' ? admin() : url.pathname === '/store' ? store() : home();
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  response.end(page);
});

server.listen(port, () => {
  console.log(`Cold Air preview is running: http://localhost:${port}`);
  console.log(`Admin dashboard preview: http://localhost:${port}/admin`);
});
