export interface Marker {
    position: google.maps.LatLngLiteral
    name: string;
}

export interface AddUserDetails {
    name: string;
    email: string;
    password: string;
}

export interface LoginDetails {
    email: string;
    password: string;
}

export interface UserInfo {
    loginStatus: boolean;
    info: {
        sub: string;
        email: string;
        name: string;
        picture: string;
    }
}

export interface CreatedResponse {
    created: boolean;
    message: string;
}

export interface Alert {
	type: string;
	message: string;
}

export interface Workout {
    label: string;
    name: string;
    url: string;
    desc: string[];
}