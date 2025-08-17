const translations = {
    bg: {
        title: "Изберете вашата държава",
        contact: "Контакт",
        placeholder: "Въведете вашата страна",
    },
    hr: {
        title: "Odaberite svoju državu",
        contact: "Kontakt",
        placeholder: "Upisati državu",
    },
    cs: {
        title: "Vyberte svou zemi",
        contact: "Kontakt",
        placeholder: "Zadejte svou zemi",
    },
    da: {
        title: "Vælg dit land",
        contact: "Kontakt",
        placeholder: "Indtast dit land",
    },
    nl: { title: "Kies uw land", contact: "Contact", placeholder: "Typ uw land" },
    en: {
        title: "Choose your country",
        contact: "Contact",
        placeholder: "Type your country",
    },
    et: {
        title: "Valige oma riik",
        contact: "Kontakt",
        placeholder: "Sisestage oma riik",
    },
    fi: {
        title: "Valitse maasi",
        contact: "Ota yhteyttä",
        placeholder: "Kirjoita maasi",
    },
    fr: {
        title: "Choisissez votre pays",
        contact: "Contact",
        placeholder: "Tapez votre pays",
    },
    de: {
        title: "Wählen Sie Ihr Land",
        contact: "Kontakt",
        placeholder: "Geben Sie Ihr Land ein",
    },
    el: {
        title: "Επιλέξτε τη χώρα σας",
        contact: "Επικοινωνία",
        placeholder: "Πληκτρολογήστε τη χώρα σας",
    },
    hu: {
        title: "Válassza ki az országot",
        contact: "Kapcsolat",
        placeholder: "Írja be az ország nevét",
    },
    ga: {
        title: "Roghnaigh do thír",
        contact: "Teagmháil",
        placeholder: "Clóscríobh d’thír",
    },
    it: {
        title: "Scegli il tuo paese",
        contact: "Contatto",
        placeholder: "Digita il tuo paese",
    },
    lv: {
        title: "Izvēlieties savu valsti",
        contact: "Kontakts",
        placeholder: "Ierakstiet savu valsti",
    },
    lt: {
        title: "Pasirinkite savo šalį",
        contact: "Kontaktai",
        placeholder: "Įveskite savo šalį",
    },
    mt: {
        title: "Agħżel il-pajjiż tiegħek",
        contact: "Kuntatt",
        placeholder: "Ikteb il-pajjiż tiegħek",
    },
    pl: {
        title: "Wybierz swój kraj",
        contact: "Kontakt",
        placeholder: "Wpisz swój kraj",
    },
    pt: {
        title: "Escolha o seu país",
        contact: "Contacto",
        placeholder: "Digite o seu país",
    },
    ro: {
        title: "Alegeți țara dvs.",
        contact: "Contact",
        placeholder: "Tastați țara dvs.",
    },
    sk: {
        title: "Vyberte svoju krajinu",
        contact: "Kontakt",
        placeholder: "Zadajte svoju krajinu",
    },
    sl: {
        title: "Izberite svojo državo",
        contact: "Kontakt",
        placeholder: "Vnesite svojo državo",
    },
    es: {
        title: "Elija su país",
        contact: "Contacto",
        placeholder: "Escriba su país",
    },
    sv: {
        title: "Välj ditt land",
        contact: "Kontakt",
        placeholder: "Skriv ditt land",
    },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  const titleEl = document.getElementById("Title");
  if (titleEl) titleEl.textContent = dict.title;

  const contactEl = document.querySelector("[data-i18n='contact']") || document.querySelector(".nav_link");
  if (contactEl) contactEl.textContent = dict.contact;

  const inputEl = document.getElementById("countryInput");
  if (inputEl) inputEl.placeholder = dict.placeholder;
}

document.addEventListener("DOMContentLoaded", () => {
  // Get full browser language code (e.g., "fr-FR", "en-GB")
  const fullLang = navigator.language || navigator.userLanguage || "en";

  // Take only the first two letters for ISO 639-1 codes
  const shortLang = fullLang.slice(0,2).toLowerCase();

  // If the shortLang exists in translations, use it; otherwise default to 'en'
  const langToUse = translations[shortLang] ? shortLang : "en";

  applyTranslations(langToUse);
});

