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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `boardId` (`boardId`),
  CONSTRAINT `boardelements_ibfk_1` FOREIGN KEY (`boardId`) REFERENCES `boards` (`boardID`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardelements`
--

LOCK TABLES `boardelements` WRITE;
/*!40000 ALTER TABLE `boardelements` DISABLE KEYS */;
INSERT INTO `boardelements` VALUES (1,1,'Ladder',3,20,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(2,1,'Ladder',6,14,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(3,1,'Ladder',11,28,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(4,1,'Ladder',15,34,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(5,1,'Ladder',17,74,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(6,1,'Ladder',22,37,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(7,1,'Ladder',38,59,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(8,1,'Ladder',49,67,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(9,2,'Ladder',4,25,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(10,2,'Ladder',13,46,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(11,2,'Ladder',33,49,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(12,2,'Ladder',42,63,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(13,2,'Ladder',50,69,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(14,2,'Ladder',62,81,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(15,2,'Ladder',74,92,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(16,6,'Snake',17,7,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(17,3,'Ladder',5,9,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(18,3,'Ladder',15,25,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(19,3,'Ladder',18,80,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(20,3,'Ladder',47,68,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(21,3,'Ladder',63,78,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(22,3,'Ladder',71,94,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(23,3,'Ladder',81,98,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(24,6,'Snake',64,60,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(25,4,'Ladder',1,38,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(26,4,'Ladder',4,14,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(27,4,'Ladder',9,31,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(28,4,'Ladder',21,42,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(29,4,'Ladder',28,84,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(30,4,'Ladder',51,67,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(31,4,'Ladder',71,91,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(32,4,'Ladder',80,100,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(33,5,'Ladder',2,38,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(34,5,'Ladder',4,14,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(35,5,'Ladder',9,31,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(36,5,'Ladder',33,85,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(37,5,'Ladder',52,88,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(38,5,'Ladder',80,99,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(40,6,'Ladder',28,84,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(41,1,'Snake',8,4,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(42,1,'Snake',18,1,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(43,3,'Ladder',44,86,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(44,1,'Snake',26,10,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(45,1,'Snake',39,5,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(46,1,'Snake',51,6,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(47,1,'Snake',54,36,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(48,1,'Snake',56,1,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(49,1,'Snake',60,23,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(50,1,'Snake',75,28,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(51,2,'Snake',27,5,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(52,2,'Snake',40,3,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(53,2,'Snake',43,18,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(54,2,'Snake',54,31,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(55,2,'Snake',66,45,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(56,2,'Snake',76,58,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(57,2,'Snake',89,53,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(58,2,'Snake',99,41,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(59,6,'Snake',98,79,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(60,6,'Snake',95,75,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(61,3,'Snake',6,3,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(62,3,'Snake',42,19,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(63,3,'Snake',45,36,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(64,3,'Snake',51,13,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(65,3,'Snake',67,51,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(66,3,'Snake',83,62,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(67,3,'Snake',90,87,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(68,3,'Snake',96,66,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(69,6,'Snake',54,34,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(70,6,'Snake',62,19,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(81,4,'Snake',17,7,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(82,4,'Snake',54,34,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(83,4,'Snake',62,19,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(84,4,'Snake',64,60,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(85,4,'Snake',87,24,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(86,4,'Snake',93,73,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(87,4,'Snake',95,75,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(88,4,'Snake',98,79,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(89,6,'Ladder',80,100,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(90,6,'Ladder',71,91,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(91,5,'Snake',51,11,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(92,5,'Snake',56,15,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(93,5,'Snake',62,57,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(94,5,'Snake',92,53,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(95,5,'Snake',98,8,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(96,6,'Ladder',51,67,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(97,6,'Ladder',21,42,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(98,6,'Ladder',9,31,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(99,6,'Ladder',4,14,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(100,6,'Ladder',1,38,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(101,1,'Ladder',57,76,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(102,1,'Ladder',61,78,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(103,1,'Ladder',73,86,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(104,1,'Ladder',81,98,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(105,1,'Ladder',88,91,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(106,1,'Snake',83,45,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(107,1,'Snake',85,59,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(108,1,'Snake',90,48,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(109,1,'Snake',92,25,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(110,1,'Snake',97,87,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(111,1,'Snake',99,63,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(112,6,'Snake',93,73,'2023-07-11 12:17:08','2023-07-11 12:17:08'),(113,6,'Snake',87,24,'2023-07-11 12:17:08','2023-07-11 12:17:08');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1,'board1.jpg','Board No.1','2023-07-11 12:06:58','2023-07-11 12:06:58'),(2,'board2.jpg','Board No.2','2023-07-11 12:06:58','2023-07-11 12:06:58'),(3,'board3.png','Board No.3','2023-07-11 12:06:58','2023-07-11 12:06:58'),(4,'board4.jpg','Board No.4','2023-07-11 12:06:58','2023-07-11 12:06:58'),(5,'board5.jpg','Board No.5','2023-07-11 12:06:58','2023-07-11 12:06:58'),(6,'board6.jpeg','Board No.6','2023-07-11 12:06:58','2023-07-11 12:06:58');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gameplayer`
--

LOCK TABLES `gameplayer` WRITE;
/*!40000 ALTER TABLE `gameplayer` DISABLE KEYS */;
INSERT INTO `gameplayer` VALUES (2,1,9,1,0,'red','2023-07-10','2023-07-10'),(3,2,9,0,0,'red','2023-07-10','2023-07-10');
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
  `creationDate` datetime NOT NULL,
  `playersNumber` int NOT NULL,
  `capacity` int DEFAULT NULL,
  `status` enum('pending','active','finished') NOT NULL DEFAULT 'pending',
  `BoardId` int NOT NULL,
  `currentPlayer` int NOT NULL,
  `updatedAt` date NOT NULL,
  `createdAt` date NOT NULL,
  `lastPlayTime` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `games_BoardId_foreign_idx` (`BoardId`),
  KEY `games_currentPlayer_foreign_idx` (`currentPlayer`),
  CONSTRAINT `games_BoardId_foreign_idx` FOREIGN KEY (`BoardId`) REFERENCES `boards` (`boardID`),
  CONSTRAINT `games_currentPlayer_foreign_idx` FOREIGN KEY (`currentPlayer`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (9,'2023-07-10 11:16:48',2,3,'pending',1,1,'2023-07-10','2023-07-10','2023-07-10 11:16:48'),(10,'2023-07-10 11:16:48',1,3,'pending',1,1,'2023-07-10','2023-07-10','2023-07-10 11:16:48');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
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
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sherin','81dc9bdb52d04dc20036dbd8313ed055','2022-02-02 00:00:00','2022-02-02 00:00:00'),(2,'ziyad','098f6bcd4621d373cade4e832627b4f6','2023-07-10 12:01:32','2023-07-10 12:01:32'),(3,'testing','81dc9bdb52d04dc20036dbd8313ed055','2023-07-11 09:51:15','2023-07-11 09:51:15'),(4,'zeezooX','81dc9bdb52d04dc20036dbd8313ed055','2023-07-11 09:57:37','2023-07-11 09:57:37');
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

-- Dump completed on 2023-07-11 15:23:49
