var NetLicensingDemo = function () {
    var context = new Netlicensing.Context().setUsername('demo').setPassword('demo');

    var randomNumber = Math.random().toString(36).slice(2);
    var productNumber = numberWithPrefix("P", randomNumber);
    var productModuleNumber = numberWithPrefix("PM", randomNumber);
    var licenseTemplateNumber = numberWithPrefix("LT", randomNumber);
    var licenseeNumber = numberWithPrefix("L", randomNumber);
    var licenseNumber = numberWithPrefix("LC", randomNumber);
    var licenseeName = numberWithPrefix("Licensee ", Math.random().toString(36).slice(2));


    // region ********* Lists

    var listLicenseTypes = Netlicensing.UtilityService.listLicenseTypes(context);
    var listLicensingModels = Netlicensing.UtilityService.listLicensingModels(context);
    var countries = Netlicensing.UtilityService.listCountries(context);
    console.log("License Types:", listLicenseTypes);
    console.log("Licensing Models:", listLicensingModels);
    console.log("Countries:", countries);
    // endregion

    // region ********* Product

    var product = new Netlicensing.Product()
        .setNumber(productNumber)
        .setName("Demo product");

    var ProductServicePromise = Promise.resolve()
        .then(function () {
            return Netlicensing.ProductService.create(context, product)
                .then(function (createdProduct) {
                    console.log("Added product:", createdProduct);
                    return Netlicensing.ProductService.get(context, createdProduct.getNumber());
                })
                .then(function (getProduct) {
                    console.log("Got product:", getProduct);

                    var listProducts = Netlicensing.ProductService.list(context);
                    console.log("Got the following products:", listProducts);
                    return getProduct;
                })
                .then(function (getProduct) {
                    console.log(Netlicensing.Product.LICENSEE_SECRET_MODE_PREDEFINED);
                    getProduct.setProperty("Updated property name", "Updated value");
                    getProduct.setLicenseeSecretMode(Netlicensing.Product.LICENSEE_SECRET_MODE_PREDEFINED);
                    return Netlicensing.ProductService.update(context, getProduct.getNumber(), getProduct)
                })
                .then(function (updatedProduct) {
                    console.log("Updated product:", updatedProduct);
                    return Netlicensing.ProductService.delete(context, productNumber, true);
                })
                .then(function () {
                    console.log("Deleted Product!");
                    var listProducts = Netlicensing.ProductService.list(context);
                    console.log("Got the following products:", listProducts);
                })
                .then(function () {
                    var createdProduct = Netlicensing.ProductService.create(context, product);
                    console.log("Added product again:", createdProduct);
                    return createdProduct;
                })
                .then(function (createdProduct) {
                    var listProducts = Netlicensing.ProductService.list(context);
                    console.log("Got the following products:", listProducts);
                    return createdProduct;
                });
        });
    // endregion

    // region ********* ProductModule

    var productModule = new Netlicensing.ProductModule()
        .setNumber(productModuleNumber)
        .setName("Demo product module")
        .setLicensingModel(Netlicensing.ProductModule.LICENSING_MODEL_TRY_AND_BUY);

    var ProductModuleServicePromise = ProductServicePromise.then(function (createdProduct) {

        return Netlicensing.ProductModuleService.create(context, createdProduct.getNumber(), productModule)
            .then(function (createdProductModule) {
                console.log("Added product module:", createdProductModule);
                return Netlicensing.ProductModuleService.get(context, createdProductModule.getNumber());
            })
            .then(function (getProductModule) {
                console.log("Got product module:", getProductModule);
                var listProductModules = Netlicensing.ProductModuleService.list(context);
                console.log("Got the following product modules:", listProductModules);
                return getProductModule;
            })
            .then(function (getProductModule) {
                getProductModule.setProperty("Updated property name", "Updated property value");
                return Netlicensing.ProductModuleService.update(context, getProductModule.getNumber(), getProductModule);
            })
            .then(function (updatedProductModule) {
                console.log("Updated product module:", updatedProductModule);
                return Netlicensing.ProductModuleService.delete(context, productModuleNumber, true);
            })
            .then(function () {
                console.log("Deleted product module!");
                var listProductModules = Netlicensing.ProductModuleService.list(context);
                console.log("Got the following product modules:", listProductModules);
            })
            .then(function () {
                var createdProductModule = Netlicensing.ProductModuleService.create(context, productNumber, productModule);
                console.log("Added product module again:", createdProductModule);
                return createdProductModule;
            })
            .then(function (createdProductModule) {
                var listProductsModules = Netlicensing.ProductModuleService.list(context);
                console.log("Got the following product modules:", listProductsModules);
                return createdProductModule;
            })
    })
    // endregion

    // region ********* LicenseTemplate

    var licenseTemplate = new Netlicensing.LicenseTemplate()
        .setNumber(licenseTemplateNumber)
        .setName("Demo Evaluation Period")
        .setLicenseType(Netlicensing.LicenseTemplate.LICENSE_TYPE_FEATURE)
        .setPrice("12.5")
        .setCurrency("EUR")
        .setAutomatic(false)
        .setHidden(false);

    var LicenseTemplateServicePromise = ProductModuleServicePromise.then(function (createdProductModule) {
        console.log("Adding license template:", licenseTemplate);

        return Netlicensing.LicenseTemplateService.create(context, createdProductModule.getNumber(), licenseTemplate)
            .then(function (createdLicenseTemplate) {
                console.log("Added license template:", createdLicenseTemplate);
                return Netlicensing.LicenseTemplateService.get(context, createdLicenseTemplate.getNumber());
            })
            .then(function (getLicenseTemplate) {
                console.log("Got licenseTemplate:", getLicenseTemplate);
                var listLicenseTemplate = Netlicensing.LicenseTemplateService.list(context);
                console.log("Got the following license templates:", listLicenseTemplate);
                return getLicenseTemplate;
            })
            .then(function (getLicenseTemplate) {
                getLicenseTemplate.setProperty("Updated property name", "Updated value");
                return Netlicensing.LicenseTemplateService.update(context, licenseTemplateNumber, getLicenseTemplate);
            })
            .then(function (updatedLicenseTemplate) {
                console.log("Updated license template:", updatedLicenseTemplate);
                return Netlicensing.LicenseTemplateService.delete(context, updatedLicenseTemplate.getNumber(), true);
            })
            .then(function () {
                console.log("Deleted license template!");
                var listLicenseTemplate = Netlicensing.LicenseTemplateService.list(context);
                console.log("Got the following license templates:", listLicenseTemplate);
            })
            .then(function () {
                var createdLicenseTemplate = Netlicensing.LicenseTemplateService.create(context, createdProductModule.getNumber(), licenseTemplate);
                console.log("Added license template again:", createdLicenseTemplate);
                return createdLicenseTemplate;
            })
            .then(function (createdLicenseTemplate) {
                var listLicenseTemplate = Netlicensing.LicenseTemplateService.list(context);
                console.log("Got the following license templates:", listLicenseTemplate);
                return createdLicenseTemplate;
            })
    })
    // endregion

    // region ********* Licensee

    var licensee = new Netlicensing.Licensee()
        .setNumber(licenseeNumber);

    var LicenseeServicePromise = LicenseTemplateServicePromise.then(function (createdLicenseTemplate) {

        return Netlicensing.LicenseeService.create(context, productNumber, licensee)
            .then(function (createdLicensee) {
                console.log("Added licensee:", createdLicensee);
                return Netlicensing.LicenseeService.get(context, createdLicensee.getNumber());
            })
            .then(function (getLicensee) {
                console.log("Got the following licensee:", getLicensee);
                var listLicensee = Netlicensing.LicenseeService.list(context);
                console.log("Got the following licensees:", listLicensee);
                return getLicensee;
            })
            .then(function (getLicensee) {
                getLicensee.setProperty("Updated property name", "Updated value");
                getLicensee.setLicenseeSecret(numberWithPrefix("secret", randomNumber));
                return Netlicensing.LicenseeService.update(context, licenseeNumber, getLicensee);
            })
            .then(function (updatedLicensee) {
                console.log("Updated licensee:", updatedLicensee);
                return Netlicensing.LicenseeService.delete(context, updatedLicensee.getNumber(), true);
            })
            .then(function () {
                console.log("Deleted licensee!");
                var listLicensees = Netlicensing.LicenseeService.list(context);
                console.log("Got the following licensees:", listLicensees);
            })
            .then(function () {
                licensee.setLicenseeSecret(numberWithPrefix("secret", randomNumber));
                var createdLicensee = Netlicensing.LicenseeService.create(context, productNumber, licensee);
                console.log("Added licensee again:", createdLicensee);
                return createdLicensee;
            })
            .then(function (createdLicensee) {
                var listLicensees = Netlicensing.LicenseeService.list(context);
                console.log("Got the following licensees:", listLicensees);
                return createdLicensee;
            })
    })
    // endregion

    // region ********* License

    var license = new Netlicensing.License()
        .setNumber(licenseNumber);

    var LicenseServicePromise = LicenseeServicePromise.then(function (createdLicensee) {

        return Netlicensing.LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license)
            .then(function (createdLicense) {
                console.log("Added license:", createdLicense);
                return Netlicensing.LicenseService.get(context, createdLicense.getNumber());
            })
            .then(function (getLicense) {
                console.log("Got the following license:", getLicense);
                var listLicenses = Netlicensing.LicenseService.list(context);
                console.log("Got the following licenses:", listLicenses);
                return getLicense;
            })
            .then(function (getLicense) {
                getLicense.setProperty("Updated property name", "Updated value");
                return Netlicensing.LicenseService.update(context, licenseNumber, null, getLicense);
            })
            .then(function (updatedLicense) {
                console.log("Updated license:", updatedLicense);
                return Netlicensing.LicenseService.delete(context, updatedLicense.getNumber(), true);
            })
            .then(function () {
                console.log("Deleted license!");
                var listLicenses = Netlicensing.LicenseService.list(context);
                console.log("Got the following licenses:", listLicenses);
            })
            .then(function () {
                var createdLicense = Netlicensing.LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license);
                console.log("Added license again:", createdLicense);
                return createdLicense;
            })
            .then(function (createdLicense) {
                var listLicenses = Netlicensing.LicenseService.list(context);
                console.log("Got the following licenses:", listLicenses);
                return createdLicense;
            })
    })
    // endregion

    // region ********* PaymentMethod

    var PaymentMethodsServicePromise = LicenseServicePromise.then(function () {

        return Netlicensing.PaymentMethodService.list(context)
            .then(function (paymentMethods) {
                console.log("Got the following payment methods:", paymentMethods);
                return paymentMethods;
            })
    })
    // endregion

    // region ********* Token

    var token = new Netlicensing.Token()
        .setTokenType("APIKEY");

    var TokenServicePromise = PaymentMethodsServicePromise.then(function () {

        return Netlicensing.TokenService.create(context, token)
            .then(function (createdToken) {
                console.log("Created APIKey:", createdToken);
                context.setApiKey(createdToken.getNumber());
                context.setSecurityMode(Netlicensing.Context.APIKEY_IDENTIFICATION);

                token.setTokenType("SHOP");
                token.setLicenseeNumber(licenseeNumber);

                return Netlicensing.TokenService.create(context, token);
            })
            .then(function (shopToken) {
                console.log("Got the following shop token:", shopToken);
                context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);
                console.log("Got the following shop tokens:", Netlicensing.TokenService.list(context, "tokenType=SHOP"));
                return shopToken;
            })
            .then(function (shopToken) {
                console.log("Delete shop token!");
                return Netlicensing.TokenService.delete(context, shopToken.getNumber());
            })
            .then(function () {
                return console.log("Got the following shop tokens after delete:", Netlicensing.TokenService.list(context, "tokenType=SHOP"));
            })
    })
    // endregion

    // region ********* Validate

    var validationParameters = new Netlicensing.ValidationParameters()
        .setLicenseeSecret(numberWithPrefix("secret", randomNumber))
        .setLicenseeName(licenseeName)
        .setProductNumber(licenseeNumber)
        .setProductModuleValidationParameters(productModuleNumber, {key:"paramKey", value:"paramValue"});

    var ValidationPromise = TokenServicePromise.then(function () {

        return Netlicensing.LicenseeService.validate(context, licenseeNumber, validationParameters)
            .then(function (validationResult) {
                console.log("Validation result for created licensee:", validationResult);
                context.setSecurityMode(Netlicensing.Context.APIKEY_IDENTIFICATION);
                return Netlicensing.LicenseeService.validate(context, licenseeNumber, validationParameters)
            })
            .then(function (validationResult) {
                context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);
                console.log("Validation repeated with APIKey:", validationResult);
                return validationResult;
            })
    })
    // endregion

    // region ********* Transfer

    var TransferPromise = ValidationPromise.then(function () {
        var transferLicensee = new Netlicensing.Licensee()
            .setNumber("TR" + licenseeNumber)
            .setMarkedForTransfer(true);

        return Netlicensing.LicenseeService.create(context, productNumber, transferLicensee)
            .then(function (transferLicensee) {
                console.log("Added transfer licensee:", transferLicensee);
                var transferLicense = new Netlicensing.License()
                    .setNumber("TR" + licenseNumber);

                return Netlicensing.LicenseService.create(context, transferLicensee.getNumber(),
                    licenseTemplateNumber, null, transferLicense)
            })
            .then(function (newTransferLicense) {
                console.log("Added license for transfer:", newTransferLicense);
                return Netlicensing.LicenseeService.transfer(context, licensee.getNumber(), transferLicensee.getNumber());
            })
            .then(function (newTransferLicense) {
                var licenseList = Netlicensing.LicenseService.list(context, "licenseeNumber=" + licensee.getNumber());
                console.log("Got the following licenses after transfer:", licenseList);
                return licenseList;
            })
    })

    var TransferWithApiKeyPromise = TransferPromise.then(function () {
        var transferLicenseeWithApiKey = new Netlicensing.Licensee()
            .setNumber("AP" + licenseeNumber)
            .setMarkedForTransfer(true);

        return Netlicensing.LicenseeService.create(context, productNumber, transferLicenseeWithApiKey)
            .then(function (transferLicenseeWithApiKey) {
                console.log("Added transfer licensee:", transferLicenseeWithApiKey);
                var transferLicenseWithApiKey = new Netlicensing.License()
                    .setNumber("AP" + licenseNumber);

                return Netlicensing.LicenseService.create(context, transferLicenseeWithApiKey.getNumber(),
                    licenseTemplateNumber, null, transferLicenseWithApiKey)
            })
            .then(function (newTransferLicense) {
                console.log("Added license for transfer:", newTransferLicense);

                context.setSecurityMode(Netlicensing.Context.APIKEY_IDENTIFICATION);
                return Netlicensing.LicenseeService.transfer(context, licensee.getNumber(), transferLicenseeWithApiKey.getNumber());
            })
            .then(function (newTransferLicense) {
                context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

                var licenseList = Netlicensing.LicenseService.list(context, "licenseeNumber=" + licensee.getNumber());
                console.log("Got the following licenses after transfer:", licenseList);
                return licenseList;
            })
    })
    // endregion

    // region ********* CleanUp

    var cleanUp = TransferWithApiKeyPromise.then(function () {
        console.log("All done.");
        return Netlicensing.ProductService.delete(context, productNumber, true);
    })
    // endregion
};


function numberWithPrefix(prefix, number) {
    return "DEMO-".concat(prefix).concat(number);
}