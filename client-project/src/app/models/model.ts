export interface Marker {
    // position: google.maps.LatLngLiteral
    name: string;
    // vicinity: string;
    
}

export interface AddUserDetails {
    name: string;
    email: string;
    password: string;
}

export interface UserInfo {
    info: {
        sub: string;
        email: string;
        name: string;
        picture: string;
    }
}