/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/navbar/navbar.component.{html,ts}",
    "./src/app/recipe-list/recipe-list.component.{html,ts}",
    "./src/app/recipe-item/recipe-item.component.{html,ts}",
    "./src/app/recipe-all/recipe-all.component.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

