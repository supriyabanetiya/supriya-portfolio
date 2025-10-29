# Supriya Banetiya - Portfolio Website

A modern, responsive portfolio website built with React + Vite + Tailwind CSS, showcasing the professional profile of Supriya Banetiya, an E-commerce & Store Specialist.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **SEO Optimized**: Complete meta tags and semantic HTML
- **Performance**: Fast loading with Vite build tool
- **Accessible**: WCAG compliant with proper ARIA labels
- **Interactive Sections**: Hero, About, Experience, Skills, Education, and Contact

## 🎨 Design

- **Color Scheme**: Navy Blue (#0A2540) + Gold (#D4AF37) + White
- **Typography**: Poppins (Google Fonts)
- **Layout**: Modern card-based design with gradient accents

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd ultimate-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ultimate-portfolio/
├── public/
│   ├── resume.txt          # Resume content
│   └── vite.svg            # Vite logo
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Education.jsx   # Education section
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🚢 Deployment to Netlify

### Method 1: Netlify CLI (Recommended)

1. **Install Netlify CLI globally**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**
   ```bash
   netlify deploy --prod
   ```

4. **Follow the prompts to link your site or create a new one**

### Method 2: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag and drop the `dist` folder**

4. **Your site is live!**

### Method 3: GitHub Integration

1. **Push your code to GitHub**

2. **Go to [Netlify](https://netlify.com) and sign in**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub and select your repository**

5. **Configure build settings:**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

6. **Click "Deploy site"**

### Method 4: Netlify Configuration File

Create a `netlify.toml` file in the root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Then deploy using any of the methods above.

## 📝 Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- Contact information in `Contact.jsx` and `Footer.jsx`
- Personal details in `About.jsx`
- Experience details in `Experience.jsx`
- Skills in `Skills.jsx`
- Education in `Education.jsx`

### Update Resume

Replace the content in `public/resume.txt` or add a PDF version named `resume.pdf` in the `public` folder.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  navy: '#0A2540',    // Your primary color
  gold: '#D4AF37',    // Your accent color
}
```

### Update Fonts

Change the font family in `index.html` and `tailwind.config.js`:

In `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

In `tailwind.config.js`:
```js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Tips

- Images are optimized with proper sizing
- Code splitting is handled by Vite
- Minification and compression enabled in production build
- Lazy loading for better initial load time

## 📄 License

This project is created for personal portfolio purposes.

## 👤 Author

**Supriya Banetiya**
- Email: supriyabanetiya03@gmail.com
- LinkedIn: [linkedin.com/in/supriya-banetiya-9002a9245](https://linkedin.com/in/supriya-banetiya-9002a9245)
- Phone: +91-6376084280

## 🤝 Support

For support or questions, reach out via email or LinkedIn.

---

Made with ❤️ using React + Vite + Tailwind CSS
