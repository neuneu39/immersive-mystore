/*
*DBに登録されているitemsにrequestを送る
*
*@param {}
*@returns {Promise<{name: string, price: string, image: string}>}
*
*/

function getItemInformation() {
  return fetch('http://localhost:8080/api/items')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return json;
    });
}

export default {
  getItemInformation,
}