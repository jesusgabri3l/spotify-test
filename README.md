# Spotify-Clon

Spotify-clon is kind of an clone from spotify web player, it is real data getting from your account and spotify api.
## Tech
- [Vue3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/guide/why.html)
- [Tailwind](https://markus.oberlehner.net/blog/vue-project-directory-structure-keep-it-flat-or-group-by-domain/)
- **FULLY RESPONSIVE**
## Folder structure

- [7-1 for the SCSS architecture](https://sass-guidelin.es/es/#arquitectura)
- [A hexagonal architecture based on domain](https://markus.oberlehner.net/blog/vue-project-directory-structure-keep-it-flat-or-group-by-domain/)

## Conventions
- [Vue Style Guide](https://vuejs.org/style-guide/)
- [BEM](https://getbem.com/)
## Installation

Install the dependencies and devDependencies and start the server.
**Ask for the .env in case you wanna run it locally**

```sh
cd spotify-test
npm i
npm run dev
```

## Features

- Authentication (Login and logout)with your Spotify account.
- You can see basic information about your account profile.
- You can see your top artist, and top tracks for the past 4 weeks (month).

## Services/API instances
I am using axios, and there are 2 different axios instances, the **Spotify API** and the **Spotify Auth API**
- **Spotify Auth API:** The configuration file for the axios instance is in the auth module inside the infrastructure folder, it has the needed methods and api calls to do the whole authentication proccess.
 - **Spotify API :** The configuration file for the axios instance is in the `/src/services` folder, This instance allows you to get spotify information such as : *tracks, albums, artists, etc...* It has 2 **interceptors** : one for authorization header to inject the bearer token, and the other one is in case it fails because of token expired, then we refresh.
## Store
- UserStore to save all the user information related
- AuthStore to save all the authentication (access_token, refresh_token)
 ## Authentication Proccess
- When an user is not logged in, then the login page should appears, when we click the `Login with spotify` it will make a redirect to a spotify Auth URL with some parameters, in one of those we gotta pass the `redirect_uri`.
- After we accept to login to the app with the permissions shown, spotify makes the redirection to the `localhost:3000/callback` which is our local `redirect_uri` with some query parameters, there is one query parameter we will need `code`
- If you take a look at the router instance, you can see there is a `/callback` route, which is calling CallbackView
- CallBackView is doing the next step, it is getting the query parameter `code` we previously get from Spotify and using it to as a query parameter for the request to get the actual token.
- After we get the token, we are saving in the authStore and localStorage

## UI Useful Components
Inside our `src/components/base` there are some components which we can use to make our UI development easier.

- **BaseCard** : Card component which has an *image, title, and description*, we can use it to show *artists, users, playlists*
- **BaseTrack**: Track component, it receives a track and an index(optional), we can use it to show *tracks*
- **BaseHeaderProfile**: Header gradient component to show the profile, it receives a *image, name, color*, we can use it as a presentational header for *Current User Home view, Artist Homeview, Playlist View, User Homeview*
- **BaseSectionFlex**: Section flex component which receives a *title, linkText, linkRoute, column(for the flex direction)*, it is a built in component to use like a section, it contains a `title` and `flex container` for rendering our *Artists, Tracks, Playlists, etc...*, it has a slot to render the flex element, so when you call the component you need to pass the flex elements as children, for example:
```
<BaseSectionFlex ...>
          <BaseCard v-for="..."/>
</BaseSectionFlex>
```