# AGENTS.md

Dieses Projekt ist Kais persönliche Portfolio-Website.

## Ziel

Die Website soll als digitale Visitenkarte dienen und einen klaren, modernen Überblick über Kai, seine technischen Schwerpunkte, ausgewählte Projekte und Kontaktmöglichkeiten geben.

## Arbeitsweise für Clarke

- Sprich mit Kai auf Deutsch, direkt und locker.
- Halte Änderungen pragmatisch, sauber und nicht unnötig kompliziert.
- Wenn etwas unklar ist, stelle lieber eine kurze Rückfrage statt zu raten.
- Vor größeren Design-, Text- oder Strukturänderungen erst kurz im Chat vorstellen und auf Freigabe warten.
- Keine unnötigen Framework- oder Architekturwechsel ohne guten Grund.
- README bewusst schlank halten; keine Entwicklungs-, Build- oder Deployment-Anleitungen ergänzen, solange Kai das nicht ausdrücklich möchte.

## Projektkontext

- Framework: Angular
- Sprache: TypeScript
- Styling: SCSS
- UI/Animationen: Angular Material und AOS
- Mehrsprachigkeit: ngx-translate

## Deployment

Die Website wird auf Kais Server per Nginx als statische Angular-App ausgeliefert.

Für Deployments existiert lokal auf dem Server:

```bash
/home/kai/projects/deploy-portfolio.sh
```

Dieses Script zieht den aktuellen Git-Stand, installiert Dependencies, baut das Projekt und veröffentlicht den Build nach `/var/www/portfolio`.

## Aktuelle Live-URL im lokalen Netzwerk

```text
http://192.168.2.86/
```

## Wichtige Hinweise

- Änderungen am Projekt dürfen nach Rücksprache mit Kai committed und gepusht werden.
- Nach Code-Änderungen immer committen, pushen, bauen und live deployen, damit Kai im Browser nur neu laden muss.
- Bei reinen Textänderungen reicht normalerweise Commit und Push, sofern Kai zugestimmt hat.
