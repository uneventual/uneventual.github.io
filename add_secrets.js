async function get_everything(age) {
    let out = await fetch("./secrets.html.age");
    let fetch_ab = await out.arrayBuffer();

    let enc_html = new Uint8Array(fetch_ab);
 


    let params = new URLSearchParams(window.location.search); 
    
    let passphrase = params.get("key");

    const d = new age.Decrypter();
    // d.addPassphrase(passphrase);
    d.addIdentity(passphrase);
    const html_uint8 = d.decrypt(enc_html, "uint8array")

    const html = new TextDecoder().decode(html_uint8);

    document.getElementById("secrets").innerHTML = html;
}


age().then((age) => get_everything(age))

