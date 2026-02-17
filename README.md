# SureSafe Fire Safety Solutions - Portfolio Website

A modern, professional portfolio website built with **React** and **Vite**, featuring a responsive design with smooth animations and a clean red/black/white color scheme.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with full responsiveness
- **Smooth Animations** - Fade-in and slide-up animations on scroll
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Professional UI** - Modern design with shadow effects and hover animations
- **Fully Functional Forms** - Contact form with validation
- **Fast Performance** - Built with Vite for optimal performance
- **Sticky Navigation** - Smooth scroll navigation with mobile menu

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with sticky behavior and mobile menu
│   ├── Hero.jsx            # Hero section with CTA buttons
│   ├── About.jsx           # About section with features grid
│   ├── Products.jsx        # Product cards with details
│   ├── Services.jsx        # Service cards and process flow
│   ├── Contact.jsx         # Contact form with validation
│   └── Footer.jsx          # Footer with links and social media
├── data/
│   └── products.js         # Products and services data
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css              # Global styles and animations
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **JavaScript**: ES6+

## 📋 Requirements

- Node.js 14+ 
- npm or pnpm

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

The application will start at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
# or
pnpm build
```

### 4. Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary Red**: #DC2626
- **Orange Accent**: #F97316
- **Dark Background**: #111827
- **Light Background**: #FFFFFF
- **Gray Tones**: Various shades for text and borders

## 📝 Sections

### 1. Navbar
- Sticky navigation with logo
- Desktop and mobile menu
- Smooth scroll navigation
- "Get Quote" CTA button

### 2. Hero
- Large bold heading
- Subtext and description
- Two CTA buttons (View Products, Get Free Quote)
- Trust badges (installations, experience, support)
- Decorative fire extinguisher illustration

### 3. About
- Business description
- Statistics cards (500+ installations, 10+ years, 2000+ clients, 24/7 support)
- Feature grid (Certified Products, Professional Installation, 24/7 Support, Annual Maintenance)

### 4. Products
- Product grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Product cards with icons, descriptions, and capacity options
- Hover animations
- Custom consultation CTA

### 5. Services
- Service cards with icons
- Service process flow (Assessment → Recommendation → Installation → Maintenance)
- Annual Maintenance Contract (AMC) information with benefits

### 6. Contact
- Contact form with validation
- Contact information cards (Phone, Email, Address)
- Quick inquiry section
- WhatsApp contact option

### 7. Footer
- Brand information
- Quick links and services
- Contact information
- Social media links
- Scroll-to-top button
- WhatsApp floating button

## ✨ Animations

- **Fade In**: Elements fade in on scroll
- **Slide Up**: Elements slide up from bottom on scroll
- **Hover Effects**: Cards scale and change shadow on hover
- **Smooth Transitions**: All interactive elements have smooth transitions

## 📋 Form Validation

The contact form includes validation for:
- **Name**: Required field
- **Phone**: 10-digit validation
- **Email**: Email format validation
- **Message**: Required field

## 🔄 Smooth Scrolling

All navigation links implement smooth scrolling to sections using:
- `scroll-behavior: smooth` in CSS
- Offset for fixed navbar (`scroll-margin-top: 80px`)

## 📱 Mobile Optimization

- Hamburger menu for mobile navigation
- Touch-friendly button sizes
- Optimized font sizes for readability
- Responsive grid layouts
- Proper spacing and padding

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
# Then push to GitHub and connect to Vercel
```

### Deploy to Other Platforms

The `dist` folder contains the production build and can be deployed to any static hosting service.

## 🎯 Customization

### Update Business Information

Edit `/src/data/products.js`:
- Update products list
- Modify services
- Change features

### Update Contact Details

Update in `/src/components/Contact.jsx` and `/src/components/Footer.jsx`:
- Phone number: `+91-XXXXXXXXXX`
- Email: `info@suresafe.com`
- Address: `Your City, India`

### Modify Colors

Edit `/tailwind.config.js`:
```javascript
colors: {
  primary: {
    red: '#DC2626',
    orange: '#F97316',
  }
}
```

## 📞 Contact & Support

- **Email**: info@suresafe.com
- **Phone**: +91-XXXXXXXXXX
- **Address**: Your City, India
- **WhatsApp**: Available 24/7

## 📄 License

This project is built for SureSafe Fire Safety Solutions.

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide React](https://lucide.dev)
- Bundled with [Vite](https://vitejs.dev)

---

**Last Updated**: February 2026
**Version**: 1.0.0
