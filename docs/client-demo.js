var NetLicensingDemo = function() {
  var context = new NetLicensing.Context().setUsername('demo').setPassword('demo');

  var randomNumber = Math.random().toString(36).slice(2);
  var productNumber = numberWithPrefix("P", randomNumber);
  var productModuleNumber = numberWithPrefix("M", randomNumber);
  var licenseTemplateNumber = numberWithPrefix("E", randomNumber);
  var licenseeNumber = numberWithPrefix("I", randomNumber);
  var licenseNumber = numberWithPrefix("L", randomNumber);

  // region ********* Utilities

  console.log("==> UtilityService");

  var listLicenseTypes = NetLicensing.UtilityService.listLicenseTypes(context);
  var listLicensingModels = NetLicensing.UtilityService.listLicensingModels(context);
  var countries = NetLicensing.UtilityService.listCountries(context);
  console.log("UtilityService.listLicenseTypes() :", listLicenseTypes);
  console.log("UtilityService.listLicensingModels() :", listLicensingModels);
  console.log("UtilityService.listCountries() :", countries);

  // endregion

  // region ********* Product

  var product = new NetLicensing.Product()
    .setNumber(productNumber)
    .setName(numberWithPrefix("Product-", Math.random().toString(36).slice(2)));

  var ProductServicePromise = Promise.resolve()
    .then(function() {
      console.log("==> ProductService");
      return NetLicensing.ProductService.create(context, product)
        .then(function(createdProduct) {
          console.log("ProductService.create() :", createdProduct);
          return NetLicensing.ProductService.get(context, createdProduct.getNumber());
        })
        .then(function(getProduct) {
          console.log("ProductService.get() :", getProduct);
          var listProducts = NetLicensing.ProductService.list(context);
          console.log("ProductService.list() :", listProducts);
          return getProduct;
        })
        .then(function(getProduct) {
          console.log("Product.setLicenseeSecretMode() :", NetLicensing.Product.LICENSEE_SECRET_MODE_PREDEFINED);
          getProduct.setProperty("Updated Property", "Property Value");
          getProduct.setLicenseeSecretMode(NetLicensing.Product.LICENSEE_SECRET_MODE_PREDEFINED);
          return NetLicensing.ProductService.update(context, getProduct.getNumber(), getProduct)
        })
        .then(function(updatedProduct) {
          console.log("ProductService.update() :", updatedProduct);
          return NetLicensing.ProductService.delete(context, productNumber, true);
        })
        .then(function() {
          console.log("ProductService.delete()");
          var listProducts = NetLicensing.ProductService.list(context);
          console.log("ProductService.list() :", listProducts);
        })
        .then(function() {
          // Recreate Product for later use
          var createdProduct = NetLicensing.ProductService.create(context, product);
          console.log("ProductService.create() :", product);
          return createdProduct;
        });
    });

  // endregion

  // region ********* ProductModule

  var productModule = new NetLicensing.ProductModule()
    .setNumber(productModuleNumber)
    .setName(numberWithPrefix("ProductModule-", Math.random().toString(36).slice(2)))
    .setLicensingModel(NetLicensing.ProductModule.LICENSING_MODEL_TRY_AND_BUY);

  var ProductModuleServicePromise = ProductServicePromise.then(function(createdProduct) {
    console.log("==> ProductModuleService");
    return NetLicensing.ProductModuleService.create(context, createdProduct.getNumber(), productModule)
      .then(function(createdProductModule) {
        console.log("ProductModuleService.create() :", createdProductModule);
        return NetLicensing.ProductModuleService.get(context, createdProductModule.getNumber());
      })
      .then(function(getProductModule) {
        console.log("ProductModuleService.get() :", getProductModule);
        var listProductModules = NetLicensing.ProductModuleService.list(context);
        console.log("ProductModuleService.list() :", listProductModules);
        return getProductModule;
      })
      .then(function(getProductModule) {
        getProductModule.setProperty("Updated Property", "Property Value");
        return NetLicensing.ProductModuleService.update(context, getProductModule.getNumber(), getProductModule);
      })
      .then(function(updatedProductModule) {
        console.log("ProductModuleService.update() :", updatedProductModule);
        return NetLicensing.ProductModuleService.delete(context, productModuleNumber, true);
      })
      .then(function() {
        console.log("ProductModuleService.delete() :");
        var listProductModules = NetLicensing.ProductModuleService.list(context);
        console.log("ProductModuleService.list() :", listProductModules);
      })
      .then(function() {
        // Recreate ProductModule for later use
        var createdProductModule = NetLicensing.ProductModuleService.create(context, productNumber, productModule);
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

  var LicenseTemplateServicePromise = ProductModuleServicePromise.then(function(createdProductModule) {
    console.log("==> LicenseTemplateService");
    return NetLicensing.LicenseTemplateService.create(context, createdProductModule.getNumber(), licenseTemplate)
      .then(function(createdLicenseTemplate) {
        console.log("LicenseTemplateService.create() :", createdLicenseTemplate);
        return NetLicensing.LicenseTemplateService.get(context, createdLicenseTemplate.getNumber());
      })
      .then(function(getLicenseTemplate) {
        console.log("LicenseTemplateService.get() :", getLicenseTemplate);
        var listLicenseTemplate = NetLicensing.LicenseTemplateService.list(context);
        console.log("LicenseTemplateService.list() :", listLicenseTemplate);
        return getLicenseTemplate;
      })
      .then(function(getLicenseTemplate) {
        getLicenseTemplate.setProperty("Updated Property", "Updated Value");
        return NetLicensing.LicenseTemplateService.update(context, licenseTemplateNumber, getLicenseTemplate);
      })
      .then(function(updatedLicenseTemplate) {
        console.log("LicenseTemplateService.update() :", updatedLicenseTemplate);
        return NetLicensing.LicenseTemplateService.delete(context, updatedLicenseTemplate.getNumber(), true);
      })
      .then(function() {
        console.log("LicenseTemplateService.delete() :");
        var listLicenseTemplate = NetLicensing.LicenseTemplateService.list(context);
        console.log("LicenseTemplateService.list() :", listLicenseTemplate);
      })
      .then(function() {
      	// Create LicenseTemplate for later use
        var createdLicenseTemplate = NetLicensing.LicenseTemplateService.create(context, createdProductModule.getNumber(), licenseTemplate);
        console.log("LicenseTemplateService.create() :", createdLicenseTemplate);
        return createdLicenseTemplate;
      })
  })

  // endregion

  // region ********* Licensee

  var licensee = new NetLicensing.Licensee()
    .setNumber(licenseeNumber);

  var LicenseeServicePromise = LicenseTemplateServicePromise.then(function(createdLicenseTemplate) {
    console.log("==> LicenseeService");
    return NetLicensing.LicenseeService.create(context, productNumber, licensee)
      .then(function(createdLicensee) {
        console.log("LicenseeService.create() :", createdLicensee);
        return NetLicensing.LicenseeService.get(context, createdLicensee.getNumber());
      })
      .then(function(getLicensee) {
        console.log("LicenseeService.get() :", getLicensee);
        var listLicensee = NetLicensing.LicenseeService.list(context);
        console.log("LicenseeService.list() :", listLicensee);
        return getLicensee;
      })
      .then(function(getLicensee) {
        getLicensee.setProperty("Updated Property", "Updated Value");
        getLicensee.setLicenseeSecret(numberWithPrefix("secret", randomNumber));
        return NetLicensing.LicenseeService.update(context, licenseeNumber, getLicensee);
      })
      .then(function(updatedLicensee) {
        console.log("LicenseeService.update() :", updatedLicensee);
        return NetLicensing.LicenseeService.delete(context, updatedLicensee.getNumber(), true);
      })
      .then(function() {
        console.log("LicenseeService.delete() :");
        var listLicensees = NetLicensing.LicenseeService.list(context);
        console.log("LicenseeService.list() :", listLicensees);
      })
      .then(function() {
      	// Create Licensee for later use
        licensee.setLicenseeSecret(numberWithPrefix("secret", randomNumber));
        var createdLicensee = NetLicensing.LicenseeService.create(context, productNumber, licensee);
        console.log("LicenseeService.create() :", createdLicensee);
        return createdLicensee;
      })
  })

  // endregion

  // region ********* License

  var license = new NetLicensing.License()
    .setNumber(licenseNumber);

  var LicenseServicePromise = LicenseeServicePromise.then(function(createdLicensee) {
    console.log("==> LicenseService");
    return NetLicensing.LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license)
      .then(function(createdLicense) {
        console.log("LicenseService.create() :", createdLicense);
        return NetLicensing.LicenseService.get(context, createdLicense.getNumber());
      })
      .then(function(getLicense) {
        console.log("LicenseService.get() :", getLicense);
        var listLicenses = NetLicensing.LicenseService.list(context);
        console.log("LicenseService.list() :", listLicenses);
        return getLicense;
      })
      .then(function(getLicense) {
        getLicense.setProperty("Updated Property", "Updated Value");
        return NetLicensing.LicenseService.update(context, licenseNumber, null, getLicense);
      })
      .then(function(updatedLicense) {
        console.log("LicenseService.update() :", updatedLicense);
        return NetLicensing.LicenseService.delete(context, updatedLicense.getNumber(), true);
      })
      .then(function() {
        console.log("LicenseService.delete() :");
        var listLicenses = NetLicensing.LicenseService.list(context);
        console.log("LicenseService.list() :", listLicenses);
      })
      .then(function() {
      	// Create License for later use
        var createdLicense = NetLicensing.LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license);
        console.log("LicenseService.create() :", createdLicense);
        return createdLicense;
      })
  })

  // endregion

  // region ********* PaymentMethod

  var PaymentMethodsServicePromise = LicenseServicePromise.then(function() {
    console.log("==> PaymentMethodService");
    return NetLicensing.PaymentMethodService.list(context)
      .then(function(paymentMethods) {
        console.log("PaymentMethodService.list() :", paymentMethods);
        return paymentMethods;
      })
  })

  // endregion

  // region ********* Token

  var token = new NetLicensing.Token()
    .setTokenType("APIKEY");

  var TokenServicePromise = PaymentMethodsServicePromise.then(function() {
    console.log("==> TokenService");

    return NetLicensing.TokenService.create(context, token)
      .then(function(createdToken) {
        console.log("TokenService.create(APIKEY) :", createdToken);
        context.setApiKey(createdToken.getNumber());
        context.setSecurityMode(NetLicensing.Context.APIKEY_IDENTIFICATION);

        token.setTokenType("SHOP");
        token.setLicenseeNumber(licenseeNumber);

        return NetLicensing.TokenService.create(context, token);
      })
      .then(function(shopToken) {
        console.log("TokenService.create(SHOP) :", shopToken);
        context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);
        console.log("TokenService.list(SHOP) :", NetLicensing.TokenService.list(context, "tokenType=SHOP"));
        return shopToken;
      })
      .then(function(shopToken) {
        console.log("TokenService.delete() :");
        return NetLicensing.TokenService.delete(context, shopToken.getNumber());
      })
      .then(function() {
        return console.log("TokenService.list(SHOP) :", NetLicensing.TokenService.list(context, "tokenType=SHOP"));
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

  var ValidationPromise = TokenServicePromise.then(function() {
    console.log("==> Validation");

    return NetLicensing.LicenseeService.validate(context, licenseeNumber, validationParameters)
      .then(function(validationResult) {
        console.log("LicenseeService.validate(APIKEY_IDENTIFICATION) :", validationResult);
        context.setSecurityMode(NetLicensing.Context.APIKEY_IDENTIFICATION);
        return NetLicensing.LicenseeService.validate(context, licenseeNumber, validationParameters)
      })
      .then(function(validationResult) {
        context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);
        console.log("LicenseeService.validate(BASIC_AUTHENTICATION) :", validationResult);
        return validationResult;
      })
  })

  // endregion

  // region ********* Transfer

  var TransferPromise = ValidationPromise.then(function() {
    console.log("==> Transfer");
    var transferLicensee = new NetLicensing.Licensee()
      .setNumber("TR" + licenseeNumber)
      .setMarkedForTransfer(true);

    return NetLicensing.LicenseeService.create(context, productNumber, transferLicensee)
      .then(function(transferLicensee) {
        console.log("LicenseeService.create(transfer-from) :", transferLicensee);
        var transferLicense = new NetLicensing.License()
          .setNumber("TR" + licenseNumber);

        return NetLicensing.LicenseService.create(context, transferLicensee.getNumber(),
          licenseTemplateNumber, null, transferLicense)
      })
      .then(function(newTransferLicense) {
        console.log("LicenseeService.create(transfer-to) :", newTransferLicense);
        return NetLicensing.LicenseeService.transfer(context, licensee.getNumber(), transferLicensee.getNumber());
      })
      .then(function(newTransferLicense) {
        var licenseList = NetLicensing.LicenseService.list(context, "licenseeNumber=" + licensee.getNumber());
        console.log("LicenseeService.list(transfer) :", licenseList);
        return licenseList;
      })
  })

  var TransferWithApiKeyPromise = TransferPromise.then(function() {
    var transferLicenseeWithApiKey = new NetLicensing.Licensee()
      .setNumber("AP" + licenseeNumber)
      .setMarkedForTransfer(true);

    return NetLicensing.LicenseeService.create(context, productNumber, transferLicenseeWithApiKey)
      .then(function(transferLicenseeWithApiKey) {
        console.log("LicenseeService.create(transfer-from) :", transferLicenseeWithApiKey);
        var transferLicenseWithApiKey = new NetLicensing.License()
          .setNumber("AP" + licenseNumber);

        return NetLicensing.LicenseService.create(context, transferLicenseeWithApiKey.getNumber(),
          licenseTemplateNumber, null, transferLicenseWithApiKey)
      })
      .then(function(newTransferLicense) {
        console.log("LicenseeService.create(transfer-to) :", newTransferLicense);

        context.setSecurityMode(NetLicensing.Context.APIKEY_IDENTIFICATION);
        return NetLicensing.LicenseeService.transfer(context, licensee.getNumber(), transferLicenseeWithApiKey.getNumber());
      })
      .then(function(newTransferLicense) {
        context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

        var licenseList = NetLicensing.LicenseService.list(context, "licenseeNumber=" + licensee.getNumber());
        console.log("LicenseeService.list(transfer) :", licenseList);
        return licenseList;
      })
  })

  // endregion

  // region ********* CleanUp

  var cleanUp = TransferWithApiKeyPromise.then(function() {
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
