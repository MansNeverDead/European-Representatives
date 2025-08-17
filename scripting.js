

document.addEventListener('DOMContentLoaded', function() {
    const countryInput = document.getElementById('countryInput');
    const flagsContainer = document.getElementById('Flags');
    
    const originalFlagLinks = Array.from(flagsContainer.querySelectorAll('a'));
    
    countryInput.addEventListener('input', function() {
        const inputValue = this.value.trim().toLowerCase();
        
        originalFlagLinks.forEach(link => {
            link.style.display = 'none';
        });
        
        if (!inputValue) {
            originalFlagLinks.forEach(link => {
                link.style.display = 'block'; 
            });
            return;
        }
        
        originalFlagLinks.forEach(link => {
            const countryName = link.querySelector('img').alt; 
            if (countryName.toLowerCase().startsWith(inputValue)) {
                link.style.display = 'block';
            }
        });
    });    
});



