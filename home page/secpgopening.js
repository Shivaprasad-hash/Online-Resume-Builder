// Input Elements
let givenName = document.getElementById("given-name");
let familyName = document.getElementById("family-name");
let desiredPosition = document.getElementById("desired-position");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let postCode = document.getElementById("post-code")
let pdCity = document.getElementById("pdCity");
let linkedin = document.getElementById("linkedin");

// Resume names
let headingName = document.getElementById("headingName");
let emailInfo = document.getElementById("emailInfo");
let phonenoInfo = document.getElementById("phonenoInfo");
let adressInfo = document.getElementById("adressInfo");
let linkedinInfo = document.getElementById("linkedinInfo");

let pdDoneBtn = document.getElementById("pdDoneBtn");

//Icons
let envelopIcon = document.getElementById('envelopIcon')

function updateName(){
    headingName.textContent = givenName.value +" " + familyName.value || "\u00A0";
    emailInfo.textContent = email.value  || "\u00A0";
    phonenoInfo.textContent = phone.value;
    adressInfo.textContent = address.value +" "+postCode.value+" "+pdCity.value || "\u00A0";
    linkedinInfo.textContent = linkedin.value || "\u00A0";
}

pdDoneBtn.addEventListener("click", updateName);

// Headline Part
let useAsHeadlineCheckBox = document.getElementById("useAsHeadlineCheckBox");
let headLine = document.getElementById("headLine");

useAsHeadlineCheckBox.addEventListener("click",function(){
    headLine.textContent = desiredPosition.value || "\u00A0";
    headLine.classList.toggle("desired_position_display");
});

// Summary Part
let summaryText = document.getElementById("summaryText");
let summaryBody = document.getElementById("summaryBody");
let summaryDoneBtn = document.getElementById("summaryDoneBtn");

function summaryTxt(){
    summaryBody.textContent = summaryText.value;
}

summaryDoneBtn.addEventListener("click",summaryTxt);

// Education Part
let institutionName = document.getElementById("institution");

let yearSelectStartDateList = document.getElementById("yearSelectStartDate");

for (let year = 2025; year >= 1925; year--){
    let option = document.createElement("option");
    option.textContent = year;
    option.value = year;
    yearSelectStartDateList.appendChild(option);
}

let yearSelectEndDateList = document.getElementById("yearSelectEndDate");

for (let year=2030; year >= 1925; year--){
    let option = document.createElement("option");
    option.textContent = year;
    option.value = year;
    yearSelectEndDateList.appendChild(option);
}

let institutionNameRight = document.getElementById("institutionName");
let eduDoneBtn = document.getElementById("eduDoneBtn");

// Left
let yearSelectStartDate = document.getElementById("yearSelectStartDate");
let yearSelectEndDate = document.getElementById("yearSelectEndDate");

// Right
let startEduYear = document.getElementById("startEduYear");
let endEduYear = document.getElementById('endEduYear');

let eduCheckbox = document.getElementById("eduCheckbox");
let eduPresentTxt = document.getElementById("eduPresentTxt");

let EduDescription = document.getElementById("EduDescription");
let eduDescriptionTxt = document.getElementById("eduDescriptionTxt");

let schoolCity = document.getElementById("schoolCity");
let school = document.getElementById("school");
let city = document.getElementById("city");

function eduDetails(){
    institutionNameRight.textContent = institutionName.value || "\u00A0";
    startEduYear.textContent = yearSelectStartDate.value+" " || "\u00A0";
    endEduYear.textContent = " "+yearSelectEndDate.value || "\u00A0";
    if (eduCheckbox.checked){
        endEduYear.textContent = eduPresentTxt.textContent || "\u00A0";
    }else{
        endEduYear.textContent = " "+yearSelectEndDate.value || "\u00A0";
    }
    EduDescription.textContent = eduDescriptionTxt.value;

    schoolCity.textContent = school.value+", "+city.value || "\u00A0";
}

eduDoneBtn.addEventListener("click",eduDetails);

//Experience Part
//Left
let startExpYear = document.getElementById("startExpYear");
let endExpYear = document.getElementById("endExpYear");

let position = document.getElementById("position");
let companyName = document.getElementById("companyName");
let expCity = document.getElementById("expCity");
let expDescription = document.getElementById("expDescription");

for(let year = 2025; year >= 1925; year--){
    let optionsEle = document.createElement("option");
    optionsEle.textContent = year;
    optionsEle.value = year;
    startExpYear.appendChild(optionsEle);
}

for (let year = 2030; year>=1925; year--){
    let option = document.createElement("option");
    option.textContent = year;
    option.value = year;
    endExpYear.appendChild(option);
}

let expDoneBtn = document.getElementById("expDoneBtn");

//Right
let startExpYearRight = document.getElementById("startExpYearRight");
let endExpYearRight = document.getElementById("endExpYearRight");

let expPresentCb = document.getElementById("expPresentCb");
let expPresentTxt = document.getElementById("expPresentTxt");

let jobRole = document.getElementById("jobRole");
let jobLocation = document.getElementById("jobLocation");
let roleDescription = document.getElementById("roleDescription");

function expDetails(){
    jobRole.textContent = position.value+", "+companyName.value;
    jobLocation.textContent = expCity.value;
    roleDescription.textContent = expDescription.value;

    startExpYearRight.textContent = startExpYear.value+" ";
    endExpYearRight.textContent = " "+endExpYear.value;
    if(expPresentCb.checked){
        endExpYearRight.textContent = expPresentTxt.textContent;
    }else{
        endExpYearRight.textContent = endExpYear.value;
    }
}

expDoneBtn.addEventListener('click',expDetails);

// Certifications

// Right
let certificationList = document.getElementById("certificationList");
let certificate = document.getElementById("certificate");

// Left
let certificateInput = document.getElementById("certificateInput");
let addCertificateBtn = document.getElementById("addCertificateBtn");
let certificateDoneBtn = document.getElementById("certificateDoneBtn");

function certiDetails(){
    certificate.textContent = certificateInput.value;
    
}
certificateDoneBtn.addEventListener('click',certiDetails);

let certiFornGroup = document.getElementById("certiFornGroup");

function addCerti(){
    let randNums = Math.floor(Math.random()*100);

    //Right
    let listEle = document.createElement("li");
    certificationList.appendChild(listEle);
    listEle.id = "certificate" + randNums;

    //Left
    let newLabelEl = document.createElement("label");
    let newInputEl = document.createElement("input");
    let breakEl = document.createElement("br");
    certiFornGroup.appendChild(newLabelEl);
    certiFornGroup.appendChild(newInputEl);
    certiFornGroup.appendChild(breakEl);
    newLabelEl.textContent = "Certification";

    newInputEl.id="certificateInput"+randNums;
    newInputEl.type = "text";
    newLabelEl.for = newInputEl.id;

    newInputEl.addEventListener('input',function(){
        listEle.textContent = newInputEl.value;
    })

}
// Save Btn Part
let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function() {
    // Collect resume data from the right part
    const resumeData = {
        template: 'second',
        name: document.getElementById("headingName").textContent,
        headline: document.getElementById("headLine").textContent,
        email: document.getElementById("emailInfo").textContent,
        phone: document.getElementById("phonenoInfo").textContent,
        address: document.getElementById("adressInfo").textContent,
        linkedin: document.getElementById("linkedinInfo").textContent,
        summary: document.getElementById("summaryBody").textContent,
        experience: {
            duration: document.getElementById("startExpYearRight").textContent + " - " + document.getElementById("endExpYearRight").textContent,
            role: document.getElementById("jobRole").textContent,
            location: document.getElementById("jobLocation").textContent,
            description: document.getElementById("roleDescription").textContent
        },
        hardSkills: Array.from(document.getElementById("hardSkills").children).map(li => li.textContent),
        softSkills: Array.from(document.getElementById("softSkills").children).map(li => li.textContent),
        languages: "Spanish", // Assuming static for now
        education: {
            duration: document.getElementById("startEduYear").textContent + " - " + document.getElementById("endEduYear").textContent,
            institution: document.getElementById("institutionName").textContent,
            schoolCity: document.getElementById("schoolCity").textContent
        },
        certifications: Array.from(document.getElementById("certificationList").children).map(li => li.textContent),
        savedAt: new Date().toISOString()
    };

    // Save to Firebase
    const db = firebase.database();
    const resumeRef = db.ref('resumes').push();
    resumeRef.set(resumeData)
        .then(() => {
            alert('Resume saved successfully!');
        })
        .catch((error) => {
            console.error('Error saving resume:', error);
            alert('Error saving resume. Please try again.');
        });
});

addCertificateBtn.addEventListener('click',addCerti);

// Preview Btn Part
let previewBtn = document.getElementById("previewBtn");

previewBtn.addEventListener("click",function(){
    let previewPart = document.getElementById("rightPart").innerHTML;

    let newWindow = window.open("","_blank");

    newWindow.document.write(`
        <html>
        <head>
            <title>Resume Preview</title>
            <style>
                *{
                    box-sizing: border-box;
                    font-family: Roboto;
                }

                :root {
                    --primary-color: #3b746c;
                    --secondary-color: #2e5b54;
                    --text-color: #333;
                    --light-text-color: #fff;
                    --gray-text-color: #666;
                    --border-color: #ddd;
                    --font-family: 'Roboto', sans-serif;
                }

                .right_part{
                    min-height:297mm;
                    width:210mm;
                   
                    padding:0px;
                    height:100vh;
                    
                }
                .right_part::-webkit-scrollbar{
                    display:none;
                }
                .sec_res_cont {
                    font-family: var(--font-family);
                    margin: 0;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    width:210mm;
                    margin-left:auto;
                    margin-right:auto;
                    overflow:auto;
                    border:1px solid black;
                    min-height:297mm;
                    height:100vh;
                }

                

                .resume-container {
                    display: flex;
                    padding-right:15px;
                    border-radius: 5px;
                    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
                    background-color: #fff;
                }

                .left-panel {
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    width: 35%;
                    background-color: #3b746c;
                    color: var(--light-text-color);
                    padding: 40px 20px;
                }

                .right-panel {
                    width: 65%;
                    padding: 40px;
                    color: var(--text-color);
                }

                .left-panel h2 {
                    font-size: 1.5em;
                    margin-top: 0;
                    margin-bottom: 5px;
                    font-weight: 700;
                }

                .left-panel .section-title {
                    font-size: 1.1em;
                    font-weight: 700;
                    margin-top: 30px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid var(--light-text-color);
                    padding-bottom: 5px;
                }

                .personal-details {
                    margin-top: 20px;
                }

                .contact-info {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .contact-info li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .contact-info i {
                    margin-right: 10px;
                    font-size: 1.2em;
                }

                .skills-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .skills-list li {
                    margin-bottom: 20px;
                    font-weight: 400;
                }

                .right-panel h2 {
                    font-size: 23px;
                    margin-bottom: 10px;
                    font-weight: 700;
                }

                .right-panel h3 {
                    font-size: 1.2em;
                    margin-top: 20px;
                    margin-bottom: 5px;
                    font-weight: 700;
                    border-bottom: 2px solid var(--border-color);
                    padding-bottom: 5px;
                }

                .right-panel p {
                    margin: 0 0 10px 0;
                }

                .work-experience, .education, .certifications {
                    margin-bottom: 30px;
                }

                .job-title {
                    font-weight: 700;
                    font-size: 1.1em;
                    margin-bottom: 0;
                    color: var(--text-color);
                }

                .company-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.9em;
                    color: var(--gray-text-color);
                    margin-bottom: 5px;
                }

                .company-info span:first-child {
                    color: #000000;
                }
                .location{
                    color: var(--primary-color);
                }

                .work-details {
                    list-style: disc;
                    padding-left: 20px;
                    margin-top: 10px;
                }

                .work-details li {
                    margin-bottom: 5px;
                    color:#000000;
                }

                .education-info {
                    font-size: 1em;
                    margin-bottom: 5px;
                    color:#000000;
                }
                .edu-location{
                    color: var(--primary-color);
                }

                .certification-list {
                    padding-left: 20px;
                }

                .certification-list li {
                    margin-bottom: 5px;
                    color:#000000;
                }
                .job-entry{
                    display: flex;
                    margin-top:20px;
                }
                .company-info{
                    align-self: flex-start;
                }
                .fir-exp-body{
                    margin-left: 50px;
                    margin-top: 0px;
                }
                .sec-exp-body{
                    margin-left: 50px;
                    margin-top: 0px;
                }
                .duration{
                    white-space: nowrap;
                    font-weight: bold;
                }
                .education-entry{
                    display: flex;
                }
                .edu-body{
                    margin-left: 100px;
                }
                .education-info{
                    white-space: nowrap;
                }
                .preview_cont{
                    display:none;
                }
                .download_btn_cont{
                    display:flex;
                    justify-content:flex-end;
                }
                .download_btn{
                    background-color: #6a1b9a;
                    color: white;
                    border-color: #6a1b9a;
                    border-width: 0px;
                    padding:15px;
                    border-radius: 5px;
                    cursor:pointer;
                    margin-right: 20px;
                }
                .captureSection{
                    width: 100%;
                    max-width:100%;
                    
                }
            </style>
        </head>
        <body>
            <div class="download_btn_cont">
                <button class="download_btn" id="downloadBtn">Download</button>
            </div>
            <div id="captureSection">
                ${previewPart}
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

            <script>
                let pdfButton = document.getElementById("downloadBtn");

                pdfButton.addEventListener('click', function () {
                    const captureSection = document.getElementById('captureSection');

                    const opt = {
                        margin:       0,  // removes white gaps
                        filename:     'resume.pdf',
                        image:        { type: 'jpeg', quality: 1 },
                        html2canvas:  { scale: 2 },  // sharp text/images
                        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
                    };

                    html2pdf().set(opt).from(captureSection).save();
                });
            </script>
        </body>

        </html>
        `);

        newWindow.document.close();
});
