document.addEventListener('DOMContentLoaded', function() {
    const envInfo = document.querySelector('.environment-info');
    const button = document.getElementById('demoButton');
    let clickCount = 0;
    // Afficher l'environnement
    const env = window.location.hostname.includes('netlify.app') ? 'Production' :
    'Développement';
    envInfo.textContent = `Environnement: ${env}`;
    // Ajouter l'interactivité
    button.addEventListener('click', function() {
    clickCount++;
    this.textContent = `Cliqué ${clickCount} fois!`;
    });
    });
    