## Getting Started

### Using this package

First, find the package name inside package.json name field:

Secondly, add this package in your application's package.json and install it with the installation command of your package manager

```bash example
pnpm install
```

Create a typedoc.json file in the root of your application and add the follwoing lines

```
{
  "extends": ["@repo/typedoc-config/base.json"],
  "out": "Documentation_web" // name of your documentation directory. this could be any name you would like
}

```

add alias command in the application package.json

```
"document": "typedoc --entryPointStrategy  expand ./app

```

if you are using turbo monorepo, add a new command `document` command.

Thats it!

run the Command `turbo document` from the root of your workspace and see the documentation generated inside your application. Thanks! happy coding!

contributer Name: sdr Profile: [sdrauth](https://www.npmjs.com/~sdrauth)
