exports.up = (pgm) => {
  pgm.createTable('playlists_songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint(
    'playlists_songs',
    'fk_playlist_songs_id.songs_id',
    'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE'
  );
  pgm.addConstraint(
    'playlists_songs',
    'fk_playlist_playlist_id.playlist_id',
    'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropConstraint('playlists_songs', 'fk_playlist_songs_id.songs_id');
  pgm.dropConstraint('playlists_songs', 'fk_playlist_playlist_id.playlist_id');
  pgm.dropTable('playlists_songs');
};
