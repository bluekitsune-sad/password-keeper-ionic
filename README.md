# Full-Stack Application with Flask & Ionic Angular 🌐✨

Welcome to our project! This is a simple yet powerful full-stack application showcasing the synergy between Flask serving as the backend and Ionic Angular lighting up the frontend. Perfect for both learning and building, this setup allows you to serve data dynamically and present it beautifully.

## Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes. Let's dive in!

### Prerequisites 📋

Before we start, make sure you have these essentials:

- Python (with pip)
- Node.js and npm
- Ionic CLI

### Installing 🛠️

Let's set up our development environment step-by-step to breathe life into our project.

#### Setting Up the Backend

1. **Install Flask and Flask-CORS**

   Open your terminal and run:

   ```bash
   pip install Flask flask-cors
   ```

2. **Create the Flask Application**

   Create a file named `app.py` and inject the following Python code to kickstart a basic Flask app with CORS enabled:

   ```python
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
   ```

3. **Run the Flask App**

   Fire up your Flask application:

   ```bash
   python app.py
   ```

#### Setting Up the Frontend

1. **Create an Ionic Angular App**

   Generate a fresh Ionic Angular application using the Ionic CLI:

   ```bash
   ionic start example1 blank --type=angular
   ```

2. **Add a Service for REST API Calls**

   Inside your project directory, spawn a service:

   ```bash
   cd example1
   ionic generate service ionic-rest
   ```

3. **Configure AppModule**

   Amend `app.module.ts` to embrace `HttpClientModule` and your novel service:

   ```typescript
   // Other imports...
   import { HttpClientModule } from '@angular/common/http';
   import { IonicRestService } from './ionic-rest.service';

   @NgModule({
     // Other module properties...
     imports: [
       // Other modules...
       HttpClientModule,
     ],
     providers: [
       IonicRestService,
       // Other providers...
     ],
   })
   export class AppModule {}
   ```

4. **Implement Data Fetching in the Service**

   Adjust `ionic-rest.service.ts` for fetching data from our Flask API:

   ```typescript
   // Other imports...
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
   ```

5. **Display Data in HomePage**

   Update `home.page.ts` and `home.page.html` to fetch and exhibit data upon a button press.

### Run Your Ionic App 🏃‍♂️

Kickstart your Ionic application:

```bash
ionic serve
```

### Testing 🧪

Your Flask backend should now be serving data at `http://127.0.0.1:5000/getid`, and your Ionic Angular application should fetch this data to display it gracefully.

## Built With 🛠

- **Flask** - The web framework used for the backend.
- **Ionic** - The framework used for the frontend.
- **Angular** - Empowers building the frontend.

## Authors 🖊️

- **Your Name** - Feel free to add your contact information and social media links!

## License 📜

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments 👏

- Hat tip to anyone whose code was used
- Inspiration
- ME
- My brain

---

Thank you for stopping by, and happy coding! 😊👨‍💻
