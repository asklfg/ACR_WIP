<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACR Assessment Tool</title>
    <link rel="stylesheet" href="assets/css/style.css">
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
        <div class="panel" id="Airway_Breathing_content"></div>

        <button class="accordion" onclick="openAccordion(event)">Cardiac/Circulation</button>
        <div class="panel" id="Cardiac_Circulation_content"></div>

        <button class="accordion" onclick="openAccordion(event)">Level of Consciousness</button>
        <div class="panel" id="Level_of_Consciousness_content"></div>

        <button class="accordion" onclick="openAccordion(event)">Pain/Sedation/Nausea</button>
        <div class="panel" id="Pain_Sedation_Nausea_content"></div>

        <button class="accordion" onclick="openAccordion(event)">Procedural</button>
        <div class="panel" id="Procedural_content"></div>
    </div>
    <div id="Demographics_TAB" class="tabcontent">
        <h3>Demographics</h3>
    </div>
    <script src="index.js"></script>
</body>

</html>