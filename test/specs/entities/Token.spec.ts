import { describe, it, expect } from 'vitest';

// constants
import ApiKeyRole from '@/constants/ApiKeyRole';
import TokenType from '@/constants/TokenType';

// entities
import Token from '@/entities/Token';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('Token entity', () => {
  it('should create a Token with default properties', () => {
    const token = Token();

    expectEntity(token, {
      active: undefined,
      number: undefined,
      expirationTime: undefined,
      tokenType: undefined,
      licenseeNumber: undefined,
      action: undefined,
      apiKeyRole: undefined,
      bundleNumber: undefined,
      bundlePrice: undefined,
      productNumber: undefined,
      predefinedShoppingItem: undefined,
      successURL: undefined,
      successURLTitle: undefined,
      cancelURL: undefined,
      cancelURLTitle: undefined,
      shopURL: undefined,
    });
  });

  it('should create a Token with provided properties', () => {
    const props = {
      active: true,
      number: 'T1',
      expirationTime: new Date(),
      tokenType: TokenType.SHOP,
      licenseeNumber: 'L1',
      action: 'action1',
      apiKeyRole: ApiKeyRole.ROLE_APIKEY_LICENSEE,
      bundleNumber: 'B1',
      bundlePrice: 2.99,
      productNumber: 'P1',
      predefinedShoppingItem: 'SI1',
      successURL: 'SURL1',
      successURLTitle: 'STitle1',
      cancelURL: 'CURL1',
      cancelURLTitle: 'CTitle1',
      shopURL: 'http://some-shop.url',
    };

    const token = Token(props);

    expectEntity(token, props);
    expect(token).toStrictEqual(props);
  });

  it('should set and get active correctly', () => {
    const token = Token();

    token.setActive(true);
    expectEntityProp(token, 'active', true);

    token.active = false;
    expectEntityProp(token, 'active', false);

    token.set('active', true);
    expectEntityProp(token, 'active', true);

    token.setProperty('active', false);
    expectEntityProp(token, 'active', false);
  });

  it('should set and get number correctly', () => {
    const token = Token();

    token.setNumber('T1');
    expectEntityProp(token, 'number', 'T1');

    token.number = 'T2';
    expectEntityProp(token, 'number', 'T2');

    token.set('number', 'T3');
    expectEntityProp(token, 'number', 'T3');

    token.setProperty('number', 'T4');
    expectEntityProp(token, 'number', 'T4');
  });

  it('should set and get expirationTime correctly', () => {
    const token = Token();

    const date1 = new Date();
    token.setExpirationTime(date1);
    expectEntityProp(token, 'expirationTime', date1);

    const date2 = new Date();
    token.expirationTime = date2;
    expectEntityProp(token, 'expirationTime', date2);

    const date3 = new Date();
    token.set('expirationTime', date3);
    expectEntityProp(token, 'expirationTime', date3);

    const date4 = new Date();
    token.setProperty('expirationTime', date4);
    expectEntityProp(token, 'expirationTime', date4);
  });

  it('should set and get tokenType correctly', () => {
    const token = Token();

    token.setTokenType(TokenType.DEFAULT);
    expectEntityProp(token, 'tokenType', TokenType.DEFAULT);

    token.tokenType = TokenType.SHOP;
    expectEntityProp(token, 'tokenType', TokenType.SHOP);

    token.set('tokenType', TokenType.ACTION);
    expectEntityProp(token, 'tokenType', TokenType.ACTION);

    token.setProperty('tokenType', TokenType.APIKEY);
    expectEntityProp(token, 'tokenType', TokenType.APIKEY);
  });

  it('should set and get licenseeNumber correctly', () => {
    const token = Token();

    token.setLicenseeNumber('L1');
    expectEntityProp(token, 'licenseeNumber', 'L1');

    token.licenseeNumber = 'L2';
    expectEntityProp(token, 'licenseeNumber', 'L2');

    token.set('licenseeNumber', 'L3');
    expectEntityProp(token, 'licenseeNumber', 'L3');

    token.setProperty('licenseeNumber', 'L4');
    expectEntityProp(token, 'licenseeNumber', 'L4');
  });

  it('should set and get action correctly', () => {
    const token = Token();

    token.setAction('Action1');
    expectEntityProp(token, 'action', 'Action1');

    token.action = 'Action2';
    expectEntityProp(token, 'action', 'Action2');

    token.set('action', 'Action3');
    expectEntityProp(token, 'action', 'Action3');

    token.setProperty('action', 'Action4');
    expectEntityProp(token, 'action', 'Action4');
  });

  it('should set and get apiKeyRole correctly', () => {
    const token = Token();

    token.setApiKeyRole(ApiKeyRole.ROLE_APIKEY_ADMIN);
    expectEntityProp(token, 'apiKeyRole', ApiKeyRole.ROLE_APIKEY_ADMIN);

    token.apiKeyRole = ApiKeyRole.ROLE_APIKEY_ANALYTICS;
    expectEntityProp(token, 'apiKeyRole', ApiKeyRole.ROLE_APIKEY_ANALYTICS);

    token.set('apiKeyRole', ApiKeyRole.ROLE_APIKEY_MAINTENANCE);
    expectEntityProp(token, 'apiKeyRole', ApiKeyRole.ROLE_APIKEY_MAINTENANCE);

    token.setProperty('apiKeyRole', ApiKeyRole.ROLE_APIKEY_LICENSEE);
    expectEntityProp(token, 'apiKeyRole', ApiKeyRole.ROLE_APIKEY_LICENSEE);
  });

  it('should set and get bundleNumber correctly', () => {
    const token = Token();

    token.setBundleNumber('B1');
    expectEntityProp(token, 'bundleNumber', 'B1');

    token.bundleNumber = 'B2';
    expectEntityProp(token, 'bundleNumber', 'B2');

    token.set('bundleNumber', 'B3');
    expectEntityProp(token, 'bundleNumber', 'B3');

    token.setProperty('bundleNumber', 'B4');
    expectEntityProp(token, 'bundleNumber', 'B4');
  });

  it('should set and get bundlePrice correctly', () => {
    const token = Token();

    token.setBundlePrice(2.99);
    expectEntityProp(token, 'bundlePrice', 2.99);

    token.bundlePrice = 3.99;
    expectEntityProp(token, 'bundlePrice', 3.99);

    token.set('bundlePrice', 4.99);
    expectEntityProp(token, 'bundlePrice', 4.99);

    token.setProperty('bundlePrice', 5.99);
    expectEntityProp(token, 'bundlePrice', 5.99);
  });

  it('should set and get productNumber correctly', () => {
    const token = Token();

    token.setProductNumber('P1');
    expectEntityProp(token, 'productNumber', 'P1');

    token.productNumber = 'P2';
    expectEntityProp(token, 'productNumber', 'P2');

    token.set('productNumber', 'P3');
    expectEntityProp(token, 'productNumber', 'P3');

    token.setProperty('productNumber', 'P4');
    expectEntityProp(token, 'productNumber', 'P4');
  });

  it('should set and get predefinedShoppingItem correctly', () => {
    const token = Token();

    token.setPredefinedShoppingItem('SI1');
    expectEntityProp(token, 'predefinedShoppingItem', 'SI1');

    token.predefinedShoppingItem = 'SI2';
    expectEntityProp(token, 'predefinedShoppingItem', 'SI2');

    token.set('predefinedShoppingItem', 'SI3');
    expectEntityProp(token, 'predefinedShoppingItem', 'SI3');

    token.setProperty('predefinedShoppingItem', 'SI4');
    expectEntityProp(token, 'predefinedShoppingItem', 'SI4');
  });

  it('should set and get successURL correctly', () => {
    const token = Token();

    token.setSuccessURL('URL1');
    expectEntityProp(token, 'successURL', 'URL1');

    token.successURL = 'URL2';
    expectEntityProp(token, 'successURL', 'URL2');

    token.set('successURL', 'URL3');
    expectEntityProp(token, 'successURL', 'URL3');

    token.setProperty('successURL', 'URL4');
    expectEntityProp(token, 'successURL', 'URL4');
  });

  it('should set and get successURLTitle correctly', () => {
    const token = Token();

    token.setSuccessURLTitle('Title1');
    expectEntityProp(token, 'successURLTitle', 'Title1');

    token.successURLTitle = 'Title2';
    expectEntityProp(token, 'successURLTitle', 'Title2');

    token.set('successURLTitle', 'Title3');
    expectEntityProp(token, 'successURLTitle', 'Title3');

    token.setProperty('successURLTitle', 'Title4');
    expectEntityProp(token, 'successURLTitle', 'Title4');
  });

  it('should set and get cancelURL correctly', () => {
    const token = Token();

    token.setCancelURL('URL1');
    expectEntityProp(token, 'cancelURL', 'URL1');

    token.cancelURL = 'URL2';
    expectEntityProp(token, 'cancelURL', 'URL2');

    token.set('cancelURL', 'URL3');
    expectEntityProp(token, 'cancelURL', 'URL3');

    token.setProperty('cancelURL', 'URL4');
    expectEntityProp(token, 'cancelURL', 'URL4');
  });

  it('should set and get cancelURLTitle correctly', () => {
    const token = Token();

    token.setCancelURLTitle('Title1');
    expectEntityProp(token, 'cancelURLTitle', 'Title1');

    token.cancelURLTitle = 'Title2';
    expectEntityProp(token, 'cancelURLTitle', 'Title2');

    token.set('cancelURLTitle', 'Title3');
    expectEntityProp(token, 'cancelURLTitle', 'Title3');

    token.setProperty('cancelURLTitle', 'Title4');
    expectEntityProp(token, 'cancelURLTitle', 'Title4');
  });

  it('should get shopURL correctly', () => {
    const token = Token({
      shopURL: 'https://some-shop.url',
    });

    expectEntityProp(token, 'shopURL', 'https://some-shop.url');
  });

  it('should create an instance of Token', () => {
    const token = Token();
    expect(token instanceof Token).toBe(true);
  });

  it('should be correct map', () => {
    const token = Token({
      active: true,
      number: 'T1',
      expirationTime: new Date('2024-01-03T12:00:00.000Z'),
      tokenType: TokenType.SHOP,
      licenseeNumber: 'L1',
      action: 'action1',
      apiKeyRole: ApiKeyRole.ROLE_APIKEY_LICENSEE,
      bundleNumber: 'B1',
      bundlePrice: 2.99,
      productNumber: 'P1',
      predefinedShoppingItem: 'SI1',
      successURL: 'SURL1',
      successURLTitle: 'STitle1',
      cancelURL: 'CURL1',
      cancelURLTitle: 'CTitle1',
      shopURL: 'http://some-shop.url',
    });

    expect(token.serialize()).toStrictEqual({
      active: 'true',
      number: 'T1',
      expirationTime: '2024-01-03T12:00:00.000Z',
      tokenType: TokenType.SHOP,
      licenseeNumber: 'L1',
      action: 'action1',
      apiKeyRole: ApiKeyRole.ROLE_APIKEY_LICENSEE,
      bundleNumber: 'B1',
      bundlePrice: '2.99',
      productNumber: 'P1',
      predefinedShoppingItem: 'SI1',
      successURL: 'SURL1',
      successURLTitle: 'STitle1',
      cancelURL: 'CURL1',
      cancelURLTitle: 'CTitle1',
    });
  });
});
