import { AxiosResponse, AxiosInstance, Method, AxiosError, InternalAxiosRequestConfig } from 'axios';

declare const _default$g: {
    LicenseeSecretMode: Readonly<{
        DISABLED: "DISABLED";
        PREDEFINED: "PREDEFINED";
        CLIENT: "CLIENT";
    }>;
    LicenseType: Readonly<{
        FEATURE: "FEATURE";
        TIMEVOLUME: "TIMEVOLUME";
        FLOATING: "FLOATING";
        QUANTITY: "QUANTITY";
    }>;
    NotificationEvent: Readonly<{
        LICENSEE_CREATED: "LICENSEE_CREATED";
        LICENSE_CREATED: "LICENSE_CREATED";
        WARNING_LEVEL_CHANGED: "WARNING_LEVEL_CHANGED";
        PAYMENT_TRANSACTION_PROCESSED: "PAYMENT_TRANSACTION_PROCESSED";
    }>;
    NotificationProtocol: Readonly<{
        WEBHOOK: "WEBHOOK";
    }>;
    SecurityMode: Readonly<{
        BASIC_AUTHENTICATION: "BASIC_AUTH";
        APIKEY_IDENTIFICATION: "APIKEY";
        ANONYMOUS_IDENTIFICATION: "ANONYMOUS";
    }>;
    TimeVolumePeriod: Readonly<{
        DAY: "DAY";
        WEEK: "WEEK";
        MONTH: "MONTH";
        YEAR: "YEAR";
    }>;
    TokenType: Readonly<{
        DEFAULT: "DEFAULT";
        SHOP: "SHOP";
        APIKEY: "APIKEY";
        ACTION: "ACTION";
    }>;
    TransactionSource: Readonly<{
        SHOP: "SHOP";
        AUTO_LICENSE_CREATE: "AUTO_LICENSE_CREATE";
        AUTO_LICENSE_UPDATE: "AUTO_LICENSE_UPDATE";
        AUTO_LICENSE_DELETE: "AUTO_LICENSE_DELETE";
        AUTO_LICENSEE_CREATE: "AUTO_LICENSEE_CREATE";
        AUTO_LICENSEE_DELETE: "AUTO_LICENSEE_DELETE";
        AUTO_LICENSEE_VALIDATE: "AUTO_LICENSEE_VALIDATE";
        AUTO_LICENSETEMPLATE_DELETE: "AUTO_LICENSETEMPLATE_DELETE";
        AUTO_PRODUCTMODULE_DELETE: "AUTO_PRODUCTMODULE_DELETE";
        AUTO_PRODUCT_DELETE: "AUTO_PRODUCT_DELETE";
        AUTO_LICENSES_TRANSFER: "AUTO_LICENSES_TRANSFER";
        SUBSCRIPTION_UPDATE: "SUBSCRIPTION_UPDATE";
        RECURRING_PAYMENT: "RECURRING_PAYMENT";
        CANCEL_RECURRING_PAYMENT: "CANCEL_RECURRING_PAYMENT";
        OBTAIN_BUNDLE: "OBTAIN_BUNDLE";
    }>;
    TransactionStatus: Readonly<{
        PENDING: "PENDING";
        CLOSED: "CLOSED";
        CANCELLED: "CANCELLED";
    }>;
    BASIC_AUTHENTICATION: string;
    APIKEY_IDENTIFICATION: string;
    ANONYMOUS_IDENTIFICATION: string;
    FILTER: string;
    Product: {
        TYPE: string;
        ENDPOINT_PATH: string;
    };
    ProductModule: {
        TYPE: string;
        ENDPOINT_PATH: string;
        PRODUCT_MODULE_NUMBER: string;
    };
    Licensee: {
        TYPE: string;
        ENDPOINT_PATH: string;
        ENDPOINT_PATH_VALIDATE: string;
        ENDPOINT_PATH_TRANSFER: string;
        LICENSEE_NUMBER: string;
    };
    LicenseTemplate: {
        TYPE: string;
        ENDPOINT_PATH: string;
        LicenseType: Readonly<{
            FEATURE: "FEATURE";
            TIMEVOLUME: "TIMEVOLUME";
            FLOATING: "FLOATING";
            QUANTITY: "QUANTITY";
        }>;
    };
    License: {
        TYPE: string;
        ENDPOINT_PATH: string;
    };
    Validation: {
        TYPE: string;
    };
    Token: {
        TYPE: string;
        ENDPOINT_PATH: string;
        Type: Readonly<{
            DEFAULT: "DEFAULT";
            SHOP: "SHOP";
            APIKEY: "APIKEY";
            ACTION: "ACTION";
        }>;
    };
    PaymentMethod: {
        TYPE: string;
        ENDPOINT_PATH: string;
    };
    Bundle: {
        TYPE: string;
        ENDPOINT_PATH: string;
        ENDPOINT_OBTAIN_PATH: string;
    };
    Notification: {
        TYPE: string;
        ENDPOINT_PATH: string;
        Protocol: Readonly<{
            WEBHOOK: "WEBHOOK";
        }>;
        Event: Readonly<{
            LICENSEE_CREATED: "LICENSEE_CREATED";
            LICENSE_CREATED: "LICENSE_CREATED";
            WARNING_LEVEL_CHANGED: "WARNING_LEVEL_CHANGED";
            PAYMENT_TRANSACTION_PROCESSED: "PAYMENT_TRANSACTION_PROCESSED";
        }>;
    };
    Transaction: {
        TYPE: string;
        ENDPOINT_PATH: string;
        Status: Readonly<{
            PENDING: "PENDING";
            CLOSED: "CLOSED";
            CANCELLED: "CANCELLED";
        }>;
    };
    Utility: {
        ENDPOINT_PATH: string;
        ENDPOINT_PATH_LICENSE_TYPES: string;
        ENDPOINT_PATH_LICENSING_MODELS: string;
        ENDPOINT_PATH_COUNTRIES: string;
        LICENSING_MODEL_TYPE: string;
        LICENSE_TYPE: string;
        COUNTRY_TYPE: string;
    };
};

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const ApiKeyRole: Readonly<{
    ROLE_APIKEY_LICENSEE: "ROLE_APIKEY_LICENSEE";
    ROLE_APIKEY_ANALYTICS: "ROLE_APIKEY_ANALYTICS";
    ROLE_APIKEY_OPERATION: "ROLE_APIKEY_OPERATION";
    ROLE_APIKEY_MAINTENANCE: "ROLE_APIKEY_MAINTENANCE";
    ROLE_APIKEY_ADMIN: "ROLE_APIKEY_ADMIN";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const LicenseeSecretMode: Readonly<{
    DISABLED: "DISABLED";
    PREDEFINED: "PREDEFINED";
    CLIENT: "CLIENT";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const LicenseType: Readonly<{
    FEATURE: "FEATURE";
    TIMEVOLUME: "TIMEVOLUME";
    FLOATING: "FLOATING";
    QUANTITY: "QUANTITY";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const LicensingModel: Readonly<{
    TRY_AND_BUY: "TryAndBuy";
    SUBSCRIPTION: "Subscription";
    RENTAL: "Rental";
    FLOATING: "Floating";
    MULTI_FEATURE: "MultiFeature";
    PAY_PER_USE: "PayPerUse";
    PRICING_TABLE: "PricingTable";
    QUOTA: "Quota";
    NODE_LOCKED: "NodeLocked";
    DISCOUNT: "Discount";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const NodeSecretMode: Readonly<{
    PREDEFINED: "PREDEFINED";
    CLIENT: "CLIENT";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const NotificationEvent: Readonly<{
    LICENSEE_CREATED: "LICENSEE_CREATED";
    LICENSE_CREATED: "LICENSE_CREATED";
    WARNING_LEVEL_CHANGED: "WARNING_LEVEL_CHANGED";
    PAYMENT_TRANSACTION_PROCESSED: "PAYMENT_TRANSACTION_PROCESSED";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const NotificationProtocol: Readonly<{
    WEBHOOK: "WEBHOOK";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const PaymentMethodEnum: Readonly<{
    NULL: "NULL";
    PAYPAL: "PAYPAL";
    PAYPAL_SANDBOX: "PAYPAL_SANDBOX";
    STRIPE: "STRIPE";
    STRIPE_TESTING: "STRIPE_TESTING";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const SecurityMode: Readonly<{
    BASIC_AUTHENTICATION: "BASIC_AUTH";
    APIKEY_IDENTIFICATION: "APIKEY";
    ANONYMOUS_IDENTIFICATION: "ANONYMOUS";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const TimeVolumePeriod: Readonly<{
    DAY: "DAY";
    WEEK: "WEEK";
    MONTH: "MONTH";
    YEAR: "YEAR";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const TokenType: Readonly<{
    DEFAULT: "DEFAULT";
    SHOP: "SHOP";
    APIKEY: "APIKEY";
    ACTION: "ACTION";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const TransactionSource: Readonly<{
    SHOP: "SHOP";
    AUTO_LICENSE_CREATE: "AUTO_LICENSE_CREATE";
    AUTO_LICENSE_UPDATE: "AUTO_LICENSE_UPDATE";
    AUTO_LICENSE_DELETE: "AUTO_LICENSE_DELETE";
    AUTO_LICENSEE_CREATE: "AUTO_LICENSEE_CREATE";
    AUTO_LICENSEE_DELETE: "AUTO_LICENSEE_DELETE";
    AUTO_LICENSEE_VALIDATE: "AUTO_LICENSEE_VALIDATE";
    AUTO_LICENSETEMPLATE_DELETE: "AUTO_LICENSETEMPLATE_DELETE";
    AUTO_PRODUCTMODULE_DELETE: "AUTO_PRODUCTMODULE_DELETE";
    AUTO_PRODUCT_DELETE: "AUTO_PRODUCT_DELETE";
    AUTO_LICENSES_TRANSFER: "AUTO_LICENSES_TRANSFER";
    SUBSCRIPTION_UPDATE: "SUBSCRIPTION_UPDATE";
    RECURRING_PAYMENT: "RECURRING_PAYMENT";
    CANCEL_RECURRING_PAYMENT: "CANCEL_RECURRING_PAYMENT";
    OBTAIN_BUNDLE: "OBTAIN_BUNDLE";
}>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const TransactionStatus: Readonly<{
    PENDING: "PENDING";
    CLOSED: "CLOSED";
    CANCELLED: "CANCELLED";
}>;

interface Info {
    id: string;
    type: 'ERROR' | 'WARNING' | 'INFO';
    value: string;
}
interface List {
    property: {
        value: string;
        name: string;
    }[];
    list: List[];
    name: string;
}
interface Item {
    property: {
        value: string;
        name: string;
    }[];
    list: List[];
    type: string;
}
interface ItemPagination {
    pagenumber: string | null;
    itemsnumber: string | null;
    totalpages: string | null;
    totalitems: string | null;
    hasnext: string | null;
}
type Items = {
    item: Item[];
} & ItemPagination;
interface NlicResponse {
    signature: null | string;
    infos: {
        info: Info[];
    };
    items: Items | null;
    ttl: string | null;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type ApiKeyRoleKeys = keyof typeof ApiKeyRole;
type ApiKeyRoleValues = (typeof ApiKeyRole)[ApiKeyRoleKeys];

type LicenseeSecretModeKeys = keyof typeof LicenseeSecretMode;
type LicenseeSecretModeValues = (typeof LicenseeSecretMode)[LicenseeSecretModeKeys];

type NodeSecretModeKeys = keyof typeof NodeSecretMode;
type NodeSecretModeValues = (typeof NodeSecretMode)[NodeSecretModeKeys];

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type LicenseTypeKeys = keyof typeof LicenseType;
type LicenseTypeValues = (typeof LicenseType)[LicenseTypeKeys];

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type LicensingModelKeys = keyof typeof LicensingModel;
type LicensingModelValues = (typeof LicensingModel)[LicensingModelKeys];

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type NotificationEventKeys = keyof typeof NotificationEvent;
type NotificationEventValues = (typeof NotificationEvent)[NotificationEventKeys];

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type NotificationProtocolKeys = keyof typeof NotificationProtocol;
type NotificationProtocolValues = (typeof NotificationProtocol)[NotificationProtocolKeys];

type PaymentMethodKeys = keyof typeof PaymentMethodEnum;
type PaymentMethodValues = (typeof PaymentMethodEnum)[PaymentMethodKeys];

type SecurityModeKeys = keyof typeof SecurityMode;
type SecurityModeValues = (typeof SecurityMode)[SecurityModeKeys];

type TimeVolumePeriodKeys = keyof typeof TimeVolumePeriod;
type TimeVolumePeriodValues = (typeof TimeVolumePeriod)[TimeVolumePeriodKeys];

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type TokenTypeKeys = keyof typeof TokenType;
type TokenTypeValues = (typeof TokenType)[TokenTypeKeys];

type TransactionSourceKeys = keyof typeof TransactionSource;
type TransactionSourceValues = (typeof TransactionSource)[TransactionSourceKeys];

type TransactionStatusKeys = keyof typeof TransactionStatus;
type TransactionStatusValues = (typeof TransactionStatus)[TransactionStatusKeys];

type RequiredProps<Base, Keys extends keyof Base> = Required<Pick<Base, Keys>>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
interface EntityMethods<T extends object> {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T, D = undefined>(key: K, def?: D): T[K] | D;
    has<K extends keyof T>(key: K): boolean;
    setProperty<K extends keyof T>(key: K, value: T[K]): void;
    addProperty<K extends keyof T>(key: K, value: T[K]): void;
    getProperty<K extends keyof T, D = undefined>(key: K, def?: D): T[K] | D;
    hasProperty<K extends keyof T>(key: K): boolean;
    setProperties(properties: Partial<T>): void;
    serialize(): Record<string, string>;
}
interface Proto {
    prototype: object;
}
type PropGetEventListener<T> = (obj: T, prop: string | symbol, receiver: unknown) => void;
type PropSetEventListener<T> = (obj: T, prop: string | symbol, value: unknown, receiver: unknown) => void;
type Entity<T extends object, M extends object> = T & M & EntityMethods<T>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
interface CountryProps {
    readonly code: string;
    readonly name: string;
    readonly vatPercent?: number;
    readonly isEu: boolean;
}
interface CountryMethods {
    getCode(): string;
    getName(): string;
    getVatPercent(): number;
    getIsEu(): boolean;
}
type CountryEntity = Entity<CountryProps, CountryMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type LicenseProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    name?: string;
    price?: number;
    currency?: string;
    hidden?: boolean;
    licenseeNumber?: string;
    licenseTemplateNumber?: string;
    timeVolume?: number;
    timeVolumePeriod?: TimeVolumePeriodValues;
    startDate?: Date | 'now';
    parentfeature?: string;
    readonly inUse?: boolean;
} & T;
type SavedLicenseProps<T extends object = object> = RequiredProps<LicenseProps, 'active' | 'number'> & LicenseProps<T>;
interface LicenseMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setPrice(price: number): void;
    getPrice<D = undefined>(def?: D): number | D;
    setCurrency(currency: string): void;
    getCurrency<D = undefined>(def?: D): string | D;
    setHidden(hidden: boolean): void;
    getHidden<D = undefined>(def?: D): boolean | D;
    setLicenseeNumber(number: string): void;
    getLicenseeNumber<D = undefined>(def?: D): string | D;
    setLicenseTemplateNumber(number: string): void;
    getLicenseTemplateNumber<D = undefined>(def?: D): string | D;
    setTimeVolume(timeVolume: number): void;
    getTimeVolume<D = undefined>(def?: D): number | D;
    setTimeVolumePeriod(timeVolumePeriod: TimeVolumePeriodValues): void;
    getTimeVolumePeriod<D = undefined>(def?: D): TimeVolumePeriodValues | D;
    setStartDate(startDate: Date | 'now'): void;
    getStartDate<D = undefined>(def?: D): Date | 'now' | D;
    setParentfeature(parentfeature?: string): void;
    getParentfeature<D = undefined>(def?: D): string | D;
    serialize(): Record<string, string>;
}
type LicenseEntity<T extends object = object> = Entity<LicenseProps<T>, LicenseMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type LicenseeProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    name?: string;
    markedForTransfer?: boolean;
    productNumber?: string;
    readonly inUse?: boolean;
} & T;
type SavedLicenseeProps<T extends object = object> = RequiredProps<LicenseeProps, 'active' | 'number' | 'productNumber'> & LicenseeProps<T>;
interface LicenseeMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setProductNumber(number: string): void;
    getProductNumber<D = undefined>(def?: D): string | D;
    setMarkedForTransfer(mark: boolean): void;
    getMarkedForTransfer<D = undefined>(def?: D): boolean | D;
    serialize(): Record<string, string>;
}
type LicenseeEntity<T extends object = object> = Entity<LicenseeProps<T>, LicenseeMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type LicenseTemplateProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    name?: string;
    licenseType?: LicenseTypeValues;
    price?: number;
    currency?: string;
    automatic?: boolean;
    hidden?: boolean;
    hideLicenses?: boolean;
    gracePeriod?: boolean;
    timeVolume?: number;
    timeVolumePeriod?: TimeVolumePeriodValues;
    maxSessions?: number;
    quantity?: number;
    productModuleNumber?: string;
    readonly inUse?: boolean;
} & T;
type SavedLicenseTemplateProps<T extends object = object> = RequiredProps<LicenseTemplateProps, 'active' | 'number' | 'licenseType'> & LicenseTemplateProps<T>;
interface LicenseTemplateMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setLicenseType(type: LicenseTypeValues): void;
    getLicenseType<D = undefined>(def?: D): LicenseTypeValues | D;
    setPrice(price: number): void;
    getPrice<D = undefined>(def?: D): number | D;
    setCurrency(currency: string): void;
    getCurrency<D = undefined>(def?: D): string | D;
    setAutomatic(automatic: boolean): void;
    getAutomatic<D = undefined>(def?: D): boolean | D;
    setHidden(hidden: boolean): void;
    getHidden<D = undefined>(def?: D): boolean | D;
    setHideLicenses(hideLicenses: boolean): void;
    getHideLicenses<D = undefined>(def?: D): boolean | D;
    setGracePeriod(gradePeriod: boolean): void;
    getGracePeriod<D = undefined>(def?: D): boolean | D;
    setTimeVolume(timeVolume: number): void;
    getTimeVolume<D = undefined>(def?: D): number | D;
    setTimeVolumePeriod(timeVolumePeriod: TimeVolumePeriodValues): void;
    getTimeVolumePeriod<D = undefined>(def?: D): TimeVolumePeriodValues | D;
    setMaxSessions(maxSessions: number): void;
    getMaxSessions<D = undefined>(def?: D): number | D;
    setQuantity(quantity: number): void;
    getQuantity<D = undefined>(def?: D): number | D;
    setProductModuleNumber(productModuleNumber: string): void;
    getProductModuleNumber<D = undefined>(def?: D): string | D;
    serialize(): Record<string, string>;
}
type LicenseTemplateEntity<T extends object = object> = Entity<LicenseTemplateProps<T>, LicenseTemplateMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type TransactionProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    status?: TransactionStatusValues;
    source?: TransactionSourceValues;
    grandTotal?: number;
    discount?: number;
    currency?: string;
    dateCreated?: Date;
    dateClosed?: Date;
    paymentMethod?: PaymentMethodValues;
    licenseTransactionJoins?: LicenseTransactionJoinEntity[];
    readonly inUse?: boolean;
} & T;
type SavedTransactionProps<T extends object = object> = RequiredProps<TransactionProps, 'active' | 'number' | 'status' | 'dateCreated'> & TransactionProps<T>;
interface TransactionMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setStatus(status: TransactionStatusValues): void;
    getStatus<D = undefined>(def?: D): TransactionStatusValues | D;
    setSource(source: TransactionSourceValues): void;
    getSource<D = undefined>(def?: D): TransactionSourceValues | D;
    setGrandTotal(grandTotal: number): void;
    getGrandTotal<D = undefined>(def?: D): number | D;
    setDiscount(discount: number): void;
    getDiscount<D = undefined>(def?: D): number | D;
    setCurrency(currency: string): void;
    getCurrency<D = undefined>(def?: D): string | D;
    setDateCreated(dateCreated: Date): void;
    getDateCreated<D = undefined>(def?: D): Date | D;
    setDateClosed(dateCreated: Date): void;
    getDateClosed<D = undefined>(def?: D): Date | D;
    setPaymentMethod(paymentMethod: PaymentMethodValues): void;
    getPaymentMethod<D = undefined>(def?: D): PaymentMethodValues | D;
    setLicenseTransactionJoins(joins: LicenseTransactionJoinEntity[]): void;
    getLicenseTransactionJoins<D = undefined>(def?: D): LicenseTransactionJoinEntity[] | D;
    serialize(): Record<string, string>;
}
type TransactionEntity<T extends object = object> = Entity<TransactionProps<T>, TransactionMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface LicenseTransactionJoinProps {
    transaction: TransactionEntity;
    license: LicenseEntity;
}
interface LicenseTransactionJoinMethods {
    setTransaction(t: TransactionEntity): void;
    getTransaction(): TransactionEntity;
    setLicense(l: LicenseEntity): void;
    getLicense(): LicenseEntity;
}
type LicenseTransactionJoinEntity = LicenseTransactionJoinProps & LicenseTransactionJoinMethods;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type NotificationProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    name?: string;
    protocol?: NotificationProtocolValues;
    events?: NotificationEventValues[];
    payload?: string;
    endpoint?: string;
} & T;
type SavedNotificationProps<T extends object = object> = RequiredProps<NotificationProps, 'active' | 'number' | 'name' | 'protocol' | 'events' | 'endpoint'> & NotificationProps<T>;
interface NotificationMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setProtocol(protocol: NotificationProtocolValues): void;
    getProtocol<D = undefined>(def?: D): NotificationProtocolValues | D;
    setEvents(events: NotificationEventValues[]): void;
    getEvents<D = undefined>(def?: D): NotificationEventValues[] | D;
    addEvent(event: NotificationEventValues): void;
    setPayload(payload: string): void;
    getPayload<D = undefined>(def?: D): string | D;
    setEndpoint(endpoint: string): void;
    getEndpoint<D = undefined>(def?: D): string | D;
    serialize(): Record<string, string>;
}
type NotificationEntity<T extends object = object> = Entity<NotificationProps<T>, NotificationMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type PaymentMethodProps<T = object> = T & {
    active?: boolean;
    number?: string;
};
type SavedPaymentMethodProps<T extends object = object> = RequiredProps<PaymentMethodProps, 'active' | 'number'> & PaymentMethodProps<T>;
interface PaymentMethodMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
}
type PaymentMethodEntity<T = object> = Entity<PaymentMethodProps<T>, PaymentMethodMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ProductDiscountProps {
    totalPrice?: number;
    currency?: string;
    amountFix?: number;
    amountPercent?: number;
}
interface ProductDiscountMethods {
    setTotalPrice(totalPrice: number): void;
    getTotalPrice<D = undefined>(def?: D): number | D;
    setCurrency(currency: string): void;
    getCurrency<D = undefined>(def?: D): string | D;
    setAmountFix(amountFix: number): void;
    getAmountFix<D = undefined>(def?: D): number | D;
    setAmountPercent(amountPercent: number): void;
    getAmountPercent<D = undefined>(def?: D): number | D;
    toString(): string;
}
type ProductDiscountEntity = Entity<ProductDiscountProps, ProductDiscountMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type ProductProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    name?: string;
    version?: string | number;
    description?: string;
    licensingInfo?: string;
    licenseeAutoCreate?: boolean;
    discounts?: ProductDiscountEntity[];
    readonly inUse?: boolean;
} & T;
type SavedProductProps<T extends object = object> = RequiredProps<ProductProps, 'active' | 'number' | 'inUse'> & ProductProps<T>;
interface ProductMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setVersion(version: string): void;
    getVersion<D = undefined>(def?: D): string | number | D;
    setDescription(description: string): void;
    getDescription<D = undefined>(def?: D): string | D;
    setLicensingInfo(licensingInfo: string): void;
    getLicensingInfo<D = undefined>(def?: D): string | D;
    setLicenseeAutoCreate(licenseeAutoCreate: boolean): void;
    getLicenseeAutoCreate<D = undefined>(def?: D): boolean | D;
    setDiscounts(discounts: ProductDiscountEntity[]): void;
    getDiscounts<D = undefined>(def?: D): ProductDiscountEntity[] | D;
    addDiscount(discount: ProductDiscountEntity): void;
    removeDiscount(discount: ProductDiscountEntity): void;
    setProductDiscounts(productDiscounts: ProductDiscountEntity[]): void;
    getProductDiscounts<D = undefined>(def?: D): ProductDiscountEntity[] | D;
    serialize(): Record<string, string | string[]>;
}
type ProductEntity<T extends object = object> = Entity<ProductProps<T>, ProductMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type ProductModuleProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    name?: string;
    licensingModel?: LicensingModelValues;
    maxCheckoutValidity?: number;
    yellowThreshold?: number;
    redThreshold?: number;
    productNumber?: string;
    nodeSecretMode?: NodeSecretModeValues;
    readonly inUse?: boolean;
} & T;
type SavedProductModuleProps<T extends object = object> = RequiredProps<ProductModuleProps, 'active' | 'number' | 'licensingModel' | 'productNumber' | 'inUse'> & ProductModuleProps<T>;
interface ProductModuleMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setLicensingModel(licensingModel: LicensingModelValues): void;
    getLicensingModel<D = undefined>(def?: D): LicensingModelValues | D;
    setMaxCheckoutValidity(maxCheckoutValidity: number): void;
    getMaxCheckoutValidity<D = undefined>(def?: D): number | D;
    setYellowThreshold(yellowThreshold: number): void;
    getYellowThreshold<D = undefined>(def?: D): number | D;
    setRedThreshold(redThreshold: number): void;
    getRedThreshold<D = undefined>(def?: D): number | D;
    setProductNumber(productNumber: string): void;
    getProductNumber<D = undefined>(def?: D): string | D;
    serialize(): Record<string, string>;
}
type ProductModuleEntity<T extends object = object> = Entity<ProductModuleProps<T>, ProductModuleMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type TokenProps<T extends object = object> = {
    active?: boolean;
    number?: string;
    expirationTime?: Date;
    tokenType?: TokenTypeValues;
    licenseeNumber?: string;
    action?: string;
    apiKeyRole?: ApiKeyRoleValues;
    bundleNumber?: string;
    bundlePrice?: number;
    productNumber?: string;
    predefinedShoppingItem?: string;
    successURL?: string;
    successURLTitle?: string;
    cancelURL?: string;
    cancelURLTitle?: string;
    readonly shopURL?: string;
} & T;
type SavedTokenProps<T extends object = object> = RequiredProps<TokenProps, 'active' | 'number' | 'tokenType'> & TokenProps<T>;
interface TokenMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setExpirationTime(expirationTime: Date): void;
    getExpirationTime<D = undefined>(def?: D): Date | D;
    setTokenType(tokenType: TokenTypeValues): void;
    getTokenType<D = undefined>(def?: D): TokenTypeValues | D;
    setLicenseeNumber(licenseeNumber: string): void;
    getLicenseeNumber<D = undefined>(def?: D): string | D;
    setAction(action: string): void;
    getAction<D = undefined>(def?: D): string | D;
    setApiKeyRole(apiKeyRole: ApiKeyRoleValues): void;
    getApiKeyRole<D = undefined>(def?: D): ApiKeyRoleValues | D;
    setBundleNumber(bundleNumber: string): void;
    getBundleNumber<D = undefined>(def?: D): string | D;
    setBundlePrice(bundlePrice: number): void;
    getBundlePrice<D = undefined>(def?: D): number | D;
    setProductNumber(productNumber: string): void;
    getProductNumber<D = undefined>(def?: D): string | D;
    setPredefinedShoppingItem(predefinedShoppingItem: string): void;
    getPredefinedShoppingItem<D = undefined>(def?: D): string | D;
    setSuccessURL(successURL: string): void;
    getSuccessURL<D = undefined>(def?: D): string | D;
    setSuccessURLTitle(successURLTitle: string): void;
    getSuccessURLTitle<D = undefined>(def?: D): string | D;
    setCancelURL(cancelURL: string): void;
    getCancelURL<D = undefined>(def?: D): string | D;
    setCancelURLTitle(cancelURLTitle: string): void;
    getCancelURLTitle<D = undefined>(def?: D): string | D;
    getShopURL<D = undefined>(def?: D): string | D;
    serialize(): Record<string, string>;
}
type TokenEntity<T extends object = object> = Entity<TokenProps<T>, TokenMethods>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ContextConfig {
    baseUrl?: string;
    securityMode?: SecurityModeValues;
    username?: string;
    password?: string;
    apiKey?: string;
    publicKey?: string;
}
interface ContextInstance extends ContextConfig {
    baseUrl: string;
    securityMode: SecurityModeValues;
    setBaseUrl(baseUrl: string): this;
    getBaseUrl(): string;
    setSecurityMode(securityMode: SecurityModeValues): this;
    getSecurityMode(): SecurityModeValues;
    setUsername(username: string): this;
    getUsername<D = undefined>(def?: D): string | D;
    setPassword(password: string): this;
    getPassword<D = undefined>(def?: D): string | D;
    setApiKey(apiKey: string): this;
    getApiKey<D = undefined>(def?: D): string | D;
    setPublicKey(publicKey: string): this;
    getPublicKey<D = undefined>(def?: D): string | D;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface RequestConfig {
    onInfo?: (info: Info[]) => void;
    onResponse?: (response: AxiosResponse) => void;
    axiosInstance?: AxiosInstance;
}
interface IService {
    setAxiosInstance(this: void, instance: AxiosInstance): void;
    getAxiosInstance(this: void): AxiosInstance;
    getLastHttpRequestInfo(this: void): AxiosResponse | null;
    getInfo(this: void): Info[];
    /**
     * this: void
     * @param context
     * @param endpoint
     * @param data
     * @param config
     */
    get(this: void, context: ContextInstance, endpoint: string, data?: Record<string, unknown>, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
    post(this: void, context: ContextInstance, endpoint: string, data?: Record<string, unknown>, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
    delete(this: void, context: ContextInstance, endpoint: string, data?: Record<string, unknown>, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
    request(this: void, context: ContextInstance, method: Method, endpoint: string, data?: Record<string, unknown>, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
    toQueryString<T extends Record<string, unknown>>(data: T): string;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
interface Pagination {
    pageNumber: number;
    itemsNumber: number;
    totalPages: number;
    totalItems: number;
    hasNext: boolean;
}
interface PaginationMethods<T extends object> {
    getContent(): T;
    getPagination(): Pagination;
    getPageNumber(): number;
    getItemsNumber(): number;
    getTotalPages(): number;
    getTotalItems(): number;
    hasNext(): boolean;
}
type PageInstance<T extends object> = PaginationMethods<T> & T;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface IBundleService {
    get<T extends object = BundleProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<BundleEntity<SavedBundleProps<T>>>;
    list<T extends object = BundleProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<BundleEntity<SavedBundleProps<T>>[]>>;
    create<T extends object = BundleProps>(context: ContextInstance, bundle: BundleEntity<T>, config?: RequestConfig): Promise<BundleEntity<SavedBundleProps<T>>>;
    update<T extends object = BundleProps>(context: ContextInstance, number: string, bundle: BundleEntity<T>, config?: RequestConfig): Promise<BundleEntity<SavedBundleProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
    obtain<T extends object = LicenseProps>(context: ContextInstance, number: string, licenseeNumber: string, config?: RequestConfig): Promise<LicenseEntity<SavedLicenseProps<T>>[]>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
type Parameter = Record<string, string>;
type Parameters = Record<string, Parameter>;
interface LicenseeProperties {
    licenseeName?: string;
    licenseeSecret?: string;
    [key: string]: string | undefined;
}
interface ValidationParametersInstance {
    productNumber?: string;
    dryRun?: boolean;
    forOfflineUse?: boolean;
    licenseeProperties: LicenseeProperties;
    parameters: Parameters;
    setProductNumber(productNumber: string): this;
    getProductNumber(): string | undefined;
    setLicenseeName(name: string): this;
    getLicenseeName(): string | undefined;
    setLicenseeSecret(secret: string): this;
    getLicenseeSecret(): string | undefined;
    getLicenseeProperties(): LicenseeProperties;
    setLicenseeProperty(key: string, value: string): this;
    getLicenseeProperty<D = undefined>(key: string, def?: D): string | D;
    setForOfflineUse(forOfflineUse: boolean): this;
    isForOfflineUse(): boolean;
    setDryRun(dryRun: boolean): this;
    isDryRun(): boolean;
    setParameter(productModuleNumber: string, parameter: Parameter): this;
    getParameters(): Parameters;
    getParameter(productModuleNumber: string): Parameter | undefined;
    setProductModuleValidationParameters(productModuleNumber: string, productModuleParameters: Parameter): this;
    getProductModuleValidationParameters(productModuleNumber: string): Parameter | undefined;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
interface ProductModuleValidation {
    productModuleNumber: string;
    [key: string]: string;
}
interface ValidationResultsInstance {
    readonly validations: Record<string, ProductModuleValidation>;
    ttl?: Date;
    getValidators(): Record<string, ProductModuleValidation>;
    setValidation(validation: ProductModuleValidation): this;
    getValidation<D = undefined>(productModuleNumber: string, def?: D): ProductModuleValidation | D;
    setProductModuleValidation(validation: ProductModuleValidation): this;
    getProductModuleValidation<D = undefined>(productModuleNumber: string, def?: D): ProductModuleValidation | D;
    setTtl(ttl: Date | string): this;
    getTtl(): Date | undefined;
    toString(): string;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ILicenseeService {
    get<T extends object = LicenseeProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<LicenseeEntity<SavedLicenseeProps<T>>>;
    list<T extends object = LicenseeProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<LicenseeEntity<SavedLicenseeProps<T>>[]>>;
    create<T extends object = LicenseeProps>(context: ContextInstance, productNumber: string, licensee: LicenseeEntity<T>, config?: RequestConfig): Promise<LicenseeEntity<SavedLicenseeProps<T>>>;
    update<T extends object = LicenseeProps>(context: ContextInstance, number: string, licensee: LicenseeEntity<T>, config?: RequestConfig): Promise<LicenseeEntity<SavedLicenseeProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
    validate(context: ContextInstance, number: string, parameters?: ValidationParametersInstance, config?: RequestConfig): Promise<ValidationResultsInstance>;
    transfer(context: ContextInstance, number: string, sourceLicenseeNumber: string, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ILicenseService {
    get<T extends object = LicenseProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<LicenseEntity<SavedLicenseProps<T>>>;
    list<T extends object = LicenseProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<LicenseEntity<SavedLicenseProps<T>>[]>>;
    create<T extends object = LicenseProps>(context: ContextInstance, licenseeNumber: string | null, licenseTemplateNumber: string | null, transactionNumber: string | null, license: LicenseEntity<T>, config?: RequestConfig): Promise<LicenseEntity<SavedLicenseProps<T>>>;
    update<T extends object = LicenseProps>(context: ContextInstance, number: string, transactionNumber: string | null, license: LicenseEntity<T>, config?: RequestConfig): Promise<LicenseEntity<SavedLicenseProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ILicenseTemplateService {
    get<T extends object = LicenseTemplateProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<LicenseTemplateEntity<SavedLicenseTemplateProps<T>>>;
    list<T extends object = LicenseTemplateProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<LicenseTemplateEntity<SavedLicenseTemplateProps<T>>[]>>;
    create<T extends object = LicenseTemplateProps>(context: ContextInstance, productModuleNumber: string | null, licenseTemplate: LicenseTemplateEntity<T>, config?: RequestConfig): Promise<LicenseTemplateEntity<SavedLicenseTemplateProps<T>>>;
    update<T extends object = LicenseTemplateProps>(context: ContextInstance, number: string, licenseTemplate: LicenseTemplateEntity<T>, config?: RequestConfig): Promise<LicenseTemplateEntity<SavedLicenseTemplateProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface INotificationService {
    get<T extends object = NotificationProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<NotificationEntity<SavedNotificationProps<T>>>;
    list<T extends object = NotificationProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<NotificationEntity<SavedNotificationProps<T>>[]>>;
    create<T extends object = NotificationProps>(context: ContextInstance, notification: NotificationEntity<T>, config?: RequestConfig): Promise<NotificationEntity<SavedNotificationProps<T>>>;
    update<T extends object = NotificationProps>(context: ContextInstance, number: string, notification: NotificationEntity<T>, config?: RequestConfig): Promise<NotificationEntity<SavedNotificationProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface IPaymentMethodService {
    get<T extends object = PaymentMethodProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<PaymentMethodEntity<SavedPaymentMethodProps<T>>>;
    list<T extends object = PaymentMethodProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<PaymentMethodEntity<SavedPaymentMethodProps<T>>[]>>;
    update<T extends object = PaymentMethodProps>(context: ContextInstance, number: string, paymentMethod: PaymentMethodEntity<T>, config?: RequestConfig): Promise<PaymentMethodEntity<SavedPaymentMethodProps<T>>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface IProductModuleService {
    get<T extends object = ProductModuleProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<ProductModuleEntity<SavedProductModuleProps<T>>>;
    list<T extends object = ProductModuleProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<ProductModuleEntity<SavedProductModuleProps<T>>[]>>;
    create<T extends object = ProductModuleProps>(context: ContextInstance, productNumber: string | null, productModule: ProductModuleEntity<T>, config?: RequestConfig): Promise<ProductModuleEntity<SavedProductModuleProps<T>>>;
    update<T extends object = ProductModuleProps>(context: ContextInstance, number: string, productModule: ProductModuleEntity<T>, config?: RequestConfig): Promise<ProductModuleEntity<SavedProductModuleProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface IProductService {
    get<T extends object = ProductProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<ProductEntity<SavedProductProps<T>>>;
    list<T extends object = ProductProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<ProductEntity<SavedProductProps<T>>[]>>;
    create<T extends object = ProductProps>(context: ContextInstance, product: ProductEntity<T>, config?: RequestConfig): Promise<ProductEntity<SavedProductProps<T>>>;
    update<T extends object = ProductProps>(context: ContextInstance, number: string, product: ProductEntity<T>, config?: RequestConfig): Promise<ProductEntity<SavedProductProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ITokenService {
    get<T extends object = TokenProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<TokenEntity<SavedTokenProps<T>>>;
    list<T extends object = TokenProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<TokenEntity<SavedTokenProps<T>>[]>>;
    create<T extends object = TokenProps>(context: ContextInstance, token: TokenEntity<T>, config?: RequestConfig): Promise<TokenEntity<SavedTokenProps<T>>>;
    delete(context: ContextInstance, number: string, forceCascade?: boolean, config?: RequestConfig): Promise<AxiosResponse<NlicResponse>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface ITransactionService {
    get<T extends object = TransactionProps>(context: ContextInstance, number: string, config?: RequestConfig): Promise<TransactionEntity<SavedTransactionProps<T>>>;
    list<T extends object = TransactionProps>(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<TransactionEntity<SavedTransactionProps<T>>[]>>;
    create<T extends object = TransactionProps>(context: ContextInstance, transaction: TransactionEntity<T>, config?: RequestConfig): Promise<TransactionEntity<SavedTransactionProps<T>>>;
    update<T extends object = TransactionProps>(context: ContextInstance, number: string, transaction: TransactionEntity<T>, config?: RequestConfig): Promise<TransactionEntity<SavedTransactionProps<T>>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

interface IUtilityService {
    listLicenseTypes(context: ContextInstance, config?: RequestConfig): Promise<PageInstance<LicenseTypeValues[]>>;
    listLicensingModels(context: ContextInstance, config?: RequestConfig): Promise<PageInstance<LicensingModelValues[]>>;
    listCountries(context: ContextInstance, filter?: Record<string, string | boolean | number> | string | null, config?: RequestConfig): Promise<PageInstance<CountryEntity[]>>;
}

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

type BundleProps<T extends object = object> = T & {
    active?: boolean;
    number?: string;
    name?: string;
    price?: number;
    currency?: string;
    licenseTemplateNumbers?: string[];
};
type SavedBundleProps<T extends object = object> = RequiredProps<BundleProps, 'active' | 'number' | 'name'> & BundleProps<T>;
interface BundleMethods {
    setActive(active: boolean): void;
    getActive<D = undefined>(def?: D): boolean | D;
    setNumber(number: string): void;
    getNumber<D = undefined>(def?: D): string | D;
    setName(name: string): void;
    getName<D = undefined>(def?: D): string | D;
    setPrice(price: number): void;
    getPrice<D = undefined>(def?: D): number | D;
    setCurrency(currency: string): void;
    getCurrency<D = undefined>(def?: D): string | D;
    setLicenseTemplateNumbers(numbers: string[]): void;
    getLicenseTemplateNumbers<D = undefined>(def?: D): string[] | D;
    addLicenseTemplateNumber(number: string): void;
    removeLicenseTemplateNumber(number: string): void;
    serialize(): Record<string, string>;
}
type BundleEntity<T extends object = object> = Entity<BundleProps<T>, BundleMethods>;

declare const _default$f: <T extends object = BundleProps>(item?: Item) => BundleEntity<T>;

declare const _default$e: (item?: Item) => CountryEntity;

declare const _default$d: <T extends object = LicenseProps>(item?: Item) => LicenseEntity<T>;

declare const _default$c: <T extends object = LicenseeProps>(item?: Item) => LicenseeEntity<T>;

declare const _default$b: <T extends object = LicenseTemplateProps>(item?: Item) => LicenseTemplateEntity<T>;

declare const _default$a: <T extends object = NotificationProps>(item?: Item) => NotificationEntity<T>;

declare const itemToObject: <T extends object = Record<string, unknown>>(item?: Item | List) => T;

declare const _default$9: <T extends object = PaymentMethodProps>(item?: Item) => PaymentMethodEntity<T>;

declare const _default$8: <T extends object = ProductProps>(item?: Item) => ProductEntity<T>;

declare const _default$7: <T extends object = ProductModuleProps>(item?: Item) => ProductModuleEntity<T>;

declare const _default$6: <T extends object = TokenProps>(item?: Item) => TokenEntity<T>;

declare const _default$5: <T extends object = TransactionProps>(item?: Item) => TransactionEntity<T>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * NetLicensing Bundle entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the bundle. Vendor can assign this number when creating a bundle or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the bundle is disabled.
 * @property boolean active
 *
 * Bundle name.
 * @property string name
 *
 * Price for the bundle. If >0, it must always be accompanied by the currency specification.
 * @property number price
 *
 * Specifies currency for the bundle price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * The bundle includes a set of templates, each identified by a unique template number.
 * @property string[] licenseTemplateNumbers
 *
 * Arbitrary additional user properties of string type may be associated with each bundle. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 */
declare const Bundle: <T extends object>(properties?: BundleProps<T>) => BundleEntity<T>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * @property code - Unique code of country.
 * @property name - Unique name of country
 * @property vatPercent - Country vat.
 * @property isEu - is country in EU.
 */
declare const Country: (properties?: CountryProps) => CountryEntity;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

declare const defineEntity: <P extends Proto, T extends object, M extends object>(props: T, methods: M, proto?: P, options?: {
    set?: PropSetEventListener<T>;
    get?: PropGetEventListener<T>;
}) => Entity<T, M>;

/**
 * License entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can
 * assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation
 * transaction status is set to closed.
 * @property string number
 *
 * Name for the licensed item. Set from license template on creation, if not specified explicitly.
 * @property string name
 *
 * If set to false, the license is disabled. License can be re-enabled, but as long as it is disabled,
 * the license is excluded from the validation process.
 * @property boolean active
 *
 * price for the license. If >0, it must always be accompanied by the currency specification. Read-only,
 * set from license template on creation.
 * @property number price
 *
 * specifies currency for the license price. Check data types to discover which currencies are
 * supported. Read-only, set from license template on creation.
 * @property string currency
 *
 * If set to true, this license is not shown in NetLicensing Shop as purchased license. Set from license
 * template on creation, if not specified explicitly.
 * @property boolean hidden
 *
 * The unique identifier assigned to the licensee (the entity to whom the license is issued). This number is typically
 * associated with a specific customer or organization. It is used internally to reference the licensee and cannot be
 * changed after the license is created.
 * @property string licenseeNumber
 *
 * The unique identifier for the license template from which this license was created.
 * @property string licenseTemplateNumber
 *
 * A boolean flag indicating whether the license is actively being used. If true, it means the license is currently in
 * use. If false, the license is not currently assigned or in use.
 * @property boolean inUse
 *
 * This parameter is specific to TimeVolume licenses and indicates the total volume of time (e.g., in hours, days, etc.)
 * associated with the license. This value defines the amount of time the license covers, which may affect the usage
 * period and limits associated with the license.
 * @property number timeVolume
 *
 * Also, specific to TimeVolume licenses, this field defines the period of time for the timeVolume
 * (e.g., "DAY", "WEEK", "MONTH", "YEAR"). It provides the time unit for the timeVolume value, clarifying whether the
 * time is measured in days, weeks, or any other defined period.
 * @property string timeVolumePeriod
 *
 * For TimeVolume licenses, this field indicates the start date of the license’s validity period. This date marks when
 * the license becomes active and the associated time volume starts being consumed.
 * It can be represented as a string "now" or a Date object.
 * @property string|Date Date startDate
 *
 * Parent(Feature) license number
 * @property string parentfeature
 *
 * Arbitrary additional user properties of string type may be associated with each license. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, licenseeNumber,
 * licenseTemplateNumber.
 */
declare const License: <T extends object>(properties?: LicenseProps<T>) => LicenseEntity<T>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing  generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee deprecated use Node-Locked Licensing Model instead
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 */
declare const Licensee: <T extends object>(properties?: LicenseeProps<T>) => LicenseeEntity<T>;

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing  generate one.
 * Read-only after creation of the first license from this license template.
 * @property string number
 *
 * If set to false, the license template is disabled. Licensee can not obtain any new licenses off this
 * license template.
 * @property boolean active
 *
 * Name for the licensed item.
 * @property string name
 *
 * Type of licenses created from this license template. Supported types: "FEATURE", "TIMEVOLUME",
 * "FLOATING", "QUANTITY"
 * @property string licenseType
 *
 * Price for the license. If >0, it must always be accompanied by the currency specification.
 * @property number price
 *
 * Specifies currency for the license price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * If set to true, every new licensee automatically gets one license out of this license template on
 * creation. Automatic licenses must have their price set to 0.
 * @property boolean automatic
 *
 * If set to true, this license template is not shown in NetLicensing  Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * If set to true, this license template defines grace period of validity granted after subscription expiration.
 * @property boolean gracePeriod
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property number timeVolume
 *
 * Time volume period for 'TIMEVOLUME' license type. Supported types: "DAY", "WEEK", "MONTH", "YEAR"
 * @property string timeVolumePeriod
 *
 * Mandatory for 'FLOATING' license type.
 * @property number maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property number quantity
 */
declare const LicenseTemplate: <T extends object>(properties?: LicenseTemplateProps<T>) => LicenseTemplateEntity<T>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare class LicenseTransactionJoin implements LicenseTransactionJoinEntity {
    transaction: TransactionEntity;
    license: LicenseEntity;
    constructor(transaction: TransactionEntity, license: LicenseEntity);
    setTransaction(transaction: TransactionEntity): void;
    getTransaction(): TransactionEntity;
    setLicense(license: LicenseEntity): void;
    getLicense(): LicenseEntity;
}
declare const _default$4: (transaction: TransactionEntity, license: LicenseEntity) => LicenseTransactionJoin;

/**
 * NetLicensing Notification entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the notification. Vendor can assign this number when creating a notification or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the notification is disabled. The notification will not be fired when the event triggered.
 * @property boolean active
 *
 * Notification name.
 * @property string name
 *
 * Notification type. Indicate the method of transmitting notification, ex: EMAIL, WEBHOOK.
 * @property float type
 *
 * Comma separated string of events that fire the notification when emitted.
 * @property string events
 *
 * Notification response payload.
 * @property string payload
 *
 * Notification response url. Optional. Uses only for WEBHOOK type notification.
 * @property string url
 *
 * Arbitrary additional user properties of string type may be associated with each notification.
 * The name of user property must not be equal to any of the fixed property names listed above and must be none of id,
 * deleted.
 */
declare const Notification: <T extends object>(properties?: NotificationProps<T>) => NotificationEntity<T>;

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 * @property string paypal.subject
 */
declare const PaymentMethod: <T extends object>(properties?: PaymentMethodProps<T>) => PaymentMethodEntity<T>;

/**
 * NetLicensing  Product entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the product. Vendor can assign this number when creating a product or
 * let NetLicensing  generate one. Read-only after creation of the first licensee for the product.
 * @property string number
 *
 * If set to false, the product is disabled. No new licensees can be registered for the product,
 * existing licensees can not obtain new licenses.
 * @property boolean active
 *
 * Product name. Together with the version identifies the product for the end customer.
 * @property string name
 *
 * Product version. Convenience parameter, additional to the product name.
 * @property string version
 *
 * If set to 'true', non-existing licensees will be created at first validation attempt.
 * @property boolean licenseeAutoCreate
 *
 * Licensee secret mode for product.Supported types: "DISABLED", "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * Product description. Optional.
 * @property string description
 *
 * Licensing information. Optional.
 * @property string licensingInfo
 *
 * @property boolean inUse
 *
 * Arbitrary additional user properties of string type may be associated with each product. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 */
declare const Product: <T extends object = object>(properties?: ProductProps<T>) => ProductEntity<T>;

declare const ProductDiscount: (properties?: ProductDiscountProps) => ProductDiscountEntity;

/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the product module. Vendor can assign
 * this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first
 * licensee for the product.
 * @property string number
 *
 * If set to false, the product module is disabled. Licensees can not obtain any new licenses for this
 * product module.
 * @property boolean active
 *
 * Product module name that is visible to the end customers in NetLicensing Shop.
 * @property string name
 *
 * Licensing model applied to this product module. Defines what license templates can be
 * configured for the product module and how licenses for this product module are processed during validation.
 * @property string licensingModel
 *
 * Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
 * @property number maxCheckoutValidity
 *
 * Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
 * @property number yellowThreshold
 *
 * Remaining time volume for red level. Mandatory for 'Rental' licensing model.
 * @property number redThreshold
 */
declare const ProductModule: <T extends object = object>(properties?: ProductModuleProps<T>) => ProductModuleEntity<T>;

declare const Token: <T extends object = object>(properties?: TokenProps<T>) => TokenEntity<T>;

/**
 * Transaction entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the transaction. This number is
 * always generated by NetLicensing.
 * @property string number
 *
 * always true for transactions
 * @property boolean active
 *
 * Status of transaction. "CANCELLED", "CLOSED", "PENDING".
 * @property string status
 *
 * "SHOP". AUTO transaction for internal use only.
 * @property string source
 *
 * grand total for SHOP transaction (see source).
 * @property number grandTotal
 *
 * discount for SHOP transaction (see source).
 * @property number discount
 *
 * specifies currency for money fields (grandTotal and discount). Check data types to discover which
 * @property string currency
 *
 * Date created. Optional.
 * @property string dateCreated
 *
 * Date closed. Optional.
 * @property string dateClosed
 */
declare const Transaction: <T extends object>(properties?: TransactionProps<T>) => TransactionEntity<T>;

declare class NlicError<T = unknown, D = unknown> extends AxiosError<T, D> {
    isNlicError: boolean;
    constructor(message?: string, code?: string, config?: InternalAxiosRequestConfig<D>, request?: unknown, response?: AxiosResponse<T, D>, stack?: string);
}

declare const bundleService: IBundleService;

declare const licenseeService: ILicenseeService;

declare const licenseService: ILicenseService;

declare const licenseTemplateService: ILicenseTemplateService;

declare const notificationService: INotificationService;

declare const paymentMethodService: IPaymentMethodService;

declare const productModuleService: IProductModuleService;

declare const productService: IProductService;

declare const service: IService;

declare const tokenService: ITokenService;

declare const transactionService: ITransactionService;

declare const utilityService: IUtilityService;

declare const encode: (filter: Record<string, string | boolean | number>) => string;
declare const decode: (filter: string) => Record<string, string>;

/**
 * Converts an object into a map of type Record<string, string>, where the value of each object property is converted
 * to a string.
 * If the property's value is `undefined`, it will be replaced with an empty string.
 * If the value is already a string, it will remain unchanged.
 * If the value is Date instance, it wll be replaced with an ISO format date string.
 * For complex types (objects, arrays, etc.), the value will be serialized into a JSON string.
 * If serialization fails, the value will be converted to a string using `String()`.
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 *
 * @param obj - The object to be converted into a map.
 * @param options
 * @returns A map (Record<string, string>) with converted property values from the object.
 */
declare const _default$3: <T extends object>(obj: T, options?: {
    ignore?: string[];
}) => Record<string, string>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
declare const isDefined: (value: unknown) => boolean;
declare const isValid: (value: unknown) => boolean;
declare const ensureNotNull: (value: unknown, name: string) => void;
declare const ensureNotEmpty: (value: unknown, name: string) => void;

declare const _default$2: (props?: ContextConfig) => ContextInstance;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

declare const Page: <T extends object>(content: T, pagination?: Partial<ItemPagination>) => PageInstance<T>;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

declare const _default$1: () => ValidationParametersInstance;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

declare const _default: () => ValidationResultsInstance;

export { ApiKeyRole, type ApiKeyRoleKeys, type ApiKeyRoleValues, Bundle, type BundleEntity, type BundleMethods, type BundleProps, bundleService as BundleService, _default$g as Constants, _default$2 as Context, type ContextConfig, type ContextInstance, Country, type CountryEntity, type CountryMethods, type CountryProps, type Entity, type EntityMethods, type IBundleService, type ILicenseService, type ILicenseTemplateService, type ILicenseeService, type INotificationService, type IPaymentMethodService, type IProductModuleService, type IProductService, type IService, type ITokenService, type ITransactionService, type IUtilityService, type Info, type Item, type ItemPagination, type Items, License, type LicenseEntity, type LicenseMethods, type LicenseProps, licenseService as LicenseService, LicenseTemplate, type LicenseTemplateEntity, type LicenseTemplateMethods, type LicenseTemplateProps, licenseTemplateService as LicenseTemplateService, _default$4 as LicenseTransactionJoin, type LicenseTransactionJoinEntity, type LicenseTransactionJoinMethods, type LicenseTransactionJoinProps, LicenseType, type LicenseTypeKeys, type LicenseTypeValues, Licensee, type LicenseeEntity, type LicenseeMethods, type LicenseeProperties, type LicenseeProps, LicenseeSecretMode, type LicenseeSecretModeKeys, type LicenseeSecretModeValues, licenseeService as LicenseeService, LicensingModel, type LicensingModelKeys, type LicensingModelValues, type List, NlicError, type NlicResponse, NodeSecretMode, type NodeSecretModeKeys, type NodeSecretModeValues, Notification, type NotificationEntity, NotificationEvent, type NotificationEventKeys, type NotificationEventValues, type NotificationMethods, type NotificationProps, NotificationProtocol, type NotificationProtocolKeys, type NotificationProtocolValues, notificationService as NotificationService, Page, type PageInstance, type Pagination, type PaginationMethods, type Parameter, type Parameters, PaymentMethod, type PaymentMethodEntity, PaymentMethodEnum, type PaymentMethodKeys, type PaymentMethodMethods, type PaymentMethodProps, paymentMethodService as PaymentMethodService, type PaymentMethodValues, Product, ProductDiscount, type ProductDiscountEntity, type ProductDiscountMethods, type ProductDiscountProps, type ProductEntity, type ProductMethods, ProductModule, type ProductModuleEntity, type ProductModuleMethods, type ProductModuleProps, productModuleService as ProductModuleService, type ProductModuleValidation, type ProductProps, productService as ProductService, type PropGetEventListener, type PropSetEventListener, type Proto, type RequestConfig, type RequiredProps, type SavedBundleProps, type SavedLicenseProps, type SavedLicenseTemplateProps, type SavedLicenseeProps, type SavedNotificationProps, type SavedPaymentMethodProps, type SavedProductModuleProps, type SavedProductProps, type SavedTokenProps, type SavedTransactionProps, SecurityMode, type SecurityModeKeys, type SecurityModeValues, service as Service, TimeVolumePeriod, type TimeVolumePeriodKeys, type TimeVolumePeriodValues, Token, type TokenEntity, type TokenMethods, type TokenProps, tokenService as TokenService, TokenType, type TokenTypeKeys, type TokenTypeValues, Transaction, type TransactionEntity, type TransactionMethods, type TransactionProps, transactionService as TransactionService, TransactionSource, type TransactionSourceKeys, type TransactionSourceValues, TransactionStatus, type TransactionStatusKeys, type TransactionStatusValues, utilityService as UtilityService, _default$1 as ValidationParameters, type ValidationParametersInstance, _default as ValidationResults, type ValidationResultsInstance, defineEntity, ensureNotEmpty, ensureNotNull, decode as filterDecode, encode as filterEncode, isDefined, isValid, _default$f as itemToBundle, _default$e as itemToCountry, _default$d as itemToLicense, _default$b as itemToLicenseTemplate, _default$c as itemToLicensee, _default$a as itemToNotification, itemToObject, _default$9 as itemToPaymentMethod, _default$8 as itemToProduct, _default$7 as itemToProductModule, _default$6 as itemToToken, _default$5 as itemToTransaction, _default$3 as serialize };
