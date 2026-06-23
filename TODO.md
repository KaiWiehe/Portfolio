# TODO – Portfolio Go-Live

Kurzliste mit allem, was vor und für den Live-Gang noch ansteht.
Status: 🔴 offen · 🟡 in Arbeit · 🟢 erledigt

## Inhalte / Texte

- 🟢 Über-mich-Text auf aktuellen Stand (Ducherow, 11880 Neubrandenburg, Full-Stack, Developer Akademie als Background)
- 🟢 Skills-Text auf aktuellen Stack umgestellt
- 🟢 Portfolio-Beschreibungen entstaubt
- 🟢 Contact-Bereich als Visitenkarte statt Akquise
- 🔴 Profilfoto prüfen / ggf. austauschen (`src/assets/img/profileImg1*.png`)
- 🔴 Portfolio-Sektion entscheiden: ältere Akademie-Projekte (Join, El Pollo Loco, Ring of Fire) drin lassen oder durch aktuelle Sachen ersetzen
- 🟢 Hero-Untertitel auf "Full-Stack Software Engineer" umgestellt

## Kontaktformular

- 🔴 Backend für `POST /send_mail/send_mail.php` aktuell halten oder neu bauen
  - Empfänger: `kai_wiehe@live.de`
  - Variante A: einfaches PHP-Mail-Skript mit SMTP (Strato/Web-Hoster), Empfänger als ENV/Config
  - Variante B: PHPMailer (saubererer Versand, TLS, Auth)
  - Honeypot-Feld + Zeit-Trap (Form muss > 2s offen sein) gegen Bots
  - serverseitige Validierung (Name/E-Mail/Message)
  - CSRF-Token (Pre-Token-Endpoint vor Submit)
  - Rate-Limit pro IP (z. B. fail2ban oder eigenes Limit)
  - Erfolgs-/Fehlerantwort als JSON, Frontend zeigt Status passend an
- 🔴 Datenschutzhinweis am Formular (Hinweis auf Verarbeitung + Link Datenschutz)

## Datenschutz / Impressum

- 🟢 Impressum-Adresse auf Ducherow aktualisiert
- 🟢 Datenschutzerklärung auf aktuellen Stand der statischen Portfolio-Seite gebracht
- 🔴 Cookie-Hinweis nötig? Aktuell keine Tracker → wenn das so bleibt, ggf. kurzer Hinweis statt Consent-Banner

## SEO / Social

- 🔴 `<title>` aussagekräftiger: "Kai Wiehe – Full-Stack Developer"
- 🔴 `<meta name="description">` setzen
- 🔴 OpenGraph-Tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`)
- 🔴 Twitter-Card-Tags (`summary_large_image`)
- 🔴 Favicon final (bereits vorhanden, vor Live nochmal checken)
- 🔴 `robots.txt` und `sitemap.xml` ergänzen
- 🔴 `lang`-Attribut in `index.html` dynamisch / passend setzen

## Accessibility

- 🔴 Alt-Texte aller Bilder durchgehen (keine "Img" / "portfolio")
- 🔴 Buttons / Links: Fokus-Stile sichtbar lassen
- 🔴 Mobile Menü: `aria-expanded`, `aria-controls` am Toggle-Button
- 🔴 Kontrastprüfung (Hero-Text auf Hintergrundgrafik)

## Mobile / Responsive

- 🟢 Erste Pass für kleine Smartphones (≈320 – 390px), Standard-Phones und Tablets
- 🔴 Echtgeräte-Tests: iPhone SE, modernes iPhone, mittleres Android, iPad
- 🔴 Querformat-Test (Hero hat dafür eigene Breakpoints, gegenchecken)

## Performance

- 🔴 Hero-Bilder als WebP/AVIF anbieten
- 🔴 Profil-Bild komprimieren (`profileImg1.png` ist ggf. groß)
- 🔴 `font.scss`: nur tatsächlich genutzte Weights laden (aktuell 100–900 + italics)
- 🔴 AOS nur auf Desktop initialisieren, oder `data-aos-once="true"` setzen, falls Performance auf Mobile leidet
- 🔴 Lighthouse-Lauf (Performance / Best Practices / SEO / A11y) und Quick-Wins umsetzen

## Build / Deployment

- 🔴 Production-Build prüfen: `npm run build` → Bundle-Size im Blick behalten
- 🔴 `angular.json`: `outputPath` und `baseHref` final fürs Live-System
- 🔴 Deploy-Skript `/home/kai/projects/deploy-portfolio.sh` testen
- 🔴 Nginx-Config: Single-Page-App-Fallback auf `index.html` (`try_files $uri $uri/ /index.html;`)
- 🔴 HTTPS / Let's Encrypt für `kai-wiehe.de`
- 🔴 HTTP → HTTPS Redirect aktiv
- 🔴 Security-Header in Nginx (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy` basic)
- 🔴 Caching-Header für `assets/` (`Cache-Control: public, max-age=31536000, immutable` für hashed files)

## Monitoring / Backups

- 🔴 Uptime-Monitoring (z. B. uptime-kuma) für die Domain
- 🔴 Tägliches Backup des Web-Roots
- 🔴 Log-Rotation Nginx prüfen

## Testmatrix vor Go-Live

- 🔴 Chrome Desktop + Mobile
- 🔴 Firefox Desktop
- 🔴 Safari (Mac + iOS) – speziell `100svh` und `scale`/`rotate`
- 🔴 Edge
- 🔴 Sprach-Umschaltung DE ↔ EN auf jeder Section
- 🔴 Kontaktformular: Validierung, Submit, Erfolgsmeldung
- 🔴 Impressum/Datenschutz-Route, Zurück-Navigation
- 🔴 Externe Links öffnen `target="_blank"` + `rel="noopener noreferrer"` checken
