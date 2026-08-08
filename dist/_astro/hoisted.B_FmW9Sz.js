import"./hoisted.LxCgF3yX.js";const e=document.getElementById("contact-form"),t=document.getElementById("success-box"),c=document.getElementById("mailto-fallback-link"),u=document.getElementById("reset-form-btn");e?.addEventListener("submit",a=>{a.preventDefault();const n=document.getElementById("user-name")?.value.trim(),m=document.getElementById("user-email")?.value.trim(),o=document.getElementById("app-category")?.value,i=document.getElementById("user-message")?.value.trim(),d="yorik.labs@gmail.com",l=encodeURIComponent(`Yorik Labs Inquiry: ${o} from ${n}`),r=encodeURIComponent(`Hello Yorik Labs Team,

Name: ${n}
Email: ${m}
Category of Interest: ${o}

Message / Feedback:
${i}

---
Sent via Yorik Labs Website Contact Form`),s=`mailto:${d}?subject=${l}&body=${r}`;c&&(c.href=s),window.location.href=s,t&&e&&(e.classList.add("hidden"),t.classList.remove("hidden"))});u?.addEventListener("click",()=>{t&&e&&(e.reset(),t.classList.add("hidden"),e.classList.remove("hidden"))});
