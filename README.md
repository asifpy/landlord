# LANDLORD #

Modern property management tool for landlords, property managers, and renters. It allows landlords to track thier buildings, apartments and tenants information in way much better way.

This is a work-in-progress code branch of landlord.

**Stack**
* An enterprise class database: [Postgresql](https://www.postgresql.org/)
* Backend: [Django REST Framework](http://www.django-rest-framework.org/)
* Awesome [Angular](https://angular.io/guide/quickstart) on the client side
* CSS based on [Twitter's Boostrap 4](https://v4-alpha.getbootstrap.com/)
* Error tracking using [Sentry](https://sentry.io/welcome/)

# Getting started #

**Backend**

Install [pipenv](http://pipenv.readthedocs.io/en/latest/) globally, then perform the below steps to setup the backend.

```
git clone https://github.com/asifpy/landlord.git
cd server
```
- Create .env file within the settings directory which will hold all required configuration. You can refer [example config](https://github.com/asifpy/landlord/blob/master/server/landlord/settings/env.example)
- Install required depedencies: pipenv install
- Run server: manage.py runserver


**Frontend**

```
git clone https://github.com/asifpy/landlord.git
cd client
```

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally, then run `npm install` to resolve all dependencies (might take a minute).
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Configure the `apiUrl` with your running backend service in client/src/environments/environment.ts

<img width="500" src="https://github.com/asifpy/landlord/blob/master/client/src/assets/images/dashboard.png" border="0" />
