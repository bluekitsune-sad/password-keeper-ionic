To create a simple application using Flask as the backend to serve data and an Ionic Angular application as the frontend to consume and display that data, follow the structured guide below. This tutorial demonstrates how to set up a Flask API, enable CORS, and create an Ionic Angular app that fetches and displays data from the Flask server.
Setting Up the Flask Backend

    Install Flask-CORS

    Open your command prompt (CMD) and run the following command to install Flask and Flask-CORS if you haven't already:

    bash

pip install Flask flask-cors

Create Your Flask App

In a Python file (e.g., app.py), write the following code to create a simple Flask application with CORS enabled and a route to return JSON data:

python

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getid')
def getid():
    return '''[
  {
    "id": 1,
    "title": "My first blog post"
  },
  {
    "id": 2,
    "title": "My second blog post"
  }
]'''

app.run()

Run Your Flask App

Execute the Flask application by running the Python script:

bash

    python app.py

Setting Up the Ionic Angular Frontend

    Create a New Ionic Angular App

    Use the Ionic CLI to generate a new blank Ionic Angular application:

    bash

ionic start example1 blank --type=angular

Generate a Service for REST API Calls

Navigate to the root directory of your newly created Ionic app (example1) and generate a service:

bash

ionic generate service ionic-rest

Setup HttpClientModule and Service in AppModule

Open the app.module.ts file and update it as follows to import HttpClientModule and your service:

typescript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicRestService } from './ionic-rest.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IonicRestService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

Implement the Service to Fetch Data

In the ionic-rest.service.ts file, implement the service method to fetch data from the Flask API:

typescript

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IonicRestService {
  URL: string = 'http://127.0.0.1:5000/getid';

  constructor(private httpClient: HttpClient) {}

  async fetchPosts(): Promise<any> {
    let request = this.httpClient.get(this.URL).pipe(take(1));
    return await lastValueFrom<any>(request);
  }
}

Fetch and Display Data in HomePage

Update home.page.ts to use the service:

typescript

import { Component } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    name: string = "";

    constructor(private ionicRestService: IonicRestService) {}

    test() {
        this.ionicRestService.fetchPosts().then((res) => { this.name = res[0].title; });
    }
}

And in home.page.html, add a button and label to display the fetched data:

html

<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Home</ion-title>
    </ion-toolbar>
  </ion-header>
  <div id="container">
    <ion-label>Label {{name}} </ion-label>
    <ion-button expand="block" (click)="test()">Fetch Post</ion-button>
  </div>
</ion-content>

Run the Ionic App

In the command prompt at the path of your Ionic app (example1), start the application:

bash

    ionic serve

This guide provides a step-by-step approach to setting up a basic full-stack application with a Flask backend and an Ionic Angular frontend. You can now expand upon this foundation to build more complex applications.
