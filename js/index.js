const langSwitcher = document.getElementById("language-switcher");

// Fetch translations JSON
fetch("../data/translate.json")
  .then((res) => res.json())
  .then((data) => {
    // Detect the current language from the <html lang="..."> attribute
    const lang = document.documentElement.lang || "en";

    // Get translations for this language
    const t = data[lang];

    // navbar translations
    document.getElementById("home").textContent = t.navbar.home;
    document.getElementById("about").textContent = t.navbar.about;
    document.getElementById("doctors").textContent = t.navbar.doctors;
    document.getElementById("pricing").textContent = t.navbar.pricing;
    document.getElementById("booknow").textContent = t.navbar.booknow;
  })
  .catch((err) => console.error("Error loading translations:", err));

langSwitcher.value = document.documentElement.lang;

langSwitcher.addEventListener("change", (e) => {
  const selectedLang = e.target.value;

  if (selectedLang === "en") {
    window.location.href = "/en/";
  } else if (selectedLang === "fr") {
    window.location.href = "/fr/";
  }
});
