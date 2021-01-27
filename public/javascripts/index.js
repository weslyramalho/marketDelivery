async function downloadImageFromUrl(url) {    
  const xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open('GET', url, true);
  xmlHTTP.responseType = 'blob';
  const imageBlob = await new Promise((resolve, reject) => {
    xmlHTTP.onload = e => xmlHTTP.status >= 200 && xmlHTTP.status < 300 && xmlHTTP.response.type.startsWith('image/') ? resolve(xmlHTTP.response) : reject(Error(`wrong status or type: ${xmlHTTP.status}/${xmlHTTP.response.type}`));
    xmlHTTP.onerror = reject;
    xmlHTTP.send();
  });
  return blobToDataUrl(imageBlob);
}

function blobToDataUrl(blob) { return new Promise(resolve => {
  const reader = new FileReader();    
  reader.onload = e => resolve(e.target.result);
  reader.readAsDataURL(blob);
})}