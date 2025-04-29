const NetLicensingDemo = async () => {
  const {
    Context,
    LicenseType,
    LicensingModel,
    SecurityMode,
    Product,
    ProductModule,
    LicenseTemplate,
    Licensee,
    License,
    Token,
    ValidationParameters,
    ProductService,
    ProductModuleService,
    UtilityService,
    LicenseTemplateService,
    LicenseeService,
    LicenseService,
    PaymentMethodService,
    TokenService,
  } = NetLicensing;

  const context = new Context().setUsername('demo').setPassword('demo');

  const randomNumber = Math.random().toString(36).slice(2);
  const productNumber = numberWithPrefix('P', randomNumber);
  const productModuleNumber = numberWithPrefix('M', randomNumber);
  const licenseTemplateNumber = numberWithPrefix('E', randomNumber);
  const licenseeNumber = numberWithPrefix('I', randomNumber);
  const licenseNumber = numberWithPrefix('L', randomNumber);

  // region ********* Utilities

  console.log('==> UtilityService');

  console.log('UtilityService.listLicenseTypes() :', await UtilityService.listLicenseTypes(context));
  console.log('UtilityService.listLicensingModels() :', await UtilityService.listLicensingModels(context));
  console.log('UtilityService.listCountries() :', await UtilityService.listCountries(context));
  console.log((await UtilityService.listCountries(context)).getContent());
  // endregion

  // region ********* Product

  const product = Product({
    number: productNumber,
    name: numberWithPrefix('Product-', Math.random().toString(36).slice(2)),
  });

  console.log('==> ProductService');

  console.log('ProductService.create() :', await ProductService.create(context, product));
  console.log('ProductService.get() :', await ProductService.get(context, productNumber));
  console.log('ProductService.list() :', await ProductService.list(context));

  product.setProperty('Updated Property', 'Property Value');

  console.log('ProductService.update() :', await ProductService.update(context, productNumber, product));
  console.log('ProductService.delete()', await ProductService.delete(context, productNumber, true));
  console.log('ProductService.list() :', await ProductService.list(context));
  // Recreate Product for later use
  const createdProduct = await ProductService.create(context, product);

  // endregion

  // region ********* ProductModule

  const productModule = ProductModule();
  productModule.setNumber(productModuleNumber);
  productModule.setName(numberWithPrefix('ProductModule-', Math.random().toString(36).slice(2)));
  productModule.setLicensingModel(LicensingModel.TRY_AND_BUY);

  console.log('==> ProductModuleService');

  console.log(
    'ProductModuleService.create() :',
    await ProductModuleService.create(context, createdProduct.getNumber(), productModule),
  );
  console.log('ProductModuleService.get() :', await ProductModuleService.get(context, productModuleNumber));
  console.log('ProductModuleService.list() :', await ProductModuleService.list(context));

  productModule.setProperty('Updated Property', 'Property Value');

  console.log(
    'ProductModuleService.update() :',
    await ProductModuleService.update(context, productModuleNumber, productModule),
  );

  console.log('ProductModuleService.delete() :', await ProductModuleService.delete(context, productModuleNumber, true));
  console.log('ProductModuleService.list() :', await ProductModuleService.list(context));

  // Recreate ProductModule for later use
  const createdPM = await ProductModuleService.create(context, createdProduct.getNumber(), productModule);

  // endregion

  // region ********* LicenseTemplate

  const licenseTemplate = LicenseTemplate();
  licenseTemplate.setNumber(licenseTemplateNumber);
  licenseTemplate.setName(numberWithPrefix('LicenseTemplate-', Math.random().toString(36).slice(2)));
  licenseTemplate.setLicenseType(LicenseType.FEATURE);
  licenseTemplate.setPrice('12.5');
  licenseTemplate.setCurrency('EUR');
  licenseTemplate.setAutomatic(false);
  licenseTemplate.setHidden(false);

  console.log('==> LicenseTemplateService');

  console.log(
    'LicenseTemplateService.create() :',
    await LicenseTemplateService.create(context, createdPM.getNumber(), licenseTemplate),
  );

  console.log('LicenseTemplateService.get() :', await LicenseTemplateService.get(context, licenseTemplateNumber));
  console.log('LicenseTemplateService.list() :', await LicenseTemplateService.list(context));

  licenseTemplate.setProperty('Updated Property', 'Updated Value');

  console.log(
    'LicenseTemplateService.update() :',
    await LicenseTemplateService.update(context, licenseTemplateNumber, licenseTemplate),
  );
  console.log(
    'LicenseTemplateService.delete() :',
    await LicenseTemplateService.delete(context, licenseTemplateNumber, true),
  );

  // Create LicenseTemplate for later use
  const createdLT = await LicenseTemplateService.create(context, createdPM.getNumber(), licenseTemplate);
  // endregion

  // region ********* Licensee

  const licensee = Licensee();
  licensee.setNumber(licenseeNumber);
  licensee.setName(licenseeNumber + 'na');

  console.log('==> LicenseeService');

  console.log('LicenseeService.create() :', await LicenseeService.create(context, productNumber, licensee));
  console.log('LicenseeService.get() :', await LicenseeService.get(context, licenseeNumber));
  console.log('LicenseeService.list() :', await LicenseeService.list(context));

  licensee.setProperty('Updated Property', 'Updated Value');

  console.log('LicenseeService.update() :', await LicenseeService.update(context, licenseeNumber, licensee));
  console.log('LicenseeService.delete() :', await LicenseeService.delete(context, licenseeNumber, true));
  console.log('LicenseeService.list() :', await LicenseeService.list(context));

  // Create Licensee for later use
  const createdLicensee = await LicenseeService.create(context, productNumber, licensee);

  // endregion

  // region ********* License

  const license = License();
  license.setNumber(licenseNumber);

  console.log('==> LicenseService');

  console.log(
    'LicenseService.create() :',
    await LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license),
  );

  console.log('LicenseService.get() :', await LicenseService.get(context, licenseNumber));
  console.log('LicenseService.list() :', await LicenseService.list(context));

  license.setProperty('Updated Property', 'Updated Value');

  console.log('LicenseService.update() :', await LicenseService.update(context, licenseNumber, null, license));
  console.log('LicenseService.delete() :', await LicenseService.delete(context, licenseNumber, true));
  console.log('LicenseService.list() :', await LicenseService.list(context));

  // Create License for later use
  const createdLicense = await LicenseService.create(context, licenseeNumber, licenseTemplateNumber, null, license);

  // endregion

  // region ********* PaymentMethod
  console.log('==> PaymentMethodService');
  console.log('PaymentMethodService.list() :', await PaymentMethodService.list(context));

  // endregion

  // region ********* Token
  const token = Token();
  token.setTokenType('APIKEY');

  console.log('==> TokenService');

  const apiKey = await TokenService.create(context, token);

  context.setApiKey(apiKey.getNumber());

  console.log('TokenService.create(APIKEY) :', apiKey);

  token.setTokenType('SHOP');
  token.setLicenseeNumber(licenseeNumber);

  const shopToken = await TokenService.create(context, token);

  console.log('TokenService.create(SHOP) :', shopToken);
  console.log('TokenService.list(SHOP) :', await TokenService.list(context, 'tokenType=SHOP'));
  console.log('TokenService.delete() :', await TokenService.delete(context, shopToken.getNumber()));
  console.log('TokenService.list(SHOP) :', await TokenService.list(context, 'tokenType=SHOP'));

  // endregion

  // region ********* Validate

  const validationParameters = new ValidationParameters();
  validationParameters.setProductNumber(productNumber);
  validationParameters.setLicenseeName(numberWithPrefix('Licensee-', Math.random().toString(36).slice(2)));
  validationParameters.setProductModuleValidationParameters(productModuleNumber, {
    key: 'paramKey',
    value: 'paramValue',
  });

  console.log('==> Validation');

  context.setSecurityMode(SecurityMode.APIKEY_IDENTIFICATION);
  console.log(
    'LicenseeService.validate(APIKEY_IDENTIFICATION) :',
    await LicenseeService.validate(context, licenseeNumber, validationParameters),
  );

  context.setSecurityMode(SecurityMode.BASIC_AUTHENTICATION);
  console.log(
    'LicenseeService.validate(BASIC_AUTHENTICATION) :',
    await LicenseeService.validate(context, licenseeNumber, validationParameters),
  );

  // endregion

  // region ********* Transfer
  console.log('==> Transfer');

  const transferLicensee = Licensee();
  transferLicensee.setNumber('TR' + licenseeNumber);
  transferLicensee.setMarkedForTransfer(true);

  console.log(
    'LicenseeService.create(transfer-from) :',
    await LicenseeService.create(context, productNumber, transferLicensee),
  );

  const transferLicense = License();
  transferLicense.setNumber('TR' + licenseNumber);

  console.log(
    'LicenseeService.create(transfer-to) :',
    await LicenseService.create(context, transferLicensee.getNumber(), licenseTemplateNumber, null, transferLicense),
  );

  console.log(
    'LicenseeService.list(transfer) :',
    await LicenseService.list(context, 'licenseeNumber=' + licensee.getNumber()),
  );

  const transferLicenseeWithApiKey = Licensee();
  transferLicenseeWithApiKey.setNumber('AP' + licenseeNumber);
  transferLicenseeWithApiKey.setMarkedForTransfer(true);

  console.log(
    'LicenseeService.create(transfer-from) :',
    await LicenseeService.create(context, productNumber, transferLicenseeWithApiKey),
  );

  const transferLicenseWithApiKey = License();
  transferLicenseWithApiKey.setNumber('AP' + licenseNumber);

  console.log(
    'LicenseeService.create(transfer-to) :',
    await LicenseService.create(
      context,
      transferLicenseeWithApiKey.getNumber(),
      licenseTemplateNumber,
      null,
      transferLicenseWithApiKey,
    ),
  );

  context.setSecurityMode(SecurityMode.APIKEY_IDENTIFICATION);

  await LicenseeService.transfer(context, licensee.getNumber(), transferLicenseeWithApiKey.getNumber());

  context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

  console.log(
    'LicenseeService.list(transfer) :',
    await LicenseService.list(context, 'licenseeNumber=' + licensee.getNumber()),
  );

  // endregion

  // region ********* CleanUp

  console.log('All done.');
  await ProductService.delete(context, productNumber, true);
  // endregion
};

function numberWithPrefix(prefix, number) {
  return prefix.concat(number).concat('-DEMO');
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = '';
}
