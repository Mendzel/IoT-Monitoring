<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->

## Commits description

### 1. Creating repo + prettier config + installing PrimeNG and JSON Server

```sh
Like in the title
```

### 2. Created base view, interfaces and classes

```sh
Basic dashboard views, navbar with title (no action buttons).
Prepared interfaces for the necessary data from mocks.
Class idea: One base abstract class for all vehicles,
expanded with additional fields and methods for each type of vehicle. In this case, the functionality is so limited that
that the inheriting classes will rather be empty, but the idea for further extending the functionality.
```

### 3. Vehicle modal, events and data passing. Adding images (not optimized)

```sh
Create a modal for the selected vehicle.
Transmission of vehicle data as part of the event and displaying them in the modal.
Division into ticket machines and on-board computer, displaying the status of devices.
```

### 4. Table filtering

```sh
Added filtering by vehicle types. Basic picker taken from PrimeNG firing event when picker value changes.
Create a variable to store temporary arrays whose value is overwritten when filtering.
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Angular][angular.io]][angular-url] Angular 15
- [![TypeScript][typescript.ts]][typescript-url] TypeScript
- [![sass][scss]][scss-url] Sass

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Installation

To build the app locally, follow those basic steps:

1. Clone the repo
   ```sh
   git clone https://github.com/Mendzel/IoT-Monitoring.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start json server locally
   ```sh
   json-server --watch db.json
   ```
4. Start the app locally with Angular CLI
   ```sh
   ng serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

- [x] Dodanie widoku tabeli
- [x] Dodanie szczegółów każdego pojazdu
- [x] Filtrowanie po pojazdach
- [] Ostylowanie tabeli i dashboardu
- [x] Obsługa statusów
- [] Wyświetlanie komunikatu z błędem
- [] Dodanie testów jednostkowych, obsługa błędów
- [] Sprzątanie importów i modułów

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Konrad Mendzelewski - mendzelewski.dev@gmail.com

My Website - https://mendzel-dev.netlify.app/

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/konrad-mendzelewski/?locale=en_US
[product-screenshot]: images/screenshot.png
[vue.js]: https://i.imgur.com/otanP6d.png
[vue-url]: https://vuejs.org/
[angular.io]: https://i.imgur.com/3LO4PVr.png
[angular-url]: https://angular.io/
[scss]: https://i.imgur.com/AwvjUa0.png
[scss-url]: https://sass-lang.com/
[nuxt3]: https://i.imgur.com/7qZ2BFj.png
[nuxt-url]: https://nuxt.com/
[typescript.ts]: https://i.imgur.com/PrRfUNV.png
[typescript-url]: https://www.typescriptlang.org/
[angular-material]: https://i.imgur.com/uYZWqzq.png
[angular-material-url]: https://material.angular.io/
[javascript]: https://i.imgur.com/Sfy6vqJ.png
[javascript-url]: https://www.javascript.com/
[pinia]: https://i.imgur.com/ZuriW2R.png
[pinia-url]: https://pinia.vuejs.org/
[prime-vue]: https://i.imgur.com/RGz7zpH.png
[prime-vue-url]: https://www.primefaces.org/primevue/
