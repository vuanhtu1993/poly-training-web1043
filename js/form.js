// Khai bao DOM
var form = document.querySelector("#form");
var table = document.querySelector("#app3");

var fields = ["name", "ass1", "ass2", "baove"];

// Validate function
function validate() {
    var error = false;
    var data = {};
    for (var i = 0; i < fields.length; i++) {
        var errorField = document.querySelector(".error-" + fields[i]);
        // reset
        errorField.innerHTML = "";
        var field = document.querySelector("#" + fields[i]);
        // Validate
        if (field.value == "") {
            errorField.innerHTML = "Trường dữ liệu bắt buộc";
            error = true;
        }

        if (fields[i] == "ass1" || fields[i] == "ass2" || fields[i] == "baove") {
            if (field.value > 10 || field.value < 0) {
                errorField.innerHTML = "Vui lòng nhập điểm từ 0 đến 10";
                error = true;
            }
        }
        data[fields[i]] = field.value;
    }
    if (!error) {
        return data;
    }
    return false;
}

// Array data
var csdl = [{ name: "tuva9", ass1: 5, ass2: 5, baove: 3 }];

// Render function
function render() {
    // Show data
    var content = "";
    for (var i = 0; i < csdl.length; i++) {
        content =
            content +
            `
    <tr>
      <td>${csdl[i].name}</td>
      <td>${csdl[i].ass1}</td>
      <td>${csdl[i].ass2}</td>
      <td>${csdl[i].baove}</td>
      <td><button class="delete" data-id="${i}">Xoa</button></td>
    </tr>
    `;
    }
    table.innerHTML = content;
    // Delete sinhvien
    var deleteBtns = document.querySelectorAll(".delete");
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = function () {
            var id = this.dataset.id;
            // Xoa phan tu trong mang
            csdl.splice(id, 1);
            render();
        };
    }
}

render();

form.onsubmit = function (e) {
    e.preventDefault();
    var sinhvien = validate();
    if (sinhvien) {
        // them moi 1 phan tu vao mang (them vao csdl)
        csdl.push(sinhvien);
        render();
        form.reset()
    }
};
