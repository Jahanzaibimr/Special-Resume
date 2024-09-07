// Enable editing on each section by making it contenteditable
function makeSectionEditable(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.setAttribute('contenteditable', 'true');
    section.style.border = "1px dashed #00c6ff";  // Add a border to indicate it's editable
  }
}

// Function to toggle between edit mode and view mode
function toggleEditMode(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    const isEditable = section.getAttribute('contenteditable') === 'true';
    if (isEditable) {
      section.setAttribute('contenteditable', 'false');
      section.style.border = "none";  // Remove the border in view mode
    } else {
      section.setAttribute('contenteditable', 'true');
      section.style.border = "1px dashed #00c6ff";  // Add border in edit mode
    }
  }
}

// Initialize buttons for each section
function initEditableSections() {
  const sections = ['summary', 'skills', 'experience', 'education', 'achievements'];
  sections.forEach(sectionId => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Create an edit button for each section
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.style.marginBottom = '10px';
      
      // Append the button to the section
      sectionElement.parentElement?.insertBefore(editButton, sectionElement);

      // Add event listener to toggle edit mode on button click
      editButton.addEventListener('click', () => {
        toggleEditMode(sectionId);
      });
    }
  });
}

// Call the function to make sections editable
initEditableSections();
