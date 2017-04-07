# Epicurldus

Have you ever wanted to play professional curling? Neither have I! But regardless of our wants and desires, it looks like Epicodus has developed it's own in-house curling team! Team members can be accessed and assessed by their skills (as abstract as those skills may be, seeing as none of them are really that into curling).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2](https://github.com/angular/angular)
* [Angular-CLI](https://github.com/angular/angular-cli)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/katharynreed/epicurldus
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Create a new file named `api-keys.ts` in the `src/app` directory to include your firebase information in the following format:

```js
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**Step 4**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 5**: Visit the app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * Install **bootstrap** and save as a dependency in bower.json for easier styling
  ```console
  bower install bootstrap --save
  ```
  * Add **bootstrap** to angular-cli.json under "styles"

  * Install **angularfire2** and **firebase** and add **firebase** to "types" on `tsconfig.json`

  * Build `api-keys.ts` and insert firebase access information, link to app and add to `.gitignore`

2. Specs
  * **Spec 1**: Users can view a list of all club members
  * **Spec 2**: Users can select to view individual member details
  * **Spec 3**: Users can visit an about page to learn about the sport of curling
  * **Spec 4**: Users can filter member list via curling position
  * **Spec 5**: Administrators can add new users on members page
  * **Spec 6**: Administrators can edit current users on member-detail page
  * **Spec 7**: Administrators can delete users on member-detail page

3. Integration
  * `member.model`: model for `member` objects
  * `member.service`: service for CRUD functionalities on members on Firebase
  * `app.component`: base page with router-outlet
  * `''` route:
    * `homepage.component`: home page
  * `'about'` route: to static page giving information about the club
  * `'members'` route: shows all members within curling club
  * `'member/:id'` route: dynamic route to view individual members details
    * `member-detail.component`: component for displaying all details of a member

4. UX/UI
  * Include bootstrap
  * Develop custom style
  * Find a way to make curling look fun


## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

MIT License. Copyright 2017 Katie Reed
