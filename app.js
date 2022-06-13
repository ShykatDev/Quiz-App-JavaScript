const cancel = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");
const loginForm = document.querySelector(".loginForm");
const logBtn = document.querySelector(".logBtn");
const logSub = document.querySelector(".submit");
const userName = document.querySelector(".firstName");
const userName2 = document.querySelector(".lastName");

const user = document.querySelector(".user");
const userN = document.querySelector(".userN");

const noquestion = document.querySelector(".noQues");
const question = document.querySelector(".questions");
const check = document.querySelector(".check");

const options = document.querySelectorAll(".visiblePart");
const wc_ans = document.querySelectorAll(".answers");

const wrong1 = document.querySelector(".w1");
const wrong2 = document.querySelector(".w2");
const wrong3 = document.querySelector(".w3");
const wrong4 = document.querySelector(".w4");
const wrong5 = document.querySelector(".w5");
const wrong6 = document.querySelector(".w6");
const wrong7 = document.querySelector(".w7");
const wrong8 = document.querySelector(".w8");
const wrong9 = document.querySelector(".w9");
const wrong10 = document.querySelector(".w10");
const wrong11 = document.querySelector(".w11");

const correct1 = document.querySelector(".c1");
const correct2 = document.querySelector(".c2");
const correct3 = document.querySelector(".c3");
const correct4 = document.querySelector(".c4");
const correct5 = document.querySelector(".c5");
const correct6 = document.querySelector(".c6");
const correct7 = document.querySelector(".c7");
const correct8 = document.querySelector(".c8");
const correct9 = document.querySelector(".c9");
const correct10 = document.querySelector(".c10");
const correct11 = document.querySelector(".c11");

//Questions------------------------------------

const ques1 = document.querySelector(".ques1");
const q1o1 = document.querySelector(".q1op1");
const q1o2 = document.querySelector(".q1op2");
const q1o3 = document.querySelector(".q1op3");
const q1o4 = document.querySelector(".q1op4");

const ques2 = document.querySelector(".ques2");
const q2o1 = document.querySelector(".q2op1");
const q2o2 = document.querySelector(".q2op2");
const q2o3 = document.querySelector(".q2op3");
const q2o4 = document.querySelector(".q2op4");

const ques3 = document.querySelector(".ques3");
const q3o1 = document.querySelector(".q3op1");
const q3o2 = document.querySelector(".q3op2");
const q3o3 = document.querySelector(".q3op3");
const q3o4 = document.querySelector(".q3op4");

const ques4 = document.querySelector(".ques4");
const q4o1 = document.querySelector(".q4op1");
const q4o2 = document.querySelector(".q4op2");
const q4o3 = document.querySelector(".q4op3");
const q4o4 = document.querySelector(".q4op4");

const ques5 = document.querySelector(".ques5");
const q5o1 = document.querySelector(".q5op1");
const q5o2 = document.querySelector(".q5op2");
const q5o3 = document.querySelector(".q5op3");
const q5o4 = document.querySelector(".q5op4");

const ques6 = document.querySelector(".ques6");
const q6o1 = document.querySelector(".q6op1");
const q6o2 = document.querySelector(".q6op2");
const q6o3 = document.querySelector(".q6op3");
const q6o4 = document.querySelector(".q6op4");

const ques7 = document.querySelector(".ques7");
const q7o1 = document.querySelector(".q7op1");
const q7o2 = document.querySelector(".q7op2");
const q7o3 = document.querySelector(".q7op3");
const q7o4 = document.querySelector(".q7op4");

const ques8 = document.querySelector(".ques8");
const q8o1 = document.querySelector(".q8op1");
const q8o2 = document.querySelector(".q8op2");
const q8o3 = document.querySelector(".q8op3");
const q8o4 = document.querySelector(".q8op4");

const ques9 = document.querySelector(".ques9");
const q9o1 = document.querySelector(".q9op1");
const q9o2 = document.querySelector(".q9op2");
const q9o3 = document.querySelector(".q9op3");
const q9o4 = document.querySelector(".q9op4");

const ques10 = document.querySelector(".ques10");
const q10o1 = document.querySelector(".q10op1");
const q10o2 = document.querySelector(".q10op2");
const q10o3 = document.querySelector(".q10op3");
const q10o4 = document.querySelector(".q10op4");

const ques11 = document.querySelector(".ques11");
const q11o1 = document.querySelector(".q11op1");
const q11o2 = document.querySelector(".q11op2");
const q11o3 = document.querySelector(".q11op3");
const q11o4 = document.querySelector(".q11op4");

//User inputs ans:

const uinp = document.querySelectorAll("input");

const uinp1 = document.querySelector(".userInp1");
const uinp2 = document.querySelector(".userInp2");
const uinp3 = document.querySelector(".userInp3");
const uinp4 = document.querySelector(".userInp4");
const uinp5 = document.querySelector(".userInp5");
const uinp6 = document.querySelector(".userInp6");
const uinp7 = document.querySelector(".userInp7");
const uinp8 = document.querySelector(".userInp8");
const uinp9 = document.querySelector(".userInp9");
const uinp10 = document.querySelector(".userInp10");
const uinp11 = document.querySelector(".userInp11");

const sbtn1 = document.querySelector(".sbt1");
const sbtn2 = document.querySelector(".sbt2");
const sbtn3 = document.querySelector(".sbt3");
const sbtn4 = document.querySelector(".sbt4");
const sbtn5 = document.querySelector(".sbt5");
const sbtn6 = document.querySelector(".sbt6");
const sbtn7 = document.querySelector(".sbt7");
const sbtn8 = document.querySelector(".sbt8");
const sbtn9 = document.querySelector(".sbt9");
const sbtn10 = document.querySelector(".sbt10");
const sbtn11 = document.querySelector(".sbt11");

const hideFunc = () => {
  overlay.classList.add("hide");
  loginForm.classList.add("hide");
};

logBtn.addEventListener("click", () => {
  overlay.classList.remove("hide");
  loginForm.classList.remove("hide");

  noquestion.classList.remove("hide");
  question.classList.add("hide");
  check.classList.add("hide");
  userN.textContent = "";

  for (const alluinp of uinp) {
    alluinp.value = "";
    alluinp.style.backgroundColor = "rgba(0, 70, 21, 0.233)";
  }
});

cancel.addEventListener("click", () => {
  hideFunc();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    hideFunc();
  }
});

logSub.addEventListener("click", () => {
  if (userName.value == "" && userName2.value == "") {
    alert("Please insert valid inputs!");
  } else if (userName.value && userName2.value) {
    const fnam = userName.value.toUpperCase();
    const lnam = userName2.value.toUpperCase();

    hideFunc();
    userN.classList.remove("hide");
    userN.textContent = `'${fnam} ${lnam}'`;
    userName.value = "";
    userName2.value = "";

    logBtn.innerHTML = "Logout";

    noquestion.classList.add("hide");
    question.classList.remove("hide");
    check.classList.remove("hide");
  } else {
    console.log("nothing.........");
  }
});

const question1 = new Map([
  ["ques", "Which century is this?"],
  [1, "1. 10th"],
  [2, "2. 19th"],
  [3, "3. 20th"],
  [4, "4. 21th"],
  ["correct", 4],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question2 = new Map([
  ["ques", "What tool need to create stracture of an website?"],
  [1, "1. CSS"],
  [2, "2. HTML"],
  [3, "3. JavaScript"],
  [4, "4. C++"],
  ["correct", 2],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question3 = new Map([
  ["ques", "What is the capital city of Bangladesh?"],
  [1, "1. Dhaka"],
  [2, "2. Kumilla"],
  [3, "3. Barishal"],
  [4, "4. Natore"],
  ["correct", 1],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question4 = new Map([
  ["ques", "At which class we give SSC test?"],
  [1, "1. Class 5"],
  [2, "2. Class 8"],
  [3, "3. Class 10"],
  [4, "4. Class 12"],
  ["correct", 3],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question5 = new Map([
  ["ques", "How many months are in a Year?"],
  [1, "1. 11 months"],
  [2, "2. 8 months"],
  [3, "3. 12 months"],
  [4, "4. 14 months"],
  ["correct", 3],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question6 = new Map([
  ["ques", "How many colors are in a Rainbow?"],
  [1, "1. 3 color"],
  [2, "2. 5 color"],
  [3, "3. 7 color"],
  [4, "4. 10 color"],
  ["correct", 3],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question7 = new Map([
  ["ques", "Which country have London city?"],
  [1, "1. Canada"],
  [2, "2. USA"],
  [3, "3. Bangladesh"],
  [4, "4. India"],
  ["correct", 2],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question8 = new Map([
  ["ques", "What tools we used for design a website?"],
  [1, "1. JavaScript"],
  [2, "2. CSS"],
  [3, "3. HTML"],
  [4, "4. NodeJs"],
  ["correct", 2],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question9 = new Map([
  ["ques", "Which character have GOD power in Avenger?"],
  [1, "1. Ironman"],
  [2, "2. Captain America"],
  [3, "3. Hulk"],
  [4, "4. Thor"],
  ["correct", 4],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question10 = new Map([
  ["ques", "What language we use for Backend Development?"],
  [1, "1. PHP"],
  [2, "2. CSS"],
  [3, "3. HTML"],
  [4, "4. Bootstrap"],
  ["correct", 1],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

const question11 = new Map([
  ["ques", "Which website is this?"],
  [1, "1. Game website"],
  [2, "2. Question Ans Website"],
  [3, "3. Company Website"],
  [4, "4. Booking Website"],
  ["correct", 2],
  [true, "Correct Ans ✅"],
  [false, "Wrong Ans ❌"],
]);

//Create questions as per the MAP Values

ques1.textContent = question1.get("ques");
q1o1.textContent = question1.get(1);
q1o2.textContent = question1.get(2);
q1o3.textContent = question1.get(3);
q1o4.textContent = question1.get(4);

ques2.textContent = question2.get("ques");
q2o1.textContent = question2.get(1);
q2o2.textContent = question2.get(2);
q2o3.textContent = question2.get(3);
q2o4.textContent = question2.get(4);

ques3.textContent = question3.get("ques");
q3o1.textContent = question3.get(1);
q3o2.textContent = question3.get(2);
q3o3.textContent = question3.get(3);
q3o4.textContent = question3.get(4);

ques4.textContent = question4.get("ques");
q4o1.textContent = question4.get(1);
q4o2.textContent = question4.get(2);
q4o3.textContent = question4.get(3);
q4o4.textContent = question4.get(4);

ques5.textContent = question5.get("ques");
q5o1.textContent = question5.get(1);
q5o2.textContent = question5.get(2);
q5o3.textContent = question5.get(3);
q5o4.textContent = question5.get(4);

ques6.textContent = question6.get("ques");
q6o1.textContent = question6.get(1);
q6o2.textContent = question6.get(2);
q6o3.textContent = question6.get(3);
q6o4.textContent = question6.get(4);

ques7.textContent = question7.get("ques");
q7o1.textContent = question7.get(1);
q7o2.textContent = question7.get(2);
q7o3.textContent = question7.get(3);
q7o4.textContent = question7.get(4);

ques8.textContent = question8.get("ques");
q8o1.textContent = question8.get(1);
q8o2.textContent = question8.get(2);
q8o3.textContent = question8.get(3);
q8o4.textContent = question8.get(4);

ques9.textContent = question9.get("ques");
q9o1.textContent = question9.get(1);
q9o2.textContent = question9.get(2);
q9o3.textContent = question9.get(3);
q9o4.textContent = question9.get(4);

ques10.textContent = question10.get("ques");
q10o1.textContent = question10.get(1);
q10o2.textContent = question10.get(2);
q10o3.textContent = question10.get(3);
q10o4.textContent = question10.get(4);

ques11.textContent = question11.get("ques");
q11o1.textContent = question11.get(1);
q11o2.textContent = question11.get(2);
q11o3.textContent = question11.get(3);
q11o4.textContent = question11.get(4);

let val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  val7,
  val8,
  val9,
  val10,
  val11,
  ans1,
  ans2,
  ans3,
  ans4,
  ans5,
  ans6,
  ans7,
  ans8,
  ans9,
  ans10,
  ans11;

let totalCorrect = 0;

const corrCount = function (w, x) {
  if (w.get("correct") === Number(x.value)) {
    totalCorrect++;
  }
};

sbtn1.addEventListener("click", () => {
  val1 = uinp1.value == "" ? "none" : uinp1.value;
  ans1 = question1.get(question1.get("correct") === Number(uinp1.value));

  uinp1.setAttribute("disabled", "");
  uinp1.style.backgroundColor = "#283618";

  corrCount(question1, uinp1);
});

sbtn2.addEventListener("click", () => {
  val2 = uinp2.value == "" ? "none" : uinp2.value;
  ans2 = question2.get(question2.get("correct") === Number(uinp2.value));

  uinp2.setAttribute("disabled", "");
  uinp2.style.backgroundColor = "#283618";

  corrCount(question2, uinp2);
});

sbtn3.addEventListener("click", () => {
  val3 = uinp3.value == "" ? "none" : uinp3.value;
  ans3 = question3.get(question3.get("correct") === Number(uinp3.value));

  uinp3.setAttribute("disabled", "");
  uinp3.style.backgroundColor = "#283618";

  corrCount(question3, uinp3);
});

sbtn4.addEventListener("click", () => {
  val4 = uinp4.value == "" ? "none" : uinp4.value;
  ans4 = question1.get(question4.get("correct") === Number(uinp4.value));

  uinp4.setAttribute("disabled", "");
  uinp4.style.backgroundColor = "#283618";

  corrCount(question4, uinp4);
});

sbtn5.addEventListener("click", () => {
  val5 = uinp5.value == "" ? "none" : uinp5.value;
  ans5 = question5.get(question5.get("correct") === Number(uinp5.value));

  uinp5.setAttribute("disabled", "");
  uinp5.style.backgroundColor = "#283618";

  corrCount(question5, uinp5);
});

sbtn6.addEventListener("click", () => {
  val6 = uinp6.value == "" ? "none" : uinp6.value;
  ans6 = question6.get(question6.get("correct") === Number(uinp6.value));

  uinp6.setAttribute("disabled", "");
  uinp6.style.backgroundColor = "#283618";

  corrCount(question6, uinp6);
});

sbtn7.addEventListener("click", () => {
  val7 = uinp7.value == "" ? "none" : uinp7.value;
  ans7 = question7.get(question7.get("correct") === Number(uinp7.value));

  uinp7.setAttribute("disabled", "");
  uinp7.style.backgroundColor = "#283618";

  corrCount(question7, uinp7);
});

sbtn8.addEventListener("click", () => {
  val8 = uinp8.value == "" ? "none" : uinp8.value;
  ans8 = question8.get(question8.get("correct") === Number(uinp8.value));

  uinp8.setAttribute("disabled", "");
  uinp8.style.backgroundColor = "#283618";

  corrCount(question8, uinp8);
});

sbtn9.addEventListener("click", () => {
  val9 = uinp9.value == "" ? "none" : uinp9.value;
  ans9 = question9.get(question9.get("correct") === Number(uinp9.value));

  uinp9.setAttribute("disabled", "");
  uinp9.style.backgroundColor = "#283618";

  corrCount(question9, uinp9);
});

sbtn10.addEventListener("click", () => {
  val10 = uinp10.value == "" ? "none" : uinp10.value;
  ans10 = question10.get(question10.get("correct") === Number(uinp10.value));

  uinp10.setAttribute("disabled", "");
  uinp10.style.backgroundColor = "#283618";

  corrCount(question10, uinp10);
});

sbtn11.addEventListener("click", () => {
  val11 = uinp11.value == "" ? "none" : uinp11.value;
  ans11 = question11.get(question11.get("correct") === Number(uinp11.value));

  uinp11.setAttribute("disabled", "");
  uinp11.style.backgroundColor = "#283618";

  corrCount(question11, uinp11);
});

check.addEventListener("click", () => {
  for (const wc of wc_ans) {
    wc.classList.remove("hide");
  }

  for (const opt of options) {
    opt.classList.add("hide");
  }

  ques1.textContent = `${ans1}`;
  wrong1.textContent = `Your ans: ${question1.get(Number(uinp1.value))}`;
  correct1.textContent = `Correct ans: ${question1.get(
    question1.get("correct")
  )}`;

  ques2.textContent = `${ans2}`;
  wrong2.textContent = `Your ans: ${question2.get(Number(uinp2.value))}`;
  correct2.textContent = `Correct ans: ${question2.get(
    question2.get("correct")
  )}`;

  ques3.textContent = `${ans3}`;
  wrong3.textContent = `Your ans: ${question3.get(Number(uinp3.value))}`;
  correct3.textContent = `Correct ans: ${question3.get(
    question3.get("correct")
  )}`;

  ques4.textContent = `${ans4}`;
  wrong4.textContent = `Your ans: ${question4.get(Number(uinp4.value))}`;
  correct4.textContent = `Correct ans: ${question4.get(
    question4.get("correct")
  )}`;

  ques5.textContent = `${ans5}`;
  wrong5.textContent = `Your ans: ${question5.get(Number(uinp5.value))}`;
  correct5.textContent = `Correct ans: ${question5.get(
    question5.get("correct")
  )}`;

  ques6.textContent = `${ans6}`;
  wrong6.textContent = `Your ans: ${question6.get(Number(uinp6.value))}`;
  correct6.textContent = `Correct ans: ${question6.get(
    question6.get("correct")
  )}`;

  ques7.textContent = `${ans7}`;
  wrong7.textContent = `Your ans: ${question7.get(Number(uinp7.value))}`;
  correct7.textContent = `Correct ans: ${question7.get(
    question7.get("correct")
  )}`;

  ques8.textContent = `${ans8}`;
  wrong8.textContent = `Your ans: ${question8.get(Number(uinp8.value))}`;
  correct8.textContent = `Correct ans: ${question8.get(
    question8.get("correct")
  )}`;

  ques9.textContent = `${ans9}`;
  wrong9.textContent = `Your ans: ${question9.get(Number(uinp9.value))}`;
  correct9.textContent = `Correct ans: ${question9.get(
    question9.get("correct")
  )}`;

  ques10.textContent = `${ans10}`;
  wrong10.textContent = `Your ans: ${question10.get(Number(uinp10.value))}`;
  correct10.textContent = `Correct ans: ${question10.get(
    question10.get("correct")
  )}`;

  ques11.textContent = `${ans11}`;
  wrong11.textContent = `Your ans: ${question11.get(Number(uinp11.value))}`;
  correct11.textContent = `Correct ans: ${question11.get(
    question11.get("correct")
  )}`;

  const score = document.querySelector(".logScore");
  score.classList.remove("hide");

    if(totalCorrect==11){
        score.textContent = `${totalCorrect}/11 - Ummmm! You did great 👌`;
    }
    else if(totalCorrect>6 && totalCorrect<11){
        score.textContent = `${totalCorrect}/11 - Not Bad! Keep trying 🍁`;
    }
    else{
        score.textContent = `${totalCorrect}/11 - What! Are you real? 😒`;
    }
});
