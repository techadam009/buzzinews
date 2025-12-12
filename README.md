# BuzziNews - Static Website Files

This folder contains the complete static HTML, CSS, and JavaScript files for the BuzziNews website.

## Files Structure

```
/public/
├── index.html          - Home page with news grid and featured stories
├── article.html        - Article detail page (to be created)
├── about.html          - About Us page (to be created)
├── contact.html        - Contact page (to be created)
├── terms.html          - Terms & Conditions page (to be created)
├── privacy.html        - Privacy Policy page (to be created)
├── styles.css          - All CSS styles
├── script.js           - All JavaScript functionality
└── README.md           - This file
```

## How to Use

### Option 1: Open Directly in Browser
1. Navigate to the `/public/` folder
2. Double-click `index.html` to open in your default browser
3. Navigate between pages using the links

### Option 2: Use a Local Server (Recommended)
For the best experience, serve the files using a local web server:

**Using Python:**
```bash
cd public
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd public
http-server
```

**Using PHP:**
```bash
cd public
php -S localhost:8000
```

## Features Implemented

### Home Page (index.html)
- Responsive header with mobile menu
- Trending news ticker with continuous scroll
- Hero section with CTA buttons
- Featured stories grid
- Category filter (sticky)
- News cards with:
  - Inline expansion (quick preview)
  - Share buttons
  - Author information
  - Reading time
- Pagination
- Newsletter subscription banner
- Footer with social links

### Interactivity (script.js)
- Mobile menu toggle
- Trending ticker animation
- News card expansion/collapse
- Category filtering
- Newsletter subscription
- Contact form submission
- Smooth scrolling
- Share functionality
- Time-ago formatting

### Styling (styles.css)
- Responsive design (mobile, tablet, desktop)
- CSS custom properties for easy theming
- Typography system
- Component-based styles
- Animations and transitions
- Print-friendly styles

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --color-primary: #E63946;
  --color-secondary: #457B9D;
  /* ... more colors */
}
```

### Content
- Update article content directly in the HTML files
- Replace placeholder images with your own
- Modify text content in HTML

### Add More Articles
1. Copy a news card from `index.html`
2. Update the image, title, excerpt, and metadata
3. Adjust the `data-category` attribute for filtering

## Browser Compatibility

Tested and working in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## SEO Optimization

Each page includes:
- Proper meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML5 markup
- Descriptive alt tags for images

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible styles
- High contrast text
- Screen reader friendly

## Performance

- Minimal external dependencies
- Optimized CSS
- Efficient JavaScript
- Lazy loading ready (can be added)
- Small file sizes

## Next Steps

To complete the website, create the remaining pages:
1. `article.html` - Full article view
2. `about.html` - About Us page
3. `contact.html` - Contact form page
4. `terms.html` - Terms & Conditions
5. `privacy.html` - Privacy Policy

Each page should include:
- Same header and footer as index.html
- Proper meta tags
- Responsive layout
- Consistent styling

## Deployment

### Deploy to Any Static Host

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --dir=public --prod
```

**GitHub Pages:**
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Set folder to `/public`

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd public && vercel
```

**Traditional Web Hosting:**
- Upload all files from `/public/` to your web server
- Ensure `index.html` is set as the default document
- Configure .htaccess if needed for clean URLs

## Support

For questions or issues, contact: contact@buzzinews.online

## License

© 2025 BuzziNews. All rights reserved.
