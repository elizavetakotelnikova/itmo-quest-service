exports.up = (pgm) => {
    pgm.createTable('users', {
        id: {type: "uuid", notNull: true, primaryKey: true},
        isu: {type: 'integer', notNull: true, unique: true},
        faculty: { type: 'varchar(256)', notNull: false },
        course: {type: 'integer', notNull: false},
    });

    pgm.createTable('clubs', {
        id: {type: "uuid", notNull: true, primaryKey: true},
        name: { type: 'varchar(256)', notNull: true},
    });

    pgm.createTable('events', {
        id: {type: "uuid", notNull: true, primaryKey: true},
        title: { type: 'varchar(256)', notNull: true},
        description: { type: 'varchar(512)', notNull: false },
        photo_link: { type: 'varchar(256)', notNull: false },
        start_time: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        status: { type: "varchar(256)", notNull: false }
    });

    pgm.createTable('users_events', {
        user_id: {
            type: 'uuid',
            notNull: true,
            references: 'users(id)',
            onDelete: 'cascade',
        },
        event_id: {
            type: 'uuid',
            notNull: true,
            references: 'events(id)',
            onDelete: 'cascade',
        }
    });

    pgm.createTable('users_clubs', {
        user_id: {
            type: 'uuid',
            notNull: true,
            references: 'users(id)',
            onDelete: 'cascade',
        },
        club_id: {
            type: 'uuid',
            notNull: true,
            references: 'clubs(id)',
            onDelete: 'cascade',
        }
    });
};

exports.down = (pgm) => {
    pgm.dropTable('users_events');

    pgm.dropTable('users_clubs');

    pgm.dropTable('users');

    pgm.dropTable('clubs');

    pgm.dropTable('events');
};