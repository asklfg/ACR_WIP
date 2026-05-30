<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
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
    <script>
        // Data objects
        const APPEARANCE = {
            "General Appearance": "Pt. found —, A - patent, B - adequate, c - intact. Pt. A&Ox3. Pt. dressed appropriately.",
        }
        const PHYSICAL_EXAM = {
            "General": {
                "Head/Neck": "No obvious signs of trauma noted, Pt.'s airway patent, Pt. denies headache, dizziness, blurred vision, or lightheadedness, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Chest": "No obvious signs of trauma noted, Good air entry bilat., Lungs clear on auscultation, Pt. denies SOB or difficulty breathing, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Abdomen": "No obvious signs of trauma noted, Abdomen soft and non-tender on palp., No distension noted, Pt. denies N/V or GI upset, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Back/Pelvis": "No obvious signs of trauma noted, Pt. denies any GI symptoms, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Extremities": "No obvious signs of trauma noted, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints."
            },
            "Trauma": {
                "Head/Neck": "No hemhorrhages noted on assment, No CLAPs or TICS noted, Pt.'s airway patent, Pt. denies headache, dizziness, blurred vision, or lightheadedness, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Chest": "No hemhorrhages noted on assment, No CLAPs or TICS noted, Good air entry bilat., Lungs clear on auscultation, Pt. denies SOB or difficulty breathing, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Abdomen": "No hemhorrhages noted on assment, No CLAPs or TICS noted, Abdomen soft and non-tender on palp., No distension noted, Pt. denies N/V or GI upset, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Back/Pelvis": "No hemhorrhages noted on assment, No CLAPs or TICS noted, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                "Extremities": "No hemhorrhages noted on assment, No CLAPs or TICS noted, Good CSM noted, Pt. denies any pain or discomfort at this time, Pt. denies any further complaints.",
                }
        }
        const CSM = {
            "Good_CSM": {
                "Good CSM": "Good CSM noted distal to the injury, Good cap refill noted, Pt. denies any numbness or tingling, Pt. able to wiggle fingers/toes"
            },
            "Poor_CSM": {
                "Poor CSM": "CSM deficits noted distal to the injury, Poor Cap refill noted, Pt. c/o numbness and tingling, Pt. unable to wiggle fingers/toes"
            }
        }
        const GENERICPROCEDURES = {
                "General": {
                    "PPE": "Donned as appropriate.",
                    "Patient Assessment": "See physical exam.",
                    "Pt. Transported": "Pt. secured to stretcher with straps.",
                    "Radio report": "Report given to —.",
                    "Triage Report": "Report given to RN.",
                    "Pt. offloaded": "Pt. offloaded to —.",
                }
            }
        const REMARKS = {
            "GeneralRemarks": {
                "Remarks": "Some times and Pt. weight are approximated.",
                "Refusal": "Pt. instructed to call 911 should any new or worsening symptoms develop, or any further concerns arise.",
            },
            "TraumaRemarks": {
                "Remarks": "Some times and Pt. weight are approximated.",
                "Refusal": "Pt. instructed to call 911 should any new or worsening symptoms develop, or any further concerns arise.",
            }
        }
        const AirwayBreathing = {
            "ETCO2": {
                "Good waveform": "RR:—, Good waveform noted.",
                "Obstructive waveform": "RR:—, Obstructive waveform noted.",
                "Hypoventilation waveform": "RR:—, Hypoventilation noted on waveform .",
                "Hyperventilation waveform": "RR:—, Hyperventilation noted on waveform.",
                "Apneic waveform": "RR:—, Apneia noted on waveform.",
            },
            "OxygenDelivery": {
                "Nasal Cannula": "Nasal cannula applied, Tolerated well by Pt.",
                "Non-rebreather": "Non-rebreather mask applied, Tolerated well by Pt.",
                "Bag-Valve-Mask": "Ventilations provided VIA BVM, 10-12 breaths/min, 1 breath administered approx. every 5-6 seconds",
                "CPAP": "CPAP applied, Tolerated well by Pt.",
            },
            "Airway": {
                "Oropharyngeal Airway": "OPA sized and inserted, Accepted by Pt.",
                "Nasopharyngeal Airway": "NPA sized and inserted, Accepted by Pt.",
                "Supraglottic Airway": "SGA sized and inserted, Accepted by Pt.",
                "Endotracheal Intubation": "Endotracheal intubation performed, Tolerated well by Pt.",
                "Suctioning": "Suctioning performed, Tolerated well by Pt.",
            },
            "Bronchoconstriction": {
                "Salbutamol Adult (Improvement)" : "Indications met, Conditions met, No contraindications noted, 8x100mcg administered per 4 breaths, Tolerated well by Pt., Pt.'s condition improved.",
                "Salbutamol Adult (No Change)" : "Indications met, Conditions met, No contraindications noted, 8x100mcg administered per 4 breaths, Tolerated well by Pt., No change in Pt.'s condition noted.",
                "Salbutamol Pediatric (Improvement)" : "Indications met, Conditions met, No contraindications noted, 6x100mcg administered per 4 breaths, Tolerated well by Pt., Pt.'s condition improved.",
                "Salbutamol Pediatric (No Change)" : "Indications met, Conditions met, No contraindications noted, 6x100mcg administered per 4 breaths, Tolerated well by Pt., No change in Pt.'s condition noted.",
                "Dexamethasone" : "Indications met, Conditions met, No contraindications noted, Tolerated well by Pt., No change in Pt.'s condition noted.",
            },
            "Allergic Reaction": {
                "Epinephrine": "Indications met, Conditions met, No contraindications noted, administered to Pt.'s —, Tolerated well by Pt., Pt.'s condition improved.",
                "Diphenhydramine (IM)": "Indications met, Conditions met, No contraindications noted, administered to Pt.'s —, Tolerated well by Pt., Pt.'s condition improved.",
                "Diphenhydramine (IV)": "Indications met, Conditions met, No contraindications noted, administered via slow push and flushed with approx. 5ml NS, Tolerated well by Pt., Pt.'s condition improved.",
            },
            "Croup": {
                "Nebulized Epinephrine": "Indications met, Conditions met, No contraindications noted, Nebulized at ~6-8L/min O2, Tolerated well by Pt., Pt.'s condition improved.",
                "Dexamethasone": "Indications met, Conditions met, No contraindications noted, Tolerated well by Pt., No change in Pt.'s condition noted.",
            },
            "Tension Pneumothorax": {
                "Needle Decompression 4th Intercostal (Successful)": "Indications met, Conditions met, No contraindications noted, Needle decompression performed at 4th intercostal space, Catheter secured with adhesive dressing, Pt.'s condition improved.",
                "Needle Decompression 4th Intercostal (Unsuccessful)": "Indications met, Conditions met, No contraindications noted, Needle decompression performed at 4th intercostal space, Catheter secured with adhesive dressing, No change in Pt.'s condition noted.",
                "Needle Decompression 2nd Intercostal (Successful)": "Indications met, Conditions met, No contraindications noted, Needle decompression performed at 2nd intercostal space, Catheter secured with adhesive dressing, Pt.'s condition improved.",
                "Needle Decompression 2nd Intercostal (Unsuccessful)": "Indications met, Conditions met, No contraindications noted, Needle decompression performed at 2nd intercostal space, Catheter secured with adhesive dressing, No change in Pt.'s condition noted.",
                "Needle Decompression Occlusion": "Catheter occluded, Signs of retnesion noted, Pt.'s condition worsened.",
            },
            "CPAP": {
                "CPAP (Successful)": "Indications met, Conditions met, No contraindications noted, CPAP applied, Tolerated well by Pt.",
                "CPAP (Unsuccessful)": "Indications met, Conditions met, No contraindications noted, CPAP applied, Pt. unable to tolerate, CPAP discontinued.",
                "Nitro (BP between 100 and 140)": "Indications met, Conditions met, No contraindications noted, Nitro administered, Pt.'s condition improved.",
                "Nitro (BP above 140 w/o Hx or IV.)": "Indications met, Conditions met, No contraindications noted, Pt.'s condition improved.",
                "Nitro (BP above 140 w Hx.)": "Indications met, Conditions met, No contraindications noted, 2x sprays of nitro administered, Pt.'s condition improved.",
            },
        }
        const Cardiac = {
            "CPR": {
                "30:2 CPR": "CPR performed in accordance with ACLS guidelines, 30 compressions to 2 ventilations.",
                "Continuous CPR": "CPR performed in accordance with ACLS guidelines, Continuous compressions with asynchronous ventilations.",
                "15:2 CPR": "CPR performed in accordance with PALS guidelines, 15 compressions to 2 ventilations.",
                "3:1 CPR": "CPR performed in accordance with PALS guidelines, 3 compressions to 1 ventilation.",
            },
            "Defibrillation": {
                "Pads applied A/L": "Pads applied anterior/lateral.",
                "Pads applied A/P": "Pads applied anterior/posterior.",
                "Defibrillation 200J": "Defibrillation performed at 200J.",
                "Defibrillation 300J": "Defibrillation performed at 300J.",
                "Defibrillation 360J": "Defibrillation performed at 360J.",
                "V/C (A/L to A/P)": "Pad placement switched from anterior/lateral to anterior/posterior.",
                "V/C (A/P to A/L)": "Pad placement switched from anterior/posterior to anterior/lateral.",              
                "DSED (A/L to A/P)": "DSED performed, energy delivered via anterior/lateral, followed by anterior/posterior.",
                "DSED (A/P to A/L)": "DSED performed, energy delivered via anterior/posterior, followed by anterior/lateral.",
            },
            "ACLS": {
                "Epinephrine": "Indications met, conditions met, no contraindications noted, epinephrine administered.",
                "Amiodarone": "Indications met, conditions met, no contraindications noted, amiodarone administered.",
                "Bolus": "Indications met, conditions met, no contraindications noted, bolus administered to a max of —ml.",
            },
            "ROSC": {
                "Bolus": "Indications met, conditions met, no contraindications noted, bolus administered to a max of —ml.",
                "Dopamine": "Indications met, conditions met, no contraindications noted, dopamine administered.",
            },
            "Ischemia": {
                "ASA": "Indications met, conditions met, no contraindications noted, ASA administered, Pt. instructed to chew and swallow the medication, Tolerated well by Pt., No change in Pt. condition.",
                "Nitro (Improved)": "Indications met, conditions met, no contraindications noted, nitro administered, Pt. condition improved.",
                "Nitro (No Change)": "Indications met, conditions met, no contraindications noted, nitro administered, No change in Pt. condition.",
                "Morphine": "Indications met, conditions met, no contraindications noted, morphine administered."
            },
            "TachyDysrhythmia" : {
                "Modified Valsalva" : "TK.",
                "Atropine" : "TK.",
                "Amiodarone":"TK.",
                "Synchronized Cardioversion": "TK.",
            },
            "BradyDysrhythmia": {
                "Atropine": "TK.",
                "Dopamine" : "TK.",
                "Transcutaneous Pacing": "TK.",
            },
            "Hypokalemia": {
                "Sodium Bicarbonate": "TK.",
                "Salbutamol": "TK."
            },
            "IV Fluid Therapy": {
                "IV Cannulation": "TK.",
                "IO (Humeral)": "TK.",
                "IO (Tibial)": "TK.",
                "Lock": "TK.",
                "Fluid Bolus": "TK.",
            },
            "Traumatic Hemorrhage": {
                "TXA": "TK.",
                "Tourniquet": "TK.",
                "Hemostatic Dressing": "TK.",
                "Pelvic binder": "TK.",
            }
        }
        const LOC = {
        "Hypoglycemia": {
            "D10": "TK.",
            "Glucagon (IM)": "TK.",
            "Glucagon (IN)": "TK.",
        },
        "Seizure": {
            "Midazolam (IM)": "TK.",
            "Midazolam (IN)": "TK.",
            "Midazolam (IV/IO)": "TK.",
        },
        "OpioidOverdose": {
            "Naloxone (IN)": "TK.",
            "Naloxone (IM)": "TK.",
            "Naloxone (IV)": "TK.",
        },
    }
        const PainSedationNausea = {
            "Analgesia": {
                "Acetaminophen": "TK.",
                "Ibuprofen": "TK.",
                "Ketorolac": "TK.",
                "Fentanyl": "TK.",
                "Morphine": "TK.",
                "Ketamine": "TK.",
            },
            "Combative Patient": {
                "Sedation assessment": "TK.",
                "Physical Restraints": "TK.",
            },
            "Procedural Sedation": {
                "Midazolam": "TK.",
                "Fentanyl": "TK.",
            },
            "Nausea Vomiting": {
                "Ondansetron": "TK.",
                "Dimenhydrinate": "TK.",
            },
        }
        const RASS = {
            "Pre-Sedation": {
                "0 Alert and Calm": "TK.",
                "+1 Restless": "TK.",
                "+2 Agitated": "TK.",
                "+3 Very Agitated": "TK.",
                "+4 Combative": "TK.",
                },
            "Post-Sedation": {
                "-1 Drowsy": "TK.",
                "-2 Light sedation": "TK.",
                "-3 Moderate Sedation": "TK.",
                "-4 Deep Sedation": "TK.",
                "-5 Unrousable": "TK.",
                },
        }
        const Procedural = {
            "Emergency Childbirth": {
                "Emergency Childbirth": "TK."
            },
            "Lateral Patellar Dislocation Reduction": {
                "Lateral Patellar Dislocation Reduction": "TK."
            }
        }
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
        // Initialize displays - only if elements exist
        const displays = [
            ['AppearanceDisplay', APPEARANCE],
            ['GoodCSMDisplay', CSM["Good_CSM"]],
            ['PoorCSMDisplay', CSM["Poor_CSM"]],
            ['GeneralProceduresDisplay', GENERICPROCEDURES["General"]],
            ['GeneralRemarksDisplay', REMARKS["GeneralRemarks"]],
            ['ETCO2Display', AirwayBreathing["ETCO2"]],
            ['OxygenDeliveryDisplay', AirwayBreathing["OxygenDelivery"]],
            ['AirwayDisplay', AirwayBreathing["Airway"]],
            ['BronchoconstrictionDisplay', AirwayBreathing["Bronchoconstriction"]],
            ['AllergicReactionDisplay', AirwayBreathing["Allergic Reaction"]],
            ['CroupDisplay', AirwayBreathing["Croup"]],
            ['TensionPneumothoraxDisplay', AirwayBreathing["Tension Pneumothorax"]],
            ['CPAPDisplay', AirwayBreathing["CPAP"]],
            ['CPRDisplay', Cardiac["CPR"]],
            ['DefibrillationDisplay', Cardiac["Defibrillation"]],
            ['ACLSDisplay', Cardiac["ACLS"]],
            ['ROSCDisplay', Cardiac["ROSC"]],
            ['IschemiaDisplay', Cardiac["Ischemia"]],
            ['TachyDysrhythmiaDisplay', Cardiac["TachyDysrhythmia"]],
            ['BradyDysrhythmiaDisplay', Cardiac["BradyDysrhythmia"]],
            ['HypokalemiaDisplay', Cardiac["Hypokalemia"]],
            ['IVFluidTherapyDisplay', Cardiac["IV Fluid Therapy"]],
            ['TraumaticHemorrhageDisplay', Cardiac["Traumatic Hemorrhage"]],
            ['HypoglycemiaDisplay', LOC["Hypoglycemia"]],
            ['SeizureDisplay', LOC["Seizure"]],
            ['OpioidOverdoseDisplay', LOC["OpioidOverdose"]],
            ['AnalgesiaDisplay', PainSedationNausea["Analgesia"]],
            ['ProceduralSedationDisplay', PainSedationNausea["Procedural Sedation"]],
            ['CombativePatientDisplay', PainSedationNausea["Combative Patient"]],
            ['PreSedationDisplay', RASS["Pre-Sedation"]],
            ['PostSedationDisplay', RASS["Post-Sedation"]],
            ['NauseaVomitingDisplay', PainSedationNausea["Nausea Vomiting"]],
            ['EmergencyChildbirthDisplay', Procedural["Emergency Childbirth"]],
            ['LateralPatellarDislocationReductionDisplay', Procedural["Lateral Patellar Dislocation Reduction"]],
        ]
        displays.forEach(([elementId, data]) => {
            const element = document.getElementById(elementId);
            if (element) {
                displayArray(data, element);
            }
        })
        // General ACR Menu Functions
        const AssessmentContentData = {
            'General_ACR': PHYSICAL_EXAM.General,
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
