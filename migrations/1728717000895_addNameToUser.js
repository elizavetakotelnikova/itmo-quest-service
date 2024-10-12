exports.up = (pgm) => {
    pgm.addColumns('users', {
        first_name : { type: 'varchar', notNull: true},
        last_name : { type: 'varchar', notNull: true},
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('users', {
        first_name : { type: 'varchar', notNull: true},
        last_name : { type: 'varchar', notNull: true},
    });
};