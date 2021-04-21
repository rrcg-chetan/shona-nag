import React, { useState, Fragment, Component, useEffect, PureComponent } from 'react';

import SideBar from '../../sidebar/SideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'
import moment from 'moment'

import '../../mainstyle.css';
import '../../animate.css';
import '../../vertical-menu.css';
import '../../perfect-scrollbar.css';

import { Card, CardHeader, CardTitle, CardBody, Label, Button, Row, Col } from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvField,
  AvTextArea,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'
import axios from 'axios';

class Treatment extends React.Component {
  constructor(props){
    super(props);
    let param = this.props.location.pathname;
    const code = param.split("/").pop()   
    this.state = {         
      code: code,     
      showFertilityOption: false,  
      showFertilityDiscussed: false,
      showNeoAdjuvantTherapy: false,            
      showNeoAdjuvantTherapyIfYes: false,   
      showIfProgression: false,       
      showNodalSurgery: false, 
      showReconstruction: false, 
      showReconstructionType: false,
      showAdjuvantChemotherapy: false,
      showAdjuvantChemotherapyIfYes: false,
      showAdjuvantBoneModify: false,
      showFertilityOptionUndertakenBone: false,
      showFertilityOptionUndertakenBoneOther: false,
      showHER2TargetedTherapy: false,
      showHER2TargetedTherapyDuration: false,
      showDualAntiHER2: false,
      showAdjuvantRadioTherapy: false,
      showAdjuvantRadioTherapyIfYes: false,
      showAdjuvantEndocrineTherapy: false,
      showRecommendedDurationAdjuvantEndocrineTherapy: false,
      showIfPresentedWithMetastases: false,
      showNGSDoneAtDiagnosis: false,
      showNGSDoneAtRecurrence: false,
      showIfAndroReceptor: false,
      showPIK3CAmStatus: false,
      showNGSPerformed: false,
      showFirstLineTherapy: false,
      showSecondLineTherapy: false,
      showThirdLineTherapy: false,
      showFourthLineTherapy:  false,
      showPalliativeRadiotherapy: false,
      showIntrathecalChemo: false,

      startDate: new Date(),
      startDateID: new Date(),
      fertilitydiscussedifother: "",
      fertilityoptionundertaken: "",      
      fertilitydiscussed: "",
      neoadjuvanttherapy: "",
      neoadjuvanttherapyifyes: "",
      neoadjuvantthereayifyesother: "",
      ovariansuppression: "",
      ovariansuppressionifyes: "",
      responsetoneoadjuvantchemotherapy: "",
      ifprogression: "",
      ifprogressionandother: "",
      primarysurgery: "",
      nodalsurgery: "", 
      ifnodalsurgeryandother: "",
      reconstructiondone: "",
      timingofreconstruction: "",
      typeofreconstructionother: "",
      adjuvantchemotherapy: "",
      adjuvantchemotherapyifyes: "",
      adjuvantchemotherapyother: "",
      adjuvantbonemodify: "",
      fertilityoptionundertakenbone: "",
      fertilityoptionundertakenboneother: "",
      fertilityoptionundertakenboneotherifother: "",
      her2targetedtherapy: "",
      her2targetedtherapyduration: "",
      her2targetedtherapydurationifother: "",
      dualantiher2: "",
      dualantiher2ifyes: "",
      adjuvantradiotherapy: "",
      adjuvantradiotherapyifyes: "",
      adjuvantradiotherapyifyesother: "",
      adjuvantendocrinetherapy: "",
      adjuvantendocrinetherapyifyes: "",
      recommendeddurationadjuvantendocrinetherapy: "",
      recommendeddurationadjuvantendocrinetherapyifother: "",
      reasonforstoppingaet: "",
      ifpresentedwithmetastases: "",
      ifpresentedwithmetastasesifother: "",
      ngsdoneatdiagnosis: "",
      ngsdoneatdiagnosisifyes: "",
      ngsdoneatdiagnosisifyesidentifiedtargets: "",
      ngsdoneatrecurrence: "",
      ngsdoneatrecurrenceifyes: "",
      ngsdoneatrecurrenceifyesidentifiedtargets: "",
      if_present_with_metastases: "", biomarker_testing: "", gBRCAm: "", brca_deletion: "", brca_duplication: "", androgen_receptor: "", androgen_receptor_positive: "", tumor_mutation_type: "", tumor_mutation_value: "", msi_status: "", pik3cam_status: "", pik3cam_mutation_detected: "", ngs_performed: "", ngs_performed_if_yes_findings: "", first_line_therapy_yes: "", second_line_therapy_yes: "", third_line_therapy_yes: "", fourth_line_therapy_yes: "", first_line_therapy_other: "", second_line_therapy_other: "", third_line_therapy_other: "", fourth_line_therapy_other: "", bone_metastsis: "", bisphosphonates: "", rank_i_inhibitor: "", pallative_radiotherapy: "", p_r_date: "", p_r_site: "", p_r_schedule: "", p_r_dose: "", p_r_other_comments: "", leptomeningeal_metastasis_radio_therapy: "", intratelcal_chemo: "", intratelcal_chemo_if_yes: "", intratelcal_chemo_date: "", intratelcal_chemo_regimen: "",
    };
    this.showFertilityOption = this.showFertilityOption.bind(this);
    this.showFertilityDiscussed = this.showFertilityDiscussed.bind(this);
    this.showNeoAdjuvantTherapy = this.showNeoAdjuvantTherapy.bind(this);
    this.showNeoAdjuvantTherapyIfYes = this.showNeoAdjuvantTherapyIfYes.bind(this);
    this.showOvarianSuppression = this.showOvarianSuppression.bind(this);
    this.showIfProgression = this.showIfProgression.bind(this);
    this.showNodalSurgery = this.showNodalSurgery.bind(this);
    this.showReconstruction = this.showReconstruction.bind(this);
    this.showReconstructionType = this.showReconstructionType.bind(this);
    this.showAdjuvantChemotherapy = this.showAdjuvantChemotherapy.bind(this);
    this.showNeoAdjuvantTherapyIfYes = this.showNeoAdjuvantTherapyIfYes.bind(this);
    this.showAdjuvantBoneModify = this.showAdjuvantBoneModify.bind(this);
    this.showFertilityOptionUndertakenBone = this.showFertilityOptionUndertakenBone.bind(this);
    this.showFertilityOptionUndertakenBoneOther = this.showFertilityOptionUndertakenBoneOther.bind(this);
    this.showHER2TargetedTherapy = this.showHER2TargetedTherapy.bind(this);
    this.showHER2TargetedTherapyDuration = this.showHER2TargetedTherapyDuration.bind(this);
    this.showDualAntiHER2 = this.showDualAntiHER2.bind(this);
    this.showAdjuvantRadioTherapy = this.showAdjuvantRadioTherapy.bind(this);
    this.showAdjuvantRadioTherapyIfYes = this.showAdjuvantRadioTherapyIfYes.bind(this);
    this.showAdjuvantEndocrineTherapy = this.showAdjuvantEndocrineTherapy.bind(this);
    this.showRecommendedDurationAdjuvantEndocrineTherapy = this.showRecommendedDurationAdjuvantEndocrineTherapy.bind(this);
    this.showIfPresentedWithMetastases = this.showIfPresentedWithMetastases.bind(this);
    this.showNGSDoneAtDiagnosis = this.showNGSDoneAtDiagnosis.bind(this);
    this.showNGSDoneAtRecurrence = this.showNGSDoneAtRecurrence.bind(this);
    this.showIfAndroReceptor = this.showIfAndroReceptor.bind(this);
    this.showPIK3CAmStatus = this.showPIK3CAmStatus.bind(this);
    this.showNGSPerformed = this.showNGSPerformed.bind(this);
    this.showFirstLineTherapy = this.showFirstLineTherapy.bind(this);
    this.showSecondLineTherapy = this.showSecondLineTherapy.bind(this);
    this.showThirdLineTherapy = this.showThirdLineTherapy.bind(this);
    this.showFourthLineTherapy = this.showFourthLineTherapy.bind(this);
    this.showPalliativeRadiotherapy = this.showPalliativeRadiotherapy.bind(this);
    this.showIntrathecalChemo = this.showIntrathecalChemo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    /*this.handleInputMetastasesChange = this.handleInputMetastasesChange.bind(this);
    this.handleInputTreatmentChange = this.handleInputTreatmentChange.bind(this);      */  
    //console.log(code)
  }

  sendTreatmentDetails = e => {   
    //alert(this.state.metastases_types)
    //alert(this.state.code)
    const { history } = this.props;
   axios.post(`https://shona-nag-cms.herokuapp.com/patienttreatmentdetails`, { fertilitydiscussed: this.state.fertilitydiscussed, fertilityoptionundertaken: this.state.fertilityoptionundertaken, fertilitydiscussedifother: this.state.fertilitydiscussedifother, neoadjuvanttherapy: this.state.neoadjuvanttherapy, neoadjuvanttherapyifyes: this.state.neoadjuvanttherapyifyes, neoadjuvantthereayifyesother: this.state.neoadjuvantthereayifyesother, ovariansuppression: this.state.ovariansuppression, ovariansuppressionifyes: this.state.ovariansuppressionifyes, responsetoneoadjuvantchemotherapy: this.state.responsetoneoadjuvantchemotherapy, ifprogression: this.state.ifprogression, ifprogressionandother: this.state.ifprogressionandother, primarysurgery: this.state.primarysurgery, nodalsurgery: this.state.nodalsurgery, ifnodalsurgeryandother: this.state.ifnodalsurgeryandother, reconstructiondone: this.state.reconstructiondone, timingofreconstruction: this.state.timingofreconstruction, typeofreconstruction: this.state.typeofreconstruction, typeofreconstructionother: this.state.typeofreconstructionother, adjuvantchemotherapy: this.state.adjuvantchemotherapy, adjuvantchemotherapyifyes: this.state.adjuvantchemotherapyifyes, adjuvantchemotherapyother: this.state.adjuvantchemotherapyother, adjuvantbonemodify: this.state.adjuvantbonemodify, fertilityoptionundertakenbone: this.state.fertilityoptionundertakenbone, fertilityoptionundertakenboneother: this.state.fertilityoptionundertakenboneother, fertilityoptionundertakenboneotherifother: this.state.fertilityoptionundertakenboneotherifother, her2targetedtherapy: this.state.her2targetedtherapy, her2targetedtherapyduration: this.state.her2targetedtherapyduration, her2targetedtherapydurationifother: this.state.her2targetedtherapydurationifother, dualantiher2: this.state.dualantiher2, dualantiher2ifyes: this.state.dualantiher2ifyes, adjuvantradiotherapy: this.state.adjuvantradiotherapy, adjuvantradiotherapyifyes: this.state.adjuvantradiotherapyifyes, adjuvantradiotherapyifyesother: this.state.adjuvantradiotherapyifyesother, adjuvantendocrinetherapy: this.state.adjuvantendocrinetherapy, adjuvantendocrinetherapyifyes: this.state.adjuvantendocrinetherapyifyes, recommendeddurationadjuvantendocrinetherapy: this.state.recommendeddurationadjuvantendocrinetherapy, recommendeddurationadjuvantendocrinetherapyifother: this.state.recommendeddurationadjuvantendocrinetherapyifother, reasonforstoppingaet: this.state.reasonforstoppingaet, ifpresentedwithmetastases: this.state.ifpresentedwithmetastases, ifpresentedwithmetastasesifother: this.state.ifpresentedwithmetastasesifother, ngsdoneatdiagnosis: this.state.ngsdoneatdiagnosis, ngsdoneatdiagnosisifyes: this.state.ngsdoneatdiagnosisifyes, ngsdoneatdiagnosisifyesidentifiedtargets: this.state.ngsdoneatdiagnosisifyesidentifiedtargets, ngsdoneatrecurrence: this.state.ngsdoneatrecurrence, ngsdoneatrecurrenceifyes: this.state.ngsdoneatrecurrenceifyes, ngsdoneatrecurrenceifyesidentifiedtargets: this.state.ngsdoneatrecurrenceifyesidentifiedtargets, if_present_with_metastases: this.state.if_present_with_metastases, biomarker_testing: this.state.biomarker_testing, gBRCAm: this.state.gBRCAm, brca_deletion: this.state.brca_deletion, brca_duplication: this.state.brca_duplication, androgen_receptor: this.state.androgen_receptor, androgen_receptor_positive: this.state.androgen_receptor_positive, tumor_mutation_type: this.state.tumor_mutation_type, tumor_mutation_value: this.state.tumor_mutation_value, msi_status: this.state.msi_status, pik3cam_status: this.state.pik3cam_status, pik3cam_mutation_detected: this.state.pik3cam_mutation_detected, ngs_performed: this.state.ngs_performed, ngs_performed_if_yes_findings: this.state.ngs_performed_if_yes_findings, first_line_therapy_yes: this.state.first_line_therapy_yes, second_line_therapy_yes: this.state.second_line_therapy_yes, third_line_therapy_yes: this.state.third_line_therapy_yes, fourth_line_therapy_yes: this.state.fourth_line_therapy_yes, first_line_therapy_other: this.state.first_line_therapy_other, second_line_therapy_other: this.state.second_line_therapy_other, third_line_therapy_other: this.state.third_line_therapy_other, fourth_line_therapy_other: this.state.fourth_line_therapy_other, bone_metastsis: this.state.bone_metastsis, bisphosphonates: this.state.bisphosphonates, rank_i_inhibitor: this.state.rank_i_inhibitor, pallative_radiotherapy: this.state.pallative_radiotherapy, p_r_date: this.state.p_r_date, p_r_site: this.state.p_r_site, p_r_schedule: this.state.p_r_schedule, p_r_dose: this.state.p_r_dose, p_r_other_comments: this.state.p_r_other_comments, leptomeningeal_metastasis_radio_therapy: this.state.leptomeningeal_metastasis_radio_therapy, intratelcal_chemo: this.state.intratelcal_chemo, intratelcal_chemo_if_yes: this.state.intratelcal_chemo_if_yes, intratelcal_chemo_date: this.state.intratelcal_chemo_date, intratelcal_chemo_regimen: this.state.intratelcal_chemo_regimen, code: this.state.code })
    .then(function (response) {
    if(response.data.success === 'Treatment Sucessfully Submitted!'){            
      history.push(`/follow-up/${response.data.value}`)
    }else{
      
    }
  })
  };
  
  handleChange(date) {
    this.setState({
      startDate: date,
      p_r_date: moment(date).format('DD-MM-YYYY')
    })
  }

  handleChangeID(date) {
    this.setState({
      startDateID: date,
      intratelcal_chemo_date: moment(date).format('DD-MM-YYYY')
    })
  }

  showFertilityOption(name) {
    if(document.getElementById("fertilitydiscussed").value == "Yes"){
      this.setState({ showFertilityOption: true });   
      this.state.fertilitydiscussed = name 
    }else{
        this.setState({ showFertilityOption: false, showFertilityDiscussed: false, fertilitydiscussedifother: "" }); 
        this.state.fertilitydiscussed = name        
    }
  }

  showFertilityDiscussed(name) {
    if(document.getElementById("fertilityoptionundertaken").value == "Other"){
      this.setState({ showFertilityDiscussed: true });   
      this.state.fertilityoptionundertaken = name 
    }else{
        this.setState({ showFertilityDiscussed: false, fertilitydiscussedifother: "" }); 
        this.state.fertilityoptionundertaken = name        
    }
  }

  showNeoAdjuvantTherapy(name) {
    if(document.getElementById("neoadjuvanttherapy").value == "Yes"){
      this.setState({ showNeoAdjuvantTherapy: true });   
      this.state.neoadjuvanttherapy = name 
    }else{
        this.setState({ showNeoAdjuvantTherapy: false, showNeoAdjuvantTherapyIfYes:false, neoadjuvantthereayifyesother: "" }); 
        this.state.neoadjuvanttherapy = name        
    }
  }

  showNeoAdjuvantTherapyIfYes(name) {
    if(document.getElementById("neoadjuvanttherapyifyes").value == "Other"){
      this.setState({ showNeoAdjuvantTherapyIfYes: true });   
      this.state.neoadjuvanttherapyifyes = name 
    }else{
        this.setState({ showNeoAdjuvantTherapyIfYes: false, neoadjuvantthereayifyesother: "" }); 
        this.state.neoadjuvanttherapyifyes = name        
    }
  }

  showOvarianSuppression(name) {
    if(document.getElementById("ovariansuppression").value == "Yes"){
      this.setState({ showOvarianSuppression: true });   
      this.state.ovariansuppression = name 
    }else{
        this.setState({ showOvarianSuppression: false, ovariansuppressionifyes: "" }); 
        this.state.ovariansuppression = name        
    }
  }

  showIfProgression(name) {
    if(document.getElementById("ifprogression").value == "Other"){
      this.setState({ showIfProgression: true });   
      this.state.ifprogression = name 
    }else{
        this.setState({ showIfProgression: false, ifprogressionandother: "" }); 
        this.state.ifprogression = name        
    }
  }

  showNodalSurgery(name) {
    if(document.getElementById("nodalsurgery").value == "Other"){
      this.setState({ showNodalSurgery: true });   
      this.state.nodalsurgery = name 
    }else{
        this.setState({ showNodalSurgery: false, ifnodalsurgeryandother: "" }); 
        this.state.nodalsurgery = name        
    }
  }

  showReconstruction(name) {
    if(document.getElementById("reconstructiondone").value == "Yes"){
      this.setState({ showReconstruction: true });   
      this.state.reconstructiondone = name 
    }else{
        this.setState({ showReconstruction: false, showReconstructionType: false, timingofreconstruction: "", typeofreconstruction: "",typeofreconstructionother: "" }); 
        this.state.reconstructiondone = name        
    }
  }

  showReconstructionType(name) {
    if(document.getElementById("typeofreconstruction").value == "Other"){
      this.setState({ showReconstructionType: true });   
      this.state.typeofreconstruction = name 
    }else{
        this.setState({ showReconstructionType: false, typeofreconstructionother: "" }); 
        this.state.typeofreconstruction = name        
    }
  }

  showAdjuvantChemotherapy(name) {
    if(document.getElementById("adjuvantchemotherapy").value == "Yes"){
      this.setState({ showAdjuvantChemotherapy: true });   
      this.state.adjuvantchemotherapy = name 
    }else{
        this.setState({ showAdjuvantChemotherapy: false, showAdjuvantChemotherapyIfYes: false, adjuvantchemotherapyifyes: "", adjuvantchemotherapyother: "" }); 
        this.state.adjuvantchemotherapy = name        
    }
  }

  showAdjuvantChemotherapyIfYes(name){
    if(document.getElementById("adjuvantchemotherapyifyes").value == "Other"){
      this.setState({ showAdjuvantChemotherapyIfYes: true });   
      this.state.adjuvantchemotherapyifyes = name 
    }else{
        this.setState({ showAdjuvantChemotherapyIfYes: false, adjuvantchemotherapyother: "" }); 
        this.state.adjuvantchemotherapyifyes = name        
    }
  }

  showAdjuvantBoneModify(name){
    if(document.getElementById("adjuvantbonemodify").value == "Yes"){
      this.setState({ showAdjuvantBoneModify: true });   
      this.state.adjuvantbonemodify = name 
    }else{
        this.setState({ showAdjuvantBoneModify: false, showFertilityOptionUndertakenBoneOther: false, fertilityoptionundertakenbone: "", fertilityoptionundertakenboneother: "", fertilityoptionundertakenboneotherifother: "" }); 
        this.state.adjuvantbonemodify = name        
    }
  }

  showFertilityOptionUndertakenBone(name){
    if(document.getElementById("adjuvantbonemodify").value == "Yes"){
      this.setState({ showAdjuvantBoneModify: true });   
      this.state.adjuvantbonemodify = name 
    }else{
        this.setState({ showAdjuvantBoneModify: false, fertilityoptionundertakenboneotherifother: "" }); 
        this.state.adjuvantbonemodify = name        
    }
  }

  showFertilityOptionUndertakenBoneOther(name){
    if(document.getElementById("fertilityoptionundertakenboneother").value == "Other"){
      this.setState({ showFertilityOptionUndertakenBoneOther: true });   
      this.state.fertilityoptionundertakenboneother = name 
    }else{
        this.setState({ showFertilityOptionUndertakenBoneOther: false, fertilityoptionundertakenboneotherifother: "" }); 
        this.state.fertilityoptionundertakenboneother = name        
    }
  }

  showHER2TargetedTherapy(name){
    if(document.getElementById("her2targetedtherapy").value == "Yes"){
      this.setState({ showHER2TargetedTherapy: true });   
      this.state.her2targetedtherapy = name 
    }else{
        this.setState({ showHER2TargetedTherapy: false, showHER2TargetedTherapyDuration: false, her2targetedtherapyduration: "", her2targetedtherapydurationifother: "" }); 
        this.state.her2targetedtherapy = name        
    }
  }

  showHER2TargetedTherapyDuration(name){
    if(document.getElementById("her2targetedtherapyduration").value == "Other"){
      this.setState({ showHER2TargetedTherapyDuration: true });   
      this.state.her2targetedtherapyduration = name 
    }else{
        this.setState({ showHER2TargetedTherapyDuration: false, her2targetedtherapydurationifother: "" }); 
        this.state.her2targetedtherapyduration = name        
    }
  }

  showDualAntiHER2(name){
    if(document.getElementById("dualantiher2").value == "Yes"){
      this.setState({ showDualAntiHER2: true });   
      this.state.dualantiher2 = name 
    }else{
        this.setState({ showDualAntiHER2: false, dualantiher2ifyes: "" }); 
        this.state.dualantiher2 = name        
    }
  }

  showAdjuvantRadioTherapy(name){
    if(document.getElementById("adjuvantradiotherapy").value == "Yes"){
      this.setState({ showAdjuvantRadioTherapy: true });   
      this.state.adjuvantradiotherapy = name 
    }else{
        this.setState({ showAdjuvantRadioTherapy: false, showAdjuvantRadioTherapyIfYes: false, adjuvantradiotherapyifyes: "", adjuvantradiotherapyifyesother: "" }); 
        this.state.adjuvantradiotherapy = name        
    }
  }

  showAdjuvantRadioTherapyIfYes(name){
    if(document.getElementById("adjuvantradiotherapyifyes").value == "Other"){
      this.setState({ showAdjuvantRadioTherapyIfYes: true });   
      this.state.adjuvantradiotherapyifyes = name 
    }else{
        this.setState({ showAdjuvantRadioTherapyIfYes: false, adjuvantradiotherapyifyesother: "" }); 
        this.state.adjuvantradiotherapyifyes = name        
    }
  }

  showAdjuvantEndocrineTherapy(name){
    if(document.getElementById("adjuvantendocrinetherapy").value == "Yes"){
      this.setState({ showAdjuvantEndocrineTherapy: true });   
      this.state.adjuvantendocrinetherapy = name 
    }else{
        this.setState({ showAdjuvantEndocrineTherapy: false, adjuvantendocrinetherapyifyes: "" }); 
        this.state.adjuvantendocrinetherapy = name        
    }
  }

  showRecommendedDurationAdjuvantEndocrineTherapy(name){
    if(document.getElementById("recommendeddurationadjuvantendocrinetherapy").value == "Other"){
      this.setState({ showRecommendedDurationAdjuvantEndocrineTherapy: true });   
      this.state.recommendeddurationadjuvantendocrinetherapy = name 
    }else{
        this.setState({ showRecommendedDurationAdjuvantEndocrineTherapy: false, recommendeddurationadjuvantendocrinetherapyifother: "" }); 
        this.state.recommendeddurationadjuvantendocrinetherapy = name        
    }
  }

  showIfPresentedWithMetastases(name){
    if(document.getElementById("ifpresentedwithmetastases").value == "Yes"){
      this.setState({ showIfPresentedWithMetastases: true });   
      this.state.if_present_with_metastases = name 
    }else{
        this.setState({ showIfPresentedWithMetastases: false, ifpresentedwithmetastasesifother: "", if_present_with_metastases: "", biomarker_testing: "", gBRCAm: "", brca_deletion: "", brca_duplication: "", androgen_receptor: "", androgen_receptor_positive: "", tumor_mutation_type: "", tumor_mutation_value: "", msi_status: "", pik3cam_status: "", pik3cam_mutation_detected: "", ngs_performed: "", ngs_performed_if_yes_findings: "", first_line_therapy_yes: "", second_line_therapy_yes: "", third_line_therapy_yes: "", fourth_line_therapy_yes: "", bone_metastsis: "", bisphosphonates: "", rank_i_inhibitor: "", pallative_radiotherapy: "", p_r_date: "", p_r_site: "", p_r_schedule: "", p_r_dose: "", p_r_other_comments: "", leptomeningeal_metastasis_radio_therapy: "", intratelcal_chemo: "", intratelcal_chemo_if_yes: "", intratelcal_chemo_date: "", intratelcal_chemo_regimen: "" }); 
        this.state.ifpresentedwithmetastases = name        
    }
  }

  showNGSDoneAtDiagnosis(name){
    if(document.getElementById("ngsdoneatdiagnosis").value == "Yes"){
      this.setState({ showNGSDoneAtDiagnosis: true });   
      this.state.ngsdoneatdiagnosis = name 
    }else{
        this.setState({ showNGSDoneAtDiagnosis: false, ngsdoneatdiagnosisifyesidentifiedtargets: "", ngsdoneatdiagnosisifyes: "" }); 
        this.state.ngsdoneatdiagnosis = name        
    }
  }

  showNGSDoneAtRecurrence(name){
    if(document.getElementById("ngsdoneatrecurrence").value == "Yes"){
      this.setState({ showNGSDoneAtRecurrence: true });   
      this.state.ngsdoneatrecurrence = name 
    }else{
        this.setState({ showNGSDoneAtRecurrence: false, ngsdoneatrecurrenceifyesidentifiedtargets: "", ngsdoneatrecurrenceifyes: "" }); 
        this.state.ngsdoneatrecurrence = name        
    }
  }

  showIfAndroReceptor(name){
    if(document.getElementById("androgenreceptor").value == "Positive"){
      this.setState({ showIfAndroReceptor: true });   
      this.state.androgen_receptor = name 
    }else{
        this.setState({ showIfAndroReceptor: false, ngsdoneatrecurrenceifyesidentifiedtargets: "", ngsdoneatrecurrenceifyes: "" }); 
        this.state.percent_positive = ""        
    }
  }

  showPIK3CAmStatus(name){
    if(document.getElementById("pik3camstatus").value == "Mutation Detected"){
      this.setState({ showPIK3CAmStatus: true });   
      this.state.pik3cam_status = name 
    }else{
        this.setState({ showPIK3CAmStatus: false, pik3cam_mutation_detected: "" }); 
        this.state.pik3cam_mutation_detected = ""        
    }
  }

  showNGSPerformed(name){
    if(document.getElementById("ngsperformed").value == "Yes"){
      this.setState({ showNGSPerformed: true });   
      this.state.ngs_performed = name 
    }else{
        this.setState({ showNGSPerformed: false, ngs_performed_if_yes_findings: "" }); 
        this.state.ngs_performed_if_yes_findings = ""        
    }
  }

  showFirstLineTherapy(name){
    if(document.getElementById("firstlinetherapyyes").value == "Other"){
      this.setState({ showFirstLineTherapy: true });   
      this.state.first_line_therapy_yes = name 
    }else{
        this.setState({ showFirstLineTherapy: false, first_line_therapy_other: "" }); 
        this.state.first_line_therapy_other = ""        
    }
  }

  showSecondLineTherapy(name){
    if(document.getElementById("secondlinetherapyyes").value == "Other"){
      this.setState({ showSecondLineTherapy: true });   
      this.state.second_line_therapy_yes = name 
    }else{
        this.setState({ showSecondLineTherapy: false, second_line_therapy_other: "" }); 
        this.state.second_line_therapy_other = ""        
    }
  }

  showThirdLineTherapy(name){
    if(document.getElementById("thirdlinetherapyyes").value == "Other"){
      this.setState({ showThirdLineTherapy: true });   
      this.state.third_line_therapy_yes = name 
    }else{
        this.setState({ showThirdLineTherapy: false, third_line_therapy_other: "" }); 
        this.state.third_line_therapy_other = ""        
    }
  }

  showFourthLineTherapy(name){
    if(document.getElementById("fourthlinetherapyyes").value == "Other"){
      this.setState({ showFourthLineTherapy: true });   
      this.state.fourth_line_therapy_yes = name 
    }else{
        this.setState({ showFourthLineTherapy: false, fourth_line_therapy_other: "" }); 
        this.state.fourth_line_therapy_other = ""        
    }
  }

  showPalliativeRadiotherapy(name){
    if(document.getElementById("palliativeradiotherapy").value == "Yes"){
      this.setState({ showPalliativeRadiotherapy: true });   
      this.state.pallative_radiotherapy = name 
    }else{
        this.setState({ showPalliativeRadiotherapy: false, fourth_line_therapy_other: "", p_r_date: "", p_r_site: "", p_r_dose: "", p_r_schedule: "", p_r_other_comments: "" }); 
        this.state.fourth_line_therapy_other = ""        
    }
  }

  showIntrathecalChemo(name){
    if(document.getElementById("intrathecalchemo").value == "Yes"){
      this.setState({ showIntrathecalChemo: true });   
      this.state.intratelcal_chemo = name 
    }else{
        this.setState({ showIntrathecalChemo: false, fourth_line_therapy_other: "", p_r_date: "", p_r_site: "", p_r_dose: "", p_r_schedule: "", p_r_other_comments: "" }); 
        this.state.fourth_line_therapy_other = ""        
    }
  }

  render(){          
    const { showFertilityOption, showFertilityDiscussed, showNeoAdjuvantTherapy, showNeoAdjuvantTherapyIfYes, showOvarianSuppression, showIfProgression, showNodalSurgery, showReconstruction, showReconstructionType, showAdjuvantChemotherapy, showAdjuvantChemotherapyIfYes, showAdjuvantBoneModify, showFertilityOptionUndertakenBone, showFertilityOptionUndertakenBoneOther, showHER2TargetedTherapy, showHER2TargetedTherapyDuration, showDualAntiHER2, showAdjuvantRadioTherapy, showAdjuvantRadioTherapyIfYes, showAdjuvantEndocrineTherapy, showRecommendedDurationAdjuvantEndocrineTherapy, showIfPresentedWithMetastases, showNGSDoneAtDiagnosis, showNGSDoneAtRecurrence, showIfAndroReceptor, showPIK3CAmStatus, showNGSPerformed, showFirstLineTherapy, showSecondLineTherapy, showThirdLineTherapy, showFourthLineTherapy, showPalliativeRadiotherapy, showIntrathecalChemo, fertilitydiscussedifother, fertilityoptionundertaken, fertilitydiscussed, neoadjuvanttherapy, neoadjuvanttherapyifyes, neoadjuvantthereayifyesother, ovariansuppression, ovariansuppressionifyes, ifprogression, ifprogressionandother, responsetoneoadjuvantchemotherapy, primarysurgery, nodalsurgery, reconstructiondone, typeofreconstruction, typeofreconstructionother, adjuvantchemotherapy, adjuvantchemotherapyifyes, adjuvantchemotherapyother, adjuvantbonemodify, fertilityoptionundertakenbone, fertilityoptionundertakenboneotherifother, her2targetedtherapy, her2targetedtherapyduration, her2targetedtherapydurationifother, dualantiher2, dualantiher2ifyes, adjuvantradiotherapy, adjuvantradiotherapyifyes, adjuvantradiotherapyifyesother, adjuvantendocrinetherapy, adjuvantendocrinetherapyifyes, recommendeddurationadjuvantendocrinetherapy, recommendeddurationadjuvantendocrinetherapyifother, reasonforstoppingaet, ifpresentedwithmetastases, ifpresentedwithmetastasesifother, ngsdoneatdiagnosis, ngsdoneatdiagnosisifyes, ngsdoneatdiagnosisifyesidentifiedtargets, ngsdoneatrecurrence, ngsdoneatrecurrenceifyes, ngsdoneatrecurrenceifyesidentifiedtargets, if_present_with_metastases, biomarker_testing, gbrcam, brca_deletion, brca_duplication, androgen_receptor, androgen_receptor_positive, tumor_mutation_type, tumor_mutation_value, msi_status, pik3cam_status, pik3cam_mutation_detected, ngs_performed, ngs_performed_if_yes_findings, first_line_therapy_yes, second_line_therapy_yes, third_line_therapy_yes, fourth_line_therapy_yes, first_line_therapy_other, second_line_therapy_other, third_line_therapy_other, fourth_line_therapy_other, bone_metastsis, bisphosphonates, rank_i_inhibitor, pallative_radiotherapy, p_r_date, p_r_site, p_r_schedule, p_r_dose, p_r_other_comments, leptomeningeal_metastasis_radio_therapy, intratelcal_chemo, intratelcal_chemo_if_yes, intratelcal_chemo_date, intratelcal_chemo_regimen, code } = this.state; 
    const { history } = this.props;

    /*var metas = Object.keys(this.state.metastases_types).filter((x) => this.state.metastases_types[x]);
    var treat = Object.keys(this.state.first_treatment_given).filter((x) => this.state.first_treatment_given[x]);*/
return (
  <div>
        <SideBar   />
        <div className="content-wrapper animate__animated animate__fadeIn">
        <div className="app-content content overflow-hidden">
        
          <Fragment>
          {code}
          <Row>
          <Col sm='12'>
          <Card>
            <CardHeader>
              <h1 className="animate__animated animate__fadeIn">Treatment</h1>
            </CardHeader>
            <CardBody>
              <AvForm  onSubmit= {() => this.sendTreatmentDetails()}>
              <div className="row">
                
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='fertilitydiscussed'>Fertility discussed</Label>
                    <AvInput type='select' name='fertilitydiscussed' id='fertilitydiscussed' required value={this.state.fertilitydiscussed} onChange={(e) => this.showFertilityOption(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option> 
                        <option value="Not Required">Not Required</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Fertility discussed!</AvFeedback>
                  </AvGroup>
                </div>
                {showFertilityOption && (
                  <div className="col-md-4">
                    <AvGroup>            
                        <Label for='fertilityoptionundertaken'>Fertility option undertaken</Label>
                        <AvInput type='select' name='fertilityoptionundertaken' id='fertilityoptionundertaken' required value={this.state.fertilityoptionundertaken} onChange={(e) => this.showFertilityDiscussed(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="Embryo cryopreservation">Embryo cryopreservation</option>
                            <option value="Egg Harvesting">Egg Harvesting</option> 
                            <option value="Ovarian Biopsy">Ovarian Biopsy</option>      
                            <option value="LHRH analog with chemotherapy">LHRH analog with chemotherapy</option>
                            <option value="Other">Other</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select Fertility option undertaken!</AvFeedback>
                    </AvGroup>
                  </div>
                )}  
                {showFertilityDiscussed && (
                <div className="col-md-4">
                    <AvGroup>
                    <Label for='fertilitydiscussedifother'>If Other</Label>
                    <AvField placeholder="" name='fertilitydiscussedifother' id='fertilitydiscussedifother' value={this.state.fertilitydiscussedifother} onChange={(e) => this.setState({ fertilitydiscussedifother: e.target.value})} required />
                    <AvFeedback>Please enter the If Other!</AvFeedback>
                  </AvGroup>
                </div>
                )}
                <div class="col-md-12"><hr /></div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='neoadjuvanttherapy'>Neo-adjuvant therapy</Label>
                    <AvInput type='select' name='neoadjuvanttherapy' id='neoadjuvanttherapy' required value={this.state.neoadjuvanttherapy} onChange={(e) => this.showNeoAdjuvantTherapy(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Neo-adjuvant therapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showNeoAdjuvantTherapy && (
                  <div className="col-md-4">
                    <AvGroup>            
                        <Label for='neoadjuvanttherapyifyes'>Neo-adjuvant therapy (If Yes)</Label>
                        <AvInput type='select' name='neoadjuvanttherapyifyes' id='neoadjuvanttherapyifyes' required value={this.state.neoadjuvanttherapyifyes} onChange={(e) => this.showNeoAdjuvantTherapyIfYes(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="Anthracycline Alone">Anthracycline Alone</option>
                            <option value="Anthracycline-Taxane">Anthracycline-Taxane</option> 
                            <option value="Anthracycline-Taxane Platinum">Anthracycline-Taxane Platinum</option>      
                            <option value="Platinum + ACT">Platinum + ACT</option>                                                                                                                               
                            <option value="Other">Other</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select Neo-adjuvant therapy (If Yes)!</AvFeedback>
                    </AvGroup>
                  </div>
                )}  
                {showNeoAdjuvantTherapyIfYes && (
                <div className="col-md-4">
                    <AvGroup>
                    <Label for='neoadjuvantthereayifyesother'>If Other</Label>
                    <AvField placeholder="" name='neoadjuvantthereayifyesother' id='neoadjuvantthereayifyesother' value={this.state.neoadjuvantthereayifyesother} onChange={(e) => this.setState({ neoadjuvantthereayifyesother: e.target.value})} required />
                    <AvFeedback>Please enter the If Other!</AvFeedback>
                  </AvGroup>
                </div>
                )}
                <div class="col-md-12"><hr /></div>
                <div className="col-md-6">
                  <AvGroup>            
                    <Label for='ovariansuppression'>Ovarian suppression</Label>
                    <AvInput type='select' name='ovariansuppression' id='ovariansuppression' required value={this.state.ovariansuppression} onChange={(e) => this.showOvarianSuppression(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option> 
                        <option value="Not Required">Not Required</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Fertility discussed!</AvFeedback>
                  </AvGroup>
                </div>
                {showOvarianSuppression && (
                  <div className="col-md-6">
                    <AvGroup>            
                        <Label for='ovariansuppressionifyes'>Ovarian Suppression (If Yes)</Label>
                        <AvInput type='select' name='ovariansuppressionifyes' id='ovariansuppressionifyes' required value={this.state.ovariansuppressionifyes} onChange={(e) => this.setState({ ovariansuppressionifyes: e.target.value})}>
                            <option value="" selected>Select</option>
                            <option value="To prevent premature ovarian failure">To prevent premature ovarian failure</option>
                            <option value="Fertility Preservation">Fertility Preservation</option>                                               
                        </AvInput>                      
                        <AvFeedback>Please select Ovarian Suppression (If Yes)!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div class="col-md-12"><hr /></div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='responsetoneoadjuvantchemotherapy'>Response to neoadjuvant chemotherapy</Label>
                    <AvInput type='select' name='responsetoneoadjuvantchemotherapy' id='responsetoneoadjuvantchemotherapy' required value={this.state.responsetoneoadjuvantchemotherapy} onChange={(e) => this.setState({ responsetoneoadjuvantchemotherapy: e.target.value })}>
                        <option value="" selected>Select</option>
                        <option value="CR">CR</option>
                        <option value="PR">PR</option>                         
                        <option value="SD">SD</option>                         
                        <option value="PD">PD</option>                         
                        <option value="Not Assessed">Not Assessed</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Response to neoadjuvant chemotherapy!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-4">
                    <AvGroup>            
                        <Label for='ifprogression'>If progression</Label>
                        <AvInput type='select' name='ifprogression' id='ifprogression' required value={this.state.ifprogression} onChange={(e) => this.showIfProgression(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="Change of Regimen">Change of Regimen</option>
                            <option value="Surgery">Surgery</option> 
                            <option value="Other">Other</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select If progression!</AvFeedback>
                    </AvGroup>
                  </div>
                {showIfProgression && (
                <div className="col-md-4">
                    <AvGroup>
                    <Label for='ifprogressionandother'>If Other</Label>
                    <AvField placeholder="" name='ifprogressionandother' id='ifprogressionandother' value={this.state.ifprogressionandother} onChange={(e) => this.setState({ ifprogressionandother: e.target.value})} required />
                    <AvFeedback>Please enter the If Other!</AvFeedback>
                  </AvGroup>
                </div>
                )}
                <div class="col-md-12"><hr /></div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='primarysurgery'>Primary surgery</Label>
                    <AvInput type='select' name='primarysurgery' id='primarysurgery' required value={this.state.primarysurgery} onChange={(e) => this.setState({ primarysurgery: e.target.value })}>
                        <option value="" selected>Select</option>
                        <option value="BCS">BCS</option>
                        <option value="Mastectomy">Mastectomy</option>
                        <option value="Oncoplasty">Oncoplasty</option>                        
                      </AvInput>                      
                    <AvFeedback>Please select Primary surgery!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-4">
                    <AvGroup>            
                        <Label for='nodalsurgery'>Nodal Surgery</Label>
                        <AvInput type='select' name='nodalsurgery' id='nodalsurgery' required value={this.state.nodalsurgery} onChange={(e) => this.showNodalSurgery(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="SLNB">SLNB</option>
                            <option value="AxS">AxS</option> 
                            <option value="AxD">AxD</option> 
                            <option value="Not Done">Not Done</option> 
                            <option value="Other">Other</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select Nodal Surgery!</AvFeedback>
                    </AvGroup>
                  </div>
                {showNodalSurgery && (
                <div className="col-md-4">
                    <AvGroup>
                    <Label for='ifnodalsurgeryandother'>If Other</Label>
                    <AvField placeholder="" name='ifnodalsurgeryandother' id='ifnodalsurgeryandother' value={this.state.ifnodalsurgeryandother} onChange={(e) => this.setState({ ifnodalsurgeryandother: e.target.value})} required />
                    <AvFeedback>Please enter the If Other!</AvFeedback>
                  </AvGroup>
                </div>
                )}
                <div className="col-md-12"></div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='reconstructiondone'>Reconstruction done</Label>
                      <AvInput type='select' name='reconstructiondone' id='reconstructiondone' required value={this.state.reconstructiondone} onChange={(e) => this.showReconstruction(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option> 
                          <option value="Not Applicable">Not Applicable</option>                             
                      </AvInput>                      
                      <AvFeedback>Please select Reconstruction done!</AvFeedback>
                  </AvGroup>
                </div>
                {showReconstruction && (
                <>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='timingofreconstruction'>Timing of reconstruction</Label>
                      <AvInput type='select' name='timingofreconstruction' id='timingofreconstruction' required value={this.state.timingofreconstruction} onChange={(e) => this.setState({ timingofreconstruction: e.target.value })}>
                          <option value="" selected>Select</option>
                          <option value="Immediate">Immediate</option>
                          <option value="Delayed">Delayed</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select Timing of reconstruction!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='typeofreconstruction'>Type of reconstruction</Label>
                      <AvInput type='select' name='typeofreconstruction' id='typeofreconstruction' required value={this.state.typeofreconstruction} onChange={(e) => this.showReconstructionType(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Oncoplasty">Oncoplasty</option>
                          <option value="DIEP Flap">DIEP Flap</option>                           
                          <option value="Prosthesis">Prosthesis</option>
                          <option value="Other">Other</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select Type of reconstruction!</AvFeedback>
                  </AvGroup>
                </div>                
                </>
                )}
                {showReconstructionType && (
                  <div className="col-md-3">
                    <AvGroup>
                      <Label for='typeofreconstructionother'>If Other</Label>
                      <AvField placeholder="" name='typeofreconstructionother' id='typeofreconstructionother' value={this.state.typeofreconstructionother} onChange={(e) => this.setState({ typeofreconstructionother: e.target.value})} required />
                      <AvFeedback>Please enter the If Other!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-12"></div>
                <div className="col-md-4">
                  <AvGroup>            
                      <Label for='adjuvantchemotherapy'>Adjuvant chemotherapy</Label>
                      <AvInput type='select' name='adjuvantchemotherapy' id='adjuvantchemotherapy' required value={this.state.adjuvantchemotherapy} onChange={(e) => this.showAdjuvantChemotherapy(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>                                                    
                      </AvInput>                      
                      <AvFeedback>Please select Adjuvant chemotherapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showAdjuvantChemotherapy && (                
                <div className="col-md-4">
                  <AvGroup>            
                      <Label for='adjuvantchemotherapyifyes'>If Yes</Label>
                      <AvInput type='select' name='adjuvantchemotherapyifyes' id='adjuvantchemotherapyifyes' required value={this.state.adjuvantchemotherapyifyes} onChange={(e) => this.showAdjuvantChemotherapyIfYes(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Anthracycline Alone">Anthracycline Alone</option>
                          <option value="Anthracycline-Taxane">Anthracycline-Taxane</option>  
                          <option value="Anthracycline-Taxane Platinum">Anthracycline-Taxane Platinum</option>                         
                          <option value="Capecitabine low dose 1 year">Capecitabine low dose 1 year</option>
                          <option value="Capecitabine high dose 6 months">Capecitabine high dose 6 months</option>
                          <option value="Platinum + ACT">Platinum + ACT</option>                              
                          <option value="Other">Other</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select If Yes!</AvFeedback>
                  </AvGroup>
                </div>
                )}
                {showAdjuvantChemotherapyIfYes && (
                  <div className="col-md-3">
                    <AvGroup>
                      <Label for='adjuvantchemotherapyother'>If Other</Label>
                      <AvField placeholder="" name='adjuvantchemotherapyother' id='adjuvantchemotherapyother' value={this.state.adjuvantchemotherapyother} onChange={(e) => this.setState({ adjuvantchemotherapyother: e.target.value})} required />
                      <AvFeedback>Please enter the If Other!</AvFeedback>
                    </AvGroup>
                  </div>
                )}


                <div className="col-md-12"></div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='adjuvantbonemodify'>Adjuvant bone modifying agent given</Label>
                      <AvInput type='select' name='adjuvantbonemodify' id='adjuvantbonemodify' required value={this.state.adjuvantbonemodify} onChange={(e) => this.showAdjuvantBoneModify(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>                                                      
                      </AvInput>                      
                      <AvFeedback>Please select Adjuvant bone modifying agent given!</AvFeedback>
                  </AvGroup>
                </div>
                {showAdjuvantBoneModify && (
                <>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='fertilityoptionundertakenbone'>Fertility option undertaken</Label>
                      <AvInput type='select' name='fertilityoptionundertakenbone' id='fertilityoptionundertakenbone' required value={this.state.fertilityoptionundertakenbone} onChange={(e) => this.setState({ fertilityoptionundertakenbone: e.target.value })}>
                          <option value="" selected>Select</option>
                          <option value="Zoledronic">Zoledronic</option>
                          <option value="Denosumab">Denosumab</option>
                      </AvInput>                      
                      <AvFeedback>Please select Fertility option undertaken!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='fertilityoptionundertakenboneother'>Fertility option undertaken</Label>
                      <AvInput type='select' name='fertilityoptionundertakenboneother' id='fertilityoptionundertakenboneother' required value={this.state.fertilityoptionundertakenboneother} onChange={(e) => this.showFertilityOptionUndertakenBoneOther(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="3 Years">3 Years</option>
                          <option value="5 Years">5 Years</option>                           
                          <option value="Other">Other</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select Fertility option undertaken!</AvFeedback>
                  </AvGroup>
                </div>                
                </>
                )}
                {showFertilityOptionUndertakenBoneOther && (
                  <div className="col-md-3">
                    <AvGroup>
                      <Label for='fertilityoptionundertakenboneotherifother'>If Other</Label>
                      <AvField placeholder="" name='fertilityoptionundertakenboneotherifother' id='fertilityoptionundertakenboneotherifother' value={this.state.fertilityoptionundertakenboneotherifother} onChange={(e) => this.setState({ fertilityoptionundertakenboneotherifother: e.target.value})} required />
                      <AvFeedback>Please enter the If Other!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-12"></div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='adjuvantradiotherapy'>Adjuvant radio therapy</Label>
                    <AvInput type='select' name='adjuvantradiotherapy' id='adjuvantradiotherapy' required value={this.state.adjuvantradiotherapy} onChange={(e) => this.showAdjuvantRadioTherapy(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Adjuvant Radio therapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showAdjuvantRadioTherapy && (
                  <div className="col-md-4">
                    <AvGroup>            
                        <Label for='adjuvantradiotherapyifyes'>Neo-adjuvant therapy (If Yes)</Label>
                        <AvInput type='select' name='adjuvantradiotherapyifyes' id='adjuvantradiotherapyifyes' required value={this.state.adjuvantradiotherapyifyes} onChange={(e) => this.showAdjuvantRadioTherapyIfYes(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="IMRT">IMRT</option>
                            <option value="IGRT">IGRT</option> 
                            <option value="Proton">Proton</option>      
                            <option value="IORT">IORT</option>
                            <option value="APBI">APBI</option>     
                            <option value="DIBH">DIBH</option>     
                            <option value="Other">Other</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select Neo-adjuvant therapy (If Yes)!</AvFeedback>
                    </AvGroup>
                  </div>
                )}  
                {showAdjuvantRadioTherapyIfYes && (
                <div className="col-md-4">
                    <AvGroup>
                    <Label for='adjuvantradiotherapyifyesother'>If Other</Label>
                    <AvField placeholder="" name='adjuvantradiotherapyifyesother' id='adjuvantradiotherapyifyesother' value={this.state.adjuvantradiotherapyifyesother} onChange={(e) => this.setState({ adjuvantradiotherapyifyesother: e.target.value})} required />
                    <AvFeedback>Please enter the If Other!</AvFeedback>
                  </AvGroup>
                </div>
                )}

                <div className="col-md-12"><hr /></div>
                <div className="col-md-4">
                    <AvGroup>            
                        <Label for='ifpresentedwithmetastases'>If presented with metastases</Label>
                        <AvInput type='select' name='ifpresentedwithmetastases' id='ifpresentedwithmetastases' required value={this.state.ifpresentedwithmetastases} onChange={(e) => this.showIfPresentedWithMetastases(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>                           
                        </AvInput>                      
                        <AvFeedback>Please select If presented with metastases!</AvFeedback>
                    </AvGroup>
                  </div>
                {showIfPresentedWithMetastases && (
                <>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='biomarkertesting'>Biomarker Testing</Label>
                    <AvInput type='select' name='biomarkertesting' id='biomarkertesting' required value={this.state.biomarker_testing} onChange={(e) => this.setState({ biomarker_testing: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="PDL1  by SP 142">PDL1  by SP 142</option>
                        <option value="PDL1 by 22C3">PDL1 by 22C3</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Biomarker Testing!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='gBRCAm'>gBRCAm</Label>
                    <AvInput type='select' name='gBRCAm' id='gBRCAm' required value={this.state.gBRCAm} onChange={(e) => this.setState({ gBRCAm: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Pathogenic">Pathogenic</option>
                        <option value="Likely Pathogenic">Likely Pathogenic</option>
                        <option value="VUS">VUS</option>
                        <option value="Benign">Benign</option>
                        <option value="No Mutation Detected">No Mutation Detected</option>
                      </AvInput>                      
                    <AvFeedback>Please select gBRCAm!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='brcadeletion'>BRCA Deletion</Label>
                      <AvInput type='select' name='brcadeletion' id='brcadeletion' required value={this.state.brca_deletion} onChange={(e) => this.setState({ brca_deletion: e.target.value})}>
                          <option value="" selected>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select BRCA Deletion!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='brcaduplication'>BRCA Duplication</Label>
                      <AvInput type='select' name='brcaduplication' id='brcaduplication' required value={this.state.brca_duplication} onChange={(e) => this.setState({ brca_duplication: e.target.value})}>
                          <option value="" selected>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select BRCA Duplication!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                      <Label for='androgenreceptor'>Andro Receptor</Label>
                      <AvInput type='select' name='androgenreceptor' id='androgenreceptor' required value={this.state.androgen_receptor} onChange={(e) => this.showIfAndroReceptor(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Positive">Positive</option>
                          <option value="Negative">Negative</option>                           
                      </AvInput>                      
                      <AvFeedback>Please select Andro Receptor!</AvFeedback>
                  </AvGroup>
                </div>
                {showIfAndroReceptor && (<div className="col-md-3">
                    <AvGroup>
                      <Label for='percentpositive'>Percent Postive (%)</Label>
                      <AvField placeholder="" type="number" name='percentpositive' id='percentpositive' value={this.state.androgen_receptor_positive} onChange={(e) => this.setState({ androgen_receptor_positive: e.target.value})} required />
                      <AvFeedback>Please enter the percentage!</AvFeedback>
                    </AvGroup>
                </div>
                )}
                <div className="col-md-12"></div>
                <div className="col-md-2">
                  <AvGroup>            
                      <Label for='tumormutationburden'>Tumor Mutation Burden</Label>
                      <AvInput type='select' name='tumormutationburden' id='tumormutationburden' required value={this.state.tumor_mutation_type} onChange={(e) => this.setState({ tumor_mutation_type: e.target.value})} >
                          <option value="" selected>Select</option>
                          <option value="Less Than">Less Than</option>
                          <option value="Greater Than">Greater Than</option>
                          <option value="Less Than Equal">Less Than Equal</option>
                          <option value="Greater Than Equal">Greater Than Equal</option>                      
                      </AvInput>                      
                      <AvFeedback>Please select Tumor Mutation Burden!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-2">
                    <AvGroup>
                      <Label for='tumormutationvalue'>mutations/ Mb</Label>
                      <AvField placeholder="" type="number" name='tumormutationvalue' id='tumormutationvalue' value={this.state.tumor_mutation_value} onChange={(e) => this.setState({ tumor_mutation_value: e.target.value})} required />
                      <AvFeedback>Please enter the percentage!</AvFeedback>
                    </AvGroup>
                </div>
                <div className="col-md-2">
                  <AvGroup>            
                      <Label for='msistatus'>MSI Status</Label>
                      <AvInput type='select' name='msistatus' id='msistatus' required value={this.state.msi_status} onChange={(e) => this.setState({ msi_status: e.target.value})} >
                          <option value="" selected>Select</option>
                          <option value="MSI-H">MSI-H</option>
                          <option value="MSS">MSS</option>                          
                      </AvInput>                      
                      <AvFeedback>Please select MSI Status!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-2">
                  <AvGroup>            
                      <Label for='pik3camstatus'>PIK3CAm status</Label>
                      <AvInput type='select' name='pik3camstatus' id='pik3camstatus' required value={this.state.pik3cam_status} onChange={(e) => this.showPIK3CAmStatus(e.target.value)} >
                          <option value="" selected>Select</option>
                          <option value="Mutation Detected">Mutation Detected</option>
                          <option value="Not Detected">Not Detected</option>                          
                      </AvInput>                      
                      <AvFeedback>Please select PIK3CAm status!</AvFeedback>
                  </AvGroup>
                </div>
                {showPIK3CAmStatus && (
                  <div className="col-md-2">
                      <AvGroup>
                      <Label for='mutationdetectedyes'>if yes then details to be filled</Label>
                      <AvField placeholder="" name='mutationdetectedyes' id='mutationdetectedyes' value={this.state.pik3cam_mutation_detected} onChange={(e) => this.setState({ pik3cam_mutation_detected: e.target.value})} required />
                      <AvFeedback>Please enter if yes the details to be filled!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-2">
                  <AvGroup>            
                      <Label for='ngsperformed'>NGS Performed</Label>
                      <AvInput type='select' name='ngsperformed' id='ngsperformed' required value={this.state.ngs_performed} onChange={(e) => this.showNGSPerformed(e.target.value)} >
                          <option value="" selected>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>                          
                      </AvInput>                      
                      <AvFeedback>Please select NGS Performed!</AvFeedback>
                  </AvGroup>
                </div>
                {showNGSPerformed && (
                  <>
                  <div className="col-md-12"></div>
                   <div className="col-md-12">
                    <AvGroup>            
                        <Label for='ngsperformedifyes'>NGS Performed if yes</Label>
                        <AvInput type='textarea' name='ngsperformedifyes' id='ngsperformedifyes' required value={this.state.ngs_performed_if_yes_findings} onChange={(e) => this.setState({ ngs_performed_if_yes_findings: e.target.value })} />           
                        <AvFeedback>Please enter NGS Performed if yes!</AvFeedback>
                    </AvGroup>
                    </div>
                  </>
                )}
                <div className="col-md-12"><hr /></div>
                <div className="col-md-12"><h4 style={{ color : "black" }}>Treatment for metastatic disease</h4></div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='firstlinetherapyyes'>First Line Therapy</Label>
                    <AvInput type='select' name='firstlinetherapyyes' id='firstlinetherapyyes' required value={this.state.first_line_therapy_yes} onChange={(e) => this.showFirstLineTherapy(e.target.value)} >
                        <option value="" selected>Select</option>
                        <option value="Nab Paclitaxel + Atezolizumab">Nab Paclitaxel + Atezolizumab</option>
                        <option value="Chemo + Pembrolizumab">Chemo + Pembrolizumab</option>   
                        <option value="Single Agent Weekly Taxane">Single Agent Weekly Taxane</option>
                        <option value="Platinum Combination - Taxane Or Gemcitabine">Platinum Combination - Taxane Or Gemcitabine</option>   
                        <option value="Eribulin">Eribulin</option>
                        <option value="Olaparib">Olaparib</option>   
                        <option value="Oral Metronomic">Oral Metronomic</option>
                        <option value="Other">Other</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select First Line Therapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showFirstLineTherapy && (
                  <div className="col-md-3">
                      <AvGroup>
                      <Label for='firsttherapyother'>If other, please specify</Label>
                      <AvField placeholder="" name='firsttherapyother' id='firsttherapyother' value={this.state.first_line_therapy_other} onChange={(e) => this.setState({ first_line_therapy_other: e.target.value})} required />
                      <AvFeedback>Please enter If other, please specify!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='secondlinetherapyyes'>Second Line Therapy</Label>
                    <AvInput type='select' name='secondlinetherapyyes' id='secondlinetherapyyes' required value={this.state.second_line_therapy_yes} onChange={(e) => this.showSecondLineTherapy(e.target.value)} >
                        <option value="" selected>Select</option>
                        <option value="Eribulin">Eribulin</option>
                        <option value="Single Agent Weekly Taxane">Single Agent Weekly Taxane</option>   
                        <option value="Platinum Combination - Taxane Or Gemcitabine">Platinum Combination - Taxane Or Gemcitabine</option>
                        <option value="Olaparib">Olaparib</option>   
                        <option value="Oral Metronomic">Oral Metronomic</option>
                        <option value="Cmf">Cmf</option>   
                        <option value="Vinorelbine">Vinorelbine</option>
                        <option value="Sacituzumab Govitecan">Sacituzumab Govitecan</option>   
                        <option value="Bevacizumab And Taxane">Bevacizumab And Taxane</option>
                        <option value="Other">Other</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Second Line Therapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showSecondLineTherapy && (
                  <div className="col-md-3">
                      <AvGroup>
                      <Label for='secondtherapyother'>If other, please specify</Label>
                      <AvField placeholder="" name='secondtherapyother' id='secondtherapyother' value={this.state.second_line_therapy_other} onChange={(e) => this.setState({ second_line_therapy_other: e.target.value})} required />
                      <AvFeedback>Please enter If other, please specify!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='thirdlinetherapyyes'>Third Line Therapy</Label>
                    <AvInput type='select' name='thirdlinetherapyyes' id='thirdlinetherapyyes' required value={this.state.third_line_therapy_yes} onChange={(e) => this.showThirdLineTherapy(e.target.value)} >
                        <option value="" selected>Select</option>
                        <option value="Eribulin">Eribulin</option>
                        <option value="Single Agent Weekly Taxane">Single Agent Weekly Taxane</option>   
                        <option value="Platinum Combination - Taxane Or Gemcitabine">Platinum Combination - Taxane Or Gemcitabine</option>
                        <option value="Olaparib">Olaparib</option>   
                        <option value="Oral Metronomic">Oral Metronomic</option>
                        <option value="Cmf">Cmf</option>   
                        <option value="Vinorelbine">Vinorelbine</option>
                        <option value="Sacituzumab Govitecan">Sacituzumab Govitecan</option>   
                        <option value="Bevacizumab And Taxane">Bevacizumab And Taxane</option>
                        <option value="Other">Other</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Third Line Therapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showThirdLineTherapy && (
                  <div className="col-md-3">
                      <AvGroup>
                      <Label for='thirdtherapyother'>If other, please specify</Label>
                      <AvField placeholder="" name='thirdtherapyother' id='thirdtherapyother' value={this.state.third_line_therapy_other} onChange={(e) => this.setState({ third_line_therapy_other: e.target.value})} required />
                      <AvFeedback>Please enter If other, please specify!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='fourthlinetherapyyes'>Fourth Line Therapy</Label>
                    <AvInput type='select' name='fourthlinetherapyyes' id='fourthlinetherapyyes' required value={this.state.fourth_line_therapy_yes} onChange={(e) => this.showFourthLineTherapy(e.target.value)} >
                        <option value="" selected>Select</option>
                        <option value="Eribulin">Eribulin</option>
                        <option value="Single Agent Weekly Taxane">Single Agent Weekly Taxane</option>   
                        <option value="Platinum Combination - Taxane Or Gemcitabine">Platinum Combination - Taxane Or Gemcitabine</option>
                        <option value="Olaparib">Olaparib</option>   
                        <option value="Oral Metronomic">Oral Metronomic</option>
                        <option value="Cmf">Cmf</option>   
                        <option value="Vinorelbine">Vinorelbine</option>
                        <option value="Sacituzumab Govitecan">Sacituzumab Govitecan</option>   
                        <option value="Bevacizumab And Taxane">Bevacizumab And Taxane</option>
                        <option value="Other">Other</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Fourth Line Therapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showFourthLineTherapy && (
                  <div className="col-md-3">
                      <AvGroup>
                      <Label for='fourththerapyother'>If other, please specify</Label>
                      <AvField placeholder="" name='fourththerapyother' id='fourththerapyother' value={this.state.fourth_line_therapy_other} onChange={(e) => this.setState({ fourth_line_therapy_other: e.target.value})} required />
                      <AvFeedback>Please enter If other, please specify!</AvFeedback>
                    </AvGroup>
                  </div>
                )}
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='bonemetastasis'>Bone Metastasis</Label>
                    <AvInput type='select' name='bonemetastasis' id='bonemetastasis' required value={this.state.bone_metastsis} onChange={(e) => this.setState({ bone_metastsis: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Bone Metastasis!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='bisphosphonates'>Bisphosphonates</Label>
                    <AvInput type='select' name='bisphosphonates' id='bisphosphonates' required value={this.state.bisphosphonates} onChange={(e) => this.setState({ bisphosphonates: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Bisphosphonates!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='ranklinhibitor'>Rank l Inhibitor</Label>
                    <AvInput type='select' name='ranklinhibitor' id='ranklinhibitor' required value={this.state.rank_i_inhibitor} onChange={(e) => this.setState({ rank_i_inhibitor: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Rank l Inhibitor!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='palliativeradiotherapy'>Palliative Radiotherapy</Label>
                    <AvInput type='select' name='palliativeradiotherapy' id='palliativeradiotherapy' required value={this.state.pallative_radiotherapy}onChange={(e) => this.showPalliativeRadiotherapy(e.target.value)} >
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Palliative Radiotherapy!</AvFeedback>
                  </AvGroup>
                </div>
                {showPalliativeRadiotherapy && (
                  <>
                  <div className="col-md-2">
                    <AvGroup>
                      <Label for='palliativedate'>Palliative Radiotherapy Date</Label><br />
                      <DatePicker peekNextMonth showMonthDropdown showYearDropdown dropdownMode= "scroll" className="form-control date-picker-block w-100" dateFormat="dd-MM-yyyy" name="dobs" id="dobs" selected={this.state.startDate} onSelect={this.handleSelect} onChange={this.handleChange} />
                      <AvInput value={this.state.p_r_date} name="palliativedate" id="palliativedate" className="custom-date-input" onChange={(e) => this.setState({ p_r_date: e.target.value})} />
                      <AvFeedback>Please enter Palliative Radiotherapy Date!</AvFeedback>
                    </AvGroup>
                  </div>
                  <div className="col-md-2">
                      <AvGroup>
                      <Label for='palliativesite'>Palliative Radiotherapy Site</Label>
                      <AvField placeholder="" name='palliativesite' id='palliativesite' value={this.state.p_r_site} onChange={(e) => this.setState({ p_r_site: e.target.value})} required />
                      <AvFeedback>Please enter Palliative Radiotherapy Site!</AvFeedback>
                    </AvGroup>
                  </div>
                  <div className="col-md-2">
                      <AvGroup>
                      <Label for='palliativeschedule'>Palliative Radiotherapy Schedule</Label>
                      <AvField placeholder="" name='palliativeschedule' id='palliativeschedule' value={this.state.p_r_schedule} onChange={(e) => this.setState({ p_r_schedule: e.target.value})} required />
                      <AvFeedback>Please enter Palliative Radiotherapy Schedule!</AvFeedback>
                    </AvGroup>
                  </div>
                  <div className="col-md-2">
                      <AvGroup>
                      <Label for='palliativedose'>Palliative Radiotherapy Dose</Label>
                      <AvField placeholder="" name='palliativedose' id='palliativedose' value={this.state.p_r_dose} onChange={(e) => this.setState({ p_r_dose: e.target.value})} required />
                      <AvFeedback>Please enter Palliative Radiotherapy Dose!</AvFeedback>
                    </AvGroup>
                  </div>
                  <div className="col-md-4">
                      <AvGroup>
                      <Label for='palliativeothercomments'>Other Comments</Label>
                      <AvField placeholder="" name='palliativeothercomments' id='palliativeothercomments' value={this.state.p_r_other_comments} onChange={(e) => this.setState({ p_r_other_comments: e.target.value})} required />
                      <AvFeedback>Please enter Other Comments!</AvFeedback>
                    </AvGroup>
                  </div>
                  </>
                )}
                <div className="col-md-12"><hr /></div>
                <div className="col-md-12"><h4 style={{ color : "black" }}>leptomeningeal metastasis</h4></div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='leptomeningealmetastasisradiotherapy'>Radiotherapy</Label>
                    <AvInput type='select' name='leptomeningealmetastasisradiotherapy' id='leptomeningealmetastasisradiotherapy' required value={this.state.leptomeningeal_metastasis_radio_therapy} onChange={(e) => this.setState({ leptomeningeal_metastasis_radio_therapy: e.target.value })} >
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Radiotherapy!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='intrathecalchemo'>Intrathecal chemo</Label>
                    <AvInput type='select' name='intrathecalchemo' id='intrathecalchemo' required value={this.state.intratelcal_chemo} onChange={(e) => this.showIntrathecalChemo( e.target.value )} >
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Intrathecal chemo!</AvFeedback>
                  </AvGroup>
                </div>
                {showIntrathecalChemo && (
                  <>
                  <div className="col-md-3">
                    <AvGroup>
                      <Label for='intrathecaldate'>Intrathecal chemo Date</Label><br />
                      <DatePicker peekNextMonth showMonthDropdown showYearDropdown dropdownMode= "scroll" className="form-control date-picker-block w-100" dateFormat="dd-MM-yyyy" name="intradate" id="intradate" selected={this.state.startDateID} onSelect={this.handleSelect} onChange={this.handleChangeID} />
                      <AvInput value={this.state.intratelcal_chemo_date} name="intrathecaldate" id="intrathecaldate" className="custom-date-input" onChange={(e) => this.setState({ intratelcal_chemo_date: e.target.value})} />
                      <AvFeedback>Please enter Intrathecal chemo Date!</AvFeedback>
                    </AvGroup>
                  </div>
                  <div className="col-md-3">
                      <AvGroup>
                      <Label for='palliativeregimen'>Palliative Radiotherapy Regimen</Label>
                      <AvField placeholder="" name='palliativeregimen' id='palliativeregimen' value={this.state.intratelcal_chemo_regimen} onChange={(e) => this.setState({ intratelcal_chemo_regimen: e.target.value})} required />
                      <AvFeedback>Please enter Palliative Radiotherapy Regimen!</AvFeedback>
                    </AvGroup>
                  </div>
                  </>
                )}
                <div className="col-md-12"></div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='ngsdoneatdiagnosis'>NGS done at diagnosis</Label>
                    <AvInput type='select' name='ngsdoneatdiagnosis' id='ngsdoneatdiagnosis' required value={this.state.ngsdoneatdiagnosis} onChange={(e) => this.showNGSDoneAtDiagnosis(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select NGS done at diagnosis!</AvFeedback>
                  </AvGroup>
                </div>
                {showNGSDoneAtDiagnosis && (
                  <>
                  <div className="col-md-4">
                    <AvGroup>            
                        <Label for='ngsdoneatdiagnosisifyes'>NGS done at diagnosis (If Yes)</Label>
                        <AvInput type='select' name='ngsdoneatdiagnosisifyes' id='ngsdoneatdiagnosisifyes' required value={this.state.ngsdoneatdiagnosisifyes} onChange={(e) => this.setState({ ngsdoneatdiagnosisifyes: e.target.value })}>
                            <option value="" selected>Select</option>
                            <option value="Tissue">Tissue</option>
                            <option value="Liquid">Liquid</option>                             
                        </AvInput>                      
                        <AvFeedback>Please select NGS done at diagnosis (If Yes)!</AvFeedback>
                    </AvGroup>
                  </div>                
                  <div className="col-md-4">
                      <AvGroup>
                      <Label for='ngsdoneatdiagnosisifyesidentifiedtargets'>If yes, targets identified</Label>
                      <AvField placeholder="" name='ngsdoneatdiagnosisifyesidentifiedtargets' id='ngsdoneatdiagnosisifyesidentifiedtargets' value={this.state.ngsdoneatdiagnosisifyesidentifiedtargets} onChange={(e) => this.setState({ ngsdoneatdiagnosisifyesidentifiedtargets: e.target.value})} required />
                      <AvFeedback>Please enter If yes, targets identified!</AvFeedback>
                    </AvGroup>
                  </div>
                  </>
                )}

                <div className="col-md-12"></div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='ngsdoneatrecurrence'>NGS done at recurrence</Label>
                    <AvInput type='select' name='ngsdoneatrecurrence' id='ngsdoneatrecurrence' required value={this.state.ngsdoneatrecurrence} onChange={(e) => this.showNGSDoneAtRecurrence(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select NGS done at recurrence!</AvFeedback>
                  </AvGroup>
                </div>
                {showNGSDoneAtRecurrence && (
                  <>
                  <div className="col-md-4">
                    <AvGroup>            
                        <Label for='ngsdoneatrecurrenceifyes'>NGS done at recurrence (If Yes)</Label>
                        <AvInput type='select' name='ngsdoneatrecurrenceifyes' id='ngsdoneatrecurrenceifyes' required value={this.state.ngsdoneatrecurrenceifyes} onChange={(e) => this.setState({ ngsdoneatrecurrenceifyes: e.target.value })}>
                            <option value="" selected>Select</option>
                            <option value="Archival Tissue">Archival Tissue</option>
                            <option value="Fresh Biopsy">Fresh Biopsy</option>                             
                            <option value="Liquid">Liquid</option>                             
                        </AvInput>                      
                        <AvFeedback>Please select NGS done at recurrence (If Yes)!</AvFeedback>
                    </AvGroup>
                  </div>                
                  <div className="col-md-4">
                      <AvGroup>
                      <Label for='ngsdoneatrecurrenceifyesidentifiedtargets'>If yes, targets identified</Label>
                      <AvField placeholder="" name='ngsdoneatrecurrenceifyesidentifiedtargets' id='ngsdoneatrecurrenceifyesidentifiedtargets' value={this.state.ngsdoneatrecurrenceifyesidentifiedtargets} onChange={(e) => this.setState({ ngsdoneatrecurrenceifyesidentifiedtargets: e.target.value})} required />
                      <AvFeedback>Please enter If yes, targets identified!</AvFeedback>
                    </AvGroup>
                  </div>
                  </>
                )}
                  </>
                )}
                <div className="col-md-12">
                <Button color='primary' type='submit' disabled= {!fertilitydiscussed.length || !neoadjuvanttherapy.length || !ovariansuppression.length || !responsetoneoadjuvantchemotherapy || !ifprogression || !primarysurgery || !nodalsurgery || !reconstructiondone || !adjuvantchemotherapy || !adjuvantbonemodify || !her2targetedtherapy || !dualantiher2 || !adjuvantradiotherapy || !adjuvantendocrinetherapy || !recommendeddurationadjuvantendocrinetherapy || !reasonforstoppingaet || !ifpresentedwithmetastases || !ngsdoneatdiagnosis || !ngsdoneatrecurrence} onClick={ () => this.sendTreatmentDetails }>
                  Submit
                </Button>              
                </div>
              </div>
              </AvForm>
              
            </CardBody>
          </Card>
          </Col>
          </Row>
          </Fragment>
          </div>
          </div>
          </div>
        
);      
}
}

export default withRouter(Treatment);
