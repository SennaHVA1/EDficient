        /** creating button click show hide navbar **/
        var togglebtn=document.querySelector(".togglebtn");
        var nav=document.querySelector(".navlinks");
        var links=document.querySelector(".navlinks li");

        togglebtn.addEventListener("click", function(){
            this.classList.toggle("click");
            nav.classList.toggle("open");
        });

        $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// Get the contact form elements
var contactForm = document.getElementById('contactForm');
var contactButton = document.getElementById('openContactForm'); // Target the envelope icon
var closeButton = document.querySelector('.close-btn');

// Show the contact form when the envelope icon is clicked
contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    contactForm.style.display = 'flex'; // Adjust to flex or block based on your layout
});

// Hide the contact form when the close button is clicked
closeButton.addEventListener('click', function() {
    contactForm.style.display = 'none';
});

// Hide the contact form if the user clicks outside the form
window.addEventListener('click', function(event) {
    if (event.target == contactForm) {
        contactForm.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("carouselImage");
    const modalVideo = document.getElementById("carouselVideo");
    const videoSource = document.getElementById("carouselVideoSource");
    const closeModal = document.querySelector(".modal .close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Object to hold different image sets for each gallery image
    const imageSets = {
        "Sports events": [
            'images/Slide 1 - homepage/Sports event/43467118_1985951318118618_5887229767047970816_n-768x432.jpg',
            'images/Slide 1 - homepage/Sports event/83852481-c46a-3e03-8caa-ab6aba427911.jpg',
            'images/Slide 1 - homepage/Sports event/118.jpg',
            'images/Slide 1 - homepage/Sports event/download.jpg'
        ],
        "Customer events": [
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (195).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (201).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (222).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (230).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (257).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (265).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (270).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (279).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (281).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (284).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (292).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (314).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Frankfurt (130).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (12).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (13).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (31).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (68).jpg',


        ],
        "Internal events": [
            'images/Slide 1 - homepage/Internal events/Cargill 20 jarig jubileum (106).jpg',
            'images/Slide 1 - homepage/Internal events/Cargill Mechelen 12-01-2023 (72).JPG',
            'images/Slide 1 - homepage/Internal events/Cargill Mechelen 12-01-2023 (93).JPG',
            'images/Slide 1 - homepage/Internal events/Cargill 20 jarig jubileum (101).png',

        ],
        "Congress events": [
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (120).jpg',
            'images/Slide 1 - homepage/Congress/20170829_081717.jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (87).jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (200).jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (202).jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (206).jpg',
        ],
        "Tradeshows": [
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (24).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (70).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (122).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (195).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (198).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (240).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (326).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill Frankfurt (41).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Frankfurt (75).jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04523.jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04550.jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04754.jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04924.jpg',
            'images/Slide 1 - homepage/Tradeshow/20171123_124642.jpg',
            'images/Slide 1 - homepage/Tradeshow/20171123_124734.jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (21).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (131).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/2025849. Event Dawn Foods Dusseldorf 19-05-2025 copy.mp4',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (54).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (95).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (97).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (107).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (119).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (138).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (139).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (149).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (157).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (158).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (255).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (256).jpg',


        ],
        "Video Animation": [
            '',
        ],
        "Carefree Content": [
            'images/Slide 2 - behind the scenes/IMG-20210128-WA0001.jpg',
            'images/Slide 2 - behind the scenes/FIBI Leadership Summit 2017 (268).jpg',
            'images/Slide 2 - behind the scenes/20180908_122047.jpg',
            'https://github.com/SennaHVA1/EDficient/raw/main/images/Slide%202%20-%20behind%20the%20scenes/timelapse_720p.mp4',
        ]
    };

    let currentImageIndex = 0;
    let currentImageSet = [];

    // Function to update the carousel media (image or video)
    function updateCarouselImage() {
        const currentMedia = currentImageSet[currentImageIndex];
        const isVideo = currentMedia.endsWith('.mov') || currentMedia.endsWith('.mp4'); // Check if it's a video

        if (isVideo) {
            modalImage.style.display = "none"; // Hide the image
            modalVideo.style.display = "block"; // Show the video
            videoSource.src = currentMedia; // Set the video source
            modalVideo.volume = 0.2; // Set volume to 30%
            modalVideo.load(); // Reload the video with the new source
        } else {
            modalVideo.style.display = "none"; // Hide the video
            modalImage.style.display = "block"; // Show the image
            modalImage.src = currentMedia; // Set the image source
        }
    }

    // Open modal and show the corresponding media set for each gallery item clicked
    galleryItems.forEach((item) => {
        item.addEventListener("click", function() {
            const altText = this.alt; // Get the alt text to identify the image set

            // Check if the alt text has a corresponding image set in the object
            if (imageSets[altText]) {
                currentImageSet = imageSets[altText]; // Set the image set based on clicked gallery image
                currentImageIndex = 0; // Start with the first media in the set
                updateCarouselImage(); // Update the modal with the first media
                modal.style.display = "block"; // Show the modal
            }
        });
    });

    // Close modal when 'x' is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when user clicks outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Show previous media
    prevBtn.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentImageSet.length - 1;
        updateCarouselImage();
    });

    // Show next media
    nextBtn.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex < currentImageSet.length - 1) ? currentImageIndex + 1 : 0;
        updateCarouselImage();
    });
});