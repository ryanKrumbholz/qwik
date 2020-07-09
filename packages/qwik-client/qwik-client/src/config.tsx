const url = (window.location.href === "http://localhost:3000/") ? "http://localhost:3000/home" : window.location.href;

export const auth0Config = {
    domain: "dev-6e9pjn91.us.auth0.com",
    clientId:"Ac8rN6c8CyAhtRVljxiJ4rQiURiUWe9C",
    redirectUri: url
}
