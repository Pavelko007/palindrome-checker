document.getElementById("check-btn").addEventListener("click", function () {
  var inputValue = document.getElementById("text-input").value;
  var resultElement = document.getElementById("result");

  if (!inputValue) {
    alert("Please input a value");
    return;
  }
  // Remove non-alphanumeric characters
  var processedInput = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  var isPalindrome =
    processedInput == processedInput.split("").reverse().join("");

  let output;
  if (isPalindrome) {
    output = `${inputValue} is a palindrome`;
  } else {
    output = `${inputValue} is not a palindrome`;
  }
  resultElement.textContent = output;
});
