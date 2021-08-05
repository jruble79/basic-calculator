///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// COLOR THEMES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const themeSelect = document.getElementById('color-themes');

const themes = [
    {
        'theme': 'Dusk',
        '--background': 'linear-gradient(hsl(205, 100%, 25%), hsl(268, 100%, 25%))',
        '--button-background': 'hsl(var(--white), .1)',
        '--text': 'hsl(var(--white), .5)',
        '--outline': '1px solid hsl(var(--white), .25)'
    },
    {
        'theme': 'Midnight',
        '--background': 'linear-gradient(black, hsl(212, 38%, 15%))',
        '--button-background': 'hsl(var(--white), .1)',
        '--text': 'hsl(var(--white), .5)',
        '--outline': '1px solid hsl(var(--white), .25)'
    },
    {
        'theme': 'Daybreak',
        '--background': 'linear-gradient(hsl(204, 56%, 12%), hsl(54, 25%, 60%))',
        '--button-background': 'hsl(var(--white), .1)',
        '--text': 'hsl(var(--white), .5)',
        '--outline': '1px solid hsl(var(--white), .25)'
    },
    {
        'theme': 'Midday',
        '--background': 'linear-gradient(hsl(53, 100%, 76%), hsl(52, 70%, 87%))',
        '--button-background': 'hsl(var(--black), .1)',
        '--text': 'hsl(var(--black), .5)',
        '--outline': '1px solid hsl(var(--black), .1)'
    },
];

function themeChange() {
    theme = themes[themeSelect.selectedIndex];
    for ( const prop in theme ) { document.documentElement.style.setProperty( `${prop}`, `${theme[prop]}` ) }
};