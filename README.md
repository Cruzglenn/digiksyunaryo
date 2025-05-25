# Digiksyunaryo

![Digiksyunaryo Logo](/uploads/logo.png)

## Tungkol sa Proyekto (About the Project)

Ang Digiksyunaryo ay isang komprehensibo at mapagkakatiwalaang online na diksyunaryo para sa mga kahulugan, kasingkahulugan, at pagbigkas ng mga salitang Filipino. Ito ay dinisenyo upang maging madaling gamitin at accessible para sa lahat ng mga gumagamit.

(Digiksyunaryo is a comprehensive and reliable online dictionary for Filipino word meanings, synonyms, and pronunciations. It is designed to be user-friendly and accessible to all users.)

## Mga Tampok (Features)

- **Malawak na Diksyunaryo** - Koleksyon ng mga salitang Filipino na may detalyadong kahulugan, etimolohiya, at mga halimbawa ng paggamit sa pangungusap.
- **Bookmark Feature** - I-save ang iyong mga paboritong salita para sa madaling pagbabalik-aral at pagreperensya sa hinaharap.
- **Salita ng Araw** - Palawakin ang iyong bokabularyo sa pamamagitan ng bagong salitang ipinapakita araw-araw.
- **Madaling Paghahanap** - Mabilis at intuitive na paghahanap ng mga salita gamit ang fuzzy search at mga filter.
- **Responsive Design** - Gumagana nang maayos sa lahat ng mga device, mula sa mga mobile phone hanggang sa mga desktop computer.
- **Enhanced Security** - Advanced na mga security feature para sa pagprotekta ng data at pagpigil sa debugging at inspection.

## Paano Gamitin (How to Use)

### Paghahanap ng Salita (Searching for Words)

1. Mag-type ng salita sa search bar sa itaas ng page.
2. Habang nagta-type ka, makakakita ka ng mga mungkahi na lumalabas.
3. Maaari kang mag-click sa isang mungkahi o pindutin ang "Hanapin" button para makita ang kumpletong detalye ng salita.
4. Gamitin ang mga filter sa pamamagitan ng pag-click sa filter icon para limitahan ang mga resulta ayon sa uri ng salita.

### Mga Bookmark

1. Kapag tumitingin ka ng detalye ng salita, maaari mong i-click ang bookmark icon para i-save ang salita.
2. Maaari mong tingnan ang lahat ng iyong mga naka-bookmark na salita sa "Mga Bookmark" page.

## Teknolohiya (Technologies Used)

- **React** - JavaScript library para sa pag-build ng user interfaces
- **TypeScript** - Strongly typed programming language na nag-extend sa JavaScript
- **Vite** - Modern na frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components para sa React
- **React Router** - Routing library para sa React
- **Framer Motion** - Animation library para sa React
- **Fuse.js** - Lightweight fuzzy-search library
- **Google Gemini AI API** - Para sa enhanced word explanations at context

## Pag-install at Pag-setup (Installation and Setup)

Sundin ang mga hakbang na ito para i-setup ang Digiksyunaryo sa iyong local machine:

1. **I-clone ang repository**

```bash
git clone https://github.com/yourusername/digiksyunaryo.git
cd digiksyunaryo
```

2. **I-install ang mga dependencies**

```bash
npm install
```

3. **I-configure ang environment variables**

Gumawa ng `.env` file sa root directory at i-set ang mga sumusunod na variables:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_MODEL=gemini-2.0-flash

# Production settings
NODE_ENV=production

# Security settings
VITE_ENABLE_ANTI_DEBUGGING=true
VITE_ENABLE_STORAGE_ENCRYPTION=true
VITE_ENABLE_SUSPICIOUS_MONITORING=true
```

Para sa development mode, gumawa ng `.env.development` file:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_MODEL=gemini-2.0-flash

# Development settings
NODE_ENV=development

# Security settings for development
VITE_ENABLE_ANTI_DEBUGGING=false
VITE_ENABLE_STORAGE_ENCRYPTION=true
VITE_ENABLE_SUSPICIOUS_MONITORING=false
```

4. **Patakbuhin ang development server**

```bash
npm run dev
```

5. **Buksan ang browser**

Pumunta sa `http://localhost:5173` para makita ang application.

## Security Features

Ang Digiksyunaryo ay may mga sumusunod na security feature:

- **Anti-Debugging Protection** - Nagpipigil sa mga user na mag-debug ng application.
- **Storage Encryption** - Nag-e-encrypt ng sensitibong data sa localStorage at sessionStorage.
- **Content Security Policy** - Nagpo-protekta laban sa XSS attacks at iba pang security vulnerabilities.
- **CSRF Protection** - Proteksyon laban sa Cross-Site Request Forgery attacks.
- **Suspicious Behavior Monitoring** - Nag-de-detect ng mga kahinahinala na user activity pattern.

Para i-enable o i-disable ang mga security feature, i-edit ang environment variables sa `.env` file.

## Building para sa Production

Para i-build ang application para sa production:

```bash
npm run build
```

Ang mga na-build na file ay makikita sa `dist` folder.

## Mga Kontribyutor (Contributors)

Ang Digiksyunaryo ay dinevelop ni:

- **Glenn Mark Cruz** - Lead Developer
- **Jimwel Manguiat** - Developer

## Lisensya (License)

© 2025 Digiksyunaryo. Nakalaan ang lahat ng karapatan.

## Makipag-ugnay (Contact)

Para sa mga katanungan o feedback, mangyaring makipag-ugnay sa amin sa pamamagitan ng form sa "Makipag-ugnay" page ng application.

---

Salamat sa paggamit ng Digiksyunaryo! Umaasa kami na makakatulong ito sa iyong pag-aaral at paggamit ng wikang Filipino.
