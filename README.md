<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACR Assessment Tool</title>
    <link rel="stylesheet" href="assets/css/style.scss">
</head>
<body>
    <div class="tab">
      <button class="tablinks" onclick="openTab(event, 'Assessments_TAB')" id="defaultOpen">Assessments</button>
      <button class="tablinks" onclick="openTab(event, 'Interventions_TAB')">Interventions</button>
      <button class="tablinks" onclick="openTab(event, 'Demographics_TAB')">Demographics</button>
    </div>
<div id="Assessments_TAB" class="tabcontent">
    <div class="Assessment-row">
        <div class="Assessment-left">
            <h3 style="margin-top: 0;">Menu</h3>
            <input type="text" id="AssessmentSearch" onkeyup="filterAssessmentMenu()" placeholder="Search..">
                <ul id="AssessmentMenu">
                    <li><a onclick="showAssessmentContent(event, 'General_ACR')">General</a></li>
                    <li><a onclick="showAssessmentContent(event, 'Trauma_ACR')">Trauma</a></li>
                    <li><a onclick="showAssessmentContent(event, 'Respiratory_ACR')">Respiratory</a></li>
                    <li><a onclick="showAssessmentContent(event, 'Refusal_ACR')">Refusal</a></li>
                </ul>
        </div>
        <div class="Assessment-right" id="AssessmentContentArea">
            <h3>General Appearance</h3>
            <p>Click a menu item to view details.</p>
        </div>
    </div>
</div>
<div id="Interventions_TAB" class="tabcontent">   
    <button class="accordion" onclick="openAccordion(event)">Airway/Breathing</button>
        <div class="panel">
            <button class="accordion" onclick="openAccordion(event)">ETCO2</button>
                <div class="panel">
                    <div id="ETCO2Display"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Oxygen Delivery</button>
                <div class="panel">
                    <div id="OxygenDeliveryDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Airway</button>
                <div class="panel">
                    <div id="AirwayDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Bronchoconstriction</button>
                <div class="panel">
                    <div id="BronchoconstrictionDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Allergic Reaction</button>
                <div class="panel">
                    <div id="AllergicReactionDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Croup</button>
                <div class="panel">
                    <div id="CroupDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Tension Pneumothorax</button>
                <div class="panel">
                    <div id="TensionPneumothoraxDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">CPAP</button>
                <div class="panel">
                    <div id="CPAPDisplay"></div>
                </div>
        </div>
    <button class="accordion" onclick="openAccordion(event)">Cardiac/Circulation</button>
        <div class="panel">
            <button class="accordion" onclick="openAccordion(event)">Cardiac Arrest</button>
                <div class="panel">
                    <div id="CPRDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Defibrillation</button>
                <div class="panel">
                    <div id="DefibrillationDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">ACLS</button>
                <div class="panel">
                    <div id="ACLSDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">ROSC</button>
                <div class="panel">
                    <div id="ROSCDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Ischemia</button>
                <div class="panel">
                    <div id="IschemiaDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Dysrhythmia</button>
                <div class="panel">
                    <button class="accordion" onclick="openAccordion(event)">Tachydysrhythmia</button>
                        <div class="panel">
                            <div id="TachyDysrhythmiaDisplay"></div>
                        </div>
                    <button class="accordion" onclick="openAccordion(event)">Bradydysrhythmia</button>
                        <div class="panel">
                            <div id="BradyDysrhythmiaDisplay"></div>
                        </div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Hypokalemia</button>
                <div class="panel">
                    <div id="HypokalemiaDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">IV Fluid Therapy</button>
                <div class="panel">
                    <div id="IVFluidTherapyDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Traumatic Hemorrhage</button>
                <div class="panel">
                    <div id="TraumaticHemorrhageDisplay"></div>
                </div>
        </div>
        <button class="accordion" onclick="openAccordion(event)">Level of Consciousness</button>
        <div class="panel">
            <button class="accordion" onclick="openAccordion(event)">Hypoglycemia</button>
                <div class="panel">
                    <div id="HypoglycemiaDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Seizure</button>
                <div class="panel">
                    <div id="SeizureDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Opioid Overdose</button>
                <div class="panel">
                    <div id="OpioidOverdoseDisplay"></div>
                </div>
        </div>
        <button class="accordion" onclick="openAccordion(event)">Pain/Sedation/Nausea</button>
        <div class="panel">
            <button class="accordion" onclick="openAccordion(event)">Analgesia</button>
                <div class="panel">
                    <div id="AnalgesiaDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Combative Patient</button>
                <div class="panel">
                    <div id="CombativePatientDisplay"></div>
                    <button class="accordion" onclick="openAccordion(event)">Pre-Sedation</button>
                        <div class="panel">
                            <div id="PreSedationDisplay"></div>
                        </div>
                    <button class="accordion" onclick="openAccordion(event)">Post-Sedation</button>
                        <div class="panel">
                            <div id="PostSedationDisplay"></div>
                        </div>      
                </div>
            <button class="accordion" onclick="openAccordion(event)">Procedural Sedation</button>
                <div class="panel">
                    <div id="ProceduralSedationDisplay"></div>
                </div>
            <button class="accordion" onclick="openAccordion(event)">Nausea/Vomiting</button>
                <div class="panel">
                    <div id="NauseaVomitingDisplay"></div>
                </div>
        </div>     
        <button class="accordion" onclick="openAccordion(event)">Procedural</button>
            <div class="panel">
                <button class="accordion" onclick="openAccordion(event)">Emergency Childbirth</button>
                    <div class="panel">
                        <div id="EmergencyChildbirthDisplay"></div>
                    </div>
                <button class="accordion" onclick="openAccordion(event)">Lateral Patellar Dislocation Reduction</button>
                    <div class="panel">
                        <div id="LateralPatellarDislocationReductionDisplay"></div>
                    </div>
                </div>
    </div>
    <div id="Demographics_TAB" class="tabcontent">
        <h3>Demographics</h3>
    </div>
    <script src="Index.js"></script>
</body>
</html>
