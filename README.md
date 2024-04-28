# LMS frontend

### setup instruction

1.- clone the project
...

git clone git@github.com:tipagithubrit/LMS.git

2. Move into the directory
   ...

cd Lms-Frontend
...

3. install dependencies
   ...
   npm i

4.run the server
...
npm run dev

### Setup instructions for tailwind

[tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1. install tailwind css
   ...
   npm install -D tailwindcss

2- Create tailwind config file

...
npx tailwindcss init
...

3- Add file extensions to tailwind config file in the contents property
.....
"./src/\*_/_.{html,js,jsx,ts,tsx}"
......

4-Add the tailwind directives at the top of the "index.css " file
@tailwind base;
@tailwind components;
@tailwind utilities;
