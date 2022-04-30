function getEle(id) {
  return document.getElementById(id);
}

var services = new Services();

function getListTeacher() {
  getEle("loading").style.display = "block";
  let promise = services.fetchData();
  promise
    .then((res) => renderHTML(res.data))
    .catch((err) => console.log(err))
    .finally(() => (getEle("loading").style.display = "none"));
}

getListTeacher();

function renderHTML(data) {
  console.log(data);
  var content = "";
  for (let i = 0; i < data.length; i++) {
    let teacher = data[i];
    let { hoTen, ngonNgu, hinhAnh, moTa } = teacher;
    content += ` 
      <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 wow animate__animated animate__fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
          <div class="card">
              <div class="card-img-wrap">
                  <img src="./images/${hinhAnh}" alt="" />
              </div>
              <div class="card-body">
                  <h5 class="card-country">${ngonNgu}</h5>
                  <h3 class="card-name">${hoTen}</h3>
                  <p class="card-text">${moTa}</p>
              </div>
          </div>
      </div>`;
  }
  getEle("teacher-list").innerHTML = content;
}
