// download(uniqueID)
//Function that prompts the server to send a file to download.
//incomplete code
 var download = function(uniqueID){
    var branch = uniqueID.substring(0,2);
    var subjectCode = uniqueID.substring(0,7);
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
    var response;
    $.ajax({
        url: endpoint,
        type: 'GET',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(result) {
        //
        }
    });

};
