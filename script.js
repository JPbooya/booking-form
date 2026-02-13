const form = document.getElementById("booking-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  const destination = document.getElementById("destination").value;
  const date = document.getElementById("datename").value;
  const numTravel = document.getElementById("numtravel").value;

  // clears error 
  document.getElementById("err-desitnation").style.display = "none";
  document.getElementById("err-date").style.display = "none";
  document.getElementById("err-travel").style.display = "none";

  if (destination === "none") {
    document.getElementById("err-desitnation").style.display = "inline";
    isValid = false;
  }

  if (date.trim() === '' ) {
    document.getElementById("err-date").style.display = "inline";
    isValid = false;
  }

  if (numTravel.trim() === '') {
    document.getElementById("err-travel").style.display = "inline";
    isValid = false;
  }

  if (isValid) {
    console.log("Form submitted");
    form.submit();
  }

});