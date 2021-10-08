/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      bill {
        id
        subTotal
        codcharges
        deliverycharge
        discount
        coupon
        total
        createdAt
        updatedAt
      }
      shipaddress {
        id
        firstname
        lastname
        email
        address
        city
        state
        pincode
        phonenumber
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          userID
          paymentmethod
          createdAt
          updatedAt
        }
        nextToken
      }
      orderitems {
        items {
          id
          userID
          orderID
          quantity
          price
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        items {
          id
          userID
          quantity
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      bill {
        id
        subTotal
        codcharges
        deliverycharge
        discount
        coupon
        total
        createdAt
        updatedAt
      }
      shipaddress {
        id
        firstname
        lastname
        email
        address
        city
        state
        pincode
        phonenumber
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          userID
          paymentmethod
          createdAt
          updatedAt
        }
        nextToken
      }
      orderitems {
        items {
          id
          userID
          orderID
          quantity
          price
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        items {
          id
          userID
          quantity
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      bill {
        id
        subTotal
        codcharges
        deliverycharge
        discount
        coupon
        total
        createdAt
        updatedAt
      }
      shipaddress {
        id
        firstname
        lastname
        email
        address
        city
        state
        pincode
        phonenumber
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          userID
          paymentmethod
          createdAt
          updatedAt
        }
        nextToken
      }
      orderitems {
        items {
          id
          userID
          orderID
          quantity
          price
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        items {
          id
          userID
          quantity
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBill = /* GraphQL */ `
  mutation CreateBill(
    $input: CreateBillInput!
    $condition: ModelBillConditionInput
  ) {
    createBill(input: $input, condition: $condition) {
      id
      subTotal
      codcharges
      deliverycharge
      discount
      coupon
      total
      createdAt
      updatedAt
    }
  }
`;
export const updateBill = /* GraphQL */ `
  mutation UpdateBill(
    $input: UpdateBillInput!
    $condition: ModelBillConditionInput
  ) {
    updateBill(input: $input, condition: $condition) {
      id
      subTotal
      codcharges
      deliverycharge
      discount
      coupon
      total
      createdAt
      updatedAt
    }
  }
`;
export const deleteBill = /* GraphQL */ `
  mutation DeleteBill(
    $input: DeleteBillInput!
    $condition: ModelBillConditionInput
  ) {
    deleteBill(input: $input, condition: $condition) {
      id
      subTotal
      codcharges
      deliverycharge
      discount
      coupon
      total
      createdAt
      updatedAt
    }
  }
`;
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      size
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      size
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      size
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      list {
        items {
          id
          userID
          orderID
          quantity
          price
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      billdata {
        subTotal
        codcharges
        deliverycharge
        discount
        coupon
        total
      }
      paymentmethod
      orderstatus {
        accepted
        dateaccepted
        dispatched
        datedispatched
        delivered
        datedelivered
      }
      shipaddress {
        firstname
        lastname
        email
        address
        city
        state
        pincode
        phonenumber
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      list {
        items {
          id
          userID
          orderID
          quantity
          price
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      billdata {
        subTotal
        codcharges
        deliverycharge
        discount
        coupon
        total
      }
      paymentmethod
      orderstatus {
        accepted
        dateaccepted
        dispatched
        datedispatched
        delivered
        datedelivered
      }
      shipaddress {
        firstname
        lastname
        email
        address
        city
        state
        pincode
        phonenumber
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      list {
        items {
          id
          userID
          orderID
          quantity
          price
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      billdata {
        subTotal
        codcharges
        deliverycharge
        discount
        coupon
        total
      }
      paymentmethod
      orderstatus {
        accepted
        dateaccepted
        dispatched
        datedispatched
        delivered
        datedelivered
      }
      shipaddress {
        firstname
        lastname
        email
        address
        city
        state
        pincode
        phonenumber
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userID
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        list {
          nextToken
        }
        billdata {
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
        }
        paymentmethod
        orderstatus {
          accepted
          dateaccepted
          dispatched
          datedispatched
          delivered
          datedelivered
        }
        shipaddress {
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
        }
        createdAt
        updatedAt
      }
      quantity
      price
      size
      issue {
        id
        category
        subcategory
        status {
          issueraised
          dateissueraised
          issueresorted
          dateissueresorted
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userID
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        list {
          nextToken
        }
        billdata {
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
        }
        paymentmethod
        orderstatus {
          accepted
          dateaccepted
          dispatched
          datedispatched
          delivered
          datedelivered
        }
        shipaddress {
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
        }
        createdAt
        updatedAt
      }
      quantity
      price
      size
      issue {
        id
        category
        subcategory
        status {
          issueraised
          dateissueraised
          issueresorted
          dateissueresorted
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        bill {
          id
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
          createdAt
          updatedAt
        }
        shipaddress {
          id
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        orderitems {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userID
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        list {
          nextToken
        }
        billdata {
          subTotal
          codcharges
          deliverycharge
          discount
          coupon
          total
        }
        paymentmethod
        orderstatus {
          accepted
          dateaccepted
          dispatched
          datedispatched
          delivered
          datedelivered
        }
        shipaddress {
          firstname
          lastname
          email
          address
          city
          state
          pincode
          phonenumber
        }
        createdAt
        updatedAt
      }
      quantity
      price
      size
      issue {
        id
        category
        subcategory
        status {
          issueraised
          dateissueraised
          issueresorted
          dateissueresorted
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      active
      name
      description
      price
      falseprice
      trueprice
      orders
      size {
        topsize {
          xsmall
          xsmallStock
          xsmallAvailable
          small
          smallStock
          smallAvailable
          medium
          mediumStock
          mediumAvailable
          large
          largeStock
          largeAvailable
          xlarge
          xlargeStock
          xlargeAvailable
          xxlarge
          xxlargeStock
          xxlargeAvailable
        }
        bottomsize {
          twentySix
          twentySixStock
          twentySixAvailable
          twentyEight
          twentyEightStock
          twentyEightAvailable
          thirty
          thirtyStock
          thirtyAvailable
          thirtytwo
          thirtytwoStock
          thirtytwoAvailable
          thirtyFour
          thirtyFourStock
          thirtyFourAvailable
          thirtySix
          thirtySixStock
          thirtySixAvailable
          thirtyEight
          thirtyEightStock
          thirtyEightAvailable
          fourty
          fourtyStock
          fourtyAvailable
        }
        othersize {
          stock
          available
        }
      }
      feature {
        featureone
        featuretwo
        featurethree
        featurefour
      }
      descriptionblock {
        descriptionblockone
        descriptionblocktwo
      }
      createdAt
      updatedAt
      productcategory {
        id
        name
        category {
          top
          bottom
          other
        }
        createdAt
        updatedAt
      }
      picture {
        items {
          id
          productID
          name
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      active
      name
      description
      price
      falseprice
      trueprice
      orders
      size {
        topsize {
          xsmall
          xsmallStock
          xsmallAvailable
          small
          smallStock
          smallAvailable
          medium
          mediumStock
          mediumAvailable
          large
          largeStock
          largeAvailable
          xlarge
          xlargeStock
          xlargeAvailable
          xxlarge
          xxlargeStock
          xxlargeAvailable
        }
        bottomsize {
          twentySix
          twentySixStock
          twentySixAvailable
          twentyEight
          twentyEightStock
          twentyEightAvailable
          thirty
          thirtyStock
          thirtyAvailable
          thirtytwo
          thirtytwoStock
          thirtytwoAvailable
          thirtyFour
          thirtyFourStock
          thirtyFourAvailable
          thirtySix
          thirtySixStock
          thirtySixAvailable
          thirtyEight
          thirtyEightStock
          thirtyEightAvailable
          fourty
          fourtyStock
          fourtyAvailable
        }
        othersize {
          stock
          available
        }
      }
      feature {
        featureone
        featuretwo
        featurethree
        featurefour
      }
      descriptionblock {
        descriptionblockone
        descriptionblocktwo
      }
      createdAt
      updatedAt
      productcategory {
        id
        name
        category {
          top
          bottom
          other
        }
        createdAt
        updatedAt
      }
      picture {
        items {
          id
          productID
          name
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      active
      name
      description
      price
      falseprice
      trueprice
      orders
      size {
        topsize {
          xsmall
          xsmallStock
          xsmallAvailable
          small
          smallStock
          smallAvailable
          medium
          mediumStock
          mediumAvailable
          large
          largeStock
          largeAvailable
          xlarge
          xlargeStock
          xlargeAvailable
          xxlarge
          xxlargeStock
          xxlargeAvailable
        }
        bottomsize {
          twentySix
          twentySixStock
          twentySixAvailable
          twentyEight
          twentyEightStock
          twentyEightAvailable
          thirty
          thirtyStock
          thirtyAvailable
          thirtytwo
          thirtytwoStock
          thirtytwoAvailable
          thirtyFour
          thirtyFourStock
          thirtyFourAvailable
          thirtySix
          thirtySixStock
          thirtySixAvailable
          thirtyEight
          thirtyEightStock
          thirtyEightAvailable
          fourty
          fourtyStock
          fourtyAvailable
        }
        othersize {
          stock
          available
        }
      }
      feature {
        featureone
        featuretwo
        featurethree
        featurefour
      }
      descriptionblock {
        descriptionblockone
        descriptionblocktwo
      }
      createdAt
      updatedAt
      productcategory {
        id
        name
        category {
          top
          bottom
          other
        }
        createdAt
        updatedAt
      }
      picture {
        items {
          id
          productID
          name
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
      id
      name
      category {
        top
        bottom
        other
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
      id
      name
      category {
        top
        bottom
        other
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
      id
      name
      category {
        top
        bottom
        other
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      productID
      name
      owner
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      productID
      name
      owner
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      productID
      name
      owner
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      product {
        id
        active
        name
        description
        price
        falseprice
        trueprice
        orders
        feature {
          featureone
          featuretwo
          featurethree
          featurefour
        }
        descriptionblock {
          descriptionblockone
          descriptionblocktwo
        }
        createdAt
        updatedAt
        productcategory {
          id
          name
          createdAt
          updatedAt
        }
        picture {
          nextToken
        }
      }
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      address
      city
      state
      pincode
      phonenumber
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      address
      city
      state
      pincode
      phonenumber
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      address
      city
      state
      pincode
      phonenumber
      createdAt
      updatedAt
    }
  }
`;
export const createIssue = /* GraphQL */ `
  mutation CreateIssue(
    $input: CreateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    createIssue(input: $input, condition: $condition) {
      id
      category
      subcategory
      status {
        issueraised
        dateissueraised
        issueresorted
        dateissueresorted
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateIssue = /* GraphQL */ `
  mutation UpdateIssue(
    $input: UpdateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    updateIssue(input: $input, condition: $condition) {
      id
      category
      subcategory
      status {
        issueraised
        dateissueraised
        issueresorted
        dateissueresorted
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteIssue = /* GraphQL */ `
  mutation DeleteIssue(
    $input: DeleteIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    deleteIssue(input: $input, condition: $condition) {
      id
      category
      subcategory
      status {
        issueraised
        dateissueraised
        issueresorted
        dateissueresorted
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
      id
      name
      discount
      numberoforders
      active
      createdAt
      updatedAt
    }
  }
`;
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
      id
      name
      discount
      numberoforders
      active
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
      id
      name
      discount
      numberoforders
      active
      createdAt
      updatedAt
    }
  }
`;
