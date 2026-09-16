/* =========================================================================
   LES FLOTS DES REMPARTS — Interactions
   Lit js/config.js (window.SITE) et remplit tout le site.
   ========================================================================= */
(function () {
  "use strict";
  var S = window.SITE || {};
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Signale que le JS est actif (active les animations d'apparition en toute sécurité). */
  document.documentElement.classList.add("has-js");

  /* ---- Petites aides ---- */
  function telHref() { return "tel:" + String(S.telephoneLien || "").replace(/\s+/g, ""); }
  function setText(sel, val) { $$(sel).forEach(function (el) { if (val != null && val !== "") el.textContent = val; }); }

  /* ---- 1. Textes pilotés par la config : [data-site="clef"] ---- */
  $$("[data-site]").forEach(function (el) {
    var key = el.getAttribute("data-site");
    if (S[key] != null && S[key] !== "") el.textContent = S[key];
  });

  /* ---- 2. Liens téléphone ---- */
  $$("[data-tel]").forEach(function (el) { el.setAttribute("href", telHref()); });

  /* ---- 3. Liens e-mail ---- */
  $$("[data-mailto]").forEach(function (el) {
    if (S.email) el.setAttribute("href", "mailto:" + S.email);
  });

  /* ---- 4. Lien Google Maps ---- */
  var adresseComplete = [S.adresse, (S.codePostal || "") + " " + (S.adresseVille || "")]
    .filter(Boolean).join(", ").trim();
  var mapsUrl = S.mapsLien && S.mapsLien.indexOf("http") === 0
    ? S.mapsLien
    : "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((S.nom || "") + " " + adresseComplete);
  $$("[data-maps]").forEach(function (el) { el.setAttribute("href", mapsUrl); });

  /* Plan intégré (iframe, sans clé API) */
  var mapFrame = $("#map-frame");
  if (mapFrame) {
    var q = encodeURIComponent((S.nom ? S.nom + ", " : "") + adresseComplete || "Carcassonne");
    mapFrame.setAttribute("src", "https://www.google.com/maps?q=" + q + "&output=embed");
  }

  /* ---- 5. WhatsApp (optionnel) ---- */
  var waBtn = $("#wa-btn");
  if (waBtn) {
    var waNum = String(S.whatsapp || "").replace(/[^0-9]/g, "");
    if (waNum) {
      waBtn.setAttribute("href", "https://wa.me/" + waNum + "?text=" + encodeURIComponent(S.whatsappMessage || ""));
      waBtn.removeAttribute("hidden");
    } else {
      // Pas de numéro WhatsApp : on retire complètement le bouton (évite un lien vide).
      waBtn.parentNode.removeChild(waBtn);
    }
  }

  /* ---- 6. Réseaux sociaux (pied de page) ---- */
  var social = $("#footer-social");
  if (social) {
    var nets = [
      { url: S.instagram, label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.42.4.68.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.42-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.22-1-.48-1.4-.9-.42-.4-.68-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.42.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm6.6-3.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" },
      { url: S.facebook, label: "Facebook", path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.7V13h2.74v8h3.06z" }
    ];
    nets.forEach(function (n) {
      if (!n.url) return;
      var a = document.createElement("a");
      a.href = n.url; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", n.label);
      a.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + n.path + '"/></svg>';
      social.appendChild(a);
    });
  }

  /* ---- 7. Horaires ---- */
  var hb = $("#hours-body");
  if (hb && Array.isArray(S.horaires)) {
    // getDay() : 0=dimanche … 6=samedi. Nos données commencent au lundi.
    var jsDay = new Date().getDay();
    var todayIndex = (jsDay + 6) % 7; // lundi=0 … dimanche=6
    S.horaires.forEach(function (h, i) {
      var tr = document.createElement("tr");
      if (i === todayIndex) tr.className = "is-today";
      var isClosed = /ferm/i.test(h.creneaux || "");
      tr.innerHTML =
        "<td>" + h.jour + (i === todayIndex ? '<span class="today-flag">Aujourd\'hui</span>' : "") + "</td>" +
        '<td class="' + (isClosed ? "closed" : "") + '">' + (h.creneaux || "") + "</td>";
      hb.appendChild(tr);
    });
  }

  /* ---- 8. Données structurées : synchroniser avec la config ---- */
  try {
    var ld = $("#ld-json");
    if (ld) {
      var data = JSON.parse(ld.textContent);
      if (S.nom) data.name = S.nom;
      if (S.telephoneLien) data.telephone = S.telephoneLien;
      data.address.streetAddress = S.adresse || data.address.streetAddress;
      data.address.postalCode = S.codePostal || data.address.postalCode;
      data.address.addressLocality = S.adresseVille || data.address.addressLocality;
      ld.textContent = JSON.stringify(data);
    }
  } catch (e) { /* silencieux */ }

  /* ---- 9. Menu mobile ---- */
  var header = $("#header"), toggle = $("#nav-toggle"), links = $("#nav-links");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    if (links) $$("a", links).forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- 10. Onglets de la carte : état actif au défilement ---- */
  var tabs = $$(".menu-tab");
  var cats = tabs.map(function (t) { return $(t.getAttribute("href")); }).filter(Boolean);
  if (cats.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = "#" + en.target.id;
          tabs.forEach(function (t) { t.classList.toggle("is-active", t.getAttribute("href") === id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    cats.forEach(function (c) { io.observe(c); });
  }

  /* ---- 11. Formulaire de réservation → e-mail pré-rempli ---- */
  var form = $("#reserve-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var v = function (id) { var el = $("#" + id); return el ? el.value : ""; };
      var dateStr = v("r-date");
      try {
        if (dateStr) dateStr = new Date(dateStr + "T00:00").toLocaleDateString("fr-FR",
          { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      } catch (e) {}
      var subject = "Demande de réservation — " + v("r-name") + " (" + v("r-covers") + " pers.)";
      var body =
        "Bonjour,\n\nJe souhaite réserver une table :\n\n" +
        "• Nom : " + v("r-name") + "\n" +
        "• Téléphone : " + v("r-phone") + "\n" +
        "• Personnes : " + v("r-covers") + "\n" +
        "• Date : " + dateStr + "\n" +
        "• Heure : " + v("r-time") + "\n" +
        (v("r-msg") ? "• Message : " + v("r-msg") + "\n" : "") +
        "\nMerci de me confirmer. Bonne journée !";
      var mail = "mailto:" + (S.email || "") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = mail;
    });
  }

  /* ---- 12. Lightbox (carte imprimée) ---- */
  var lb = $("#lightbox"), lbClose = $("#lightbox-close"), thumb = $("#carte-thumb");
  function openLb() { if (lb) { lb.classList.add("is-open"); document.body.style.overflow = "hidden"; } }
  function closeLb() { if (lb) { lb.classList.remove("is-open"); document.body.style.overflow = ""; } }
  if (thumb) thumb.addEventListener("click", openLb);
  if (lbClose) lbClose.addEventListener("click", closeLb);
  if (lb) lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });

  /* ---- 13. Animations d'apparition ---- */
  var reveals = $$(".reveal");
  function revealAll() { reveals.forEach(function (el) { el.classList.add("is-visible"); }); }
  if (reveals.length && "IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
    // Filet de sécurité : rien ne doit rester invisible.
    window.addEventListener("load", function () { setTimeout(revealAll, 2500); });
  } else {
    revealAll();
  }

  /* ---- 14. Année en cours (pied de page) ---- */
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
})();
