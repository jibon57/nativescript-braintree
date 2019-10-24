
declare class BTCardFormViewController extends BTDropInBaseViewController implements BTUIKCardNumberFormFieldDelegate, BTUIKFormFieldDelegate, UITextFieldDelegate {

	static alloc(): BTCardFormViewController; // inherited from NSObject

	static new(): BTCardFormViewController; // inherited from NSObject

	readonly cardCapabilities: BTCardCapabilities;

	readonly cardNumberField: BTUIKCardNumberFormField;

	readonly cardRequest: BTCardRequest;

	readonly cardholderNameField: BTUIKCardholderNameFormField;

	delegate: any;

	readonly expirationDateField: BTUIKExpiryFormField;

	readonly mobileCountryCodeField: BTUIKMobileCountryCodeFormField;

	readonly mobilePhoneField: BTUIKMobileNumberFormField;

	readonly postalCodeField: BTUIKPostalCodeFormField;

	readonly securityCodeField: BTUIKSecurityCodeFormField;

	supportedCardTypes: NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	formFieldDidBeginEditing(formField: BTUIKFormField): void;

	formFieldDidChange(formField: BTUIKFormField): void;

	formFieldDidEndEditing(formField: BTUIKFormField): void;

	formFieldShouldReturn(formField: BTUIKFormField): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetForm(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	validateButtonPressed(formField: BTUIKFormField): void;
}

interface BTCardFormViewControllerDelegate extends NSObjectProtocol {

	cardTokenizationCompletedErrorSender(tokenizedCard: BTPaymentMethodNonce, error: NSError, sender: BTCardFormViewController): void;
}
declare var BTCardFormViewControllerDelegate: {

	prototype: BTCardFormViewControllerDelegate;
};

declare class BTDropInBaseViewController extends UIViewController {

	static alloc(): BTDropInBaseViewController; // inherited from NSObject

	static new(): BTDropInBaseViewController; // inherited from NSObject

	apiClient: BTAPIClient;

	configuration: BTConfiguration;

	dropInRequest: BTDropInRequest;

	constructor(o: { APIClient: BTAPIClient; request: BTDropInRequest; });

	configurationLoadedError(configuration: BTConfiguration, error: NSError): void;

	initWithAPIClientRequest(apiClient: BTAPIClient, request: BTDropInRequest): this;

	loadConfiguration(): void;

	showLoadingScreen(show: boolean): void;

	showLoadingScreenAnimated(show: boolean, animated: boolean): void;
}

declare class BTDropInController extends UIViewController implements UIToolbarDelegate, UIViewControllerTransitioningDelegate {

	static alloc(): BTDropInController; // inherited from NSObject

	static new(): BTDropInController; // inherited from NSObject

	readonly apiClient: BTAPIClient;

	readonly dropInRequest: BTDropInRequest;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { authorization: string; request: BTDropInRequest; handler: (p1: BTDropInController, p2: BTDropInResult, p3: NSError) => void; });

	animationControllerForDismissedController(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;

	animationControllerForPresentedControllerPresentingControllerSourceController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAuthorizationRequestHandler(authorization: string, request: BTDropInRequest, handler: (p1: BTDropInController, p2: BTDropInResult, p3: NSError) => void): this;

	interactionControllerForDismissal(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	interactionControllerForPresentation(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showCardForm(sender: any): void;
}

interface BTDropInControllerDelegate extends NSObjectProtocol {

	editPaymentMethods(sender: any): void;

	reloadDropInData(): void;
}
declare var BTDropInControllerDelegate: {

	prototype: BTDropInControllerDelegate;
};

declare class BTDropInRequest extends NSObject implements NSCopying {

	static alloc(): BTDropInRequest; // inherited from NSObject

	static new(): BTDropInRequest; // inherited from NSObject

	allowVaultCardOverride: boolean;

	amount: string;

	applePayDisabled: boolean;

	cardDisabled: boolean;

	cardholderNameSetting: BTFormFieldSetting;

	payPalRequest: BTPayPalRequest;

	paypalDisabled: boolean;

	shouldMaskSecurityCode: boolean;

	threeDSecureRequest: BTThreeDSecureRequest;

	threeDSecureVerification: boolean;

	vaultCard: boolean;

	vaultManager: boolean;

	venmoDisabled: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class BTDropInResult extends NSObject {

	static alloc(): BTDropInResult; // inherited from NSObject

	static fetchDropInResultForAuthorizationHandler(authorization: string, handler: (p1: BTDropInResult, p2: NSError) => void): void;

	static new(): BTDropInResult; // inherited from NSObject

	cancelled: boolean;

	readonly paymentDescription: string;

	readonly paymentIcon: UIView;

	paymentMethod: BTPaymentMethodNonce;

	paymentOptionType: BTUIKPaymentOptionType;
}

declare const enum BTFormFieldSetting {

	Disabled = 0,

	Optional = 1,

	Required = 2
}

declare class BTPaymentSelectionViewController extends BTDropInBaseViewController implements UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout, UITableViewDataSource, UITableViewDelegate {

	static alloc(): BTPaymentSelectionViewController; // inherited from NSObject

	static new(): BTPaymentSelectionViewController; // inherited from NSObject

	delegate: any;

	paymentMethodNonces: NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sheetHeight(): number;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface BTPaymentSelectionViewControllerDelegate extends NSObjectProtocol {

	selectionCompletedWithPaymentMethodTypeNonceError(type: BTUIKPaymentOptionType, nonce: BTPaymentMethodNonce, error: NSError): void;

	sheetHeightDidChange(sender: BTPaymentSelectionViewController): void;
}
declare var BTPaymentSelectionViewControllerDelegate: {

	prototype: BTPaymentSelectionViewControllerDelegate;
};

declare class BTUIKAppearance extends NSObject {

	static alloc(): BTUIKAppearance; // inherited from NSObject

	static darkTheme(): void;

	static formCellHeight(): number;

	static horizontalFormContentPadding(): number;

	static largeIconHeight(): number;

	static largeIconWidth(): number;

	static lightTheme(): void;

	static metrics(): NSDictionary<any, any>;

	static new(): BTUIKAppearance; // inherited from NSObject

	static sharedInstance(): BTUIKAppearance;

	static smallIconHeight(): number;

	static smallIconWidth(): number;

	static styleLabelBoldPrimary(label: UILabel): void;

	static styleLabelPrimary(label: UILabel): void;

	static styleLabelSecondary(label: UILabel): void;

	static styleLargeLabelSecondary(label: UILabel): void;

	static styleSmallLabelBoldPrimary(label: UILabel): void;

	static styleSmallLabelPrimary(label: UILabel): void;

	static styleSystemLabelSecondary(label: UILabel): void;

	static styledNavigationTitleLabel(): UILabel;

	static verticalFormSpace(): number;

	static verticalFormSpaceTight(): number;

	static verticalSectionSpace(): number;

	activityIndicatorViewStyle: UIActivityIndicatorViewStyle;

	barBackgroundColor: UIColor;

	blurStyle: UIBlurEffectStyle;

	readonly boldFont: UIFont;

	boldFontFamily: string;

	disabledColor: UIColor;

	errorForegroundColor: UIColor;

	readonly font: UIFont;

	fontFamily: string;

	formBackgroundColor: UIColor;

	formFieldBackgroundColor: UIColor;

	readonly highlightedTintColor: UIColor;

	lineColor: UIColor;

	navigationBarTitleTextColor: UIColor;

	overlayColor: UIColor;

	placeholderTextColor: UIColor;

	postalCodeFormFieldKeyboardType: UIKeyboardType;

	primaryTextColor: UIColor;

	secondaryTextColor: UIColor;

	switchOnTintColor: UIColor;

	switchThumbTintColor: UIColor;

	tintColor: UIColor;

	useBlurs: boolean;
}

declare class BTUIKCardExpirationValidator extends NSObject {

	static alloc(): BTUIKCardExpirationValidator; // inherited from NSObject

	static monthYearValidForDate(month: number, year: number, date: Date): boolean;

	static new(): BTUIKCardExpirationValidator; // inherited from NSObject
}

declare class BTUIKCardExpiryFormat extends NSObject {

	static alloc(): BTUIKCardExpiryFormat; // inherited from NSObject

	static new(): BTUIKCardExpiryFormat; // inherited from NSObject

	backspace: boolean;

	cursorLocation: number;

	value: string;

	formattedValueCursorLocation(value: interop.Pointer | interop.Reference<string>, cursorLocation: interop.Pointer | interop.Reference<number>): void;
}

declare class BTUIKCardListLabel extends UILabel {

	static alloc(): BTUIKCardListLabel; // inherited from NSObject

	static appearance(): BTUIKCardListLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKCardListLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKCardListLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKCardListLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKCardListLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKCardListLabel; // inherited from UIAppearance

	static new(): BTUIKCardListLabel; // inherited from NSObject

	availablePaymentOptions: NSArray<any>;

	emphasizePaymentOption(paymentOption: BTUIKPaymentOptionType): void;
}

declare class BTUIKCardNumberFormField extends BTUIKFormField {

	static alloc(): BTUIKCardNumberFormField; // inherited from NSObject

	static appearance(): BTUIKCardNumberFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKCardNumberFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKCardNumberFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKCardNumberFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKCardNumberFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKCardNumberFormField; // inherited from UIAppearance

	static new(): BTUIKCardNumberFormField; // inherited from NSObject

	cardNumberDelegate: BTUIKCardNumberFormFieldDelegate;

	readonly cardType: BTUIKCardType;

	number: string;

	state: BTUIKCardNumberFormFieldState;

	showCardHintAccessory(): void;
}

interface BTUIKCardNumberFormFieldDelegate extends NSObjectProtocol {

	validateButtonPressed(formField: BTUIKFormField): void;
}
declare var BTUIKCardNumberFormFieldDelegate: {

	prototype: BTUIKCardNumberFormFieldDelegate;
};

declare const enum BTUIKCardNumberFormFieldState {

	Default = 0,

	Validate = 1,

	Loading = 2
}

declare class BTUIKCardType extends NSObject {

	static alloc(): BTUIKCardType; // inherited from NSObject

	static cardTypeForBrand(brand: string): BTUIKCardType;

	static cardTypeForNumber(number: string): BTUIKCardType;

	static maxNumberLength(): number;

	static new(): BTUIKCardType; // inherited from NSObject

	static possibleCardTypesForNumber(number: string): NSArray<any>;

	readonly brand: string;

	readonly formatSpaces: NSArray<any>;

	readonly maxNumberLength: number;

	readonly relaxedPrefixes: NSArray<any>;

	readonly securityCodeName: string;

	readonly validCvvLength: number;

	readonly validNumberLengths: NSIndexSet;

	readonly validNumberPrefixes: NSArray<any>;

	completeNumber(number: string): boolean;

	formatNumber(input: string): NSAttributedString;

	formatNumberKerning(input: string, kerning: number): NSAttributedString;

	validAndNecessarilyCompleteNumber(number: string): boolean;

	validCvv(cvv: string): boolean;

	validNumber(number: string): boolean;
}

declare class BTUIKCardholderNameFormField extends BTUIKFormField {

	static alloc(): BTUIKCardholderNameFormField; // inherited from NSObject

	static appearance(): BTUIKCardholderNameFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKCardholderNameFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKCardholderNameFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKCardholderNameFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKCardholderNameFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKCardholderNameFormField; // inherited from UIAppearance

	static new(): BTUIKCardholderNameFormField; // inherited from NSObject

	readonly cardholderName: string;

	isRequired: boolean;
}

declare class BTUIKExpiryFormField extends BTUIKFormField implements BTUIKExpiryInputViewDelegate {

	static alloc(): BTUIKExpiryFormField; // inherited from NSObject

	static appearance(): BTUIKExpiryFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKExpiryFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKExpiryFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKExpiryFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKExpiryFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKExpiryFormField; // inherited from UIAppearance

	static new(): BTUIKExpiryFormField; // inherited from NSObject

	expirationDate: string;

	readonly expirationMonth: string;

	readonly expirationYear: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	expiryInputViewDidChange(expiryInputView: BTUIKExpiryInputView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class BTUIKExpiryInputView extends UIView implements UICollectionViewDataSource, UICollectionViewDelegateFlowLayout, UITextFieldDelegate {

	static alloc(): BTUIKExpiryInputView; // inherited from NSObject

	static appearance(): BTUIKExpiryInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKExpiryInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKExpiryInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKExpiryInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKExpiryInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKExpiryInputView; // inherited from UIAppearance

	static new(): BTUIKExpiryInputView; // inherited from NSObject

	delegate: BTUIKExpiryInputViewDelegate;

	selectedMonth: number;

	selectedYear: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface BTUIKExpiryInputViewDelegate extends NSObjectProtocol {

	expiryInputViewDidChange(expiryInputView: BTUIKExpiryInputView): void;
}
declare var BTUIKExpiryInputViewDelegate: {

	prototype: BTUIKExpiryInputViewDelegate;
};

declare class BTUIKFormField extends UIView implements UIKeyInput, UITextFieldDelegate {

	static alloc(): BTUIKFormField; // inherited from NSObject

	static appearance(): BTUIKFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKFormField; // inherited from UIAppearance

	static new(): BTUIKFormField; // inherited from NSObject

	accessoryView: UIView;

	backspace: boolean;

	bottomBorder: boolean;

	delegate: BTUIKFormFieldDelegate;

	displayAsValid: boolean;

	readonly entryComplete: boolean;

	formLabel: UILabel;

	interFieldBorder: boolean;

	text: string;

	textField: BTUIKTextField;

	topBorder: boolean;

	readonly valid: boolean;

	vibrateOnInvalidInput: boolean;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	passwordRules: UITextInputPasswordRules; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	smartDashesType: UITextSmartDashesType; // inherited from UITextInputTraits

	smartInsertDeleteType: UITextSmartInsertDeleteType; // inherited from UITextInputTraits

	smartQuotesType: UITextSmartQuotesType; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	insertText(text: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetFormField(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAccessoryViewHiddenAnimated(hidden: boolean, animated: boolean): void;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	updateAppearance(): void;
}

interface BTUIKFormFieldDelegate extends NSObjectProtocol {

	formFieldDidBeginEditing?(formField: BTUIKFormField): void;

	formFieldDidChange(formField: BTUIKFormField): void;

	formFieldDidEndEditing?(formField: BTUIKFormField): void;

	formFieldShouldReturn?(formField: BTUIKFormField): boolean;
}
declare var BTUIKFormFieldDelegate: {

	prototype: BTUIKFormFieldDelegate;
};

declare class BTUIKInputAccessoryToolbar extends UIToolbar {

	static alloc(): BTUIKInputAccessoryToolbar; // inherited from NSObject

	static appearance(): BTUIKInputAccessoryToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKInputAccessoryToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKInputAccessoryToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKInputAccessoryToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKInputAccessoryToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKInputAccessoryToolbar; // inherited from UIAppearance

	static new(): BTUIKInputAccessoryToolbar; // inherited from NSObject

	constructor(o: { doneButtonForInput: UITextInput; });

	initWithDoneButtonForInput(input: UITextInput): this;
}

declare class BTUIKLocalizedString extends NSObject {

	static ADD_CARD_ACTION(): string;

	static BRANDING_APPLE_PAY(): string;

	static BRANDING_COINBASE(): string;

	static BRANDING_VENMO(): string;

	static CANCEL_ACTION(): string;

	static CARDHOLDER_NAME_LABEL(): string;

	static CARD_DETAILS_LABEL(): string;

	static CARD_INVALID(): string;

	static CARD_NOT_ACCEPTED_ERROR_LABEL(): string;

	static CARD_NUMBER_PLACEHOLDER(): string;

	static CARD_REQUIRED(): string;

	static CARD_TYPE_AMERICAN_EXPRESS(): string;

	static CARD_TYPE_DINERS_CLUB(): string;

	static CARD_TYPE_DISCOVER(): string;

	static CARD_TYPE_GENERIC_CARD(): string;

	static CARD_TYPE_HIPER(): string;

	static CARD_TYPE_HIPERCARD(): string;

	static CARD_TYPE_JCB(): string;

	static CARD_TYPE_MAESTRO(): string;

	static CARD_TYPE_MASTER_CARD(): string;

	static CARD_TYPE_UNION_PAY(): string;

	static CARD_TYPE_VISA(): string;

	static CID_FIELD_PLACEHOLDER(): string;

	static CONFIRM_ACTION(): string;

	static CONFIRM_ENROLLMENT_LABEL(): string;

	static CONTINUE_ACTION(): string;

	static COUNTRY_CODE_INVALID(): string;

	static COUNTRY_CODE_REQUIRED(): string;

	static CREDIT_OR_DEBIT_CARD_LABEL(): string;

	static CVC_FIELD_PLACEHOLDER(): string;

	static CVN_FIELD_PLACEHOLDER(): string;

	static CVV_FIELD_PLACEHOLDER(): string;

	static CVV_INVALID(): string;

	static CVV_REQUIRED(): string;

	static DEV_SAMPLE_SMS_CODE_INFO(): string;

	static DEV_SAMPLE_SMS_CODE_TITLE(): string;

	static DONE_ACTION(): string;

	static EDIT_ACTION(): string;

	static EDIT_PAYMENT_METHOD(): string;

	static ENROLLMENT_WITH_SMS_HELP_LABEL(): string;

	static ENTER_CARD_DETAILS_HELP_LABEL(): string;

	static ENTER_SMS_CODE_SENT_HELP_LABEL(): string;

	static EXPIRATION_DATE_LABEL(): string;

	static EXPIRATION_INVALID(): string;

	static EXPIRATION_REQUIRED(): string;

	static EXPIRY_PLACEHOLDER_FOUR_DIGIT_YEAR(): string;

	static EXPIRY_PLACEHOLDER_TWO_DIGIT_YEAR(): string;

	static INVALID_LABEL(): string;

	static MOBILE_COUNTRY_CODE_LABEL(): string;

	static MOBILE_NUMBER_INVALID(): string;

	static MOBILE_NUMBER_LABEL(): string;

	static MOBILE_NUMBER_REQUIRED(): string;

	static MONTH_LABEL(): string;

	static NEXT_ACTION(): string;

	static OTHER_LABEL(): string;

	static PAYPAL(): string;

	static POSTAL_CODE_HELP_LABEL(): string;

	static POSTAL_CODE_INVALID(): string;

	static POSTAL_CODE_PLACEHOLDER(): string;

	static POSTAL_CODE_REQUIRED(): string;

	static RECENT_LABEL(): string;

	static RETRY_ACTION(): string;

	static REVIEW_AND_TRY_AGAIN(): string;

	static SAVE_CARD_LABEL(): string;

	static SCAN_CARD_IO_ACTION(): string;

	static SECURITY_CODE_LABEL(): string;

	static SELECT_PAYMENT_LABEL(): string;

	static SMS_CODE_INVALID(): string;

	static SMS_CODE_LABEL(): string;

	static SMS_CODE_REQUIRED(): string;

	static THERE_WAS_AN_ERROR(): string;

	static TOP_LEVEL_ERROR_ALERT_VIEW_OK_BUTTON_TEXT(): string;

	static USE_DIFFERENT_PHONE_NUMBER_ACTION(): string;

	static VALID_CARD_ERROR_LABEL(): string;

	static YEAR_LABEL(): string;

	static alloc(): BTUIKLocalizedString; // inherited from NSObject

	static insertIntoLocalizedStringReplacement(string: string, replacement: string): string;

	static insertIntoLocalizedStringReplacementToken(string: string, replacement: string, token: string): string;

	static new(): BTUIKLocalizedString; // inherited from NSObject

	static setCustomTranslations(locales: NSArray<any> | any[]): void;
}

declare class BTUIKMobileCountryCodeFormField extends BTUIKFormField {

	static alloc(): BTUIKMobileCountryCodeFormField; // inherited from NSObject

	static appearance(): BTUIKMobileCountryCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKMobileCountryCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKMobileCountryCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKMobileCountryCodeFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKMobileCountryCodeFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKMobileCountryCodeFormField; // inherited from UIAppearance

	static new(): BTUIKMobileCountryCodeFormField; // inherited from NSObject

	readonly countryCode: string;
}

declare class BTUIKMobileNumberFormField extends BTUIKFormField {

	static alloc(): BTUIKMobileNumberFormField; // inherited from NSObject

	static appearance(): BTUIKMobileNumberFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKMobileNumberFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKMobileNumberFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKMobileNumberFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKMobileNumberFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKMobileNumberFormField; // inherited from UIAppearance

	static new(): BTUIKMobileNumberFormField; // inherited from NSObject

	readonly mobileNumber: string;
}

declare class BTUIKPaymentOptionCardView extends UIView {

	static alloc(): BTUIKPaymentOptionCardView; // inherited from NSObject

	static appearance(): BTUIKPaymentOptionCardView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKPaymentOptionCardView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKPaymentOptionCardView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKPaymentOptionCardView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKPaymentOptionCardView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKPaymentOptionCardView; // inherited from UIAppearance

	static new(): BTUIKPaymentOptionCardView; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	cornerRadius: number;

	innerPadding: number;

	paymentOptionType: BTUIKPaymentOptionType;

	vectorArtSize: BTUIKVectorArtSize;

	getArtDimensions(): CGSize;

	setHighlighted(highlighted: boolean): void;
}

declare const enum BTUIKPaymentOptionType {

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

	UKMaestro = 14,

	PayPal = 15,

	Coinbase = 16,

	Venmo = 17,

	ApplePay = 18
}

declare class BTUIKPostalCodeFormField extends BTUIKFormField {

	static alloc(): BTUIKPostalCodeFormField; // inherited from NSObject

	static appearance(): BTUIKPostalCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKPostalCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKPostalCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKPostalCodeFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKPostalCodeFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKPostalCodeFormField; // inherited from UIAppearance

	static new(): BTUIKPostalCodeFormField; // inherited from NSObject

	readonly postalCode: string;
}

declare class BTUIKSecurityCodeFormField extends BTUIKFormField {

	static alloc(): BTUIKSecurityCodeFormField; // inherited from NSObject

	static appearance(): BTUIKSecurityCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKSecurityCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKSecurityCodeFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKSecurityCodeFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKSecurityCodeFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKSecurityCodeFormField; // inherited from UIAppearance

	static new(): BTUIKSecurityCodeFormField; // inherited from NSObject

	readonly securityCode: string;
}

declare class BTUIKSwitchFormField extends UIView {

	static alloc(): BTUIKSwitchFormField; // inherited from NSObject

	static appearance(): BTUIKSwitchFormField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKSwitchFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKSwitchFormField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKSwitchFormField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKSwitchFormField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKSwitchFormField; // inherited from UIAppearance

	static new(): BTUIKSwitchFormField; // inherited from NSObject

	switchControl: UISwitch;

	constructor(o: { title: string; });

	initWithTitle(title: string): this;
}

declare class BTUIKTextField extends UITextField {

	static alloc(): BTUIKTextField; // inherited from NSObject

	static appearance(): BTUIKTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKTextField; // inherited from UIAppearance

	static new(): BTUIKTextField; // inherited from NSObject

	editDelegate: BTUIKTextFieldEditDelegate;

	hideCaret: boolean;
}

interface BTUIKTextFieldEditDelegate extends NSObjectProtocol {

	textFieldDidDeleteBackwardOriginalText?(textField: BTUIKTextField, originalText: string): void;

	textFieldDidInsertText?(textField: BTUIKTextField, text: string): void;

	textFieldWillDeleteBackward?(textField: BTUIKTextField): void;

	textFieldWillInsertText?(textField: BTUIKTextField, text: string): void;
}
declare var BTUIKTextFieldEditDelegate: {

	prototype: BTUIKTextFieldEditDelegate;
};

declare class BTUIKUtil extends NSObject {

	static alloc(): BTUIKUtil; // inherited from NSObject

	static luhnValid(cardNumber: string): boolean;

	static new(): BTUIKUtil; // inherited from NSObject

	static stripNonDigits(input: string): string;

	static stripNonExpiry(input: string): string;
}

declare const enum BTUIKVectorArtSize {

	Regular = 0,

	Large = 1
}

declare class BTUIKVectorArtView extends UIView {

	static alloc(): BTUIKVectorArtView; // inherited from NSObject

	static appearance(): BTUIKVectorArtView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BTUIKVectorArtView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BTUIKVectorArtView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKVectorArtView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BTUIKVectorArtView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BTUIKVectorArtView; // inherited from UIAppearance

	static new(): BTUIKVectorArtView; // inherited from NSObject

	artDimensions: CGSize;

	drawArt(): void;

	imageOfSize(size: CGSize): UIImage;
}

declare class BTUIKViewUtil extends NSObject {

	static alloc(): BTUIKViewUtil; // inherited from NSObject

	static isLanguageLayoutDirectionRightToLeft(): boolean;

	static isPaymentOptionTypeACreditCard(paymentOptionType: BTUIKPaymentOptionType): boolean;

	static nameForPaymentMethodType(paymentMethodType: BTUIKPaymentOptionType): string;

	static naturalTextAlignment(): NSTextAlignment;

	static naturalTextAlignmentInverse(): NSTextAlignment;

	static new(): BTUIKViewUtil; // inherited from NSObject

	static paymentMethodTypeForCardType(cardType: BTUIKCardType): BTUIKPaymentOptionType;

	static paymentOptionTypeForPaymentInfoType(typeString: string): BTUIKPaymentOptionType;

	static vectorArtViewForPaymentInfoType(typeString: string): BTUIKVectorArtView;

	static vectorArtViewForPaymentOptionType(type: BTUIKPaymentOptionType): BTUIKVectorArtView;

	static vectorArtViewForPaymentOptionTypeSize(type: BTUIKPaymentOptionType, size: BTUIKVectorArtSize): BTUIKVectorArtView;

	static vectorArtViewForVisualAssetType(type: BTUIKVisualAssetType): BTUIKVectorArtView;

	static vibrate(): void;
}

declare const enum BTUIKVisualAssetType {

	Unknown = 0,

	CVVBack = 1,

	CVVFront = 2
}

declare class BTVaultManagementViewController extends BTDropInBaseViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): BTVaultManagementViewController; // inherited from NSObject

	static new(): BTVaultManagementViewController; // inherited from NSObject

	delegate: BTDropInControllerDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare var BraintreeDropInVersionNumber: number;

declare var BraintreeDropInVersionNumberVar: number;

declare var BraintreeDropInVersionString: interop.Reference<number>;

declare var BraintreeDropInVersionStringVar: interop.Reference<number>;

declare var BraintreeUIKitVersionNumber: number;

declare var BraintreeUIKitVersionString: interop.Reference<number>;
