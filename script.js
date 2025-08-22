const euCountries = [
    'AT', // Austria
    'BE', // Belgium
    'BG', // Bulgaria
    'HR', // Croatia
    'CY', // Cyprus
    'CZ', // Czechia
    'DK', // Denmark
    'EE', // Estonia
    'FI', // Finland
    'FR', // France
    'DE', // Germany
    'GR', // Greece
    'HU', // Hungary
    'IE', // Ireland
    'IT', // Italy
    'LV', // Latvia
    'LT', // Lithuania
    'LU', // Luxembourg
    'MT', // Malta
    'NL', // Netherlands
    'PL', // Poland
    'PT', // Portugal
    'RO', // Romania
    'SK', // Slovakia
    'SI', // Slovenia
    'ES', // Spain
    'SE'  // Sweden
];

const countryPaths = {
    'AT': 'Countries/Austria/Austria.html',
    'BE': 'Countries/Belgium/Belgium.html',
    'BG': 'Countries/Bulgaria/Bulgaria.html',
    'HR': 'Countries/Croatia/Croatia.html',
    'CY': 'Countries/Cyprus/Cyprus.html',
    'CZ': 'Countries/Czechia/Czechia.html',
    'DK': 'Countries/Denmark/Denmark.html',
    'EE': 'Countries/Estonia/Estonia.html',
    'FI': 'Countries/Finland/Finland.html',
    'FR': 'Countries/France/France.html',
    'DE': 'Countries/Germany/Germany.html',
    'GR': 'Countries/Greece/Greece.html',
    'HU': 'Countries/Hungary/Hungary.html',
    'IE': 'Countries/Ireland/Ireland.html',
    'IT': 'Countries/Italy/Italy.html',
    'LV': 'Countries/Latvia/Latvia.html',
    'LT': 'Countries/Lithuania/Lithuania.html',
    'LU': 'Countries/Luxembourg/Luxembourg.html',
    'MT': 'Countries/Malta/Malta.html',
    'NL': 'Countries/Netherlands/Netherlands.html',
    'PL': 'Countries/Poland/Poland.html',
    'PT': 'Countries/Portugal/Portugal.html',
    'RO': 'Countries/Romania/Romania.html',
    'SK': 'Countries/Slovakia/Slovakia.html',
    'SI': 'Countries/Slovenia/Slovenia.html',
    'ES': 'Countries/Spain/Spain.html',
    'SE': 'Countries/Sweden/Sweden.html'
};

// Add this translation object for the page content
const pageTranslations = {
    en: {
        title: "Redirecting....",
        message: "Allow us to use your location to bring you to the appropriate website."
    },
    de: {
        title: "Weiterleitung....",
        message: "Erlauben Sie uns, Ihren Standort zu verwenden, um Sie zur entsprechenden Website zu bringen."
    },
    fr: {
        title: "Redirection....",
        message: "Autorisez-nous à utiliser votre position pour vous amener au site web approprié."
    },
    es: {
        title: "Redirigiendo....",
        message: "Permítanos usar su ubicación para llevarlo al sitio web apropiado."
    },
    it: {
        title: "Reindirizzamento....",
        message: "Consentici di utilizzare la tua posizione per portarti al sito web appropriato."
    },
    nl: {
        title: "Doorsturen....",
        message: "Sta ons toe uw locatie te gebruiken om u naar de juiste website te brengen."
    },
    pl: {
        title: "Przekierowywanie....",
        message: "Pozwól nam użyć Twojej lokalizacji, aby przenieść Cię na odpowiednią stronę."
    },
    pt: {
        title: "Redirecionando....",
        message: "Permita-nos usar sua localização para levá-lo ao site apropriado."
    },
    ro: {
        title: "Redirecționare....",
        message: "Permiteți-ne să vă folosim locația pentru a vă duce pe site-ul potrivit."
    },
    hu: {
        title: "Átirányítás....",
        message: "Engedélyezze, hogy a helymeghatározás segítségével a megfelelő weboldalra juttassuk."
    },
    sv: {
        title: "Omdirigerar....",
        message: "Tillåt oss att använda din plats för att ta dig till den lämpliga webbplatsen."
    },
    cs: {
        title: "Přesměrování....",
        message: "Povolte nám použít vaši polohu, abychom vás dovedli na příslušný web."
    },
    da: {
        title: "Omdirigering....",
        message: "Tillad os at bruge din placering for at bringe dig til den passende hjemmeside."
    },
    fi: {
        title: "Uudelleenohjaus....",
        message: "Salli sijaintisi käyttö, jotta voimme viedä sinut sopivalle verkkosivustolle."
    },
    el: {
        title: "Ανακατεύθυνση....",
        message: "Επιτρέψτε μας να χρησιμοποιήσουμε την τοποθεσία σας για να σας μεταφέρουμε στον κατάλληλο ιστότοπο."
    },
    sk: {
        title: "Presmerovanie....",
        message: "Povoľte nám použiť vašu polohu, aby sme vás priviedli na príslušnú webovú stránku."
    },
    sl: {
        title: "Preusmerjanje....",
        message: "Dovolite nam, da uporabimo vašo lokacijo, da vas pripeljemo na ustrezen spletni strani."
    },
    et: {
        title: "Ümbersuunamine....",
        message: "Lubage meil kasutada teie asukohta, et viia teid sobivale veebisaidile."
    },
    lv: {
        title: "Pārvirzīšana....",
        message: "Atļaujiet mums izmantot jūsu atrašanās vietu, lai novestu jūs uz atbilstošo vietni."
    },
    lt: {
        title: "Peradresavimas....",
        message: "Leiskite mums naudoti jūsų vietą, kad nukreiptume jus į atitinkamą svetainę."
    },
    mt: {
        title: "Qed indirizza....",
        message: "Ippermettilna nużaw il-lokazzjoni tiegħek biex inġibuk fuq is-sit web xieraq."
    },
    hr: {
        title: "Preusmjeravanje....",
        message: "Dopustite nam da upotrijebimo vašu lokaciju kako bismo vas doveli do odgovarajuće web stranice."
    },
    bg: {
        title: "Пренасочване....",
        message: "Позволете ни да използваме местоположението ви, за да ви пренесем на подходящия уебсайт."
    }
};

// Function to get appropriate language based on browser language
function getAppropriateLanguage() {
    const browserLang = navigator.language.slice(0, 2);
    const euLanguages = Object.keys(pageTranslations);
    
    // Check if browser language is one of the EU languages
    if (euLanguages.includes(browserLang)) {
        return browserLang;
    }
    
    // Default to English for non-EU languages
    return 'en';
}

// Function to translate page content
function translatePageContent() {
    const lang = getAppropriateLanguage();
    const translations = pageTranslations[lang] || pageTranslations.en;
    
    // Update h1
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = translations.title;
    }
    
    // Update paragraph
    const messageElement = document.querySelector('p');
    if (messageElement) {
        messageElement.textContent = translations.message;
    }
}

// Updated handleGeolocationError function
function handleGeolocationError(error) {
    const lang = getAppropriateLanguage();
    let message = '';
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            if (lang === 'en') message = 'Location access denied. Please enable location services.';
            else if (lang === 'de') message = 'Standortzugriff verweigert. Bitte aktivieren Sie die Standortdienste.';
            else if (lang === 'fr') message = 'Accès à la localisation refusé. Veuillez activer les services de localisation.';
            else if (lang === 'es') message = 'Acceso a la ubicación denegado. Por favor, active los servicios de localización.';
            else if (lang === 'it') message = 'Accesso alla posizione negato. Si prega di abilitare i servizi di localizzazione.';
            else if (lang === 'nl') message = 'Toegang tot locatie geweigerd. Schakel locatieservices in.';
            else if (lang === 'pl') message = 'Dostęp do lokalizacji odrzucony. Proszę włączyć usługi lokalizacji.';
            else if (lang === 'pt') message = 'Acesso à localização negado. Por favor, ative os serviços de localização.';
            else if (lang === 'ro') message = 'Acces la locație refuzat. Vă rugăm să activați serviciile de localizare.';
            else if (lang === 'hu') message = 'Helymeghatározási hozzáférés megtagadva. Kérjük, engedélyezze a helymeghatározási szolgáltatásokat.';
            else if (lang === 'sv') message = 'Platstillstånd nekades. Vänligen aktivera platstjänster.';
            else if (lang === 'cs') message = 'Přístup k poloze byl odepřen. Povolte prosím služby určování polohy.';
            else if (lang === 'da') message = 'Placering adgang nægtet. Aktiver venligst placeringstjenester.';
            else if (lang === 'fi') message = 'Sijainnin käyttö estetty. Ota sijaintipalvelut käyttöön.';
            else if (lang === 'el') message = 'Απορρίφθηκε η πρόσβαση στη θέση. Ενεργοποιήστε τις υπηρεσίες θέσης.';
            else if (lang === 'sk') message = 'Prístup k polohe bol zamietnutý. Povoľte prosím služby určovania polohy.';
            else if (lang === 'sl') message = 'Dostop do lokacije je zavrnjen. Prosimo, omogočite lokacijske storitve.';
            else if (lang === 'et') message = 'Asukoha juurdepääs keelati. Palun lubage asukohateenused.';
            else if (lang === 'lv') message = 'Atrašanās vietas piekļuve liegta. Lūdzu, ieslēdziet atrašanās vietas servisus.';
            else if (lang === 'lt') message = 'Vietos prieiga uždrausta. Įjunkite vietos nustatymo paslaugas.';
            else if (lang === 'mt') message = 'Aċċess għall-post miċħud. Jekk jogħġbok attiva s-servizzi tal-post.';
            else if (lang === 'hr') message = 'Pristup lokaciji odbijen. Molimo omogućite usluge lociranja.';
            else if (lang === 'bg') message = 'Достъпът до местоположението е отказан. Моля, активирайте услугите за местоположение.';
            break;
            
        case error.POSITION_UNAVAILABLE:
            if (lang === 'en') message = 'Location information unavailable.';
            else if (lang === 'de') message = 'Standortinformationen nicht verfügbar.';
            else if (lang === 'fr') message = 'Informations de localisation indisponibles.';
            else if (lang === 'es') message = 'Información de ubicación no disponible.';
            else if (lang === 'it') message = 'Informazioni sulla posizione non disponibili.';
            else if (lang === 'nl') message = 'Locatie-informatie niet beschikbaar.';
            else if (lang === 'pl') message = 'Informacje o lokalizacji niedostępne.';
            else if (lang === 'pt') message = 'Informação de localização indisponível.';
            else if (lang === 'ro') message = 'Informații despre locație indisponibile.';
            else if (lang === 'hu') message = 'Helymeghatározási információk nem elérhetők.';
            else if (lang === 'sv') message = 'Platsinformation inte tillgänglig.';
            else if (lang === 'cs') message = 'Informace o poloze není k dispozici.';
            else if (lang === 'da') message = 'Placeringsinformation utilgængelig.';
            else if (lang === 'fi') message = 'Sijaintitietoja ei saatavilla.';
            else if (lang === 'el') message = 'Πληροφορίες θέσης μη διαθέσιμες.';
            else if (lang === 'sk') message = 'Informácie o polohe nie sú k dispozícii.';
            else if (lang === 'sl') message = 'Informacije o lokaciji niso na voljo.';
            else if (lang === 'et') message = 'Asukohateave pole saadaval.';
            else if (lang === 'lv') message = 'Informācija par atrašanās vietu nav pieejama.';
            else if (lang === 'lt') message = 'Vietos informacija neprieinama.';
            else if (lang === 'mt') message = 'Informazzjoni dwar il-post mhux disponibbli.';
            else if (lang === 'hr') message = 'Informacije o lokaciji nisu dostupne.';
            else if (lang === 'bg') message = 'Информация за местоположението не е налична.';
            break;
            
        case error.TIMEOUT:
            if (lang === 'en') message = 'Location request timed out.';
            else if (lang === 'de') message = 'Zeitüberschreitung bei der Standortanfrage.';
            else if (lang === 'fr') message = 'Délai de demande de localisation dépassé.';
            else if (lang === 'es') message = 'Tiempo de espera de la solicitud de ubicación agotado.';
            else if (lang === 'it') message = 'Timeout della richiesta di posizione.';
            else if (lang === 'nl') message = 'Time-out bij locatieverzoek.';
            else if (lang === 'pl') message = 'Przekroczono czas żądania lokalizacji.';
            else if (lang === 'pt') message = 'Tempo limite da solicitação de localização esgotado.';
            else if (lang === 'ro') message = 'Timpul de așteptare pentru cererea de locație a expirat.';
            else if (lang === 'hu') message = 'A helymeghatározási kérelem időtúllépést szenvedett.';
            else if (lang === 'sv') message = 'Platsförfrågan tog för lång tid.';
            else if (lang === 'cs') message = 'Časový limit požadavku na polohu vypršel.';
            else if (lang === 'da') message = 'Placeringsanmodning timeout.';
            else if (lang === 'fi') message = 'Sijainnin hakuaika loppui.';
            else if (lang === 'el') message = 'Το αίτημα θέσης έληξε.';
            else if (lang === 'sk') message = 'Časový limit žiadosti o polohu vypršal.';
            else if (lang === 'sl') message = 'Zahteva za lokacijo je potekla.';
            else if (lang === 'et') message = 'Asukohapäring aegus.';
            else if (lang === 'lv') message = 'Pārsniegts vietas pieprasījuma noildze.';
            else if (lang === 'lt') message = 'Pasibaigė vietos užklausos laikas.';
            else if (lang === 'mt') message = 'Talba għall-post waqfet.';
            else if (lang === 'hr') message = 'Vrijeme zahtjeva za lokaciju je isteklo.';
            else if (lang === 'bg') message = 'Времето за заявка за местоположение изтече.';
            break;
            
        default:
            if (lang === 'en') message = 'An unknown error occurred.';
            else if (lang === 'de') message = 'Ein unbekannter Fehler ist aufgetreten.';
            else if (lang === 'fr') message = 'Une erreur inconnue est survenue.';
            else if (lang === 'es') message = 'Ocurrió un error desconocido.';
            else if (lang === 'it') message = 'Si è verificato un errore sconosciuto.';
            else if (lang === 'nl') message = 'Er is een onbekende fout opgetreden.';
            else if (lang === 'pl') message = 'Wystąpił nieznany błąd.';
            else if (lang === 'pt') message = 'Ocorreu um erro desconhecido.';
            else if (lang === 'ro') message = 'A apărut o eroare necunoscută.';
            else if (lang === 'hu') message = 'Ismeretlen hiba történt.';
            else if (lang === 'sv') message = 'Ett okänt fel inträffade.';
            else if (lang === 'cs') message = 'Došlo k neznámé chybě.';
            else if (lang === 'da') message = 'En ukendt fejl opstod.';
            else if (lang === 'fi') message = 'Tuntematon virhe tapahtui.';
            else if (lang === 'el') message = 'Παρουσιάστηκε άγνωστο σφάλμα.';
            else if (lang === 'sk') message = 'Vyskytla sa neznáma chyba.';
            else if (lang === 'sl') message = 'Prišlo je do neznane napake.';
            else if (lang === 'et') message = 'Tekkis tundmatu viga.';
            else if (lang === 'lv') message = 'Radās nezināma kļūda.';
            else if (lang === 'lt') message = 'Įvyko nežinoma klaida.';
            else if (lang === 'mt') message = 'Seħħ żball mhux magħruf.';
            else if (lang === 'hr') message = 'Došlo je do nepoznate pogreške.';
            else if (lang === 'bg') message = 'Възникна неизвестна грешка.';
            break;
    }
    
    showError(message, lang);
}

// Update DOMContentLoaded to include page translation
/*document.addEventListener("DOMContentLoaded", () => {
    translatePageContent(); // Translate h1 and p elements
    createManualButton();
    setTimeout(() => {
        detectAndRedirect();
    }, 1000);
});*/

function detectAndRedirect() {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
        showError("Geolocation is not supported by your browser");
        return;
    }

    // Show loading message
    const loadingMessage = document.createElement('div');
    loadingMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px;
        border-radius: 10px;
        z-index: 1000;
        text-align: center;
    `;
    loadingMessage.textContent = 'Detecting your location...';
    document.body.appendChild(loadingMessage);

    // Get user's location
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                
                // Reverse geocode to get country code
                const countryCode = await getCountryCode(latitude, longitude);
                
                // Remove loading message
                document.body.removeChild(loadingMessage);
                
                // Check if country is in EU
                if (euCountries.includes(countryCode)) {
                    // Redirect to country-specific page
                    const path = countryPaths[countryCode];
                    if (path) {
                        window.location.href = path;
                    } else {
                        showError('Country page not found');
                    }
                } else {
                    showError('Sorry, this service is only available for EU countries :(');
                }
            } catch (error) {
                document.body.removeChild(loadingMessage);
                showError('Error detecting your location: ' + error.message);
            }
        },
        (error) => {
            document.body.removeChild(loadingMessage);
            handleGeolocationError(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 600000
        }
    );
}

async function getCountryCode(lat, lng) {
    try {
        // Using OpenStreetMap Nominatim API for reverse geocoding
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`);
        const data = await response.json();
        
        return data.address.country_code.toUpperCase();
    } catch (error) {
        throw new Error('Could not determine country from coordinates');
    }
}

function handleGeolocationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            showError('Location access denied. Please enable location services to use this feature.');
            break;
        case error.POSITION_UNAVAILABLE:
            showError('Location information unavailable.');
            break;
        case error.TIMEOUT:
            showError('Location request timed out.');
            break;
        default:
            showError('An unknown error occurred.');
            break;
    }
}

function showError(message) {
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 0, 0, 0.9);
        color: white;
        padding: 30px;
        border-radius: 15px;
        z-index: 1000;
        text-align: center;
        max-width: 80%;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    errorDiv.innerHTML = `
        <h2 style="margin: 0 0 15px 0; font-size: 24px;">⚠️ Error</h2>
        <p style="margin: 0 0 20px 0; font-size: 18px;">${message}</p>
        <button onclick="this.parentElement.parentElement.style.display='none'" 
                style="background: white; color: #ff4444; border: none; 
                       padding: 10px 20px; border-radius: 5px; cursor: pointer;
                       font-weight: bold;">
            OK
        </button>
    `;
    
    document.body.appendChild(errorDiv);
}

// Alternative method using IP-based geolocation (fallback)
async function detectByIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryCode = data.country_code;
        
        if (euCountries.includes(countryCode)) {
            const path = countryPaths[countryCode];
            if (path) {
                window.location.href = path;
            }
        } else {
            showError('Sorry, this service is only available for EU countries :(');
        }
    } catch (error) {
        showError('Could not detect your location');
    }
}


// Mapping of country codes to website paths

// Add this to your existing code
document.addEventListener("DOMContentLoaded", () => {
    // Add a button or trigger for location detection
    const detectButton = document.createElement('button');
    detectButton.textContent = 'Auto-detect my location';
    detectButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        z-index: 100;
        box-shadow: 0 4px 15px rgba(0,123,255,0.3);
    `;
    detectButton.onclick = detectAndRedirect;
    
    document.body.appendChild(detectButton);
    
    // Optional: Auto-detect on page load (will ask for permission)

    translatePageContent(); // Translate h1 and p elements
    createManualButton();
    detectAndRedirect();
});

detectAndRedirect();