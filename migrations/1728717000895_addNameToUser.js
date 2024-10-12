exports.up = (pgm) => {
    pgm.addColumns('users', {
        firstName : { type: 'varchar', notNull: true},
        lastName : { type: 'varchar', notNull: true},
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('users', {
        firstName : { type: 'varchar', notNull: true},
        lastName : { type: 'varchar', notNull: true},
    });
};