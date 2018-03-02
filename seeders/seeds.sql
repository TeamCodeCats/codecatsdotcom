USE codecats_db;

-- Seed us some users!
INSERT INTO users (firstname, lastname, username, googleId, createdAt, updatedAt) 
VALUES ("Joe", "Faulstick", "jfaulstick", "1001", NOW(), NOW());
INSERT INTO users (firstname, lastname, username, googleId, createdAt, updatedAt) 
VALUES ("Danish", "Akhtar", "dakhtar", "1776", NOW(), NOW());

-- Seed us some posts!
INSERT INTO posts (postType, UserId, body, createdAt, updatedAt) 
VALUES ("status-update", "1", "This is my very first post on Code Cats! Meow!", NOW(), NOW());

INSERT INTO posts (postType, UserId, body, createdAt, updatedAt) 
VALUES ("status-update", "1", "This site is going to be awesome!", NOW(), NOW());

INSERT INTO posts (postType, UserId, body, createdAt, updatedAt) 
VALUES ("status-update", "1", "I'm going to type a bunch of stuff here in no particular order because I want to see how it looks with a lot of text oh my cats are fun.", NOW(), NOW());

INSERT INTO comments (UserId, body, PostId, createdAt, updatedAt)
VALUES ("2", "Mine too. Rar!", "1", NOW(), NOW());

INSERT INTO comments (UserId, body, PostId, createdAt, updatedAt)
VALUES ("2", "It's going to be better than awesome!!!", "2", NOW(), NOW());

INSERT INTO comments (UserId, body, PostId, createdAt, updatedAt)
VALUES ("1", "Okay, you're right.", "2", NOW(), NOW());