function copyText(id) {
    const input = document.getElementById(id);
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied the text: " + input.value);
}
