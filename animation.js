window.addEventListener("scroll", function () {
  let heightObj = this.document.getElementById("scrollObj")
  console.log(`${heightObj.clientHeight} ${heightObj.clientHeight} heoght`)

  if (
    pageYOffset > heightObj.offsetTop &&
    this.pageYOffset - heightObj.offsetTop < heightObj.clientHeight - 110
  ) {
    // document.getElementById("showScroll").innerHTML = pageYOffset + "px"
    document.getElementById("fly").style.transform = `translate3d(0px, ${
      this.pageYOffset - heightObj.offsetTop
    }px, 0px)`
  } else if (pageYOffset < heightObj.offsetTop) {
    document.getElementById(
      "fly"
    ).style.transform = `translate3d(0px, 0px, 0px)`
  }
})
