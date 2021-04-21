-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: us-cdbr-east-03.cleardb.com    Database: heroku_73f617094343f4d
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login_name` varchar(50) NOT NULL,
  `institution_name` varchar(255) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `centre` varchar(100) DEFAULT NULL,
  `user_role` varchar(100) NOT NULL,
  `culture` varchar(100) NOT NULL,
  `timezone` varchar(100) NOT NULL,
  `acc_dis` varchar(6) DEFAULT NULL,
  `pass_never` varchar(6) DEFAULT NULL,
  `must_change` varchar(6) DEFAULT NULL,
  `cant_change` varchar(6) DEFAULT NULL,
  `user_title` varchar(50) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(250) NOT NULL,
  `street_address` text,
  `city` varchar(50) DEFAULT NULL,
  `phone_1` varchar(15) DEFAULT NULL,
  `phone_2` varchar(15) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `dob` varchar(20) NOT NULL,
  `pword` varchar(250) NOT NULL,
  `code` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `date_created` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (3,'bafnanimesh',NULL,NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'Nimesh Bafna','','','bafnanimesh@gmail.com',NULL,NULL,NULL,NULL,NULL,'','$2y$11$puBW69dcU5U68/TL9.G4XOM1H2hsJFpcw6URvjDljGDuzk3/fkv6u','IKyx5bthpZ',1,'1607430074'),(4,'priyatiwari.dr',NULL,NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'Artemis','','','priyatiwari.dr@gmail.com',NULL,NULL,NULL,NULL,NULL,'','$2y$11$dozgOpBdcaglxzYg5eg8UOCf.OSnKeWYhy2pzzO9/OzaUSmnfvrmS','J2aKgZlLch',1,'1607437958'),(5,'bhawna.sirohi13',NULL,NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'Apollo Proton Cancer Centre','','','bhawna.sirohi13@gmail.com',NULL,NULL,NULL,NULL,NULL,'','$2y$11$95miEDp77G4rNJ.TxgpOc.AlY1FvyGbxaroAlJ0TOQVxK95rDXChK','lnlQbxR7Qs',1,'1607502772'),(23,'rrcg.chetan','Solanki Co.','India','Mumbai','admin','','',NULL,NULL,NULL,NULL,NULL,'Solanki Chetan','','','rrcg.chetan@gmail.com',NULL,NULL,NULL,NULL,NULL,'19-04-2021','$2b$10$D6xROfOZmP4dQfc5b2pPTezZJhO5gsgTUUHTHi88xwkYwfo.vRxg2','27eh7nf1h2',1,'1617021265'),(35,'chetan',NULL,NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'SolankiChetan','','','chetan@itln.in',NULL,NULL,NULL,NULL,NULL,'','$2b$10$4keNsqn//nW60r/8DScrSOgV0huvONFZ.fk5w.7JBjRD45/tJm3CG','l93i0704lg',1,'1617046470'),(36,'rrcg.priyanka','Priyanka Co',NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'Priyanka Parab','','','rrcg.priyanka@gmail.com',NULL,NULL,NULL,NULL,NULL,'','$2b$10$riSqyKt6h6ERdhllQ3k6lOLmnUEwbBIUKWMCjsJgy5ktvGExmOdWW','e8ch3f1hbn8b',1,'1617106755'),(37,'khushi20solanki',NULL,NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'Khushbu Solanki','','','khushi20solanki@gmail.com',NULL,NULL,NULL,NULL,NULL,'','$2b$10$zf8lHuvgR1eJdhNKF1SC3u./ci8i.3VK7IwIkq0T/ZRberxRGtyae','e8hhma17hl',1,'1617134302'),(38,'naagfoundation',NULL,'','','user','Best','(GMT+5:30) Mumbai, Kolkata, New Delhi','0','0','0','0','','Naag Foundation','Naag','Foundation','nag.foundation@gmail.com','','','','','','','','2bfh3j4ch4',1,'1617260472'),(49,'solanki_c','Solanki Co.','India','Indian Centre','user','Good','(GMT+5:30) Mumbai, Kolkata, New Delhi','','true','','','dev','First Name Last Name','First Name','Last Name','chetan19pisces@gmail.com','G. D. Ambekar Road','Mumbai','7020338206','1111111111','','','$2b$10$D6xROfOZmP4dQfc5b2pPTezZJhO5gsgTUUHTHi88xwkYwfo.vRxg2','028h4f08le',1,'1617291098'),(53,'','Devsinfi',NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'','','','chetansolanki@devsinfi.com',NULL,NULL,NULL,NULL,NULL,'','$2b$10$rbD8ry3XRFl2.rN28cddhefay3.qaiNEA24NIOggrCUDP7OXrqsJG','khi2jij695',1,'1618258096'),(54,'','River Route Creative Group','India',NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'','','','rrcg.creative@gmail.com',NULL,NULL,NULL,NULL,NULL,'','$2b$10$vEnr2czh.uRfYWPHIBa.VOjzCvEdo0kVsm/uv0JF9LUV5uz4vAS9e','gdflg0l024',1,'1618291529'),(64,'','Demo Institution',NULL,NULL,'user','','',NULL,NULL,NULL,NULL,NULL,'','','','client@demo.com',NULL,NULL,NULL,NULL,NULL,'','$2b$10$IjtncblUOItE66vUyHNaI.9QV9AY92Fuaj34WPj63Gdc8t1wAMua2','g433kg26nfc',1,'1618469968');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-21 16:34:01
