CREATE TABLE `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('admin','evaluator','evaluatee') NOT NULL DEFAULT 'evaluatee',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `evaluations` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `stat_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `indicators` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `eval_id` INT(11) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `weight` INT(11) NOT NULL DEFAULT 1,
  `type` ENUM('boolean','score') NOT NULL DEFAULT 'boolean',
  `type_file` ENUM('file','url') NOT NULL DEFAULT 'file',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`eval_id`) REFERENCES `evaluations`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;