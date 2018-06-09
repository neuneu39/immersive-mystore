/*
*DBに登録されているitemsにrequestを送る
*
*@param {}
*@returns {Promise<{name: string, price: string, image: string}>}
*
*/

function getItemInformation() {
  const optional = {
    method: 'GET'
  };
  return fetch('/api/items', optional)
    .then(res => res.json());
    // .then(json => {
    //   console.log(json);
    //   return json;
    //});
}

export default {
  getItemInformation,
}