# Anleitung um unseren E-Commerce Webshop SwooshTrade zu starten

## Known Problems
Leider funktioniert Docker bei uns nicht wie gewünscht. Die einzelnen Dockercontainer/Dockerfiles (Frontend und Backend) funktionieren, jedoch funktionert die Orchestrierung in docker-compose.yaml nicht und wirft folgenden Fehler: 
`Proxy error: Could not proxy request /api/products from localhost:3000 to http://127.0.0.1:5050.`
Wir haben versucht, die package.json im Frontend entsprechend anzupassen, jedoch half dies auch nichts. 

Es sollte dennoch möglich sein, unser Projekt auszuführen, da wir keine lokale MongoDB verwenden für unseren Webshop, eine MongoDB Atlas Cloud Instanz verwenden, auf die man auch ohne Docker zugreifen kann.

Alle Packages, sowie die entsprechenden Commands, stehen aufgelistet im Arbeitsprotokoll. 

Wir hoffen, dass das für Sie dennoch okay ist.

## Starten des Projectes

### Vorraussetzungen
Alle nötigen Packages sind bereits installiert.

### 1. Starten Backend
Terminal im Projektordner starten. Im Backend Ordner (oder auch im Root Ordner) folgendes Kommando ausführen:

### `npm start`

Das Backend läuft unter der Adresse `http:localhost:5050`, die aber nicht separat angezeigt werden muss.

### 2. Starten Frontend

In einem zweiten Terminal in das Frontend verzeichnes navigieren: 

### `cd/frontend`

Danach folgendes Kommando ausführen:

### `npm start`

Nun sollte sich ein Fenster im Browser öffnen unter folgender Adresse: 

### `http://localhost:3000`

Nun sollte unser SwooshTrade Webshop vollständig hochgefahren sein und es kann fröhlich losgeshopped werden :)
