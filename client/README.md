# IBF 2022 Batch 1 Mini Project (Client - Angular)

## BootStrap
1. ng add @ng-bootstrap/ng-bootstrap
2. add to angular.json > styles
- "node_modules/bootstrap/dist/css/bootstrap.css",
https://ng-bootstrap.github.io/#/getting-started
### Bootstrap spacing
https://mdbootstrap.com/docs/angular/utilities/spacing/


Google maps
https://angular-maps.com/guides/getting-started/
npm install @angular/google-maps

Google Maps Console
https://console.cloud.google.com/apis/credentials?project=big-elysium-384904
ng serve --port 4201

GoogleMaps Places API
https://maps.googleapis.com/maps/api/place/nearbysearch/output?location=&location=-33.8670522%2C151.1957362&radius=1500


TODO:
1. Add event listeners for map
- detect click / location
- link to search address bar (look for locations)
- Input (North, South, East, West) - dropdown menu
- search for fitness corners, display on map
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

4. OAuth2
- Create User account
- Access Google Resourses

WHAT IS CONTAINERISATION? HOW TO DO IT? WHAT DOES IT SOLVE?
https://www.google.com/search?q=how+to+containerise+angular+and+springboot+application&oq=how+to+containerise+angular+and+springboot+application&aqs=chrome..69i57j33i160j33i22i29i30l6.11260j0j1&sourceid=chrome&ie=UTF-8

WHAT IS SPRINGBOOT JWT (Json Web Token)
https://www.baeldung.com/spring-security-oauth-jwt

DONE: 



