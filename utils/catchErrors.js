function catchError(error,displayError) {
    let errorMsg;
    if (error.response) {
        //the request was made and the server responsed with a status code that is not in the reange of 2xx
        errorMsg = error.response.data;
        console.error("Error response",errorMsg);

        //For cloudinary image uploads
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
        
    }else if(error.request){
        // the request was made, but no response was receivied
        errorMsg = error.request;
        console.error("Error request",errorMsg);
        
    }else{
        //something else happened im making the request that triggered an error
        errorMsg = error.message;
        console.error("Error message",errorMsg);
        
    }
    displayError(errorMsg);
}

export default catchError;