// MongoDB initialization script
db = db.getSiblingDB('nextjs-auth');

// Create a user for the application
db.createUser({
  user: 'nextjs-user',
  pwd: 'nextjs-password',
  roles: [
    {
      role: 'readWrite',
      db: 'nextjs-auth'
    }
  ]
});

// Create initial collections (optional)
db.createCollection('users');
db.createCollection('accounts');
db.createCollection('sessions');
db.createCollection('verification_tokens');

print('Database initialized successfully!');

