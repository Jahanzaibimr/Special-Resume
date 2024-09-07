// Enable editing on each section by making it contenteditable
function makeSectionEditable(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.setAttribute('contenteditable', 'true');
        section.style.border = "1px dashed #00c6ff"; // Add a border to indicate it's editable
    }
}
// Function to toggle between edit mode and view mode
function toggleEditMode(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var isEditable = section.getAttribute('contenteditable') === 'true';
        if (isEditable) {
            section.setAttribute('contenteditable', 'false');
            section.style.border = "none"; // Remove the border in view mode
        }
        else {
            section.setAttribute('contenteditable', 'true');
            section.style.border = "1px dashed #00c6ff"; // Add border in edit mode
        }
    }
}
// Initialize buttons for each section
function initEditableSections() {
    var sections = ['summary', 'skills', 'experience', 'education', 'achievements'];
    sections.forEach(function (sectionId) {
        var _a;
        var sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            // Create an edit button for each section
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.style.marginBottom = '10px';
            // Append the button to the section
            (_a = sectionElement.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(editButton, sectionElement);
            // Add event listener to toggle edit mode on button click
            editButton.addEventListener('click', function () {
                toggleEditMode(sectionId);
            });
        }
    });
}
// Call the function to make sections editable
initEditableSections();
