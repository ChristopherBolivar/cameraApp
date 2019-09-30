// function processImage() {
//   // **********************************************
//   // *** Update or verify the following values. ***
//   // **********************************************
//   let subscriptionKey = "ebba0c0814f349459ccea6339f0091e3";
//   let endpoint = 'https://shellhackssos.cognitiveservices.azure.com/'
//   if (!subscriptionKey) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }
//   var uriBase = endpoint + "vision/v2.0/ocr";
//   // Request parameters.
//   var params = {
//       "language": "unk",
//       "detectOrientation": "true",
//   };
//   // Display the image.
 
//   // Perform the REST API call.
//       $.ajax({
//           url: uriBase + "?" + $.param(params),
//           // Request headers.
//           beforeSend: function(jqXHR){
//               jqXHR.setRequestHeader("Content-Type","application/json");
//               jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
//           },
//           type: "POST",
//           // Request body.
//           data: '{"url": ' + '"' + "http://idl.com.ua/i/dl_bag.jpg" + '"}',
//       })
//       .done(function(data) {
//           // Show formatted JSON on webpage.
//           $("#responseTextArea").val(JSON.stringify(data, null, 2));
          
//           data.regions[3].lines.forEach( obj => console.log(obj.words[0].text));
//           console.log(data);
//       })
//       .fail(function(jqXHR, textStatus, errorThrown) {
//           // Display error message.
//           var errorString = (errorThrown === "") ?
//               "Error. " : errorThrown + " (" + jqXHR.status + "): ";
//           errorString += (jqXHR.responseText === "") ? "" :
//               (jQuery.parseJSON(jqXHR.responseText).message) ?
//                   jQuery.parseJSON(jqXHR.responseText).message :
//                   jQuery.parseJSON(jqXHR.responseText).error.message;
//           alert(errorString);
//       });
//     };