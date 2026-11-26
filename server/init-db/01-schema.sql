-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Nov 25, 2026 at 05:10 PM
-- Server version: 11.8.9-MariaDB-ubu2404
-- PHP Version: 8.3.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estimate`
--

-- --------------------------------------------------------

--
-- Table structure for table `assessments`
--

CREATE TABLE `assessments` (
  `id` int(11) NOT NULL,
  `indic_id` int(11) NOT NULL,
  `assign_id` int(11) NOT NULL,
  `role` enum('self','committee') NOT NULL DEFAULT 'self',
  `score` int(11) DEFAULT NULL,
  `bool_score` enum('มี','ไม่มี') DEFAULT NULL,
  `status` enum('in_progress','completed') NOT NULL DEFAULT 'in_progress'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `assessments`
--

INSERT INTO `assessments` (`id`, `indic_id`, `assign_id`, `role`, `score`, `bool_score`, `status`) VALUES
(1, 4, 2, 'self', 2, NULL, 'completed'),
(6, 4, 2, 'committee', 3, NULL, 'completed'),
(7, 1, 2, 'committee', NULL, 'มี', 'completed'),
(8, 2, 2, 'committee', NULL, 'ไม่มี', 'completed'),
(9, 3, 2, 'committee', NULL, 'มี', 'completed'),
(10, 5, 2, 'committee', 6, NULL, 'completed');

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` int(11) NOT NULL,
  `eval_id` int(11) NOT NULL,
  `evaluator_id` int(11) NOT NULL,
  `evaluatee_id` int(11) NOT NULL,
  `position` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `assignments`
--

INSERT INTO `assignments` (`id`, `eval_id`, `evaluator_id`, `evaluatee_id`, `position`, `created_at`) VALUES
(2, 2, 2, 1, 'กรรมการ', '2026-02-05 05:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `evaluations`
--

CREATE TABLE `evaluations` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `evaluations`
--

INSERT INTO `evaluations` (`id`, `title`, `start_date`, `end_date`) VALUES
(2, 'การประเมินทักษะประจำปี 2569', '2026-12-01', '2026-12-31'),
(4, 'asdddd', '2026-02-04', '2028-02-04'),
(5, 'การประเมินทักษะประจำปี 2569', '2026-12-01', '2026-12-31'),
(6, 'การประเมินทักษะประจำปี 2569', '2026-12-01', '2026-12-31'),
(7, 'การประเมินทักษะประจำปี 2569', '2026-12-01', '2026-12-31');

-- --------------------------------------------------------

--
-- Table structure for table `evidence`
--

CREATE TABLE `evidence` (
  `id` int(11) NOT NULL,
  `indic_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `evidence`
--

INSERT INTO `evidence` (`id`, `indic_id`, `user_id`, `file_path`, `file_url`, `description`) VALUES
(1, 4, 1, '1770272635833.jpg', NULL, 'awgag');

-- --------------------------------------------------------

--
-- Table structure for table `indicators`
--

CREATE TABLE `indicators` (
  `id` int(11) NOT NULL,
  `eval_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `weight` int(11) NOT NULL,
  `type` enum('score','boolean') NOT NULL,
  `type_file` enum('file','url') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `indicators`
--

INSERT INTO `indicators` (`id`, `eval_id`, `name`, `description`, `weight`, `type`, `type_file`) VALUES
(1, 2, 'agaw', 'gawg', 1, 'boolean', 'file'),
(2, 2, 'agwag', 'agasg', 1, 'boolean', 'file'),
(3, 2, 'agw', 'awgawg', 1, 'boolean', 'file'),
(4, 2, 'a', 'gagw', 1, 'score', 'file'),
(5, 2, 'agw', 'agaw', 1, 'score', 'url');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `indic_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `indic_id`, `level`, `description`) VALUES
(1, 4, 1, 'd1'),
(2, 4, 2, '15'),
(3, 4, 3, 'd2'),
(4, 4, 4, '12515'),
(5, 5, 1, 'awg'),
(6, 5, 2, 'sag'),
(7, 5, 3, 'sagsa'),
(8, 5, 4, 'gag');

-- --------------------------------------------------------

--
-- Table structure for table `signatures`
--

CREATE TABLE `signatures` (
  `id` int(11) NOT NULL,
  `assign_id` int(11) NOT NULL,
  `sign_file` longtext NOT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `signatures`
--

INSERT INTO `signatures` (`id`, `assign_id`, `sign_file`, `comment`) VALUES
(1, 2, 'ลายเซ็น', 'ดีมาก');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','evaluator','evaluatee') NOT NULL DEFAULT 'evaluatee',
  `is_reset` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `username`, `password`, `role`, `is_reset`) VALUES
(3, 'agawg', 'adminagwagawgag', 'admin', '1234', 'admin', 1),
(4, 'uset', 'aw', 'agwag', 'awg', 'evaluatee', 1),
(7, 'aasddd', 'asdass', 'asdasdd', 'asdasd', 'evaluatee', 1),
(8, 'aasddd', 'asdass', 'aaa', 'ddd', 'evaluatee', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessments`
--
ALTER TABLE `assessments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assign_id` (`assign_id`),
  ADD KEY `indic_id` (`indic_id`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `eval_id` (`eval_id`),
  ADD KEY `evaluatee_id` (`evaluatee_id`),
  ADD KEY `evaluator_id` (`evaluator_id`);

--
-- Indexes for table `evaluations`
--
ALTER TABLE `evaluations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `evidence`
--
ALTER TABLE `evidence`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `indic_id` (`indic_id`);

--
-- Indexes for table `indicators`
--
ALTER TABLE `indicators`
  ADD PRIMARY KEY (`id`),
  ADD KEY `eval_id` (`eval_id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indic_id` (`indic_id`);

--
-- Indexes for table `signatures`
--
ALTER TABLE `signatures`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `assign_id` (`assign_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessments`
--
ALTER TABLE `assessments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `evaluations`
--
ALTER TABLE `evaluations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `evidence`
--
ALTER TABLE `evidence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `indicators`
--
ALTER TABLE `indicators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `signatures`
--
ALTER TABLE `signatures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assessments`
--
ALTER TABLE `assessments`
  ADD CONSTRAINT `1` FOREIGN KEY (`assign_id`) REFERENCES `assignments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `2` FOREIGN KEY (`indic_id`) REFERENCES `indicators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
