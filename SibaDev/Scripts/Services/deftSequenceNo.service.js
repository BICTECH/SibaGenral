(function (s, u) {
    s.add({
        deftSequenceNo: function (seqName, success, error) {
            u.get("/api/deftSequenceNo/getSequence/" + seqName, success, error);
        }

    });
})(window.service, window.utility)