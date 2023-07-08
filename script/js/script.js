const navbar = document.getElementById("navbar");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

mobileMenuToggle.addEventListener('click', ()=>{
    navbar.classList.toggle('open');
})


// Better Note Management Section

const toggleMultiMediaNotes = () =>{
    const multiMediaNotesText  = document.getElementById("save-multi-notes");
    multiMediaNotesText.classList.toggle("show-multi-media-notes-text");

    const multinotes = document.getElementById("multinotes");
    multinotes.classList.toggle("create-notes")

    const angleIcon = document.querySelector(".note-management-features li i");
    angleIcon.classList.toggle("fa-angle-up");
    angleIcon.classList.toggle('fa-angle-down');

    const toggleNotes = document.getElementById("toggle-notes");
    toggleNotes.classList.toggle("toggle-Notes");

    const multiNotesContent = document.getElementById("multi-notes-content");
    multiNotesContent.classList.toggle("show-multi-notes-content");

    const webClipperNotesText  = document.getElementById("save-web-clipper");
    webClipperNotesText.classList.toggle("show-web-clipper-text");

    const webclippermultinotes = document.getElementById("web-clipper-notes");
    webclippermultinotes.classList.toggle("create-notes");

    const webClipperMultiNotesContent = document.getElementById("web-clipper-content");
    webClipperMultiNotesContent.classList.toggle("show-multi-notes-content");

    const webClipperToggleNotes = document.getElementById("toggle-web-clipper");
    webClipperToggleNotes.classList.toggle("toggle-Notes");

    webClipperNotesText.classList.remove("show-web-clipper-text");
    webclippermultinotes.classList.remove("create-notes");
    webClipperMultiNotesContent.classList.remove("show-multi-notes-content");

    const noteLockNotesText  = document.getElementById("save-note-lock");
    noteLockNotesText.classList.toggle("show-note-lock-text");

    const noteLockmultinotes = document.getElementById("note-lock-notes");
    noteLockmultinotes.classList.toggle("create-notes");

    const noteLockToggleNotes = document.getElementById("toggle-note-lock");
    noteLockToggleNotes.classList.toggle("toggle-Notes")

    const noteLockMultiNotesContent = document.getElementById("note-lock-content");
    noteLockMultiNotesContent.classList.toggle("show-multi-notes-content");

    noteLockMultiNotesContent.classList.remove("show-multi-notes-content");
    noteLockmultinotes.classList.remove("create-notes");
    noteLockNotesText.classList.remove("show-note-lock-text");
}


const toggleWebClipper = () =>{
    const webClipperNotesText  = document.getElementById("save-web-clipper");
    webClipperNotesText.classList.toggle("show-web-clipper-text");

    const webclippermultinotes = document.getElementById("web-clipper-notes");
    webclippermultinotes.classList.toggle("create-notes");

    const angleIcon = document.querySelector(".web-clipper-features li i");
    angleIcon.classList.toggle("fa-angle-up");
    angleIcon.classList.toggle('fa-angle-down');

    const webClipperToggleNotes = document.getElementById("toggle-web-clipper");
    webClipperToggleNotes.classList.toggle("toggle-Notes")

    const webClipperMultiNotesContent = document.getElementById("web-clipper-content");
    webClipperMultiNotesContent.classList.toggle("show-multi-notes-content");

    const multiMediaNotesText  = document.getElementById("save-multi-notes");
    multiMediaNotesText.classList.add("show-multi-media-notes-text");

    const multinotes = document.getElementById("multinotes");
    multinotes.classList.toggle("create-notes");

    const multiNotesContent = document.getElementById("multi-notes-content");
    multiNotesContent.classList.toggle("show-multi-notes-content");

    const toggleNotes = document.getElementById("toggle-notes");
    toggleNotes.classList.toggle("toggle-Notes")

    multiMediaNotesText.classList.remove("show-multi-notes-content");
    multinotes.classList.remove("create-notes");
    multiNotesContent.classList.remove("show-multi-notes-content");

    const noteLockNotesText  = document.getElementById("save-note-lock");
    noteLockNotesText.classList.toggle("show-note-lock-text");

    const noteLockmultinotes = document.getElementById("note-lock-notes");
    noteLockmultinotes.classList.toggle("create-notes");

    const noteLockToggleNotes = document.getElementById("toggle-note-lock");
    noteLockToggleNotes.classList.toggle("toggle-Notes");

    const noteLockMultiNotesContent = document.getElementById("note-lock-content");
    noteLockMultiNotesContent.classList.toggle("show-multi-notes-content");

    noteLockMultiNotesContent.classList.remove("show-multi-notes-content");
    noteLockmultinotes.classList.remove("create-notes");
    noteLockNotesText.classList.remove("show-note-lock-text");
}


const toggleNoteLock = () =>{
    const noteLockNotesText  = document.getElementById("save-note-lock");
    noteLockNotesText.classList.toggle("show-note-lock-text");

    const noteLockmultinotes = document.getElementById("note-lock-notes");
    noteLockmultinotes.classList.toggle("create-notes");

    const angleIcon = document.querySelector(".note-lock-features li i");
    angleIcon.classList.toggle("fa-angle-up");
    angleIcon.classList.toggle('fa-angle-down');

    const noteLockToggleNotes = document.getElementById("toggle-note-lock");
    noteLockToggleNotes.classList.toggle("toggle-Notes")

    const noteLockMultiNotesContent = document.getElementById("note-lock-content");
    noteLockMultiNotesContent.classList.toggle("show-multi-notes-content");

    const multiMediaNotesText  = document.getElementById("save-multi-notes");
    multiMediaNotesText.classList.add("show-multi-media-notes-text");

    const multinotes = document.getElementById("multinotes");
    multinotes.classList.toggle("create-notes");

    const multiNotesContent = document.getElementById("multi-notes-content");
    multiNotesContent.classList.toggle("show-multi-notes-content");

    const toggleNotes = document.getElementById("toggle-notes");
    toggleNotes.classList.toggle("toggle-Notes")

    multiMediaNotesText.classList.remove("show-multi-notes-content");
    multinotes.classList.remove("create-notes");
    multiNotesContent.classList.remove("show-multi-notes-content");

    const webClipperNotesText  = document.getElementById("save-web-clipper");
    webClipperNotesText.classList.toggle("show-web-clipper-text");

    const webclippermultinotes = document.getElementById("web-clipper-notes");
    webclippermultinotes.classList.toggle("create-notes");

    const webClipperMultiNotesContent = document.getElementById("web-clipper-content");
    webClipperMultiNotesContent.classList.toggle("show-multi-notes-content");

    const webClipperToggleNotes = document.getElementById("toggle-web-clipper");
    webClipperToggleNotes.classList.toggle("toggle-Notes");

    webClipperNotesText.classList.remove("show-web-clipper-text");
    webclippermultinotes.classList.remove("create-notes");
    webClipperMultiNotesContent.classList.remove("show-multi-notes-content");
}