-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 22 2023 г., 03:45
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `plat_base`
--

-- --------------------------------------------------------

--
-- Структура таблицы `area_holders`
--

CREATE TABLE `area_holders` (
  `id` int NOT NULL,
  `position` varchar(25) NOT NULL,
  `area_name` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `organisation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `industry` int NOT NULL,
  `description` text NOT NULL,
  `square` float NOT NULL,
  `cost` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `area_holders`
--

INSERT INTO `area_holders` (`id`, `position`, `area_name`, `organisation`, `industry`, `description`, `square`, `cost`) VALUES
(9, 'Бог', 'Арт-пространство завода «Кристалл»', 'org', 5, 'desc', 20, 228);

-- --------------------------------------------------------

--
-- Структура таблицы `industries`
--

CREATE TABLE `industries` (
  `id` int NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `industries`
--

INSERT INTO `industries` (`id`, `name`) VALUES
(5, 'Name');

-- --------------------------------------------------------

--
-- Структура таблицы `INN`
--

CREATE TABLE `INN` (
  `id` int NOT NULL,
  `INN` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `second_name` varchar(25) NOT NULL,
  `name` varchar(25) NOT NULL,
  `middlename` varchar(25) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `second_name`, `name`, `middlename`, `email`, `phone`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'Тихонов', 'Иван', '', 'ivan-pauk2002@mail.ru', '89169354218', '$2b$04$hpMPWp6AuIVL4XGayUN3uOprsOvlMKiUA5CAHltOYCGnwYDR8/QEO', '2023-05-19', '2023-05-19'),
(9, 'ivan', 'Name', NULL, 'ivan-pauk2003@mail.ru', '88005553535', '$2b$04$kxhkNSdi1TMjAgZ/ioJ2le8LMZwcRQIQVhtMYSSSFt/PGwHL0mqmO', '2023-05-19', '2023-05-19');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `area_holders`
--
ALTER TABLE `area_holders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `industry` (`industry`);

--
-- Индексы таблицы `industries`
--
ALTER TABLE `industries`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `INN`
--
ALTER TABLE `INN`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `industries`
--
ALTER TABLE `industries`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `area_holders`
--
ALTER TABLE `area_holders`
  ADD CONSTRAINT `area_holders_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `area_holders_ibfk_2` FOREIGN KEY (`industry`) REFERENCES `industries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
