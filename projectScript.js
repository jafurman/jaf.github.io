function toggleDescription(documentID) {
    var description = document.getElementById(documentID);
    if (description) {
        description.style.display = (description.style.display === "none" || description.style.display === "") ? "block" : "none";
    } else {
        console.error("Element with ID '" + documentID + "' not found.");
    }
}

