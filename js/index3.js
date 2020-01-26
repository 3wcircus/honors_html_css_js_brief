// This JavaScript file will hold all of our interactive code we want to use in our web page VERBs!
//
// The JavaScript code below will execute immediately once the JS file gets loaded into HTML
//
// Try to Add an event handler so when the button is clicked the image display will be toggled
try {
    // Get the Button element we want to listen for clicks from using element ID
    let el_ref_to_show_hide_button = document.getElementById('show_hide_btn');
    // Get the image element we want to show or hide using element ID
    let el_ref_to_image_so_we_can_muck_with_it = document.getElementById('article_image');

    // Add an event listener function that will be called when the button is clicked
    el_ref_to_show_hide_button.addEventListener('click', ev => {
        // If 'display' equal to 'none' it's hidden so reset the display property so the element shows up
        if (el_ref_to_image_so_we_can_muck_with_it.style.getPropertyValue('display') === "none") {
            // el_ref_to_image_so_we_can_muck_with_it.style.display = "";
            el_ref_to_image_so_we_can_muck_with_it.style.setProperty('display','initial');
        } else {
            // Image is currently visible, so let's hide it
            el_ref_to_image_so_we_can_muck_with_it.style.setProperty('display','none');
        }
    })
} catch (oops) {
    alert(`Oops! I couldn't find the image in the web page! Exception ${oops}`);
}
