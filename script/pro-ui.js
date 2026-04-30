const PRO_MENU = [
  ["pro-dashboard.html", "dashboard", "Tableau de bord"],
  ["pro-agenda.html", "agenda", "Agenda"],
  ["pro-clients.html", "clients", "Clients"],
  ["pro-reservations.html", "reservations", "Reservations"],
  ["pro-services.html", "services", "Services & Prix"],
  ["pro-equipe.html", "equipe", "Equipe"],
  ["pro-statistiques.html", "stats", "Statistiques"],
  ["pro-avis.html", "avis", "Avis clients"],
  ["pro-marketing.html", "marketing", "Marketing"],
  ["pro-abonnement.html", "abonnement", "Abonnement"],
  ["pro-parametres.html", "params", "Parametres"],
];

function proShowToast(title, msg) {
  const c = document.getElementById("pro-toasts");
  if (!c) return;
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `<div class="toast-icon info">🔔</div><div><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

function initProPage(options) {
  const active = options.active;
  const title = options.title;
  const subtitle = options.subtitle || "Gestion quotidienne du salon";
  const breadcrumb = options.breadcrumb || title;

  const side = document.getElementById("pro-side");
  const top = document.getElementById("pro-topbar");
  const crumb = document.getElementById("pro-breadcrumb");

  if (side) {
    side.innerHTML =
      `<div class="pro-brand">Koupe</div><div class="pro-badge">ESPACE PRO</div>` +
      PRO_MENU.map(([href, key, label]) => `<a href="${href}" class="pro-link ${key === active ? "active" : ""}">${label}</a>`).join("") +
      `<div class="pro-side-footer"><a href="salon.html?id=1" class="pro-link">Voir profil salon</a><a href="index.html" class="pro-link">Retour site</a></div>`;
  }

  if (top) {
    top.innerHTML = `
      <div>
        <h1 class="pro-title">${title}</h1>
        <div class="pro-subtitle">${subtitle}</div>
      </div>
      <div class="pro-top-actions">
        <a class="btn btn-outline btn-sm" href="pro-reservations.html">+ Nouveau RDV</a>
        <a class="btn btn-ghost btn-sm" href="compte.html">Espace client</a>
      </div>`;
  }

  if (crumb) crumb.textContent = `Espace Pro / ${breadcrumb}`;
}
