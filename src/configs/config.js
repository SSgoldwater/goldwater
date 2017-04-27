const general = {
  fbAppId: '239746973163692'
}

const production = {
  dbUrl: "http://138.197.98.191:8080"
}

const development = {
  dbUrl: "http://localhost:8080"
}

let env; 

if (process.env.NODE_ENV == "production") {
  env = production;
}

if (process.env.NODE_ENV == "development") {
  env = development;
}

const _config = Object.assign({}, general, env);

export default _config;
