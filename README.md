# Invoice Generator

Invoice Generator App allows to add new products with their price and quantity. You can also view information about the company and the added products and their total value.

[Angular in-memory-web-api](https://github.com/angular/in-memory-web-api) library was used to simulate the backend. Only companies data are fetched from fake backend. Invoice data are stored in app memory, because in-memory-web-api allows to send only single object in request body by default, but no array of objects.  To send an array of invoice objects, it needs to further expand the API logic in data.service.

## Demo
https://viggo97.github.io/invoice-generator/


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `docs/` directory.
