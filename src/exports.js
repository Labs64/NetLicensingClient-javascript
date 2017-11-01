if (typeof module !== 'undefined' && module.exports && NetLicensing) {
    module.exports = function (XMLHttpRequest) {
        NetLicensing.HttpRequest.__setXMLHttpRequest(XMLHttpRequest);
        return NetLicensing;
    };
}