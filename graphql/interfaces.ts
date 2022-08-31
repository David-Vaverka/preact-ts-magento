export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** Defines the bundle products to add to the cart. */
export type GQLAddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']
  /** An array of bundle products to add. */
  cart_items: Array<Maybe<GQLBundleProductCartItemInput>>
}

/** Contains details about the cart after adding bundle products. */
export type GQLAddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput'
  /** The cart after adding products. */
  cart: GQLCart
}

/** Defines the configurable products to add to the cart. */
export type GQLAddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']
  /** An array of configurable products to add. */
  cart_items: Array<Maybe<GQLConfigurableProductCartItemInput>>
}

/** Contains details about the cart after adding configurable products. */
export type GQLAddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput'
  /** The cart after adding products. */
  cart: GQLCart
}

export type GQLAddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']
  /** An array of downloadable products to add. */
  cart_items: Array<Maybe<GQLDownloadableProductCartItemInput>>
}

/** Contains details about the cart after adding downloadable products. */
export type GQLAddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput'
  /** The cart after adding products. */
  cart: GQLCart
}

/** Defines an item to add to the gift registry. */
export type GQLAddGiftRegistryItemInput = {
  /** An array of options the customer has entered. */
  entered_options?: Maybe<Array<Maybe<GQLEnteredOptionInput>>>
  /** A brief note about the item. */
  note?: Maybe<Scalars['String']>
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: Maybe<Scalars['String']>
  /** The quantity of the product to add. */
  quantity: Scalars['Float']
  /** An array of strings corresponding to options the customer has selected. */
  selected_options?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The SKU of the product to add to the gift registry. */
  sku: Scalars['String']
}

/** Defines a new registrant. */
export type GQLAddGiftRegistryRegistrantInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: Maybe<Array<Maybe<GQLGiftRegistryDynamicAttributeInput>>>
  /** The email address of the registrant. */
  email: Scalars['String']
  /** The first name of the registrant. */
  firstname: Scalars['String']
  /** The last name of the registrant. */
  lastname: Scalars['String']
}

/** Contains the results of a request to add registrants. */
export type GQLAddGiftRegistryRegistrantsOutput = {
  __typename?: 'AddGiftRegistryRegistrantsOutput'
  /** The gift registry after adding registrants. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Contains details about the cart after adding products to it. */
export type GQLAddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput'
  /** The cart after products have been added. */
  cart: GQLCart
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<GQLCartUserInputError>>
}

/** Contains products to add to an existing compare list. */
export type GQLAddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<Maybe<Scalars['ID']>>
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']
}

/** Output of the request to add products to a requisition list. */
export type GQLAddProductsToRequisitionListOutput = {
  __typename?: 'AddProductsToRequisitionListOutput'
  /** The requisition list after adding products. */
  requisition_list?: Maybe<GQLRequisitionList>
}

/** Contains the customer's wish list and any errors encountered. */
export type GQLAddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput'
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<GQLWishListUserInputError>>
  /** Contains the wish list with all items that were successfully added. */
  wishlist: GQLWishlist
}

/** Contains details about why an attempt to add items to the requistion list failed. */
export type GQLAddRequisitionListItemToCartUserError = {
  __typename?: 'AddRequisitionListItemToCartUserError'
  /** A description of the error. */
  message: Scalars['String']
  /** The type of error that occurred. */
  type: GQLAddRequisitionListItemToCartUserErrorType
}

export enum GQLAddRequisitionListItemToCartUserErrorType {
  OutOfStock = 'OUT_OF_STOCK',
  UnavailableSku = 'UNAVAILABLE_SKU',
  OptionsUpdated = 'OPTIONS_UPDATED',
  LowQuantity = 'LOW_QUANTITY',
}

/** Output of the request to add items in a requisition list to the cart. */
export type GQLAddRequisitionListItemsToCartOutput = {
  __typename?: 'AddRequisitionListItemsToCartOutput'
  /** Details about why the attempt to add items to the requistion list was not successful. */
  add_requisition_list_items_to_cart_user_errors: Array<
    Maybe<GQLAddRequisitionListItemToCartUserError>
  >
  /** The cart after adding requisition list items. */
  cart?: Maybe<GQLCart>
  /** Indicates whether the attempt to add items to the requisition list was successful. */
  status: Scalars['Boolean']
}

/** Defines a return comment. */
export type GQLAddReturnCommentInput = {
  /** The text added to the return request. */
  comment_text: Scalars['String']
  /** The unique ID for a `Return` object. */
  return_uid: Scalars['ID']
}

/** Contains details about the return request. */
export type GQLAddReturnCommentOutput = {
  __typename?: 'AddReturnCommentOutput'
  /** The modified return. */
  return?: Maybe<GQLReturn>
}

/** Defines tracking information to be added to the return. */
export type GQLAddReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingCarrier` object. */
  carrier_uid: Scalars['ID']
  /** The unique ID for a `Returns` object. */
  return_uid: Scalars['ID']
  /** The shipping tracking number for this return request. */
  tracking_number: Scalars['String']
}

/** Contains the response after adding tracking information. */
export type GQLAddReturnTrackingOutput = {
  __typename?: 'AddReturnTrackingOutput'
  /** Details about the modified return. */
  return?: Maybe<GQLReturn>
  /** Details about shipping for a return. */
  return_shipping_tracking?: Maybe<GQLReturnShippingTracking>
}

/** Defines the simple and group products to add to the cart. */
export type GQLAddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** An array of simple and group items to add. */
  cart_items: Array<Maybe<GQLSimpleProductCartItemInput>>
}

/** Contains details about the cart after adding simple or group products. */
export type GQLAddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput'
  /** The cart after adding products. */
  cart: GQLCart
}

/** Defines the virtual products to add to the cart. */
export type GQLAddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** An array of virtual products to add. */
  cart_items: Array<Maybe<GQLVirtualProductCartItemInput>>
}

/** Contains details about the cart after adding virtual products. */
export type GQLAddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput'
  /** The cart after adding products. */
  cart: GQLCart
}

/** Contains the resultant wish list and any error information. */
export type GQLAddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput'
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<
    Maybe<GQLWishlistCartUserInputError>
  >
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']
  /** Contains the wish list with all items that were successfully added. */
  wishlist: GQLWishlist
}

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type GQLAggregation = {
  __typename?: 'Aggregation'
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<GQLAggregationOption>>>
  /** The relative position of the attribute in a layered navigation block. */
  position?: Maybe<Scalars['Int']>
}

/** An implementation of `AggregationOptionInterface`. */
export type GQLAggregationOption = GQLAggregationOptionInterface & {
  __typename?: 'AggregationOption'
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']>
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']
}

/** Defines aggregation option fields. */
export type GQLAggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']>
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']
}

/** Filter category aggregations in layered navigation. */
export type GQLAggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: Maybe<Scalars['Boolean']>
}

/** An input object that specifies the filters used in product aggregations. */
export type GQLAggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: Maybe<GQLAggregationsCategoryFilterInput>
}

/** Contains the applied coupon code. */
export type GQLAppliedCoupon = {
  __typename?: 'AppliedCoupon'
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']
}

/** Contains an applied gift card with applied and remaining balance. */
export type GQLAppliedGiftCard = {
  __typename?: 'AppliedGiftCard'
  /** The amount applied to the current cart. */
  applied_balance?: Maybe<GQLMoney>
  /** The gift card account code. */
  code?: Maybe<Scalars['String']>
  /** The remaining balance on the gift card. */
  current_balance?: Maybe<GQLMoney>
  /** The expiration date of the gift card. */
  expiration_date?: Maybe<Scalars['String']>
}

/** Contains the applied and current balances. */
export type GQLAppliedStoreCredit = {
  __typename?: 'AppliedStoreCredit'
  /** The applied store credit balance to the current cart. */
  applied_balance?: Maybe<GQLMoney>
  /** The current balance remaining on store credit. */
  current_balance?: Maybe<GQLMoney>
  /** Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned. */
  enabled?: Maybe<Scalars['Boolean']>
}

/** Specifies the coupon code to apply to the cart. */
export type GQLApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** A valid coupon code. */
  coupon_code: Scalars['String']
}

/** Contains details about the cart after applying a coupon. */
export type GQLApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput'
  /** The cart after applying a coupon. */
  cart: GQLCart
}

/** Defines the input required to run the `applyGiftCardToCart` mutation. */
export type GQLApplyGiftCardToCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']
  /** The gift card code to be applied to the cart. */
  gift_card_code: Scalars['String']
}

/** Defines the possible output for the `applyGiftCardToCart` mutation. */
export type GQLApplyGiftCardToCartOutput = {
  __typename?: 'ApplyGiftCardToCartOutput'
  /** Describes the contents of the specified shopping cart. */
  cart: GQLCart
}

/** Contains the customer cart. */
export type GQLApplyRewardPointsToCartOutput = {
  __typename?: 'ApplyRewardPointsToCartOutput'
  /** The customer cart after reward points are applied. */
  cart: GQLCart
}

/** Defines the input required to run the `applyStoreCreditToCart` mutation. */
export type GQLApplyStoreCreditToCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']
}

/** Defines the possible output for the `applyStoreCreditToCart` mutation. */
export type GQLApplyStoreCreditToCartOutput = {
  __typename?: 'ApplyStoreCreditToCartOutput'
  /** The contents of the specified shopping cart. */
  cart: GQLCart
}

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type GQLAreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int']
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String']
}

/** Contains the results of the request to assign a compare list. */
export type GQLAssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput'
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<GQLCompareList>
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']
}

/** Contains details about the attribute, including the code and type. */
export type GQLAttribute = {
  __typename?: 'Attribute'
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<GQLAttributeOption>>>
  /** The data type of the attribute. */
  attribute_type?: Maybe<Scalars['String']>
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']>
  /** The frontend input type of the attribute. */
  input_type?: Maybe<Scalars['String']>
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties?: Maybe<GQLStorefrontProperties>
}

export enum GQLAttributeEntityTypeEnum {
  Product = 'PRODUCT',
}

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type GQLAttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']>
}

/** An interface containing fields that define attributes. */
export type GQLAttributeMetadataInterface = {
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<GQLStoreLabels>>>
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>
  /** The data type of the attribute. */
  data_type?: Maybe<GQLObjectDataTypeEnum>
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<GQLAttributeEntityTypeEnum>
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<GQLUiInputTypeInterface>
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>
}

/** Defines an attribute option. */
export type GQLAttributeOption = GQLAttributeOptionInterface & {
  __typename?: 'AttributeOption'
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']>
  /** The unique ID of an attribute option. */
  uid: Scalars['ID']
  /** The attribute option value. */
  value?: Maybe<Scalars['String']>
}

/** Defines attribute options. */
export type GQLAttributeOptionInterface = {
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']>
  /** The unique ID of an attribute option. */
  uid: Scalars['ID']
}

export type GQLAttributeOptions = GQLAttributeOptionsInterface & {
  __typename?: 'AttributeOptions'
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
}

/** Defines attribute options. */
export type GQLAttributeOptionsInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
}

/** Contains an array of custom and system attributes. */
export type GQLAttributesMetadata = {
  __typename?: 'AttributesMetadata'
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<GQLAttributeMetadataInterface>>>
}

/** Describes a payment method that the shopper can use to pay for the order. */
export type GQLAvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod'
  /** The payment method code. */
  code: Scalars['String']
  /** The payment method title. */
  title: Scalars['String']
}

/** Contains details about the possible shipping methods and carriers. */
export type GQLAvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod'
  /** The cost of shipping using this shipping method. */
  amount: GQLMoney
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<GQLMoney>
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']
  /** The label for the carrier code. */
  carrier_title: Scalars['String']
  /** Describes an error condition. */
  error_message?: Maybe<Scalars['String']>
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code?: Maybe<Scalars['String']>
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title?: Maybe<Scalars['String']>
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: GQLMoney
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: GQLMoney
}

export enum GQLBatchMutationStatus {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  MixedResults = 'MIXED_RESULTS',
}

/** Defines the billing address. */
export type GQLBillingAddressInput = {
  /** Defines a billing address. */
  address?: Maybe<GQLCartAddressInput>
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: Maybe<Scalars['Int']>
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: Maybe<Scalars['Boolean']>
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: Maybe<Scalars['Boolean']>
}

/** Contains details about the billing address. */
export type GQLBillingCartAddress = GQLCartAddressInterface & {
  __typename?: 'BillingCartAddress'
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>
  /** An object containing the country label and code. */
  country: GQLCartAddressCountry
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']>
  /** The first name of the customer or guest. */
  firstname: Scalars['String']
  /** The last name of the customer or guest. */
  lastname: Scalars['String']
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>
  /** An object containing the region label and code. */
  region?: Maybe<GQLCartAddressRegion>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>
}

export type GQLBraintreeCcVaultInput = {
  device_data?: Maybe<Scalars['String']>
  public_hash: Scalars['String']
}

export type GQLBraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: Maybe<Scalars['String']>
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean']
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String']
}

/** Contains details about an individual category that comprises a breadcrumb. */
export type GQLBreadcrumb = {
  __typename?: 'Breadcrumb'
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id?: Maybe<Scalars['Int']>
  /** The category level. */
  category_level?: Maybe<Scalars['Int']>
  /** The display name of the category. */
  category_name?: Maybe<Scalars['String']>
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']
  /** The URL key of the category. */
  category_url_key?: Maybe<Scalars['String']>
  /** The URL path of the category. */
  category_url_path?: Maybe<Scalars['String']>
}

/** An implementation for bundle product cart items. */
export type GQLBundleCartItem = GQLCartItemInterface & {
  __typename?: 'BundleCartItem'
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GQLGiftWrapping>>
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<GQLSelectedBundleOption>>
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GQLGiftMessage>
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type GQLBundleCreditMemoItem = GQLCreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem'
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options?: Maybe<Array<Maybe<GQLItemSelectedBundleOption>>>
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
}

/** Defines bundle product options for `InvoiceItemInterface`. */
export type GQLBundleInvoiceItem = GQLInvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem'
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options?: Maybe<Array<Maybe<GQLItemSelectedBundleOption>>>
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']
  /** Details about an individual order item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
}

/** Defines an individual item within a bundle product. */
export type GQLBundleItem = {
  __typename?: 'BundleItem'
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<GQLBundleItemOption>>>
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']>
  /** The range of prices for the product */
  price_range: GQLPriceRange
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']>
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']>
  /** The display name of the item. */
  title?: Maybe<Scalars['String']>
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']>
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']>
}

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type GQLBundleItemOption = {
  __typename?: 'BundleItemOption'
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']>
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']>
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']>
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']>
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']>
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']>
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** Contains details about this product option. */
  product?: Maybe<GQLProductInterface>
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>
  /** The quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']>
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']
}

/** Defines the input for a bundle option. */
export type GQLBundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']
  /** An array with the chosen value of the option. */
  value: Array<Maybe<Scalars['String']>>
}

/** Defines bundle product options for `OrderItemInterface`. */
export type GQLBundleOrderItem = GQLOrderItemInterface & {
  __typename?: 'BundleOrderItem'
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options?: Maybe<Array<Maybe<GQLItemSelectedBundleOption>>>
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>
}

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type GQLBundleProduct = GQLProductInterface &
  GQLRoutableInterface &
  GQLPhysicalProductInterface &
  GQLCustomizableProductInterface & {
    __typename?: 'BundleProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** Indicates whether the bundle product has a dynamic price. */
    dynamic_price?: Maybe<Scalars['Boolean']>
    /** Indicates whether the bundle product has a dynamic SKU. */
    dynamic_sku?: Maybe<Scalars['Boolean']>
    /** Indicates whether the bundle product has a dynamically calculated weight. */
    dynamic_weight?: Maybe<Scalars['Boolean']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /** An array containing information about individual bundle items. */
    items?: Maybe<Array<Maybe<GQLBundleItem>>>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** One of PRICE_RANGE or AS_LOW_AS. */
    price_view?: Maybe<GQLPriceViewEnum>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** Indicates whether to ship bundle items together or individually. */
    ship_bundle_items?: Maybe<GQLShipBundleItemsEnum>
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<Scalars['Float']>
  }

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type GQLBundleProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines a single bundle product. */
export type GQLBundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<Maybe<GQLBundleOptionInput>>
  /** The ID and value of the option. */
  customizable_options?: Maybe<Array<Maybe<GQLCustomizableOptionInput>>>
  /** The quantity and SKU of the bundle product. */
  data: GQLCartItemInput
}

/** Contains details about bundle products added to a requisition list. */
export type GQLBundleRequisitionListItem = GQLRequisitionListItemInterface & {
  __typename?: 'BundleRequisitionListItem'
  /** An array of selected options for a bundle product. */
  bundle_options: Array<Maybe<GQLSelectedBundleOption>>
  /** Selected custom options for an item in the requisition list. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** Details about a requisition list item. */
  product: GQLProductInterface
  /** The quantity of the product added to the requisition list. */
  quantity: Scalars['Float']
  /** The unique ID of an item in a requisition list. */
  uid: Scalars['ID']
}

/** Defines bundle product options for `ShipmentItemInterface`. */
export type GQLBundleShipmentItem = GQLShipmentItemInterface & {
  __typename?: 'BundleShipmentItem'
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options?: Maybe<Array<Maybe<GQLItemSelectedBundleOption>>>
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']
  /** The order item associated with the shipment item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']
}

/** Defines bundle product options for `WishlistItemInterface`. */
export type GQLBundleWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'BundleWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** An array containing information about the selected bundle items. */
  bundle_options?: Maybe<Array<Maybe<GQLSelectedBundleOption>>>
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

/** Contains the contents and other details about a guest or customer cart. */
export type GQLCart = {
  __typename?: 'Cart'
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<GQLAppliedCoupon>
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons?: Maybe<Array<Maybe<GQLAppliedCoupon>>>
  /** An array of gift card items applied to the cart. */
  applied_gift_cards?: Maybe<Array<Maybe<GQLAppliedGiftCard>>>
  /** The amount of reward points applied to the cart. */
  applied_reward_points?: Maybe<GQLRewardPointsAmount>
  /** Store credit information applied to the cart. */
  applied_store_credit?: Maybe<GQLAppliedStoreCredit>
  /** The list of available gift wrapping options for the cart. */
  available_gift_wrappings: Array<Maybe<GQLGiftWrapping>>
  /** An array of available payment methods. */
  available_payment_methods?: Maybe<Array<Maybe<GQLAvailablePaymentMethod>>>
  /** The billing address assigned to the cart. */
  billing_address?: Maybe<GQLBillingCartAddress>
  /** The email address of the guest or customer. */
  email?: Maybe<Scalars['String']>
  /** The entered gift message for the cart */
  gift_message?: Maybe<GQLGiftMessage>
  /** Indicates whether the shopper requested gift receipt for the cart. */
  gift_receipt_included: Scalars['Boolean']
  /** The selected gift wrapping for the cart. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']
  /** An array of products that have been added to the cart. */
  items?: Maybe<Array<Maybe<GQLCartItemInterface>>>
  /** Pricing details for the quote. */
  prices?: Maybe<GQLCartPrices>
  /** Indicates whether the shopper requested a printed card for the cart. */
  printed_card_included: Scalars['Boolean']
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method?: Maybe<GQLSelectedPaymentMethod>
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<GQLShippingCartAddress>>
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']
}

/** Contains details the country in a billing or shipping address. */
export type GQLCartAddressCountry = {
  __typename?: 'CartAddressCountry'
  /** The country code. */
  code: Scalars['String']
  /** The display label for the country. */
  label: Scalars['String']
}

/** Defines the billing or shipping address to be applied to the cart. */
export type GQLCartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']
  /** The first name of the customer or guest. */
  firstname: Scalars['String']
  /** The last name of the customer or guest. */
  lastname: Scalars['String']
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>
  /** A string that defines the state or province of the billing or shipping address. */
  region?: Maybe<Scalars['String']>
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: Maybe<Scalars['Int']>
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: Maybe<Scalars['Boolean']>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>
}

export type GQLCartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>
  /** An object containing the country label and code. */
  country: GQLCartAddressCountry
  /** The first name of the customer or guest. */
  firstname: Scalars['String']
  /** The last name of the customer or guest. */
  lastname: Scalars['String']
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>
  /** An object containing the region label and code. */
  region?: Maybe<GQLCartAddressRegion>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>
}

/** Contains details about the region in a billing or shipping address. */
export type GQLCartAddressRegion = {
  __typename?: 'CartAddressRegion'
  /** The state or province code. */
  code?: Maybe<Scalars['String']>
  /** The display label for the region. */
  label?: Maybe<Scalars['String']>
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>
}

/** Contains information about discounts applied to the cart. */
export type GQLCartDiscount = {
  __typename?: 'CartDiscount'
  /** The amount of the discount applied to the item. */
  amount: GQLMoney
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']>>
}

export type GQLCartItemError = {
  __typename?: 'CartItemError'
  /** An error code that describes the error encountered */
  code: GQLCartItemErrorType
  /** A localized error message */
  message: Scalars['String']
}

export enum GQLCartItemErrorType {
  Undefined = 'UNDEFINED',
  ItemQty = 'ITEM_QTY',
  ItemIncrements = 'ITEM_INCREMENTS',
}

/** Defines an item to be added to the cart. */
export type GQLCartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: Maybe<Array<Maybe<GQLEnteredOptionInput>>>
  /** For a child product, the SKU of its parent product. */
  parent_sku?: Maybe<Scalars['String']>
  /** The amount or number of an item to add. */
  quantity: Scalars['Float']
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The SKU of the product. */
  sku: Scalars['String']
}

/** An interface for products in a cart. */
export type GQLCartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

/** Contains details about the price of the item, including taxes and discounts. */
export type GQLCartItemPrices = {
  __typename?: 'CartItemPrices'
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<GQLFixedProductTax>>>
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: GQLMoney
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: GQLMoney
  /** The value of the price multiplied by the quantity of the item. */
  row_total: GQLMoney
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: GQLMoney
  /** The total of all discounts applied to the item. */
  total_item_discount?: Maybe<GQLMoney>
}

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type GQLCartItemQuantity = {
  __typename?: 'CartItemQuantity'
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']
}

/** Contains details about the price of a selected customizable value. */
export type GQLCartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice'
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: GQLPriceTypeEnum
  /** A string that describes the unit of the value. */
  units: Scalars['String']
  /** A price value. */
  value: Scalars['Float']
}

/** A single item to be updated. */
export type GQLCartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: Maybe<Scalars['Int']>
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: Maybe<Scalars['ID']>
  /** An array that defines customizable options for the product. */
  customizable_options?: Maybe<Array<Maybe<GQLCustomizableOptionInput>>>
  /** Gift message details for the cart item */
  gift_message?: Maybe<GQLGiftMessageInput>
  /** The unique ID for a `GiftWrapping` object to be used for the cart item. */
  gift_wrapping_id?: Maybe<Scalars['ID']>
  /** The new quantity of the item. */
  quantity?: Maybe<Scalars['Float']>
}

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type GQLCartPrices = {
  __typename?: 'CartPrices'
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes?: Maybe<Array<Maybe<GQLCartTaxItem>>>
  /** @deprecated Use discounts instead. */
  discount?: Maybe<GQLCartDiscount>
  /** An array containing all discounts applied to the cart. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The list of prices for the selected gift options. */
  gift_options?: Maybe<GQLGiftOptionsPrices>
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total?: Maybe<GQLMoney>
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax?: Maybe<GQLMoney>
  /** The subtotal including any applied taxes. */
  subtotal_including_tax?: Maybe<GQLMoney>
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax?: Maybe<GQLMoney>
}

/** Contains tax information about an item in the cart. */
export type GQLCartTaxItem = {
  __typename?: 'CartTaxItem'
  /** The amount of tax applied to the item. */
  amount: GQLMoney
  /** The description of the tax. */
  label: Scalars['String']
}

/** An error encountered while adding an item to the the cart. */
export type GQLCartUserInputError = {
  __typename?: 'CartUserInputError'
  /** A cart-specific error code. */
  code: GQLCartUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']
}

export enum GQLCartUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  NotSalable = 'NOT_SALABLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Undefined = 'UNDEFINED',
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type GQLCategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: Maybe<GQLFilterEqualTypeInput>
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: Maybe<GQLFilterEqualTypeInput>
  /** Filter by the display name of the category. */
  name?: Maybe<GQLFilterMatchTypeInput>
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: Maybe<GQLFilterEqualTypeInput>
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: Maybe<GQLFilterEqualTypeInput>
  /** Filter by the part of the URL that identifies the category. */
  url_key?: Maybe<GQLFilterEqualTypeInput>
  /** Filter by the URL path for the category. */
  url_path?: Maybe<GQLFilterEqualTypeInput>
}

/** Contains the full set of attributes that can be returned in a category search. */
export type GQLCategoryInterface = {
  automatic_sorting?: Maybe<Scalars['String']>
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<GQLBreadcrumb>>>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']>
  children_count?: Maybe<Scalars['String']>
  /** Contains a category CMS block. */
  cms_block?: Maybe<GQLCmsBlock>
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>
  custom_layout_update_file?: Maybe<Scalars['String']>
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>
  display_mode?: Maybe<Scalars['String']>
  filter_price_range?: Maybe<Scalars['Float']>
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>
  image?: Maybe<Scalars['String']>
  include_in_menu?: Maybe<Scalars['Int']>
  is_anchor?: Maybe<Scalars['Int']>
  landing_page?: Maybe<Scalars['Int']>
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>
  meta_description?: Maybe<Scalars['String']>
  meta_keywords?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>
  /** The full category path. */
  path?: Maybe<Scalars['String']>
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']>
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>
  /** The list of products assigned to the category. */
  products?: Maybe<GQLCategoryProducts>
  /** Indicates whether the category is staged for a future campaign. */
  staged: Scalars['Boolean']
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']>
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']>
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>
}

/** Contains the full set of attributes that can be returned in a category search. */
export type GQLCategoryInterfaceProductsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<GQLProductAttributeSortInput>
}

/** Contains details about the products assigned to a category. */
export type GQLCategoryProducts = {
  __typename?: 'CategoryProducts'
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<GQLProductInterface>>>
  /** Pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>
}

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type GQLCategoryResult = {
  __typename?: 'CategoryResult'
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<GQLCategoryTree>>>
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>
}

/** Contains the hierarchy of categories. */
export type GQLCategoryTree = GQLCategoryInterface &
  GQLRoutableInterface & {
    __typename?: 'CategoryTree'
    automatic_sorting?: Maybe<Scalars['String']>
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>
    /** An array of breadcrumb items. */
    breadcrumbs?: Maybe<Array<Maybe<GQLBreadcrumb>>>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** A tree of child categories. */
    children?: Maybe<Array<Maybe<GQLCategoryTree>>>
    children_count?: Maybe<Scalars['String']>
    /** Contains a category CMS block. */
    cms_block?: Maybe<GQLCmsBlock>
    /**
     * The timestamp indicating when the category was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    custom_layout_update_file?: Maybe<Scalars['String']>
    /** The attribute to use for sorting. */
    default_sort_by?: Maybe<Scalars['String']>
    /** An optional description of the category. */
    description?: Maybe<Scalars['String']>
    display_mode?: Maybe<Scalars['String']>
    filter_price_range?: Maybe<Scalars['Float']>
    /**
     * An ID that uniquely identifies the category.
     * @deprecated Use `uid` instead.
     */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<Scalars['String']>
    include_in_menu?: Maybe<Scalars['Int']>
    is_anchor?: Maybe<Scalars['Int']>
    landing_page?: Maybe<Scalars['Int']>
    /** The depth of the category within the tree. */
    level?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keywords?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    /** The display name of the category. */
    name?: Maybe<Scalars['String']>
    /** The full category path. */
    path?: Maybe<Scalars['String']>
    /** The category path within the store. */
    path_in_store?: Maybe<Scalars['String']>
    /** The position of the category relative to other categories at the same level in tree. */
    position?: Maybe<Scalars['Int']>
    /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
    product_count?: Maybe<Scalars['Int']>
    /** The list of products assigned to the category. */
    products?: Maybe<GQLCategoryProducts>
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** Indicates whether the category is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /** The unique ID for a `CategoryInterface` object. */
    uid: Scalars['ID']
    /**
     * The timestamp indicating when the category was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** The URL key assigned to the category. */
    url_key?: Maybe<Scalars['String']>
    /** The URL path assigned to the category. */
    url_path?: Maybe<Scalars['String']>
    /** The part of the category URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
  }

/** Contains the hierarchy of categories. */
export type GQLCategoryTreeProductsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<GQLProductAttributeSortInput>
}

/** Defines details about an individual checkout agreement. */
export type GQLCheckoutAgreement = {
  __typename?: 'CheckoutAgreement'
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']
  /** Required. The text of the agreement. */
  content: Scalars['String']
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height?: Maybe<Scalars['String']>
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: GQLCheckoutAgreementMode
  /** The name given to the condition. */
  name: Scalars['String']
}

/** Indicates how agreements are accepted. */
export enum GQLCheckoutAgreementMode {
  /** Conditions are automatically accepted upon checkout. */
  Auto = 'AUTO',
  /** Shoppers must manually accept the conditions to place an order. */
  Manual = 'MANUAL',
}

/** An error encountered while adding an item to the cart. */
export type GQLCheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError'
  /** An error code that is specific to Checkout. */
  code: GQLCheckoutUserInputErrorCodes
  /** A localized error message. */
  message: Scalars['String']
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']>>
}

export enum GQLCheckoutUserInputErrorCodes {
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  NotSalable = 'NOT_SALABLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Undefined = 'UNDEFINED',
}

/** Output of the request to clear the customer cart. */
export type GQLClearCustomerCartOutput = {
  __typename?: 'ClearCustomerCartOutput'
  /** The cart after clearing items. */
  cart?: Maybe<GQLCart>
  /** Indicates whether cart was cleared. */
  status: Scalars['Boolean']
}

export type GQLCloseNegotiableQuoteError =
  | GQLNegotiableQuoteInvalidStateError
  | GQLNoSuchEntityUidError
  | GQLInternalError

/** Contains details about a failed close operation on a negotiable quote. */
export type GQLCloseNegotiableQuoteOperationFailure = {
  __typename?: 'CloseNegotiableQuoteOperationFailure'
  /** An array of errors encountered while attempting close the negotiable quote. */
  errors: Array<Maybe<GQLCloseNegotiableQuoteError>>
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

export type GQLCloseNegotiableQuoteOperationResult =
  | GQLNegotiableQuoteUidOperationSuccess
  | GQLCloseNegotiableQuoteOperationFailure

/** Defines the negotiable quotes to mark as closed. */
export type GQLCloseNegotiableQuotesInput = {
  /** A list of unique IDs from `NegotiableQuote` objects. */
  quote_uids: Array<Maybe<Scalars['ID']>>
}

/** Contains the closed negotiable quotes and other negotiable quotes the company user can view. */
export type GQLCloseNegotiableQuotesOutput = {
  __typename?: 'CloseNegotiableQuotesOutput'
  /**
   * An array containing the negotiable quotes that were just closed.
   * @deprecated Use `operation_results` instead.
   */
  closed_quotes?: Maybe<Array<Maybe<GQLNegotiableQuote>>>
  /** A list of negotiable quotes that can be viewed by the logged-in customer */
  negotiable_quotes?: Maybe<GQLNegotiableQuotesOutput>
  /** An array of closed negotiable quote UIDs and details about any errors. */
  operation_results: Array<Maybe<GQLCloseNegotiableQuoteOperationResult>>
  /** The status of the request to close one or more negotiable quotes. */
  result_status: GQLBatchMutationStatus
}

/** Contains the closed negotiable quotes and other negotiable quotes the company user can view. */
export type GQLCloseNegotiableQuotesOutputNegotiable_QuotesArgs = {
  filter?: Maybe<GQLNegotiableQuoteFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<GQLNegotiableQuoteSortInput>
}

/** Contains details about a specific CMS block. */
export type GQLCmsBlock = {
  __typename?: 'CmsBlock'
  /** The content of the CMS block in raw HTML. */
  content?: Maybe<Scalars['String']>
  /** The CMS block identifier. */
  identifier?: Maybe<Scalars['String']>
  /** The title assigned to the CMS block. */
  title?: Maybe<Scalars['String']>
}

/** Contains an array CMS block items. */
export type GQLCmsBlocks = {
  __typename?: 'CmsBlocks'
  /** An array of CMS blocks. */
  items?: Maybe<Array<Maybe<GQLCmsBlock>>>
}

/** Contains details about a CMS page. */
export type GQLCmsPage = GQLRoutableInterface & {
  __typename?: 'CmsPage'
  /** The content of the CMS page in raw HTML. */
  content?: Maybe<Scalars['String']>
  /** The heading that displays at the top of the CMS page. */
  content_heading?: Maybe<Scalars['String']>
  /** The ID of a CMS page. */
  identifier?: Maybe<Scalars['String']>
  /** A brief description of the page for search results listings. */
  meta_description?: Maybe<Scalars['String']>
  /** A brief description of the page for search results listings. */
  meta_keywords?: Maybe<Scalars['String']>
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title?: Maybe<Scalars['String']>
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout?: Maybe<Scalars['String']>
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title?: Maybe<Scalars['String']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<GQLUrlRewriteEntityTypeEnum>
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key?: Maybe<Scalars['String']>
}

export type GQLColorSwatchData = GQLSwatchDataInterface & {
  __typename?: 'ColorSwatchData'
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>
}

/** Contains the output schema for a company. */
export type GQLCompany = {
  __typename?: 'Company'
  /** The list of all resources defined within the company. */
  acl_resources?: Maybe<Array<Maybe<GQLCompanyAclResource>>>
  /** An object containing information about the company administrator. */
  company_admin?: Maybe<GQLCustomer>
  /** Company credit balances and limits. */
  credit: GQLCompanyCredit
  /** Details about the history of company credit operations. */
  credit_history: GQLCompanyCreditHistory
  /** The email address of the company contact. */
  email?: Maybe<Scalars['String']>
  /** The unique ID of a `Company` object. */
  id: Scalars['ID']
  /** The address where the company is registered to conduct business. */
  legal_address?: Maybe<GQLCompanyLegalAddress>
  /** The full legal name of the company. */
  legal_name?: Maybe<Scalars['String']>
  /** The name of the company. */
  name?: Maybe<Scalars['String']>
  /** The list of payment methods available to a company. */
  payment_methods?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The resale number that is assigned to the company for tax reporting purposes. */
  reseller_id?: Maybe<Scalars['String']>
  /** A company role filtered by the unique ID of a `CompanyRole` object. */
  role?: Maybe<GQLCompanyRole>
  /** An object that contains a list of company roles. */
  roles: GQLCompanyRoles
  /** An object containing information about the company sales representative. */
  sales_representative?: Maybe<GQLCompanySalesRepresentative>
  /** The company structure of teams and customers in depth-first order. */
  structure?: Maybe<GQLCompanyStructure>
  /** The company team data filtered by the unique ID for a `CompanyTeam` object. */
  team?: Maybe<GQLCompanyTeam>
  /** A company user filtered by the unique ID of a `Customer` object. */
  user?: Maybe<GQLCustomer>
  /** An object that contains a list of company users based on activity status. */
  users?: Maybe<GQLCompanyUsers>
  /** The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. */
  vat_tax_id?: Maybe<Scalars['String']>
}

/** Contains the output schema for a company. */
export type GQLCompanyCredit_HistoryArgs = {
  filter?: Maybe<GQLCompanyCreditHistoryFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Contains the output schema for a company. */
export type GQLCompanyRoleArgs = {
  id: Scalars['ID']
}

/** Contains the output schema for a company. */
export type GQLCompanyRolesArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Contains the output schema for a company. */
export type GQLCompanyStructureArgs = {
  rootId?: Maybe<Scalars['ID']>
  depth?: Maybe<Scalars['Int']>
}

/** Contains the output schema for a company. */
export type GQLCompanyTeamArgs = {
  id: Scalars['ID']
}

/** Contains the output schema for a company. */
export type GQLCompanyUserArgs = {
  id: Scalars['ID']
}

/** Contains the output schema for a company. */
export type GQLCompanyUsersArgs = {
  filter?: Maybe<GQLCompanyUsersFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Contains details about the access control list settings of a resource. */
export type GQLCompanyAclResource = {
  __typename?: 'CompanyAclResource'
  /** An array of sub-resources. */
  children?: Maybe<Array<Maybe<GQLCompanyAclResource>>>
  /** The unique ID for a `CompanyAclResource` object. */
  id: Scalars['ID']
  /** The sort order of an ACL resource. */
  sort_order?: Maybe<Scalars['Int']>
  /** The label assigned to the ACL resource. */
  text?: Maybe<Scalars['String']>
}

/** Contains details about the company administrator. */
export type GQLCompanyAdmin = {
  __typename?: 'CompanyAdmin'
  /** The email address of the company administrator. */
  email?: Maybe<Scalars['String']>
  /** The company administrator's first name. */
  firstname?: Maybe<Scalars['String']>
  /** The company administrator's gender (Male - 1, Female - 2, Not Specified - 3). */
  gender?: Maybe<Scalars['Int']>
  /** The unique ID for a `CompanyAdmin` object. */
  id: Scalars['ID']
  /** The job title of the company administrator. */
  job_title?: Maybe<Scalars['String']>
  /** The company administrator's last name. */
  lastname?: Maybe<Scalars['String']>
}

/** Defines the input schema for creating a company administrator. */
export type GQLCompanyAdminInput = {
  /** The email address of the company administrator. */
  email: Scalars['String']
  /** The company administrator's first name. */
  firstname: Scalars['String']
  /** The company administrator's gender (Male - 1, Female - 2, Not Specified - 3). */
  gender?: Maybe<Scalars['Int']>
  /** The job title of the company administrator. */
  job_title?: Maybe<Scalars['String']>
  /** The company administrator's last name. */
  lastname: Scalars['String']
}

/** Defines the input schema for creating a new company. */
export type GQLCompanyCreateInput = {
  /** Defines the company administrator. */
  company_admin: GQLCompanyAdminInput
  /** The email address of the company contact. */
  company_email: Scalars['String']
  /** The name of the company to create. */
  company_name: Scalars['String']
  /** Defines legal address data of the company. */
  legal_address: GQLCompanyLegalAddressCreateInput
  /** The full legal name of the company. */
  legal_name?: Maybe<Scalars['String']>
  /** The resale number that is assigned to the company for tax reporting purposes. */
  reseller_id?: Maybe<Scalars['String']>
  /** The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. */
  vat_tax_id?: Maybe<Scalars['String']>
}

/** Contains company credit balances and limits. */
export type GQLCompanyCredit = {
  __typename?: 'CompanyCredit'
  /** The sum of the credit limit and the outstanding balance. If the company has exceeded the credit limit, the amount is as a negative value. */
  available_credit: GQLMoney
  /** The amount of credit extended to the company. */
  credit_limit: GQLMoney
  /** The amount reimbursed, less the total due from all orders placed using the Payment on Account payment method. The amount can be a positive or negative value. */
  outstanding_balance: GQLMoney
}

/** Contains details about prior company credit operations. */
export type GQLCompanyCreditHistory = {
  __typename?: 'CompanyCreditHistory'
  /** An array of company credit operations. */
  items: Array<Maybe<GQLCompanyCreditOperation>>
  /** Metadata for pagination rendering. */
  page_info: GQLSearchResultPageInfo
  /** The number of the company credit operations matching the specified filter. */
  total_count?: Maybe<Scalars['Int']>
}

/** Defines a filter for narrowing the results of a credit history search. */
export type GQLCompanyCreditHistoryFilterInput = {
  /** The purchase order number associated with the company credit operation. */
  custom_reference_number?: Maybe<Scalars['String']>
  /** The type of the company credit operation. */
  operation_type?: Maybe<GQLCompanyCreditOperationType>
  /** The name of the person submitting the company credit operation. */
  updated_by?: Maybe<Scalars['String']>
}

/** Contains details about a single company credit operation. */
export type GQLCompanyCreditOperation = {
  __typename?: 'CompanyCreditOperation'
  /** The amount of the company credit operation. */
  amount?: Maybe<GQLMoney>
  /** The credit balance as a result of the operation. */
  balance: GQLCompanyCredit
  /** The purchase order number associated with the company credit operation. */
  custom_reference_number?: Maybe<Scalars['String']>
  /** The date the operation occurred. */
  date: Scalars['String']
  /** The type of the company credit operation. */
  type: GQLCompanyCreditOperationType
  /** The company user that submitted the company credit operation. */
  updated_by: GQLCompanyCreditOperationUser
}

export enum GQLCompanyCreditOperationType {
  Allocation = 'ALLOCATION',
  Update = 'UPDATE',
  Purchase = 'PURCHASE',
  Reimbursement = 'REIMBURSEMENT',
  Refund = 'REFUND',
  Revert = 'REVERT',
}

/** Defines the administrator or company user that submitted a company credit operation. */
export type GQLCompanyCreditOperationUser = {
  __typename?: 'CompanyCreditOperationUser'
  /** The name of the company user submitting the company credit operation. */
  name: Scalars['String']
  /** The type of the company user submitting the company credit operation. */
  type: GQLCompanyCreditOperationUserType
}

export enum GQLCompanyCreditOperationUserType {
  Customer = 'CUSTOMER',
  Admin = 'ADMIN',
}

/** Contains details about the address where the company is registered to conduct business. */
export type GQLCompanyLegalAddress = {
  __typename?: 'CompanyLegalAddress'
  /** The city where the company is registered to conduct business. */
  city?: Maybe<Scalars['String']>
  /** The country code of the company's legal address. */
  country_code?: Maybe<GQLCountryCodeEnum>
  /** The company's postal code. */
  postcode?: Maybe<Scalars['String']>
  /** An object containing region data for the company. */
  region?: Maybe<GQLCustomerAddressRegion>
  /** An array of strings that define the company's street address. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The company's phone number. */
  telephone?: Maybe<Scalars['String']>
}

/** Defines the input schema for defining a company's legal address. */
export type GQLCompanyLegalAddressCreateInput = {
  /** The city where the company is registered to conduct business. */
  city: Scalars['String']
  /** The company's country ID. Use the `countries` query to get this value. */
  country_id: GQLCountryCodeEnum
  /** The postal code of the company. */
  postcode: Scalars['String']
  /** An object containing the region name and/or region ID where the company is registered to conduct business. */
  region: GQLCustomerAddressRegionInput
  /** An array of strings that define the street address where the company is registered to conduct business. */
  street: Array<Maybe<Scalars['String']>>
  /** The primary phone number of the company. */
  telephone: Scalars['String']
}

/** Defines the input schema for updating a company's legal address. */
export type GQLCompanyLegalAddressUpdateInput = {
  /** The city where the company is registered to conduct business. */
  city?: Maybe<Scalars['String']>
  /** The unique ID for a `Country` object. */
  country_id?: Maybe<GQLCountryCodeEnum>
  /** The postal code of the company. */
  postcode?: Maybe<Scalars['String']>
  /** An object containing the region name and/or region ID where the company is registered to conduct business. */
  region?: Maybe<GQLCustomerAddressRegionInput>
  /** An array of strings that define the street address where the company is registered to conduct business. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The primary phone number of the company. */
  telephone?: Maybe<Scalars['String']>
}

/** Contails details about a single role. */
export type GQLCompanyRole = {
  __typename?: 'CompanyRole'
  /** The unique ID for a `CompanyRole` object. */
  id: Scalars['ID']
  /** The name assigned to the role. */
  name?: Maybe<Scalars['String']>
  /** A list of permission resources defined for a role. */
  permissions?: Maybe<Array<Maybe<GQLCompanyAclResource>>>
  /** The total number of users assigned the specified role. */
  users_count?: Maybe<Scalars['Int']>
}

/** Defines the input schema for creating a company role. */
export type GQLCompanyRoleCreateInput = {
  /** The name of the role to create. */
  name: Scalars['String']
  /** A list of resources the role can access. */
  permissions: Array<Maybe<Scalars['String']>>
}

/** Defines the input schema for updating a company role. */
export type GQLCompanyRoleUpdateInput = {
  /** The unique ID for a `CompanyRole` object. */
  id: Scalars['ID']
  /** The name of the role to update. */
  name?: Maybe<Scalars['String']>
  /** A list of resources the role can access. */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Contains an array of roles. */
export type GQLCompanyRoles = {
  __typename?: 'CompanyRoles'
  /** A list of company roles that match the specified filter criteria. */
  items: Array<Maybe<GQLCompanyRole>>
  /** Pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The total number of objects matching the specified filter. */
  total_count: Scalars['Int']
}

/** Contains details about a company sales representative. */
export type GQLCompanySalesRepresentative = {
  __typename?: 'CompanySalesRepresentative'
  /** The email address of the company sales representative. */
  email?: Maybe<Scalars['String']>
  /** The company sales representative's first name. */
  firstname?: Maybe<Scalars['String']>
  /** The company sales representative's last name. */
  lastname?: Maybe<Scalars['String']>
}

/** Contains an array of the individual nodes that comprise the company structure. */
export type GQLCompanyStructure = {
  __typename?: 'CompanyStructure'
  /** An array of elements in a company structure. */
  items?: Maybe<Array<Maybe<GQLCompanyStructureItem>>>
}

export type GQLCompanyStructureEntity = GQLCompanyTeam | GQLCustomer

/** Defines an individual node in the company structure. */
export type GQLCompanyStructureItem = {
  __typename?: 'CompanyStructureItem'
  /** A union of `CompanyTeam` and `Customer` objects. */
  entity?: Maybe<GQLCompanyStructureEntity>
  /** The unique ID for a `CompanyStructureItem` object. */
  id: Scalars['ID']
  /** The ID of the parent item in the company hierarchy. */
  parent_id?: Maybe<Scalars['ID']>
}

/** Defines the input schema for updating the company structure. */
export type GQLCompanyStructureUpdateInput = {
  /** The ID of a company that will be the new parent. */
  parent_tree_id: Scalars['ID']
  /** The ID of the company team that is being moved to another parent. */
  tree_id: Scalars['ID']
}

/** Describes a company team. */
export type GQLCompanyTeam = {
  __typename?: 'CompanyTeam'
  /** An optional description of the team. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `CompanyTeam` object. */
  id: Scalars['ID']
  /** The display name of the team. */
  name?: Maybe<Scalars['String']>
}

/** Defines the input schema for creating a company team. */
export type GQLCompanyTeamCreateInput = {
  /** An optional description of the team. */
  description?: Maybe<Scalars['String']>
  /** The display name of the team. */
  name: Scalars['String']
  /** The ID of a node within a company's structure. This ID will be the parent of the created team. */
  target_id?: Maybe<Scalars['ID']>
}

/** Defines the input schema for updating a company team. */
export type GQLCompanyTeamUpdateInput = {
  /** An optional description of the team. */
  description?: Maybe<Scalars['String']>
  /** The unique ID of the `CompanyTeam` object to update. */
  id: Scalars['ID']
  /** The display name of the team. */
  name?: Maybe<Scalars['String']>
}

/** Defines the input schema for updating a company. */
export type GQLCompanyUpdateInput = {
  /** The email address of the company contact. */
  company_email?: Maybe<Scalars['String']>
  /** The name of the company to update. */
  company_name?: Maybe<Scalars['String']>
  /** The legal address data of the company. */
  legal_address?: Maybe<GQLCompanyLegalAddressUpdateInput>
  /** The full legal name of the company. */
  legal_name?: Maybe<Scalars['String']>
  /** The resale number that is assigned to the company for tax reporting purposes. */
  reseller_id?: Maybe<Scalars['String']>
  /** The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes. */
  vat_tax_id?: Maybe<Scalars['String']>
}

/** Defines the input schema for creating a company user. */
export type GQLCompanyUserCreateInput = {
  /** The company user's email address */
  email: Scalars['String']
  /** The company user's first name. */
  firstname: Scalars['String']
  /** The company user's job title or function. */
  job_title: Scalars['String']
  /** The company user's last name. */
  lastname: Scalars['String']
  /** The unique ID for a `CompanyRole` object. */
  role_id: Scalars['ID']
  /** Indicates whether the company user is ACTIVE or INACTIVE. */
  status: GQLCompanyUserStatusEnum
  /** The ID of a node within a company's structure. This ID will be the parent of the created company user. */
  target_id?: Maybe<Scalars['ID']>
  /** The company user's phone number. */
  telephone: Scalars['String']
}

/** Defines the list of company user status values. */
export enum GQLCompanyUserStatusEnum {
  /** Only active users. */
  Active = 'ACTIVE',
  /** Only inactive users. */
  Inactive = 'INACTIVE',
}

/** Defines the input schema for updating a company user. */
export type GQLCompanyUserUpdateInput = {
  /** The company user's email address. */
  email?: Maybe<Scalars['String']>
  /** The company user's first name. */
  firstname?: Maybe<Scalars['String']>
  /** The unique ID of a `Customer` object. */
  id: Scalars['ID']
  /** The company user's job title or function. */
  job_title?: Maybe<Scalars['String']>
  /** The company user's last name. */
  lastname?: Maybe<Scalars['String']>
  /** The unique ID for a `CompanyRole` object. */
  role_id?: Maybe<Scalars['ID']>
  /** Indicates whether the company user is ACTIVE or INACTIVE. */
  status?: Maybe<GQLCompanyUserStatusEnum>
  /** The company user's phone number. */
  telephone?: Maybe<Scalars['String']>
}

/** Contains details about company users. */
export type GQLCompanyUsers = {
  __typename?: 'CompanyUsers'
  /** An array of `CompanyUser` objects that match the specified filter criteria. */
  items: Array<Maybe<GQLCustomer>>
  /** Pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of objects returned. */
  total_count: Scalars['Int']
}

/** Defines the filter for returning a list of company users. */
export type GQLCompanyUsersFilterInput = {
  /** The activity status to filter on. */
  status?: Maybe<GQLCompanyUserStatusEnum>
}

/** Contains an attribute code that is used for product comparisons. */
export type GQLComparableAttribute = {
  __typename?: 'ComparableAttribute'
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']
  /** The label of the attribute code. */
  label: Scalars['String']
}

/** Defines an object used to iterate through items for product comparisons. */
export type GQLComparableItem = {
  __typename?: 'ComparableItem'
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<GQLProductAttribute>>
  /** Details about a product in a compare list. */
  product: GQLProductInterface
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']
}

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type GQLCompareList = {
  __typename?: 'CompareList'
  /** An array of attributes that can be used for comparing products. */
  attributes?: Maybe<Array<Maybe<GQLComparableAttribute>>>
  /** The number of items in the compare list. */
  item_count: Scalars['Int']
  /** An array of products to compare. */
  items?: Maybe<Array<Maybe<GQLComparableItem>>>
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']
}

export type GQLComplexTextValue = {
  __typename?: 'ComplexTextValue'
  /** Text that can contain HTML tags. */
  html: Scalars['String']
}

/** Contains details about a configurable product attribute option. */
export type GQLConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption'
  /** The ID assigned to the attribute. */
  code?: Maybe<Scalars['String']>
  /** A string that describes the configurable attribute option. */
  label?: Maybe<Scalars['String']>
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']
  /** A unique index number assigned to the configurable product option. */
  value_index?: Maybe<Scalars['Int']>
}

/** An implementation for configurable product cart items. */
export type GQLConfigurableCartItem = GQLCartItemInterface & {
  __typename?: 'ConfigurableCartItem'
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GQLGiftWrapping>>
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<GQLSelectedConfigurableOption>>
  /** Product details of the cart item. */
  configured_variant: GQLProductInterface
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GQLGiftMessage>
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type GQLConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection'
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']>>
}

/** Defines basic features of a configurable product and its simple product variants. */
export type GQLConfigurableProduct = GQLProductInterface &
  GQLRoutableInterface &
  GQLPhysicalProductInterface &
  GQLCustomizableProductInterface & {
    __typename?: 'ConfigurableProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** An array of options for the configurable product. */
    configurable_options?: Maybe<Array<Maybe<GQLConfigurableProductOptions>>>
    /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
    configurable_product_options_selection?: Maybe<GQLConfigurableProductOptionsSelection>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** An array of simple product variants. */
    variants?: Maybe<Array<Maybe<GQLConfigurableVariant>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<Scalars['Float']>
  }

/** Defines basic features of a configurable product and its simple product variants. */
export type GQLConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: Maybe<Array<Scalars['ID']>>
}

/** Defines basic features of a configurable product and its simple product variants. */
export type GQLConfigurableProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type GQLConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: Maybe<Array<Maybe<GQLCustomizableOptionInput>>>
  /** The quantity and SKU of the configurable product. */
  data: GQLCartItemInput
  /** The SKU of the parent configurable product. */
  parent_sku?: Maybe<Scalars['String']>
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: Maybe<Scalars['String']>
}

/** Contains details about configurable product options. */
export type GQLConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption'
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']
  /** The display name of the option. */
  label: Scalars['String']
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']
  /** An array of values that are applicable for this option. */
  values?: Maybe<Array<Maybe<GQLConfigurableProductOptionValue>>>
}

/** Defines a value for a configurable product option. */
export type GQLConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue'
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']
  /** The display name of the value. */
  label: Scalars['String']
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch?: Maybe<GQLSwatchDataInterface>
  /** The unique ID of the value. */
  uid: Scalars['ID']
}

/** Defines configurable attributes for the specified product. */
export type GQLConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions'
  /** A string that identifies the attribute. */
  attribute_code?: Maybe<Scalars['String']>
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id?: Maybe<Scalars['String']>
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2?: Maybe<Scalars['Int']>
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>
  /** A displayed string that describes the configurable product option. */
  label?: Maybe<Scalars['String']>
  /** A number that indicates the order in which the attribute is displayed. */
  position?: Maybe<Scalars['Int']>
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id?: Maybe<Scalars['Int']>
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']
  /** Indicates whether the option is the default. */
  use_default?: Maybe<Scalars['Boolean']>
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values?: Maybe<Array<Maybe<GQLConfigurableProductOptionsValues>>>
}

/** Contains metadata corresponding to the selected configurable options. */
export type GQLConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection'
  /** An array of all possible configurable options. */
  configurable_options?: Maybe<Array<Maybe<GQLConfigurableProductOption>>>
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection?: Maybe<
    Array<Maybe<GQLConfigurableOptionAvailableForSelection>>
  >
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant?: Maybe<GQLSimpleProduct>
}

/** Contains the index number assigned to a configurable product option. */
export type GQLConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues'
  /** The label of the product on the default store. */
  default_label?: Maybe<Scalars['String']>
  /** The label of the product. */
  label?: Maybe<Scalars['String']>
  /** The label of the product on the current store. */
  store_label?: Maybe<Scalars['String']>
  /** Swatch data for a configurable product option. */
  swatch_data?: Maybe<GQLSwatchDataInterface>
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid?: Maybe<Scalars['ID']>
  /** Indicates whether to use the default_label. */
  use_default_value?: Maybe<Scalars['Boolean']>
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index?: Maybe<Scalars['Int']>
}

/** Contains details about configurable products added to a requisition list. */
export type GQLConfigurableRequisitionListItem =
  GQLRequisitionListItemInterface & {
    __typename?: 'ConfigurableRequisitionListItem'
    /** Selected configurable options for an item in the requisition list. */
    configurable_options?: Maybe<Array<Maybe<GQLSelectedConfigurableOption>>>
    /** Selected custom options for an item in the requisition list. */
    customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
    /** Details about a requisition list item. */
    product: GQLProductInterface
    /** The quantity of the product added to the requisition list. */
    quantity: Scalars['Float']
    /** The unique ID of an item in a requisition list. */
    uid: Scalars['ID']
  }

/** Contains all the simple product variants of a configurable product. */
export type GQLConfigurableVariant = {
  __typename?: 'ConfigurableVariant'
  /** An array of configurable attribute options. */
  attributes?: Maybe<Array<Maybe<GQLConfigurableAttributeOption>>>
  /** An array of linked simple products. */
  product?: Maybe<GQLSimpleProduct>
}

/** A configurable product wish list item. */
export type GQLConfigurableWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']
  /** An array of selected configurable options. */
  configurable_options?: Maybe<Array<Maybe<GQLSelectedConfigurableOption>>>
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant?: Maybe<GQLProductInterface>
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

export type GQLContactUsInput = {
  /** The shopper's comment to the merchant. */
  comment: Scalars['String']
  /** The email address of the shopper. */
  email: Scalars['String']
  /** The full name of the shopper. */
  name: Scalars['String']
  /** The shopper's telephone number. */
  telephone?: Maybe<Scalars['String']>
}

/** Contains the status of the request. */
export type GQLContactUsOutput = {
  __typename?: 'ContactUsOutput'
  /** Indicates whether the request was successful. */
  status: Scalars['Boolean']
}

/** An input object that defines the items in a requisition list to be copied. */
export type GQLCopyItemsBetweenRequisitionListsInput = {
  /** An array of IDs representing products copied from one requisition list to another. */
  requisitionListItemUids: Array<Maybe<Scalars['ID']>>
}

/** Output of the request to copy items to the destination requisition list. */
export type GQLCopyItemsFromRequisitionListsOutput = {
  __typename?: 'CopyItemsFromRequisitionListsOutput'
  /** The destination requisition list after the items were copied. */
  requisition_list?: Maybe<GQLRequisitionList>
}

/** Contains the source and target wish lists after copying products. */
export type GQLCopyProductsBetweenWishlistsOutput = {
  __typename?: 'CopyProductsBetweenWishlistsOutput'
  /** The destination wish list containing the copied products. */
  destination_wishlist: GQLWishlist
  /** The wish list that the products were copied from. */
  source_wishlist: GQLWishlist
  /** An array of errors encountered while copying products in a wish list. */
  user_errors: Array<Maybe<GQLWishListUserInputError>>
}

export type GQLCountry = {
  __typename?: 'Country'
  /** An array of regions within a particular country. */
  available_regions?: Maybe<Array<Maybe<GQLRegion>>>
  /** The name of the country in English. */
  full_name_english?: Maybe<Scalars['String']>
  /** The name of the country in the current locale. */
  full_name_locale?: Maybe<Scalars['String']>
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']>
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation?: Maybe<Scalars['String']>
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation?: Maybe<Scalars['String']>
}

/** The list of country codes. */
export enum GQLCountryCodeEnum {
  /** Afghanistan */
  Af = 'AF',
  /** Åland Islands */
  Ax = 'AX',
  /** Albania */
  Al = 'AL',
  /** Algeria */
  Dz = 'DZ',
  /** American Samoa */
  As = 'AS',
  /** Andorra */
  Ad = 'AD',
  /** Angola */
  Ao = 'AO',
  /** Anguilla */
  Ai = 'AI',
  /** Antarctica */
  Aq = 'AQ',
  /** Antigua & Barbuda */
  Ag = 'AG',
  /** Argentina */
  Ar = 'AR',
  /** Armenia */
  Am = 'AM',
  /** Aruba */
  Aw = 'AW',
  /** Australia */
  Au = 'AU',
  /** Austria */
  At = 'AT',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bahamas */
  Bs = 'BS',
  /** Bahrain */
  Bh = 'BH',
  /** Bangladesh */
  Bd = 'BD',
  /** Barbados */
  Bb = 'BB',
  /** Belarus */
  By = 'BY',
  /** Belgium */
  Be = 'BE',
  /** Belize */
  Bz = 'BZ',
  /** Benin */
  Bj = 'BJ',
  /** Bermuda */
  Bm = 'BM',
  /** Bhutan */
  Bt = 'BT',
  /** Bolivia */
  Bo = 'BO',
  /** Bosnia & Herzegovina */
  Ba = 'BA',
  /** Botswana */
  Bw = 'BW',
  /** Bouvet Island */
  Bv = 'BV',
  /** Brazil */
  Br = 'BR',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** British Virgin Islands */
  Vg = 'VG',
  /** Brunei */
  Bn = 'BN',
  /** Bulgaria */
  Bg = 'BG',
  /** Burkina Faso */
  Bf = 'BF',
  /** Burundi */
  Bi = 'BI',
  /** Cambodia */
  Kh = 'KH',
  /** Cameroon */
  Cm = 'CM',
  /** Canada */
  Ca = 'CA',
  /** Cape Verde */
  Cv = 'CV',
  /** Cayman Islands */
  Ky = 'KY',
  /** Central African Republic */
  Cf = 'CF',
  /** Chad */
  Td = 'TD',
  /** Chile */
  Cl = 'CL',
  /** China */
  Cn = 'CN',
  /** Christmas Island */
  Cx = 'CX',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Colombia */
  Co = 'CO',
  /** Comoros */
  Km = 'KM',
  /** Congo-Brazzaville */
  Cg = 'CG',
  /** Congo-Kinshasa */
  Cd = 'CD',
  /** Cook Islands */
  Ck = 'CK',
  /** Costa Rica */
  Cr = 'CR',
  /** Côte d’Ivoire */
  Ci = 'CI',
  /** Croatia */
  Hr = 'HR',
  /** Cuba */
  Cu = 'CU',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Denmark */
  Dk = 'DK',
  /** Djibouti */
  Dj = 'DJ',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Ecuador */
  Ec = 'EC',
  /** Egypt */
  Eg = 'EG',
  /** El Salvador */
  Sv = 'SV',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Eritrea */
  Er = 'ER',
  /** Estonia */
  Ee = 'EE',
  /** Ethiopia */
  Et = 'ET',
  /** Falkland Islands */
  Fk = 'FK',
  /** Faroe Islands */
  Fo = 'FO',
  /** Fiji */
  Fj = 'FJ',
  /** Finland */
  Fi = 'FI',
  /** France */
  Fr = 'FR',
  /** French Guiana */
  Gf = 'GF',
  /** French Polynesia */
  Pf = 'PF',
  /** French Southern Territories */
  Tf = 'TF',
  /** Gabon */
  Ga = 'GA',
  /** Gambia */
  Gm = 'GM',
  /** Georgia */
  Ge = 'GE',
  /** Germany */
  De = 'DE',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greece */
  Gr = 'GR',
  /** Greenland */
  Gl = 'GL',
  /** Grenada */
  Gd = 'GD',
  /** Guadeloupe */
  Gp = 'GP',
  /** Guam */
  Gu = 'GU',
  /** Guatemala */
  Gt = 'GT',
  /** Guernsey */
  Gg = 'GG',
  /** Guinea */
  Gn = 'GN',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Haiti */
  Ht = 'HT',
  /** Heard &amp; McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Hong Kong SAR China */
  Hk = 'HK',
  /** Hungary */
  Hu = 'HU',
  /** Iceland */
  Is = 'IS',
  /** India */
  In = 'IN',
  /** Indonesia */
  Id = 'ID',
  /** Iran */
  Ir = 'IR',
  /** Iraq */
  Iq = 'IQ',
  /** Ireland */
  Ie = 'IE',
  /** Isle of Man */
  Im = 'IM',
  /** Israel */
  Il = 'IL',
  /** Italy */
  It = 'IT',
  /** Jamaica */
  Jm = 'JM',
  /** Japan */
  Jp = 'JP',
  /** Jersey */
  Je = 'JE',
  /** Jordan */
  Jo = 'JO',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Kenya */
  Ke = 'KE',
  /** Kiribati */
  Ki = 'KI',
  /** Kuwait */
  Kw = 'KW',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Laos */
  La = 'LA',
  /** Latvia */
  Lv = 'LV',
  /** Lebanon */
  Lb = 'LB',
  /** Lesotho */
  Ls = 'LS',
  /** Liberia */
  Lr = 'LR',
  /** Libya */
  Ly = 'LY',
  /** Liechtenstein */
  Li = 'LI',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Macau SAR China */
  Mo = 'MO',
  /** Macedonia */
  Mk = 'MK',
  /** Madagascar */
  Mg = 'MG',
  /** Malawi */
  Mw = 'MW',
  /** Malaysia */
  My = 'MY',
  /** Maldives */
  Mv = 'MV',
  /** Mali */
  Ml = 'ML',
  /** Malta */
  Mt = 'MT',
  /** Marshall Islands */
  Mh = 'MH',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Mauritius */
  Mu = 'MU',
  /** Mayotte */
  Yt = 'YT',
  /** Mexico */
  Mx = 'MX',
  /** Micronesia */
  Fm = 'FM',
  /** Moldova */
  Md = 'MD',
  /** Monaco */
  Mc = 'MC',
  /** Mongolia */
  Mn = 'MN',
  /** Montenegro */
  Me = 'ME',
  /** Montserrat */
  Ms = 'MS',
  /** Morocco */
  Ma = 'MA',
  /** Mozambique */
  Mz = 'MZ',
  /** Myanmar (Burma) */
  Mm = 'MM',
  /** Namibia */
  Na = 'NA',
  /** Nauru */
  Nr = 'NR',
  /** Nepal */
  Np = 'NP',
  /** Netherlands */
  Nl = 'NL',
  /** Netherlands Antilles */
  An = 'AN',
  /** New Caledonia */
  Nc = 'NC',
  /** New Zealand */
  Nz = 'NZ',
  /** Nicaragua */
  Ni = 'NI',
  /** Niger */
  Ne = 'NE',
  /** Nigeria */
  Ng = 'NG',
  /** Niue */
  Nu = 'NU',
  /** Norfolk Island */
  Nf = 'NF',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** North Korea */
  Kp = 'KP',
  /** Norway */
  No = 'NO',
  /** Oman */
  Om = 'OM',
  /** Pakistan */
  Pk = 'PK',
  /** Palau */
  Pw = 'PW',
  /** Palestinian Territories */
  Ps = 'PS',
  /** Panama */
  Pa = 'PA',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Paraguay */
  Py = 'PY',
  /** Peru */
  Pe = 'PE',
  /** Philippines */
  Ph = 'PH',
  /** Pitcairn Islands */
  Pn = 'PN',
  /** Poland */
  Pl = 'PL',
  /** Portugal */
  Pt = 'PT',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Samoa */
  Ws = 'WS',
  /** San Marino */
  Sm = 'SM',
  /** São Tomé & Príncipe */
  St = 'ST',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Senegal */
  Sn = 'SN',
  /** Serbia */
  Rs = 'RS',
  /** Seychelles */
  Sc = 'SC',
  /** Sierra Leone */
  Sl = 'SL',
  /** Singapore */
  Sg = 'SG',
  /** Slovakia */
  Sk = 'SK',
  /** Slovenia */
  Si = 'SI',
  /** Solomon Islands */
  Sb = 'SB',
  /** Somalia */
  So = 'SO',
  /** South Africa */
  Za = 'ZA',
  /** South Georgia & South Sandwich Islands */
  Gs = 'GS',
  /** South Korea */
  Kr = 'KR',
  /** Spain */
  Es = 'ES',
  /** Sri Lanka */
  Lk = 'LK',
  /** St. Barthélemy */
  Bl = 'BL',
  /** St. Helena */
  Sh = 'SH',
  /** St. Kitts & Nevis */
  Kn = 'KN',
  /** St. Lucia */
  Lc = 'LC',
  /** St. Martin */
  Mf = 'MF',
  /** St. Pierre & Miquelon */
  Pm = 'PM',
  /** St. Vincent & Grenadines */
  Vc = 'VC',
  /** Sudan */
  Sd = 'SD',
  /** Suriname */
  Sr = 'SR',
  /** Svalbard & Jan Mayen */
  Sj = 'SJ',
  /** Swaziland */
  Sz = 'SZ',
  /** Sweden */
  Se = 'SE',
  /** Switzerland */
  Ch = 'CH',
  /** Syria */
  Sy = 'SY',
  /** Taiwan */
  Tw = 'TW',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tanzania */
  Tz = 'TZ',
  /** Thailand */
  Th = 'TH',
  /** Timor-Leste */
  Tl = 'TL',
  /** Togo */
  Tg = 'TG',
  /** Tokelau */
  Tk = 'TK',
  /** Tonga */
  To = 'TO',
  /** Trinidad & Tobago */
  Tt = 'TT',
  /** Tunisia */
  Tn = 'TN',
  /** Turkey */
  Tr = 'TR',
  /** Turkmenistan */
  Tm = 'TM',
  /** Turks & Caicos Islands */
  Tc = 'TC',
  /** Tuvalu */
  Tv = 'TV',
  /** Uganda */
  Ug = 'UG',
  /** Ukraine */
  Ua = 'UA',
  /** United Arab Emirates */
  Ae = 'AE',
  /** United Kingdom */
  Gb = 'GB',
  /** United States */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** U.S. Outlying Islands */
  Um = 'UM',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vanuatu */
  Vu = 'VU',
  /** Vatican City */
  Va = 'VA',
  /** Venezuela */
  Ve = 'VE',
  /** Vietnam */
  Vn = 'VN',
  /** Wallis & Futuna */
  Wf = 'WF',
  /** Western Sahara */
  Eh = 'EH',
  /** Yemen */
  Ye = 'YE',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
}

/** Contains the response to the request to create a company. */
export type GQLCreateCompanyOutput = {
  __typename?: 'CreateCompanyOutput'
  /** The new company instance. */
  company: GQLCompany
}

/** Contains the response to the request to create a company role. */
export type GQLCreateCompanyRoleOutput = {
  __typename?: 'CreateCompanyRoleOutput'
  /** The new company role instance. */
  role: GQLCompanyRole
}

/** Contains the response to the request to create a company team. */
export type GQLCreateCompanyTeamOutput = {
  __typename?: 'CreateCompanyTeamOutput'
  /** The new company team instance. */
  team: GQLCompanyTeam
}

/** Contains the response to the request to create a company user. */
export type GQLCreateCompanyUserOutput = {
  __typename?: 'CreateCompanyUserOutput'
  /** The new company user instance. */
  user: GQLCustomer
}

/** Contains an array of product IDs to use for creating a compare list. */
export type GQLCreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Defines a new gift registry. */
export type GQLCreateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: Maybe<Array<Maybe<GQLGiftRegistryDynamicAttributeInput>>>
  /** The name of the event. */
  event_name: Scalars['String']
  /** The ID of the selected event type. */
  gift_registry_type_uid: Scalars['ID']
  /** A message describing the event. */
  message: Scalars['String']
  /** Indicates whether the registry is PRIVATE or PUBLIC. */
  privacy_settings: GQLGiftRegistryPrivacySettings
  /** The list of people who receive notifications about the registry. */
  registrants: Array<Maybe<GQLAddGiftRegistryRegistrantInput>>
  /** The shipping address for all gift registry items. */
  shipping_address?: Maybe<GQLGiftRegistryShippingAddressInput>
  /** Indicates whether the registry is ACTIVE or INACTIVE. */
  status: GQLGiftRegistryStatus
}

/** Contains the results of a request to create a gift registry. */
export type GQLCreateGiftRegistryOutput = {
  __typename?: 'CreateGiftRegistryOutput'
  /** The newly-created gift registry. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type GQLCreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput'
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']
}

/** Defines a new product review. */
export type GQLCreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<Maybe<GQLProductReviewRatingInput>>
  /** The SKU of the reviewed product. */
  sku: Scalars['String']
  /** The summary (title) of the review. */
  summary: Scalars['String']
  /** The review text. */
  text: Scalars['String']
}

/** Contains the completed product review. */
export type GQLCreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput'
  /** Product review details. */
  review: GQLProductReview
}

/** An input object that identifies and describes a new requisition list. */
export type GQLCreateRequisitionListInput = {
  /** An optional description of the requisition list. */
  description?: Maybe<Scalars['String']>
  /** The name assigned to the requisition list. */
  name: Scalars['String']
}

/** Output of the request to create a requisition list. */
export type GQLCreateRequisitionListOutput = {
  __typename?: 'CreateRequisitionListOutput'
  /** The created requisition list. */
  requisition_list?: Maybe<GQLRequisitionList>
}

/** Defines the name and visibility of a new wish list. */
export type GQLCreateWishlistInput = {
  /** The name of the new wish list. */
  name: Scalars['String']
  /** Indicates whether the wish list is public or private. */
  visibility: GQLWishlistVisibilityEnum
}

/** Contains the wish list. */
export type GQLCreateWishlistOutput = {
  __typename?: 'CreateWishlistOutput'
  /** The newly-created wish list */
  wishlist: GQLWishlist
}

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type GQLCreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int']
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int']
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int']
  /** The credit card type. */
  cc_type: Scalars['String']
}

/** Contains credit memo details. */
export type GQLCreditMemo = {
  __typename?: 'CreditMemo'
  /** Comments on the credit memo. */
  comments?: Maybe<Array<Maybe<GQLSalesCommentItem>>>
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']
  /** An array containing details about refunded items. */
  items?: Maybe<Array<Maybe<GQLCreditMemoItemInterface>>>
  /** The sequential credit memo number. */
  number: Scalars['String']
  /** Details about the total refunded amount. */
  total?: Maybe<GQLCreditMemoTotal>
}

export type GQLCreditMemoItem = GQLCreditMemoItemInterface & {
  __typename?: 'CreditMemoItem'
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
}

/** Credit memo item details. */
export type GQLCreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
}

/** Contains credit memo price details. */
export type GQLCreditMemoTotal = {
  __typename?: 'CreditMemoTotal'
  /** An adjustment manually applied to the order. */
  adjustment: GQLMoney
  /** The final base grand total amount in the base currency. */
  base_grand_total: GQLMoney
  /** The applied discounts to the credit memo. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: GQLMoney
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling?: Maybe<GQLShippingHandling>
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: GQLMoney
  /** The credit memo tax details. */
  taxes?: Maybe<Array<Maybe<GQLTaxItem>>>
  /** The shipping amount for the credit memo. */
  total_shipping: GQLMoney
  /** The amount of tax applied to the credit memo. */
  total_tax: GQLMoney
}

export type GQLCurrency = {
  __typename?: 'Currency'
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The base currency set for the store, such as USD. */
  base_currency_code?: Maybe<Scalars['String']>
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol?: Maybe<Scalars['String']>
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code?: Maybe<Scalars['String']>
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol?: Maybe<Scalars['String']>
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates?: Maybe<Array<Maybe<GQLExchangeRate>>>
}

/** The list of available currency codes. */
export enum GQLCurrencyEnum {
  Afn = 'AFN',
  All = 'ALL',
  Azn = 'AZN',
  Dzd = 'DZD',
  Aoa = 'AOA',
  Ars = 'ARS',
  Amd = 'AMD',
  Awg = 'AWG',
  Aud = 'AUD',
  Bsd = 'BSD',
  Bhd = 'BHD',
  Bdt = 'BDT',
  Bbd = 'BBD',
  Byn = 'BYN',
  Bzd = 'BZD',
  Bmd = 'BMD',
  Btn = 'BTN',
  Bob = 'BOB',
  Bam = 'BAM',
  Bwp = 'BWP',
  Brl = 'BRL',
  Gbp = 'GBP',
  Bnd = 'BND',
  Bgn = 'BGN',
  Buk = 'BUK',
  Bif = 'BIF',
  Khr = 'KHR',
  Cad = 'CAD',
  Cve = 'CVE',
  Czk = 'CZK',
  Kyd = 'KYD',
  Gqe = 'GQE',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Kmf = 'KMF',
  Cdf = 'CDF',
  Crc = 'CRC',
  Hrk = 'HRK',
  Cup = 'CUP',
  Dkk = 'DKK',
  Djf = 'DJF',
  Dop = 'DOP',
  Xcd = 'XCD',
  Egp = 'EGP',
  Svc = 'SVC',
  Ern = 'ERN',
  Eek = 'EEK',
  Etb = 'ETB',
  Eur = 'EUR',
  Fkp = 'FKP',
  Fjd = 'FJD',
  Gmd = 'GMD',
  Gek = 'GEK',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gtq = 'GTQ',
  Gnf = 'GNF',
  Gyd = 'GYD',
  Htg = 'HTG',
  Hnl = 'HNL',
  Hkd = 'HKD',
  Huf = 'HUF',
  Isk = 'ISK',
  Inr = 'INR',
  Idr = 'IDR',
  Irr = 'IRR',
  Iqd = 'IQD',
  Ils = 'ILS',
  Jmd = 'JMD',
  Jpy = 'JPY',
  Jod = 'JOD',
  Kzt = 'KZT',
  Kes = 'KES',
  Kwd = 'KWD',
  Kgs = 'KGS',
  Lak = 'LAK',
  Lvl = 'LVL',
  Lbp = 'LBP',
  Lsl = 'LSL',
  Lrd = 'LRD',
  Lyd = 'LYD',
  Ltl = 'LTL',
  Mop = 'MOP',
  Mkd = 'MKD',
  Mga = 'MGA',
  Mwk = 'MWK',
  Myr = 'MYR',
  Mvr = 'MVR',
  Lsm = 'LSM',
  Mro = 'MRO',
  Mur = 'MUR',
  Mxn = 'MXN',
  Mdl = 'MDL',
  Mnt = 'MNT',
  Mad = 'MAD',
  Mzn = 'MZN',
  Mmk = 'MMK',
  Nad = 'NAD',
  Npr = 'NPR',
  Ang = 'ANG',
  Ytl = 'YTL',
  Nzd = 'NZD',
  Nic = 'NIC',
  Ngn = 'NGN',
  Kpw = 'KPW',
  Nok = 'NOK',
  Omr = 'OMR',
  Pkr = 'PKR',
  Pab = 'PAB',
  Pgk = 'PGK',
  Pyg = 'PYG',
  Pen = 'PEN',
  Php = 'PHP',
  Pln = 'PLN',
  Qar = 'QAR',
  Rhd = 'RHD',
  Ron = 'RON',
  Rub = 'RUB',
  Rwf = 'RWF',
  Shp = 'SHP',
  Std = 'STD',
  Sar = 'SAR',
  Rsd = 'RSD',
  Scr = 'SCR',
  Sll = 'SLL',
  Sgd = 'SGD',
  Skk = 'SKK',
  Sbd = 'SBD',
  Sos = 'SOS',
  Zar = 'ZAR',
  Krw = 'KRW',
  Lkr = 'LKR',
  Sdg = 'SDG',
  Srd = 'SRD',
  Szl = 'SZL',
  Sek = 'SEK',
  Chf = 'CHF',
  Syp = 'SYP',
  Twd = 'TWD',
  Tjs = 'TJS',
  Tzs = 'TZS',
  Thb = 'THB',
  Top = 'TOP',
  Ttd = 'TTD',
  Tnd = 'TND',
  Tmm = 'TMM',
  Usd = 'USD',
  Ugx = 'UGX',
  Uah = 'UAH',
  Aed = 'AED',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vuv = 'VUV',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Che = 'CHE',
  Chw = 'CHW',
  Xof = 'XOF',
  Wst = 'WST',
  Yer = 'YER',
  Zmk = 'ZMK',
  Zwd = 'ZWD',
  Try = 'TRY',
  Azm = 'AZM',
  Rol = 'ROL',
  Trl = 'TRL',
  Xpf = 'XPF',
}

/** Contains custom attribute value and metadata details. */
export type GQLCustomAttribute = {
  __typename?: 'CustomAttribute'
  /** Attribute metadata details. */
  attribute_metadata?: Maybe<GQLAttributeMetadataInterface>
  /** Attribute value represented as entered data using input type like text field. */
  entered_attribute_value?: Maybe<GQLEnteredAttributeValue>
  /** Attribute value represented as selected options using input type like select. */
  selected_attribute_options?: Maybe<GQLSelectedAttributeOption>
}

/** Defines an array of custom attributes. */
export type GQLCustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata'
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<GQLAttribute>>>
}

export enum GQLCustomAttributesListsEnum {
  ProductDetailsPage = 'PRODUCT_DETAILS_PAGE',
  ProductsListing = 'PRODUCTS_LISTING',
  ProductsCompare = 'PRODUCTS_COMPARE',
  ProductSort = 'PRODUCT_SORT',
  ProductFilter = 'PRODUCT_FILTER',
  ProductSearchResultsFilter = 'PRODUCT_SEARCH_RESULTS_FILTER',
  AdvancedCatalogSearch = 'ADVANCED_CATALOG_SEARCH',
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomer = {
  __typename?: 'Customer'
  /** An array containing the customer's shipping and billing addresses. */
  addresses?: Maybe<Array<Maybe<GQLCustomerAddress>>>
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<GQLCompareList>
  /** Timestamp indicating when the account was created. */
  created_at?: Maybe<Scalars['String']>
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']>
  /** The ID assigned to the billing address. */
  default_billing?: Maybe<Scalars['String']>
  /** The ID assigned to the shipping address. */
  default_shipping?: Maybe<Scalars['String']>
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob?: Maybe<Scalars['String']>
  /** The customer's email address. Required. */
  email?: Maybe<Scalars['String']>
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']>
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']>
  /** Details about all of the customer's gift registries. */
  gift_registries?: Maybe<Array<Maybe<GQLGiftRegistry>>>
  /** Details about a specific gift registry. */
  gift_registry?: Maybe<GQLGiftRegistry>
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']>
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']>
  /** The job title of a company user. */
  job_title?: Maybe<Scalars['String']>
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']>
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']>
  orders?: Maybe<GQLCustomerOrders>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** An object that contains the customer's requisition lists. */
  requisition_lists?: Maybe<GQLRequisitionLists>
  /** Details about the specified return request from the unique ID for a `Return` object. */
  return?: Maybe<GQLReturn>
  /** Information about the customer's return requests. */
  returns?: Maybe<GQLReturns>
  /** Contains the customer's product reviews. */
  reviews: GQLProductReviews
  /** Customer reward points details. */
  reward_points?: Maybe<GQLRewardPoints>
  /** The role name and permissions assigned to the company user. */
  role?: Maybe<GQLCompanyRole>
  /** Indicates whether the company user is ACTIVE or INACTIVE. */
  status?: Maybe<GQLCompanyUserStatusEnum>
  /** Store credit information applied for the logged in customer. */
  store_credit?: Maybe<GQLCustomerStoreCredit>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']>
  /** The team the company user is assigned to. */
  team?: Maybe<GQLCompanyTeam>
  /** The phone number of the company user. */
  telephone?: Maybe<Scalars['String']>
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: GQLWishlist
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2?: Maybe<GQLWishlist>
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<GQLWishlist>>
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerGift_RegistryArgs = {
  giftRegistryUid: Scalars['ID']
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerOrdersArgs = {
  filter?: Maybe<GQLCustomerOrdersFilterInput>
  currentPage?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerRequisition_ListsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  filter?: Maybe<GQLRequisitionListFilterInput>
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerReturnArgs = {
  uid: Scalars['ID']
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerReturnsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerWishlist_V2Args = {
  id: Scalars['ID']
}

/** Defines the customer name, addresses, and other details. */
export type GQLCustomerWishlistsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Contains detailed information about a customer's billing or shipping address. */
export type GQLCustomerAddress = {
  __typename?: 'CustomerAddress'
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']>
  /** The customer's company. */
  company?: Maybe<Scalars['String']>
  /** The customer's country. */
  country_code?: Maybe<GQLCountryCodeEnum>
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes?: Maybe<Array<Maybe<GQLCustomerAddressAttribute>>>
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']>
  /** Indicates whether the address is the customer's default billing address. */
  default_billing?: Maybe<Scalars['Boolean']>
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']>
  /** Contains any extension attributes for the address. */
  extension_attributes?: Maybe<Array<Maybe<GQLCustomerAddressAttribute>>>
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']>
  /** The first name of the person associated with the shipping/billing address. */
  firstname?: Maybe<Scalars['String']>
  /** The ID of a `CustomerAddress` object. */
  id?: Maybe<Scalars['Int']>
  /** The family name of the person associated with the shipping/billing address. */
  lastname?: Maybe<Scalars['String']>
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']>
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<GQLCustomerAddressRegion>
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']>
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']>
}

/** Specifies the attribute code and value of a customer address attribute. */
export type GQLCustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute'
  /** The name assigned to the customer address attribute. */
  attribute_code?: Maybe<Scalars['String']>
  /** The valuue assigned to the customer address attribute. */
  value?: Maybe<Scalars['String']>
}

/** Specifies the attribute code and value of a customer attribute. */
export type GQLCustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']
  /** The value assigned to the attribute. */
  value: Scalars['String']
}

/** Contains details about a billing or shipping address. */
export type GQLCustomerAddressInput = {
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']>
  /** The customer's company. */
  company?: Maybe<Scalars['String']>
  /** The two-letter code representing the customer's country. */
  country_code?: Maybe<GQLCountryCodeEnum>
  /** Deprecated: use `country_code` instead. */
  country_id?: Maybe<GQLCountryCodeEnum>
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: Maybe<Array<Maybe<GQLCustomerAddressAttributeInput>>>
  /** Indicates whether the address is the default billing address. */
  default_billing?: Maybe<Scalars['Boolean']>
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']>
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']>
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: Maybe<Scalars['String']>
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: Maybe<Scalars['String']>
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: Maybe<Scalars['String']>
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<GQLCustomerAddressRegionInput>
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']>
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']>
}

/** Defines the customer's state or province. */
export type GQLCustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion'
  /** The state or province name. */
  region?: Maybe<Scalars['String']>
  /** The address region code. */
  region_code?: Maybe<Scalars['String']>
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>
}

/** Defines the customer's state or province. */
export type GQLCustomerAddressRegionInput = {
  /** The state or province name. */
  region?: Maybe<Scalars['String']>
  /** The address region code. */
  region_code?: Maybe<Scalars['String']>
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>
}

/** An input object for creating a customer. */
export type GQLCustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: Maybe<Scalars['Boolean']>
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']>
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: Maybe<Scalars['String']>
  /** The customer's email address. */
  email: Scalars['String']
  /** The customer's first name. */
  firstname: Scalars['String']
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']>
  /** The customer's family name. */
  lastname: Scalars['String']
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']>
  /** The customer's password. */
  password?: Maybe<Scalars['String']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']>
}

/** Contains details about a single downloadable product. */
export type GQLCustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct'
  /** The date and time the purchase was made. */
  date?: Maybe<Scalars['String']>
  /** The fully qualified URL to the download file. */
  download_url?: Maybe<Scalars['String']>
  /** The unique ID assigned to the item. */
  order_increment_id?: Maybe<Scalars['String']>
  /** The remaining number of times the customer can download the product. */
  remaining_downloads?: Maybe<Scalars['String']>
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status?: Maybe<Scalars['String']>
}

/** Contains a list of downloadable products. */
export type GQLCustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts'
  /** An array of purchased downloadable items. */
  items?: Maybe<Array<Maybe<GQLCustomerDownloadableProduct>>>
}

/** An input object that assigns or updates customer attributes. */
export type GQLCustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']>
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: Maybe<Scalars['String']>
  /** The customer's email address. Required when creating a customer. */
  email?: Maybe<Scalars['String']>
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']>
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']>
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']>
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']>
  /** The customer's password. */
  password?: Maybe<Scalars['String']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']>
}

/** Contains details about each of the customer's orders. */
export type GQLCustomerOrder = {
  __typename?: 'CustomerOrder'
  /** The billing address for the order. */
  billing_address?: Maybe<GQLOrderAddress>
  /** The shipping carrier for the order delivery. */
  carrier?: Maybe<Scalars['String']>
  /** Comments about the order. */
  comments?: Maybe<Array<Maybe<GQLSalesCommentItem>>>
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']>
  /** A list of credit memos. */
  credit_memos?: Maybe<Array<Maybe<GQLCreditMemo>>>
  /** The entered gift message for the order */
  gift_message?: Maybe<GQLGiftMessage>
  /** Indicates whether the customer requested a gift receipt for the order. */
  gift_receipt_included: Scalars['Boolean']
  /** The selected gift wrapping for the order. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']>
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']>
  /** A list of invoices for the order. */
  invoices: Array<Maybe<GQLInvoice>>
  /** An array containing the items purchased in this order. */
  items?: Maybe<Array<Maybe<GQLOrderItemInterface>>>
  /** A list of order items eligible to be in a return request. */
  items_eligible_for_return?: Maybe<Array<Maybe<GQLOrderItemInterface>>>
  /** The order number. */
  number: Scalars['String']
  /** The date the order was placed. */
  order_date: Scalars['String']
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']
  /** Payment details for the order. */
  payment_methods?: Maybe<Array<Maybe<GQLOrderPaymentMethod>>>
  /** Indicates whether the customer requested a printed card for the order. */
  printed_card_included: Scalars['Boolean']
  /** Return requests associated with this order. */
  returns?: Maybe<GQLReturns>
  /** A list of shipments for the order. */
  shipments?: Maybe<Array<Maybe<GQLOrderShipment>>>
  /** The shipping address for the order. */
  shipping_address?: Maybe<GQLOrderAddress>
  /** The delivery method for the order. */
  shipping_method?: Maybe<Scalars['String']>
  /** The current state of the order. */
  state: Scalars['String']
  /** The current status of the order. */
  status: Scalars['String']
  /** Details about the calculated totals for this order. */
  total?: Maybe<GQLOrderTotal>
}

/** Contains details about each of the customer's orders. */
export type GQLCustomerOrderReturnsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** The collection of orders that match the conditions defined in the filter. */
export type GQLCustomerOrders = {
  __typename?: 'CustomerOrders'
  /** An array of customer orders. */
  items: Array<Maybe<GQLCustomerOrder>>
  /** Contains pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The total count of customer orders. */
  total_count?: Maybe<Scalars['Int']>
}

/** Identifies the filter to use for filtering orders. */
export type GQLCustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: Maybe<GQLFilterStringTypeInput>
}

/** Contains details about a newly-created or updated customer. */
export type GQLCustomerOutput = {
  __typename?: 'CustomerOutput'
  /** Customer details after creating or updating a customer. */
  customer: GQLCustomer
}

/** Contains payment tokens stored in the customer's vault. */
export type GQLCustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens'
  /** An array of payment tokens. */
  items: Array<Maybe<GQLPaymentToken>>
}

/** Contains store credit information with balance and history. */
export type GQLCustomerStoreCredit = {
  __typename?: 'CustomerStoreCredit'
  /** Contains the customer's store credit balance history. If the history or store credit feature is disabled, then a null value will be returned. */
  balance_history?: Maybe<GQLCustomerStoreCreditHistory>
  /** The current balance of store credit. */
  current_balance?: Maybe<GQLMoney>
  /** Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned. */
  enabled?: Maybe<Scalars['Boolean']>
}

/** Contains store credit information with balance and history. */
export type GQLCustomerStoreCreditBalance_HistoryArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Lists changes to the amount of store credit available to the customer. */
export type GQLCustomerStoreCreditHistory = {
  __typename?: 'CustomerStoreCreditHistory'
  /** An array containing information about changes to the store credit available to the customer. */
  items?: Maybe<Array<Maybe<GQLCustomerStoreCreditHistoryItem>>>
  /** Metadata for pagination rendering. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of items returned. */
  total_count?: Maybe<Scalars['Int']>
}

/** Contains store credit history information. */
export type GQLCustomerStoreCreditHistoryItem = {
  __typename?: 'CustomerStoreCreditHistoryItem'
  /** The action that was made on the store credit. */
  action?: Maybe<Scalars['String']>
  /** The store credit available to the customer as a result of this action.  */
  actual_balance?: Maybe<GQLMoney>
  /** The amount added to or subtracted from the store credit as a result of this action. */
  balance_change?: Maybe<GQLMoney>
  /** The date and time when the store credit change was made. */
  date_time_changed?: Maybe<Scalars['String']>
}

/** Contains a customer authorization token. */
export type GQLCustomerToken = {
  __typename?: 'CustomerToken'
  /** The customer authorization token. */
  token?: Maybe<Scalars['String']>
}

/** An input object for updating a customer. */
export type GQLCustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: Maybe<Scalars['Boolean']>
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']>
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: Maybe<Scalars['String']>
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']>
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']>
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']>
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']>
}

/** Contains information about a text area that is defined as part of a customizable option. */
export type GQLCustomizableAreaOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An object that defines a text area. */
  value?: Maybe<GQLCustomizableAreaValue>
}

/** Defines the price and sku of a product whose page contains a customized text area. */
export type GQLCustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue'
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']
}

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type GQLCustomizableCheckboxOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<GQLCustomizableCheckboxValue>>>
}

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type GQLCustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue'
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']
}

/** Contains information about a date picker that is defined as part of a customizable option. */
export type GQLCustomizableDateOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<GQLCustomizableDateValue>
}

/** Defines the customizable date type. */
export enum GQLCustomizableDateTypeEnum {
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME',
}

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type GQLCustomizableDateValue = {
  __typename?: 'CustomizableDateValue'
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<GQLCustomizableDateTypeEnum>
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']
}

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type GQLCustomizableDropDownOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<GQLCustomizableDropDownValue>>>
}

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type GQLCustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue'
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']
}

/** Contains information about a text field that is defined as part of a customizable option. */
export type GQLCustomizableFieldOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An object that defines a text field. */
  value?: Maybe<GQLCustomizableFieldValue>
}

/** Defines the price and sku of a product whose page contains a customized text field. */
export type GQLCustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue'
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']
}

/** Contains information about a file picker that is defined as part of a customizable option. */
export type GQLCustomizableFileOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An object that defines a file value. */
  value?: Maybe<GQLCustomizableFileValue>
}

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type GQLCustomizableFileValue = {
  __typename?: 'CustomizableFileValue'
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']>
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']>
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']>
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']
}

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type GQLCustomizableMultipleOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<GQLCustomizableMultipleValue>>>
}

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type GQLCustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue'
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']
}

/** Defines a customizable option. */
export type GQLCustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: Maybe<Scalars['Int']>
  /** The string value of the option. */
  value_string: Scalars['String']
}

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type GQLCustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
}

/** Contains information about customizable product options. */
export type GQLCustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
}

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type GQLCustomizableRadioOption = GQLCustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<GQLCustomizableRadioValue>>>
}

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type GQLCustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue'
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<GQLPriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']
}

/** Contains the response to the request to delete the company role. */
export type GQLDeleteCompanyRoleOutput = {
  __typename?: 'DeleteCompanyRoleOutput'
  /** SIndicates whether the company role has been deleted successfully. */
  success: Scalars['Boolean']
}

/** Contains the status of the request to delete a company team. */
export type GQLDeleteCompanyTeamOutput = {
  __typename?: 'DeleteCompanyTeamOutput'
  /** Indicates whether the delete operation succeeded. */
  success: Scalars['Boolean']
}

/** Contains the response to the request to delete the company user. */
export type GQLDeleteCompanyUserOutput = {
  __typename?: 'DeleteCompanyUserOutput'
  /** Indicates whether the company user has been deactivated successfully. */
  success: Scalars['Boolean']
}

/** Contains the results of the request to delete a compare list. */
export type GQLDeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput'
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']
}

export type GQLDeleteNegotiableQuoteError =
  | GQLNegotiableQuoteInvalidStateError
  | GQLNoSuchEntityUidError
  | GQLInternalError

/** Contains details about a failed delete operation on a negotiable quote. */
export type GQLDeleteNegotiableQuoteOperationFailure = {
  __typename?: 'DeleteNegotiableQuoteOperationFailure'
  errors: Array<Maybe<GQLDeleteNegotiableQuoteError>>
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

export type GQLDeleteNegotiableQuoteOperationResult =
  | GQLNegotiableQuoteUidOperationSuccess
  | GQLDeleteNegotiableQuoteOperationFailure

export type GQLDeleteNegotiableQuotesInput = {
  /** A list of unique IDs for `NegotiableQuote` objects to delete. */
  quote_uids: Array<Maybe<Scalars['ID']>>
}

/** Contains a list of undeleted negotiable quotes the company user can view. */
export type GQLDeleteNegotiableQuotesOutput = {
  __typename?: 'DeleteNegotiableQuotesOutput'
  /** A list of negotiable quotes that the customer can view */
  negotiable_quotes?: Maybe<GQLNegotiableQuotesOutput>
  /** An array of deleted negotiable quote UIDs and details about any errors. */
  operation_results: Array<Maybe<GQLDeleteNegotiableQuoteOperationResult>>
  /** The status of the request to delete one or more negotiable quotes. */
  result_status: GQLBatchMutationStatus
}

/** Contains a list of undeleted negotiable quotes the company user can view. */
export type GQLDeleteNegotiableQuotesOutputNegotiable_QuotesArgs = {
  filter?: Maybe<GQLNegotiableQuoteFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<GQLNegotiableQuoteSortInput>
}

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type GQLDeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput'
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens?: Maybe<GQLCustomerPaymentTokens>
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']
}

/** Output of the request to remove items from the requisition list. */
export type GQLDeleteRequisitionListItemsOutput = {
  __typename?: 'DeleteRequisitionListItemsOutput'
  /** The requisition list after removing items. */
  requisition_list?: Maybe<GQLRequisitionList>
}

/** Indicates whether the request to delete the requisition list was successful. */
export type GQLDeleteRequisitionListOutput = {
  __typename?: 'DeleteRequisitionListOutput'
  /** The customer's requisition lists after deleting a requisition list. */
  requisition_lists?: Maybe<GQLRequisitionLists>
  /** Indicates whether the request to delete the requisition list was successful. */
  status: Scalars['Boolean']
}

/** Contains the status of the request to delete a wish list and an array of the customer's remaining wish lists. */
export type GQLDeleteWishlistOutput = {
  __typename?: 'DeleteWishlistOutput'
  /** Indicates whether the wish list was deleted. */
  status: Scalars['Boolean']
  /** A list of undeleted wish lists. */
  wishlists: Array<Maybe<GQLWishlist>>
}

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type GQLDiscount = {
  __typename?: 'Discount'
  /** The amount of the discount. */
  amount: GQLMoney
  /** A description of the discount. */
  label: Scalars['String']
}

/** An implementation for downloadable product cart items. */
export type GQLDownloadableCartItem = GQLCartItemInterface & {
  __typename?: 'DownloadableCartItem'
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** An array containing information about the links for the downloadable product added to the cart. */
  links?: Maybe<Array<Maybe<GQLDownloadableProductLinks>>>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** An array containing information about samples of the selected downloadable product. */
  samples?: Maybe<Array<Maybe<GQLDownloadableProductSamples>>>
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type GQLDownloadableCreditMemoItem = GQLCreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem'
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<GQLDownloadableItemsLinks>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
}

export enum GQLDownloadableFileTypeEnum {
  File = 'FILE',
  Url = 'URL',
}

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type GQLDownloadableInvoiceItem = GQLInvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem'
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<GQLDownloadableItemsLinks>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']
  /** Details about an individual order item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
}

/** Defines characteristics of the links for downloadable product. */
export type GQLDownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks'
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name of the link. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']
}

/** Defines downloadable product options for `OrderItemInterface`. */
export type GQLDownloadableOrderItem = GQLOrderItemInterface & {
  __typename?: 'DownloadableOrderItem'
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<GQLDownloadableItemsLinks>>>
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>
}

/** Defines a product that the shopper downloads. */
export type GQLDownloadableProduct = GQLProductInterface &
  GQLRoutableInterface &
  GQLCustomizableProductInterface & {
    __typename?: 'DownloadableProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** An array containing information about the links for this downloadable product. */
    downloadable_product_links?: Maybe<
      Array<Maybe<GQLDownloadableProductLinks>>
    >
    /** An array containing information about samples of this downloadable product. */
    downloadable_product_samples?: Maybe<
      Array<Maybe<GQLDownloadableProductSamples>>
    >
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /** A value of 1 indicates that each link in the array must be purchased separately. */
    links_purchased_separately?: Maybe<Scalars['Int']>
    /** The heading above the list of downloadable products. */
    links_title?: Maybe<Scalars['String']>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
  }

/** Defines a product that the shopper downloads. */
export type GQLDownloadableProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines a single downloadable product. */
export type GQLDownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: Maybe<Array<Maybe<GQLCustomizableOptionInput>>>
  /** The quantity and SKU of the downloadable product. */
  data: GQLCartItemInput
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: Maybe<
    Array<Maybe<GQLDownloadableProductLinksInput>>
  >
}

/** Defines characteristics of a downloadable product. */
export type GQLDownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks'
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']>
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<GQLDownloadableFileTypeEnum>
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']>
  /** The price of the downloadable product. */
  price?: Maybe<Scalars['Float']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<GQLDownloadableFileTypeEnum>
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']>
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name of the link. */
  title?: Maybe<Scalars['String']>
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']
}

/** Contains the link ID for the downloadable product. */
export type GQLDownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']
}

/** Defines characteristics of a downloadable product. */
export type GQLDownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples'
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<GQLDownloadableFileTypeEnum>
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']>
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']>
  /** The display name of the sample. */
  title?: Maybe<Scalars['String']>
}

/** Contains details about downloadable products added to a requisition list. */
export type GQLDownloadableRequisitionListItem =
  GQLRequisitionListItemInterface & {
    __typename?: 'DownloadableRequisitionListItem'
    /** Selected custom options for an item in the requisition list. */
    customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
    /** An array of links for downloadable products in the requisition list. */
    links?: Maybe<Array<Maybe<GQLDownloadableProductLinks>>>
    /** Details about a requisition list item. */
    product: GQLProductInterface
    /** The quantity of the product added to the requisition list. */
    quantity: Scalars['Float']
    /** An array of links to downloadable product samples. */
    samples?: Maybe<Array<Maybe<GQLDownloadableProductSamples>>>
    /** The unique ID of an item in a requisition list. */
    uid: Scalars['ID']
  }

/** A downloadable product wish list item. */
export type GQLDownloadableWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** An array containing information about the selected links. */
  links_v2?: Maybe<Array<Maybe<GQLDownloadableProductLinks>>>
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
  /** An array containing information about the selected samples. */
  samples?: Maybe<Array<Maybe<GQLDownloadableProductSamples>>>
}

/** Contains a single dynamic block. */
export type GQLDynamicBlock = {
  __typename?: 'DynamicBlock'
  /** The renderable HTML code of the dynamic block. */
  content: GQLComplexTextValue
  /** The unique ID of a `DynamicBlock` object. */
  uid: Scalars['ID']
}

/** Indicates the locations the dynamic block can be placed. If this field is not specified, the query returns all locations. */
export enum GQLDynamicBlockLocationEnum {
  Content = 'CONTENT',
  Header = 'HEADER',
  Footer = 'FOOTER',
  Left = 'LEFT',
  Right = 'RIGHT',
}

/** Indicates the selected Dynamic Blocks Rotator inline widget. */
export enum GQLDynamicBlockTypeEnum {
  Specified = 'SPECIFIED',
  CartPriceRuleRelated = 'CART_PRICE_RULE_RELATED',
  CatalogPriceRuleRelated = 'CATALOG_PRICE_RULE_RELATED',
}

/** Contains an array of dynamic blocks. */
export type GQLDynamicBlocks = {
  __typename?: 'DynamicBlocks'
  /** An array containing individual dynamic blocks. */
  items: Array<Maybe<GQLDynamicBlock>>
  /** Metadata for pagination rendering. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of returned dynamic blocks. */
  total_count: Scalars['Int']
}

/** Defines the dynamic block filter. The filter can identify the block type, location and IDs to return. */
export type GQLDynamicBlocksFilterInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id?: Maybe<Scalars['String']>
  /** An array of dynamic block UIDs to filter on. */
  dynamic_block_uids?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** An array indicating the locations the dynamic block can be placed. */
  locations?: Maybe<Array<Maybe<GQLDynamicBlockLocationEnum>>>
  /** The unique ID of the product currently viewed */
  product_uid?: Maybe<Scalars['ID']>
  /** A value indicating the type of dynamic block to filter on. */
  type: GQLDynamicBlockTypeEnum
}

export type GQLEnteredAttributeValue = {
  __typename?: 'EnteredAttributeValue'
  /** Attribute value. */
  value?: Maybe<Scalars['String']>
}

/** Contains details about a custom text attribute that the buyer entered. */
export type GQLEnteredCustomAttributeInput = {
  /** A string that identifies the entered custom attribute. */
  attribute_code: Scalars['String']
  /** The text or other entered value. */
  value: Scalars['String']
}

/** Defines a customer-entered option. */
export type GQLEnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']
  /** Text the customer entered. */
  value: Scalars['String']
}

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type GQLEntityUrl = {
  __typename?: 'EntityUrl'
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']>
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid?: Maybe<Scalars['ID']>
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']>
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode?: Maybe<Scalars['Int']>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<GQLUrlRewriteEntityTypeEnum>
}

export type GQLErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']
}

/** Lists the exchange rate. */
export type GQLExchangeRate = {
  __typename?: 'ExchangeRate'
  /** Specifies the store’s default currency to exchange to. */
  currency_to?: Maybe<Scalars['String']>
  /** The exchange rate for the store’s default currency. */
  rate?: Maybe<Scalars['Float']>
}

/** Defines a filter that matches the input exactly. */
export type GQLFilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: Maybe<Scalars['String']>
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Defines a filter that performs a fuzzy search. */
export type GQLFilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: Maybe<Scalars['String']>
}

/** Defines a filter that matches a range of values, such as prices or dates. */
export type GQLFilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: Maybe<Scalars['String']>
  /** Use this attribute to specify the highest possible value in the range. */
  to?: Maybe<Scalars['String']>
}

/** Defines a filter for an input string. */
export type GQLFilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: Maybe<Scalars['String']>
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: Maybe<Scalars['String']>
}

/** Defines the comparison operators that can be used in a filter. */
export type GQLFilterTypeInput = {
  /** Equals. */
  eq?: Maybe<Scalars['String']>
  finset?: Maybe<Array<Maybe<Scalars['String']>>>
  /** From. Must be used with the `to` field. */
  from?: Maybe<Scalars['String']>
  /** Greater than. */
  gt?: Maybe<Scalars['String']>
  /** Greater than or equal to. */
  gteq?: Maybe<Scalars['String']>
  /** In. The value can contain a set of comma-separated values. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: Maybe<Scalars['String']>
  /** Less than. */
  lt?: Maybe<Scalars['String']>
  /** Less than or equal to. */
  lteq?: Maybe<Scalars['String']>
  /** More than or equal to. */
  moreq?: Maybe<Scalars['String']>
  /** Not equal to. */
  neq?: Maybe<Scalars['String']>
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Not null. */
  notnull?: Maybe<Scalars['String']>
  /** Is null. */
  null?: Maybe<Scalars['String']>
  /** To. Must be used with the `from` field. */
  to?: Maybe<Scalars['String']>
}

/** A single FPT that can be applied to a product price. */
export type GQLFixedProductTax = {
  __typename?: 'FixedProductTax'
  /** The amount of the Fixed Product Tax. */
  amount?: Maybe<GQLMoney>
  /** The display label assigned to the Fixed Product Tax. */
  label?: Maybe<Scalars['String']>
}

/** Lists display settings for the Fixed Product Tax. */
export enum GQLFixedProductTaxDisplaySettings {
  /** The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /** The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS',
  /** The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /** The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /** The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. */
  FptDisabled = 'FPT_DISABLED',
}

/** Identifies which customer requires remote shopping assistance. */
export type GQLGenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']
}

/** Contains the generated customer token. */
export type GQLGenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput'
  /** The generated customer token. */
  customer_token: Scalars['String']
}

/** Contains details about the gift card account. */
export type GQLGiftCardAccount = {
  __typename?: 'GiftCardAccount'
  /** The balance remaining on the gift card. */
  balance?: Maybe<GQLMoney>
  /** The gift card account code. */
  code?: Maybe<Scalars['String']>
  /** The expiration date of the gift card. */
  expiration_date?: Maybe<Scalars['String']>
}

/** Contains the gift card code. */
export type GQLGiftCardAccountInput = {
  /** The applied gift card code. */
  gift_card_code: Scalars['String']
}

/** Contains the value of a gift card, the website that generated the card, and related information. */
export type GQLGiftCardAmounts = {
  __typename?: 'GiftCardAmounts'
  /** An internal attribute ID. */
  attribute_id?: Maybe<Scalars['Int']>
  /** The unique ID for a `GiftCardAmounts` object. */
  uid: Scalars['ID']
  /** The value of the gift card. */
  value?: Maybe<Scalars['Float']>
  /**
   * An ID that is assigned to each unique gift card amount.
   * @deprecated Use `uid` instead
   */
  value_id?: Maybe<Scalars['Int']>
  /** The ID of the website that generated the gift card. */
  website_id?: Maybe<Scalars['Int']>
  /** The value of the gift card. */
  website_value?: Maybe<Scalars['Float']>
}

/** Contains details about a gift card that has been added to a cart. */
export type GQLGiftCardCartItem = GQLCartItemInterface & {
  __typename?: 'GiftCardCartItem'
  /** The amount and currency of the gift card. */
  amount: GQLMoney
  /** An array of customizations applied to the gift card. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** The email address of the person receiving the gift card. */
  recipient_email?: Maybe<Scalars['String']>
  /** The name of the person receiving the gift card. */
  recipient_name: Scalars['String']
  /** The email address of the sender. */
  sender_email?: Maybe<Scalars['String']>
  /** The name of the sender. */
  sender_name: Scalars['String']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

export type GQLGiftCardCreditMemoItem = GQLCreditMemoItemInterface & {
  __typename?: 'GiftCardCreditMemoItem'
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** Selected gift card properties for a credit memo item. */
  gift_card?: Maybe<GQLGiftCardItem>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
}

export type GQLGiftCardInvoiceItem = GQLInvoiceItemInterface & {
  __typename?: 'GiftCardInvoiceItem'
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** Selected gift card properties for an invoice item. */
  gift_card?: Maybe<GQLGiftCardItem>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']
  /** Details about an individual order item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
}

/** Contains details about a gift card. */
export type GQLGiftCardItem = {
  __typename?: 'GiftCardItem'
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']>
  /** The email address of the receiver of a virtual gift card. */
  recipient_email?: Maybe<Scalars['String']>
  /** The name of the receiver of a physical or virtual gift card. */
  recipient_name?: Maybe<Scalars['String']>
  /** The email address of the sender of a virtual gift card. */
  sender_email?: Maybe<Scalars['String']>
  /** The name of the sender of a physical or virtual gift card. */
  sender_name?: Maybe<Scalars['String']>
}

/** Contains details about the sender, recipient, and amount of a gift card. */
export type GQLGiftCardOptions = {
  __typename?: 'GiftCardOptions'
  /** The amount and currency of the gift card. */
  amount?: Maybe<GQLMoney>
  /** The custom amount and currency of the gift card. */
  custom_giftcard_amount?: Maybe<GQLMoney>
  /** A message to the recipient. */
  message?: Maybe<Scalars['String']>
  /** The email address of the person receiving the gift card. */
  recipient_email?: Maybe<Scalars['String']>
  /** The name of the person receiving the gift card. */
  recipient_name?: Maybe<Scalars['String']>
  /** The email address of the person sending the gift card. */
  sender_email?: Maybe<Scalars['String']>
  /** The name of the person sending the gift card. */
  sender_name?: Maybe<Scalars['String']>
}

export type GQLGiftCardOrderItem = GQLOrderItemInterface & {
  __typename?: 'GiftCardOrderItem'
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** Selected gift card properties for an order item. */
  gift_card?: Maybe<GQLGiftCardItem>
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>
}

/** Defines properties of a gift card. */
export type GQLGiftCardProduct = GQLProductInterface &
  GQLPhysicalProductInterface &
  GQLCustomizableProductInterface &
  GQLRoutableInterface & {
    __typename?: 'GiftCardProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /** Indicates whether the customer can provide a message to accompany the gift card. */
    allow_message?: Maybe<Scalars['Boolean']>
    /** Indicates whether shoppers have the ability to set the value of the gift card. */
    allow_open_amount?: Maybe<Scalars['Boolean']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** An array of customizable gift card options. */
    gift_card_options: Array<Maybe<GQLCustomizableOptionInterface>>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** An array that contains information about the values and ID of a gift card. */
    giftcard_amounts?: Maybe<Array<Maybe<GQLGiftCardAmounts>>>
    /** An enumeration that specifies the type of gift card. */
    giftcard_type?: Maybe<GQLGiftCardTypeEnum>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the customer can redeem the value on the card for cash. */
    is_redeemable?: Maybe<Scalars['Boolean']>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /** The number of days after purchase until the gift card expires. A null value means there is no limit. */
    lifetime?: Maybe<Scalars['Int']>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** The maximum number of characters the gift message can contain. */
    message_max_length?: Maybe<Scalars['Int']>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** The maximum acceptable value of an open amount gift card. */
    open_amount_max?: Maybe<Scalars['Float']>
    /** The minimum acceptable value of an open amount gift card. */
    open_amount_min?: Maybe<Scalars['Float']>
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<Scalars['Float']>
  }

/** Defines properties of a gift card. */
export type GQLGiftCardProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Contains details about gift cards added to a requisition list. */
export type GQLGiftCardRequisitionListItem = GQLRequisitionListItemInterface & {
  __typename?: 'GiftCardRequisitionListItem'
  /** Selected custom options for an item in the requisition list. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array that defines gift card properties. */
  gift_card_options: GQLGiftCardOptions
  /** Details about a requisition list item. */
  product: GQLProductInterface
  /** The amount added. */
  quantity: Scalars['Float']
  /** The unique ID for the requisition list item. */
  uid: Scalars['ID']
}

export type GQLGiftCardShipmentItem = GQLShipmentItemInterface & {
  __typename?: 'GiftCardShipmentItem'
  /** Selected gift card properties for a shipment item. */
  gift_card?: Maybe<GQLGiftCardItem>
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']
  /** The order item associated with the shipment item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']
}

/** Specifies the gift card type. */
export enum GQLGiftCardTypeEnum {
  Virtual = 'VIRTUAL',
  Physical = 'PHYSICAL',
  Combined = 'COMBINED',
}

/** A single gift card added to a wish list. */
export type GQLGiftCardWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'GiftCardWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** Details about a gift card. */
  gift_card_options: GQLGiftCardOptions
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

/** Contains the text of a gift message, its sender, and recipient */
export type GQLGiftMessage = {
  __typename?: 'GiftMessage'
  /** Sender name */
  from: Scalars['String']
  /** Gift message text */
  message: Scalars['String']
  /** Recipient name */
  to: Scalars['String']
}

/** Defines a gift message. */
export type GQLGiftMessageInput = {
  /** The name of the sender. */
  from: Scalars['String']
  /** The text of the gift message. */
  message: Scalars['String']
  /** The name of the recepient. */
  to: Scalars['String']
}

/** Contains prices for gift wrapping options. */
export type GQLGiftOptionsPrices = {
  __typename?: 'GiftOptionsPrices'
  /** Price of the gift wrapping for all individual order items. */
  gift_wrapping_for_items?: Maybe<GQLMoney>
  /** Price of the gift wrapping for the whole order. */
  gift_wrapping_for_order?: Maybe<GQLMoney>
  /** Price for the printed card. */
  printed_card?: Maybe<GQLMoney>
}

/** Contains details about a gift registry. */
export type GQLGiftRegistry = {
  __typename?: 'GiftRegistry'
  /** The date on which the gift registry was created. Only the registry owner can access this attribute. */
  created_at: Scalars['String']
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. */
  dynamic_attributes?: Maybe<Array<Maybe<GQLGiftRegistryDynamicAttribute>>>
  /** The name of the event. */
  event_name: Scalars['String']
  /** An array of products added to the gift registry. */
  items?: Maybe<Array<Maybe<GQLGiftRegistryItemInterface>>>
  /** The message text the customer entered to describe the event. */
  message: Scalars['String']
  /** The customer who created the gift registry. */
  owner_name: Scalars['String']
  /** An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. */
  privacy_settings: GQLGiftRegistryPrivacySettings
  /** Contains details about each registrant for the event. */
  registrants?: Maybe<Array<Maybe<GQLGiftRegistryRegistrant>>>
  /** Contains the customer's shipping address. Only the registry owner can access this attribute. */
  shipping_address?: Maybe<GQLCustomerAddress>
  /** An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. */
  status: GQLGiftRegistryStatus
  /** The type of gift registry. */
  type?: Maybe<GQLGiftRegistryType>
  /** The unique ID assigned to the gift registry. */
  uid: Scalars['ID']
}

export type GQLGiftRegistryDynamicAttribute =
  GQLGiftRegistryDynamicAttributeInterface & {
    __typename?: 'GiftRegistryDynamicAttribute'
    /** The internal ID of the dynamic attribute. */
    code: Scalars['ID']
    /** Indicates which group the dynamic attribute is a member of. */
    group: GQLGiftRegistryDynamicAttributeGroup
    /** The display name of the dynamic attribute. */
    label: Scalars['String']
    /** A corresponding value for the code. */
    value: Scalars['String']
  }

/** Defines the group type of a gift registry dynamic attribute. */
export enum GQLGiftRegistryDynamicAttributeGroup {
  EventInformation = 'EVENT_INFORMATION',
  PrivacySettings = 'PRIVACY_SETTINGS',
  Registrant = 'REGISTRANT',
  GeneralInformation = 'GENERAL_INFORMATION',
  DetailedInformation = 'DETAILED_INFORMATION',
  ShippingAddress = 'SHIPPING_ADDRESS',
}

/** Defines a dynamic attribute. */
export type GQLGiftRegistryDynamicAttributeInput = {
  /** A unique key for an additional attribute of the event. */
  code: Scalars['ID']
  /** A string that describes a dynamic attribute. */
  value: Scalars['String']
}

export type GQLGiftRegistryDynamicAttributeInterface = {
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']
  /** The display name of the dynamic attribute. */
  label: Scalars['String']
  /** A corresponding value for the code. */
  value: Scalars['String']
}

export type GQLGiftRegistryDynamicAttributeMetadata =
  GQLGiftRegistryDynamicAttributeMetadataInterface & {
    __typename?: 'GiftRegistryDynamicAttributeMetadata'
    /** Indicates which group the dynamic attribute a member of. */
    attribute_group: Scalars['String']
    /** The internal ID of the dynamic attribute. */
    code: Scalars['ID']
    /** The selected input type for this dynamic attribute. The value can be one of several static or custom types. */
    input_type: Scalars['String']
    /** Indicates whether the dynamic attribute is required. */
    is_required: Scalars['Boolean']
    /** The display name of the dynamic attribute. */
    label: Scalars['String']
    /** The order in which to display the dynamic attribute. */
    sort_order?: Maybe<Scalars['Int']>
  }

export type GQLGiftRegistryDynamicAttributeMetadataInterface = {
  /** Indicates which group the dynamic attribute a member of. */
  attribute_group: Scalars['String']
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types. */
  input_type: Scalars['String']
  /** Indicates whether the dynamic attribute is required. */
  is_required: Scalars['Boolean']
  /** The display name of the dynamic attribute. */
  label: Scalars['String']
  /** The order in which to display the dynamic attribute. */
  sort_order?: Maybe<Scalars['Int']>
}

export type GQLGiftRegistryItem = GQLGiftRegistryItemInterface & {
  __typename?: 'GiftRegistryItem'
  /** The date the product was added to the gift registry. */
  created_at: Scalars['String']
  /** A brief message about the gift registry item. */
  note?: Maybe<Scalars['String']>
  /** Details about the gift registry item. */
  product?: Maybe<GQLProductInterface>
  /** The requested quantity of the product. */
  quantity: Scalars['Float']
  /** The fulfilled quantity of the product. */
  quantity_fulfilled: Scalars['Float']
  /** The unique ID of a gift registry item. */
  uid: Scalars['ID']
}

export type GQLGiftRegistryItemInterface = {
  /** The date the product was added to the gift registry. */
  created_at: Scalars['String']
  /** A brief message about the gift registry item. */
  note?: Maybe<Scalars['String']>
  /** Details about the gift registry item. */
  product?: Maybe<GQLProductInterface>
  /** The requested quantity of the product. */
  quantity: Scalars['Float']
  /** The fulfilled quantity of the product. */
  quantity_fulfilled: Scalars['Float']
  /** The unique ID of a gift registry item. */
  uid: Scalars['ID']
}

/** Contains the status and any errors that encountered with the customer's gift register item. */
export type GQLGiftRegistryItemUserErrorInterface = {
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean']
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GQLGiftRegistryItemsUserError>>
}

/** Contains error information. */
export type GQLGiftRegistryItemUserErrors =
  GQLGiftRegistryItemUserErrorInterface & {
    __typename?: 'GiftRegistryItemUserErrors'
    /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
    status: Scalars['Boolean']
    /** An array of errors encountered while moving items from the cart to the gift registry. */
    user_errors: Array<Maybe<GQLGiftRegistryItemsUserError>>
  }

/** Contains details about an error that occurred when processing a gift registry item. */
export type GQLGiftRegistryItemsUserError = {
  __typename?: 'GiftRegistryItemsUserError'
  /** An error code that describes the error encountered. */
  code: GQLGiftRegistryItemsUserErrorType
  /** The unique ID of the gift registry item containing an error. */
  gift_registry_item_uid?: Maybe<Scalars['ID']>
  /** The unique ID of the `GiftRegistry` object containing an error. */
  gift_registry_uid?: Maybe<Scalars['ID']>
  /** A localized error message. */
  message: Scalars['String']
  /** The unique ID of the product containing an error. */
  product_uid?: Maybe<Scalars['ID']>
}

/** Defines the error type. */
export enum GQLGiftRegistryItemsUserErrorType {
  /** Used for handling out of stock products. */
  OutOfStock = 'OUT_OF_STOCK',
  /** Used for exceptions like EntityNotFound. */
  NotFound = 'NOT_FOUND',
  /** Used for other exceptions, such as database connection failures. */
  Undefined = 'UNDEFINED',
}

/** Contains details about the gift registry. */
export type GQLGiftRegistryOutput = GQLGiftRegistryOutputInterface & {
  __typename?: 'GiftRegistryOutput'
  /** The gift registry. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Contains the customer's gift registry. */
export type GQLGiftRegistryOutputInterface = {
  /** The gift registry. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Defines the privacy setting of the gift registry. */
export enum GQLGiftRegistryPrivacySettings {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

/** Contains details about a registrant. */
export type GQLGiftRegistryRegistrant = {
  __typename?: 'GiftRegistryRegistrant'
  /** An array of dynamic attributes assigned to the registrant. */
  dynamic_attributes?: Maybe<
    Array<Maybe<GQLGiftRegistryRegistrantDynamicAttribute>>
  >
  /** The email address of the registrant. Only the registry owner can access this attribute. */
  email: Scalars['String']
  /** The first name of the registrant. */
  firstname: Scalars['String']
  /** The last name of the registrant. */
  lastname: Scalars['String']
  /** The unique ID assigned to the registrant. */
  uid: Scalars['ID']
}

export type GQLGiftRegistryRegistrantDynamicAttribute =
  GQLGiftRegistryDynamicAttributeInterface & {
    __typename?: 'GiftRegistryRegistrantDynamicAttribute'
    /** The internal ID of the dynamic attribute. */
    code: Scalars['ID']
    /** The display name of the dynamic attribute. */
    label: Scalars['String']
    /** A corresponding value for the code. */
    value: Scalars['String']
  }

/** Contains the results of a gift registry search. */
export type GQLGiftRegistrySearchResult = {
  __typename?: 'GiftRegistrySearchResult'
  /** The date of the event. */
  event_date?: Maybe<Scalars['String']>
  /** The title given to the event. */
  event_title: Scalars['String']
  /** The URL key of the gift registry. */
  gift_registry_uid: Scalars['ID']
  /** The location of the event. */
  location?: Maybe<Scalars['String']>
  /** The name of the gift registry owner. */
  name: Scalars['String']
  /** The type of event being held. */
  type?: Maybe<Scalars['String']>
}

/** Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail. */
export type GQLGiftRegistryShippingAddressInput = {
  /** Defines the shipping address for this gift registry. */
  address_data?: Maybe<GQLCustomerAddressInput>
  /** The ID assigned to this customer address. */
  address_id?: Maybe<Scalars['ID']>
}

/** Defines the status of the gift registry. */
export enum GQLGiftRegistryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

/** Contains details about a gift registry type. */
export type GQLGiftRegistryType = {
  __typename?: 'GiftRegistryType'
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. */
  dynamic_attributes_metadata?: Maybe<
    Array<Maybe<GQLGiftRegistryDynamicAttributeMetadataInterface>>
  >
  /** The label assigned to the gift registry type on the Admin. */
  label: Scalars['String']
  /** The unique ID assigned to the gift registry type. */
  uid: Scalars['ID']
}

/** Contains details about the selected or available gift wrapping options. */
export type GQLGiftWrapping = {
  __typename?: 'GiftWrapping'
  /** The name of the gift wrapping design. */
  design: Scalars['String']
  /**
   * The unique ID for a `GiftWrapping` object.
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID']
  /** The preview image for a gift wrapping option. */
  image?: Maybe<GQLGiftWrappingImage>
  /** The gift wrapping price. */
  price: GQLMoney
  /** The unique ID for a `GiftWrapping` object. */
  uid: Scalars['ID']
}

/** Points to an image associated with a gift wrapping option. */
export type GQLGiftWrappingImage = {
  __typename?: 'GiftWrappingImage'
  /** The gift wrapping preview image label. */
  label: Scalars['String']
  /** The gift wrapping preview image URL. */
  url: Scalars['String']
}

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GQLGroupedProduct = GQLProductInterface &
  GQLRoutableInterface &
  GQLPhysicalProductInterface & {
    __typename?: 'GroupedProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /** An array containing grouped product items. */
    items?: Maybe<Array<Maybe<GQLGroupedProductItem>>>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<Scalars['Float']>
  }

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GQLGroupedProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Contains information about an individual grouped product item. */
export type GQLGroupedProductItem = {
  __typename?: 'GroupedProductItem'
  /** The relative position of this item compared to the other group items. */
  position?: Maybe<Scalars['Int']>
  /** Details about this product option. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this grouped product item. */
  qty?: Maybe<Scalars['Float']>
}

/** A grouped product wish list item. */
export type GQLGroupedProductWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type GQLHostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']
}

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type GQLHostedProUrl = {
  __typename?: 'HostedProUrl'
  /** The secure URL generated by PayPal. */
  secure_form_url?: Maybe<Scalars['String']>
}

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type GQLHostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']
}

/** Contains target path parameters. */
export type GQLHttpQueryParameter = {
  __typename?: 'HttpQueryParameter'
  /** A parameter name. */
  name?: Maybe<Scalars['String']>
  /** A parameter value. */
  value?: Maybe<Scalars['String']>
}

export type GQLImageSwatchData = GQLSwatchDataInterface & {
  __typename?: 'ImageSwatchData'
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail?: Maybe<Scalars['String']>
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>
}

/** Contains an error message when an internal error occurred. */
export type GQLInternalError = GQLErrorInterface & {
  __typename?: 'InternalError'
  /** The returned error message. */
  message: Scalars['String']
}

/** Contains invoice details. */
export type GQLInvoice = {
  __typename?: 'Invoice'
  /** Comments on the invoice. */
  comments?: Maybe<Array<Maybe<GQLSalesCommentItem>>>
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']
  /** Invoiced product details. */
  items?: Maybe<Array<Maybe<GQLInvoiceItemInterface>>>
  /** Sequential invoice number. */
  number: Scalars['String']
  /** Invoice total amount details. */
  total?: Maybe<GQLInvoiceTotal>
}

export type GQLInvoiceItem = GQLInvoiceItemInterface & {
  __typename?: 'InvoiceItem'
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']
  /** Details about an individual order item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
}

/** Contains detailes about invoiced items. */
export type GQLInvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']
  /** Details about an individual order item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
}

/** Contains price details from an invoice. */
export type GQLInvoiceTotal = {
  __typename?: 'InvoiceTotal'
  /** The final base grand total amount in the base currency. */
  base_grand_total: GQLMoney
  /** The applied discounts to the invoice. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: GQLMoney
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling?: Maybe<GQLShippingHandling>
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: GQLMoney
  /** The invoice tax details. */
  taxes?: Maybe<Array<Maybe<GQLTaxItem>>>
  /** The shipping amount for the invoice. */
  total_shipping: GQLMoney
  /** The amount of tax applied to the invoice. */
  total_tax: GQLMoney
}

/** Contains the response of a company admin email validation query. */
export type GQLIsCompanyAdminEmailAvailableOutput = {
  __typename?: 'IsCompanyAdminEmailAvailableOutput'
  /** Indicates whether the specified email address can be used to create a company administrator. */
  is_email_available: Scalars['Boolean']
}

/** Contains the response of a company email validation query. */
export type GQLIsCompanyEmailAvailableOutput = {
  __typename?: 'IsCompanyEmailAvailableOutput'
  /** Indicates whether the specified email address can be used to create a company. */
  is_email_available: Scalars['Boolean']
}

/** Contains the response of a role name validation query. */
export type GQLIsCompanyRoleNameAvailableOutput = {
  __typename?: 'IsCompanyRoleNameAvailableOutput'
  /** Indicates whether the specified company role name is available. */
  is_role_name_available: Scalars['Boolean']
}

/** Contains the response of a company user email validation query. */
export type GQLIsCompanyUserEmailAvailableOutput = {
  __typename?: 'IsCompanyUserEmailAvailableOutput'
  /** Indicates whether the specified email address can be used to create a company user. */
  is_email_available: Scalars['Boolean']
}

/** Contains the result of the `isEmailAvailable` query. */
export type GQLIsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput'
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available?: Maybe<Scalars['Boolean']>
}

/** A list of options of the selected bundle product. */
export type GQLItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption'
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']
  /** The label of the option. */
  label: Scalars['String']
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']
  /** A list of products that represent the values of the parent option. */
  values?: Maybe<Array<Maybe<GQLItemSelectedBundleOptionValue>>>
}

/** A list of values for the selected bundle product. */
export type GQLItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue'
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']
  /** The price of the child bundle product. */
  price: GQLMoney
  /** The name of the child bundle product. */
  product_name: Scalars['String']
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']
}

/** Contains a key-value pair. */
export type GQLKeyValue = {
  __typename?: 'KeyValue'
  /** The name part of the key/value pair. */
  name?: Maybe<Scalars['String']>
  /** The value part of the key/value pair. */
  value?: Maybe<Scalars['String']>
}

/** Contains information for rendering layered navigation. */
export type GQLLayerFilter = {
  __typename?: 'LayerFilter'
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items?: Maybe<Array<Maybe<GQLLayerFilterItemInterface>>>
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count?: Maybe<Scalars['Int']>
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name?: Maybe<Scalars['String']>
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var?: Maybe<Scalars['String']>
}

export type GQLLayerFilterItem = GQLLayerFilterItemInterface & {
  __typename?: 'LayerFilterItem'
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']>
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']>
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']>
}

export type GQLLayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']>
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']>
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']>
}

/** Defines characteristics about images and videos associated with a specific product. */
export type GQLMediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry'
  /** Details about the content of the media gallery item. */
  content?: Maybe<GQLProductMediaGalleryEntriesContent>
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']>
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>
  /** The alt text displayed on the storefront when the user points to the image. */
  label?: Maybe<Scalars['String']>
  /** Either `image` or `video`. */
  media_type?: Maybe<Scalars['String']>
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']
  /** Details about the content of a video item. */
  video_content?: Maybe<GQLProductMediaGalleryEntriesVideoContent>
}

/** Contains basic information about a product image or video. */
export type GQLMediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>
}

/** Defines a monetary value, including a numeric value and a currency code. */
export type GQLMoney = {
  __typename?: 'Money'
  /** A three-letter currency code, such as USD or EUR. */
  currency?: Maybe<GQLCurrencyEnum>
  /** A number expressing a monetary value. */
  value?: Maybe<Scalars['Float']>
}

/** Contains the customer's gift registry and any errors encountered. */
export type GQLMoveCartItemsToGiftRegistryOutput =
  GQLGiftRegistryOutputInterface &
    GQLGiftRegistryItemUserErrorInterface & {
      __typename?: 'MoveCartItemsToGiftRegistryOutput'
      /** The gift registry. */
      gift_registry?: Maybe<GQLGiftRegistry>
      /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
      status: Scalars['Boolean']
      /** An array of errors encountered while moving items from the cart to the gift registry. */
      user_errors: Array<Maybe<GQLGiftRegistryItemsUserError>>
    }

/** An input object that defines the items in a requisition list to be moved. */
export type GQLMoveItemsBetweenRequisitionListsInput = {
  /** An array of IDs representing products moved from one requisition list to another. */
  requisitionListItemUids: Array<Maybe<Scalars['ID']>>
}

/** Output of the request to move items to another requisition list. */
export type GQLMoveItemsBetweenRequisitionListsOutput = {
  __typename?: 'MoveItemsBetweenRequisitionListsOutput'
  /** The destination requisition list after moving items. */
  destination_requisition_list?: Maybe<GQLRequisitionList>
  /** The source requisition list after moving items. */
  source_requisition_list?: Maybe<GQLRequisitionList>
}

/** Contains the source and target wish lists after moving products. */
export type GQLMoveProductsBetweenWishlistsOutput = {
  __typename?: 'MoveProductsBetweenWishlistsOutput'
  /** The destination wish list after receiving products moved from the source wish list. */
  destination_wishlist: GQLWishlist
  /** The source wish list after moving products from it. */
  source_wishlist: GQLWishlist
  /** An array of errors encountered while moving products to a wish list. */
  user_errors: Array<Maybe<GQLWishListUserInputError>>
}

export type GQLMutation = {
  __typename?: 'Mutation'
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart?: Maybe<GQLAddBundleProductsToCartOutput>
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart?: Maybe<GQLAddConfigurableProductsToCartOutput>
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart?: Maybe<GQLAddDownloadableProductsToCartOutput>
  /** Add registrants to the specified gift registry. */
  addGiftRegistryRegistrants?: Maybe<GQLAddGiftRegistryRegistrantsOutput>
  /** Add any type of product to the cart. */
  addProductsToCart?: Maybe<GQLAddProductsToCartOutput>
  /** Add products to the specified compare list. */
  addProductsToCompareList?: Maybe<GQLCompareList>
  /** Add items to the specified requisition list. */
  addProductsToRequisitionList?: Maybe<GQLAddProductsToRequisitionListOutput>
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist?: Maybe<GQLAddProductsToWishlistOutput>
  /** Add items in the requisition list to the customer's cart. */
  addRequisitionListItemsToCart?: Maybe<GQLAddRequisitionListItemsToCartOutput>
  /** Add a comment to an existing return. */
  addReturnComment?: Maybe<GQLAddReturnCommentOutput>
  /** Add tracking information to the return. */
  addReturnTracking?: Maybe<GQLAddReturnTrackingOutput>
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart?: Maybe<GQLAddSimpleProductsToCartOutput>
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart?: Maybe<GQLAddVirtualProductsToCartOutput>
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart?: Maybe<GQLAddWishlistItemsToCartOutput>
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart?: Maybe<GQLApplyCouponToCartOutput>
  /** Apply a pre-defined gift card code to the specified cart. */
  applyGiftCardToCart?: Maybe<GQLApplyGiftCardToCartOutput>
  /** Apply all available points, up to the cart total. Partial redemption is not available. */
  applyRewardPointsToCart?: Maybe<GQLApplyRewardPointsToCartOutput>
  /** Apply store credit to the specified cart. */
  applyStoreCreditToCart?: Maybe<GQLApplyStoreCreditToCartOutput>
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer?: Maybe<GQLAssignCompareListToCustomerOutput>
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: GQLCart
  /** Change the password for the logged-in customer. */
  changeCustomerPassword?: Maybe<GQLCustomer>
  /** Remove all items from the specified cart. */
  clearCustomerCart?: Maybe<GQLClearCustomerCartOutput>
  /** Mark a negotiable quote as closed. The negotiable quote is still visible on the storefront. */
  closeNegotiableQuotes?: Maybe<GQLCloseNegotiableQuotesOutput>
  /** Send a 'Contact Us' email to the merchant. */
  contactUs?: Maybe<GQLContactUsOutput>
  /** Copy items from one requisition list to another. */
  copyItemsBetweenRequisitionLists?: Maybe<GQLCopyItemsFromRequisitionListsOutput>
  /** Copy products from one wish list to another. The original wish list is unchanged. */
  copyProductsBetweenWishlists?: Maybe<GQLCopyProductsBetweenWishlistsOutput>
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String']
  /** Create a company at the request of either a customer or a guest. */
  createCompany?: Maybe<GQLCreateCompanyOutput>
  /** Create a new company role. */
  createCompanyRole?: Maybe<GQLCreateCompanyRoleOutput>
  /** Create a new team for the authenticated customer's company. */
  createCompanyTeam?: Maybe<GQLCreateCompanyTeamOutput>
  /** Create a new company user at the request of an existing customer. */
  createCompanyUser?: Maybe<GQLCreateCompanyUserOutput>
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList?: Maybe<GQLCompareList>
  /** Use `createCustomerV2` instead. */
  createCustomer?: Maybe<GQLCustomerOutput>
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress?: Maybe<GQLCustomerAddress>
  /** Create a customer account. */
  createCustomerV2?: Maybe<GQLCustomerOutput>
  /** Create an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>
  /** Create a gift registry on behalf of the customer. */
  createGiftRegistry?: Maybe<GQLCreateGiftRegistryOutput>
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<GQLCreatePayflowProTokenOutput>
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<GQLPaypalExpressTokenOutput>
  /** Create a product review for the specified product. */
  createProductReview: GQLCreateProductReviewOutput
  /** Create an empty requisition list. */
  createRequisitionList?: Maybe<GQLCreateRequisitionListOutput>
  /** Create a new wish list. */
  createWishlist?: Maybe<GQLCreateWishlistOutput>
  /** Delete the specified company role. */
  deleteCompanyRole?: Maybe<GQLDeleteCompanyRoleOutput>
  /** Delete the specified company team. */
  deleteCompanyTeam?: Maybe<GQLDeleteCompanyTeamOutput>
  /** Delete the specified company user. */
  deleteCompanyUser?: Maybe<GQLDeleteCompanyUserOutput>
  /** Delete the specified compare list. */
  deleteCompareList?: Maybe<GQLDeleteCompareListOutput>
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>
  /** Delete a negotiable quote. The negotiable quote will not be displayed on the storefront. */
  deleteNegotiableQuotes?: Maybe<GQLDeleteNegotiableQuotesOutput>
  /** Delete a customer's payment token. */
  deletePaymentToken?: Maybe<GQLDeletePaymentTokenOutput>
  /** Delete a requisition list. */
  deleteRequisitionList?: Maybe<GQLDeleteRequisitionListOutput>
  /** Delete items from a requisition list. */
  deleteRequisitionListItems?: Maybe<GQLDeleteRequisitionListItemsOutput>
  /** Delete the specified wish list. You cannot delete the customer's default (first) wish list. */
  deleteWishlist?: Maybe<GQLDeleteWishlistOutput>
  /** Generate a token for specified customer. */
  generateCustomerToken?: Maybe<GQLCustomerToken>
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin?: Maybe<GQLGenerateCustomerTokenAsAdminOutput>
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<GQLPayflowProResponseOutput>
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: GQLCart
  /** Move all items from the cart to a gift registry. */
  moveCartItemsToGiftRegistry?: Maybe<GQLMoveCartItemsToGiftRegistryOutput>
  /** Move Items from one requisition list to another. */
  moveItemsBetweenRequisitionLists?: Maybe<GQLMoveItemsBetweenRequisitionListsOutput>
  /** Move products from one wish list to another. */
  moveProductsBetweenWishlists?: Maybe<GQLMoveProductsBetweenWishlistsOutput>
  /** Convert a negotiable quote into an order. */
  placeNegotiableQuoteOrder?: Maybe<GQLPlaceNegotiableQuoteOrderOutput>
  /** Convert the quote into an order. */
  placeOrder?: Maybe<GQLPlaceOrderOutput>
  /** Redeem a gift card for store credit. */
  redeemGiftCardBalanceAsStoreCredit?: Maybe<GQLGiftCardAccount>
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart?: Maybe<GQLRemoveCouponFromCartOutput>
  /** Removes a gift card from the cart. */
  removeGiftCardFromCart?: Maybe<GQLRemoveGiftCardFromCartOutput>
  /** Delete the specified gift registry. */
  removeGiftRegistry?: Maybe<GQLRemoveGiftRegistryOutput>
  /** Delete the specified items from a gift registry. */
  removeGiftRegistryItems?: Maybe<GQLRemoveGiftRegistryItemsOutput>
  /** Removes registrants from a gift registry. */
  removeGiftRegistryRegistrants?: Maybe<GQLRemoveGiftRegistryRegistrantsOutput>
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart?: Maybe<GQLRemoveItemFromCartOutput>
  /** Remove one or more products from a negotiable quote. */
  removeNegotiableQuoteItems?: Maybe<GQLRemoveNegotiableQuoteItemsOutput>
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList?: Maybe<GQLCompareList>
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist?: Maybe<GQLRemoveProductsFromWishlistOutput>
  /** Remove a tracked shipment from a return. */
  removeReturnTracking?: Maybe<GQLRemoveReturnTrackingOutput>
  /** Cancel the application of reward points to the cart. */
  removeRewardPointsFromCart?: Maybe<GQLRemoveRewardPointsFromCartOutput>
  /** Remove store credit that has been applied to the specified cart. */
  removeStoreCreditFromCart?: Maybe<GQLRemoveStoreCreditFromCartOutput>
  /** Add all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<GQLReorderItemsOutput>
  /** Request a new negotiable quote on behalf of the buyer. */
  requestNegotiableQuote?: Maybe<GQLRequestNegotiableQuoteOutput>
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>
  /** Initiates a buyer's request to return items for replacement or refund. */
  requestReturn?: Maybe<GQLRequestReturnOutput>
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword?: Maybe<Scalars['Boolean']>
  /** Revoke the customer token. */
  revokeCustomerToken?: Maybe<GQLRevokeCustomerTokenOutput>
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend?: Maybe<GQLSendEmailToFriendOutput>
  /** Send the negotiable quote to the seller for review. */
  sendNegotiableQuoteForReview?: Maybe<GQLSendNegotiableQuoteForReviewOutput>
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart?: Maybe<GQLSetBillingAddressOnCartOutput>
  /** Set gift options, including gift messages, gift wrapping, gift receipts, and printed cards. */
  setGiftOptionsOnCart?: Maybe<GQLSetGiftOptionsOnCartOutput>
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart?: Maybe<GQLSetGuestEmailOnCartOutput>
  /** Assign a billing address to a negotiable quote. */
  setNegotiableQuoteBillingAddress?: Maybe<GQLSetNegotiableQuoteBillingAddressOutput>
  /** Set the payment method on a negotiable quote. */
  setNegotiableQuotePaymentMethod?: Maybe<GQLSetNegotiableQuotePaymentMethodOutput>
  /** Assign a previously-defined address as the shipping address for a negotiable quote. */
  setNegotiableQuoteShippingAddress?: Maybe<GQLSetNegotiableQuoteShippingAddressOutput>
  /** Assign the shipping methods on the negotiable quote. */
  setNegotiableQuoteShippingMethods?: Maybe<GQLSetNegotiableQuoteShippingMethodsOutput>
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder?: Maybe<GQLPlaceOrderOutput>
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart?: Maybe<GQLSetPaymentMethodOnCartOutput>
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart?: Maybe<GQLSetShippingAddressesOnCartOutput>
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart?: Maybe<GQLSetShippingMethodsOnCartOutput>
  /** Send an email about the gift registry to a list of invitees. */
  shareGiftRegistry?: Maybe<GQLShareGiftRegistryOutput>
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter?: Maybe<GQLSubscribeEmailToNewsletterOutput>
  /** Modify items in the cart. */
  updateCartItems?: Maybe<GQLUpdateCartItemsOutput>
  /** Update company information. */
  updateCompany?: Maybe<GQLUpdateCompanyOutput>
  /** Update company role information. */
  updateCompanyRole?: Maybe<GQLUpdateCompanyRoleOutput>
  /** Change the parent node of a company team. */
  updateCompanyStructure?: Maybe<GQLUpdateCompanyStructureOutput>
  /** Update company team data. */
  updateCompanyTeam?: Maybe<GQLUpdateCompanyTeamOutput>
  /** Update an existing company user. */
  updateCompanyUser?: Maybe<GQLUpdateCompanyUserOutput>
  /** Use `updateCustomerV2` instead. */
  updateCustomer?: Maybe<GQLCustomerOutput>
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress?: Maybe<GQLCustomerAddress>
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail?: Maybe<GQLCustomerOutput>
  /** Update the customer's personal information. */
  updateCustomerV2?: Maybe<GQLCustomerOutput>
  /** Update the specified gift registry. */
  updateGiftRegistry?: Maybe<GQLUpdateGiftRegistryOutput>
  /** Update the specified items in the gift registry. */
  updateGiftRegistryItems?: Maybe<GQLUpdateGiftRegistryItemsOutput>
  /** Modify the properties of one or more gift registry registrants. */
  updateGiftRegistryRegistrants?: Maybe<GQLUpdateGiftRegistryRegistrantsOutput>
  /** Change the quantity of one or more items in an existing negotiable quote. */
  updateNegotiableQuoteQuantities?: Maybe<GQLUpdateNegotiableQuoteItemsQuantityOutput>
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist?: Maybe<GQLUpdateProductsInWishlistOutput>
  /** Rename a requisition list and change its description. */
  updateRequisitionList?: Maybe<GQLUpdateRequisitionListOutput>
  /** Update items in a requisition list. */
  updateRequisitionListItems?: Maybe<GQLUpdateRequisitionListItemsOutput>
  /** Change the name and visibility of the specified wish list. */
  updateWishlist?: Maybe<GQLUpdateWishlistOutput>
}

export type GQLMutationAddBundleProductsToCartArgs = {
  input?: Maybe<GQLAddBundleProductsToCartInput>
}

export type GQLMutationAddConfigurableProductsToCartArgs = {
  input?: Maybe<GQLAddConfigurableProductsToCartInput>
}

export type GQLMutationAddDownloadableProductsToCartArgs = {
  input?: Maybe<GQLAddDownloadableProductsToCartInput>
}

export type GQLMutationAddGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID']
  registrants: Array<GQLAddGiftRegistryRegistrantInput>
}

export type GQLMutationAddProductsToCartArgs = {
  cartId: Scalars['String']
  cartItems: Array<GQLCartItemInput>
}

export type GQLMutationAddProductsToCompareListArgs = {
  input?: Maybe<GQLAddProductsToCompareListInput>
}

export type GQLMutationAddProductsToRequisitionListArgs = {
  requisitionListUid: Scalars['ID']
  requisitionListItems: Array<GQLRequisitionListItemsInput>
}

export type GQLMutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']
  wishlistItems: Array<GQLWishlistItemInput>
}

export type GQLMutationAddRequisitionListItemsToCartArgs = {
  requisitionListUid: Scalars['ID']
  requisitionListItemUids?: Maybe<Array<Scalars['ID']>>
}

export type GQLMutationAddReturnCommentArgs = {
  input: GQLAddReturnCommentInput
}

export type GQLMutationAddReturnTrackingArgs = {
  input: GQLAddReturnTrackingInput
}

export type GQLMutationAddSimpleProductsToCartArgs = {
  input?: Maybe<GQLAddSimpleProductsToCartInput>
}

export type GQLMutationAddVirtualProductsToCartArgs = {
  input?: Maybe<GQLAddVirtualProductsToCartInput>
}

export type GQLMutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']
  wishlistItemIds?: Maybe<Array<Scalars['ID']>>
}

export type GQLMutationApplyCouponToCartArgs = {
  input?: Maybe<GQLApplyCouponToCartInput>
}

export type GQLMutationApplyGiftCardToCartArgs = {
  input?: Maybe<GQLApplyGiftCardToCartInput>
}

export type GQLMutationApplyRewardPointsToCartArgs = {
  cartId: Scalars['ID']
}

export type GQLMutationApplyStoreCreditToCartArgs = {
  input: GQLApplyStoreCreditToCartInput
}

export type GQLMutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID']
}

export type GQLMutationAssignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']
}

export type GQLMutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
}

export type GQLMutationClearCustomerCartArgs = {
  cartUid: Scalars['String']
}

export type GQLMutationCloseNegotiableQuotesArgs = {
  input: GQLCloseNegotiableQuotesInput
}

export type GQLMutationContactUsArgs = {
  input: GQLContactUsInput
}

export type GQLMutationCopyItemsBetweenRequisitionListsArgs = {
  sourceRequisitionListUid: Scalars['ID']
  destinationRequisitionListUid?: Maybe<Scalars['ID']>
  requisitionListItem?: Maybe<GQLCopyItemsBetweenRequisitionListsInput>
}

export type GQLMutationCopyProductsBetweenWishlistsArgs = {
  sourceWishlistUid: Scalars['ID']
  destinationWishlistUid: Scalars['ID']
  wishlistItems: Array<GQLWishlistItemCopyInput>
}

export type GQLMutationCreateCompanyArgs = {
  input: GQLCompanyCreateInput
}

export type GQLMutationCreateCompanyRoleArgs = {
  input: GQLCompanyRoleCreateInput
}

export type GQLMutationCreateCompanyTeamArgs = {
  input: GQLCompanyTeamCreateInput
}

export type GQLMutationCreateCompanyUserArgs = {
  input: GQLCompanyUserCreateInput
}

export type GQLMutationCreateCompareListArgs = {
  input?: Maybe<GQLCreateCompareListInput>
}

export type GQLMutationCreateCustomerArgs = {
  input: GQLCustomerInput
}

export type GQLMutationCreateCustomerAddressArgs = {
  input: GQLCustomerAddressInput
}

export type GQLMutationCreateCustomerV2Args = {
  input: GQLCustomerCreateInput
}

export type GQLMutationCreateEmptyCartArgs = {
  input?: Maybe<GQLCreateEmptyCartInput>
}

export type GQLMutationCreateGiftRegistryArgs = {
  giftRegistry: GQLCreateGiftRegistryInput
}

export type GQLMutationCreatePayflowProTokenArgs = {
  input: GQLPayflowProTokenInput
}

export type GQLMutationCreatePaypalExpressTokenArgs = {
  input: GQLPaypalExpressTokenInput
}

export type GQLMutationCreateProductReviewArgs = {
  input: GQLCreateProductReviewInput
}

export type GQLMutationCreateRequisitionListArgs = {
  input?: Maybe<GQLCreateRequisitionListInput>
}

export type GQLMutationCreateWishlistArgs = {
  input: GQLCreateWishlistInput
}

export type GQLMutationDeleteCompanyRoleArgs = {
  id: Scalars['ID']
}

export type GQLMutationDeleteCompanyTeamArgs = {
  id: Scalars['ID']
}

export type GQLMutationDeleteCompanyUserArgs = {
  id: Scalars['ID']
}

export type GQLMutationDeleteCompareListArgs = {
  uid: Scalars['ID']
}

export type GQLMutationDeleteCustomerAddressArgs = {
  id: Scalars['Int']
}

export type GQLMutationDeleteNegotiableQuotesArgs = {
  input: GQLDeleteNegotiableQuotesInput
}

export type GQLMutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String']
}

export type GQLMutationDeleteRequisitionListArgs = {
  requisitionListUid: Scalars['ID']
}

export type GQLMutationDeleteRequisitionListItemsArgs = {
  requisitionListUid: Scalars['ID']
  requisitionListItemUids: Array<Scalars['ID']>
}

export type GQLMutationDeleteWishlistArgs = {
  wishlistId: Scalars['ID']
}

export type GQLMutationGenerateCustomerTokenArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type GQLMutationGenerateCustomerTokenAsAdminArgs = {
  input: GQLGenerateCustomerTokenAsAdminInput
}

export type GQLMutationHandlePayflowProResponseArgs = {
  input: GQLPayflowProResponseInput
}

export type GQLMutationMergeCartsArgs = {
  source_cart_id: Scalars['String']
  destination_cart_id?: Maybe<Scalars['String']>
}

export type GQLMutationMoveCartItemsToGiftRegistryArgs = {
  cartUid: Scalars['ID']
  giftRegistryUid: Scalars['ID']
}

export type GQLMutationMoveItemsBetweenRequisitionListsArgs = {
  sourceRequisitionListUid: Scalars['ID']
  destinationRequisitionListUid?: Maybe<Scalars['ID']>
  requisitionListItem?: Maybe<GQLMoveItemsBetweenRequisitionListsInput>
}

export type GQLMutationMoveProductsBetweenWishlistsArgs = {
  sourceWishlistUid: Scalars['ID']
  destinationWishlistUid: Scalars['ID']
  wishlistItems: Array<GQLWishlistItemMoveInput>
}

export type GQLMutationPlaceNegotiableQuoteOrderArgs = {
  input: GQLPlaceNegotiableQuoteOrderInput
}

export type GQLMutationPlaceOrderArgs = {
  input?: Maybe<GQLPlaceOrderInput>
}

export type GQLMutationRedeemGiftCardBalanceAsStoreCreditArgs = {
  input: GQLGiftCardAccountInput
}

export type GQLMutationRemoveCouponFromCartArgs = {
  input?: Maybe<GQLRemoveCouponFromCartInput>
}

export type GQLMutationRemoveGiftCardFromCartArgs = {
  input?: Maybe<GQLRemoveGiftCardFromCartInput>
}

export type GQLMutationRemoveGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID']
}

export type GQLMutationRemoveGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID']
  itemsUid: Array<Scalars['ID']>
}

export type GQLMutationRemoveGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID']
  registrantsUid: Array<Scalars['ID']>
}

export type GQLMutationRemoveItemFromCartArgs = {
  input?: Maybe<GQLRemoveItemFromCartInput>
}

export type GQLMutationRemoveNegotiableQuoteItemsArgs = {
  input: GQLRemoveNegotiableQuoteItemsInput
}

export type GQLMutationRemoveProductsFromCompareListArgs = {
  input?: Maybe<GQLRemoveProductsFromCompareListInput>
}

export type GQLMutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']
  wishlistItemsIds: Array<Scalars['ID']>
}

export type GQLMutationRemoveReturnTrackingArgs = {
  input: GQLRemoveReturnTrackingInput
}

export type GQLMutationRemoveRewardPointsFromCartArgs = {
  cartId: Scalars['ID']
}

export type GQLMutationRemoveStoreCreditFromCartArgs = {
  input: GQLRemoveStoreCreditFromCartInput
}

export type GQLMutationReorderItemsArgs = {
  orderNumber: Scalars['String']
}

export type GQLMutationRequestNegotiableQuoteArgs = {
  input: GQLRequestNegotiableQuoteInput
}

export type GQLMutationRequestPasswordResetEmailArgs = {
  email: Scalars['String']
}

export type GQLMutationRequestReturnArgs = {
  input: GQLRequestReturnInput
}

export type GQLMutationResetPasswordArgs = {
  email: Scalars['String']
  resetPasswordToken: Scalars['String']
  newPassword: Scalars['String']
}

export type GQLMutationSendEmailToFriendArgs = {
  input?: Maybe<GQLSendEmailToFriendInput>
}

export type GQLMutationSendNegotiableQuoteForReviewArgs = {
  input: GQLSendNegotiableQuoteForReviewInput
}

export type GQLMutationSetBillingAddressOnCartArgs = {
  input?: Maybe<GQLSetBillingAddressOnCartInput>
}

export type GQLMutationSetGiftOptionsOnCartArgs = {
  input?: Maybe<GQLSetGiftOptionsOnCartInput>
}

export type GQLMutationSetGuestEmailOnCartArgs = {
  input?: Maybe<GQLSetGuestEmailOnCartInput>
}

export type GQLMutationSetNegotiableQuoteBillingAddressArgs = {
  input: GQLSetNegotiableQuoteBillingAddressInput
}

export type GQLMutationSetNegotiableQuotePaymentMethodArgs = {
  input: GQLSetNegotiableQuotePaymentMethodInput
}

export type GQLMutationSetNegotiableQuoteShippingAddressArgs = {
  input: GQLSetNegotiableQuoteShippingAddressInput
}

export type GQLMutationSetNegotiableQuoteShippingMethodsArgs = {
  input: GQLSetNegotiableQuoteShippingMethodsInput
}

export type GQLMutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: Maybe<GQLSetPaymentMethodAndPlaceOrderInput>
}

export type GQLMutationSetPaymentMethodOnCartArgs = {
  input?: Maybe<GQLSetPaymentMethodOnCartInput>
}

export type GQLMutationSetShippingAddressesOnCartArgs = {
  input?: Maybe<GQLSetShippingAddressesOnCartInput>
}

export type GQLMutationSetShippingMethodsOnCartArgs = {
  input?: Maybe<GQLSetShippingMethodsOnCartInput>
}

export type GQLMutationShareGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID']
  sender: GQLShareGiftRegistrySenderInput
  invitees: Array<GQLShareGiftRegistryInviteeInput>
}

export type GQLMutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String']
}

export type GQLMutationUpdateCartItemsArgs = {
  input?: Maybe<GQLUpdateCartItemsInput>
}

export type GQLMutationUpdateCompanyArgs = {
  input: GQLCompanyUpdateInput
}

export type GQLMutationUpdateCompanyRoleArgs = {
  input: GQLCompanyRoleUpdateInput
}

export type GQLMutationUpdateCompanyStructureArgs = {
  input: GQLCompanyStructureUpdateInput
}

export type GQLMutationUpdateCompanyTeamArgs = {
  input: GQLCompanyTeamUpdateInput
}

export type GQLMutationUpdateCompanyUserArgs = {
  input: GQLCompanyUserUpdateInput
}

export type GQLMutationUpdateCustomerArgs = {
  input: GQLCustomerInput
}

export type GQLMutationUpdateCustomerAddressArgs = {
  id: Scalars['Int']
  input?: Maybe<GQLCustomerAddressInput>
}

export type GQLMutationUpdateCustomerEmailArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type GQLMutationUpdateCustomerV2Args = {
  input: GQLCustomerUpdateInput
}

export type GQLMutationUpdateGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID']
  giftRegistry: GQLUpdateGiftRegistryInput
}

export type GQLMutationUpdateGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID']
  items: Array<GQLUpdateGiftRegistryItemInput>
}

export type GQLMutationUpdateGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID']
  registrants: Array<GQLUpdateGiftRegistryRegistrantInput>
}

export type GQLMutationUpdateNegotiableQuoteQuantitiesArgs = {
  input: GQLUpdateNegotiableQuoteQuantitiesInput
}

export type GQLMutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']
  wishlistItems: Array<GQLWishlistItemUpdateInput>
}

export type GQLMutationUpdateRequisitionListArgs = {
  requisitionListUid: Scalars['ID']
  input?: Maybe<GQLUpdateRequisitionListInput>
}

export type GQLMutationUpdateRequisitionListItemsArgs = {
  requisitionListUid: Scalars['ID']
  requisitionListItems: Array<GQLUpdateRequisitionListItemsInput>
}

export type GQLMutationUpdateWishlistArgs = {
  wishlistId: Scalars['ID']
  name?: Maybe<Scalars['String']>
  visibility?: Maybe<GQLWishlistVisibilityEnum>
}

/** Contains details about a negotiable quote. */
export type GQLNegotiableQuote = {
  __typename?: 'NegotiableQuote'
  /** An array of payment methods that can be applied to the negotiable quote. */
  available_payment_methods?: Maybe<Array<Maybe<GQLAvailablePaymentMethod>>>
  /** The billing address applied to the negotiable quote. */
  billing_address?: Maybe<GQLNegotiableQuoteBillingAddress>
  /** The first and last name of the buyer. */
  buyer: GQLNegotiableQuoteUser
  /** A list of comments made by the buyer and seller. */
  comments?: Maybe<Array<Maybe<GQLNegotiableQuoteComment>>>
  /** Timestamp indicating when the negotiable quote was created. */
  created_at?: Maybe<Scalars['String']>
  /** The email address of the company user. */
  email?: Maybe<Scalars['String']>
  /** A list of status and price changes for the negotiable quote. */
  history?: Maybe<Array<Maybe<GQLNegotiableQuoteHistoryEntry>>>
  /** Indicates whether the negotiable quote contains only virtual products. */
  is_virtual: Scalars['Boolean']
  /** The list of items in the negotiable quote. */
  items?: Maybe<Array<Maybe<GQLCartItemInterface>>>
  /** The title assigned to the negotiable quote. */
  name: Scalars['String']
  /** A set of subtotals and totals applied to the negotiable quote. */
  prices?: Maybe<GQLCartPrices>
  /** The payment method that was applied to the negotiable quote. */
  selected_payment_method?: Maybe<GQLSelectedPaymentMethod>
  /** A list of shipping addresses applied to the negotiable quote. */
  shipping_addresses: Array<Maybe<GQLNegotiableQuoteShippingAddress>>
  /** The status of the negotiable quote. */
  status: GQLNegotiableQuoteStatus
  /** The total number of items in the negotiable quote. */
  total_quantity: Scalars['Float']
  /** The unique ID of a `NegotiableQuote` object. */
  uid: Scalars['ID']
  /** Timestamp indicating when the negotiable quote was updated. */
  updated_at?: Maybe<Scalars['String']>
}

/** Defines the company's country. */
export type GQLNegotiableQuoteAddressCountry = {
  __typename?: 'NegotiableQuoteAddressCountry'
  /** The address country code. */
  code: Scalars['String']
  /** The display name of the region. */
  label: Scalars['String']
}

/** Defines the billing or shipping address to be applied to the cart. */
export type GQLNegotiableQuoteAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']
  /** The company name. */
  company?: Maybe<Scalars['String']>
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']
  /** The first name of the company user. */
  firstname: Scalars['String']
  /** The last name of the company user. */
  lastname: Scalars['String']
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>
  /** A string that defines the state or province of the billing or shipping address. */
  region?: Maybe<Scalars['String']>
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: Maybe<Scalars['Int']>
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: Maybe<Scalars['Boolean']>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>
}

export type GQLNegotiableQuoteAddressInterface = {
  /** The company's city or town. */
  city: Scalars['String']
  /** The company name associated with the shipping/billing address. */
  company?: Maybe<Scalars['String']>
  /** The company's country. */
  country: GQLNegotiableQuoteAddressCountry
  /** The first name of the company user. */
  firstname: Scalars['String']
  /** The last name of the company user. */
  lastname: Scalars['String']
  /** The company's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']>
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<GQLNegotiableQuoteAddressRegion>
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']>>
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']>
}

/** Defines the company's state or province. */
export type GQLNegotiableQuoteAddressRegion = {
  __typename?: 'NegotiableQuoteAddressRegion'
  /** The address region code. */
  code?: Maybe<Scalars['String']>
  /** The display name of the region. */
  label?: Maybe<Scalars['String']>
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>
}

export type GQLNegotiableQuoteBillingAddress =
  GQLNegotiableQuoteAddressInterface & {
    __typename?: 'NegotiableQuoteBillingAddress'
    /** The company's city or town. */
    city: Scalars['String']
    /** The company name associated with the shipping/billing address. */
    company?: Maybe<Scalars['String']>
    /** The company's country. */
    country: GQLNegotiableQuoteAddressCountry
    /** The first name of the company user. */
    firstname: Scalars['String']
    /** The last name of the company user. */
    lastname: Scalars['String']
    /** The company's ZIP or postal code. */
    postcode?: Maybe<Scalars['String']>
    /** An object containing the region name, region code, and region ID. */
    region?: Maybe<GQLNegotiableQuoteAddressRegion>
    /** An array of strings that define the street number and name. */
    street: Array<Maybe<Scalars['String']>>
    /** The customer's telephone number. */
    telephone?: Maybe<Scalars['String']>
  }

/** Defines the billing address. */
export type GQLNegotiableQuoteBillingAddressInput = {
  /** Defines a billing address. */
  address?: Maybe<GQLNegotiableQuoteAddressInput>
  /** The unique ID of a `CustomerAddress` object. */
  customer_address_uid?: Maybe<Scalars['ID']>
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote. */
  same_as_shipping?: Maybe<Scalars['Boolean']>
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: Maybe<Scalars['Boolean']>
}

/** Contains a single plain text comment from either the buyer or seller. */
export type GQLNegotiableQuoteComment = {
  __typename?: 'NegotiableQuoteComment'
  /** The first and last name of the commenter. */
  author: GQLNegotiableQuoteUser
  /** Timestamp indicating when the comment was created. */
  created_at: Scalars['String']
  /** Indicates whether a buyer or seller commented. */
  creator_type: GQLNegotiableQuoteCommentCreatorType
  /** The plain text comment. */
  text: Scalars['String']
  /** The unique ID of a `NegotiableQuoteComment` object. */
  uid: Scalars['ID']
}

export enum GQLNegotiableQuoteCommentCreatorType {
  Buyer = 'BUYER',
  Seller = 'SELLER',
}

/** Contains the commend provided by the buyer. */
export type GQLNegotiableQuoteCommentInput = {
  /** The comment provided by the buyer. */
  comment: Scalars['String']
}

/** Contains custom log entries added by third-party extensions. */
export type GQLNegotiableQuoteCustomLogChange = {
  __typename?: 'NegotiableQuoteCustomLogChange'
  /** The new entry content. */
  new_value: Scalars['String']
  /** The previous entry in the custom log. */
  old_value?: Maybe<Scalars['String']>
  /** The title of the custom log entry. */
  title: Scalars['String']
}

/** Defines a filter to limit the negotiable quotes to return. */
export type GQLNegotiableQuoteFilterInput = {
  /** Filter by the ID of one or more negotiable quotes. */
  ids?: Maybe<GQLFilterEqualTypeInput>
  /** Filter by the negotiable quote name. */
  name?: Maybe<GQLFilterMatchTypeInput>
}

/** Contains a list of changes to a negotiable quote. */
export type GQLNegotiableQuoteHistoryChanges = {
  __typename?: 'NegotiableQuoteHistoryChanges'
  /** The comment provided with a change in the negotiable quote history. */
  comment_added?: Maybe<GQLNegotiableQuoteHistoryCommentChange>
  /** Lists log entries added by third-party extensions. */
  custom_changes?: Maybe<GQLNegotiableQuoteCustomLogChange>
  /** The expiration date of the negotiable quote before and after a change in the quote history. */
  expiration?: Maybe<GQLNegotiableQuoteHistoryExpirationChange>
  /** Lists products that were removed as a result of a change in the quote history. */
  products_removed?: Maybe<GQLNegotiableQuoteHistoryProductsRemovedChange>
  /** The status before and after a change in the negotiable quote history. */
  statuses?: Maybe<GQLNegotiableQuoteHistoryStatusesChange>
  /** The total amount of the negotiable quote before and after a change in the quote history. */
  total?: Maybe<GQLNegotiableQuoteHistoryTotalChange>
}

/** Contains a comment submitted by a seller or buyer. */
export type GQLNegotiableQuoteHistoryCommentChange = {
  __typename?: 'NegotiableQuoteHistoryCommentChange'
  /** A plain text comment submitted by a seller or buyer. */
  comment: Scalars['String']
}

/** Contains details about a change for a negotiable quote. */
export type GQLNegotiableQuoteHistoryEntry = {
  __typename?: 'NegotiableQuoteHistoryEntry'
  /** The person who made a change in the status of the negotiable quote. */
  author: GQLNegotiableQuoteUser
  /** An enum that describes the why the entry in the negotiable quote history changed status. */
  change_type: GQLNegotiableQuoteHistoryEntryChangeType
  /** The set of changes in the negotiable quote. */
  changes?: Maybe<GQLNegotiableQuoteHistoryChanges>
  /** Timestamp indicating when the negotiable quote entry was created. */
  created_at?: Maybe<Scalars['String']>
  /** The unique ID of a `NegotiableQuoteHistoryEntry` object. */
  uid: Scalars['ID']
}

export enum GQLNegotiableQuoteHistoryEntryChangeType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Closed = 'CLOSED',
  UpdatedBySystem = 'UPDATED_BY_SYSTEM',
}

/** Contains a new expiration date and the previous date. */
export type GQLNegotiableQuoteHistoryExpirationChange = {
  __typename?: 'NegotiableQuoteHistoryExpirationChange'
  /** The expiration date after the change. The value will be 'null' if not set. */
  new_expiration?: Maybe<Scalars['String']>
  /** The previous expiration date. The value will be 'null' if not previously set. */
  old_expiration?: Maybe<Scalars['String']>
}

/** Contains lists of products that have been removed from the catalog and negotiable quote. */
export type GQLNegotiableQuoteHistoryProductsRemovedChange = {
  __typename?: 'NegotiableQuoteHistoryProductsRemovedChange'
  /** A list of product IDs the seller removed from the catalog. */
  products_removed_from_catalog?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** A list of products removed from the negotiable quote by either the buyer or the seller. */
  products_removed_from_quote?: Maybe<Array<Maybe<GQLProductInterface>>>
}

/** Lists a new status change applied to a negotiable quote and the previous status. */
export type GQLNegotiableQuoteHistoryStatusChange = {
  __typename?: 'NegotiableQuoteHistoryStatusChange'
  /** The updated status. */
  new_status: GQLNegotiableQuoteStatus
  /** The previous status. The value will be null for the first history entry in a negotiable quote. */
  old_status?: Maybe<GQLNegotiableQuoteStatus>
}

/** Contains a list of status changes that occurred for the negotiable quote. */
export type GQLNegotiableQuoteHistoryStatusesChange = {
  __typename?: 'NegotiableQuoteHistoryStatusesChange'
  /** A list of status changes. */
  changes: Array<Maybe<GQLNegotiableQuoteHistoryStatusChange>>
}

/** Contains a new price and the previous price. */
export type GQLNegotiableQuoteHistoryTotalChange = {
  __typename?: 'NegotiableQuoteHistoryTotalChange'
  /** The total price as a result of the change. */
  new_price?: Maybe<GQLMoney>
  /** The previous total price on the negotiable quote. */
  old_price?: Maybe<GQLMoney>
}

/** An error indicating that an operation was attempted on a negotiable quote in an invalid state. */
export type GQLNegotiableQuoteInvalidStateError = GQLErrorInterface & {
  __typename?: 'NegotiableQuoteInvalidStateError'
  /** The returned error message. */
  message: Scalars['String']
}

/** Specifies the updated quantity of an item. */
export type GQLNegotiableQuoteItemQuantityInput = {
  /** The new quantity of the negotiable quote item. */
  quantity: Scalars['Float']
  /** The unique ID of a `CartItemInterface` object. */
  quote_item_uid: Scalars['ID']
}

/** Defines the payment method to be applied to the negotiable quote. */
export type GQLNegotiableQuotePaymentMethodInput = {
  /** Payment method code */
  code: Scalars['String']
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: Maybe<Scalars['String']>
}

export type GQLNegotiableQuoteShippingAddress =
  GQLNegotiableQuoteAddressInterface & {
    __typename?: 'NegotiableQuoteShippingAddress'
    /** An array of shipping methods available to the buyer. */
    available_shipping_methods?: Maybe<Array<Maybe<GQLAvailableShippingMethod>>>
    /** The company's city or town. */
    city: Scalars['String']
    /** The company name associated with the shipping/billing address. */
    company?: Maybe<Scalars['String']>
    /** The company's country. */
    country: GQLNegotiableQuoteAddressCountry
    /** The first name of the company user. */
    firstname: Scalars['String']
    /** The last name of the company user. */
    lastname: Scalars['String']
    /** The company's ZIP or postal code. */
    postcode?: Maybe<Scalars['String']>
    /** An object containing the region name, region code, and region ID. */
    region?: Maybe<GQLNegotiableQuoteAddressRegion>
    /** The selected shipping method. */
    selected_shipping_method?: Maybe<GQLSelectedShippingMethod>
    /** An array of strings that define the street number and name. */
    street: Array<Maybe<Scalars['String']>>
    /** The customer's telephone number. */
    telephone?: Maybe<Scalars['String']>
  }

/** Defines shipping addresses for the negotiable quote. */
export type GQLNegotiableQuoteShippingAddressInput = {
  /** A shipping address. */
  address?: Maybe<GQLNegotiableQuoteAddressInput>
  /** An ID from the company user's address book that uniquely identifies the address to be used for shipping. */
  customer_address_uid?: Maybe<Scalars['ID']>
  /** Text provided by the company user. */
  customer_notes?: Maybe<Scalars['String']>
}

/** Defines the field to use to sort a list of negotiable quotes. */
export type GQLNegotiableQuoteSortInput = {
  /** Whether to return results in ascending or descending order. */
  sort_direction: GQLSortEnum
  /** The specified sort field. */
  sort_field: GQLNegotiableQuoteSortableField
}

export enum GQLNegotiableQuoteSortableField {
  /** Sorts negotiable quotes by name. */
  QuoteName = 'QUOTE_NAME',
  /** Sorts negotiable quotes by the dates they were created. */
  CreatedAt = 'CREATED_AT',
  /** Sorts negotiable quotes by the dates they were last modified. */
  UpdatedAt = 'UPDATED_AT',
}

export enum GQLNegotiableQuoteStatus {
  Submitted = 'SUBMITTED',
  Pending = 'PENDING',
  Updated = 'UPDATED',
  Open = 'OPEN',
  Ordered = 'ORDERED',
  Closed = 'CLOSED',
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
}

export type GQLNegotiableQuoteUidNonFatalResultInterface = {
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** Contains details about a successful operation on a negotiable quote. */
export type GQLNegotiableQuoteUidOperationSuccess =
  GQLNegotiableQuoteUidNonFatalResultInterface & {
    __typename?: 'NegotiableQuoteUidOperationSuccess'
    /** The unique ID of a `NegotiableQuote` object. */
    quote_uid: Scalars['ID']
  }

/** A limited view of a Buyer or Seller in the negotiable quote process. */
export type GQLNegotiableQuoteUser = {
  __typename?: 'NegotiableQuoteUser'
  /** The first name of the buyer or seller making a change. */
  firstname: Scalars['String']
  /** The buyer's or seller's last name. */
  lastname: Scalars['String']
}

/** Contains a list of negotiable that match the specified filter. */
export type GQLNegotiableQuotesOutput = {
  __typename?: 'NegotiableQuotesOutput'
  /** A list of negotiable quotes */
  items: Array<Maybe<GQLNegotiableQuote>>
  /** Contains pagination metadata */
  page_info: GQLSearchResultPageInfo
  /** Contains the default sort field and all available sort fields. */
  sort_fields?: Maybe<GQLSortFields>
  /** The number of negotiable quotes returned */
  total_count: Scalars['Int']
}

/** Contains an error message when an invalid UID was specified. */
export type GQLNoSuchEntityUidError = GQLErrorInterface & {
  __typename?: 'NoSuchEntityUidError'
  /** The returned error message. */
  message: Scalars['String']
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']
}

export enum GQLObjectDataTypeEnum {
  String = 'STRING',
  Float = 'FLOAT',
  Int = 'INT',
  Boolean = 'BOOLEAN',
  Complex = 'COMPLEX',
}

/** Contains the order ID. */
export type GQLOrder = {
  __typename?: 'Order'
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']>
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']
}

/** Contains detailed information about an order's billing and shipping addresses. */
export type GQLOrderAddress = {
  __typename?: 'OrderAddress'
  /** The city or town. */
  city: Scalars['String']
  /** The customer's company. */
  company?: Maybe<Scalars['String']>
  /** The customer's country. */
  country_code?: Maybe<GQLCountryCodeEnum>
  /** The fax number. */
  fax?: Maybe<Scalars['String']>
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']>
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>
  /** The state or province name. */
  region?: Maybe<Scalars['String']>
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id?: Maybe<Scalars['ID']>
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']>>
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>
  /** The telephone number. */
  telephone?: Maybe<Scalars['String']>
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']>
}

export type GQLOrderItem = GQLOrderItemInterface & {
  __typename?: 'OrderItem'
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>
}

/** Order item details. */
export type GQLOrderItemInterface = {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<GQLOrderItemOption>>>
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>
}

/** Represents order item options like selected or entered. */
export type GQLOrderItemOption = {
  __typename?: 'OrderItemOption'
  /** The name of the option. */
  label: Scalars['String']
  /** The value of the option. */
  value: Scalars['String']
}

/** Contains details about the payment method used to pay for the order. */
export type GQLOrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod'
  /** Additional data per payment method type. */
  additional_data?: Maybe<Array<Maybe<GQLKeyValue>>>
  /** The label that describes the payment method. */
  name: Scalars['String']
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']
}

/** Contains order shipment details. */
export type GQLOrderShipment = {
  __typename?: 'OrderShipment'
  /** Comments added to the shipment. */
  comments?: Maybe<Array<Maybe<GQLSalesCommentItem>>>
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']
  /** An array of items included in the shipment. */
  items?: Maybe<Array<Maybe<GQLShipmentItemInterface>>>
  /** The sequential credit shipment number. */
  number: Scalars['String']
  /** An array of shipment tracking details. */
  tracking?: Maybe<Array<Maybe<GQLShipmentTracking>>>
}

/** Contains details about the sales total amounts used to calculate the final price. */
export type GQLOrderTotal = {
  __typename?: 'OrderTotal'
  /** The final base grand total amount in the base currency. */
  base_grand_total: GQLMoney
  /** The applied discounts to the order. */
  discounts?: Maybe<Array<Maybe<GQLDiscount>>>
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: GQLMoney
  /** Details about the shipping and handling costs for the order. */
  shipping_handling?: Maybe<GQLShippingHandling>
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: GQLMoney
  /** The order tax details. */
  taxes?: Maybe<Array<Maybe<GQLTaxItem>>>
  /** The gift card balance applied to the order. */
  total_giftcard?: Maybe<GQLMoney>
  /** The shipping amount for the order. */
  total_shipping: GQLMoney
  /** The amount of tax applied to the order. */
  total_tax: GQLMoney
}

/** Contains required input for Payflow Express Checkout payments. */
export type GQLPayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String']
}

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type GQLPayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']
}

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export enum GQLPayflowLinkMode {
  Test = 'TEST',
  Live = 'LIVE',
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type GQLPayflowLinkToken = {
  __typename?: 'PayflowLinkToken'
  /** The mode for the Payflow transaction. */
  mode?: Maybe<GQLPayflowLinkMode>
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url?: Maybe<Scalars['String']>
  /** The secure token generated by PayPal. */
  secure_token?: Maybe<Scalars['String']>
  /** The secure token ID generated by PayPal. */
  secure_token_id?: Maybe<Scalars['String']>
}

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type GQLPayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']
}

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type GQLPayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: GQLCreditCardDetailsInput
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: Maybe<Scalars['Boolean']>
}

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type GQLPayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']
}

export type GQLPayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput'
  /** The cart with the updated selected payment method. */
  cart: GQLCart
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type GQLPayflowProToken = {
  __typename?: 'PayflowProToken'
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']
}

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type GQLPayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']
  /** A set of relative URLs that PayPal uses for callback. */
  urls: GQLPayflowProUrlInput
}

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type GQLPayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']
}

/** Defines the payment method. */
export type GQLPaymentMethodInput = {
  braintree?: Maybe<GQLBraintreeInput>
  braintree_cc_vault?: Maybe<GQLBraintreeCcVaultInput>
  /** The internal name for the payment method. */
  code: Scalars['String']
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: Maybe<GQLHostedProInput>
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: Maybe<GQLPayflowExpressInput>
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: Maybe<GQLPayflowLinkInput>
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: Maybe<GQLPayflowProInput>
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: Maybe<GQLVaultTokenInput>
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: Maybe<GQLPaypalExpressInput>
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: Maybe<Scalars['String']>
}

/** The stored payment method available to the customer. */
export type GQLPaymentToken = {
  __typename?: 'PaymentToken'
  /** A description of the stored account details. */
  details?: Maybe<Scalars['String']>
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']
  /** The public hash of the token. */
  public_hash: Scalars['String']
  /** Specifies the payment token type. */
  type: GQLPaymentTokenTypeEnum
}

/** The list of available payment token types. */
export enum GQLPaymentTokenTypeEnum {
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  Card = 'card',
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  Account = 'account',
}

/** Contains required input for Express Checkout and Payments Standard payments. */
export type GQLPaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']
}

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type GQLPaypalExpressToken = {
  __typename?: 'PaypalExpressToken'
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls?: Maybe<GQLPaypalExpressUrlList>
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token?: Maybe<Scalars['String']>
}

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type GQLPaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']
  /** The payment method code. */
  code: Scalars['String']
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: Maybe<Scalars['Boolean']>
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: GQLPaypalExpressUrlsInput
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: Maybe<Scalars['Boolean']>
}

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type GQLPaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput'
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls?: Maybe<GQLPaypalExpressUrlList>
  /** The token returned by PayPal. */
  token?: Maybe<Scalars['String']>
}

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type GQLPaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList'
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit?: Maybe<Scalars['String']>
  /** The URL to the PayPal login page. */
  start?: Maybe<Scalars['String']>
}

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type GQLPaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: Maybe<Scalars['String']>
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: Maybe<Scalars['String']>
}

/** Contains attributes specific to tangible products. */
export type GQLPhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>
}

/** Defines Pickup Location information. */
export type GQLPickupLocation = {
  __typename?: 'PickupLocation'
  city?: Maybe<Scalars['String']>
  contact_name?: Maybe<Scalars['String']>
  country_id?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  pickup_location_code?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['Int']>
  street?: Maybe<Scalars['String']>
}

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type GQLPickupLocationFilterInput = {
  /** Filter by city. */
  city?: Maybe<GQLFilterTypeInput>
  /** Filter by country. */
  country_id?: Maybe<GQLFilterTypeInput>
  /** Filter by pickup location name. */
  name?: Maybe<GQLFilterTypeInput>
  /** Filter by pickup location code. */
  pickup_location_code?: Maybe<GQLFilterTypeInput>
  /** Filter by postcode. */
  postcode?: Maybe<GQLFilterTypeInput>
  /** Filter by region. */
  region?: Maybe<GQLFilterTypeInput>
  /** Filter by region id. */
  region_id?: Maybe<GQLFilterTypeInput>
  /** Filter by street. */
  street?: Maybe<GQLFilterTypeInput>
}

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type GQLPickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: Maybe<GQLSortEnum>
  /** Name of the contact person. */
  contact_name?: Maybe<GQLSortEnum>
  /** Id of the country in two letters. */
  country_id?: Maybe<GQLSortEnum>
  /** Description of the pickup location. */
  description?: Maybe<GQLSortEnum>
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: Maybe<GQLSortEnum>
  /** Contact email of the pickup location. */
  email?: Maybe<GQLSortEnum>
  /** Contact fax of the pickup location. */
  fax?: Maybe<GQLSortEnum>
  /** Geographic latitude where pickup location is placed. */
  latitude?: Maybe<GQLSortEnum>
  /** Geographic longitude where pickup location is placed. */
  longitude?: Maybe<GQLSortEnum>
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: Maybe<GQLSortEnum>
  /** Contact phone number of the pickup location. */
  phone?: Maybe<GQLSortEnum>
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: Maybe<GQLSortEnum>
  /** Postcode where pickup location is placed. */
  postcode?: Maybe<GQLSortEnum>
  /** Name of the region. */
  region?: Maybe<GQLSortEnum>
  /** Id of the region. */
  region_id?: Maybe<GQLSortEnum>
  /** Street where pickup location is placed. */
  street?: Maybe<GQLSortEnum>
}

/** Top level object returned in a pickup locations search. */
export type GQLPickupLocations = {
  __typename?: 'PickupLocations'
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<GQLPickupLocation>>>
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>
}

/** Specifies the negotiable quote to convert to an order. */
export type GQLPlaceNegotiableQuoteOrderInput = {
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** An output object that returns the generated order. */
export type GQLPlaceNegotiableQuoteOrderOutput = {
  __typename?: 'PlaceNegotiableQuoteOrderOutput'
  /** Contains the generated order number. */
  order: GQLOrder
}

/** Specifies the quote to be converted to an order. */
export type GQLPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
}

/** Contains the results of the request to place an order. */
export type GQLPlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput'
  /** The ID of the order. */
  order: GQLOrder
}

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type GQLPrice = {
  __typename?: 'Price'
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments?: Maybe<Array<Maybe<GQLPriceAdjustment>>>
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount?: Maybe<GQLMoney>
}

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type GQLPriceAdjustment = {
  __typename?: 'PriceAdjustment'
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<GQLMoney>
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code?: Maybe<GQLPriceAdjustmentCodesEnum>
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description?: Maybe<GQLPriceAdjustmentDescriptionEnum>
}

/** `PriceAdjustment.code` is deprecated. */
export enum GQLPriceAdjustmentCodesEnum {
  Tax = 'TAX',
  Weee = 'WEEE',
  WeeeTax = 'WEEE_TAX',
}

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export enum GQLPriceAdjustmentDescriptionEnum {
  Included = 'INCLUDED',
  Excluded = 'EXCLUDED',
}

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type GQLPriceRange = {
  __typename?: 'PriceRange'
  /** The highest possible price for the product. */
  maximum_price?: Maybe<GQLProductPrice>
  /** The lowest possible price for the product. */
  minimum_price: GQLProductPrice
}

/** Defines the price type. */
export enum GQLPriceTypeEnum {
  Fixed = 'FIXED',
  Percent = 'PERCENT',
  Dynamic = 'DYNAMIC',
}

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum GQLPriceViewEnum {
  PriceRange = 'PRICE_RANGE',
  AsLowAs = 'AS_LOW_AS',
}

/** Contains a product attribute code and value. */
export type GQLProductAttribute = {
  __typename?: 'ProductAttribute'
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']
  /** The display value of the attribute. */
  value: Scalars['String']
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type GQLProductAttributeFilterInput = {
  /** Attribute label: Brand */
  accessory_brand?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Gemstone Addon */
  accessory_gemstone_addon?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Recyclable Material */
  accessory_recyclable_material?: Maybe<GQLFilterEqualTypeInput>
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: Maybe<GQLFilterEqualTypeInput>
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Color */
  color?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Description */
  description?: Maybe<GQLFilterMatchTypeInput>
  /** Attribute label: Color */
  fashion_color?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Material */
  fashion_material?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Style */
  fashion_style?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Format */
  format?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Has Video */
  has_video?: Maybe<GQLFilterEqualTypeInput>
  /** Attribute label: Product Name */
  name?: Maybe<GQLFilterMatchTypeInput>
  /** Attribute label: Price */
  price?: Maybe<GQLFilterRangeTypeInput>
  /** Attribute label: Short Description */
  short_description?: Maybe<GQLFilterMatchTypeInput>
  /** Attribute label: SKU */
  sku?: Maybe<GQLFilterEqualTypeInput>
  /** The part of the URL that identifies the product */
  url_key?: Maybe<GQLFilterEqualTypeInput>
}

export type GQLProductAttributeMetadata = GQLAttributeMetadataInterface & {
  __typename?: 'ProductAttributeMetadata'
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<GQLStoreLabels>>>
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>
  /** The data type of the attribute. */
  data_type?: Maybe<GQLObjectDataTypeEnum>
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<GQLAttributeEntityTypeEnum>
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<GQLUiInputTypeInterface>
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>
  /** Places in the store front where the attribute is used. */
  used_in_components?: Maybe<Array<Maybe<GQLCustomAttributesListsEnum>>>
}

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type GQLProductAttributeSortInput = {
  /** Attribute label: Brand */
  accessory_brand?: Maybe<GQLSortEnum>
  /** Attribute label: Product Name */
  name?: Maybe<GQLSortEnum>
  /** Sort by the position assigned to each product. */
  position?: Maybe<GQLSortEnum>
  /** Attribute label: Price */
  price?: Maybe<GQLSortEnum>
  /** Sort by the search relevance score (default). */
  relevance?: Maybe<GQLSortEnum>
}

/** Contains the discount applied to a product price. */
export type GQLProductDiscount = {
  __typename?: 'ProductDiscount'
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']>
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']>
}

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type GQLProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: Maybe<GQLFilterTypeInput>
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<GQLFilterTypeInput>
  /** The timestamp indicating when the product was created. */
  created_at?: Maybe<GQLFilterTypeInput>
  /** The name of a custom layout. */
  custom_layout?: Maybe<GQLFilterTypeInput>
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: Maybe<GQLFilterTypeInput>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<GQLFilterTypeInput>
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<GQLFilterTypeInput>
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: Maybe<GQLFilterTypeInput>
  /** The relative path to the main image on the product page. */
  image?: Maybe<GQLFilterTypeInput>
  /** The label assigned to a product image. */
  image_label?: Maybe<GQLFilterTypeInput>
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<GQLFilterTypeInput>
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<GQLFilterTypeInput>
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: Maybe<GQLFilterTypeInput>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<GQLFilterTypeInput>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<GQLFilterTypeInput>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<GQLFilterTypeInput>
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: Maybe<GQLFilterTypeInput>
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<GQLFilterTypeInput>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: Maybe<GQLFilterTypeInput>
  /** The end date for new product listings. */
  news_to_date?: Maybe<GQLFilterTypeInput>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<GQLFilterTypeInput>
  /** The keyword required to perform a logical OR comparison. */
  or?: Maybe<GQLProductFilterInput>
  /** The price of an item. */
  price?: Maybe<GQLFilterTypeInput>
  /** Indicates whether the product has required options. */
  required_options?: Maybe<GQLFilterTypeInput>
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<GQLFilterTypeInput>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<GQLFilterTypeInput>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<GQLFilterTypeInput>
  /** The label assigned to a product's small image. */
  small_image_label?: Maybe<GQLFilterTypeInput>
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<GQLFilterTypeInput>
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: Maybe<GQLFilterTypeInput>
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<GQLFilterTypeInput>
  /** The file name of a swatch image. */
  swatch_image?: Maybe<GQLFilterTypeInput>
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<GQLFilterTypeInput>
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: Maybe<GQLFilterTypeInput>
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: Maybe<GQLFilterTypeInput>
  /** The timestamp indicating when the product was updated. */
  updated_at?: Maybe<GQLFilterTypeInput>
  /** The part of the URL that identifies the product */
  url_key?: Maybe<GQLFilterTypeInput>
  url_path?: Maybe<GQLFilterTypeInput>
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<GQLFilterTypeInput>
}

/** Contains product image information, including the image URL and label. */
export type GQLProductImage = GQLMediaGalleryInterface & {
  __typename?: 'ProductImage'
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>
}

/** Product Information used for Pickup Locations search. */
export type GQLProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String']
}

/** Contains fields that are common to all types of products. */
export type GQLProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_announcement_date?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_brand?: Maybe<Scalars['Int']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_custom_engraving_text?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_description_detailed_extra?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_description_extra?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_gemstone_addon?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_recyclable_material?: Maybe<Scalars['Int']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']>
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<GQLCustomAttribute>>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<GQLComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  description_extra?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_color?: Maybe<Scalars['Int']>
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_material?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_style?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  has_video?: Maybe<Scalars['Int']>
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>
  /** The relative path to the main image on the product page. */
  image?: Maybe<GQLProductImage>
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<GQLProductPrices>
  /** The range of prices for the product */
  price_range: GQLPriceRange
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']
  /** The list of products reviews. */
  reviews: GQLProductReviews
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<GQLComplexTextValue>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<GQLProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']
  /** Stock status of the product */
  stock_status?: Maybe<GQLProductStockStatus>
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<GQLProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>
  /** @deprecated Use the `custom_attributes` field instead. */
  video_file?: Maybe<Scalars['String']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<GQLWebsite>>>
}

/** Contains fields that are common to all types of products. */
export type GQLProductInterfaceReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** An implementation of `ProductLinksInterface`. */
export type GQLProductLinks = GQLProductLinksInterface & {
  __typename?: 'ProductLinks'
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>
}

/** Contains information about linked products, including the link type and product type of each item. */
export type GQLProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>
}

/** Contains an image in base64 format and basic information about the image. */
export type GQLProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent'
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>
}

/** Contains a link to a video file and basic information about the video. */
export type GQLProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent'
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']>
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']>
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']>
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']>
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']>
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']>
}

/** Represents a product price. */
export type GQLProductPrice = {
  __typename?: 'ProductPrice'
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<GQLProductDiscount>
  /** The final price of the product after applying discounts. */
  final_price: GQLMoney
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<GQLFixedProductTax>>>
  /** The regular price of the product. */
  regular_price: GQLMoney
}

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type GQLProductPrices = {
  __typename?: 'ProductPrices'
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice?: Maybe<GQLPrice>
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice?: Maybe<GQLPrice>
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice?: Maybe<GQLPrice>
}

/** Contains details of a product review. */
export type GQLProductReview = {
  __typename?: 'ProductReview'
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']
  /** The date the review was created. */
  created_at: Scalars['String']
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']
  /** The reviewed product. */
  product: GQLProductInterface
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<GQLProductReviewRating>>
  /** The summary (title) of the review. */
  summary: Scalars['String']
  /** The review text. */
  text: Scalars['String']
}

/** Contains data about a single aspect of a product review. */
export type GQLProductReviewRating = {
  __typename?: 'ProductReviewRating'
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']
}

/** Contains the reviewer's rating for a single aspect of a review. */
export type GQLProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']
  /** An encoded rating value ID. */
  value_id: Scalars['String']
}

/** Contains details about a single aspect of a product review. */
export type GQLProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata'
  /** An encoded rating ID. */
  id: Scalars['String']
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<GQLProductReviewRatingValueMetadata>>
}

/** Contains details about a single value in a product review. */
export type GQLProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata'
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']
  /** An encoded rating value ID. */
  value_id: Scalars['String']
}

/** Contains an array of metadata about each aspect of a product review. */
export type GQLProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata'
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<GQLProductReviewRatingMetadata>>
}

/** Contains an array of product reviews. */
export type GQLProductReviews = {
  __typename?: 'ProductReviews'
  /** An array of product reviews. */
  items: Array<Maybe<GQLProductReview>>
  /** Metadata for pagination rendering. */
  page_info: GQLSearchResultPageInfo
}

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type GQLProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<GQLSortEnum>
  /** The timestamp indicating when the product was created. */
  created_at?: Maybe<GQLSortEnum>
  /** The name of a custom layout. */
  custom_layout?: Maybe<GQLSortEnum>
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: Maybe<GQLSortEnum>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<GQLSortEnum>
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<GQLSortEnum>
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: Maybe<GQLSortEnum>
  /** The relative path to the main image on the product page. */
  image?: Maybe<GQLSortEnum>
  /** The label assigned to a product image. */
  image_label?: Maybe<GQLSortEnum>
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<GQLSortEnum>
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<GQLSortEnum>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<GQLSortEnum>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<GQLSortEnum>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<GQLSortEnum>
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<GQLSortEnum>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: Maybe<GQLSortEnum>
  /** The end date for new product listings. */
  news_to_date?: Maybe<GQLSortEnum>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<GQLSortEnum>
  /** The price of the item. */
  price?: Maybe<GQLSortEnum>
  /** Indicates whether the product has required options. */
  required_options?: Maybe<GQLSortEnum>
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<GQLSortEnum>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<GQLSortEnum>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<GQLSortEnum>
  /** The label assigned to a product's small image. */
  small_image_label?: Maybe<GQLSortEnum>
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<GQLSortEnum>
  /** The discounted price of the product. */
  special_price?: Maybe<GQLSortEnum>
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<GQLSortEnum>
  /** Indicates the criteria to sort swatches. */
  swatch_image?: Maybe<GQLSortEnum>
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<GQLSortEnum>
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: Maybe<GQLSortEnum>
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: Maybe<GQLSortEnum>
  /** The timestamp indicating when the product was updated. */
  updated_at?: Maybe<GQLSortEnum>
  /** The part of the URL that identifies the product */
  url_key?: Maybe<GQLSortEnum>
  url_path?: Maybe<GQLSortEnum>
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<GQLSortEnum>
}

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum GQLProductStockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK',
}

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type GQLProductTierPrices = {
  __typename?: 'ProductTierPrices'
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id?: Maybe<Scalars['String']>
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value?: Maybe<Scalars['Float']>
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value?: Maybe<Scalars['Float']>
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id?: Maybe<Scalars['Float']>
}

/** Contains information about a product video. */
export type GQLProductVideo = GQLMediaGalleryInterface & {
  __typename?: 'ProductVideo'
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content?: Maybe<GQLProductMediaGalleryEntriesVideoContent>
}

/** Contains the results of a `products` query. */
export type GQLProducts = {
  __typename?: 'Products'
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations?: Maybe<Array<Maybe<GQLAggregation>>>
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters?: Maybe<Array<Maybe<GQLLayerFilter>>>
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<GQLProductInterface>>>
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<GQLSortFields>
  /** An array of search suggestions for case when search query have no results. */
  suggestions?: Maybe<Array<Maybe<GQLSearchSuggestion>>>
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>
}

/** Contains the results of a `products` query. */
export type GQLProductsAggregationsArgs = {
  filter?: Maybe<GQLAggregationsFilterInput>
}

export type GQLQuery = {
  __typename?: 'Query'
  /** Return details about custom EAV attributes, and optionally, system attributes. */
  attributesMetadata?: Maybe<GQLAttributesMetadata>
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<GQLStoreConfig>>>
  /** Return information about the specified shopping cart. */
  cart?: Maybe<GQLCart>
  /** Return a list of categories that match the specified filter. */
  categories?: Maybe<GQLCategoryResult>
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categoryList` instead.
   */
  category?: Maybe<GQLCategoryTree>
  /** Return an array of categories based on the specified filters. */
  categoryList?: Maybe<Array<Maybe<GQLCategoryTree>>>
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements?: Maybe<Array<Maybe<GQLCheckoutAgreement>>>
  /** Return information about CMS blocks. */
  cmsBlocks?: Maybe<GQLCmsBlocks>
  /** Return details about a CMS page. */
  cmsPage?: Maybe<GQLCmsPage>
  /** Return detailed information about the authenticated customer's company. */
  company?: Maybe<GQLCompany>
  /** Return products that have been added to the specified compare list. */
  compareList?: Maybe<GQLCompareList>
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<GQLCountry>>>
  /** The countries query provides information for a single country. */
  country?: Maybe<GQLCountry>
  /** Return information about the store's currency. */
  currency?: Maybe<GQLCurrency>
  /** Return the attribute type, given an attribute code and entity type. */
  customAttributeMetadata?: Maybe<GQLCustomAttributeMetadata>
  /** Return detailed information about a customer account. */
  customer?: Maybe<GQLCustomer>
  /** Return information about the customer's shopping cart. */
  customerCart: GQLCart
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts?: Maybe<GQLCustomerDownloadableProducts>
  /** @deprecated Use the `customer` query instead. */
  customerOrders?: Maybe<GQLCustomerOrders>
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens?: Maybe<GQLCustomerPaymentTokens>
  /** Return a list of dynamic blocks filtered by type, location, or UIDs. */
  dynamicBlocks: GQLDynamicBlocks
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<GQLHostedProUrl>
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<GQLPayflowLinkToken>
  /** Return details about a specific gift card. */
  giftCardAccount?: Maybe<GQLGiftCardAccount>
  /** Return the specified gift registry. Some details will not be available to guests. */
  giftRegistry?: Maybe<GQLGiftRegistry>
  /** Search for gift registries by specifying a registrant email address. */
  giftRegistryEmailSearch?: Maybe<Array<Maybe<GQLGiftRegistrySearchResult>>>
  /** Search for gift registries by specifying a registry URL key. */
  giftRegistryIdSearch?: Maybe<Array<Maybe<GQLGiftRegistrySearchResult>>>
  /** Search for gift registries by specifying the registrant name and registry type ID. */
  giftRegistryTypeSearch?: Maybe<Array<Maybe<GQLGiftRegistrySearchResult>>>
  /** Get a list of available gift registry types. */
  giftRegistryTypes?: Maybe<Array<Maybe<GQLGiftRegistryType>>>
  /** Check whether the specified email can be used to register a company admin. */
  isCompanyAdminEmailAvailable?: Maybe<GQLIsCompanyAdminEmailAvailableOutput>
  /** Check whether the specified email can be used to register a new company. */
  isCompanyEmailAvailable?: Maybe<GQLIsCompanyEmailAvailableOutput>
  /** Check whether the specified role name is valid for the company. */
  isCompanyRoleNameAvailable?: Maybe<GQLIsCompanyRoleNameAvailableOutput>
  /** Check whether the specified email can be used to register a company user. */
  isCompanyUserEmailAvailable?: Maybe<GQLIsCompanyUserEmailAvailableOutput>
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable?: Maybe<GQLIsEmailAvailableOutput>
  /** Retrieve the specified negotiable quote. */
  negotiableQuote?: Maybe<GQLNegotiableQuote>
  /** Return a list of negotiable quotes that can be viewed by the logged-in customer. */
  negotiableQuotes?: Maybe<GQLNegotiableQuotesOutput>
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<GQLPickupLocations>
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: GQLProductReviewRatingsMetadata
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products?: Maybe<GQLProducts>
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. */
  recaptchaV3Config?: Maybe<GQLReCaptchaConfigurationV3>
  /** Return the full details for a specified product, category, or CMS page. */
  route?: Maybe<GQLRoutableInterface>
  /** Return details about the store's configuration. */
  storeConfig?: Maybe<GQLStoreConfig>
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver?: Maybe<GQLEntityUrl>
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist?: Maybe<GQLWishlistOutput>
}

export type GQLQueryAttributesMetadataArgs = {
  entityType: GQLAttributeEntityTypeEnum
  attributeUids?: Maybe<Array<Scalars['ID']>>
  showSystemAttributes?: Maybe<Scalars['Boolean']>
}

export type GQLQueryAvailableStoresArgs = {
  useCurrentGroup?: Maybe<Scalars['Boolean']>
}

export type GQLQueryCartArgs = {
  cart_id: Scalars['String']
}

export type GQLQueryCategoriesArgs = {
  filters?: Maybe<GQLCategoryFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type GQLQueryCategoryArgs = {
  id?: Maybe<Scalars['Int']>
}

export type GQLQueryCategoryListArgs = {
  filters?: Maybe<GQLCategoryFilterInput>
}

export type GQLQueryCmsBlocksArgs = {
  identifiers?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type GQLQueryCmsPageArgs = {
  id?: Maybe<Scalars['Int']>
  identifier?: Maybe<Scalars['String']>
}

export type GQLQueryCompareListArgs = {
  uid: Scalars['ID']
}

export type GQLQueryCountryArgs = {
  id?: Maybe<Scalars['String']>
}

export type GQLQueryCustomAttributeMetadataArgs = {
  attributes: Array<GQLAttributeInput>
}

export type GQLQueryDynamicBlocksArgs = {
  input?: Maybe<GQLDynamicBlocksFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type GQLQueryGetHostedProUrlArgs = {
  input: GQLHostedProUrlInput
}

export type GQLQueryGetPayflowLinkTokenArgs = {
  input: GQLPayflowLinkTokenInput
}

export type GQLQueryGiftCardAccountArgs = {
  input: GQLGiftCardAccountInput
}

export type GQLQueryGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID']
}

export type GQLQueryGiftRegistryEmailSearchArgs = {
  email: Scalars['String']
}

export type GQLQueryGiftRegistryIdSearchArgs = {
  giftRegistryUid: Scalars['ID']
}

export type GQLQueryGiftRegistryTypeSearchArgs = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  giftRegistryTypeUid?: Maybe<Scalars['ID']>
}

export type GQLQueryIsCompanyAdminEmailAvailableArgs = {
  email: Scalars['String']
}

export type GQLQueryIsCompanyEmailAvailableArgs = {
  email: Scalars['String']
}

export type GQLQueryIsCompanyRoleNameAvailableArgs = {
  name: Scalars['String']
}

export type GQLQueryIsCompanyUserEmailAvailableArgs = {
  email: Scalars['String']
}

export type GQLQueryIsEmailAvailableArgs = {
  email: Scalars['String']
}

export type GQLQueryNegotiableQuoteArgs = {
  uid: Scalars['ID']
}

export type GQLQueryNegotiableQuotesArgs = {
  filter?: Maybe<GQLNegotiableQuoteFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<GQLNegotiableQuoteSortInput>
}

export type GQLQueryPickupLocationsArgs = {
  area?: Maybe<GQLAreaInput>
  filters?: Maybe<GQLPickupLocationFilterInput>
  sort?: Maybe<GQLPickupLocationSortInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  productsInfo?: Maybe<Array<Maybe<GQLProductInfoInput>>>
}

export type GQLQueryProductsArgs = {
  search?: Maybe<Scalars['String']>
  filter?: Maybe<GQLProductAttributeFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<GQLProductAttributeSortInput>
}

export type GQLQueryRouteArgs = {
  url: Scalars['String']
}

export type GQLQueryUrlResolverArgs = {
  url: Scalars['String']
}

/** Contains reCAPTCHA V3-Invisible configuration details. */
export type GQLReCaptchaConfigurationV3 = {
  __typename?: 'ReCaptchaConfigurationV3'
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Scalars['String']
  /** The message that appears to the user if validation fails. */
  failure_message: Scalars['String']
  /** A list of forms on the storefront that have been configured to use reCAPTCHA V3. */
  forms: Array<Maybe<GQLReCaptchaFormEnum>>
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code?: Maybe<Scalars['String']>
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Scalars['Float']
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String']
}

export enum GQLReCaptchaFormEnum {
  PlaceOrder = 'PLACE_ORDER',
  Contact = 'CONTACT',
  CustomerLogin = 'CUSTOMER_LOGIN',
  CustomerForgotPassword = 'CUSTOMER_FORGOT_PASSWORD',
  CustomerCreate = 'CUSTOMER_CREATE',
  CustomerEdit = 'CUSTOMER_EDIT',
  Newsletter = 'NEWSLETTER',
  ProductReview = 'PRODUCT_REVIEW',
  Sendfriend = 'SENDFRIEND',
  Braintree = 'BRAINTREE',
}

export type GQLRegion = {
  __typename?: 'Region'
  /** The two-letter code for the region, such as TX for Texas. */
  code?: Maybe<Scalars['String']>
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']>
  /** The name of the region, such as Texas. */
  name?: Maybe<Scalars['String']>
}

/** Specifies the cart from which to remove a coupon. */
export type GQLRemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
}

/** Contains details about the cart after removing a coupon. */
export type GQLRemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput'
  /** The cart after removing a coupon. */
  cart?: Maybe<GQLCart>
}

/** Defines the input required to run the `removeGiftCardFromCart` mutation. */
export type GQLRemoveGiftCardFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']
  /** The gift card code to be removed to the cart. */
  gift_card_code: Scalars['String']
}

/** Defines the possible output for the `removeGiftCardFromCart` mutation. */
export type GQLRemoveGiftCardFromCartOutput = {
  __typename?: 'RemoveGiftCardFromCartOutput'
  /** The contents of the specified shopping cart. */
  cart: GQLCart
}

/** Contains the results of a request to remove an item from a gift registry. */
export type GQLRemoveGiftRegistryItemsOutput = {
  __typename?: 'RemoveGiftRegistryItemsOutput'
  /** The gift registry after removing items. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Contains the results of a request to delete a gift registry. */
export type GQLRemoveGiftRegistryOutput = {
  __typename?: 'RemoveGiftRegistryOutput'
  /** Indicates whether the gift registry was successfully deleted. */
  success: Scalars['Boolean']
}

/** Contains the results of a request to delete a registrant. */
export type GQLRemoveGiftRegistryRegistrantsOutput = {
  __typename?: 'RemoveGiftRegistryRegistrantsOutput'
  /** The gift registry after deleting registrants. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Specifies which items to remove from the cart. */
export type GQLRemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: Maybe<Scalars['Int']>
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: Maybe<Scalars['ID']>
}

/** Contains details about the cart after removing an item. */
export type GQLRemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput'
  /** The cart after removing an item. */
  cart: GQLCart
}

/** Defines the items to remove from the specified negotiable quote. */
export type GQLRemoveNegotiableQuoteItemsInput = {
  /** An array of IDs indicating which items to remove from the negotiable quote. */
  quote_item_uids: Array<Maybe<Scalars['ID']>>
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** Contains the negotiable quote. */
export type GQLRemoveNegotiableQuoteItemsOutput = {
  __typename?: 'RemoveNegotiableQuoteItemsOutput'
  /** The negotiable quote after removing items. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Defines which products to remove from a compare list. */
export type GQLRemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<Maybe<Scalars['ID']>>
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']
}

/** Contains the customer's wish list and any errors encountered. */
export type GQLRemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput'
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<GQLWishListUserInputError>>
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: GQLWishlist
}

/** Defines the tracking information to delete. */
export type GQLRemoveReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingTracking` object. */
  return_shipping_tracking_uid: Scalars['ID']
}

/** Contains the response after deleting tracking information. */
export type GQLRemoveReturnTrackingOutput = {
  __typename?: 'RemoveReturnTrackingOutput'
  /** Contains details about the modified return. */
  return?: Maybe<GQLReturn>
}

/** Contains the customer cart. */
export type GQLRemoveRewardPointsFromCartOutput = {
  __typename?: 'RemoveRewardPointsFromCartOutput'
  /** The customer cart after reward points are removed. */
  cart: GQLCart
}

/** Defines the input required to run the `removeStoreCreditFromCart` mutation. */
export type GQLRemoveStoreCreditFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']
}

/** Defines the possible output for the `removeStoreCreditFromCart` mutation. */
export type GQLRemoveStoreCreditFromCartOutput = {
  __typename?: 'RemoveStoreCreditFromCartOutput'
  /** The contents of the specified shopping cart. */
  cart: GQLCart
}

/** Contains the cart and any errors after adding products. */
export type GQLReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput'
  /** Detailed information about the customer's cart. */
  cart: GQLCart
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<GQLCheckoutUserInputError>>
}

/** Defines properties of a negotiable quote request. */
export type GQLRequestNegotiableQuoteInput = {
  /** The cart ID of the buyer requesting a new negotiable quote. */
  cart_id: Scalars['ID']
  /** Comments the buyer entered to describe the request. */
  comment: GQLNegotiableQuoteCommentInput
  /** The name the buyer assigned to the negotiable quote request. */
  quote_name: Scalars['String']
}

/** Contains the `NegotiableQuote` object generated when a buyer requests a negotiable quote. */
export type GQLRequestNegotiableQuoteOutput = {
  __typename?: 'RequestNegotiableQuoteOutput'
  /** Details about the negotiable quote. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Contains information needed to start a return request. */
export type GQLRequestReturnInput = {
  /** Text the buyer entered that describes the reason for the refund request. */
  comment_text?: Maybe<Scalars['String']>
  /** The email address the buyer enters to receive notifications about the status of the return. */
  contact_email?: Maybe<Scalars['String']>
  /** An array of items to be returned. */
  items: Array<Maybe<GQLRequestReturnItemInput>>
  /** The unique ID for a `Order` object. */
  order_uid: Scalars['ID']
}

/** Contains details about an item to be returned. */
export type GQLRequestReturnItemInput = {
  /** Details about a custom attribute that was entered. */
  entered_custom_attributes?: Maybe<
    Array<Maybe<GQLEnteredCustomAttributeInput>>
  >
  /** The unique ID for a `OrderItemInterface` object. */
  order_item_uid: Scalars['ID']
  /** The quantity of the item to be returned. */
  quantity_to_return: Scalars['Float']
  /** An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product. */
  selected_custom_attributes?: Maybe<
    Array<Maybe<GQLSelectedCustomAttributeInput>>
  >
}

/** Contains the response to a return request. */
export type GQLRequestReturnOutput = {
  __typename?: 'RequestReturnOutput'
  /** Details about a single return request. */
  return?: Maybe<GQLReturn>
  /** An array of return requests. */
  returns?: Maybe<GQLReturns>
}

/** Contains the response to a return request. */
export type GQLRequestReturnOutputReturnsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines the contents of a requisition list. */
export type GQLRequisitionList = {
  __typename?: 'RequisitionList'
  /** Optional text that describes the requisition list. */
  description?: Maybe<Scalars['String']>
  /** An array of products added to the requisition list. */
  items?: Maybe<GQLRequistionListItems>
  /** The number of items in the list. */
  items_count: Scalars['Int']
  /** The requisition list name. */
  name: Scalars['String']
  /** The unique requisition list ID. */
  uid: Scalars['ID']
  /** The time of the last modification of the requisition list. */
  updated_at?: Maybe<Scalars['String']>
}

/** Defines the contents of a requisition list. */
export type GQLRequisitionListItemsArgs = {
  currentPage?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

/** Defines requisition list filters. */
export type GQLRequisitionListFilterInput = {
  /** Filter by the display name of the requisition list. */
  name?: Maybe<GQLFilterMatchTypeInput>
  /** Filter requisition lists by one or more requisition list IDs. */
  uids?: Maybe<GQLFilterEqualTypeInput>
}

/** The interface for requisition list items. */
export type GQLRequisitionListItemInterface = {
  /** Selected custom options for an item in the requisition list. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** Details about a requisition list item. */
  product: GQLProductInterface
  /** The amount added. */
  quantity: Scalars['Float']
  /** The unique ID for the requisition list item. */
  uid: Scalars['ID']
}

/** Defines the items to add. */
export type GQLRequisitionListItemsInput = {
  /** Entered option IDs. */
  entered_options?: Maybe<Array<Maybe<GQLEnteredOptionInput>>>
  /** For configurable products, the SKU of the parent product. */
  parent_sku?: Maybe<Scalars['String']>
  /** The quantity of the product to add. */
  quantity?: Maybe<Scalars['Float']>
  /** Selected option IDs. */
  selected_options?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The product SKU. */
  sku: Scalars['String']
}

/** Defines customer requisition lists. */
export type GQLRequisitionLists = {
  __typename?: 'RequisitionLists'
  /** An array of requisition lists. */
  items?: Maybe<Array<Maybe<GQLRequisitionList>>>
  /** Pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of returned requisition lists. */
  total_count?: Maybe<Scalars['Int']>
}

/** Contains an array of items added to a requisition list. */
export type GQLRequistionListItems = {
  __typename?: 'RequistionListItems'
  /** An array of items in the requisition list. */
  items: Array<Maybe<GQLRequisitionListItemInterface>>
  /** Pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The number of pages returned. */
  total_pages: Scalars['Int']
}

/** Contains details about a return. */
export type GQLReturn = {
  __typename?: 'Return'
  /** A list of shipping carriers available for returns. */
  available_shipping_carriers?: Maybe<Array<Maybe<GQLReturnShippingCarrier>>>
  /** A list of comments posted for the return request. */
  comments?: Maybe<Array<Maybe<GQLReturnComment>>>
  /** The date the return was requested. */
  created_at: Scalars['String']
  /** Data from the customer who created the return request. */
  customer: GQLReturnCustomer
  /** A list of items being returned. */
  items?: Maybe<Array<Maybe<GQLReturnItem>>>
  /** A human-readable return number. */
  number: Scalars['String']
  /** The order associated with the return. */
  order?: Maybe<GQLCustomerOrder>
  /** Shipping information for the return. */
  shipping?: Maybe<GQLReturnShipping>
  /** The status of the return request. */
  status?: Maybe<GQLReturnStatus>
  /** The unique ID for a `Return` object. */
  uid: Scalars['ID']
}

/** Contains details about a return comment. */
export type GQLReturnComment = {
  __typename?: 'ReturnComment'
  /** The name or author who posted the comment. */
  author_name: Scalars['String']
  /** The date and time the comment was posted. */
  created_at: Scalars['String']
  /** The contents of the comment. */
  text: Scalars['String']
  /** The unique ID for a `ReturnComment` object. */
  uid: Scalars['ID']
}

/** Contains details about a `ReturnCustomerAttribute` object. */
export type GQLReturnCustomAttribute = {
  __typename?: 'ReturnCustomAttribute'
  /** A description of the attribute. */
  label: Scalars['String']
  /** The unique ID for a `ReturnCustomAttribute` object. */
  uid: Scalars['ID']
  /** A JSON-encoded value of the attribute. */
  value: Scalars['String']
}

/** The customer information for the return. */
export type GQLReturnCustomer = {
  __typename?: 'ReturnCustomer'
  /** The email address of the customer. */
  email: Scalars['String']
  /** The first name of the customer. */
  firstname?: Maybe<Scalars['String']>
  /** The last name of the customer. */
  lastname?: Maybe<Scalars['String']>
}

/** Contains details about a product being returned. */
export type GQLReturnItem = {
  __typename?: 'ReturnItem'
  /** Return item custom attributes that are visible on the storefront. */
  custom_attributes?: Maybe<Array<Maybe<GQLReturnCustomAttribute>>>
  /** Provides access to the product being returned, including information about selected and entered options. */
  order_item: GQLOrderItemInterface
  /** The quantity of the item the merchant authorized to be returned. */
  quantity: Scalars['Float']
  /** The quantity of the item requested to be returned. */
  request_quantity: Scalars['Float']
  /** The return status of the item. */
  status: GQLReturnItemStatus
  /** The unique ID for a `ReturnItem` object. */
  uid: Scalars['ID']
}

export enum GQLReturnItemStatus {
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  Received = 'RECEIVED',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Denied = 'DENIED',
}

/** Contains details about the return shipping address. */
export type GQLReturnShipping = {
  __typename?: 'ReturnShipping'
  /** The merchant-defined return shipping address. */
  address?: Maybe<GQLReturnShippingAddress>
  /** The unique ID for a `ReturnShippingTracking` object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information. */
  tracking?: Maybe<Array<Maybe<GQLReturnShippingTracking>>>
}

/** Contains details about the return shipping address. */
export type GQLReturnShippingTrackingArgs = {
  uid?: Maybe<Scalars['ID']>
}

/** Contains details about the shipping address used for receiving returned items. */
export type GQLReturnShippingAddress = {
  __typename?: 'ReturnShippingAddress'
  /** The city for product returns. */
  city: Scalars['String']
  /** The merchant's contact person. */
  contact_name?: Maybe<Scalars['String']>
  /** An object that defines the country for product returns. */
  country: GQLCountry
  /** The postal code for product returns. */
  postcode: Scalars['String']
  /** An object that defines the state or province for product returns. */
  region: GQLRegion
  /** The street address for product returns. */
  street: Array<Maybe<Scalars['String']>>
  /** The telephone number for product returns. */
  telephone?: Maybe<Scalars['String']>
}

/** Contains details about the carrier on a return. */
export type GQLReturnShippingCarrier = {
  __typename?: 'ReturnShippingCarrier'
  /** A description of the shipping carrier. */
  label: Scalars['String']
  /** The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier. */
  uid: Scalars['ID']
}

/** Contains shipping and tracking details. */
export type GQLReturnShippingTracking = {
  __typename?: 'ReturnShippingTracking'
  /** Contains details of a shipping carrier. */
  carrier: GQLReturnShippingCarrier
  /** Details about the status of a shipment. */
  status?: Maybe<GQLReturnShippingTrackingStatus>
  /** A tracking number assigned by the carrier. */
  tracking_number: Scalars['String']
  /** The unique ID for a `ReturnShippingTracking` object assigned to the tracking item. */
  uid: Scalars['ID']
}

/** Contains the status of a shipment. */
export type GQLReturnShippingTrackingStatus = {
  __typename?: 'ReturnShippingTrackingStatus'
  /** Text that describes the status. */
  text: Scalars['String']
  /** Indicates whether the status type is informational or an error. */
  type: GQLReturnShippingTrackingStatusType
}

export enum GQLReturnShippingTrackingStatusType {
  Information = 'INFORMATION',
  Error = 'ERROR',
}

export enum GQLReturnStatus {
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  PartiallyAuthorized = 'PARTIALLY_AUTHORIZED',
  Received = 'RECEIVED',
  PartiallyReceived = 'PARTIALLY_RECEIVED',
  Approved = 'APPROVED',
  PartiallyApproved = 'PARTIALLY_APPROVED',
  Rejected = 'REJECTED',
  PartiallyRejected = 'PARTIALLY_REJECTED',
  Denied = 'DENIED',
  ProcessedAndClosed = 'PROCESSED_AND_CLOSED',
  Closed = 'CLOSED',
}

/** Contains a list of customer return requests. */
export type GQLReturns = {
  __typename?: 'Returns'
  /** A list of return requests. */
  items?: Maybe<Array<Maybe<GQLReturn>>>
  /** Pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
  /** The total number of return requests. */
  total_count?: Maybe<Scalars['Int']>
}

/** Contains the result of a request to revoke a customer token. */
export type GQLRevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput'
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']
}

/** Contains details about a customer's reward points. */
export type GQLRewardPoints = {
  __typename?: 'RewardPoints'
  /** The current balance of reward points. */
  balance?: Maybe<GQLRewardPointsAmount>
  /** The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null. */
  balance_history?: Maybe<Array<Maybe<GQLRewardPointsBalanceHistoryItem>>>
  /** The current exchange rates for reward points. */
  exchange_rates?: Maybe<GQLRewardPointsExchangeRates>
  /** The subscription status of emails related to reward points. */
  subscription_status?: Maybe<GQLRewardPointsSubscriptionStatus>
}

export type GQLRewardPointsAmount = {
  __typename?: 'RewardPointsAmount'
  /** The reward points amount in store currency. */
  money: GQLMoney
  /** The reward points amount in points. */
  points: Scalars['Float']
}

/** Contain details about the reward points transaction. */
export type GQLRewardPointsBalanceHistoryItem = {
  __typename?: 'RewardPointsBalanceHistoryItem'
  /** The award points balance after the completion of the transaction. */
  balance?: Maybe<GQLRewardPointsAmount>
  /** The reason the balance changed. */
  change_reason: Scalars['String']
  /** The date of the transaction. */
  date: Scalars['String']
  /** The number of points added or deducted in the transaction. */
  points_change: Scalars['Float']
}

/** Lists the reward points exchange rates. The values depend on the customer group. */
export type GQLRewardPointsExchangeRates = {
  __typename?: 'RewardPointsExchangeRates'
  /** How many points are earned for a given amount spent. */
  earning?: Maybe<GQLRewardPointsRate>
  /** How many points must be redeemed to get a given amount of currency discount at the checkout. */
  redemption?: Maybe<GQLRewardPointsRate>
}

/** Contains details about customer's reward points rate. */
export type GQLRewardPointsRate = {
  __typename?: 'RewardPointsRate'
  /** The money value for the exchange rate. For earnings, this is the amount spent to earn the specified points. For redemption, this is the amount of money the number of points represents. */
  currency_amount: Scalars['Float']
  /** The number of points for an exchange rate. For earnings, this is the number of points earned. For redemption, this is the number of points needed for redemption. */
  points: Scalars['Float']
}

/** Indicates whether the customer subscribes to reward points emails. */
export type GQLRewardPointsSubscriptionStatus = {
  __typename?: 'RewardPointsSubscriptionStatus'
  /** Indicates whether the customer subscribes to 'Reward points balance updates' emails. */
  balance_updates: GQLRewardPointsSubscriptionStatusesEnum
  /** Indicates whether the customer subscribes to 'Reward points expiration notifications' emails. */
  points_expiration_notifications: GQLRewardPointsSubscriptionStatusesEnum
}

export enum GQLRewardPointsSubscriptionStatusesEnum {
  Subscribed = 'SUBSCRIBED',
  NotSubscribed = 'NOT_SUBSCRIBED',
}

/** Routable entities serve as the model for a rendered page. */
export type GQLRoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<GQLUrlRewriteEntityTypeEnum>
}

/** Contains details about a comment. */
export type GQLSalesCommentItem = {
  __typename?: 'SalesCommentItem'
  /** The text of the message. */
  message: Scalars['String']
  /** The timestamp of the comment. */
  timestamp: Scalars['String']
}

export type GQLSalesItemInterface = {
  __typename?: 'SalesItemInterface'
  /** The entered gift message for the order item */
  gift_message?: Maybe<GQLGiftMessage>
}

/** Provides navigation for the query response. */
export type GQLSearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo'
  /** The specific page to return. */
  current_page?: Maybe<Scalars['Int']>
  /** The maximum number of items to return per page of results. */
  page_size?: Maybe<Scalars['Int']>
  /** The total number of pages in the response. */
  total_pages?: Maybe<Scalars['Int']>
}

/** A string that contains search suggestion */
export type GQLSearchSuggestion = {
  __typename?: 'SearchSuggestion'
  /** The search suggestion of existing product. */
  search: Scalars['String']
}

/** Defines selectable input types of the attribute. */
export type GQLSelectableInputTypeInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
}

export type GQLSelectedAttributeOption = {
  __typename?: 'SelectedAttributeOption'
  /** Selected attribute option details. */
  attribute_option?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
}

/** Contains details about a selected bundle option. */
export type GQLSelectedBundleOption = {
  __typename?: 'SelectedBundleOption'
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']
  /** The display name of the selected bundle product option. */
  label: Scalars['String']
  /** The type of selected bundle product option. */
  type: Scalars['String']
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']
  /** An array of selected bundle option values. */
  values: Array<Maybe<GQLSelectedBundleOptionValue>>
}

/** Contains details about a value for a selected bundle option. */
export type GQLSelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue'
  /** Use `uid` instead */
  id: Scalars['Int']
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float']
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']
}

/** Contains details about a selected configurable option. */
export type GQLSelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption'
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']
  /** The display text for the option. */
  option_label: Scalars['String']
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']
}

/** Contains details about an attribute the buyer selected. */
export type GQLSelectedCustomAttributeInput = {
  /** A string that identifies the selected attribute. */
  attribute_code: Scalars['String']
  /** The unique ID for a `CustomAttribute` object of a selected custom attribute. */
  value: Scalars['ID']
}

/** Identifies a customized product that has been placed in a cart. */
export type GQLSelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption'
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']
  /** The display name of the selected customizable option. */
  label: Scalars['String']
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']
  /** An array of selectable values. */
  values: Array<Maybe<GQLSelectedCustomizableOptionValue>>
}

/** Identifies the value of the selected customized option. */
export type GQLSelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue'
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']
  /** The display name of the selected value. */
  label: Scalars['String']
  /** The price of the selected customizable value. */
  price: GQLCartItemSelectedOptionValuePrice
  /** The text identifying the selected value. */
  value: Scalars['String']
}

/** Describes the payment method the shopper selected. */
export type GQLSelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod'
  /** The payment method code. */
  code: Scalars['String']
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>
  /** The payment method title. */
  title: Scalars['String']
}

/** Contains details about the selected shipping method and carrier. */
export type GQLSelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod'
  /** The cost of shipping using this shipping method. */
  amount: GQLMoney
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<GQLMoney>
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']
  /** The label for the carrier code. */
  carrier_title: Scalars['String']
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']
  /** The label for the method code. */
  method_title: Scalars['String']
}

/** Defines the referenced product and the email sender and recipients. */
export type GQLSendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']
  /** An array containing information about each recipient. */
  recipients: Array<Maybe<GQLSendEmailToFriendRecipientInput>>
  /** Information about the customer and the content of the message. */
  sender: GQLSendEmailToFriendSenderInput
}

/** Contains information about the sender and recipients. */
export type GQLSendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput'
  /** An array containing information about each recipient. */
  recipients?: Maybe<Array<Maybe<GQLSendEmailToFriendRecipient>>>
  /** Information about the customer and the content of the message. */
  sender?: Maybe<GQLSendEmailToFriendSender>
}

/** An output object that contains information about the recipient. */
export type GQLSendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient'
  /** The email address of the recipient. */
  email: Scalars['String']
  /** The name of the recipient. */
  name: Scalars['String']
}

/** Contains details about a recipient. */
export type GQLSendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']
  /** The name of the recipient. */
  name: Scalars['String']
}

/** An output object that contains information about the sender. */
export type GQLSendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender'
  /** The email address of the sender. */
  email: Scalars['String']
  /** The text of the message to be sent. */
  message: Scalars['String']
  /** The name of the sender. */
  name: Scalars['String']
}

/** Contains details about the sender. */
export type GQLSendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']
  /** The text of the message to be sent. */
  message: Scalars['String']
  /** The name of the sender. */
  name: Scalars['String']
}

/** Contains details about the configuration of the Email to a Friend feature. */
export type GQLSendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration'
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']
}

/** Specifies which negotiable quote to send for review. */
export type GQLSendNegotiableQuoteForReviewInput = {
  /** A comment for the seller to review. */
  comment?: Maybe<GQLNegotiableQuoteCommentInput>
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** Contains the negotiable quote. */
export type GQLSendNegotiableQuoteForReviewOutput = {
  __typename?: 'SendNegotiableQuoteForReviewOutput'
  /** The negotiable quote after sending for seller review. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Sets the billing address. */
export type GQLSetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: GQLBillingAddressInput
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
}

/** Contains details about the cart after setting the billing address. */
export type GQLSetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput'
  /** The cart after setting the billing address. */
  cart: GQLCart
}

/** Defines the gift options applied to the cart. */
export type GQLSetGiftOptionsOnCartInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']
  /** Gift message details for the cart. */
  gift_message?: Maybe<GQLGiftMessageInput>
  /** Whether customer requested gift receipt for the cart. */
  gift_receipt_included: Scalars['Boolean']
  /** The unique ID for a `GiftWrapping` object to be used for the cart. */
  gift_wrapping_id?: Maybe<Scalars['ID']>
  /** Whether customer requested printed card for the cart. */
  printed_card_included: Scalars['Boolean']
}

/** Contains the cart after gift options have been applied. */
export type GQLSetGiftOptionsOnCartOutput = {
  __typename?: 'SetGiftOptionsOnCartOutput'
  /** The modified cart object. */
  cart: GQLCart
}

/** Defines the guest email and cart. */
export type GQLSetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** The email address of the guest. */
  email: Scalars['String']
}

/** Contains details about the cart after setting the email of a guest. */
export type GQLSetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput'
  /** The cart after setting the guest email. */
  cart: GQLCart
}

/** Sets the billing address. */
export type GQLSetNegotiableQuoteBillingAddressInput = {
  /** The billing address to be added. */
  billing_address: GQLNegotiableQuoteBillingAddressInput
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** Contains the negotiable quote. */
export type GQLSetNegotiableQuoteBillingAddressOutput = {
  __typename?: 'SetNegotiableQuoteBillingAddressOutput'
  /** The negotiable quote after assigning a billing address. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Defines the payment method of the specified negotiable quote. */
export type GQLSetNegotiableQuotePaymentMethodInput = {
  /** The payment method to be assigned to the negotiable quote. */
  payment_method: GQLNegotiableQuotePaymentMethodInput
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** Contains details about the negotiable quote after setting the payment method. */
export type GQLSetNegotiableQuotePaymentMethodOutput = {
  __typename?: 'SetNegotiableQuotePaymentMethodOutput'
  /** The updated negotiable quote. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Defines the shipping address to assign to the negotiable quote. */
export type GQLSetNegotiableQuoteShippingAddressInput = {
  /** The unique ID of a `CustomerAddress` object. */
  customer_address_id?: Maybe<Scalars['ID']>
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
  /** An array of shipping addresses to apply to the negotiable quote. */
  shipping_addresses?: Maybe<
    Array<Maybe<GQLNegotiableQuoteShippingAddressInput>>
  >
}

/** Contains the negotiable quote. */
export type GQLSetNegotiableQuoteShippingAddressOutput = {
  __typename?: 'SetNegotiableQuoteShippingAddressOutput'
  /** The negotiable quote after assigning a shipping address. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Defines the shipping method to apply to the negotiable quote. */
export type GQLSetNegotiableQuoteShippingMethodsInput = {
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
  /** An array of shipping methods to apply to the negotiable quote. */
  shipping_methods: Array<Maybe<GQLShippingMethodInput>>
}

/** Contains the negotiable quote. */
export type GQLSetNegotiableQuoteShippingMethodsOutput = {
  __typename?: 'SetNegotiableQuoteShippingMethodsOutput'
  /** The negotiable quote after applying shipping methods. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Applies a payment method to the quote. */
export type GQLSetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** The payment method data to apply to the cart. */
  payment_method: GQLPaymentMethodInput
}

/** Applies a payment method to the cart. */
export type GQLSetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** The payment method data to apply to the cart. */
  payment_method: GQLPaymentMethodInput
}

/** Contains details about the cart after setting the payment method. */
export type GQLSetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput'
  /** The cart after setting the payment method. */
  cart: GQLCart
}

/** Specifies an array of addresses to use for shipping. */
export type GQLSetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** An array of shipping addresses. */
  shipping_addresses: Array<Maybe<GQLShippingAddressInput>>
}

/** Contains details about the cart after setting the shipping addresses. */
export type GQLSetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput'
  /** The cart after setting the shipping addresses. */
  cart: GQLCart
}

/** Applies one or shipping methods to the cart. */
export type GQLSetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** An array of shipping methods. */
  shipping_methods: Array<Maybe<GQLShippingMethodInput>>
}

/** Contains details about the cart after setting the shipping methods. */
export type GQLSetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput'
  /** The cart after setting the shipping methods. */
  cart: GQLCart
}

/** Defines a gift registry invitee. */
export type GQLShareGiftRegistryInviteeInput = {
  /** The email address of the gift registry invitee. */
  email: Scalars['String']
  /** The name of the gift registry invitee. */
  name: Scalars['String']
}

/** Contains the results of a request to share a gift registry. */
export type GQLShareGiftRegistryOutput = {
  __typename?: 'ShareGiftRegistryOutput'
  /** Indicates whether the gift registry was successfully shared. */
  is_shared: Scalars['Boolean']
}

/** Defines the sender of an invitation to view a gift registry. */
export type GQLShareGiftRegistrySenderInput = {
  /** A brief message from the sender. */
  message: Scalars['String']
  /** The sender of the gift registry invitation. */
  name: Scalars['String']
}

/** Defines whether bundle items must be shipped together. */
export enum GQLShipBundleItemsEnum {
  Together = 'TOGETHER',
  Separately = 'SEPARATELY',
}

export type GQLShipmentItem = GQLShipmentItemInterface & {
  __typename?: 'ShipmentItem'
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']
  /** The order item associated with the shipment item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']
}

/** Order shipment item details. */
export type GQLShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']
  /** The order item associated with the shipment item. */
  order_item?: Maybe<GQLOrderItemInterface>
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>
  /** The sale price for the base product. */
  product_sale_price: GQLMoney
  /** The SKU of the base product. */
  product_sku: Scalars['String']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']
}

/** Contains order shipment tracking details. */
export type GQLShipmentTracking = {
  __typename?: 'ShipmentTracking'
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']
  /** The tracking number of the order shipment. */
  number?: Maybe<Scalars['String']>
  /** The shipment tracking title. */
  title: Scalars['String']
}

/** Defines a single shipping address. */
export type GQLShippingAddressInput = {
  /** Defines a shipping address. */
  address?: Maybe<GQLCartAddressInput>
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: Maybe<Scalars['Int']>
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']>
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: Maybe<Scalars['String']>
}

/** Contains shipping addresses and methods. */
export type GQLShippingCartAddress = GQLCartAddressInterface & {
  __typename?: 'ShippingCartAddress'
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods?: Maybe<Array<Maybe<GQLAvailableShippingMethod>>>
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<GQLCartItemQuantity>>>
  /** An array that lists the items in the cart. */
  cart_items_v2?: Maybe<Array<Maybe<GQLCartItemInterface>>>
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>
  /** An object containing the country label and code. */
  country: GQLCartAddressCountry
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']>
  /** The first name of the customer or guest. */
  firstname: Scalars['String']
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']>
  /** The last name of the customer or guest. */
  lastname: Scalars['String']
  pickup_location_code?: Maybe<Scalars['String']>
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>
  /** An object containing the region label and code. */
  region?: Maybe<GQLCartAddressRegion>
  /** An object that describes the selected shipping method. */
  selected_shipping_method?: Maybe<GQLSelectedShippingMethod>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>
}

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type GQLShippingDiscount = {
  __typename?: 'ShippingDiscount'
  /** The amount of the discount. */
  amount: GQLMoney
}

/** Contains details about shipping and handling costs. */
export type GQLShippingHandling = {
  __typename?: 'ShippingHandling'
  /** The shipping amount, excluding tax. */
  amount_excluding_tax?: Maybe<GQLMoney>
  /** The shipping amount, including tax. */
  amount_including_tax?: Maybe<GQLMoney>
  /** The applied discounts to the shipping. */
  discounts?: Maybe<Array<Maybe<GQLShippingDiscount>>>
  /** Details about taxes applied for shipping. */
  taxes?: Maybe<Array<Maybe<GQLTaxItem>>>
  /** The total amount for shipping. */
  total_amount: GQLMoney
}

/** Defines the shipping carrier and method. */
export type GQLShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']
}

/** An implementation for simple product cart items. */
export type GQLSimpleCartItem = GQLCartItemInterface & {
  __typename?: 'SimpleCartItem'
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GQLGiftWrapping>>
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GQLGiftMessage>
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GQLGiftWrapping>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type GQLSimpleProduct = GQLProductInterface &
  GQLRoutableInterface &
  GQLPhysicalProductInterface &
  GQLCustomizableProductInterface & {
    __typename?: 'SimpleProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<Scalars['Float']>
  }

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type GQLSimpleProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines a single product to add to the cart. */
export type GQLSimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: Maybe<Array<Maybe<GQLCustomizableOptionInput>>>
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: GQLCartItemInput
}

/** Contains details about simple products added to a requisition list. */
export type GQLSimpleRequisitionListItem = GQLRequisitionListItemInterface & {
  __typename?: 'SimpleRequisitionListItem'
  /** Selected custom options for an item in the requisition list. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** Details about a requisition list item. */
  product: GQLProductInterface
  /** The amount added. */
  quantity: Scalars['Float']
  /** The unique ID for the requisition list item. */
  uid: Scalars['ID']
}

/** Contains a simple product wish list item. */
export type GQLSimpleWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'SimpleWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

/** Indicates whether to return results in ascending or descending order. */
export enum GQLSortEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Defines a possible sort field. */
export type GQLSortField = {
  __typename?: 'SortField'
  /** The label of the sort field. */
  label?: Maybe<Scalars['String']>
  /** The attribute code of the sort field. */
  value?: Maybe<Scalars['String']>
}

/** Contains a default value for sort fields and all available sort fields. */
export type GQLSortFields = {
  __typename?: 'SortFields'
  /** The default sort field value. */
  default?: Maybe<Scalars['String']>
  /** An array of possible sort fields. */
  options?: Maybe<Array<Maybe<GQLSortField>>>
}

/** Contains information about a store's configuration. */
export type GQLStoreConfig = {
  __typename?: 'StoreConfig'
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer?: Maybe<Scalars['String']>
  /** Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No). */
  allow_gift_receipt?: Maybe<Scalars['String']>
  /** Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No). */
  allow_gift_wrapping_on_order?: Maybe<Scalars['String']>
  /** Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No). */
  allow_gift_wrapping_on_order_items?: Maybe<Scalars['String']>
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']>
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']>
  /** Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No). */
  allow_printed_card?: Maybe<Scalars['String']>
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>
  /** The base currency code. */
  base_currency_code?: Maybe<Scalars['String']>
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url?: Maybe<Scalars['String']>
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url?: Maybe<Scalars['String']>
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url?: Maybe<Scalars['String']>
  /** The store’s fully-qualified base URL. */
  base_url?: Maybe<Scalars['String']>
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']>
  /** Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). */
  cart_gift_wrapping?: Maybe<Scalars['String']>
  /** Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). */
  cart_printed_card?: Maybe<Scalars['String']>
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: Maybe<Scalars['String']>
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting?: Maybe<GQLFixedProductTaxDisplaySettings>
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix?: Maybe<Scalars['String']>
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']>
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled?: Maybe<Scalars['Boolean']>
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to?: Maybe<Scalars['String']>
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total?: Maybe<Scalars['String']>
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total?: Maybe<Scalars['String']>
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status?: Maybe<Scalars['String']>
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries?: Maybe<Scalars['String']>
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to?: Maybe<Scalars['String']>
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order?: Maybe<Scalars['Int']>
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title?: Maybe<Scalars['String']>
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page?: Maybe<Scalars['String']>
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies?: Maybe<Scalars['String']>
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route?: Maybe<Scalars['String']>
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']>
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']>
  /** Indicates whether the Contact Us form in enabled. */
  contact_enabled: Scalars['Boolean']
  /** The copyright statement that appears at the bottom of each page. */
  copyright?: Maybe<Scalars['String']>
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description?: Maybe<Scalars['String']>
  /** The default display currency code. */
  default_display_currency_code?: Maybe<Scalars['String']>
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords?: Maybe<Scalars['String']>
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title?: Maybe<Scalars['String']>
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice?: Maybe<Scalars['Int']>
  /** Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No). */
  enable_multiple_wishlists?: Maybe<Scalars['String']>
  /** The landing page that is associated with the base URL. */
  front?: Maybe<Scalars['String']>
  /** The default number of products per page in Grid View. */
  grid_per_page?: Maybe<Scalars['Int']>
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values?: Maybe<Scalars['String']>
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes?: Maybe<Scalars['String']>
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon?: Maybe<Scalars['String']>
  /** The path to the logo that appears in the header. */
  header_logo_src?: Maybe<Scalars['String']>
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']>
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store?: Maybe<Scalars['Boolean']>
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group?: Maybe<Scalars['Boolean']>
  /** Indicates whether negotiable quote functionality is enabled. */
  is_negotiable_quote_active?: Maybe<Scalars['Boolean']>
  /** Indicates whether requisition lists are enabled. Possible values: 1 (Yes) and 0 (No). */
  is_requisition_list_active?: Maybe<Scalars['String']>
  /** The format of the search results list. */
  list_mode?: Maybe<Scalars['String']>
  /** The default number of products per page in List View. */
  list_per_page?: Maybe<Scalars['Int']>
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values?: Maybe<Scalars['String']>
  /** The store locale. */
  locale?: Maybe<Scalars['String']>
  /** The Alt text that is associated with the logo. */
  logo_alt?: Maybe<Scalars['String']>
  /** The height of the logo image, in pixels. */
  logo_height?: Maybe<Scalars['Int']>
  /** The width of the logo image, in pixels. */
  logo_width?: Maybe<Scalars['Int']>
  /** Indicates whether reward points functionality is enabled. Possible values: 1 (Enabled) and 0 (Disabled). */
  magento_reward_general_is_enabled?: Maybe<Scalars['String']>
  /** Indicates whether reward points functionality is enabled on the storefront. Possible values: 1 (Enabled) and 0 (Disabled). */
  magento_reward_general_is_enabled_on_front?: Maybe<Scalars['String']>
  /** The minimum point balance customers must have before they can redeem them. A null value indicates no minimum. */
  magento_reward_general_min_points_balance?: Maybe<Scalars['String']>
  /** When enabled, customers can see a detailed history of their reward points. Possible values: 1 (Enabled) and 0 (Disabled). */
  magento_reward_general_publish_history?: Maybe<Scalars['String']>
  /** The number of points for a referral when an invitee registers on the site. */
  magento_reward_points_invitation_customer?: Maybe<Scalars['String']>
  /** The maximum number of registration referrals that will qualify for rewards. A null value indicates no limit. */
  magento_reward_points_invitation_customer_limit?: Maybe<Scalars['String']>
  /** The number of points for a referral, when an invitee places their first order on the site. */
  magento_reward_points_invitation_order?: Maybe<Scalars['String']>
  /** The number of order conversions that can earn points for the customer who sends the invitation. A null value indicates no limit. */
  magento_reward_points_invitation_order_limit?: Maybe<Scalars['String']>
  /** The number of points earned by registered customers who subscribe to a newsletter. */
  magento_reward_points_newsletter?: Maybe<Scalars['String']>
  /** Indicates customers earn points for shopping according to the reward point exchange rate. In Luma, this also controls whether to show a message in the shopping cart about the rewards points earned for the purchase, as well as the customer’s current reward point balance. */
  magento_reward_points_order?: Maybe<Scalars['String']>
  /** The number of points customer gets for registering. */
  magento_reward_points_register?: Maybe<Scalars['String']>
  /** The number of points for writing a review. */
  magento_reward_points_review?: Maybe<Scalars['String']>
  /** The maximum number of reviews that will qualify for the rewards. A null value indicates no limit. */
  magento_reward_points_review_limit?: Maybe<Scalars['String']>
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>
  /** If multiple wish lists are enabled, the maximum number of wish lists the customer can have. */
  maximum_number_of_wishlists?: Maybe<Scalars['String']>
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']>
  /** Indicates whether newsletters are enabled. */
  newsletter_enabled: Scalars['Boolean']
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route?: Maybe<Scalars['String']>
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>
  /** The default price of a printed card that accompanies an order. */
  printed_card_price?: Maybe<Scalars['String']>
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting?: Maybe<GQLFixedProductTaxDisplaySettings>
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled?: Maybe<Scalars['String']>
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix?: Maybe<Scalars['String']>
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number?: Maybe<Scalars['String']>
  /** Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. */
  returns_enabled: Scalars['String']
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id?: Maybe<Scalars['Int']>
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']>
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting?: Maybe<GQLFixedProductTaxDisplaySettings>
  /** Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). */
  sales_gift_wrapping?: Maybe<Scalars['String']>
  /** Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). */
  sales_printed_card?: Maybe<Scalars['String']>
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url?: Maybe<Scalars['String']>
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url?: Maybe<Scalars['String']>
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url?: Maybe<Scalars['String']>
  /** The store’s fully-qualified secure base URL. */
  secure_base_url?: Maybe<Scalars['String']>
  /** Email to a Friend configuration. */
  send_friend?: Maybe<GQLSendFriendConfiguration>
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code?: Maybe<Scalars['ID']>
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code?: Maybe<Scalars['ID']>
  /** The label assigned to the store group. */
  store_group_name?: Maybe<Scalars['String']>
  /** The label assigned to the store view. */
  store_name?: Maybe<Scalars['String']>
  /** The store view sort order. */
  store_sort_order?: Maybe<Scalars['Int']>
  /** The time zone of the store. */
  timezone?: Maybe<Scalars['String']>
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix?: Maybe<Scalars['String']>
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator?: Maybe<Scalars['String']>
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix?: Maybe<Scalars['String']>
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url?: Maybe<Scalars['Boolean']>
  /** The unique ID for the website. */
  website_code?: Maybe<Scalars['ID']>
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id?: Maybe<Scalars['Int']>
  /** The label assigned to the website. */
  website_name?: Maybe<Scalars['String']>
  /** The unit of weight. */
  weight_unit?: Maybe<Scalars['String']>
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome?: Maybe<Scalars['String']>
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']>
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled?: Maybe<Scalars['Boolean']>
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status?: Maybe<Scalars['String']>
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action?: Maybe<Scalars['String']>
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']>
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order?: Maybe<Scalars['Int']>
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title?: Maybe<Scalars['String']>
}

/** Contains the store code and label of an attribute. */
export type GQLStoreLabels = {
  __typename?: 'StoreLabels'
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>
  /** The assigned store code. */
  store_code?: Maybe<Scalars['String']>
}

/** Indicates where an attribute can be displayed. */
export type GQLStorefrontProperties = {
  __typename?: 'StorefrontProperties'
  /** The relative position of the attribute in the layered navigation block. */
  position?: Maybe<Scalars['Int']>
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation?: Maybe<GQLUseInLayeredNavigationOptions>
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing?: Maybe<Scalars['Boolean']>
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']>
}

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type GQLSubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput'
  /** The status of the subscription request. */
  status?: Maybe<GQLSubscriptionStatusesEnum>
}

/** Indicates the status of the request. */
export enum GQLSubscriptionStatusesEnum {
  NotActive = 'NOT_ACTIVE',
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED',
  Unconfirmed = 'UNCONFIRMED',
}

/** Describes the swatch type and a value. */
export type GQLSwatchData = {
  __typename?: 'SwatchData'
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type?: Maybe<Scalars['String']>
  /** The value for the swatch item. It could be text or an image link. */
  value?: Maybe<Scalars['String']>
}

export type GQLSwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>
}

export type GQLSwatchLayerFilterItem = GQLLayerFilterItemInterface &
  GQLSwatchLayerFilterItemInterface & {
    __typename?: 'SwatchLayerFilterItem'
    /**
     * The count of items per filter.
     * @deprecated Use `AggregationOption.count` instead.
     */
    items_count?: Maybe<Scalars['Int']>
    /**
     * The label for a filter.
     * @deprecated Use `AggregationOption.label` instead.
     */
    label?: Maybe<Scalars['String']>
    /** Data required to render a swatch filter item. */
    swatch_data?: Maybe<GQLSwatchData>
    /**
     * The value of a filter request variable to be used in query.
     * @deprecated Use `AggregationOption.value` instead.
     */
    value_string?: Maybe<Scalars['String']>
  }

export type GQLSwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<GQLSwatchData>
}

/** Contains tax item details. */
export type GQLTaxItem = {
  __typename?: 'TaxItem'
  /** The amount of tax applied to the item. */
  amount: GQLMoney
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']
  /** A title that describes the tax. */
  title: Scalars['String']
}

export type GQLTextSwatchData = GQLSwatchDataInterface & {
  __typename?: 'TextSwatchData'
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>
}

/** Defines a price based on the quantity purchased. */
export type GQLTierPrice = {
  __typename?: 'TierPrice'
  /** The price discount that this tier represents. */
  discount?: Maybe<GQLProductDiscount>
  /** The price of the product at this tier. */
  final_price?: Maybe<GQLMoney>
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>
}

export type GQLUiAttributeTypeAny = GQLUiInputTypeInterface & {
  __typename?: 'UiAttributeTypeAny'
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<GQLUiInputTypeEnum>
}

export type GQLUiAttributeTypeBoolean = GQLUiInputTypeInterface &
  GQLAttributeOptionsInterface &
  GQLSelectableInputTypeInterface & {
    __typename?: 'UiAttributeTypeBoolean'
    /** An array of attribute options. */
    attribute_options?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
    /** Indicates whether the attribute value allowed to have html content. */
    is_html_allowed?: Maybe<Scalars['Boolean']>
    /** The frontend input type of the attribute. */
    ui_input_type?: Maybe<GQLUiInputTypeEnum>
  }

export type GQLUiAttributeTypeFixedProductTax = GQLUiInputTypeInterface & {
  __typename?: 'UiAttributeTypeFixedProductTax'
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<GQLUiInputTypeEnum>
}

export type GQLUiAttributeTypeMultiSelect = GQLUiInputTypeInterface &
  GQLAttributeOptionsInterface &
  GQLSelectableInputTypeInterface & {
    __typename?: 'UiAttributeTypeMultiSelect'
    /** An array of attribute options. */
    attribute_options?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
    /** Indicates whether the attribute value allowed to have html content. */
    is_html_allowed?: Maybe<Scalars['Boolean']>
    /** The frontend input type of the attribute. */
    ui_input_type?: Maybe<GQLUiInputTypeEnum>
  }

export type GQLUiAttributeTypePageBuilder = GQLUiInputTypeInterface & {
  __typename?: 'UiAttributeTypePageBuilder'
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<GQLUiInputTypeEnum>
}

export type GQLUiAttributeTypeSelect = GQLUiInputTypeInterface &
  GQLAttributeOptionsInterface &
  GQLSelectableInputTypeInterface & {
    __typename?: 'UiAttributeTypeSelect'
    /** An array of attribute options. */
    attribute_options?: Maybe<Array<Maybe<GQLAttributeOptionInterface>>>
    /** Indicates whether the attribute value allowed to have html content. */
    is_html_allowed?: Maybe<Scalars['Boolean']>
    /** The frontend input type of the attribute. */
    ui_input_type?: Maybe<GQLUiInputTypeEnum>
  }

export type GQLUiAttributeTypeTextEditor = GQLUiInputTypeInterface & {
  __typename?: 'UiAttributeTypeTextEditor'
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<GQLUiInputTypeEnum>
}

export type GQLUiAttributeTypeTextarea = GQLUiInputTypeInterface & {
  __typename?: 'UiAttributeTypeTextarea'
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<GQLUiInputTypeEnum>
}

export enum GQLUiInputTypeEnum {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Gallery = 'GALLERY',
  Image = 'IMAGE',
  MediaImage = 'MEDIA_IMAGE',
  Multiselect = 'MULTISELECT',
  Price = 'PRICE',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Texteditor = 'TEXTEDITOR',
  Weight = 'WEIGHT',
  Pagebuilder = 'PAGEBUILDER',
  FixedProductTax = 'FIXED_PRODUCT_TAX',
}

/** Defines frontend UI properties of an attribute. */
export type GQLUiInputTypeInterface = {
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<GQLUiInputTypeEnum>
}

/** Modifies the specified items in the cart. */
export type GQLUpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']
  /** An array of items to be updated. */
  cart_items: Array<Maybe<GQLCartItemUpdateInput>>
}

/** Contains details about the cart after updating items. */
export type GQLUpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput'
  /** The cart after updating products. */
  cart: GQLCart
}

/** Contains the response to the request to update the company. */
export type GQLUpdateCompanyOutput = {
  __typename?: 'UpdateCompanyOutput'
  /** The updated company instance. */
  company: GQLCompany
}

/** Contains the response to the request to update the company role. */
export type GQLUpdateCompanyRoleOutput = {
  __typename?: 'UpdateCompanyRoleOutput'
  /** The updated company role instance. */
  role: GQLCompanyRole
}

/** Contains the response to the request to update the company structure. */
export type GQLUpdateCompanyStructureOutput = {
  __typename?: 'UpdateCompanyStructureOutput'
  /** The updated company instance. */
  company: GQLCompany
}

/** Contains the response to the request to update a company team. */
export type GQLUpdateCompanyTeamOutput = {
  __typename?: 'UpdateCompanyTeamOutput'
  /** The updated company team instance. */
  team: GQLCompanyTeam
}

/** Contains the response to the request to update the company user. */
export type GQLUpdateCompanyUserOutput = {
  __typename?: 'UpdateCompanyUserOutput'
  /** The updated company user instance. */
  user: GQLCustomer
}

/** Defines updates to a `GiftRegistry` object. */
export type GQLUpdateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed. */
  dynamic_attributes?: Maybe<Array<Maybe<GQLGiftRegistryDynamicAttributeInput>>>
  /** The updated name of the event. */
  event_name?: Maybe<Scalars['String']>
  /** The updated message describing the event. */
  message?: Maybe<Scalars['String']>
  /** Indicates whether the gift registry is PRIVATE or PUBLIC. */
  privacy_settings?: Maybe<GQLGiftRegistryPrivacySettings>
  /** The updated shipping address for all gift registry items. */
  shipping_address?: Maybe<GQLGiftRegistryShippingAddressInput>
  /** Indicates whether the gift registry is ACTIVE or INACTIVE. */
  status?: Maybe<GQLGiftRegistryStatus>
}

/** Defines updates to an item in a gift registry. */
export type GQLUpdateGiftRegistryItemInput = {
  /** The unique ID of a `giftRegistryItem` object. */
  gift_registry_item_uid: Scalars['ID']
  /** The updated description of the item. */
  note?: Maybe<Scalars['String']>
  /** The updated quantity of the gift registry item. */
  quantity: Scalars['Float']
}

/** Contains the results of a request to update gift registry items. */
export type GQLUpdateGiftRegistryItemsOutput = {
  __typename?: 'UpdateGiftRegistryItemsOutput'
  /** The gift registry after updating updating items. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Contains the results of a request to update a gift registry. */
export type GQLUpdateGiftRegistryOutput = {
  __typename?: 'UpdateGiftRegistryOutput'
  /** The updated gift registry. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Defines updates to an existing registrant. */
export type GQLUpdateGiftRegistryRegistrantInput = {
  /** As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed. */
  dynamic_attributes?: Maybe<Array<Maybe<GQLGiftRegistryDynamicAttributeInput>>>
  /** The updated email address of the registrant. */
  email?: Maybe<Scalars['String']>
  /** The updated first name of the registrant. */
  firstname?: Maybe<Scalars['String']>
  /** The unique ID of a `giftRegistryRegistrant` object. */
  gift_registry_registrant_uid: Scalars['ID']
  /** The updated last name of the registrant. */
  lastname?: Maybe<Scalars['String']>
}

/** Contains the results a request to update registrants. */
export type GQLUpdateGiftRegistryRegistrantsOutput = {
  __typename?: 'UpdateGiftRegistryRegistrantsOutput'
  /** The gift registry after updating registrants. */
  gift_registry?: Maybe<GQLGiftRegistry>
}

/** Contains the updated negotiable quote. */
export type GQLUpdateNegotiableQuoteItemsQuantityOutput = {
  __typename?: 'UpdateNegotiableQuoteItemsQuantityOutput'
  /** The updated negotiable quote. */
  quote?: Maybe<GQLNegotiableQuote>
}

/** Specifies the items to update. */
export type GQLUpdateNegotiableQuoteQuantitiesInput = {
  /** An array of items to update. */
  items: Array<Maybe<GQLNegotiableQuoteItemQuantityInput>>
  /** The unique ID of a `NegotiableQuote` object. */
  quote_uid: Scalars['ID']
}

/** Contains the customer's wish list and any errors encountered. */
export type GQLUpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput'
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<GQLWishListUserInputError>>
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: GQLWishlist
}

/** An input object that defines which requistion list characteristics to update. */
export type GQLUpdateRequisitionListInput = {
  /** The updated description of the requisition list. */
  description?: Maybe<Scalars['String']>
  /** The new name of the requisition list. */
  name: Scalars['String']
}

/** Defines which items in a requisition list to update. */
export type GQLUpdateRequisitionListItemsInput = {
  /** An array of customer-entered options. */
  entered_options?: Maybe<Array<Maybe<GQLEnteredOptionInput>>>
  /** The ID of the requisition list item to update. */
  item_id: Scalars['ID']
  /** The new quantity of the item. */
  quantity?: Maybe<Scalars['Float']>
  /** An array of selected option IDs. */
  selected_options?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Output of the request to update items in the specified requisition list. */
export type GQLUpdateRequisitionListItemsOutput = {
  __typename?: 'UpdateRequisitionListItemsOutput'
  /** The requisition list after updating items. */
  requisition_list?: Maybe<GQLRequisitionList>
}

/** Output of the request to rename the requisition list. */
export type GQLUpdateRequisitionListOutput = {
  __typename?: 'UpdateRequisitionListOutput'
  /** The renamed requisition list. */
  requisition_list?: Maybe<GQLRequisitionList>
}

/** Contains the name and visibility of an updated wish list. */
export type GQLUpdateWishlistOutput = {
  __typename?: 'UpdateWishlistOutput'
  /** The wish list name. */
  name: Scalars['String']
  /** The unique ID of a `Wishlist` object. */
  uid: Scalars['ID']
  /** Indicates whether the wish list is public or private. */
  visibility: GQLWishlistVisibilityEnum
}

/** Contains URL rewrite details. */
export type GQLUrlRewrite = {
  __typename?: 'UrlRewrite'
  /** An array of request parameters. */
  parameters?: Maybe<Array<Maybe<GQLHttpQueryParameter>>>
  /** The request URL. */
  url?: Maybe<Scalars['String']>
}

/** This enumeration defines the entity type. */
export enum GQLUrlRewriteEntityTypeEnum {
  CmsPage = 'CMS_PAGE',
  Product = 'PRODUCT',
  Category = 'CATEGORY',
}

/** Defines whether the attribute is filterable in layered navigation. */
export enum GQLUseInLayeredNavigationOptions {
  No = 'NO',
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
}

/** Contains required input for payment methods with Vault support. */
export type GQLVaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']
}

/** An implementation for virtual product cart items. */
export type GQLVirtualCartItem = GQLCartItemInterface & {
  __typename?: 'VirtualCartItem'
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<GQLCartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<GQLCartItemPrices>
  /** Details about an item in the cart. */
  product: GQLProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']
}

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type GQLVirtualProduct = GQLProductInterface &
  GQLRoutableInterface &
  GQLCustomizableProductInterface & {
    __typename?: 'VirtualProduct'
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>
    /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
    canonical_url?: Maybe<Scalars['String']>
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<GQLCategoryInterface>>>
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>
    /** An array of cross-sell products. */
    crosssell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** List of product custom attributes details. */
    custom_attributes: Array<Maybe<GQLCustomAttribute>>
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<GQLComplexTextValue>
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>
    /** The relative path to the main image on the product page. */
    image?: Maybe<GQLProductImage>
    /** Indicates whether the product can be returned. */
    is_returnable?: Maybe<Scalars['String']>
    /**
     * A number representing the product's manufacturer.
     * @deprecated Use the `custom_attributes` field instead.
     */
    manufacturer?: Maybe<Scalars['Int']>
    /** An array of media gallery objects. */
    media_gallery?: Maybe<Array<Maybe<GQLMediaGalleryInterface>>>
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use `media_gallery` instead.
     */
    media_gallery_entries?: Maybe<Array<Maybe<GQLMediaGalleryEntry>>>
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<GQLCustomizableOptionInterface>>>
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>
    /**
     * Indicates the price of an item.
     * @deprecated Use `price_range` for product price information.
     */
    price?: Maybe<GQLProductPrices>
    /** The range of prices for the product */
    price_range: GQLPriceRange
    /** An array of `TierPrice` objects. */
    price_tiers?: Maybe<Array<Maybe<GQLTierPrice>>>
    /** An array of `ProductLinks` objects. */
    product_links?: Maybe<Array<Maybe<GQLProductLinksInterface>>>
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float']
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
    redirect_code: Scalars['Int']
    /** An array of related products. */
    related_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int']
    /** The list of products reviews. */
    reviews: GQLProductReviews
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<GQLComplexTextValue>
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<GQLProductImage>
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>
    /** The end date for a product with a special price. */
    special_to_date?: Maybe<Scalars['String']>
    /** Indicates whether the product is staged for a future campaign. */
    staged: Scalars['Boolean']
    /** Stock status of the product */
    stock_status?: Maybe<GQLProductStockStatus>
    /** The file name of a swatch image. */
    swatch_image?: Maybe<Scalars['String']>
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<GQLProductImage>
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use `price_tiers` for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<GQLProductTierPrices>>>
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<GQLUrlRewriteEntityTypeEnum>
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use `__typename` instead.
     */
    type_id?: Maybe<Scalars['String']>
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID']
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>
    /** An array of up-sell products. */
    upsell_products?: Maybe<Array<Maybe<GQLProductInterface>>>
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<GQLUrlRewrite>>>
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<GQLWebsite>>>
  }

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type GQLVirtualProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

/** Defines a single product to add to the cart. */
export type GQLVirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: Maybe<Array<Maybe<GQLCustomizableOptionInput>>>
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: GQLCartItemInput
}

/** Contains details about virtual products added to a requisition list. */
export type GQLVirtualRequisitionListItem = GQLRequisitionListItemInterface & {
  __typename?: 'VirtualRequisitionListItem'
  /** Selected custom options for an item in the requisition list. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** Details about a requisition list item. */
  product: GQLProductInterface
  /** The amount added. */
  quantity: Scalars['Float']
  /** The unique ID for the requisition list item. */
  uid: Scalars['ID']
}

/** Contains a virtual product wish list item. */
export type GQLVirtualWishlistItem = GQLWishlistItemInterface & {
  __typename?: 'VirtualWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type GQLWebsite = {
  __typename?: 'Website'
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']>
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']>
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']>
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']>
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']>
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']>
}

/** An error encountered while performing operations with WishList. */
export type GQLWishListUserInputError = {
  __typename?: 'WishListUserInputError'
  /** A wish list-specific error code. */
  code: GQLWishListUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']
}

/** A list of possible error types. */
export enum GQLWishListUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED',
}

/** Contains a customer wish list. */
export type GQLWishlist = {
  __typename?: 'Wishlist'
  /** The unique ID for a `Wishlist` object. */
  id?: Maybe<Scalars['ID']>
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<GQLWishlistItem>>>
  /** The number of items in the wish list. */
  items_count?: Maybe<Scalars['Int']>
  /** An array of items in the customer's wish list. */
  items_v2?: Maybe<GQLWishlistItems>
  /** The name of the wish list. */
  name?: Maybe<Scalars['String']>
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code?: Maybe<Scalars['String']>
  /** The time of the last modification to the wish list. */
  updated_at?: Maybe<Scalars['String']>
  /** Indicates whether the wish list is public or private. */
  visibility: GQLWishlistVisibilityEnum
}

/** Contains a customer wish list. */
export type GQLWishlistItems_V2Args = {
  currentPage?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type GQLWishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError'
  /** An error code that describes the error encountered. */
  code: GQLWishlistCartUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']
}

/** A list of possible error types. */
export enum GQLWishlistCartUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  NotSalable = 'NOT_SALABLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Undefined = 'UNDEFINED',
}

/** Contains details about a wish list item. */
export type GQLWishlistItem = {
  __typename?: 'WishlistItem'
  /** The time when the customer added the item to the wish list. */
  added_at?: Maybe<Scalars['String']>
  /** The customer's comment about this item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItem` object. */
  id?: Maybe<Scalars['Int']>
  /** Details about the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>
}

/** Specifies the IDs of items to copy and their quantities. */
export type GQLWishlistItemCopyInput = {
  /** The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list. */
  quantity?: Maybe<Scalars['Float']>
  /** The unique ID of the `WishlistItemInterface` object to be copied. */
  wishlist_item_id: Scalars['ID']
}

/** Defines the items to add to a wish list. */
export type GQLWishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: Maybe<Array<Maybe<GQLEnteredOptionInput>>>
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: Maybe<Scalars['String']>
  /** The amount or number of items to add. */
  quantity: Scalars['Float']
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']
}

/** The interface for wish list items. */
export type GQLWishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<GQLSelectedCustomizableOption>>
  /** The description of the item. */
  description?: Maybe<Scalars['String']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']
  /** Product details of the wish list item. */
  product?: Maybe<GQLProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']
}

/** Specifies the IDs of the items to move and their quantities. */
export type GQLWishlistItemMoveInput = {
  /** The quantity of this item to move to the destination wish list. This value can't be greater than the quantity in the source wish list. */
  quantity?: Maybe<Scalars['Float']>
  /** The unique ID of the `WishlistItemInterface` object to be moved. */
  wishlist_item_id: Scalars['ID']
}

/** Defines updates to items in a wish list. */
export type GQLWishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: Maybe<Scalars['String']>
  /** An array of options that the customer entered. */
  entered_options?: Maybe<Array<Maybe<GQLEnteredOptionInput>>>
  /** The new amount or number of this item. */
  quantity?: Maybe<Scalars['Float']>
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']
}

/** Contains an array of items in a wish list. */
export type GQLWishlistItems = {
  __typename?: 'WishlistItems'
  /** A list of items in the wish list. */
  items: Array<Maybe<GQLWishlistItemInterface>>
  /** Contains pagination metadata. */
  page_info?: Maybe<GQLSearchResultPageInfo>
}

/** Deprecated: Use the `Wishlist` type instead. */
export type GQLWishlistOutput = {
  __typename?: 'WishlistOutput'
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items?: Maybe<Array<Maybe<GQLWishlistItem>>>
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count?: Maybe<Scalars['Int']>
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name?: Maybe<Scalars['String']>
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code?: Maybe<Scalars['String']>
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at?: Maybe<Scalars['String']>
}

/** Defines the wish list visibility types. */
export enum GQLWishlistVisibilityEnum {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

/** Assigns a specific `cart_id` to the empty cart. */
export type GQLCreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: Maybe<Scalars['String']>
}
