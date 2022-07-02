import qr from 'qrcode'
  
let data = {
    id: 1,
    name: "Temp",
    email: "temp@gmail.com"
};
  
let strData = JSON.stringify(data)
  
qr.toString(strData, {type:'terminal'}, (err, code) => {
    if(err) return console.log("error occurred")
    console.log(code)
});
  
qr.toDataURL(strData, function (err, code) {
    if(err) return console.log("error occurred")
	console.log(code)
})