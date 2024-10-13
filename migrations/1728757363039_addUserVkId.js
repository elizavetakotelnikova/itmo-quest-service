exports.up = (pgm) => {
    pgm.addColumns('users', {
        vk_id : { type: 'varchar', notNull: true},
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('users', {
        vk_id : { type: 'varchar', notNull: true},
    });
};