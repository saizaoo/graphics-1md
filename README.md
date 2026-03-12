# MD1 - 1c) Koha sniegpārsla

Programma zīmē Koha sniegpārslas fraktāli, atklāti definējot tā līdzību pašam ar sevi dažādos detalizācijas līmeņos.

Programma pieejama [tiešsaistē](https://saizaoo.github.io/graphics-1md/). Galvenais algoritma kods ir atrodams `sketch.js` failā. Izmantots JavaScript un [p5.js](https://p5js.org/) bibliotēka.

## Palaišana lokāli

Palaišanai pietiek ar lokālo HTTP serveri, piemēram:
- `python -m http.server`, tad atvērt `localhost:8000` (nepieciešams Python)
- `npx serve`, tad atvērt `localhost:3000` (nepieciešams Node.js)

## Lietošana

Slīdnis zem audekļa maina detalizāciju / rekursijas dziļumu (0–6). Dziļums 0 attēlo sākotnējo vienādmalu trijstūri, katrs nākamais pievieno detalizāciju, demonstrējot fraktāļa pašlīdzību.
