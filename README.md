# Compliments

This is a project for users to praise other users within the platform.

## Tech

- [Nodejs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env and .env.dev file

Access the .env.example file at the root of the project to get the environment variables.

## Run Locally

Clone the project

```bash
  git clone https://github.com/gleysonabreu/compliments.git
```

Go to the project directory

```bash
  cd compliments
```

Install dependencies

```bash
  npm install
  or
  yarn install
```

```bash
  npx typeorm migration:run
  or
  yarn typeorm migration:run
```

Start the server

```bash
  npm run dev
  or
  yarn dev
```

The application will be available at `http://localhost:3333`

## Authors

- [@gleysonabreu](https://www.github.com/gleysonabreu)

## License

[MIT](https://choosealicense.com/licenses/mit/)
