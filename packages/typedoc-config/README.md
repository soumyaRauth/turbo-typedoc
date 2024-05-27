## Getting Started

## Install typedoc
Follow this document to install [typedoc](https://typedoc.org/guides/installation/)
### Using this package


Create a typedoc.json file in the root of your application and add the followoing lines. By default typedoc generates documentation inside docs folder. In case you want the name to be something else then you add the `out: "Name_of_Your_Folder"`

```
{
  "extends": ["@sdrauth/typedoc-config/base.json"],
  "out": "Documentation_web" // name of your documentation directory. this could be any name you would like
}

```

add alias command in the application package.json

```
"document": "typedoc --entryPointStrategy  expand ./app

```

if you are using turbo monorepo, add a new command `document` command in turbo.json.

Thats it!

run the Command `turbo document` from the root of your workspace and see the documentation generated inside your application. Thanks! happy coding!

contributer Name: sdr Profile: [sdrauth](https://www.npmjs.com/~sdrauth)
