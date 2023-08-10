const app1 = document.querySelector("#app1");
let index = 1

const next = function () {
  showImage(index += 1)
}

const prev = function () {
  showImage(index -= 1)
}

const auto = function () {
  setInterval(() => {
    showImage(index++)
  }, 2000)
}

const showImage = function () {
  console.log(index);
  const html = `
    <div>
      <img class="slides fade" src="../images/image1.jpg"/>
      <img class="slides fade" src="../images/image2.jpg"/>
      <img class="slides fade" src="../images/image3.jpg"/>
      <div>
        <button id="next">Next</button>
        <button id="prev">Prev</button>
        <button id="auto">Auto</button>
      </div>
    </div>
  `;
  app1.innerHTML = html;
  // DOM declaration
  const slides = document.querySelectorAll(".slides")
  const nextBtn = document.querySelector("#next")
  const prevBtn = document.querySelector("#prev")
  const autoBtn = document.querySelector("#auto")
  // Logic
  if (index > slides.length) {
    index = 1
  } else if (index < 1) {
    index = slides.length
  }
  slides[index - 1].style.display = "block"
  // Event
  nextBtn.addEventListener('click', next)
  prevBtn.addEventListener('click', prev)
  autoBtn.addEventListener('click', auto)
};

showImage()
