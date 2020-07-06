
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'JC Denton', project_description: 'augmented vision', project_completed: false}, 
        {project_name: 'Tony Soprano', project_description: 'Mafia boss', project_completed: false}, 
        {project_name: 'Caesar', project_description: 'Ave', project_completed: false} 
      ]);
    });
};
