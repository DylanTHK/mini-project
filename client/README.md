# IBF 2022 Batch 1 Mini Project (Client - Angular)

## Angular Proxy (local testing)
```
ng serve --proxy-config src/proxy.config.js
```

## BootStrap
```
1. ng add @ng-bootstrap/ng-bootstrap
2. add to angular.json > styles
```

## Font Awesome
```
ng add @fortawesome/angular-fontawesome
```

## localStorage
```
https://stackoverflow.com/questions/47847375/where-to-store-the-user-credentials-in-an-angular-application
```

## Google maps
```
https://angular-maps.com/guides/getting-started/
https://timdeschryver.dev/blog/google-maps-as-an-angular-component
npm i @angular/google-maps@15.2.9

### Google Maps Console
https://console.cloud.google.com/apis/credentials?project=big-elysium-384904

### GoogleMaps Places API
https://maps.googleapis.com/maps/api/place/nearbysearch/output?location=&location=-33.8670522%2C151.1957362&radius=1500
https://developers.google.com/maps/documentation/places/web-service/search-nearby#maps_http_places_nearbysearch-txt

### Map Markers
https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
```

## Calisthenic Workouts
```
https://www.healthline.com/health/fitness-exercise/calisthenics
```
## Git
```
git branch <branch name>
git checkout <branch name>
```

## Stripe payment
https://www.itsolutionstuff.com/post/angular-15-stripe-payment-integration-exampleexample.html

## OAuth2 Google
https://www.itsolutionstuff.com/post/angular-15-google-social-login-tutorial-exampleexample.html

## TODO:
## Mandatory
```
12. Model data relationship (User and Token)
13. Demonstrate data integrity and consistency (transactions)

15. Deploy on railway (angular + springboot)
16. Deploy database on cloud (MySQL, Mongo)
```
## Optional
```
1. OAuth2 (Open Authorisation) - 6
- Create User account
- Access Google Resourses
2. Integrate Google Calender - 6 
- schedule workouts
3. Send email - 5 (Priority!)
- email reminder for schedule
4. SpringBoot security with JWT - 5

7. Apply domain name - 3
```

## DONE: 
## Mandatory
```
1. Forms (Login)
2. GET 
3. SPA (Routing)
4. Abstract functionalities to Service
5. Application manifest
6. POST to handle json data
7. Http Request to external API (Google Maps, Google Places)
8. Parameterized routes (use PathVariable)
9. Query String
10. Support more than 1 user
11. Must use MySQL
12. 
13. 
14. Must use another database type (Mongo (convert workout to mongo), sessionStorage) 
15. 
16. 
```
## Optional (4 + 4) = 8
```
5. Google Maps - 4
- Add event listeners for map
- detect click / location
- search for fitness corners, display on map

6. UI Component (ng-bootstrap) - 4
```