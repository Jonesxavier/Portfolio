module.exports = {
  content: ['./index.html', './app.js'],
  theme: {
    extend: {
      colors: {
        'parch-0': '#f3ecd6', 'parch-1': '#ece2c2', 'parch-2': '#e2d4ac', 'parch-3': '#d6c69a', 'parch-edge': '#c8b585',
        ink: '#2b261b', 'ink-soft': '#5d543f', 'ink-faint': '#8a7c5c',
        gold: '#9c7c34', 'gold-deep': '#785a20', 'gold-soft': '#b9933f', sea: '#7fa6a6'
      },
      fontFamily: {
        display: ['Georgia', '"Times New Roman"', 'serif'],
        label: ['Georgia', 'serif'],
        body: ['system-ui', '-apple-system', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  }
}
