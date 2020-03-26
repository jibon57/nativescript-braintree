
declare class BTAPIClient extends NSObject {

	static alloc(): BTAPIClient; // inherited from NSObject

	static new(): BTAPIClient; // inherited from NSObject

	constructor(o: { authorization: string; });

	GETParametersCompletion(path: string, parameters: NSDictionary<string, string>, completionBlock: (p1: BTJSON, p2: NSHTTPURLResponse, p3: NSError) => void): void;

	POSTParametersCompletion(path: string, parameters: NSDictionary<any, any>, completionBlock: (p1: BTJSON, p2: NSHTTPURLResponse, p3: NSError) => void): void;

	copyWithSourceIntegration(source: BTClientMetadataSourceType, integration: BTClientMetadataIntegrationType): this;

	fetchOrReturnRemoteConfiguration(completionBlock: (p1: BTConfiguration, p2: NSError) => void): void;

	fetchPaymentMethodNonces(completion: (p1: NSArray<BTPaymentMethodNonce>, p2: NSError) => void): void;

	fetchPaymentMethodNoncesCompletion(defaultFirst: boolean, completion: (p1: NSArray<BTPaymentMethodNonce>, p2: NSError) => void): void;

	initWithAuthorization(authorization: string): this;
}

declare var BTAPIClientErrorDomain: string;

declare const enum BTAPIClientErrorType {

	Unknown = 0,

	ConfigurationUnavailable = 1,

	NotAuthorized = 2
}

declare var BTAppContextDidReturnNotification: string;

declare var BTAppContextWillSwitchNotification: string;

declare class BTAppSwitch extends NSObject {

	static alloc(): BTAppSwitch; // inherited from NSObject

	static handleOpenURLOptions(url: NSURL, options: NSDictionary<any, any>): boolean;

	static handleOpenURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	static new(): BTAppSwitch; // inherited from NSObject

	static setReturnURLScheme(returnURLScheme: string): void;

	static sharedInstance(): BTAppSwitch;

	returnURLScheme: string;

	handleOpenURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	registerAppSwitchHandler(handler: typeof NSObject): void;

	unregisterAppSwitchHandler(handler: typeof NSObject): void;
}

interface BTAppSwitchDelegate extends NSObjectProtocol {

	appContextDidReturn?(appSwitcher: any): void;

	appContextWillSwitch?(appSwitcher: any): void;

	appSwitcherDidPerformSwitchToTarget(appSwitcher: any, target: BTAppSwitchTarget): void;

	appSwitcherWillPerformAppSwitch(appSwitcher: any): void;

	appSwitcherWillProcessPaymentInfo(appSwitcher: any): void;
}
declare var BTAppSwitchDelegate: {

	prototype: BTAppSwitchDelegate;
};

declare var BTAppSwitchDidSwitchNotification: string;

interface BTAppSwitchHandler {

	isiOSAppAvailableForAppSwitch?(): boolean;
}
declare var BTAppSwitchHandler: {

	prototype: BTAppSwitchHandler;

	canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	handleAppSwitchReturnURL(url: NSURL): void;
};

declare var BTAppSwitchNotificationTargetKey: string;

declare const enum BTAppSwitchTarget {

	Unknown = 0,

	NativeApp = 1,

	WebBrowser = 2
}

declare var BTAppSwitchWillProcessPaymentInfoNotification: string;

declare var BTAppSwitchWillSwitchNotification: string;

declare class BTApplePayCardNonce extends BTPaymentMethodNonce {

	static alloc(): BTApplePayCardNonce; // inherited from NSObject

	static new(): BTApplePayCardNonce; // inherited from NSObject

	readonly binData: BTBinData;

	constructor(o: { nonce: string; localizedDescription: string; type: string; json: BTJSON; });

	initWithNonceLocalizedDescriptionTypeJson(nonce: string, description: string, type: string, json: BTJSON): this;
}

declare class BTApplePayClient extends NSObject {

	static alloc(): BTApplePayClient; // inherited from NSObject

	static new(): BTApplePayClient; // inherited from NSObject

	constructor(o: { APIClient: BTAPIClient; });

	initWithAPIClient(apiClient: BTAPIClient): this;

	paymentRequest(completion: (p1: PKPaymentRequest, p2: NSError) => void): void;

	tokenizeApplePayPaymentCompletion(payment: PKPayment, completionBlock: (p1: BTApplePayCardNonce, p2: NSError) => void): void;
}

declare var BTApplePayErrorDomain: string;

declare const enum BTApplePayErrorType {

	Unknown = 0,

	Unsupported = 1,

	Integration = 2
}

declare class BTAuthenticationInsight extends NSObject {

	static alloc(): BTAuthenticationInsight; // inherited from NSObject

	static new(): BTAuthenticationInsight; // inherited from NSObject

	regulationEnvironment: string;
}

declare class BTBinData extends NSObject {

	static alloc(): BTBinData; // inherited from NSObject

	static new(): BTBinData; // inherited from NSObject

	readonly commercial: string;

	readonly countryOfIssuance: string;

	readonly debit: string;

	readonly durbinRegulated: string;

	readonly healthcare: string;

	readonly issuingBank: string;

	readonly payroll: string;

	readonly prepaid: string;

	readonly productId: string;

	constructor(o: { JSON: BTJSON; });

	initWithJSON(json: BTJSON): this;
}

declare class BTCard extends NSObject {

	static alloc(): BTCard; // inherited from NSObject

	static new(): BTCard; // inherited from NSObject

	authenticationInsightRequested: boolean;

	cardholderName: string;

	company: string;

	countryCodeAlpha2: string;

	countryCodeAlpha3: string;

	countryCodeNumeric: string;

	countryName: string;

	cvv: string;

	expirationMonth: string;

	expirationYear: string;

	extendedAddress: string;

	firstName: string;

	lastName: string;

	locality: string;

	merchantAccountId: string;

	number: string;

	postalCode: string;

	region: string;

	shouldValidate: boolean;

	streetAddress: string;

	constructor(o: { number: string; expirationMonth: string; expirationYear: string; cvv: string; });

	constructor(o: { parameters: NSDictionary<any, any>; });

	initWithNumberExpirationMonthExpirationYearCvv(number: string, expirationMonth: string, expirationYear: string, cvv: string): this;

	initWithParameters(parameters: NSDictionary<any, any>): this;
}

declare class BTCardCapabilities extends NSObject {

	static alloc(): BTCardCapabilities; // inherited from NSObject

	static new(): BTCardCapabilities; // inherited from NSObject

	isDebit: boolean;

	isSupported: boolean;

	isUnionPay: boolean;

	supportsTwoStepAuthAndCapture: boolean;
}

declare class BTCardClient extends NSObject {

	static alloc(): BTCardClient; // inherited from NSObject

	static new(): BTCardClient; // inherited from NSObject

	constructor(o: { APIClient: BTAPIClient; });

	enrollCardCompletion(request: BTCardRequest, completion: (p1: string, p2: boolean, p3: NSError) => void): void;

	fetchCapabilitiesCompletion(cardNumber: string, completion: (p1: BTCardCapabilities, p2: NSError) => void): void;

	initWithAPIClient(apiClient: BTAPIClient): this;

	tokenizeCardCompletion(card: BTCard, completion: (p1: BTCardNonce, p2: NSError) => void): void;

	tokenizeCardOptionsCompletion(request: BTCardRequest, options: NSDictionary<any, any>, completion: (p1: BTCardNonce, p2: NSError) => void): void;
}

declare var BTCardClientErrorDomain: string;

declare const enum BTCardClientErrorType {

	Unknown = 0,

	Integration = 1,

	PaymentOptionNotEnabled = 2,

	CustomerInputInvalid = 3
}

declare const enum BTCardNetwork {

	Unknown = 0,

	AMEX = 1,

	DinersClub = 2,

	Discover = 3,

	MasterCard = 4,

	Visa = 5,

	JCB = 6,

	Laser = 7,

	Maestro = 8,

	UnionPay = 9,

	Hiper = 10,

	Hipercard = 11,

	Solo = 12,

	Switch = 13,

	UKMaestro = 14
}

declare class BTCardNonce extends BTPaymentMethodNonce {

	static alloc(): BTCardNonce; // inherited from NSObject

	static new(): BTCardNonce; // inherited from NSObject

	readonly authenticationInsight: BTAuthenticationInsight;

	readonly bin: string;

	readonly binData: BTBinData;

	readonly cardNetwork: BTCardNetwork;

	readonly lastTwo: string;

	readonly threeDSecureInfo: BTThreeDSecureInfo;
}

declare class BTCardRequest extends NSObject {

	static alloc(): BTCardRequest; // inherited from NSObject

	static new(): BTCardRequest; // inherited from NSObject

	card: BTCard;

	enrollmentID: string;

	mobileCountryCode: string;

	mobilePhoneNumber: string;

	smsCode: string;

	constructor(o: { card: BTCard; });

	initWithCard(card: BTCard): this;
}

declare class BTClientMetadata extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): BTClientMetadata; // inherited from NSObject

	static new(): BTClientMetadata; // inherited from NSObject

	readonly integration: BTClientMetadataIntegrationType;

	readonly integrationString: string;

	readonly parameters: NSDictionary<any, any>;

	readonly sessionId: string;

	readonly source: BTClientMetadataSourceType;

	readonly sourceString: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum BTClientMetadataIntegrationType {

	Custom = 0,

	DropIn = 1,

	DropIn2 = 2,

	Unknown = 3
}

declare const enum BTClientMetadataSourceType {

	Unknown = 0,

	PayPalApp = 1,

	PayPalBrowser = 2,

	VenmoApp = 3,

	Form = 4
}

declare class BTClientToken extends NSObject implements NSCoding, NSCopying {

	static alloc(): BTClientToken; // inherited from NSObject

	static new(): BTClientToken; // inherited from NSObject

	readonly authorizationFingerprint: string;

	readonly configURL: NSURL;

	readonly json: BTJSON;

	readonly originalValue: string;

	constructor(o: { clientToken: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithClientTokenError(clientToken: string): this;

	initWithCoder(aDecoder: NSCoder): this;
}

declare const enum BTClientTokenError {

	Unknown = 0,

	Invalid = 1,

	UnsupportedVersion = 2
}

declare var BTClientTokenErrorDomain: string;

declare var BTClientTokenKeyAuthorizationFingerprint: string;

declare var BTClientTokenKeyConfigURL: string;

declare var BTClientTokenKeyVersion: string;

declare class BTConfiguration extends NSObject {

	static alloc(): BTConfiguration; // inherited from NSObject

	static enableVenmo(isEnabled: boolean): void;

	static isBetaEnabledPaymentOption(paymentOption: string): boolean;

	static new(): BTConfiguration; // inherited from NSObject

	static setBetaPaymentOptionIsEnabled(paymentOption: string, isEnabled: boolean): void;

	readonly applePayCountryCode: string;

	readonly applePayCurrencyCode: string;

	readonly applePayMerchantIdentifier: string;

	readonly applePaySupportedNetworks: NSArray<string>;

	readonly canMakeApplePayPayments: boolean;

	readonly cardinalAuthenticationJWT: string;

	readonly isApplePayEnabled: boolean;

	readonly isBillingAgreementsEnabled: boolean;

	readonly isLocalPaymentEnabled: boolean;

	readonly isPayPalEnabled: boolean;

	readonly isUnionPayEnabled: boolean;

	readonly isVenmoEnabled: boolean;

	readonly json: BTJSON;

	readonly venmoAccessToken: string;

	readonly venmoEnvironment: string;

	readonly venmoMerchantID: string;

	constructor(o: { JSON: BTJSON; });

	initWithJSON(json: BTJSON): this;
}

declare var BTCustomerInputBraintreeValidationErrorsKey: string;

declare const enum BTHTTPErrorCode {

	Unknown = 0,

	ResponseContentTypeNotAcceptable = 1,

	ClientError = 2,

	ServerError = 3,

	MissingBaseURL = 4,

	RateLimitError = 5
}

declare var BTHTTPErrorDomain: string;

declare var BTHTTPJSONResponseBodyKey: string;

declare var BTHTTPURLResponseKey: string;

declare class BTJSON extends NSObject {

	static alloc(): BTJSON; // inherited from NSObject

	static new(): BTJSON; // inherited from NSObject

	readonly isArray: boolean;

	readonly isBool: boolean;

	readonly isError: boolean;

	readonly isFalse: boolean;

	readonly isNull: boolean;

	readonly isNumber: boolean;

	readonly isObject: boolean;

	readonly isString: boolean;

	readonly isTrue: boolean;
	[index: number]: BTJSON;

	constructor(o: { data: NSData; });

	constructor(o: { value: any; });

	asArray(): NSArray<BTJSON>;

	asDictionary(): NSDictionary<any, any>;

	asEnumOrDefault(mapping: NSDictionary<any, any>, defaultValue: number): number;

	asError(): NSError;

	asIntegerOrZero(): number;

	asJSONAndReturnError(): NSData;

	asNumber(): NSDecimalNumber;

	asPrettyJSONAndReturnError(): string;

	asString(): string;

	asStringArray(): NSArray<string>;

	asURL(): NSURL;

	initWithData(data: NSData): this;

	initWithValue(value: any): this;

	objectAtIndexedSubscript(idx: number): BTJSON;

	objectForKeyedSubscript(key: string): any;
}

declare const enum BTJSONErrorCode {

	ValueUnknown = 0,

	ValueInvalid = 1,

	AccessInvalid = 2
}

declare var BTJSONErrorDomain: string;

declare class BTLocalPaymentRequest extends BTPaymentFlowRequest implements BTPaymentFlowRequestDelegate {

	static alloc(): BTLocalPaymentRequest; // inherited from NSObject

	static new(): BTLocalPaymentRequest; // inherited from NSObject

	address: BTPostalAddress;

	amount: string;

	currencyCode: string;

	email: string;

	givenName: string;

	localPaymentFlowDelegate: BTLocalPaymentRequestDelegate;

	merchantAccountId: string;

	paymentType: string;

	phone: string;

	shippingAddressRequired: boolean;

	surname: string;

	canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	handleOpenURL(url: NSURL): void;

	handleRequestClientPaymentDriverDelegate(request: BTPaymentFlowRequest, apiClient: BTAPIClient, delegate: BTPaymentFlowDriverDelegate): void;

	paymentFlowName(): string;
}

interface BTLocalPaymentRequestDelegate {

	localPaymentStartedPaymentIdStart(request: BTLocalPaymentRequest, paymentId: string, start: () => void): void;
}
declare var BTLocalPaymentRequestDelegate: {

	prototype: BTLocalPaymentRequestDelegate;
};

declare class BTLocalPaymentResult extends BTPaymentFlowResult {

	static alloc(): BTLocalPaymentResult; // inherited from NSObject

	static new(): BTLocalPaymentResult; // inherited from NSObject

	readonly billingAddress: BTPostalAddress;

	readonly clientMetadataId: string;

	readonly email: string;

	readonly firstName: string;

	readonly lastName: string;

	readonly localizedDescription: string;

	readonly nonce: string;

	readonly payerId: string;

	readonly phone: string;

	readonly shippingAddress: BTPostalAddress;

	readonly type: string;

	constructor(o: { nonce: string; description: string; type: string; email: string; firstName: string; lastName: string; phone: string; billingAddress: BTPostalAddress; shippingAddress: BTPostalAddress; clientMetadataId: string; payerId: string; });

	initWithNonceDescriptionTypeEmailFirstNameLastNamePhoneBillingAddressShippingAddressClientMetadataIdPayerId(nonce: string, description: string, type: string, email: string, firstName: string, lastName: string, phone: string, billingAddress: BTPostalAddress, shippingAddress: BTPostalAddress, clientMetadataId: string, payerId: string): this;
}

declare const enum BTLogLevel {

	None = 0,

	Critical = 1,

	Error = 2,

	Warning = 3,

	Info = 4,

	Debug = 5
}

declare class BTLogger extends NSObject {

	static alloc(): BTLogger; // inherited from NSObject

	static new(): BTLogger; // inherited from NSObject

	static sharedLogger(): BTLogger;

	level: BTLogLevel;
}

declare class BTMutableClientMetadata extends BTClientMetadata {

	static alloc(): BTMutableClientMetadata; // inherited from NSObject

	static new(): BTMutableClientMetadata; // inherited from NSObject

	setIntegration(integration: BTClientMetadataIntegrationType): void;

	setSessionId(sessionId: string): void;

	setSource(source: BTClientMetadataSourceType): void;
}

declare class BTPayPalAccountNonce extends BTPaymentMethodNonce {

	static alloc(): BTPayPalAccountNonce; // inherited from NSObject

	static new(): BTPayPalAccountNonce; // inherited from NSObject

	readonly billingAddress: BTPostalAddress;

	readonly clientMetadataId: string;

	readonly creditFinancing: BTPayPalCreditFinancing;

	readonly email: string;

	readonly firstName: string;

	readonly lastName: string;

	readonly payerId: string;

	readonly phone: string;

	readonly shippingAddress: BTPostalAddress;
}

interface BTPayPalApprovalDelegate {

	onApprovalCancel(): void;

	onApprovalComplete(url: NSURL): void;
}
declare var BTPayPalApprovalDelegate: {

	prototype: BTPayPalApprovalDelegate;
};

interface BTPayPalApprovalHandler {

	handleApprovalPaypalApprovalDelegate(request: PPOTRequest, delegate: BTPayPalApprovalDelegate): void;
}
declare var BTPayPalApprovalHandler: {

	prototype: BTPayPalApprovalHandler;
};

declare class BTPayPalCreditFinancing extends NSObject {

	static alloc(): BTPayPalCreditFinancing; // inherited from NSObject

	static new(): BTPayPalCreditFinancing; // inherited from NSObject

	readonly cardAmountImmutable: boolean;

	readonly monthlyPayment: BTPayPalCreditFinancingAmount;

	readonly payerAcceptance: boolean;

	readonly term: number;

	readonly totalCost: BTPayPalCreditFinancingAmount;

	readonly totalInterest: BTPayPalCreditFinancingAmount;
}

declare class BTPayPalCreditFinancingAmount extends NSObject {

	static alloc(): BTPayPalCreditFinancingAmount; // inherited from NSObject

	static new(): BTPayPalCreditFinancingAmount; // inherited from NSObject

	readonly currency: string;

	readonly value: string;
}

declare class BTPayPalDriver extends NSObject implements BTAppSwitchHandler, BTPayPalApprovalDelegate {

	static alloc(): BTPayPalDriver; // inherited from NSObject

	static canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	static handleAppSwitchReturnURL(url: NSURL): void;

	static new(): BTPayPalDriver; // inherited from NSObject

	appSwitchDelegate: BTAppSwitchDelegate;

	viewControllerPresentingDelegate: BTViewControllerPresentingDelegate;

	constructor(o: { APIClient: BTAPIClient; });

	authorizeAccountWithAdditionalScopesCompletion(additionalScopes: NSSet<string>, completionBlock: (p1: BTPayPalAccountNonce, p2: NSError) => void): void;

	authorizeAccountWithCompletion(completionBlock: (p1: BTPayPalAccountNonce, p2: NSError) => void): void;

	initWithAPIClient(apiClient: BTAPIClient): this;

	isiOSAppAvailableForAppSwitch(): boolean;

	onApprovalCancel(): void;

	onApprovalComplete(url: NSURL): void;

	requestBillingAgreementCompletion(request: BTPayPalRequest, completionBlock: (p1: BTPayPalAccountNonce, p2: NSError) => void): void;

	requestBillingAgreementHandlerCompletion(request: BTPayPalRequest, handler: BTPayPalApprovalHandler, completionBlock: (p1: BTPayPalAccountNonce, p2: NSError) => void): void;

	requestOneTimePaymentCompletion(request: BTPayPalRequest, completionBlock: (p1: BTPayPalAccountNonce, p2: NSError) => void): void;

	requestOneTimePaymentHandlerCompletion(request: BTPayPalRequest, handler: BTPayPalApprovalHandler, completionBlock: (p1: BTPayPalAccountNonce, p2: NSError) => void): void;
}

declare var BTPayPalDriverErrorDomain: string;

declare const enum BTPayPalDriverErrorType {

	Unknown = 0,

	Disabled = 1,

	IntegrationReturnURLScheme = 2,

	AppSwitchFailed = 3,

	InvalidConfiguration = 4,

	InvalidRequest = 5,

	Integration = 6
}

declare class BTPayPalLineItem extends NSObject {

	static alloc(): BTPayPalLineItem; // inherited from NSObject

	static new(): BTPayPalLineItem; // inherited from NSObject

	itemDescription: string;

	readonly kind: BTPayPalLineItemKind;

	readonly name: string;

	productCode: string;

	readonly quantity: string;

	readonly unitAmount: string;

	unitTaxAmount: string;

	url: NSURL;

	constructor(o: { quantity: string; unitAmount: string; name: string; kind: BTPayPalLineItemKind; });

	initWithQuantityUnitAmountNameKind(quantity: string, unitAmount: string, name: string, kind: BTPayPalLineItemKind): this;

	requestParameters(): NSDictionary<any, any>;
}

declare const enum BTPayPalLineItemKind {

	Debit = 1,

	Credit = 2
}

declare class BTPayPalRequest extends NSObject {

	static alloc(): BTPayPalRequest; // inherited from NSObject

	static new(): BTPayPalRequest; // inherited from NSObject

	readonly amount: string;

	billingAgreementDescription: string;

	currencyCode: string;

	displayName: string;

	intent: BTPayPalRequestIntent;

	landingPageType: BTPayPalRequestLandingPageType;

	lineItems: NSArray<BTPayPalLineItem>;

	localeCode: string;

	merchantAccountId: string;

	offerCredit: boolean;

	shippingAddressEditable: boolean;

	shippingAddressOverride: BTPostalAddress;

	shippingAddressRequired: boolean;

	userAction: BTPayPalRequestUserAction;

	constructor(o: { amount: string; });

	initWithAmount(amount: string): this;
}

declare const enum BTPayPalRequestIntent {

	Authorize = 1,

	Sale = 2,

	Order = 3
}

declare const enum BTPayPalRequestLandingPageType {

	Default = 1,

	Login = 2,

	Billing = 3
}

declare const enum BTPayPalRequestUserAction {

	Default = 1,

	Commit = 2
}

declare class BTPaymentFlowDriver extends NSObject implements BTAppSwitchHandler, BTPaymentFlowDriverDelegate {

	static alloc(): BTPaymentFlowDriver; // inherited from NSObject

	static canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	static handleAppSwitchReturnURL(url: NSURL): void;

	static new(): BTPaymentFlowDriver; // inherited from NSObject

	appSwitchDelegate: BTAppSwitchDelegate;

	viewControllerPresentingDelegate: BTViewControllerPresentingDelegate;

	constructor(o: { APIClient: BTAPIClient; });

	apiClient(): BTAPIClient;

	initWithAPIClient(apiClient: BTAPIClient): this;

	initializeChallengeWithLookupResponseRequestCompletion(lookupResponse: string, request: BTPaymentFlowRequest, completionBlock: (p1: BTPaymentFlowResult, p2: NSError) => void): void;

	isiOSAppAvailableForAppSwitch(): boolean;

	onPaymentCancel(): void;

	onPaymentCompleteError(result: BTPaymentFlowResult, error: NSError): void;

	onPaymentWithURLError(url: NSURL, error: NSError): void;

	prepareLookupCompletion(request: BTPaymentFlowRequest, completionBlock: (p1: string, p2: NSError) => void): void;

	returnURLScheme(): string;

	startPaymentFlowCompletion(request: BTPaymentFlowRequest, completionBlock: (p1: BTPaymentFlowResult, p2: NSError) => void): void;
}

interface BTPaymentFlowDriverDelegate {

	apiClient(): BTAPIClient;

	onPaymentCancel(): void;

	onPaymentCompleteError(result: BTPaymentFlowResult, error: NSError): void;

	onPaymentWithURLError(url: NSURL, error: NSError): void;

	returnURLScheme(): string;
}
declare var BTPaymentFlowDriverDelegate: {

	prototype: BTPaymentFlowDriverDelegate;
};

declare var BTPaymentFlowDriverErrorDomain: string;

declare const enum BTPaymentFlowDriverErrorType {

	Unknown = 0,

	Disabled = 1,

	AppSwitchFailed = 2,

	InvalidReturnURL = 3,

	Integration = 4,

	InvalidRequestURL = 5,

	Canceled = 6
}

declare class BTPaymentFlowRequest extends NSObject {

	static alloc(): BTPaymentFlowRequest; // inherited from NSObject

	static new(): BTPaymentFlowRequest; // inherited from NSObject
}

interface BTPaymentFlowRequestDelegate {

	canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	handleOpenURL(url: NSURL): void;

	handleRequestClientPaymentDriverDelegate(request: BTPaymentFlowRequest, apiClient: BTAPIClient, delegate: BTPaymentFlowDriverDelegate): void;

	paymentFlowName(): string;
}
declare var BTPaymentFlowRequestDelegate: {

	prototype: BTPaymentFlowRequestDelegate;
};

declare class BTPaymentFlowResult extends NSObject {

	static alloc(): BTPaymentFlowResult; // inherited from NSObject

	static new(): BTPaymentFlowResult; // inherited from NSObject
}

declare class BTPaymentMethodNonce extends NSObject {

	static alloc(): BTPaymentMethodNonce; // inherited from NSObject

	static new(): BTPaymentMethodNonce; // inherited from NSObject

	readonly isDefault: boolean;

	readonly localizedDescription: string;

	readonly nonce: string;

	readonly type: string;

	constructor(o: { nonce: string; localizedDescription: string; });

	constructor(o: { nonce: string; localizedDescription: string; type: string; });

	constructor(o: { nonce: string; localizedDescription: string; type: string; isDefault: boolean; });

	initWithNonceLocalizedDescription(nonce: string, description: string): this;

	initWithNonceLocalizedDescriptionType(nonce: string, description: string, type: string): this;

	initWithNonceLocalizedDescriptionTypeIsDefault(nonce: string, description: string, type: string, isDefault: boolean): this;
}

declare class BTPaymentMethodNonceParser extends NSObject {

	static alloc(): BTPaymentMethodNonceParser; // inherited from NSObject

	static new(): BTPaymentMethodNonceParser; // inherited from NSObject

	static sharedParser(): BTPaymentMethodNonceParser;

	readonly allTypes: NSArray<string>;

	isTypeAvailable(type: string): boolean;

	parseJSONWithParsingBlockForType(json: BTJSON, type: string): BTPaymentMethodNonce;

	registerTypeWithParsingBlock(type: string, jsonParsingBlock: (p1: BTJSON) => BTPaymentMethodNonce): void;
}

declare class BTPostalAddress extends NSObject implements NSCopying {

	static alloc(): BTPostalAddress; // inherited from NSObject

	static new(): BTPostalAddress; // inherited from NSObject

	countryCodeAlpha2: string;

	extendedAddress: string;

	locality: string;

	postalCode: string;

	recipientName: string;

	region: string;

	streetAddress: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class BTThreeDSecureAdditionalInformation extends NSObject {

	static alloc(): BTThreeDSecureAdditionalInformation; // inherited from NSObject

	static new(): BTThreeDSecureAdditionalInformation; // inherited from NSObject

	accountAgeIndicator: string;

	accountChangeDate: string;

	accountChangeIndicator: string;

	accountCreateDate: string;

	accountId: string;

	accountPurchases: string;

	accountPwdChangeDate: string;

	accountPwdChangeIndicator: string;

	addCardAttempts: string;

	addressMatch: string;

	authenticationIndicator: string;

	deliveryEmail: string;

	deliveryTimeframe: string;

	fraudActivity: string;

	giftCardAmount: string;

	giftCardCount: string;

	giftCardCurrencyCode: string;

	installment: string;

	ipAddress: string;

	orderDescription: string;

	paymentAccountAge: string;

	paymentAccountIndicator: string;

	preorderDate: string;

	preorderIndicator: string;

	productCode: string;

	purchaseDate: string;

	recurringEnd: string;

	recurringFrequency: string;

	reorderIndicator: string;

	sdkMaxTimeout: string;

	shippingAddress: BTThreeDSecurePostalAddress;

	shippingAddressUsageDate: string;

	shippingAddressUsageIndicator: string;

	shippingMethodIndicator: string;

	shippingNameIndicator: string;

	taxAmount: string;

	transactionCountDay: string;

	transactionCountYear: string;

	userAgent: string;

	workPhoneNumber: string;
}

declare class BTThreeDSecureCardNonce extends BTCardNonce {

	static alloc(): BTThreeDSecureCardNonce; // inherited from NSObject

	static new(): BTThreeDSecureCardNonce; // inherited from NSObject

	readonly liabilityShiftPossible: boolean;

	readonly liabilityShifted: boolean;

	constructor(o: { nonce: string; description: string; cardNetwork: BTCardNetwork; lastTwo: string; threeDSecureJSON: BTJSON; isDefault: boolean; cardJSON: BTJSON; });

	initWithNonceDescriptionCardNetworkLastTwoThreeDSecureJSONIsDefaultCardJSON(nonce: string, description: string, cardNetwork: BTCardNetwork, lastTwo: string, threeDSecureJSON: BTJSON, isDefault: boolean, cardJSON: BTJSON): this;
}

declare class BTThreeDSecureDriver extends NSObject {

	static alloc(): BTThreeDSecureDriver; // inherited from NSObject

	static new(): BTThreeDSecureDriver; // inherited from NSObject

	delegate: BTViewControllerPresentingDelegate;

	constructor(o: { APIClient: BTAPIClient; delegate: BTViewControllerPresentingDelegate; });

	initWithAPIClientDelegate(apiClient: BTAPIClient, delegate: BTViewControllerPresentingDelegate): this;

	verifyCardWithNonceAmountCompletion(nonce: string, amount: NSDecimalNumber, completionBlock: (p1: BTThreeDSecureCardNonce, p2: NSError) => void): void;
}

declare var BTThreeDSecureErrorDomain: string;

declare const enum BTThreeDSecureErrorType {

	Unknown = 0,

	FailedLookup = 1,

	FailedAuthentication = 2,

	Integration = 3
}

declare var BTThreeDSecureFlowErrorDomain: string;

declare const enum BTThreeDSecureFlowErrorType {

	Unknown = 0,

	FailedLookup = 1,

	FailedAuthentication = 2,

	Configuration = 3
}

declare class BTThreeDSecureInfo extends NSObject {

	static alloc(): BTThreeDSecureInfo; // inherited from NSObject

	static new(): BTThreeDSecureInfo; // inherited from NSObject

	readonly acsTransactionId: string;

	readonly authenticationTransactionStatus: string;

	readonly authenticationTransactionStatusReason: string;

	readonly cavv: string;

	readonly dsTransactionId: string;

	readonly eciFlag: string;

	readonly enrolled: string;

	errorMessage: string;

	readonly liabilityShiftPossible: boolean;

	readonly liabilityShifted: boolean;

	readonly lookupTransactionStatus: string;

	readonly lookupTransactionStatusReason: string;

	readonly paresStatus: string;

	readonly status: string;

	readonly threeDSecureServerTransactionId: string;

	readonly threeDSecureVersion: string;

	readonly wasVerified: boolean;

	readonly xid: string;

	constructor(o: { JSON: BTJSON; });

	initWithJSON(json: BTJSON): this;
}

declare var BTThreeDSecureInfoKey: string;

declare class BTThreeDSecureLookup extends BTPaymentFlowResult {

	static alloc(): BTThreeDSecureLookup; // inherited from NSObject

	static new(): BTThreeDSecureLookup; // inherited from NSObject

	MD: string;

	PAReq: string;

	acsURL: NSURL;

	readonly isThreeDSecureVersion2: boolean;

	termURL: NSURL;

	threeDSecureResult: BTThreeDSecureResult;

	threeDSecureVersion: string;

	transactionId: string;

	constructor(o: { JSON: BTJSON; });

	initWithJSON(JSON: BTJSON): this;

	requiresUserAuthentication(): boolean;
}

declare class BTThreeDSecurePostalAddress extends NSObject implements NSCopying {

	static alloc(): BTThreeDSecurePostalAddress; // inherited from NSObject

	static new(): BTThreeDSecurePostalAddress; // inherited from NSObject

	countryCodeAlpha2: string;

	extendedAddress: string;

	firstName: string;

	givenName: string;

	lastName: string;

	line3: string;

	locality: string;

	phoneNumber: string;

	postalCode: string;

	region: string;

	streetAddress: string;

	surname: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class BTThreeDSecureRequest extends BTPaymentFlowRequest implements BTPaymentFlowRequestDelegate {

	static alloc(): BTThreeDSecureRequest; // inherited from NSObject

	static new(): BTThreeDSecureRequest; // inherited from NSObject

	additionalInformation: BTThreeDSecureAdditionalInformation;

	amount: string;

	billingAddress: BTThreeDSecurePostalAddress;

	challengeRequested: boolean;

	email: string;

	exemptionRequested: boolean;

	mobilePhoneNumber: string;

	nonce: string;

	shippingMethod: string;

	threeDSecureRequestDelegate: BTThreeDSecureRequestDelegate;

	versionRequested: BTThreeDSecureVersion;

	canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	handleOpenURL(url: NSURL): void;

	handleRequestClientPaymentDriverDelegate(request: BTPaymentFlowRequest, apiClient: BTAPIClient, delegate: BTPaymentFlowDriverDelegate): void;

	paymentFlowName(): string;
}

interface BTThreeDSecureRequestDelegate {

	onLookupCompleteResultNext(request: BTThreeDSecureRequest, result: BTThreeDSecureLookup, next: () => void): void;
}
declare var BTThreeDSecureRequestDelegate: {

	prototype: BTThreeDSecureRequestDelegate;
};

declare class BTThreeDSecureResult extends BTPaymentFlowResult {

	static alloc(): BTThreeDSecureResult; // inherited from NSObject

	static new(): BTThreeDSecureResult; // inherited from NSObject

	errorMessage: string;

	liabilityShiftPossible: boolean;

	liabilityShifted: boolean;

	success: boolean;

	tokenizedCard: BTCardNonce;

	constructor(o: { JSON: BTJSON; });

	initWithJSON(JSON: BTJSON): this;
}

declare var BTThreeDSecureValidationErrorsKey: string;

declare const enum BTThreeDSecureVersion {

	Version1 = 0,

	Version2 = 1
}

declare class BTTokenizationService extends NSObject {

	static alloc(): BTTokenizationService; // inherited from NSObject

	static new(): BTTokenizationService; // inherited from NSObject

	static sharedService(): BTTokenizationService;

	readonly allTypes: NSArray<string>;

	isTypeAvailable(type: string): boolean;

	registerTypeWithTokenizationBlock(type: string, tokenizationBlock: (p1: BTAPIClient, p2: NSDictionary<any, any>, p3: (p1: BTPaymentMethodNonce, p2: NSError) => void) => void): void;

	tokenizeTypeOptionsWithAPIClientCompletion(type: string, options: NSDictionary<string, any>, apiClient: BTAPIClient, completion: (p1: BTPaymentMethodNonce, p2: NSError) => void): void;

	tokenizeTypeWithAPIClientCompletion(type: string, apiClient: BTAPIClient, completion: (p1: BTPaymentMethodNonce, p2: NSError) => void): void;
}

declare var BTTokenizationServiceAmountOption: string;

declare var BTTokenizationServiceAppSwitchDelegateOption: string;

declare const enum BTTokenizationServiceError {

	Unknown = 0,

	TypeNotRegistered = 1
}

declare var BTTokenizationServiceErrorDomain: string;

declare var BTTokenizationServiceNonceOption: string;

declare var BTTokenizationServicePayPalScopesOption: string;

declare var BTTokenizationServiceViewPresentingDelegateOption: string;

declare class BTVenmoAccountNonce extends BTPaymentMethodNonce {

	static alloc(): BTVenmoAccountNonce; // inherited from NSObject

	static new(): BTVenmoAccountNonce; // inherited from NSObject

	readonly username: string;
}

declare class BTVenmoDriver extends NSObject implements BTAppSwitchHandler {

	static alloc(): BTVenmoDriver; // inherited from NSObject

	static canHandleAppSwitchReturnURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	static handleAppSwitchReturnURL(url: NSURL): void;

	static new(): BTVenmoDriver; // inherited from NSObject

	appSwitchDelegate: BTAppSwitchDelegate;

	constructor(o: { APIClient: BTAPIClient; });

	authorizeAccountAndVaultCompletion(vault: boolean, completionBlock: (p1: BTVenmoAccountNonce, p2: NSError) => void): void;

	authorizeAccountWithCompletion(completionBlock: (p1: BTVenmoAccountNonce, p2: NSError) => void): void;

	authorizeAccountWithProfileIDVaultCompletion(profileId: string, vault: boolean, completionBlock: (p1: BTVenmoAccountNonce, p2: NSError) => void): void;

	initWithAPIClient(apiClient: BTAPIClient): this;

	isiOSAppAvailableForAppSwitch(): boolean;

	openVenmoAppPageInAppStore(): void;
}

declare var BTVenmoDriverErrorDomain: string;

declare const enum BTVenmoDriverErrorType {

	Unknown = 0,

	Disabled = 1,

	AppNotAvailable = 2,

	BundleDisplayNameMissing = 3,

	AppSwitchFailed = 4,

	InvalidReturnURL = 5,

	Integration = 6,

	InvalidRequestURL = 7
}

interface BTViewControllerPresentingDelegate extends NSObjectProtocol {

	paymentDriverRequestsDismissalOfViewController(driver: any, viewController: UIViewController): void;

	paymentDriverRequestsPresentationOfViewController(driver: any, viewController: UIViewController): void;
}
declare var BTViewControllerPresentingDelegate: {

	prototype: BTViewControllerPresentingDelegate;
};

declare var Braintree3DSecureVersionNumber: number;

declare var Braintree3DSecureVersionString: interop.Reference<number>;

declare var BraintreeApplePayVersionNumber: number;

declare var BraintreeApplePayVersionString: interop.Reference<number>;

declare var BraintreeCardVersionNumber: number;

declare var BraintreeCardVersionString: interop.Reference<number>;

declare var BraintreeCoreVersionNumber: number;

declare var BraintreeCoreVersionString: interop.Reference<number>;

declare var BraintreePayPalVersionNumber: number;

declare var BraintreePayPalVersionString: interop.Reference<number>;

declare var BraintreePaymentFlowVersionNumber: number;

declare var BraintreePaymentFlowVersionString: interop.Reference<number>;

declare var BraintreeUnionPayVersionNumber: number;

declare var BraintreeUnionPayVersionString: interop.Reference<number>;

declare var BraintreeVenmoVersionNumber: number;

declare var BraintreeVenmoVersionString: interop.Reference<number>;

declare var BraintreeVersionNumber: number;

declare var BraintreeVersionString: interop.Reference<number>;

declare const enum MagnesEnvironment {

	LIVE = 0,

	SANDBOX = 1
}

declare const enum MagnesSourceFlow {

	AGNES_SOURCE_PAYPAL = 10,

	AGNES_SOURCE_EBAY = 11,

	AGNES_SOURCE_BRAINTREE = 12,

	AGNES_SOURCE_DEFAULT = -1
}

declare class PPDataCollector extends NSObject {

	static alloc(): PPDataCollector; // inherited from NSObject

	static clientMetadataID(pairingID: string): string;

	static collectPayPalDeviceData(): string;

	static collectPayPalDeviceInfoWithClientMetadataID(clientMetadataID: string): PPRMOCMagnesSDKResult;

	static new(): PPDataCollector; // inherited from NSObject
}

declare class PPOTAuthorizationRequest extends PPOTRequest {

	static alloc(): PPOTAuthorizationRequest; // inherited from NSObject

	static new(): PPOTAuthorizationRequest; // inherited from NSObject

	readonly agreementURL: NSURL;

	readonly privacyURL: NSURL;

	readonly scopeValues: NSSet<any>;
}

declare class PPOTBillingAgreementRequest extends PPOTCheckoutRequest {

	static alloc(): PPOTBillingAgreementRequest; // inherited from NSObject

	static new(): PPOTBillingAgreementRequest; // inherited from NSObject
}

declare class PPOTCheckoutRequest extends PPOTRequest {

	static alloc(): PPOTCheckoutRequest; // inherited from NSObject

	static new(): PPOTCheckoutRequest; // inherited from NSObject

	readonly approvalURL: NSURL;

	pairingId: string;
}

declare class PPOTCore extends NSObject {

	static alloc(): PPOTCore; // inherited from NSObject

	static canParseURLSourceApplication(url: NSURL, sourceApplication: string): boolean;

	static doesApplicationSupportOneTouchCallbackURLScheme(callbackURLScheme: string): boolean;

	static isWalletAppInstalled(): boolean;

	static libraryVersion(): string;

	static new(): PPOTCore; // inherited from NSObject

	static parseResponseURLCompletionBlock(url: NSURL, completionBlock: (p1: PPOTResult) => void): void;

	static redirectURLsForCallbackURLSchemeWithReturnURLWithCancelURL(callbackURLScheme: string, returnURL: interop.Pointer | interop.Reference<string>, cancelURL: interop.Pointer | interop.Reference<string>): void;
}

declare class PPOTDevice extends NSObject {

	static alloc(): PPOTDevice; // inherited from NSObject

	static appropriateIdentifier(): string;

	static clearIdentifier(): void;

	static complicatedDeviceLocale(): string;

	static deviceName(): string;

	static hardwarePlatform(): string;

	static new(): PPOTDevice; // inherited from NSObject
}

declare class PPOTEncryptionHelper extends NSObject {

	static alloc(): PPOTEncryptionHelper; // inherited from NSObject

	static decryptAESCTRDataEncryptionKey(cipherData: NSData, key: NSData): NSData;

	static encryptAESCTRDataEncryptionKey(plainData: NSData, key: NSData): NSData;

	static encryptRSADataCertificate(plainData: NSData, certificate: NSData): NSData;

	static generate256BitKey(): NSData;

	static new(): PPOTEncryptionHelper; // inherited from NSObject
}

declare const enum PPOTErrorCode {

	Unknown = -1000,

	ParsingFailed = -1001,

	NoTargetAppFound = -1002,

	OpenURLFailed = -1003,

	PersistedDataFetchFailed = -1004
}

declare class PPOTJSONHelper extends NSObject {

	static alloc(): PPOTJSONHelper; // inherited from NSObject

	static arrayFromDictionaryWithKey(dictionary: NSDictionary<any, any>, key: string): NSArray<any>;

	static base64EncodedJSONStringWithDictionary(dictionary: NSDictionary<any, any>): string;

	static dictionaryArrayFromDictionaryWithKey(dictionary: NSDictionary<any, any>, key: string): NSArray<any>;

	static dictionaryFromDictionaryWithKey(dictionary: NSDictionary<any, any>, key: string): NSDictionary<any, any>;

	static dictionaryWithBase64EncodedJSONString(base64String: string): NSDictionary<any, any>;

	static new(): PPOTJSONHelper; // inherited from NSObject

	static numberFromDictionaryWithKey(dictionary: NSDictionary<any, any>, key: string): number;

	static stringArrayFromDictionaryWithKey(dictionary: NSDictionary<any, any>, key: string): NSArray<any>;

	static stringFromDictionaryWithKey(dictionary: NSDictionary<any, any>, key: string): string;
}

declare class PPOTMacros extends NSObject {

	static alloc(): PPOTMacros; // inherited from NSObject

	static deviceSystemMajorVersion(): number;

	static new(): PPOTMacros; // inherited from NSObject
}

declare class PPOTPinnedCertificates extends NSObject {

	static alloc(): PPOTPinnedCertificates; // inherited from NSObject

	static new(): PPOTPinnedCertificates; // inherited from NSObject

	static trustedCertificates(): NSArray<any>;
}

declare class PPOTRequest extends NSObject {

	static alloc(): PPOTRequest; // inherited from NSObject

	static new(): PPOTRequest; // inherited from NSObject

	static tokenFromApprovalURL(approvalURL: NSURL): string;

	additionalPayloadAttributes: NSDictionary<any, any>;

	readonly callbackURLScheme: string;

	readonly clientID: string;

	readonly environment: string;

	useHardcodedConfiguration: boolean;

	getTargetApp(completionBlock: (p1: PPOTRequestTarget) => void): void;

	performWithAdapterBlock(adapterBlock: (p1: boolean, p2: NSURL, p3: PPOTRequestTarget, p4: string, p5: NSError) => void): void;
}

declare class PPOTRequestFactory extends NSObject {

	static alloc(): PPOTRequestFactory; // inherited from NSObject

	static authorizationRequestWithScopeValuesPrivacyURLAgreementURLClientIDEnvironmentCallbackURLScheme(scopeValues: NSSet<any>, privacyURL: NSURL, agreementURL: NSURL, clientID: string, environment: string, callbackURLScheme: string): PPOTAuthorizationRequest;

	static billingAgreementRequestWithApprovalURLClientIDEnvironmentCallbackURLScheme(approvalURL: NSURL, clientID: string, environment: string, callbackURLScheme: string): PPOTBillingAgreementRequest;

	static billingAgreementRequestWithApprovalURLPairingIdClientIDEnvironmentCallbackURLScheme(approvalURL: NSURL, pairingId: string, clientID: string, environment: string, callbackURLScheme: string): PPOTBillingAgreementRequest;

	static checkoutRequestWithApprovalURLClientIDEnvironmentCallbackURLScheme(approvalURL: NSURL, clientID: string, environment: string, callbackURLScheme: string): PPOTCheckoutRequest;

	static checkoutRequestWithApprovalURLPairingIdClientIDEnvironmentCallbackURLScheme(approvalURL: NSURL, pairingId: string, clientID: string, environment: string, callbackURLScheme: string): PPOTCheckoutRequest;

	static new(): PPOTRequestFactory; // inherited from NSObject
}

declare const enum PPOTRequestTarget {

	None = 0,

	Browser = 1,

	OnDeviceApplication = 2,

	Unknown = 3
}

declare class PPOTResult extends NSObject {

	static alloc(): PPOTResult; // inherited from NSObject

	static new(): PPOTResult; // inherited from NSObject

	readonly error: NSError;

	readonly response: NSDictionary<any, any>;

	readonly target: PPOTRequestTarget;

	readonly type: PPOTResultType;
}

declare const enum PPOTResultType {

	Error = 0,

	Cancel = 1,

	Success = 2
}

declare class PPOTSimpleKeychain extends NSObject {

	static alloc(): PPOTSimpleKeychain; // inherited from NSObject

	static dataForKey(key: string): NSData;

	static new(): PPOTSimpleKeychain; // inherited from NSObject

	static setDataForKey(data: NSData, key: string): boolean;

	static unarchiveObjectWithDataForKey(key: string): any;
}

declare class PPOTString extends NSObject {

	static alloc(): PPOTString; // inherited from NSObject

	static dataWithHexString(hexString: string): NSData;

	static decodeBase64WithString(strBase64: string): NSData;

	static generateUniquishIdentifier(): string;

	static hexStringFromData(data: NSData): string;

	static new(): PPOTString; // inherited from NSObject

	static stringByBase64EncodingData(data: NSData): string;

	static stringByURLEncodingAllCharactersInString(aString: string): string;
}

declare class PPOTTime extends NSObject {

	static alloc(): PPOTTime; // inherited from NSObject

	static dateFromRFC3339LikeString(dateStr: string): Date;

	static new(): PPOTTime; // inherited from NSObject

	static rfc3339DateFormatter(): NSDateFormatter;
}

declare class PPOTURLSession extends NSObject {

	static alloc(): PPOTURLSession; // inherited from NSObject

	static new(): PPOTURLSession; // inherited from NSObject

	static session(): PPOTURLSession;

	static sessionWithTimeoutIntervalForRequest(timeoutIntervalForRequest: number): PPOTURLSession;

	finishTasksAndInvalidate(): void;

	sendRequestCompletionBlock(request: NSURLRequest, completionBlock: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): void;
}

declare class PPRMOCMagnesSDK extends NSObject {

	static alloc(): PPRMOCMagnesSDK; // inherited from NSObject

	static new(): PPRMOCMagnesSDK; // inherited from NSObject

	static shared(): PPRMOCMagnesSDK;

	collect(): PPRMOCMagnesSDKResult;

	collectAndSubmit(): PPRMOCMagnesSDKResult;

	collectAndSubmitWithPayPalClientMetadataIdWithAdditionalData(cmid: string, additionalData: NSDictionary<any, any>): PPRMOCMagnesSDKResult;

	collectWithPayPalClientMetadataIdWithAdditionalData(cmid: string, additionalData: NSDictionary<any, any>): PPRMOCMagnesSDKResult;

	setUpEnvironmentWithOptionalAppGuidWithOptionalAPNTokenDisableRemoteConfigurationDisableBeaconForMagnesSource(env: MagnesEnvironment, appGuid: string, apnToken: string, isRemoteConfigDisabled: boolean, isBeaconDisabled: boolean, magnesSource: MagnesSourceFlow): void;
}

declare class PPRMOCMagnesSDKResult extends NSObject {

	static alloc(): PPRMOCMagnesSDKResult; // inherited from NSObject

	static new(): PPRMOCMagnesSDKResult; // inherited from NSObject

	constructor(o: { deviceInfo: NSDictionary<any, any>; withPayPalClientMetaDataId: string; });

	getDeviceInfo(): NSDictionary<any, any>;

	getPayPalClientMetaDataId(): string;

	initWithDeviceInfoWithPayPalClientMetaDataId(deviceInfo: NSDictionary<any, any>, cmid: string): this;
}

declare var PayPalDataCollectorVersionNumber: number;

declare var PayPalDataCollectorVersionString: interop.Reference<number>;

declare var PayPalEnvironmentMock: string;

declare var PayPalEnvironmentProduction: string;

declare var PayPalEnvironmentSandbox: string;

declare var PayPalOneTouchVersionNumber: number;

declare var PayPalOneTouchVersionString: interop.Reference<number>;

declare var PayPalUtilsVersionNumber: number;

declare var PayPalUtilsVersionString: interop.Reference<number>;
