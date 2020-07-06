
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'GEP Gun', resource_description: 'silent takedown'},
        {resource_name: 'gababool', resource_description: 'wheredafukisit?'},
        {resource_name: 'cross', resource_description: 'where YOU belong'}
      ]);
    });
};
