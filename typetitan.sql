-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2023 at 07:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `typetitan`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

CREATE TABLE `tbl_accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_accounts`
--

INSERT INTO `tbl_accounts` (`id`, `username`, `password`, `created_at`, `updated_at`, `deleted_at`) VALUES
(69, 'jerry', '123', NULL, '2023-10-20 09:59:21', NULL),
(70, 'joy', 'joy', NULL, '2023-10-20 10:55:08', NULL),
(71, 'jade', 'qwe', NULL, '2023-10-20 15:55:46', NULL),
(72, 'qweqwe', 'qwe', NULL, '2023-10-22 05:47:41', NULL),
(73, 'qwe', 'qwe', NULL, '2023-10-22 05:47:48', NULL),
(74, 'ismael', 'qwerty', NULL, '2023-10-22 07:09:38', NULL),
(75, 'newtest', 'qwe', NULL, '2023-10-27 14:32:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stats`
--

CREATE TABLE `tbl_stats` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `cpm` int(11) DEFAULT NULL,
  `wpm` int(11) DEFAULT NULL,
  `err` int(11) DEFAULT NULL,
  `accuracy` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD KEY `username_2` (`username`);

--
-- Indexes for table `tbl_stats`
--
ALTER TABLE `tbl_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `tbl_stats`
--
ALTER TABLE `tbl_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_stats`
--
ALTER TABLE `tbl_stats`
  ADD CONSTRAINT `tbl_stats_ibfk_1` FOREIGN KEY (`username`) REFERENCES `tbl_accounts` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
