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

### Adding pluging and Dependencies

npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

...

### configure auto import sort eslint

1. Install simple import sort
   .....
   npm i eslint-plugin-simple-import-sort
   ....

2.add rule in '.eslint.cjs'
...
'simple-import-sort/imports' : 'error'
...

3. add simple-import sort plugin in ''.eslint.cjs'
   ....
   plugins : [.... , 'simple-import-sort']
   ....

4. To enable auto import sort on file save in vscode

- open 'Setting.json'
- add the following config

...
"editor.codeActionOnSave" : {
"source.fixAll.eslint":true
}
