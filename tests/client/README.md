# IBF 2022 Batch 1 Mini Project (Client - Angular)

## BootStrap
1. ng add @ng-bootstrap/ng-bootstrap
2. add to angular.json > styles
- "node_modules/bootstrap/dist/css/bootstrap.css",
https://ng-bootstrap.github.io/#/getting-started
### Bootstrap spacing
https://mdbootstrap.com/docs/angular/utilities/spacing/
ng serve --proxy-config src/proxy.config.js


Google maps
https://angular-maps.com/guides/getting-started/
npm install @angular/google-maps

Google Maps Console
https://console.cloud.google.com/apis/credentials?project=big-elysium-384904

GoogleMaps Places API
https://maps.googleapis.com/maps/api/place/nearbysearch/output?location=&location=-33.8670522%2C151.1957362&radius=1500
https://developers.google.com/maps/documentation/places/web-service/search-nearby#maps_http_places_nearbysearch-txt

Map Markers
https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
https://developers.google.com/maps/documentation/javascript/reference/marker#Icon

OAuth2 (Authorisation)
- provide key for specific access to app
https://github.com/manfredsteyer/angular-oauth2-oidc

OpenId Connect (Authentication)

TODO:
1. Add event listeners for map
- link to search address bar (look for locations)
- Input (North, South, East, West) - dropdown menu
- detect zoom (Optional)
2. Spring boot API 
- query NParks RESTful API for list of park names
- GET locations
- POST saved locations
- PUT edit saved locations
- DELETE edit saved locations (PUT also?)

3. Database (SQL)
- users table
- parks location table
- fitness location table

4. OAuth2 (Open Authorisation)
- Create User account
- Access Google Resourses

WHAT IS CONTAINERISATION? HOW TO DO IT? WHAT DOES IT SOLVE?
https://www.google.com/search?q=how+to+containerise+angular+and+springboot+application&oq=how+to+containerise+angular+and+springboot+application&aqs=chrome..69i57j33i160j33i22i29i30l6.11260j0j1&sourceid=chrome&ie=UTF-8

WHAT IS SPRINGBOOT JWT (Json Web Token)
https://www.baeldung.com/spring-security-oauth-jwt

DONE: 
1. Add event listeners for map
- detect click / location
- search for fitness corners, display on map
