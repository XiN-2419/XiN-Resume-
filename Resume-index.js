function btncopy() {
    let copytext = document.getElementById("email");
    navigator.clipboard.writeText(copytext.value);
    let copied = document.getElementsByClassName("email-copy");
    copied[0].innerHTML = "已複製!";
}
function copycheck() {
    let copied = document.getElementsByClassName("email-copy");
    copied[0].innerHTML = "複製至剪貼簿";
}

//增加頁數時，單一func會有6處需修改
function nextPic(){
    let page = document.querySelector("#changPic").getAttribute("src");
    if(parseInt(page[7]) < 4){
        document.getElementById("changPic").src = "pic/st-" + (parseInt(page[7])+1) + ".jfif";
        document.querySelector(".pic-page").textContent = parseInt(page[7])+1 + "/4";
        document.getElementById("output-text-"+page[7]).style.display = "none";
        document.getElementById("output-text-"+(parseInt(page[7])+1)).style.display = "block";
    } else if(parseInt(page[7]) == 4){
        document.getElementById("changPic").src = "pic/st-" + (parseInt(page[7])-3) + ".jfif";
        document.querySelector(".pic-page").textContent = parseInt(page[7])-3 + "/4";
        document.getElementById("output-text-"+page[7]).style.display = "none";
        document.getElementById("output-text-"+(parseInt(page[7])-3)).style.display = "block";
    }
  }
  function prePic(){
    let page = document.querySelector("#changPic").getAttribute("src");
    if(parseInt(page[7]) > 1){
        document.getElementById("changPic").src = "pic/st-" + (parseInt(page[7])-1) + ".jfif";
        document.querySelector(".pic-page").textContent = parseInt(page[7])-1 + "/4";
        document.getElementById("output-text-"+page[7]).style.display = "none";
        document.getElementById("output-text-"+(parseInt(page[7])-1)).style.display = "block";
    } else if(parseInt(page[7]) == 1){
        document.getElementById("changPic").src = "pic/st-" + (parseInt(page[7])+3) + ".jfif";
        document.querySelector(".pic-page").textContent = parseInt(page[7])+3 + "/4";
        document.getElementById("output-text-"+page[7]).style.display = "none";
        document.getElementById("output-text-"+(parseInt(page[7])+3)).style.display = "block";
    }
  }


  function jobpop(n){
    let jobcollap = document.getElementsByClassName("job-title");
    if(jobcollap[n].nextElementSibling.style.display == "block"){
      jobcollap[n].nextElementSibling.style.display = "none";
    } else {
      for(let i=0 ; i<jobcollap.length ; i++){
        if(i==n){
          jobcollap[i].nextElementSibling.style.display = "block";
        } else {
          jobcollap[i].nextElementSibling.style.display = "none";
        }
      }
    }
    
  }