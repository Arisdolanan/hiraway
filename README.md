# Getting Started with hiraway HTML

hiraway HTML is a clean, minimal, and powerful admin template built with pure HTML, CSS, and JavaScript. It's perfect for quick prototyping and simple projects.

> **Disclaimer:**
> This project is the result of an experimental coding process (vibe coding x AI). All implementation is based solely on the frontend knowledge I currently possess. Use and modify freely!

---

## Prerequisites

**You do NOT need Node.js or npm** if you just want to use the HTML template. Simply open the `index.html` file in your browser.

**Optional:**
If you want a better development experience (auto-reload), install the Live Server extension in VS Code.

---

## Project Structure

```
hiraway/
├── apps/
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── js/
│   └── styles/
├── charts/
├── components/
├── dashboard/
├── documentation/
├── forms/
├── pages/
├── tables/
├── index.html
├── version.html
├── tailwind.config.js (optional)
└── package.json (ignore if only using HTML)
```

---

## How to Use

### Option 1: Open Directly in Browser (Easiest)

1. Go to the `hiraway/` folder
2. Double-click the `index.html` file (or drag it into your browser)

### Option 2: Use Live Server (Recommended for Development)

1. Install the Live Server extension in VS Code
2. Right-click on `index.html` in the `hiraway/` folder
3. Select "Open with Live Server"

---

### Development Mode

For a better development experience with hot-reloading and automatic CSS compilation, you can use the built-in npm scripts:

```bash
npm install
npm run dev
```

This will:

- Install all dependencies needed for development
- Watch your CSS files for changes
- Automatically compile when changes are detected
- Provide source maps for debugging
- Enable live reloading

> **Note:** Make sure you have Node.js and npm installed. Jalankan perintah di atas di direktori `hiraway/`.

---

### Building for Production

To build and minify assets for production deployment:

```bash
npm run build
```

This will:

- Compile and minify your CSS and JavaScript assets
- Optimize files for best performance
- Output ready-to-deploy assets in the appropriate folders

---

## Including CSS & JavaScript Assets

**Make sure the file paths match the folder structure!**

Add this in the `<head>` section of your HTML:

```html
<link rel="stylesheet" href="assets/styles/hiraway.min.css" />
```

Add this before the closing `</body>` tag:

```html
<script src="assets/js/hiraway.js"></script>
```

---

## Basic Customization

- To change colors, fonts, or layout, edit the CSS files in `assets/styles/` or modify the HTML files directly.
- You can add or remove components by copying code from the `components/` folder into your pages.
- For images and icons, use the files in `assets/images/`.

---

## Notes

- **Ignore any instructions about `npm run dev` or `npm run build`** unless you plan to customize the template using Tailwind CSS or advanced workflows.
- The `package.json` and `tailwind.config.js` files are only needed if you want to rebuild or customize the CSS with Tailwind.

---

# Credit & Resources

This page provides information about the third-party libraries, assets, and licensing used in this project.

### ✅ Third-Party Libraries:

- **[Tailwind CSS v4.x](https://tailwindcss.com/)** (MIT License)  
  Used for utility-first CSS framework and styling components.

- **[AG Grid – Community Edition](https://www.ag-grid.com/)** (MIT License)  
  Used only for basic table rendering in demo pages. _No enterprise features are included._

- **[Chart.js](https://www.chartjs.org/)** (MIT License)  
  Implements bar and line charts in analytics dashboards.

- **[ApexCharts](https://apexcharts.com/)** (MIT License)  
  Implements area, radial, and donut charts in statistics panels.

- **[Iconify](https://iconify.design/)** (MIT License)  
  Used for all icon rendering throughout the template. Supports multiple icon sets including Material Design Icons.

- **[Quill.js](https://quilljs.com/)** (BSD License)  
  Used as a rich text editor in some form inputs.

- **[Masky](https://github.com/andreialecu/masky)** (MIT License)  
  Used for input masking (e.g., phone numbers, dates, etc.).

- **[validator.js](https://github.com/validatorjs/validator.js)** (MIT License)  
  Used for string validation and sanitization in form inputs.

All the libraries above are fully open-source, licensed under MIT, BSD, or similar, and are safe for commercial distribution.

---

### 🛠️ Assets & Licensing:

- **Fonts**:
  - [Inter](https://fonts.google.com/specimen/Inter) & [Poppins](https://fonts.google.com/specimen/Poppins) — Open Font License (via Google Fonts)
- **Icons**:
  - [Iconify](https://iconify.design/) (MIT License)
  - [Material Design Icons](https://materialdesignicons.com/) (Apache License 2.0)
- **Images**:
  - [Unsplash](https://unsplash.com/) (CC0)
  - [RandomUser.me](https://randomuser.me/) (MIT License)
  - [Pravatar](https://pravatar.cc/) (MIT License)
  - YouTube previews (CC0 or free‑use)

Source code, including HTML structure, Tailwind utility classes, and JavaScript logic, is fully handwritten with no proprietary or restricted dependencies.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Brave (latest)

---

**For more details or customization help, feel free to ask!**
