exports.up = (pgm) => {
    pgm.addColumns('clubs', {
        category : { type: 'varchar', notNull: true},
        type : { type: 'varchar', notNull: true},
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('clubs', {
        category : { type: 'varchar', notNull: true},
        type : { type: 'varchar', notNull: true},
    });
};