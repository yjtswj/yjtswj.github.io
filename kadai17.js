function searchAddress() {
  let zip = document.querySelector("#zip").value;

  fetch(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`).then(
      response => {
        return response.json();
      }
  ).then(
      json => {
        console.log(json);
        let answer = document.querySelector("#answer");
        if (json.results == null) {
          answer.innerHTML += "<li>見つかりませんでした</li>";
        } else {
          answer.innerHTML += `<li>
            ${json.results[0].address1}
            ${json.results[0].address2}
            ${json.results[0].address3}
            </li>`;
        }
      }
  );
}

