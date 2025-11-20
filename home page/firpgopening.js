window.addEventListener('DOMContentLoaded', function() {
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
    let nameInfo = document.getElementById("nameInfo");
    let emailInfo = document.getElementById("emailInfo");
    let phonenoInfo = document.getElementById("phonenoInfo");
    let adressInfo = document.getElementById("adressInfo");
    let linkedinInfo = document.getElementById("linkedinInfo");

    let pdDoneBtn = document.getElementById("pdDoneBtn");



    function updateName(){
        headingName.textContent = givenName.value +" " + familyName.value || "\u00A0";
        nameInfo.textContent = givenName.value +" " + familyName.value || "\u00A0";
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

    //Skills Section

    let skillInput = document.getElementById("skillInput");
    let skillName = document.getElementById("skillName");
    let skillDoneBtn = document.getElementById("skillDoneBtn");

    let remainSkills = document.getElementById("remainSkills")

    function skillDetails(){
        skillName.textContent = skillInput.value;
        remainSkills.style.display = "none";
    }

    skillDoneBtn.addEventListener('click',skillDetails);

    let skillLabel = document.getElementById("skillLabel");
    let addSkillBtn = document.getElementById("addSkillBtn");
    let formGroup = document.getElementById("formGroup");

    //Right Part

    let skillBody = document.getElementById("skillBody");


    function addSkillSec(){
        let randNums = Math.floor(Math.random()*100);

        skillName.textContent = skillInput.value;

        let skillWrapper = document.createElement("div");
        skillWrapper.id = "skillWrapper" + randNums;

        let labelEle = document.createElement("label");
        let inputEle = document.createElement("input");
        let brEl = document.createElement("br");
        inputEle.type = "text";
        labelEle.textContent = "Skill";
        inputEle.id = "skillInput"+randNums;
        labelEle.for = "institution";
        labelEle.id = "skillLabel"+randNums;
        formGroup.appendChild(labelEle);
        formGroup.appendChild(inputEle);
        formGroup.appendChild(brEl);

        let skillDelBtn = document.getElementById("skillDelBtn");

        skillDelBtn.addEventListener('click',function(){
            labelEle.remove();
            inputEle.remove();
            brEl.remove();
            skillParaEl.remove();
        });

        let skillParaEl = document.createElement("p");

        skillParaEl.classList.add("skill");
        skillParaEl.id = "skillName"+randNums;
        skillBody.appendChild(skillParaEl);

        inputEle.addEventListener("input", function () {
            skillParaEl.textContent = inputEle.value;
        });


    }

    addSkillBtn.addEventListener('click',addSkillSec);



    // Save Btn Part
    // let saveBtn = document.getElementById("saveBtn");

    // saveBtn.addEventListener("click", function() {
    //     // Collect resume data from the right part
    //     const resumeData = {
    //         template: 'first',
    //         name: document.getElementById("headingName").textContent,
    //         headline: document.getElementById("headLine").textContent,
    //         email: document.getElementById("emailInfo").textContent,
    //         phone: document.getElementById("phonenoInfo").textContent,
    //         address: document.getElementById("adressInfo").textContent,
    //         linkedin: document.getElementById("linkedinInfo").textContent,
    //         summary: document.getElementById("summaryBody").textContent,
    //         experience: {
    //             duration: document.getElementById("startExpYearRight").textContent + " - " + document.getElementById("endExpYearRight").textContent,
    //             role: document.getElementById("jobRole").textContent,
    //             location: document.getElementById("jobLocation").textContent,
    //             description: document.getElementById("roleDescription").textContent
    //         },
    //         skills: document.getElementById("skillName").textContent,
    //         education: {
    //             duration: document.getElementById("startEduYear").textContent + " - " + document.getElementById("endEduYear").textContent,
    //             institution: document.getElementById("institutionName").textContent,
    //             schoolCity: document.getElementById("schoolCity").textContent,
    //             description: document.getElementById("EduDescription").textContent
    //         },
    //         savedAt: new Date().toISOString()
    //     };

    //     // Save to Firebase
    //     const db = firebase.database();
    //     const resumeRef = db.ref('resumes').push();
    //     resumeRef.set(resumeData)
    //         .then(() => {
    //             alert('Resume saved successfully!');
    //         })
    //         .catch((error) => {
    //             console.error('Error saving resume:', error);
    //             alert('Error saving resume. Please try again.');
    //         });
    // });

    // Preview Btn Part
    let previewBtn = document.getElementById("previewBtn");
    let previewBtn2 = this.document.getElementById("previewBtn2");

    previewBtn.addEventListener("click",function(){
        let previewPart = document.getElementById("rightPreviewSec").innerHTML;

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
                    .bg_cont{


                        border:1px solid black;
                        padding-left:15px;
                        padding-right:15px;
                    }
                    .right_part{
                        min-height:297mm;
                        width:210mm;
                        margin-left: auto;
                        margin-right: auto;

                        padding:0px;
                        height:100vh;
                        overflow:auto;
                    }
                    .right_part::-webkit-scrollbar{
                        display:none;
                    }
                    .header_title_cont{
                        display:flex;
                        flex-direction: row;
                        align-items:flex-start;
                    }

                    .heading_name{
                        margin-left: 150px;
                        margin-top: 0px;
                        padding-top:45px;
                        color:#942c3a
                    }
                    .desired_position{
                        margin-left: 150px;
                    }
                    .desired_position_display{
                        display:none
                    }
                    .resume{
                        padding-left: 10px;
                        padding-right: 10px;
                        background-color: #942c3a;
                        color:#ffffff;
                        margin-top:0px;
                        padding-top: 55px;
                    }

                    /*personal details*/
                    .pd_body{
                        display: flex;
                    }
                    .sub_name_cont{
                        color:#942c3a;
                        font-weight: bold;

                    }
                    .sub_info_cont{
                        margin-left: 150px;
                    }

                    /*work experience*/
                    .fir_exp{
                        display: flex;
                    }
                    .about_firrole_cont{
                        margin-left: 130px;
                    }
                    .fir_duration{
                        color:#942c3a;
                        font-size: 15px;
                        white-space: nowrap;
                        font-weight: bold;
                    }
                    .fir_role{
                        font-weight: bold;
                    }
                    .fir_location{
                        font-weight: bold;
                    }

                    /*skills*/
                    .skill_body{
                        min-height:80px;
                        flex-wrap: wrap;
                        max-width:60%;
                        margin-left: 0px;
                        display: flex;
                        align-items: center;
                    }
                    .skill{
                        margin-right:25px;
                        background-color: #00000020;
                        padding:10px;
                        border-radius:20px;
                    }

                    /*Education*/
                    .edu_body{
                        display: flex;
                        margin-bottom: 30px;

                    }
                    .edu_info_cont{
                        margin-left: 150px;
                        font-weight: bold;
                    }
                    .edu_duration{
                        color:#942c3a;
                        font-weight: bold;
                        white-space: nowrap;
                    }
                    .preview{
                        display:none;
                    }
                    .save_btn{
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


    

    previewBtn2.addEventListener("click",function(){
        let previewPart = document.getElementById("rightPreviewSec").innerHTML;

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
                    .bg_cont{


                        border:1px solid black;
                        padding-left:15px;
                        padding-right:15px;
                    }
                    .right_part{
                        min-height:297mm;
                        width:210mm;
                        margin-left: auto;
                        margin-right: auto;

                        padding:0px;
                        height:100vh;
                        overflow:auto;
                    }
                    .right_part::-webkit-scrollbar{
                        display:none;
                    }
                    .header_title_cont{
                        display:flex;
                        flex-direction: row;
                        align-items:flex-start;
                    }

                    .heading_name{
                        margin-left: 150px;
                        margin-top: 0px;
                        padding-top:45px;
                        color:#942c3a
                    }
                    .desired_position{
                        margin-left: 150px;
                    }
                    .desired_position_display{
                        display:none
                    }
                    .resume{
                        padding-left: 10px;
                        padding-right: 10px;
                        background-color: #942c3a;
                        color:#ffffff;
                        margin-top:0px;
                        padding-top: 55px;
                    }

                    /*personal details*/
                    .pd_body{
                        display: flex;
                    }
                    .sub_name_cont{
                        color:#942c3a;
                        font-weight: bold;

                    }
                    .sub_info_cont{
                        margin-left: 150px;
                    }

                    /*work experience*/
                    .fir_exp{
                        display: flex;
                    }
                    .about_firrole_cont{
                        margin-left: 130px;
                    }
                    .fir_duration{
                        color:#942c3a;
                        font-size: 15px;
                        white-space: nowrap;
                        font-weight: bold;
                    }
                    .fir_role{
                        font-weight: bold;
                    }
                    .fir_location{
                        font-weight: bold;
                    }

                    /*skills*/
                    .skill_body{
                        min-height:80px;
                        flex-wrap: wrap;
                        max-width:60%;
                        margin-left: 0px;
                        display: flex;
                        align-items: center;
                    }
                    .skill{
                        margin-right:25px;
                        background-color: #00000020;
                        padding:10px;
                        border-radius:20px;
                    }

                    /*Education*/
                    .edu_body{
                        display: flex;
                        margin-bottom: 30px;

                    }
                    .edu_info_cont{
                        margin-left: 150px;
                        font-weight: bold;
                    }
                    .edu_duration{
                        color:#942c3a;
                        font-weight: bold;
                        white-space: nowrap;
                    }
                    .preview{
                        display:none;
                    }
                    .save_btn{
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
});
let givenName = document.getElementById("given-name");
