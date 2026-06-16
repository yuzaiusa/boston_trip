/* ============================================================================
   Boston Trip — app logic: language toggle + hash router + rendering.
   No build step, no dependencies. Reads everything from content.js.
   ========================================================================== */

(function () {
  "use strict";

  // ---- language state ------------------------------------------------------
  var lang = localStorage.getItem("lang") || "zh"; // default: Chinese

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }
  // pick the active-language string from a { en, zh } object
  function L(obj) {
    if (obj == null) return "";
    return obj[lang] != null ? obj[lang] : obj.en;
  }
  function setLang(next) {
    lang = next;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh" : "en";
    render();
  }

  // ---- small DOM helpers ---------------------------------------------------
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function appleMapsUrl(site) {
    var q = encodeURIComponent(site.mapQuery || L(site.name));
    var ll = site.coords ? "&ll=" + site.coords[0] + "," + site.coords[1] : "";
    return "https://maps.apple.com/?q=" + q + ll;
  }

  function mapsButton(site) {
    return el(
      "a",
      { class: "btn btn-maps", href: appleMapsUrl(site), target: "_blank", rel: "noopener" },
      ["📍 " + t("openMaps")]
    );
  }

  // photo with graceful fallback to a captioned placeholder tile
  function photo(item) {
    var fig = el("figure", { class: "photo" });
    var img = el("img", {
      src: "assets/img/" + item.img,
      alt: L(item.caption),
      loading: "lazy",
    });
    img.onerror = function () {
      var ph = el("div", { class: "photo-ph" }, [
        el("span", { class: "photo-ph-emoji", text: item.emoji || "📷" }),
        el("span", { class: "photo-ph-text", text: t("photoSoon") }),
      ]);
      fig.replaceChild(ph, img);
    };
    fig.appendChild(img);
    fig.appendChild(el("figcaption", { text: L(item.caption) }));
    return fig;
  }

  // ---- header --------------------------------------------------------------
  function renderHeader(showBack) {
    var header = document.getElementById("app-header");
    header.innerHTML = "";

    var left = el("div", { class: "hdr-left" });
    if (showBack) {
      var back = el("button", { class: "btn-ghost", type: "button" }, ["‹ " + t("back")]);
      back.addEventListener("click", function () {
        if (history.length > 1) history.back();
        else location.hash = "#/";
      });
      left.appendChild(back);
    } else {
      left.appendChild(el("span", { class: "hdr-logo", text: "🦞" }));
    }

    var title = el("button", { class: "hdr-title", type: "button" }, [t("appTitle")]);
    title.addEventListener("click", function () {
      location.hash = "#/";
    });

    var toggle = el("button", { class: "btn-lang", type: "button" }, [t("langName")]);
    toggle.setAttribute("aria-label", "Switch language");
    toggle.addEventListener("click", function () {
      setLang(lang === "zh" ? "en" : "zh");
    });

    header.appendChild(left);
    header.appendChild(title);
    header.appendChild(toggle);
  }

  // ---- views ---------------------------------------------------------------
  function viewHome() {
    var wrap = el("div", { class: "view" });
    wrap.appendChild(
      el("section", { class: "hero" }, [
        el("h1", { text: L(TRIP.title) }),
        el("p", { class: "hero-sub", text: L(TRIP.subtitle) }),
      ])
    );

    var list = el("div", { class: "card-list" });
    TRIP.days.forEach(function (day, i) {
      var card = el("a", { class: "card day-card", href: "#/day/" + day.id }, [
        el("div", { class: "day-badge" }, [
          el("span", { class: "day-num", text: String(i + 1) }),
          el("span", { class: "day-label", text: L(day.label) }),
        ]),
        el("div", { class: "card-body" }, [
          el("h2", { text: L(day.title) }),
          el("p", { text: L(day.summary) }),
        ]),
        el("span", { class: "chev", text: "›" }),
      ]);
      list.appendChild(card);
    });
    wrap.appendChild(list);

    var info = el("a", { class: "card info-card", href: "#/info" }, [
      el("div", { class: "info-emoji", text: "ℹ️" }),
      el("div", { class: "card-body" }, [
        el("h2", { text: t("practical") }),
        el("p", { text: t("practicalSub") }),
      ]),
      el("span", { class: "chev", text: "›" }),
    ]);
    wrap.appendChild(info);

    return wrap;
  }

  function viewDay(id) {
    var day = TRIP.days.filter(function (d) { return d.id === id; })[0];
    if (!day) return viewHome();

    var idx = TRIP.days.indexOf(day) + 1;
    var wrap = el("div", { class: "view" });
    wrap.appendChild(
      el("section", { class: "day-head" }, [
        el("span", { class: "eyebrow", text: t("day") + " " + idx + " · " + L(day.label) }),
        el("h1", { text: L(day.title) }),
        el("p", { class: "lead", text: L(day.summary) }),
      ])
    );

    wrap.appendChild(
      el("section", { class: "panel" }, [
        el("h3", { class: "panel-title", text: "🚗 " + t("transport") }),
        el("p", { text: L(day.transport) }),
      ])
    );

    wrap.appendChild(el("h3", { class: "section-label", text: t("stops") }));
    var list = el("div", { class: "card-list" });
    day.sites.forEach(function (sid) {
      var s = TRIP.sites[sid];
      if (!s) return;
      var card = el("a", { class: "card site-card", href: "#/site/" + sid }, [
        el("span", { class: "site-emoji", text: s.emoji || "📍" }),
        el("div", { class: "card-body" }, [
          el("h2", { text: L(s.name) }),
          el("p", { class: "muted-sm", text: L(s.area) }),
          el("p", { text: L(s.summary) }),
        ]),
        el("span", { class: "chev", text: "›" }),
      ]);
      list.appendChild(card);
    });
    wrap.appendChild(list);
    return wrap;
  }

  function infoRow(label, value) {
    return el("div", { class: "fact" }, [
      el("span", { class: "fact-label", text: label }),
      el("span", { class: "fact-value", text: value }),
    ]);
  }

  function viewSite(id) {
    var s = TRIP.sites[id];
    if (!s) return viewHome();

    var wrap = el("div", { class: "view" });
    wrap.appendChild(
      el("section", { class: "site-head" }, [
        el("span", { class: "site-emoji-lg", text: s.emoji || "📍" }),
        el("h1", { text: L(s.name) }),
        el("p", { class: "muted", text: L(s.area) }),
      ])
    );

    wrap.appendChild(mapsButton(s));

    // facts
    var facts = el("div", { class: "facts" });
    if (s.walk) facts.appendChild(infoRow("🚶 " + t("walk"), L(s.walk)));
    if (s.hours) facts.appendChild(infoRow("🕒 " + t("hours"), L(s.hours)));
    if (facts.childNodes.length) wrap.appendChild(facts);

    if (s.intro)
      wrap.appendChild(
        el("section", { class: "block" }, [
          el("h3", { text: t("intro") }),
          el("p", { text: L(s.intro) }),
        ])
      );

    if (s.story)
      wrap.appendChild(
        el("section", { class: "block" }, [
          el("h3", { text: t("story") }),
          el("p", { text: L(s.story) }),
        ])
      );

    if (s.mustSee && s.mustSee.length) {
      var gallery = el("div", { class: "gallery" });
      s.mustSee.forEach(function (item) {
        gallery.appendChild(photo(item));
      });
      wrap.appendChild(
        el("section", { class: "block" }, [
          el("h3", { text: "⭐ " + t("mustSee") }),
          gallery,
        ])
      );
    }

    if (s.tips)
      wrap.appendChild(
        el("section", { class: "panel tip" }, [
          el("h3", { class: "panel-title", text: "💡 " + t("tips") }),
          el("p", { text: L(s.tips) }),
        ])
      );

    return wrap;
  }

  function viewInfo() {
    var p = TRIP.practical;
    var wrap = el("div", { class: "view" });
    wrap.appendChild(
      el("section", { class: "site-head" }, [
        el("span", { class: "site-emoji-lg", text: "ℹ️" }),
        el("h1", { text: t("practical") }),
        el("p", { class: "muted", text: L(p.intro) }),
      ])
    );
    p.sections.forEach(function (sec) {
      var block = el("section", { class: "panel" }, [
        el("h3", { class: "panel-title", text: L(sec.title) }),
        el("p", { text: L(sec.body) }),
      ]);
      if (sec.mapQuery)
        block.appendChild(
          el("a", {
            class: "btn btn-maps sm",
            href: "https://maps.apple.com/?q=" + encodeURIComponent(sec.mapQuery),
            target: "_blank",
            rel: "noopener",
          }, ["📍 " + t("openMaps")])
        );
      wrap.appendChild(block);
    });
    return wrap;
  }

  // ---- router --------------------------------------------------------------
  function render() {
    var hash = location.hash.replace(/^#\/?/, ""); // e.g. "day/thu"
    var parts = hash.split("/").filter(Boolean);
    var root = document.getElementById("app");
    var node, showBack = true;

    if (parts.length === 0) {
      node = viewHome();
      showBack = false;
    } else if (parts[0] === "day") {
      node = viewDay(parts[1]);
    } else if (parts[0] === "site") {
      node = viewSite(parts[1]);
    } else if (parts[0] === "info") {
      node = viewInfo();
    } else {
      node = viewHome();
      showBack = false;
    }

    renderHeader(showBack);
    root.innerHTML = "";
    root.appendChild(node);
    window.scrollTo(0, 0);
  }

  // ---- boot ----------------------------------------------------------------
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();
