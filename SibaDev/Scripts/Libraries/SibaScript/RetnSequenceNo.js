// function to return sequence numbers
function RetnSequenceNo(CurrentSeqName, callback) {
    //
    var SeqNo = "";

    //get name of sequence to pass as json object
    var SeqData = [{
        oraSeqName: CurrentSeqName
    }];

    $.ajax({
        type: 'POST',
        url: '/api/getSequenceNo',

        //send sequence name as json object
        data: JSON.stringify({ seq: SeqData }),

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        dataprocess: true,

        success: function (data) {
            var SeqNo = data;

            callback(data);
            return (data);
        },
       
        'error': function (error) {
            callback(error);
           alert("Sequence not generated, varify and try again");
        }

    });

};

