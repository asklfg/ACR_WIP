<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACR Template V1.3</title>
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

</body>
    <script type="text/javascript" src="Data.json"></script>
    <script>
        // Display data with copy functionality
        function displayArray(obj, container) {
            container.innerHTML = '';
            Object.entries(obj).forEach(([key, value]) => {
                if (typeof value === 'object' && value !== null) {
                    const header = document.createElement('strong');
                    header.textContent = key;
                    container.appendChild(header);
                    displayArray(value, container);
                } else {
                    const sanitizedKey = key.replace(/[^a-zA-Z0-9]/g, '');
                    const itemDiv = document.createElement('div');
                    itemDiv.innerHTML = `${key}:<br><button class="copy-btn" data-key="${sanitizedKey}">Copy</button><input type="text" id="input-${sanitizedKey}" value="${value}">`;
                    container.appendChild(itemDiv);
                }
            });
        }
        // Tab switching
        function openTab(evt, tabName, group = 'tab') {
            const tabcontent = document.getElementsByClassName(group + "content");
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            const tablinks = document.getElementsByClassName(group + "links");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            const tab = document.getElementById(tabName);
            if (tab) {
                tab.style.display = "block";
                evt.currentTarget.classList.add("active");
            }
        }
        // Copy to clipboard
        function attachCopyListeners() {
            document.querySelectorAll('.copy-btn').forEach(btn => {
                btn.removeEventListener('click', handleCopy);
                btn.addEventListener('click', handleCopy);
            });
        }
        function handleCopy() {
            const key = this.dataset.key;
            const input = document.getElementById(`input-${key}`);
            if (input) {
                input.select();
                navigator.clipboard.writeText(input.value);
            }
        }
        function updateAncestorPanelHeights(panel) {
            // Walk up the DOM tree and update each ancestor panel
            let current = panel.parentElement;            
            while (current) {
                // Find the closest ancestor panel
                let ancestorPanel = current.closest(".panel");
                if (!ancestorPanel) break;                
                // Update it
                ancestorPanel.style.maxHeight = ancestorPanel.scrollHeight + "px";               
                // Move to next level up
                current = ancestorPanel.parentElement;
            }
        }
        function openAccordion(evt, group = 'accordion') {
            const currentAccordion = evt.currentTarget;
            const currentPanel = currentAccordion.nextElementSibling;
            const wasActive = currentAccordion.classList.contains("active");
    // Only target accordion buttons within the same immediate parent container.
    // This allows nested accordions to function independently.
    const container = currentAccordion.parentElement;
    const accordions = Array.from(container.children).filter(el => el.classList.contains(group))
    // Close all sibling accordions in this container
    accordions.forEach((accordion) => {
        accordion.classList.remove("active");
        const panel = accordion.nextElementSibling
        if (panel) {
            panel.style.maxHeight = null;
        }
    })
    // Re-open the clicked accordion if it was not already active
    if (!wasActive) {
        currentAccordion.classList.add("active");
        if (currentPanel) {
            currentPanel.style.maxHeight =
                currentPanel.scrollHeight + "px";
            // Update ancestor panels immediately and multiple times to catch all transitions
            updateAncestorPanelHeights(currentPanel);
            setTimeout(() => updateAncestorPanelHeights(currentPanel), 50);
            setTimeout(() => updateAncestorPanelHeights(currentPanel), 150);
            setTimeout(() => updateAncestorPanelHeights(currentPanel), 300);
        }
    } else {
        // If closing the accordion, collapse it
        if (currentPanel) {
            currentPanel.style.maxHeight = null;
            // Update ancestor panels after closing
            updateAncestorPanelHeights(currentPanel);
            setTimeout(() => updateAncestorPanelHeights(currentPanel), 50);
            setTimeout(() => updateAncestorPanelHeights(currentPanel), 150);
        }
    }
}     
        // General ACR Menu Functions
        const AssessmentContentData = {
            'General_ACR': General_ACR.Json,
            'Trauma_ACR': {...PHYSICAL_EXAM.Trauma,...CSM.Good_CSM,...CSM.Poor_CSM},
            'Respiratory_ACR': {...AirwayBreathing},
            'Refusal_ACR': {...REMARKS.GeneralRemarks},
        }
        function showAssessmentContent(event, category) {
            event.preventDefault();            
            // Update content area
            const contentArea = document.getElementById('AssessmentContentArea');
            contentArea.innerHTML = '';          
            // Display the data using the displayArray function
            displayArray(AssessmentContentData[category], contentArea);           
            // Re-attach copy listeners to newly created buttons
            attachCopyListeners();          
            // Update active menu item styling
            const menuLinks = document.querySelectorAll('#AssessmentMenu li a');
            menuLinks.forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        }
        function filterAssessmentMenu() {
            const input = document.getElementById('AssessmentSearch');
            const filter = input.value.toUpperCase();
            const ul = document.getElementById('AssessmentMenu');
            const li = ul.getElementsByTagName('li');           
            for (let i = 0; i < li.length; i++) {
                const a = li[i].getElementsByTagName('a')[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = '';
                } else {
                    li[i].style.display = 'none';
                }
            }
        }
        // Attach copy listeners and set default tab
        attachCopyListeners();
        document.getElementById("defaultOpen").click();
    </script>
</html>
