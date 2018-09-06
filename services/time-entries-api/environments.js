const development = 'development';
const production = 'production';

const environments = {
  [development]: 'http://localhost:3001/api',
  [production]: 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-naomi'
};

const environment = process.env.NODE_ENV === production ? production : development;

// debugger;

export default environments[environment];
