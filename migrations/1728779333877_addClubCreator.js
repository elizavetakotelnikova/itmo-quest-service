exports.up = (pgm) => {
    pgm.addColumns('clubs', {
        creator_id: {
            type: 'uuid',
            notNull: true,
            references: 'users(id)',
            onDelete: 'cascade',
        },
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('users', {
        creator_id: {
            type: 'uuid',
            notNull: true,
            references: 'users(id)',
            onDelete: 'cascade',
        },
    });
};