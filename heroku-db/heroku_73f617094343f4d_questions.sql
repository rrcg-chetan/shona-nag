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
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submited_by` int(11) NOT NULL,
  `patient_name` varchar(500) NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `hospital_id` varchar(500) NOT NULL,
  `patients_initial` varchar(500) NOT NULL,
  `patients_dob` varchar(50) NOT NULL,
  `name_of_institution` varchar(255) DEFAULT NULL,
  `age_of_diagnosis` varchar(50) NOT NULL,
  `date_of_diagnosis_of_bc` varchar(50) NOT NULL,
  `paraffin_blocks` varchar(50) NOT NULL,
  `profession` varchar(50) NOT NULL,
  `profession_if_other` varchar(500) NOT NULL,
  `ethnicity` varchar(50) NOT NULL,
  `ethnicity_if_other` varchar(500) NOT NULL,
  `patients_height` varchar(20) NOT NULL,
  `patients_weight` varchar(20) NOT NULL,
  `patients_bmi` varchar(20) NOT NULL,
  `family_have_cancer` varchar(10) NOT NULL,
  `which_relative` varchar(100) NOT NULL,
  `type_other_family_name` varchar(500) NOT NULL,
  `type_of_cancer` varchar(50) DEFAULT NULL,
  `age_at_diagnosis` varchar(50) DEFAULT NULL,
  `presenting_symptoms` varchar(50) NOT NULL,
  `family_income_type` varchar(10) NOT NULL,
  `family_income_amount` varchar(20) NOT NULL,
  `co_morbidities` varchar(50) NOT NULL,
  `co_morbidities_if_other` varchar(250) NOT NULL,
  `presentation` varchar(100) DEFAULT NULL,
  `at_diagnosis` varchar(100) DEFAULT NULL,
  `laterality` varchar(100) DEFAULT NULL,
  `ct` varchar(10) DEFAULT NULL,
  `ct_based_one` varchar(50) DEFAULT NULL,
  `cn` varchar(10) DEFAULT NULL,
  `cn_bases_on` varchar(50) DEFAULT NULL,
  `cm` varchar(10) DEFAULT NULL,
  `cm_based_on` varchar(50) DEFAULT NULL,
  `metastases` varchar(10) DEFAULT NULL,
  `total_number_of_metastatus` varchar(50) DEFAULT NULL,
  `metastases_types` text,
  `other_metastases_types` varchar(50) DEFAULT NULL,
  `show_metastatus_if_yes_2nd` varchar(250) DEFAULT NULL,
  `first_treatment_given` varchar(500) DEFAULT NULL,
  `germline_testing` varchar(500) DEFAULT NULL,
  `genetic_testing_done` varchar(10) DEFAULT NULL,
  `genetic_testing_done_and_other` varchar(50) DEFAULT NULL,
  `pregnancy_associated_b_c` varchar(500) DEFAULT NULL,
  `pathology_type` varchar(100) DEFAULT NULL,
  `pathology_type_if_other` varchar(500) DEFAULT NULL,
  `pathology_grade` varchar(10) DEFAULT NULL,
  `pt` varchar(10) DEFAULT NULL,
  `pn` varchar(10) DEFAULT NULL,
  `ypt` varchar(10) DEFAULT NULL,
  `ypn` varchar(10) DEFAULT NULL,
  `pathological_size_of_cancer` varchar(250) DEFAULT NULL,
  `er` varchar(10) DEFAULT NULL,
  `pr` varchar(10) DEFAULT NULL,
  `her2` varchar(10) DEFAULT NULL,
  `if_2_plus` varchar(50) DEFAULT NULL,
  `fertility_discussed` varchar(50) DEFAULT NULL,
  `fertility_discussed_if_yes` varchar(100) DEFAULT NULL,
  `fertility_discussed_if_other` varchar(500) DEFAULT NULL,
  `neo_adjuvant_therapy` varchar(50) DEFAULT NULL,
  `neo_adjuvant_therapy_if_yes` varchar(100) DEFAULT NULL,
  `neo_adjuvant_therapy_if_other` varchar(500) DEFAULT NULL,
  `ovarian_supression_during_chemotherapy` varchar(50) DEFAULT NULL,
  `ovarian_supression_during_chemotherapy_if_yes` varchar(50) DEFAULT NULL,
  `response_to_neoadjuvant_chemotherapy` varchar(100) DEFAULT NULL,
  `if_progression` varchar(100) DEFAULT NULL,
  `if_progression_if_other` varchar(500) DEFAULT NULL,
  `primary_surgery` varchar(100) DEFAULT NULL,
  `nodal_surgery` varchar(50) DEFAULT NULL,
  `nodal_surgery_if_other` varchar(500) DEFAULT NULL,
  `reconstruction_done` varchar(50) DEFAULT NULL,
  `timing_of_reconstruction` varchar(100) DEFAULT NULL,
  `type_of_reconstruction` varchar(100) DEFAULT NULL,
  `type_of_reconstruction_if_other` varchar(500) DEFAULT NULL,
  `adjuvant_chemotherapy` varchar(10) DEFAULT NULL,
  `adjuvant_chemotherapy_if_yes` varchar(50) DEFAULT NULL,
  `adjuvant_chemotherapy_if_other` varchar(500) DEFAULT NULL,
  `adjuvant_bone_modifying_agent_given` varchar(50) DEFAULT NULL,
  `adjuvant_bone_modifying_agent_given_if_yes` varchar(100) DEFAULT NULL,
  `duration_of_bone_modifying` varchar(100) DEFAULT NULL,
  `duration_of_bone_modifying_if_other` varchar(500) DEFAULT NULL,
  `her2_targeted_therapy` varchar(50) DEFAULT NULL,
  `duration_of_her2_targeted_therapy` varchar(500) DEFAULT NULL,
  `show_her2_targeted_duration_if_other` text,
  `dual_anti_her_2_given` varchar(20) DEFAULT NULL,
  `dual_anti_her_2_given_if_yes` varchar(50) DEFAULT NULL,
  `adjuvant_radiotherapy` varchar(20) DEFAULT NULL,
  `adjuvant_radiotherapy_if_yes` varchar(50) DEFAULT NULL,
  `adjuvant_radiotherapy_if_yes_other` varchar(50) DEFAULT NULL,
  `adjuvant_endocrine_therapy` varchar(50) DEFAULT NULL,
  `adjuvant_endocrine_therapy_if_other` text,
  `recommended_duration_of_adjuvant_endocrine` text,
  `recommended_duration_of_adjuvant_endocrine_if_other` varchar(50) DEFAULT NULL,
  `reason_for_stopping_adjuvant_endocrine_therapy` varchar(100) DEFAULT NULL,
  `first_line_therapy` varchar(10) DEFAULT NULL,
  `first_line_therapy_if_other` text,
  `ngs_done_at_diagnosis` varchar(100) DEFAULT NULL,
  `ngs_done_at_diagnosis_if_yes` varchar(100) DEFAULT NULL,
  `ngs_done_at_diagnosis_if_yes_write` text,
  `ngs_done_at_recurrence` varchar(250) DEFAULT NULL,
  `ngs_done_at_recurrence_if_yes` varchar(250) DEFAULT NULL,
  `ngs_done_at_recurrence_if_yes_write` text,
  `if_present_with_metastases` varchar(5) DEFAULT NULL,
  `biomarker_testing` varchar(50) DEFAULT NULL,
  `gbrcam` varchar(20) DEFAULT NULL,
  `brca_deletion` varchar(5) DEFAULT NULL,
  `brca_duplication` varchar(5) DEFAULT NULL,
  `androgen_receptor` varchar(20) DEFAULT NULL,
  `androgen_receptor_positive` varchar(5) DEFAULT NULL,
  `tumor_mutation_type` varchar(12) DEFAULT NULL,
  `tumor_mutation_value` int(5) DEFAULT NULL,
  `msi_status` varchar(10) DEFAULT NULL,
  `pik3cam_status` varchar(50) DEFAULT NULL,
  `pik3cam_mutation_detected` varchar(100) DEFAULT NULL,
  `ngs_performed` varchar(5) DEFAULT NULL,
  `ngs_performed_if_yes_findings` text,
  `first_line_therapy_yes` varchar(20) DEFAULT NULL,
  `second_line_therapy_yes` varchar(20) DEFAULT NULL,
  `third_line_therapy_yes` varchar(20) DEFAULT NULL,
  `fourth_line_therapy_yes` varchar(20) DEFAULT NULL,
  `first_line_therapy_other` varchar(100) DEFAULT NULL,
  `second_line_therapy_other` varchar(100) DEFAULT NULL,
  `third_line_therapy_other` varchar(100) DEFAULT NULL,
  `fourth_line_therapy_other` varchar(100) DEFAULT NULL,
  `bone_metastsis` varchar(10) DEFAULT NULL,
  `bisphoshonates` varchar(10) DEFAULT NULL,
  `rank_i_inhibitor` varchar(10) DEFAULT NULL,
  `pallative_radiotherapy` varchar(10) DEFAULT NULL,
  `pallative_radiotherapy_if_yes` varchar(10) DEFAULT NULL,
  `p_r_date` varchar(20) DEFAULT NULL,
  `p_r_site` varchar(50) DEFAULT NULL,
  `p_r_schedule` varchar(50) DEFAULT NULL,
  `p_r_dose` varchar(50) DEFAULT NULL,
  `p_r_other_comments` text,
  `leptomeningeal_metastasis_radio_therapy` varchar(10) DEFAULT NULL,
  `intratelcal_chemo` varchar(10) DEFAULT NULL,
  `intratelcal_chemo_date` varchar(20) DEFAULT NULL,
  `intratelcal_chemo_regimen` varchar(50) DEFAULT NULL,
  `recurrence` varchar(10) DEFAULT NULL,
  `date_of_recurrence` varchar(100) DEFAULT NULL,
  `area_of_recurrence` varchar(500) DEFAULT NULL,
  `if_metastases` varchar(500) DEFAULT NULL,
  `metastases_if_other` varchar(20) DEFAULT NULL,
  `detection_of_recurrence` varchar(100) DEFAULT NULL,
  `lost_to_follow_up` varchar(10) DEFAULT NULL,
  `date_of_death` varchar(50) DEFAULT NULL,
  `date_of_last_follow_up` varchar(50) DEFAULT NULL,
  `registered_as` varchar(50) DEFAULT NULL,
  `patient_has_insurance` varchar(10) DEFAULT NULL,
  `patient_has_insurance_if_yes_currency` varchar(10) DEFAULT NULL,
  `patient_has_insurance_if_yes_currency_amount` varchar(50) DEFAULT NULL,
  `currency_cost_incurred_before_coming_centre` varchar(10) DEFAULT NULL,
  `cost_incurred_before_coming_centre` varchar(100) DEFAULT NULL,
  `currency_cost_of_surgery` varchar(10) DEFAULT NULL,
  `cost_of_surgery` varchar(100) DEFAULT NULL,
  `currency_cost_of_radiotherapy` varchar(10) DEFAULT NULL,
  `cost_of_radiotherapy` varchar(100) DEFAULT NULL,
  `currency_cost_of_chemotherapy` varchar(10) DEFAULT NULL,
  `cost_of_chemotherapy` varchar(100) DEFAULT NULL,
  `currency_stay_in_the_city` varchar(10) DEFAULT NULL,
  `stay_in_the_city` varchar(100) DEFAULT NULL,
  `currency_travel_cost` varchar(10) DEFAULT NULL,
  `travel_cost` varchar(100) DEFAULT NULL,
  `currency_cost_of_follow_up_visits` varchar(10) DEFAULT NULL,
  `cost_of_follow_up_visits` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT '0',
  `code` varchar(50) DEFAULT NULL,
  `date_submitted` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (2,23,'Solanki Chyan','Delhi','India','27eh7nf1h2','Mr','19-03-1991','Solanki Co.','20','29-03-2021','Not Available','Other','Engineer','Other','other','160','55','21.48','Yes','Other','nobody','abcd','40','Symptom Detected','INR','100','Other','none','Symptomatic','Locally Advanced','Left','2','Mammorgam','2','Mammorgam','0','Bone Scan','Yes','More than 5','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":true},{\"text\":\"Targeted Therapy\",\"checked\":true},{\"text\":\"Immunotherapy\",\"checked\":false},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":true},{\"text\":\"Alternative Therapy\",\"checked\":true},{\"text\":\"Declined All Therapies\",\"checked\":true}]','Yes','Other','other genetics','No','Other','test other','Not Known','3','2','3','1','2','1','2','2','Non-Amplified','Yes','Other','other fertility option adopted','Yes','Other','other','Yes','Fertility Preservation','PD','Other','other','BCS','Other','other','Yes','Delayed','Other','other','Yes','Other','other','Yes','Zoledronic','Other','10 Years','Yes','Other','15 Months','Yes','Adjuvant','Yes','Other','other','Yes','other','Other','15 Years','Complete Therapy','Other','other','Yes','Tissue','other','Yes','Archival Tissue','other target',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Yes','05-11-2020','[{\"text\":\"Local\",\"checked\":true},{\"text\":\"Regional\",\"checked\":true},{\"text\":\"Contra lateral breast\",\"checked\":false},{\"text\":\"Distant Metastases\",\"checked\":true}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','other','Not Known','Yes','07-04-2021','05-04-2021','TPA','Yes','INR','10','INR','20','INR','30','INR','40','INR','50','INR','60','INR','70','INR','80','1','Q34PyF5M96','1616583520'),(3,23,'dfg','sdf','sdf','sdf','sdf','26-05-1963','Hospital Dr Cosme','sdf','sdf','No','Doctor','NA','Indian','NA','100','60','60.00','No','NA','NA','not known','60','Screen Detected','INR','100','Hepatitis B','NA','Screen Detected','Early','Right','X','Clinical','0','Clinical','X','Pet-CT Scan','Yes','','[{\"text\":\"Liver\",\"checked\":true},{\"text\":\"Lung\",\"checked\":true},{\"text\":\"Bone\",\"checked\":false},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]',NULL,'','[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":true},{\"text\":\"Targeted Therapy\",\"checked\":true},{\"text\":\"Immunotherapy\",\"checked\":false},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":true},{\"text\":\"Alternative Therapy\",\"checked\":true},{\"text\":\"Declined All Therapies\",\"checked\":true}]','Yes','Other','test','No','Ductal','NA','No','X','2','X','2','1','1','3','2','Non-Amplified','Yes','Egg Harvesting','NA','Yes','Trastuzumab','NA','Yes','To prevent premature ovarian failure','CR','Change of regimen','NA','Mastectomy','AxS','NA','Yes','Immediate','DIEP Flap','NA','Yes','Anthracycline-Taxane Platinum','NA','Yes','Zoledronic','5 Years','NA','Yes','12 Months','NA','Yes','Adjuvant','Yes',NULL,NULL,'Tamoxifen + OS','NA','7 Yrs','NA','Intolerability','Chemothera','NA','Yes','Tissue','11','Yes','Liquid','14',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Yes','20-04-2021','[{\"text\":\"Local\",\"checked\":true},{\"text\":\"Regional\",\"checked\":true},{\"text\":\"Contra lateral breast\",\"checked\":false},{\"text\":\"Distant Metastases\",\"checked\":true}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','','Not Known','Yes','27-04-2021','29-04-2021','Panel','Yes','$','5','$','10','$','15','$','20','$','25','$','30','$','35','INR','40','1','mOvmEzRVB5','1616585568'),(10,23,'Chetan','City','India','27eh7nf1h2','werwerwe','02-04-2021','Solanki Co.','11','28-03-2021','No','Nurse','','British Bangladesh','','160','59','23.05','No','','','sdfsfd','sdfs','Screen Detected','INR','11','Other','none','Symptomatic','Locally Advanced','Bilateral','2','MRI','3','MRI','0','Pet-CT Scan','Yes','Less than 5','[{\"text\":\"Liver\",\"checked\":true},{\"text\":\"Lung\",\"checked\":true},{\"text\":\"Bone\",\"checked\":false},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','test meta',NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":true},{\"text\":\"Targeted Therapy\",\"checked\":true},{\"text\":\"Immunotherapy\",\"checked\":true},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":true},{\"text\":\"Declined All Therapies\",\"checked\":true}]','Yes','Other','test','Yes','Not Classified','','Yes','2','3','2','2','10','1','3','2','Non-Amplified','Yes','Other','aa','Yes','Other','bb','Yes','Fertility Preservation','Not Assessed','Other','aa','Oncoplasty','Other','aa','Yes','Delayed','Other','aa','Yes','Other','aa','Yes','Denosumab','Other','aa','Other','aa','Yes','Neoadjuvant','Yes','Other',NULL,NULL,'Yes','aa','Other','15 years','Recurrence','Other','aa','Yes','Liquid','aa','Yes','Fresh Biopsy','aa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Yes','29-03-2021','[{\"text\":\"Local\",\"checked\":true},{\"text\":\"Regional\",\"checked\":true},{\"text\":\"Contra lateral breast\",\"checked\":false},{\"text\":\"Distant Metastases\",\"checked\":true}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','asdasda','Surveillance','Yes','29-03-2021','29-03-2021','Panel','Yes','INR','1','INR','2','INR','3','INR','4','INR','5','INR','6','INR','7','INR','8','1','hdk784bdf4','1617429136'),(11,23,'rere','rere','rere','27eh7nf1h2','Mr','06-03-1995','Solanki Co.','20','05-07-2016','Yes','Home Maker','','British Indian','','165','45','16.53','Yes','Other','nobody','minor','25','Screen Detected','INR','100','Hypertension','','Screen Detected','Locally Advanced','Left','4','Mammorgam','2','Mammorgam','0','Bone Scan','Yes','More than 5','[{\"text\":\"Liver\",\"checked\":true},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":true},{\"text\":\"Targeted Therapy\",\"checked\":true},{\"text\":\"Immunotherapy\",\"checked\":false},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":false}]','Yes','ATM','','Yes','Lobular','','Yes','2','3','2','3','20','1','2','2','Non-Amplified','Yes','Other','other','Yes','Other','other','No','','Not Assessed','Other','other','Mastectomy','Not Done','','No','','','','Yes','Other','other','Yes','Denosumab','Other','10 years','No','','','No','','Yes','APBI','','Yes','other','Other','12 Years','Intolerability','Surgery','','Yes','Tissue','other','Yes','Fresh Biopsy','other',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Yes','30-03-2021','[{\"text\":\"Local\",\"checked\":false},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":true},{\"text\":\"Distant Metastases\",\"checked\":true}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','','Symptom','Yes','06-04-2021','07-04-2021','Panel','Yes','INR','10','INR','20','INR','30','INR','40','INR','50','INR','60','INR','70','INR','80','1','c5f9mk07ai','1618025891'),(12,23,'Chetan Solanki','Mumbai','Country','123456','Mr','08-05-2016','Solanki Co.','20','05-04-2021','Yes','Other','Developer','British Indian','','165','55','20.20','Yes','Brother','nobody','abcd','35','Symptom Detected','INR','1000','IHD and CVA','','Screen Detected','Locally Advanced','Bilateral','3','MRI','2','MRI','1','Bone Scan','Yes','Less than 5','[{\"text\":\"Liver\",\"checked\":true},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":true},{\"text\":\"Ovaries\",\"checked\":false},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":true},{\"text\":\"Chemotherapy\",\"checked\":false},{\"text\":\"Targeted Therapy\",\"checked\":false},{\"text\":\"Immunotherapy\",\"checked\":true},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":true},{\"text\":\"Declined All Therapies\",\"checked\":true}]','Yes','Other','other genetics','Yes','Not Classified','','Yes','1','1','2','2','2','3','3','2','Non-Amplified','Yes','Other','other','Yes','Other','other','Yes','Fertility Preservation','PD','Other','other','Mastectomy','Other','other','Yes','Immediate','Other','other','Yes','Other','other','Yes','Zoledronic','Other','other','Yes','Other','15 Months','Yes','Adjuvant','Yes','Other','other','Yes','other','Other','15 years','Complete Therapy','Other','other','Yes','Tissue','other','Yes','Archival Tissue','other',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'No','','[{\"text\":\"Local\",\"checked\":false},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":false},{\"text\":\"Distant Metastases\",\"checked\":false}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','','','Yes','06-04-2021','18-04-2021','TPA','No','','','INR','10','INR','10','INR','10','INR','10','INR','10','INR','10','INR','10','1','2m58i0k2aj','1618036389'),(13,49,'Chetan Ravindra Solanki','SHEDUNG','India','028h4f08le','Mr','05-04-2021','Solanki Co.','66','06-04-2021','Not Available','Doctor','','British Bangladesh','','150','60','26.67','No','','','normal','55','Screen Detected','INR','1000000','DM','','','','','','','','','','','','','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":false},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":false},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":false},{\"text\":\"Targeted Therapy\",\"checked\":false},{\"text\":\"Immunotherapy\",\"checked\":false},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":false}]','','','','','Not Classified',NULL,'Yes','3','3','3','1','2','3','3','2','Non-Amplified','Yes','Embryo cryopreservation','','Yes','Platinum + ACT','','Yes','Fertility Preservation','SD','Change of regimen','','Mastectomy','Not Done','','Yes','Immediate','Prosthesis','','Yes','Platinum + ACT','','Yes','Zoledronic','5 Years','','','','','','','Yes','IORT','','','','','','','Yes','','Yes','Liquid','test','Yes','Fresh Biopsy','test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Yes','05-04-2021','[{\"text\":\"Local\",\"checked\":true},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":true},{\"text\":\"Distant Metastases\",\"checked\":false}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]',NULL,'Not Known','Yes','06-04-2021',NULL,'Panel',NULL,NULL,NULL,'INR','1','INR','1','INR','1','INR','1','INR','2','INR','2','INR','2','1','68bfhdfa9i','1618242811'),(14,53,'Demo Patient','Delhi','India','khi2jij695','Mr','30-05-2016','Devsinfi','50','28-03-2021','Not Available','Teacher','','Caucasian','','140','53','27.04','No','','','usual','45','Symptom Detected','INR','10000','Hypertension','','Screen Detected','Locally Advanced','Right','4','MRI','2','Ultrasound','1','Pet-MRI','Yes','Less than 5','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]',NULL,NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":false},{\"text\":\"Targeted Therapy\",\"checked\":false},{\"text\":\"Immunotherapy\",\"checked\":true},{\"text\":\"Hormone therapy\",\"checked\":true},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":false}]','Yes','CHEK 2','','Yes','Not Classified',NULL,'Yes','2','2','2','X','3','3','3','2','Amplified','No',NULL,'',NULL,NULL,NULL,NULL,NULL,'Not Assessed',NULL,NULL,'Mastectomy',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Not Known',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Yes','05-04-2021','[{\"text\":\"Local\",\"checked\":false},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":true},{\"text\":\"Distant Metastases\",\"checked\":true}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]',NULL,'Symptom','Yes','29-03-2021',NULL,'TPA',NULL,NULL,NULL,'INR','1','INR','1','INR','1','INR','1','INR','1','INR','1','INR','1','1','ge46kcn069','1618258310'),(15,23,'Chetan','Delhi','India','27eh7nf1h2','a','05-04-2021','Solanki Co.','11','29-03-2021','Not Available','Nurse','','British Bangladesh','','120','60','41.67','No','','','abcd','60','Screen Detected','USD','1000','DM','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":false},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":false},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]',NULL,NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":false},{\"text\":\"Targeted Therapy\",\"checked\":false},{\"text\":\"Immunotherapy\",\"checked\":false},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":false}]',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'[{\"text\":\"Local\",\"checked\":false},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":false},{\"text\":\"Distant Metastases\",\"checked\":false}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','b79g6edid','1618291248'),(24,23,'New Demo Patient','New Demo City','Demo Country','27eh7nf1h2','Dm','02-03-2021','Solanki Co.','20','12-04-2021','No','Home Maker','','British Bangladesh','','130','53','31.36','No','','','type unknown','23','Symptom Detected','INR','1000','PCOD','','Screen Detected','Locally Advanced','Left','3','MRI','2','MRI','1','Bone Scan','Yes','Less than 5','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":true},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":true},{\"text\":\"Ovaries\",\"checked\":false},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":true},{\"text\":\"Chemotherapy\",\"checked\":false},{\"text\":\"Targeted Therapy\",\"checked\":false},{\"text\":\"Immunotherapy\",\"checked\":true},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":true}]','Yes','CHEK 2','','Yes','Myoepithelial',NULL,'Yes','3','2','1','1','1','3','2','3+','Amplified','Yes','Other','other','Yes','Other','other','Yes','To prevent premature ovarian failure','CR','Other','other','BCS','Other','other','Yes','Immediate','Other','other','Yes','Other','other','Yes','Zoledronic','Other','10 years','','','','','','Yes','Other','other','','','','','','','','Yes','Tissue','other','Yes','Archival Tissue','other','Yes','PDL1 by 22C3','VUS','Yes','Yes','Positive','10','Less Than',5,'MSI-H','Mutation Detected','other','Yes','ngs performed','Other','Other','Other','Other','other','other','other','other','Yes','Yes','Yes','Yes','','15-04-2021','other','other','other','other comments','Yes','Yes','19-04-2021','other','Yes','19-04-2021','[{\"text\":\"Local\",\"checked\":false},{\"text\":\"Regional\",\"checked\":true},{\"text\":\"Contra lateral breast\",\"checked\":true},{\"text\":\"Distant Metastases\",\"checked\":false}]','[{\"text\":\"Liver\",\"checked\":true},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]',NULL,'Not Known','No','05-04-2021','29-03-2021','Panel',NULL,'INR','100','INR','1','INR','1','INR','1','INR','1','INR','1','INR','1','INR','1','1','enf39f2458','1618470305'),(25,23,'Homepage','Delhi','Country','27eh7nf1h2','Mr','10-09-2012','Solanki Co.','10','29-03-2021','No','Teacher','','Caucasian','','130','48','28.40','No','','','abcd','40','Screen Detected','INR','1000','Hypertension','','Symptomatic','Locally Advanced','Left','3','MRI','1','Ultrasound','0','Bone Scan','Yes','More than 5','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":true},{\"text\":\"Bone\",\"checked\":false},{\"text\":\"Brain\",\"checked\":true},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":true},{\"text\":\"Targeted Therapy\",\"checked\":true},{\"text\":\"Immunotherapy\",\"checked\":true},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":false}]','Yes','Other','other genetics','Yes','Invasive Lobular, Pleomorphic','','Yes','3','2','1','1','2','','','','','Yes','Other','other','Yes','Other','other','Yes','Fertility Preservation','SD','Other','other','Oncoplasty','Other','other','Yes','Immediate','Other','other','Yes','Other','other','Yes','Zoledronic','Other','10 years','','','','','','Yes','Other','other','','','','','','','','Yes','Tissue','other','Yes','Archival Tissue','other','Yes','PDL1  by SP 142','Pathogenic','Yes','Yes','Positive','5','Greater Than',3,'MSS','','','Yes','performed','Other','Other','Other','Other','other','other','other','other','Yes',NULL,'Yes','Yes',NULL,'06-04-2021','other','other','other','other comments','Yes','Yes','12-04-2021','other','Yes','14-04-2021','[{\"text\":\"Local\",\"checked\":true},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":true},{\"text\":\"Distant Metastases\",\"checked\":false}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":true},{\"text\":\"Adrenal\",\"checked\":true},{\"text\":\"Other\",\"checked\":false}]','','Symptom','Yes','07-04-2021','29-03-2021','Panel','Yes','INR','100','INR','50','INR','50','INR','50','INR','50','INR','50','INR','50','INR','50','1','i97148kd3cj','1618980194'),(34,23,'AB','Mumbai','India','27eh7nf1h2','Mr','29-03-2021','Solanki Co.','50','06-04-2021','No','Nurse','','British Bangladesh','','145','54','25.68','No','','','type unknown','36','Screen Detected','INR','1000','IHD and CVA','','Screen Detected','Locally Advanced','Left','2','MRI','1','Mammorgam','0','Pet-CT Scan','Yes','More than 5','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":true},{\"text\":\"Bone\",\"checked\":true},{\"text\":\"Brain\",\"checked\":true},{\"text\":\"Ovaries\",\"checked\":false},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]','',NULL,'[{\"text\":\"Surgery\",\"checked\":false},{\"text\":\"Chemotherapy\",\"checked\":true},{\"text\":\"Targeted Therapy\",\"checked\":false},{\"text\":\"Immunotherapy\",\"checked\":true},{\"text\":\"Hormone therapy\",\"checked\":false},{\"text\":\"Radiotherapy\",\"checked\":false},{\"text\":\"Trial\",\"checked\":false},{\"text\":\"Alternative Therapy\",\"checked\":false},{\"text\":\"Declined All Therapies\",\"checked\":true}]','Yes','CHEK 2','','Yes',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'[{\"text\":\"Local\",\"checked\":false},{\"text\":\"Regional\",\"checked\":false},{\"text\":\"Contra lateral breast\",\"checked\":false},{\"text\":\"Distant Metastases\",\"checked\":false}]','[{\"text\":\"Liver\",\"checked\":false},{\"text\":\"Lung\",\"checked\":false},{\"text\":\"Bone\",\"checked\":false},{\"text\":\"Brain\",\"checked\":false},{\"text\":\"Ovaries\",\"checked\":false},{\"text\":\"Adrenal\",\"checked\":false},{\"text\":\"Other\",\"checked\":false}]',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','3lckl3nk9d','1618997458');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-21 16:33:55
