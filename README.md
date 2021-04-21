# Instant Messenger

<p align="center"><img src="ENTER ICON HERE" alt="gc-logo-nobg" border="0" width="500px"></p>

<h2>Introduction</h2>
##"ADD  INTRO"
###Eg intro

<h2>Table of Contents</h2>

<ul>
  <li><a href="#setup">Setup</a></li>
  <li><a href="#codebase">Codebase Overview</a></li>
  <li><a href="#tech">Tech Stack</a></li>
</ul>

<h2 id="setup">Setup</h2>
<p>In order to run the project locally, you must have node and npm installed globally.</p>
<h3>Step 1</h3>
Clone the project and install dependencies in both frontend and backend directory.

```
git clone https://github.com/rohitkv77-g/instant-messenger.git
npm install
cd /client && npm install
```

<h3>Step 2</h3>
Create a mongoDB database, a Cloudinary account and insert environement variables.

```
# backend/.env

DB_URL=<URL HERE>
JWT_SECRET=<Any string you want>

# frontend/.env

REACT_APP_SERVER_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
REACT_APP_CLOUDINARY_API=<Your cloudinary api>
REACT_APP_CLOUDINARY_SECRET=<Your cloudinary secret>
```

<h3>Step 3</h3>
Start a dev server.

```
npm start
cd /client && npm start
```

<h2 id="codebase">Codebase Overview</h2>

![folder structure](https://dev-to-uploads.s3.amazonaws.com/i/xrlls8w9wokvbrzns7fn.png)

<h3>Frontend</h3>
<ul>
<li><b>build</b>: Base directory for the live version. It gets updated when you run "npm run build"</li>
<li><b>public</b>: index.html and template page.</li>
<li><b>src</b>: JavaScript entry point and it is where all the logic lives.</li>
<li><b>assets</b>: Pictures and logos.</li>
<li><b>components</b>: Presentational and dynamic react components.</li>
<li><b>views</b>: Call it pages if you prefer, views are build by combining components together.</li>
<li><b>redux</b>: Redux related logic (global state management).</li>
</ul>

<h3>Backend</h3>
<ul>
<li><b>utils</b>: Helper functions, data and middlewares.</li>
<li><b>controllers</b>: Database related actions.</li>
<li><b>models</b>: MongoDB / Mongoose models definition.</li>
<li><b>routes</b>: API routes.</li>
<li><b>app.js</b>: Entry point.</li>
</ul>

<h2 id="tech">Tech Stack</h2>

![MERN](https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg)

<h3>Frontend</h3>
<ul>
<li><b>React</b>: JavaScript library for building user interfaces.</li>
<li><b>Redux</b>: State container.</li>
<li><b>TypeScript</b>: JavaScript superset.</li>
<li><b>SCSS</b>: CSS preprocessor.</li>
</ul>

<h3>Backend</h3>
<ul>
<li><b>Node</b>: JavaScript runtime.</li>
<li><b>Express</b>: Node library for building REST API.</li>
<li><b>MongoDB</b>: NoSQL Database.</li>
<li><b>SocketIO</b>: Enables real-time, bidirectional and event-based communication.</li>
</ul>
