
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {tasks_description: 'merge with helios', task_notes: 'save the NSF', task_completed: false, project_id: 1},
        {tasks_description: 'whack phil leotardo', task_notes: 'prove we aint no glorified crew', task_completed: true, project_id: 2},
        {tasks_description: 'apply profilgate to cross', task_notes: 'do not remove', task_completed: false, project_id: 3}
      ]);
    });
};
