-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boardelements`
--

DROP TABLE IF EXISTS `boardelements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardelements` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `boardId` int DEFAULT NULL,
  `type` enum('Ladder','Snake') NOT NULL,
  `from` int NOT NULL,
  `to` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `boardId` (`boardId`),
  CONSTRAINT `boardelements_ibfk_1` FOREIGN KEY (`boardId`) REFERENCES `boards` (`boardID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardelements`
--

LOCK TABLES `boardelements` WRITE;
/*!40000 ALTER TABLE `boardelements` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardelements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boards` (
  `boardID` int NOT NULL AUTO_INCREMENT,
  `boardImage` varchar(255) NOT NULL,
  `boardName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`boardID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1,'fff','paris','2022-02-02 00:00:00','2022-02-02 00:00:00');
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gameplayer`
--

DROP TABLE IF EXISTS `gameplayer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gameplayer` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `playerId` int DEFAULT NULL,
  `gameId` int DEFAULT NULL,
  `order` int NOT NULL,
  `lastPosition` int NOT NULL,
  `color` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `playerId` (`playerId`),
  KEY `gameId` (`gameId`),
  CONSTRAINT `gameplayer_ibfk_1` FOREIGN KEY (`playerId`) REFERENCES `users` (`userId`),
  CONSTRAINT `gameplayer_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gameplayer`
--

LOCK TABLES `gameplayer` WRITE;
/*!40000 ALTER TABLE `gameplayer` DISABLE KEYS */;
INSERT INTO `gameplayer` VALUES (2,1,9,1,0,'red','2023-07-10','2023-07-10');
/*!40000 ALTER TABLE `gameplayer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `playersNumber` int NOT NULL,
  `capacity` int DEFAULT NULL,
  `status` enum('pending','active','finished') NOT NULL DEFAULT 'pending',
  `BoardId` int NOT NULL,
  `currentPlayer` int NOT NULL,
  `updatedAt` date NOT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `games_BoardId_foreign_idx` (`BoardId`),
  KEY `games_currentPlayer_foreign_idx` (`currentPlayer`),
  CONSTRAINT `games_BoardId_foreign_idx` FOREIGN KEY (`BoardId`) REFERENCES `boards` (`boardID`),
  CONSTRAINT `games_currentPlayer_foreign_idx` FOREIGN KEY (`currentPlayer`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (9,'2023-07-10 11:16:48',1,3,'pending',1,1,'2023-07-10','2023-07-10');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230709083222-test-model.js'),('20230709085224-board-user-model.js'),('20230709092744-game-mode.js'),('20230709094504-board-game.js'),('20230709100349-test-relationship.js'),('20230709113528-current-player.js'),('20230709130352-game-player.js'),('20230709140521-board-elements.js'),('20230710101724-remove-game-columns.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutorials`
--

DROP TABLE IF EXISTS `tutorials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutorials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutorials`
--

LOCK TABLES `tutorials` WRITE;
/*!40000 ALTER TABLE `tutorials` DISABLE KEYS */;
INSERT INTO `tutorials` VALUES (1,'1','2',0,'2022-02-02 00:00:00','2022-02-02 00:00:00');
/*!40000 ALTER TABLE `tutorials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT UNIQUE,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sherin','81dc9bdb52d04dc20036dbd8313ed055','2022-02-02 00:00:00','2022-02-02 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-10 14:22:12
