/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
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
export const onCreateBill = /* GraphQL */ `
  subscription OnCreateBill {
    onCreateBill {
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
export const onUpdateBill = /* GraphQL */ `
  subscription OnUpdateBill {
    onUpdateBill {
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
export const onDeleteBill = /* GraphQL */ `
  subscription OnDeleteBill {
    onDeleteBill {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem($userID: String) {
    onCreateCartItem(userID: $userID) {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem($userID: String) {
    onUpdateCartItem(userID: $userID) {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem($userID: String) {
    onDeleteCartItem(userID: $userID) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($userID: String) {
    onCreateOrder(userID: $userID) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($userID: String) {
    onUpdateOrder(userID: $userID) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($userID: String) {
    onDeleteOrder(userID: $userID) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($userID: String) {
    onCreateOrderItem(userID: $userID) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($userID: String) {
    onUpdateOrderItem(userID: $userID) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($userID: String) {
    onDeleteOrderItem(userID: $userID) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateIssue = /* GraphQL */ `
  subscription OnCreateIssue {
    onCreateIssue {
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
export const onUpdateIssue = /* GraphQL */ `
  subscription OnUpdateIssue {
    onUpdateIssue {
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
export const onDeleteIssue = /* GraphQL */ `
  subscription OnDeleteIssue {
    onDeleteIssue {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon {
    onCreateCoupon {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon {
    onUpdateCoupon {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon {
    onDeleteCoupon {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory {
    onCreateProductCategory {
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
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory {
    onUpdateProductCategory {
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
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory {
    onDeleteProductCategory {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
