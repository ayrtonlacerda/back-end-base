module.exports = {
  dialect: 'postgres',
  host: 'loaclhost',
  username: 'postgres',
  password: 'docker',
  database: 'festfeetdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
