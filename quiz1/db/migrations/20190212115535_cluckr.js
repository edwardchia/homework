
exports.up = function(knex, Promise) {
	return knex.schema.createTable('cluckr', table => {
		table.increments('id'); 
		table.text('content');
		table.string('tags');
		table.timestamp('createdAt').defaultTo(knex.fn.now());
		// "createdAt" timestamp default to NOW()
	});
};

// The `down` function is what is run when we rollback our migration
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('cluckr');
};
