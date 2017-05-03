// function to return sequence numbers
function RetnSequenceNo(CurrentSeqName, RetnSeqNo) {
    //get name of sequence to pass as json object
    var SeqData = [{
        oraSeqName: CurrentSeqName
    }];

    $.ajax({
        type: 'POST',
        url: 'http://localhost:46831/api/getSequenceNo',

        //send sequence name as json object
        data: JSON.stringify({ seq: SeqData }),

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        dataprocess: true,

        'success': function (data) {

            $(RetnSeqNo).val(data);

            return (data);

        },
        'error': function (error) {
            alert("Sequence not generated, varify and try again");
        }

    });

};
