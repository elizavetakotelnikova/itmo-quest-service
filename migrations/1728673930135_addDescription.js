exports.up = (pgm) => {
    pgm.addColumns('clubs', {
       description : { type: 'text', notNull: false},
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('clubs', {
        description : { type: 'text', notNull: false},
    });
};