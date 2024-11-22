function copyText(id) {
    const input = document.getElementById(id);
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied the text: " + input.value);
}
function saveAsTxt() {
    const filename = document.getElementById('filename').value.trim();
    if (!filename) {
        alert("Please enter a filename.");
        return;
    }

    const data = {
        hcpName: document.getElementById('hcpName').value.trim(),
        npi: document.getElementById('npi').value.trim(),
        taxId: document.getElementById('taxId').value.trim(),
        state: document.getElementById('state').value.trim(),
        email: document.getElementById('email').value.trim(),
        accountName: document.getElementById('accountName').value.trim(),
        conversationId: document.getElementById('conversationId').value.trim(),
        description: document.getElementById('description').value.trim(),
    };

    const textContent = `
HCP Name: ${data.hcpName}
NPI: ${data.npi}
Tax ID: ${data.taxId}
State: ${data.state}
Email Address: ${data.email}
Account Name: ${data.accountName}
Conversation ID: ${data.conversationId}
Description: ${data.description}
`;

    // Save the content in Local Storage
    localStorage.setItem(`${filename}.txt`, textContent);

    // Create and download the file as a .txt
    const blob = new Blob([textContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${filename}.txt`;
    downloadLink.click();

    //alert(`File "${filename}.txt" save to local storage!!!`);
}
