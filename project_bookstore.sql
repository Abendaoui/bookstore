-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 18, 2023 at 07:20 PM
-- Server version: 8.0.31
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `profile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `bio`, `profile`, `created_at`, `updated_at`) VALUES
(1, 'allan dib', 'Allan Dib is an entrepreneur, marketing expert, and author of the bestselling book \"The 1-Page Marketing Plan\". He has started and grown multiple businesses in industries such as IT, telecommunications, and marketing. Allan\'s expertise lies in helping small business owners and entrepreneurs to create effective marketing strategies to achieve success.', '1681087612.jpg', '2023-04-10 00:46:52', '2023-04-10 00:46:52'),
(2, 'robert kiyosaki', 'Robert Kiyosaki is an American investor, entrepreneur, and author of the bestselling book \"Rich Dad Poor Dad\". He is a proponent of financial education and advocates for people to take control of their financial futures. Kiyosaki has written over 20 books on personal finance and has helped millions of people worldwide improve their financial literacy.', '1681087697.jpg', '2023-04-10 00:48:17', '2023-04-10 00:48:17'),
(3, 'james clear', 'James Clear is a writer, entrepreneur, and author of the bestselling book \"Atomic Habits\". He writes about behavioral psychology, habit formation, and performance improvement on his website, jamesclear.com. Clear\'s work has been featured in the New York Times, Time magazine, and on CBS This Morning, among other publications.', '1681087788.webp', '2023-04-10 00:49:48', '2023-04-10 00:49:48'),
(4, 'yuval noah harari', 'Yuval Noah Harari is an Israeli historian, philosopher, and author of the international bestseller \"Sapiens: A Brief History of Humankind\". He specializes in world history and macro-historical processes, and his work explores the intersection of history, science, and philosophy. Harari is a professor at the Hebrew University of Jerusalem.', '1681087912.jpg', '2023-04-10 00:51:52', '2023-04-10 00:51:52'),
(5, 'malcolm gladwell', 'Gladwell is a Canadian journalist and author known for his works of popular psychology, including \"The Tipping Point\" and \"Outliers\". He has been a staff writer for The New Yorker since 1996 and has been named one of the 100 most influential people by Time magazine.', '1681087991.jpg', '2023-04-10 00:53:11', '2023-04-10 00:53:11'),
(6, 'michelle obama', 'Obama is a lawyer, author, and former First Lady of the United States. Her memoir, \"Becoming\", was a critical and commercial success, selling millions of copies worldwide. She is a prominent advocate for education, healthy eating, and women\'s rights.', '1681088040.jpg', '2023-04-10 00:54:00', '2023-04-10 00:54:00'),
(7, 'atul gawande', 'Gawande is an American surgeon, writer, and public health researcher. He has written several books, including \"Being Mortal\" and \"The Checklist Manifesto\", which explore healthcare and the human experience. He is a professor at both Harvard Medical School and the Harvard T.H. Chan School of Public Health', '1681088125.webp', '2023-04-10 00:55:25', '2023-04-10 00:55:25'),
(8, 'Tt-nehisi coates', 'Coates is an American author, journalist, and educator known for his works on social and political issues, including racism, police brutality, and inequality. He has written for several publications, including The Atlantic, and has won several awards, including the National Book Award for \"Between the World and Me', '1681088172.jpg', '2023-04-10 00:56:12', '2023-04-10 00:56:12'),
(9, 'David Baldacci', 'David Baldacci attended law school at the University of Virginia, and went on to work as a trial lawyer, and later as a corporate lawyer, in Washington, D.C. He is now a full-time writer whose', '1685489579.jpg', '2023-05-30 22:32:59', '2023-05-30 22:32:59'),
(10, 'Khaled Hosseini', 'Khaled Hosseini, (born March 4, 1965, Kabul, Afghanistan), Afghan-born American novelist who was known for his vivid depictions of Afghanistan, most notably in The Kite Runner (2003). Hosseini grew up in Kabul; his father was a diplomat and his mother a secondary-school teacher.', '1685804415.jpg', '2023-06-03 14:00:15', '2023-06-03 14:00:15'),
(11, 'Hoda Barakat', 'Hoda Barakat is a Lebanese novelist. She lived most of her early life in Beirut before moving to Paris, where she now resides. She has published six novels, two plays, a book of short stories, and a book of memoirs.', '1685813819.jpg', '2023-06-03 16:36:59', '2023-06-03 16:36:59'),
(12, 'Alaa Al Aswany', 'Alaa Al Aswany is an Egyptian writer, novelist, and a founding member of the political movement Kefaya.', '1685814112.webp', '2023-06-03 16:41:52', '2023-06-03 16:41:52'),
(13, 'Jabbour Douaihy', 'Jabbour Douaihy was a critically-acclaimed Lebanese writer, translator, and professor of literature. His novels were nominated four times for the International Prize for Arabic Fiction, and he has also published translations, short story collections, and children\'s books.', '1685814408.png', '2023-06-03 16:46:48', '2023-06-03 16:46:48');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `nb_pages` int NOT NULL,
  `published_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `stock` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author_id`, `category_id`, `slug`, `description`, `cover`, `language`, `price`, `nb_pages`, `published_date`, `created_at`, `updated_at`, `stock`) VALUES
(1, 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The Crowd', 1, 11, 'the-1-page-marketing-plan-get-new-customers-make-more-money-and-stand-out-from-the-crowd', 'This book outlines a simple and practical marketing plan that entrepreneurs and small business owners can use to attract more customers and grow their businesses.', '1681089218.jpg', 'english', '22.00', 222, '2028-01-01', '2023-04-10 01:13:38', '2023-04-10 01:13:38', 10),
(2, 'Rich Dad Poor Dad', 2, 9, 'rich-dad-poor-dad', 'This is one of Kiyosaki\'s most well-known books, in which he shares the financial lessons he learned from his \"rich dad\" (his best friend\'s father) and his \"poor dad\" (his biological father), and provides insights on how to build wealth.', '1681089701.jpg', 'english', '18.00', 336, '1997-01-01', '2023-04-10 01:21:41', '2023-04-10 01:21:41', 20),
(3, 'Cashflow Quadrant: Rich Dad\'s Guide to Financial Freedom', 2, 9, 'cashflow-quadrant-rich-dads-guide-to-financial-freedom', 'This book expands on the concepts introduced in \"Rich Dad Poor Dad\" and provides a framework for moving from being an employee or self-employed to a business owner or investor, with the aim of achieving financial freedom.', '1681089787.jpg', 'english', '16.00', 352, '1998-01-01', '2023-04-10 01:23:07', '2023-04-10 01:23:07', 50),
(4, 'The Business of the 21st Century', 2, 1, 'the-business-of-the-21st-century', 'This book argues that network marketing is a viable business model for the 21st century, and provides insights on how to succeed in this industry.', '1681089870.jpg', 'english', '16.00', 144, '2010-01-01', '2023-04-10 01:24:30', '2023-04-10 01:24:30', 0),
(5, 'Why We Want You to Be Rich: Two Men, One Message', 2, 9, 'why-we-want-you-to-be-rich-two-men-one-message', 'Kiyosaki co-authored this book with Donald Trump, and they share their views on wealth-building, real estate investing, and entrepreneurship', '1681089982.jpg', 'english', '12.00', 352, '2006-01-01', '2023-04-10 01:26:22', '2023-04-10 01:26:22', 8),
(6, 'Retire Young Retire Rich', 2, 9, 'retire-young-retire-rich', 'This book provides practical advice on how to achieve financial independence and retire early, using real estate investing and other strategies.', '1681090051.jpg', 'english', '19.00', 286, '2002-01-01', '2023-04-10 01:27:31', '2023-04-10 01:27:31', 350),
(7, 'Atomic Habits', 3, 12, 'atomic-habits', 'In this book, Clear provides practical advice on how to build good habits and break bad ones, using the concept of \"atomic habits\" - small, incremental changes that lead to big results over time. He draws on research from psychology, neuroscience, and other fields to provide evidence-based strategies for habit formation.', '1681090347.webp', 'english', '45.00', 320, '2018-01-01', '2023-04-10 01:32:27', '2023-04-10 01:32:27', 40),
(9, 'Fake', 2, 12, 'fake', '\"Fake\" is a classic children\'s novel that tells the story of Mary Lennox, a young girl who discovers a hidden garden on her uncle\'s estate. Through the power of nature and friendship, Mary transforms the neglected garden and, in turn, her own life', '1685479485.webp', 'english', '24.00', 225, '2019-07-10', '2023-05-30 19:44:45', '2023-05-30 19:44:45', 1),
(10, 'guide to investing', 2, 9, 'guide-to-investing', 'whether your goal is to become financially secure, comfortable, or rich this book is your guide to understanding the asset classes and investment strategy', '1685486958.jpg', 'english', '25.00', 265, '2022-06-02', '2023-05-30 21:49:18', '2023-05-30 21:49:18', 1),
(11, 'michelle obama biography', 6, 10, 'michelle-obama-biography', 'personal and professional accomplishments, her life partnership with President Barack Obama, and her distinctive approach to the role of First Lady', '1685487234.jpg', 'english', '41.00', 120, '2020-01-28', '2023-05-30 21:53:54', '2023-05-30 21:53:54', 1),
(12, 'outliers the story of success', 5, 12, 'outliers-the-story-of-success', 'Uses several examples, including premiere youth-hockey teams, The Beatles, entrepreneurs, and plane crashes to explain why geniuses and other successful outliers benefit from extraordinary times, circumstances, and opportunities', '1685487515.jpg', 'english', '28.00', 240, '2019-01-01', '2023-05-30 21:58:35', '2023-05-30 21:58:35', 25),
(14, 'And The Mountains Echoed', 10, 2, 'and-the-mountains-echoed', 'Khaled Hosseini, author of the global bestsellers The Kite Runner and A Thousand Splendid Suns, has spent six years writing And the Mountains Echoed, which Bloomsbury editor-in-chief Alexandra Pringle describes as \'a big book in every sense', '1685813552.jpg', 'arabic', '26.00', 250, '2013-02-10', '2023-06-03 16:32:32', '2023-06-03 16:32:32', 59),
(15, 'A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini, following the huge success of his bestselling 2003 debut The Kite Runner ...', 10, 5, 'a-thousand-splendid-suns-is-a-2007-novel-by-afghan-american-author-khaled-hosseini-following-the-huge-success-of-his-bestselling-2003-debut-the-kite-runner', 'Two women born a generation apart witness the destruction of their home and family in wartorn Kabul, incurring losses over the course of thirty years that test the limits of their strength and courage.', '1685813681.jpg', 'arabic', '32.00', 348, '2007-02-10', '2023-06-03 16:34:41', '2023-06-03 16:34:41', 100),
(16, 'Disciples of Passion', 11, 12, 'disciples-of-passion', 'Disciples of Passion chronicles the civil war in Lebanon through the troubled and sometimes quasi-hallucinatory mind of a young man who has experienced kidnapping, hostage exchange, and hospital internment.', '1685813930.jpg', 'arabic', '14.00', 210, '2003-01-02', '2023-06-03 16:38:50', '2023-06-03 16:38:50', 25),
(17, 'Voices of the Lost', 11, 2, 'voices-of-the-lost', 'From one of today’s most talented Arabic writers, this is the story of lives intimately woven together in a society that is tearing itself apart', '1685814009.jpg', 'arabic', '18.00', 250, '2009-10-10', '2023-06-03 16:40:09', '2023-06-03 16:40:09', 26),
(18, 'Jumhuriyat ka\'an', 12, 2, 'jumhuriyat-kaan', 'À travers les péripéties politiques et intimes d’une palette de personnages tous liés les uns aux autres, du chauffeur au haut gradé, de la domestique musulmane au bourgeois copte, El Aswany livre le roman de la révolution ...', '1685814225.jpg', 'arabic', '20.00', 123, '2009-02-10', '2023-06-03 16:43:45', '2023-06-03 16:43:45', 100),
(19, 'The Automobile Club of Egypt', 12, 4, 'the-automobile-club-of-egypt', 'Behind the doors of the Automobile Club of Egypt, Egyptian staff attend to the every need of Cairo\'s European elite - the way they always have done, it seems.But soon the social upheaval out on the street will break its way through the club ...', '1685814296.jpg', 'arabic', '40.00', 450, '2019-06-04', '2023-06-03 16:44:56', '2023-06-03 16:44:56', 20),
(20, 'The American Quarter', 13, 3, 'the-american-quarter', 'A love letter to a city of his childhood, Jabbour Douaihy’s The American Quarter is set in a small neighborhood in Tripoli, the ancient port on the northern coast of Lebanon.', '1685814499.jpg', 'arabic', '53.00', 120, '2006-01-01', '2023-06-03 16:48:19', '2023-06-03 16:48:19', 10),
(21, 'June Rain', 13, 2, 'june-rain', 'With a masterful eye for detail, Douaihy reconstructs that fateful June Sunday when rain poured from the sky and the traditions and affections of village life were consumed by violence and revenge.', '1685814566.jpg', 'arabic', '42.00', 650, '2009-02-03', '2023-06-03 16:49:26', '2023-06-03 16:49:26', 100),
(22, 'The Cat in the Hat', 8, 6, 'the-cat-in-the-hat', 'A playful story about a mischievous cat who brings chaos and fun into the lives of two children on a rainy day.', '1685814714.jpg', 'english', '10.00', 120, '2001-10-12', '2023-06-03 16:51:54', '2023-06-03 16:51:54', 50),
(23, 'Charlotte\'s Web', 8, 6, 'charlottes-web', 'The heartwarming tale of the friendship between a pig named Wilbur and a clever spider named Charlotte, who works to save Wilbur from being eaten', '1685814794.jpg', 'english', '10.00', 120, '2001-01-01', '2023-06-03 16:53:14', '2023-06-03 16:53:14', 50),
(24, 'Harry Potter and the Philosopher\'s Stone', 7, 6, 'harry-potter-and-the-philosophers-stone', 'The first book in the beloved Harry Potter series, introducing young readers to the magical world of Hogwarts School of Witchcraft and Wizardry.', '1685814869.jpg', 'english', '10.00', 120, '2000-01-01', '2023-06-03 16:54:29', '2023-06-03 16:54:29', 50),
(25, 'The Lion, the Witch, and the Wardrobe', 7, 6, 'the-lion-the-witch-and-the-wardrobe', 'The first book in \"The Chronicles of Narnia\" series, which transports four siblings into a mystical land where they battle the White Witch and help restore peace.', '1685814941.jpg', 'english', '10.00', 120, '2005-01-01', '2023-06-03 16:55:41', '2023-06-03 16:55:41', 50),
(26, 'Matilda', 7, 6, 'matilda', 'The story of an extraordinary young girl with telekinetic powers who uses her abilities to outwit her neglectful parents and the tyrannical headmistress of her school', '1685815027.jpg', 'english', '10.00', 120, '2009-01-01', '2023-06-03 16:57:07', '2023-06-03 16:57:07', 51),
(27, 'Kalila wa Dimna', 5, 6, 'kalila-wa-dimna', 'A collection of animal fables and moral stories that teach children important life lessons. It is a classic work of Arabic literature with origins in ancient Indian and Persian tales', '1685815127.jpg', 'arabic', '10.00', 120, '2000-01-01', '2023-06-03 16:58:47', '2023-06-03 16:58:47', 50),
(28, 'The Tales of the Eight Old Men', 6, 6, 'the-tales-of-the-eight-old-men', 'this collection of stories features eight elderly men who gather to tell enchanting tales that inspire imagination and impart wisdom.', '1685815229.jpg', 'arabic', '12.00', 120, '2008-01-02', '2023-06-03 17:00:29', '2023-06-03 17:00:29', 51),
(29, 'In the World of Dreams', 6, 6, 'in-the-world-of-dreams', 'this book takes children on a magical journey through the world of dreams, exploring the power of imagination and creativity.', '1685815311.jpg', 'arabic', '15.00', 120, '2012-03-08', '2023-06-03 17:01:51', '2023-06-03 17:01:51', 51),
(30, '1984', 7, 14, '1984', 'A dystopian novel that depicts a totalitarian society ruled by Big Brother and explores themes of government surveillance, propaganda, and the erosion of individual freedoms.', '1685832954.jpg', 'english', '52.00', 150, '2001-10-12', '2023-06-03 21:55:54', '2023-06-03 21:55:54', 25),
(31, 'To Kill a Mockingbird', 6, 14, 'to-kill-a-mockingbird', 'Set in the Deep South during the 1930s, this novel addresses racial injustice and inequality through the eyes of Scout Finch, a young girl whose father defends a black man accused of rape.', '1685833167.jpg', 'english', '12.00', 174, '2009-02-06', '2023-06-03 21:59:27', '2023-06-03 21:59:27', 50),
(32, 'Pride and Prejudice', 5, 14, 'pride-and-prejudice', 'A classic romance novel that follows the spirited Elizabeth Bennet as she navigates social expectations, love, and the complexities of class in 19th-century England.', '1685833266.jpg', 'english', '14.00', 198, '2019-07-09', '2023-06-03 22:01:06', '2023-06-03 22:01:06', 50),
(33, 'The Great Gatsby', 5, 14, 'the-great-gatsby', 'Set in the Roaring Twenties, this novel explores the decadence and disillusionment of the Jazz Age through the eyes of the enigmatic Jay Gatsby and the narrator, Nick Carraway.', '1685833355.jpg', 'english', '10.00', 325, '2022-10-12', '2023-06-03 22:02:35', '2023-06-03 22:02:35', 140),
(34, 'Moby-Dick', 5, 14, 'moby-dick', 'A sprawling epic that tells the story of Captain Ahab\'s obsessive quest for revenge against the white whale, Moby Dick, exploring themes of man\'s struggle against nature and the human condition.', '1685833423.jpg', 'english', '16.00', 140, '2010-02-09', '2023-06-03 22:03:43', '2023-06-03 22:03:43', 50),
(35, 'One Hundred Years of Solitude', 5, 14, 'one-hundred-years-of-solitude', 'A masterpiece of magical realism, this novel chronicles the Buendía family across multiple generations, blending reality and fantasy to depict the history of the fictional town of Macondo.', '1685833521.jpg', 'english', '25.00', 402, '2023-07-01', '2023-06-03 22:05:21', '2023-06-03 22:05:21', 100),
(36, 'Crime and Punishment', 8, 14, 'crime-and-punishment', 'A psychological novel that delves into the mind of the troubled protagonist, Raskolnikov, as he grapples with guilt and the consequences of his actions after committing a crime.', '1685833597.jpg', 'english', '120.00', 320, '2002-08-05', '2023-06-03 22:06:37', '2023-06-03 22:06:37', 9),
(37, 'The Catcher in the Rye', 8, 14, 'the-catcher-in-the-rye', 'Narrated by the rebellious teenager Holden Caulfield, this coming-of-age novel explores themes of alienation, identity, and the struggles of adolescence.', '1685833656.jpg', 'english', '14.00', 250, '2009-06-04', '2023-06-03 22:07:36', '2023-06-03 22:07:36', 50);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `book_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `book_id`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(51, 11, 1, 1, '22.00', '2023-06-04 11:55:24', '2023-06-04 11:55:24'),
(52, 11, 35, 1, '25.00', '2023-06-04 11:55:27', '2023-06-04 11:55:27'),
(53, 11, 33, 1, '10.00', '2023-06-04 11:55:28', '2023-06-04 11:55:28'),
(54, 11, 10, 1, '25.00', '2023-06-04 11:55:30', '2023-06-04 11:55:30');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'sports', '1681085869.jpg', '2023-04-10 00:17:49', '2023-04-10 00:17:49'),
(2, 'historical fiction', '1681086007.jpg', '2023-04-10 00:20:07', '2023-04-10 00:20:07'),
(3, 'romance', '1681086019.jpg', '2023-04-10 00:20:19', '2023-04-10 00:20:19'),
(4, 'mystery', '1681086079.jpg', '2023-04-10 00:21:19', '2023-04-10 00:21:19'),
(5, 'fantasy', '1681086105.jpg', '2023-04-10 00:21:45', '2023-04-10 00:21:45'),
(6, 'kids', '1681086116.jpg', '2023-04-10 00:21:56', '2023-04-10 00:21:56'),
(8, 'technology', '1681086272.jpg', '2023-04-10 00:24:32', '2023-04-10 00:24:32'),
(9, 'finance', '1681086289.webp', '2023-04-10 00:24:49', '2023-04-10 00:24:49'),
(10, 'education', '1681086442.jpg', '2023-04-10 00:27:22', '2023-04-10 00:27:22'),
(11, 'marketing', '1681088987.webp', '2023-04-10 01:09:47', '2023-04-10 01:09:47'),
(12, 'personal growth', '1681090273.jpg', '2023-04-10 01:31:13', '2023-04-10 01:31:13'),
(13, 'thriller', '1685489852.jpg', '2023-05-30 22:37:32', '2023-05-30 22:37:32'),
(14, 'adults', '1685745014.jpg', '2023-06-02 21:30:14', '2023-06-02 21:30:14');

-- --------------------------------------------------------

--
-- Table structure for table `deliveries`
--

CREATE TABLE `deliveries` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `delivery_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_date` datetime NOT NULL,
  `delivery_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deliveries`
--

INSERT INTO `deliveries` (`id`, `order_id`, `delivery_method`, `delivery_status`, `delivery_date`, `delivery_address`, `city`, `created_at`, `updated_at`) VALUES
(1, 11, 'Amana 10 - 15 days', 'returned', '2023-06-05 20:49:34', 'Rabat Aggdal,15520', 'Rabat Aggdal,15520', '2023-06-05 19:49:34', '2023-06-05 20:00:43'),
(2, 14, 'Amana 2 - 4 days', 'Send To Delivery Company', '2023-06-12 00:17:27', 'Spain Madrid,12520', 'Spain Madrid,12520', '2023-06-11 23:17:27', '2023-06-11 23:17:27');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `name`, `email`, `text`, `created_at`, `updated_at`) VALUES
(1, 'Adil Bendaoui', 'adil@gmail.com', 'nice wep app', '2023-05-30 11:18:05', NULL),
(2, 'eren yeger', 'eren@yeger.com', 'eren@yeger.com', '2023-06-05 18:08:22', '2023-06-05 18:08:22'),
(3, 'Eren', 'eren@yeger.com', 'eren@yeger.com', '2023-06-05 18:10:04', '2023-06-05 18:10:04'),
(4, 'Eren Yeger', 'erenyeger@gmail.com', 'Hello There', '2023-06-17 10:07:18', '2023-06-17 10:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_04_115749_create_authors_table', 1),
(6, '2023_04_04_115954_create_categories_table', 1),
(7, '2023_04_04_120012_create_books_table', 1),
(8, '2023_04_04_120041_create_carts_table', 1),
(9, '2023_04_04_120059_create_orders_table', 1),
(10, '2023_04_04_120132_create_deliveries_table', 1),
(11, '2023_04_04_120152_create_reviews_table', 1),
(12, '2023_04_21_161129_add_full_name_column_to_orders_table', 2),
(13, '2023_05_30_105239_add_role_column_to_users_table', 3),
(14, '2023_05_30_110835_create_message_table', 4),
(15, '2023_05_30_173434_add_stock_column_to_books_table', 5),
(16, '2023_06_10_132759_create_returns_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `order_date` datetime NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ordered_products` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `order_date`, `total_price`, `status`, `created_at`, `updated_at`, `full_name`, `email`, `address`, `method`, `telephone`, `ordered_products`) VALUES
(5, 2, '2023-04-22 15:52:37', '243.00', 'accepted', '2023-04-22 15:52:37', '2023-06-05 19:45:21', 'EREN YEGER', 'eren@yeger.com', 'Rommani Hay Nahda 1,12250', 'Amana 2 - 4 days', '0641296176', 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdAtomic HabitsThe Business of the 21st Century'),
(6, 2, '2023-04-22 15:54:32', '38.00', 'shipped', '2023-04-22 15:54:32', '2023-06-01 23:07:19', 'ali', 'eren@yeger.com', 'Rommani Hay Nahda 1,12250', 'Amana 10 - 15 days', '0641296176', 'The Business of the 21st CenturyWhy We Want You to Be Rich: Two Men, One Message'),
(7, 2, '2023-04-22 16:13:58', '152.00', 'accepted', '2023-04-22 16:13:58', '2023-06-01 12:28:13', 'ousama', 'eren@yeger.com', 'Roma', 'Amana 10 - 15 days', '0641296176', 'Retire Young Retire RichCashflow Quadrant: Rich Dad\'s Guide to Financial FreedomRich Dad Poor Dad'),
(8, 2, '2023-05-29 18:39:21', '153.00', 'returned', '2023-05-29 17:39:21', '2023-06-14 19:36:24', 'EREN YEGER', 'eren@yeger.com', 'Rommani Hay Nahda 1,12250', 'Amana 2 - 4 days', '0641296176', 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdAtomic HabitsTransform Your HabitsThe Business of the 21st CenturyWhy We Want You to Be Rich: Two Men, One MessageRetire Young Retire Rich'),
(9, 2, '2023-05-30 13:36:58', '309.00', 'canceled', '2023-05-30 12:36:58', '2023-06-14 18:46:53', 'EREN YEGER', 'eren@yeger.com', 'Roma City,12250', 'Amana 2 - 4 days', '0641296176', 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdAtomic HabitsTransform Your HabitsThe Business of the 21st CenturyWhy We Want You to Be Rich: Two Men, One MessageRetire Young Retire Rich'),
(10, 2, '2023-06-04 23:26:52', '82.00', 'canceled', '2023-06-04 22:26:52', '2023-06-05 16:47:22', 'eren yeger', 'eren@yeger.com', 'Rommani Hay Nahda 1,12250', 'Amana 2 - 4 days', '0641296176', 'A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini, following the huge success of his bestselling 2003 debut The Kite Runner ...One Hundred Years of Solitude'),
(11, 12, '2023-06-05 19:59:47', '69.00', 'accepted', '2023-06-05 18:59:48', '2023-06-14 18:46:27', 'Nora Samri', 'nora@gmail.com', 'Rabat Aggdal,15520', 'Amana 10 - 15 days', '0658964136', 'The Great GatsbyOne Hundred Years of SolitudeFake'),
(12, 12, '2023-06-05 20:44:32', '181.00', 'accepted', '2023-06-05 19:44:32', '2023-06-05 19:52:06', 'Nora Samri', 'nora@gmail.com', 'Rabat Aggdal,15520', 'Amana 2 - 4 days', '0658967415', 'And The Mountains Echoed'),
(13, 12, '2023-06-05 20:55:08', '131.00', 'pending', '2023-06-05 19:55:08', '2023-06-14 18:47:05', 'Nora Samri', 'nora@gmail.com', 'Rabat Aggdal,15500', 'Amana 2 - 4 days', '0641296176', 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdOne Hundred Years of SolitudeDisciples of PassionRetire Young Retire RichAnd The Mountains Echoed'),
(14, 13, '2023-06-12 00:13:24', '260.00', 'delivered', '2023-06-11 23:13:24', '2023-06-11 23:19:45', 'carolina franch', 'carolina@gmail.com', 'Spain Madrid,12520', 'Amana 2 - 4 days', '0641296176', 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdOne Hundred Years of SolitudeVoices of the LostFakePride and PrejudiceThe Automobile Club of EgyptAtomic Habits'),
(15, 2, '2023-06-14 23:39:17', '95.00', 'delivered', '2023-06-14 22:39:17', '2023-06-14 22:40:58', 'eren yeger', 'eren@yeger.com', 'Rabat Aggdal,15520', 'Amana 10 - 15 days', '0658967415', 'The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdOne Hundred Years of SolitudeThe Great Gatsbyoutliers the story of success'),
(16, 13, '2023-06-17 11:22:17', '60.00', 'delivered', '2023-06-17 10:22:17', '2023-06-17 10:23:27', 'Carolina Sniff', 'carolina@gmail.com', 'imm 63 apprt 18 el najah tamesna,12200', 'Amana 2 - 4 days', '+212641296176', 'One Hundred Years of SolitudeThe Great Gatsby'),
(17, 13, '2023-06-17 11:22:20', '60.00', 'returned', '2023-06-17 10:22:20', '2023-06-17 10:29:27', 'Carolina Sniff', 'carolina@gmail.com', 'imm 63 apprt 18 el najah tamesna,12200', 'Amana 2 - 4 days', '+212641296176', ''),
(18, 2, '2023-06-18 18:25:37', '157.00', 'pending', '2023-06-18 17:25:37', '2023-06-18 17:25:37', 'Eren Yeger', 'eren@yeger.com', 'imm 63 apprt 18 el najah tamesna,12200', 'Amana 10 - 15 days', '+212641296176', 'One Hundred Years of SolitudeThe 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand Out From The CrowdThe Great Gatsbyguide to investingThe Automobile Club of Egypt'),
(19, 2, '2023-06-18 18:40:50', '41.00', 'delivered', '2023-06-18 17:40:50', '2023-06-18 17:41:36', 'Eren Yeger', 'eren@yeger.com', 'imm 63 apprt 18 el najah tamesna,12200', 'Amana 2 - 4 days', '+212641296176', 'Moby-Dick'),
(20, 2, '2023-03-29 00:00:00', '140.00', 'pending', '2023-03-18 18:42:53', '2023-06-18 18:42:56', 'Eren Yeger', 'eren@yeger.com', 'address', ' days', '0641269574', 'one,two,three');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(4, 'App\\Models\\User', 1, 'main', 'fe2a68d37282eed3ccb8d98f38d8b001126eed596db3f5c7a44ea192650eae17', '[\"*\"]', '2023-04-10 00:27:22', NULL, '2023-04-10 00:06:12', '2023-04-10 00:27:22'),
(6, 'App\\Models\\User', 1, 'main', 'd50e2a3c0962f44ef99d2e7ee2e32800641317d9b2987039bf39a62fbc6086f6', '[\"*\"]', '2023-04-10 00:56:12', NULL, '2023-04-10 00:40:59', '2023-04-10 00:56:12'),
(8, 'App\\Models\\User', 1, 'main', 'd2b642fc50392ff13a3d8d828d4b4d8e0ced2565552c6af8045618eefc880993', '[\"*\"]', '2023-04-10 01:34:55', NULL, '2023-04-10 01:00:38', '2023-04-10 01:34:55'),
(14, 'App\\Models\\User', 1, 'main', '1eb6e5a7e50c70e4fedf9a1b8a73d80853c2a24aedb904f15dcc4c12f54846af', '[\"*\"]', NULL, NULL, '2023-04-11 17:28:37', '2023-04-11 17:28:37'),
(15, 'App\\Models\\User', 1, 'main', '3471e63cb64d1ff087de56e759dd1df6a574dc238b674b11d4bf0717179852b0', '[\"*\"]', '2023-04-12 02:27:12', NULL, '2023-04-12 02:26:28', '2023-04-12 02:27:12'),
(17, 'App\\Models\\User', 2, 'main', '466ca6bcac9ae83f995befb3042c967f272d8cd953bbd19b6e67d4f54bb294fb', '[\"*\"]', '2023-04-18 23:09:19', NULL, '2023-04-12 11:50:15', '2023-04-18 23:09:19'),
(18, 'App\\Models\\User', 2, 'main', '977b2d34d564bb9ba655fc8ddfee99ef39f6dc6ba9bf37aa2a63eec91642b9c1', '[\"*\"]', '2023-04-20 14:02:39', NULL, '2023-04-18 23:09:35', '2023-04-20 14:02:39'),
(21, 'App\\Models\\User', 1, 'main', '9cd0db1e42eb0f2f17fe7be1fcd054a81d0c74e41809f46660875e84b7a8e49a', '[\"*\"]', NULL, NULL, '2023-04-22 16:15:30', '2023-04-22 16:15:30'),
(23, 'App\\Models\\User', 1, 'main', '663eec462350226cfd155437640179011a5415a530a0253c711f884e63fa4096', '[\"*\"]', NULL, NULL, '2023-04-24 15:00:56', '2023-04-24 15:00:56'),
(25, 'App\\Models\\User', 1, 'main', '2a64c5d30922b79a459fb1747e05d455d81b2bd354b40d7e756b4b2066f67782', '[\"*\"]', '2023-05-10 12:55:48', NULL, '2023-05-07 14:46:21', '2023-05-10 12:55:48'),
(27, 'App\\Models\\User', 1, 'main', '8c94644f120f6afcba88f5967215c3da92301de3ba488ea2bc54fe76eef63b76', '[\"*\"]', NULL, NULL, '2023-05-10 13:15:17', '2023-05-10 13:15:17'),
(29, 'App\\Models\\User', 1, 'main', 'fc59498cd191b2548764a0189c388a1f79161e047738ac2c7cd891ad80c95eb1', '[\"*\"]', NULL, NULL, '2023-05-20 22:07:09', '2023-05-20 22:07:09'),
(34, 'App\\Models\\User', 1, 'main', 'f9906d5d95b8807201b6263f58ffe2cf5edadc27f38b9a08d59aaeeabc7423c9', '[\"*\"]', '2023-05-28 13:59:45', NULL, '2023-05-28 13:59:40', '2023-05-28 13:59:45'),
(37, 'App\\Models\\User', 1, 'main', '79d0e51ce4bbd4214531c3139cc6cf34b5dddd4b9fbfe66560ab3c4c7227c3cd', '[\"*\"]', '2023-05-30 09:56:02', NULL, '2023-05-29 17:39:39', '2023-05-30 09:56:02'),
(39, 'App\\Models\\User', 4, 'main', '2036b4c2ee6cebe3fd65fcc218d2abea152d24b35b55fb0fe1715a0d1d1b835f', '[\"*\"]', '2023-05-30 12:33:20', NULL, '2023-05-30 09:57:42', '2023-05-30 12:33:20'),
(40, 'App\\Models\\User', 4, 'main', '793981018dd7aef1e1110153fc8b228e3053ed9cf81055f344c235240104866e', '[\"*\"]', '2023-05-30 12:34:34', NULL, '2023-05-30 12:34:30', '2023-05-30 12:34:34'),
(42, 'App\\Models\\User', 1, 'main', '34cf0913f33d4abeac7eab86be796e6fda9606fe7776024038aca6008ff4c40a', '[\"*\"]', '2023-05-30 22:43:15', NULL, '2023-05-30 12:37:13', '2023-05-30 22:43:15'),
(43, 'App\\Models\\User', 7, 'main', '249348f1446b25b0cad76777aefb7dc74e9b412d7e9be8a96f2c1669fd9bf826', '[\"*\"]', '2023-05-31 14:45:17', NULL, '2023-05-31 13:43:48', '2023-05-31 14:45:17'),
(44, 'App\\Models\\User', 1, 'main', '9c1a1ebac5b7ecc184001c9d3e45579b5e1f1b983c95e18feec90a2ef8684c3b', '[\"*\"]', '2023-06-01 00:27:53', NULL, '2023-05-31 14:46:05', '2023-06-01 00:27:53'),
(49, 'App\\Models\\User', 2, 'main', '76c07aeef24e968be4cd75171a1d0f4aadce47f5c1a857f1fc810578161db5c7', '[\"*\"]', '2023-06-02 13:26:06', NULL, '2023-06-01 23:34:31', '2023-06-02 13:26:06'),
(51, 'App\\Models\\User', 1, 'main', '14305e30019e1d51d4f093f0c43bb52f41853631352fb2e3e3c6514667e686ba', '[\"*\"]', '2023-06-02 21:30:59', NULL, '2023-06-02 21:27:35', '2023-06-02 21:30:59'),
(74, 'App\\Models\\User', 1, 'main', 'af4672277d9863a1a6d7c51dc98349e943c9d20657412077504448d06327362a', '[\"*\"]', '2023-06-11 23:24:02', NULL, '2023-06-11 23:16:31', '2023-06-11 23:24:02'),
(78, 'App\\Models\\User', 1, 'main', '76218fe1868d3c3da8e024573742672965bac5405020bd38b319afe525eb0bb6', '[\"*\"]', '2023-06-14 22:41:06', NULL, '2023-06-14 19:37:41', '2023-06-14 22:41:06');

-- --------------------------------------------------------

--
-- Table structure for table `returns`
--

CREATE TABLE `returns` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `return_date` date NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `returns`
--

INSERT INTO `returns` (`id`, `order_id`, `user_id`, `return_date`, `reason`, `notes`, `created_at`, `updated_at`) VALUES
(1, 8, 2, '2023-06-14', 'Some Reasons', 'Some Notes', '2023-06-14 19:36:24', '2023-06-14 19:36:24'),
(2, 17, 13, '2023-06-17', 'Some Reasons', 'Some Notes', '2023-06-17 10:29:27', '2023-06-17 10:29:27');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `book_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `review` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `book_id`, `user_id`, `review`, `rating`, `created_at`, `updated_at`) VALUES
(1, 34, 2, 'It\'s A great Book', 3, '2023-06-17 00:37:20', '2023-06-17 00:37:23'),
(2, 34, 5, 'U Have To read it it is Amazing', 5, '2023-06-17 01:08:20', NULL),
(3, 7, 2, 'I read This About Seven Times', 4, '2023-06-17 09:54:47', '2023-06-17 09:54:47'),
(4, 1, 2, 'Amazing Book For People Who Wanna Start Buisness', 3, '2023-06-17 09:57:09', '2023-06-17 09:57:09'),
(7, 1, 2, 'I read This About Seven Times', 4, '2023-06-17 09:58:52', '2023-06-17 09:58:52'),
(8, 10, 2, 'Amazing Book', 3, '2023-06-17 10:01:08', '2023-06-17 10:01:08'),
(9, 19, 2, 'One Of The Best Arabic Stories U Gotta Read It', 4, '2023-06-18 17:24:06', '2023-06-18 17:24:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Product Manager'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `profile`, `is_admin`, `address`, `phone`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(1, 'Adil Bendaoui', 'admin@admin.com', '$2y$10$nBeP5dOMnGNlG0bOfDM9veNPMjX.Ln86gZm6rjoSIeG4mdPRbTcV6', '1681085034.jpg', 1, 'Rommani , 12250', '0641296176', NULL, '2023-04-10 00:03:54', '2023-05-31 14:47:43', 'Product Manager'),
(2, 'Eren Yeger', 'eren@yeger.com', '$2y$10$HhirT8Vy2pjJkpN9n8ui9u2.iejxKGoDEo7/lg9jn7rpLHUPNmB8.', '1681085112.jpg', 0, NULL, NULL, NULL, '2023-04-10 00:05:12', '2023-04-10 00:05:12', NULL),
(5, 'Oussama', 'ousama@gmail.com', 'adil2001', '1685444223.jpg', 0, 'temara', '0641523698', NULL, '2023-05-11 23:00:00', NULL, 'Product Manager'),
(9, 'Anna Belyou', 'annabe@gmail.com', '$2y$10$uj4jM8E/kLvPJwCC3XcDDubFVFHFeLAEstaFO8qz2PwYcFzGQTt6m', '1685548094.jpg', 1, 'New York California USA, 20540', '1135269854', NULL, '2023-05-31 14:48:14', '2023-05-31 14:48:14', 'Owner, marketing'),
(10, 'John Yeger', 'johndoe@gmail.com', '$2y$10$0rGcyq.SCjHbunP8cH6AzuQ4VV2gXw44dLI5/0LoSDeJdvjUQY6Yy', '1685548161.jpg', 1, 'Boston USA,13698', '113526985485', NULL, '2023-05-31 14:49:21', '2023-05-31 14:49:21', 'Product Manager'),
(11, 'leo messi', 'Leo@messi.com', '$2y$10$6baV5rLiEuqY2QQW/ziqu.h.avoCinXb0yX8DnHNbDbInbNNM5jsW', '1685878637.jpg', 0, NULL, NULL, NULL, '2023-06-04 10:37:17', '2023-06-04 10:37:17', 'Product Manager'),
(12, 'Nora Samri', 'nora@gmail.com', '$2y$10$/40qb/yKv.0GNDjedcLqIebxGLfw6QKLVdFufxv.lNq/1WJtI6U52', '1685995050.jpg', 0, NULL, NULL, NULL, '2023-06-05 18:57:30', '2023-06-05 18:57:30', 'Product Manager'),
(13, 'Maria Clara', 'mariaclara@gmail.com', '$2y$10$dhMvjue4.9IBmnPyxR6rFOLzaDm0c0zh2vgzq5E1wXpQ8Ef70yfDu', '1686518056.png', 0, NULL, NULL, NULL, '2023-06-11 20:14:16', '2023-06-11 20:14:16', 'Product Manager'),
(14, 'Adil Bendaoui', 'adil@adil.com', '$2y$10$6ppfn8gArQeCtmTdDbn6.eeaft4z8LyWrEZJQNFpfzyaow2KCqm96', '1687041511.jpg', 0, NULL, NULL, NULL, '2023-06-17 21:38:31', '2023-06-17 21:38:31', 'Product Manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_author_id_foreign` (`author_id`),
  ADD KEY `books_category_id_foreign` (`category_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_book_id_foreign` (`book_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deliveries_order_id_foreign` (`order_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `returns_order_id_foreign` (`order_id`),
  ADD KEY `returns_user_id_foreign` (`user_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_book_id_foreign` (`book_id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `returns`
--
ALTER TABLE `returns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `books_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `returns`
--
ALTER TABLE `returns`
  ADD CONSTRAINT `returns_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `returns_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
