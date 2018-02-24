CREATE DATABASE `codecats_db` ;

USE codecats_db;

CREATE TABLE `codecats_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `codecats_db`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NULL,
  `title` VARCHAR(255) NULL,
  `body` VARCHAR(10000) NULL,
  PRIMARY KEY (`id`));
