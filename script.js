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
    
    if (euLanguages.includes(browserLang)) {
        return browserLang;
    }
    
    return 'en';
}

function translatePageContent() {
    const lang = getAppropriateLanguage();
    const translations = pageTranslations[lang] || pageTranslations.en;
    
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = translations.title;
    }
    
    const messageElement = document.querySelector('p');
    if (messageElement) {
        messageElement.textContent = translations.message;
    }
}

function detectAndRedirect() {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
        showError("Geolocation is not supported by your browser");
        return;
    }

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

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                
                const countryCode = await getCountryCode(latitude, longitude);

                
                
                document.body.removeChild(loadingMessage);
                
                if (euCountries.includes(countryCode)) {
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
            latitude, longitude = null, null
        },
        (error) => {
            document.body.removeChild(loadingMessage);
            redirectToCountrySelection()
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

function redirectToCountrySelection() {
    window.location.href = 'Redirection/chooseCountry.html';
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

// Add this to your existing code
document.addEventListener("DOMContentLoaded", () => {
    // Add a button or trigger for location detection
    const detectButton = document.createElement('button');
    detectButton.textContent = 'Press here!!!';
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