//changes value based on toggle
function getValue() {
    if (document.getElementById('togBtn').checked) {
      console.log("Checked");
      document.getElementById('togBtn').setAttribute("value", "0");
  
    } else {
      console.log("Not Checked");
      document.getElementById('togBtn').setAttribute("value", "1");
    }
    console.log(document.getElementById('togBtn').getAttribute("value"));
  
  }
//Function that executes on mode change
  const bgcolor=()=>{
    document.getElementById("clock-container").style.backgroundColor = 'white';
    document.getElementById("clock-container").style.color = 'black';
    document.getElementById("hour-names").style.color = 'black';
    document.getElementById("clock-container").style.borderColor = "#12E195";
    document.getElementById("digital-time").style.borderColor = "#1F51FF";
    document.getElementById("hour-tick").style.backgroundColor =`#FF321A`;
    document.getElementById("minute-tick").style.backgroundColor =`#72076E`;
    document.getElementById("second-tick").style.backgroundColor =`#BE0357`;
    document.getElementById("center-dot").style.backgroundColor = `#220070`;


  };

//Event Listener that works on each toggle time
document.getElementById("togBtn").addEventListener("change",()=>{
    if(document.getElementById("togBtn").value==0){
        bgcolor();
    }else if(document.getElementById("togBtn").value==1){
        document.getElementById("clock-container").style.backgroundColor = null;
        document.getElementById("clock-container").style.color = null;
        document.getElementById("hour-names").style.color = null;
        document.getElementById("clock-container").style.borderColor = null;
        document.getElementById("hour-tick").style.backgroundColor =null;
        document.getElementById("minute-tick").style.backgroundColor =null;
        document.getElementById("second-tick").style.backgroundColor =null;
        document.getElementById("center-dot").style.backgroundColor = null;
    }
});