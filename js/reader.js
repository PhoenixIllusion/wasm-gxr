var Reader = window.Reader || {};

Reader.lzma = function (buffer) {
  return new Promise(function(resolve,reject) {
      try {      
        resolve(LZMA.decompress(buffer));
      }catch(e){
        reject(e);
      }
  });
}

Reader.getText = function(address, data) {
    return fetch(address + data).then(function(response) {
      return response.text();
    });
}

Reader.getLZMA = function(address, data) {
    return fetch(address + data).then(function(response) {
      return response.arrayBuffer();
    }).then(function(buffer) {
      return Reader.lzma(new Uint8Array(buffer));
    });
}

Reader.getBinary = function(address, data) {
    return fetch(address + data).then(function(response) {
      return response.arrayBuffer();
    })
};

Reader.getWASM = function(address, data) {
    address += data;
    if(address.endsWith(".lz")) {
      return Reader.getLZMA(address, "");
    } else {
      return Reader.getBinary(address, "");
    }
}

Reader.getJSON = function(address, data) {
    return fetch(address + data).then(function(response) {
      return response.json();
    });
}

Reader.getImage = function(address, data) {
  return new Promise(function(resolve, reject) {
    var ret = new Image();
	  ret.onload = function() {
		  resolve(ret);
	  };
    ret.onerror = function(e) {
      reject(e);
    }
	  ret.src = address + data;
  })
}
