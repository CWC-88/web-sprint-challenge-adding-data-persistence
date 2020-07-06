
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments()
        table.string('project_name', 255).notNullable()
        table.string('project_description', 255)
        table.bool('project_completed')
    })
    .createTable('resources', table => {
        table.increments()
        table.string('resource_name', 255).notNullable()
        table.string('resource_description', 255)
    })
    .createTable('tasks', table => {
        table.increments()
        table.string('tasks_description', 255)
        table.string('task_notes', 255)
        table.bool('task_completed')
        table.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('project_resources', table => {
        table.increments()
        table.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        table.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('projects')
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('project_resources')
          
  };
  