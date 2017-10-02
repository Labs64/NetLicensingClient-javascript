var NetLicensingDemo = function () {
    var context = new NetLicensing.Context().setUsername('demo').setPassword('demo');

    var randomNumber = Math.random().toString(36).slice(2);
    var productNumber = numberWithPrefix("P", randomNumber);
    var productModuleNumber = numberWithPrefix("M", randomNumber);
    var licenseTemplateNumber = numberWithPrefix("E", randomNumber);
    var licenseeNumber = numberWithPrefix("I", randomNumber);
    var licenseNumber = numberWithPrefix("L", randomNumber);

    // region ********* Utilities

    console.log("==> UtilityService");

    var UtilityServicePromise = Promise.resolve()
        .then(function () {
            return NetLicensing.UtilityService.listLicenseTypes(context);
        })
        .then(function (listLicenseTypes) {
            console.log("UtilityService.listLicenseTypes() :", listLicenseTypes);
            return NetLicensing.UtilityService.listLicensingModels(context);
        })
        .then(function (listLicensingModels) {
            console.log("UtilityService.listLicensingModels() :", listLicensingModels);
            return NetLicensing.UtilityService.listCountries(context);
        })
        .then(function (listCountries) {
            console.log("UtilityService.listCountries() :", listCountries);
        })

    // endregion

    // region ********* Product

    var product = new NetLicensing.Product()
        .setNumber(productNumber)
        .setName(numberWithPrefix("Product-", Math.random().toString(36).slice(2)));

    var ProductServicePromise = UtilityServicePromise.then(function () {
            console.log("==> ProductService");

            return NetLicensing.ProductService.create(context, product)
                .then(function (createdProduct) {
                    console.log("ProductService.create() :", createdProduct);
                    return NetLicensing.ProductService.get(context, createdProduct.getNumber());
                })
                .then(function (getProduct) {
                    console.log("ProductService.get() :", getProduct);
                    var listProducts = NetLicensing.ProductService.list(context);
                    return getProduct;
                })
                .then(function (listProducts) {
                    console.log("ProductService.list() :", listProducts);
                    console.log("Product.setLicenseeSecretMode() :", NetLicensing.Product.LICENSEE_SECRET_MODE_PREDEFINED);
                    product.setProperty("Updated Property", "Property Value");
                    product.setLicenseeSecretMode(NetLicensing.Product.LICENSEE_SECRET_MODE_PREDEFINED);
                    return NetLicensing.ProductService.update(context, product.getNumber(), product)
                })
                .then(function (updatedProduct) {
                    console.log("ProductService.update() :", updatedProduct);
                    return NetLicensing.ProductService.delete(context, productNumber, true);
                })
                .then(function () {
                    console.log("ProductService.delete()");
                    var listProducts = NetLicensing.ProductService.list(context);
                })
                .then(function (listProducts) {
                    console.log("ProductService.list() :", listProducts);
                    // Recreate Product for later use
                    return NetLicensing.ProductService.create(context, product);
                })
                .then(function (createdProduct) {
                    console.log("ProductService.create() :", createdProduct);
                    return createdProduct;
                });
        });

    // endregion

    // region ********* ProductModule

    var productModule = new NetLicensing.ProductModule()
        .setNumber(productModuleNumber)
        .setName(numberWithPrefix("ProductModule-", Math.random().toString(36).slice(2)))
        .setLicensingModel(NetLicensing.ProductModule.LICENSING_MODEL_TRY_AND_BUY);

    var ProductModuleServicePromise = ProductServicePromise.then(function (createdProduct) {
        console.log("==> ProductModuleService");
        return NetLicensing.ProductModuleService.create(context, createdProduct.getNumber(), productModule)
            .then(function (createdProductModule) {
                console.log("ProductModuleService.create() :", createdProductModule);
                return NetLicensing.ProductModuleService.get(context, createdProductModule.getNumber());
            })
            .then(function (getProductModule) {
                console.log("ProductModuleService.get() :", getProductModule);
                return NetLicensing.ProductModuleService.list(context);
            })
            .then(function (listProductModules) {
                console.log("ProductModuleService.list() :", listProductModules);
                productModule.setProperty("Updated Property", "Property Value");
                return NetLicensing.ProductModuleService.update(context, productModule.getNumber(), productModule);
            })
            .then(function (updatedProductModule) {
                console.log("ProductModuleService.update() :", updatedProductModule);
                return NetLicensing.ProductModuleService.delete(context, productModuleNumber, true);
            })
            .then(function () {
                console.log("ProductModuleService.delete() :");
                return NetLicensing.ProductModuleService.list(context);
            })
            .then(function (listProductModules) {
                console.log("ProductModuleService.list() :", listProductModules);
                // Recreate ProductModule for later use
                return NetLicensing.ProductModuleService.create(context, productNumber, productModule);
            })
            .then(function (createdProductModule) {
                console.log("ProductModuleService.create() :", productModule);
                return createdProductModule;
            });
    });

    // endregion

    // region ********* LicenseTemplate

    var licenseTemplate = new NetLicensing.LicenseTemplate()
        .setNumber(licenseTemplateNumber)
        .setName(numberWithPrefix("LicenseTemplate-", Math.random().toString(36).slice(2)))
        .setLicenseType(NetLicensing.LicenseTemplate.LICENSE_TYPE_FEATURE)
        .setPrice("12.5")
        .setCurrency("EUR")
        .setAutomatic(false)
        .setHidden(false);

    var LicenseTemplateServicePromise = ProductModuleServicePromise.then(function (createdProductModule) {
        console.log("==> LicenseTemplateService");
        return NetLicensing.LicenseTemplateService.create(context, createdProductModule.getNumber(), licenseTemplate)
            .then(function (createdLicenseTemplate) {
                console.log("LicenseTemplateService.create() :", createdLicenseTemplate);
                return NetLicensing.LicenseTemplateService.get(context, createdLicenseTemplate.getNumber());
            })
            .then(function (getLicenseTemplate) {
                console.log("LicenseTemplateService.get() :", getLicenseTemplate);
                return NetLicensing.LicenseTemplateService.list(context);
            })
            .then(function (listLicenseTemplate) {
                console.log("LicenseTemplateService.list() :", listLicenseTemplate);
                licenseTemplate.setProperty("Updated Property", "Updated Value");
                return NetLicensing.LicenseTemplateService.update(context, licenseTemplateNumber, licenseTemplate);
            })
            .then(function (updatedLicenseTemplate) {
                console.log("LicenseTemplateService.update() :", updatedLicenseTemplate);
                return NetLicensing.LicenseTemplateService.delete(context, updatedLicenseTemplate.getNumber(), true);
            })
            .then(function () {
                console.log("LicenseTemplateService.delete() :");
                return NetLicensing.LicenseTemplateService.list(context);
            })
            .then(function (listLicenseTemplate) {
                console.log("LicenseTemplateService.list() :", listLicenseTemplate);
                // Create LicenseTemplate for later use
                return NetLicensing.LicenseTemplateService.create(context, createdProductModule.getNumber(), licenseTemplate);
            }).then(function (createdLicenseTemplate) {
                console.log("LicenseTemplateService.create() :", createdLicenseTemplate);
                return createdLicenseTemplate;
            })
    })

    // endregion

    // region ********* Licensee

    var licensee = new NetLicensing.Licensee()
        .setNumber(licenseeNumber)
        .setName(licenseeNumber+"na");

    var LicenseeServicePromise = LicenseTemplateServicePromise.then(function (createdLicenseTemplate) {
        console.log("==> LicenseeService");
        return NetLicensing.LicenseeService.create(context, productNumber, licensee)
            .then(function (createdLicensee) {
                console.log("LicenseeService.create() :", createdLicensee);
                return NetLicensing.LicenseeService.get(context, createdLicensee.getNumber());
            })
            .then(function (getLicensee) {
                console.log("LicenseeService.get() :", getLicensee);
                return NetLicensing.LicenseeService.list(context);
            })
            .then(function (listLicensee) {
                console.log("LicenseeService.list() :", listLicensee);

                licensee.setProperty("Updated Property", "Updated Value");
                licensee.setLicenseeSecret(numberWithPrefix("secret", randomNumber));
                return NetLicensing.LicenseeService.update(context, licenseeNumber, licensee);
            })
            .then(function (updatedLicensee) {
                console.log("LicenseeService.update() :", updatedLicensee);
                return NetLicensing.LicenseeService.delete(context, updatedLicensee.getNumber(), true);
            })
            .then(function () {
                console.log("LicenseeService.delete() :");
                return NetLicensing.LicenseeService.list(context);
            })
            .then(function (listLicensees) {
                console.log("LicenseeService.list() :", listLicensees);
                // Create Licensee for later use
                licensee.setLicenseeSecret(numberWithPrefix("secret", randomNumber));
                return NetLicensing.LicenseeService.create(context, productNumber, licensee);
            }).then(function (createdLicensee) {
                console.log("LicenseeService.create() :", createdLicensee);
                return createdLicensee;
            })
    })

    // endregion

    // region ********* License

    var license = new NetLicensing.License()
        .setNumber(licenseNumber);

    var LicenseServicePromise = LicenseeServicePromise.then(function (createdLicensee) {
        console.log("==> LicenseService");
        return NetLicensing.LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license)
            .then(function (createdLicense) {
                console.log("LicenseService.create() :", createdLicense);
                return NetLicensing.LicenseService.get(context, createdLicense.getNumber());
            })
            .then(function (getLicense) {
                console.log("LicenseService.get() :", getLicense);
                return NetLicensing.LicenseService.list(context);
            })
            .then(function (listLicenses) {
                console.log("LicenseService.list() :", listLicenses);
                license.setProperty("Updated Property", "Updated Value");
                return NetLicensing.LicenseService.update(context, licenseNumber, null, license);
            })
            .then(function (updatedLicense) {
                console.log("LicenseService.update() :", updatedLicense);
                return NetLicensing.LicenseService.delete(context, updatedLicense.getNumber(), true);
            })
            .then(function () {
                console.log("LicenseService.delete() :");
                return NetLicensing.LicenseService.list(context);
            })
            .then(function (listLicenses) {
                console.log("LicenseService.list() :", listLicenses);
                // Create License for later use
                return NetLicensing.LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license);
            }).then(function (createdLicense) {
                console.log("LicenseService.create() :", createdLicense);
                return createdLicense;
            })
    })

    // endregion

    // region ********* PaymentMethod

    var PaymentMethodsServicePromise = LicenseServicePromise.then(function () {
        console.log("==> PaymentMethodService");
        return NetLicensing.PaymentMethodService.list(context)
            .then(function (paymentMethods) {
                console.log("PaymentMethodService.list() :", paymentMethods);
                return paymentMethods;
            })
    })

    // endregion

    // region ********* Token
    var token = new NetLicensing.Token()
        .setTokenType("APIKEY");

    var TokenServicePromise = PaymentMethodsServicePromise.then(function () {
        console.log("==> TokenService");

        return NetLicensing.TokenService.create(context, token)
            .then(function (createdToken) {
                console.log("TokenService.create(APIKEY) :", createdToken);
                context.setApiKey(createdToken.getNumber());
                context.setSecurityMode(NetLicensing.Context.APIKEY_IDENTIFICATION);

                token.setTokenType("SHOP");
                token.setLicenseeNumber(licenseeNumber);

                return NetLicensing.TokenService.create(context, token);
            })
            .then(function (shopToken) {
                console.log("TokenService.create(SHOP) :", shopToken);
                context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);
                return [shopToken, NetLicensing.TokenService.list(context, "tokenType=SHOP")];
            })
            .then(function (shopTokenArray) {
                console.log("TokenService.list(SHOP) :", shopTokenArray[1]);
                console.log("TokenService.delete() :");
                return NetLicensing.TokenService.delete(context, shopTokenArray[0].getNumber());
            })
            .then(function (shopTokenDelete) {
                return NetLicensing.TokenService.list(context, "tokenType=SHOP");
            })
            .then(function (shopTokenList) {
                console.log("TokenService.list(SHOP) :", shopTokenList);
                return shopTokenList;
            })
    })

    // endregion

    // region ********* Validate

    var validationParameters = new NetLicensing.ValidationParameters()
        .setProductNumber(productNumber)
        .setLicenseeName(numberWithPrefix("Licensee-", Math.random().toString(36).slice(2)))
        .setLicenseeSecret(numberWithPrefix("secret", randomNumber))
        .setProductModuleValidationParameters(productModuleNumber, {
            key: "paramKey",
            value: "paramValue"
        });


    var ValidationPromise = TokenServicePromise.then(function () {
        console.log("==> Validation");

        return NetLicensing.LicenseeService.validate(context, licenseeNumber, validationParameters)
            .then(function (validationResult) {
                console.log("LicenseeService.validate(APIKEY_IDENTIFICATION) :", validationResult.getValidators());
                context.setSecurityMode(NetLicensing.Context.APIKEY_IDENTIFICATION);
                return NetLicensing.LicenseeService.validate(context, licenseeNumber, validationParameters)
            })
            .then(function (validationResult) {
                context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);
                console.log("LicenseeService.validate(BASIC_AUTHENTICATION) :", validationResult.getValidators());
                return validationResult;
            })
    })

    // endregion

    // region ********* Transfer

    var TransferPromise = ValidationPromise.then(function () {
        console.log("==> Transfer");
        var transferLicensee = new NetLicensing.Licensee()
            .setNumber("TR" + licenseeNumber)
            .setMarkedForTransfer(true);

        return NetLicensing.LicenseeService.create(context, productNumber, transferLicensee)
            .then(function (transferLicensee) {
                console.log("LicenseeService.create(transfer-from) :", transferLicensee);
                var transferLicense = new NetLicensing.License()
                    .setNumber("TR" + licenseNumber);

                return NetLicensing.LicenseService.create(context, transferLicensee.getNumber(),
                    licenseTemplateNumber, null, transferLicense)
            })
            .then(function (newTransferLicense) {
                console.log("LicenseeService.create(transfer-to) :", newTransferLicense);
                return NetLicensing.LicenseeService.transfer(context, licensee.getNumber(), transferLicensee.getNumber());
            })
            .then(function () {
                return NetLicensing.LicenseService.list(context, "licenseeNumber=" + licensee.getNumber());
            })
            .then(function (licenseList) {
                console.log("LicenseeService.list(transfer) :", licenseList);
                return licenseList;
            })
    })

    var TransferWithApiKeyPromise = TransferPromise.then(function () {
        var transferLicenseeWithApiKey = new NetLicensing.Licensee()
            .setNumber("AP" + licenseeNumber)
            .setMarkedForTransfer(true);

        return NetLicensing.LicenseeService.create(context, productNumber, transferLicenseeWithApiKey)
            .then(function (transferLicenseeWithApiKey) {
                console.log("LicenseeService.create(transfer-from) :", transferLicenseeWithApiKey);
                var transferLicenseWithApiKey = new NetLicensing.License()
                    .setNumber("AP" + licenseNumber);

                return NetLicensing.LicenseService.create(context, transferLicenseeWithApiKey.getNumber(),
                    licenseTemplateNumber, null, transferLicenseWithApiKey)
            })
            .then(function (newTransferLicense) {
                console.log("LicenseeService.create(transfer-to) :", newTransferLicense);
                context.setSecurityMode(NetLicensing.Context.APIKEY_IDENTIFICATION);
                return NetLicensing.LicenseeService.transfer(context, licensee.getNumber(), transferLicenseeWithApiKey.getNumber());
            })
            .then(function (newTransferLicense) {
                context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);
                return NetLicensing.LicenseService.list(context, "licenseeNumber=" + licensee.getNumber());
            })
            .then(function (licenseList) {
                console.log("LicenseeService.list(transfer) :", licenseList);
                return licenseList;
            })
    })

    // endregion

    // region ********* CleanUp

    var cleanUp = TransferWithApiKeyPromise.then(function () {
        console.log("All done.");
        return NetLicensing.ProductService.delete(context, productNumber, true);

    })
    // endregion
};


function numberWithPrefix(prefix, number) {
    return prefix.concat(number).concat("-DEMO");
}

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
