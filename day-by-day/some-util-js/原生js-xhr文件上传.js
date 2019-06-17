var xhr = XMLHttpRequest();
xhr.open('PUT',signedUrl,true);
xhr.setRequestHead('content-Type',signedUrlContentType);
xhr.onload = ()=>{
    if(xhr.status===200){

    };
};
xhr.onerror = ()=>{};
xhr.send(file);
xhr.upload.onprogress = (event)=>{
    if(event.lengthComputable){
        var percent = Math.round((event.loaded/event.total)*100);
        console.log(percent);
    }
}