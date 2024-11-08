interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string[];
    careerObjective: string;
    certifications: string[];
}

const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent traditional form submission

    // Capture form values
    const resumeData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        education: (document.getElementById("education") as HTMLTextAreaElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
        skills: (document.getElementById("skills") as HTMLTextAreaElement).value.split(","),
        careerObjective: (document.getElementById("career-objective") as HTMLTextAreaElement).value,
        certifications: (document.getElementById("certifications") as HTMLTextAreaElement).value.split(",")
    };
 
    // Handle Profile Picture Upload
    const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
    const file = profilePictureInput.files ? profilePictureInput.files[0] : null;
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById("profile-picture-display") as HTMLImageElement;
            profileImage.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    // Display the resume section
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
    resumeDisplay.style.display = "flex";
   


    // Populate personal information
    (document.getElementById("resume-name") as HTMLElement).innerText = resumeData.name;
    (document.getElementById("display-name") as HTMLElement).innerText = resumeData.name;
    const emailLink = document.getElementById("display-email") as HTMLAnchorElement;
    emailLink.innerText = resumeData.email;
    emailLink.href = `mailto:${resumeData.email}`;
    (document.getElementById("display-phone") as HTMLElement).innerText = resumeData.phone;

    // Populate education, experience, and skills
    (document.getElementById("display-education") as HTMLElement).innerText = resumeData.education;
    (document.getElementById("display-experience") as HTMLElement).innerText = resumeData.experience;

    // Populate career objective
    (document.getElementById("display-career-objective") as HTMLElement).innerText = resumeData.careerObjective;  // This should work now


    const certificationsList = document.getElementById("display-certifications") as HTMLUListElement;
    certificationsList.innerHTML = ""; // Clear any existing certifications
    resumeData.certifications.forEach((certification: string) => {
        const li = document.createElement("li");
        li.innerText = certification.trim();
        certificationsList.appendChild(li);
    });

    // Populate skills as a list
    const skillsList = document.getElementById("display-skills") as HTMLUListElement;
    skillsList.innerHTML = ""; // Clear any existing skills
    resumeData.skills.forEach((skill: string) => {
        const li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
        
    });
    
});
