const filterTopSize=(topProductSize)=>{
    let topSizeData=[]

    if(topProductSize.xsmall){
        let xsmall={
          title:"X - Small",
          xsmall:topProductSize.xsmall,
          xsmallStock:topProductSize.xsmallStock,
          xsmallAvailable:topProductSize.xsmallAvailable
          }
        topSizeData.push(xsmall);
    }
    if(topProductSize.small){
        let small={
          title:"Small",
          small:topProductSize.small,
          smallStock:topProductSize.smallStock,
          smallAvailable:topProductSize.smallAvailable
          }
        topSizeData.push(small);
    }
    if(topProductSize.medium){
        let medium={
          title:"Medium",
          medium:topProductSize.medium,
          mediumStock:topProductSize.mediumStock,
          mediumAvailable:topProductSize.mediumAvailable
          }
        topSizeData.push(medium);
    }
    if(topProductSize.large){
        let large={
          title:"Small",
          large:topProductSize.large,
          largeStock:topProductSize.largeStock,
          largeAvailable:topProductSize.largeAvailable
          }
        topSizeData.push(large);
    }
    if(topProductSize.xlarge){
        let xlarge={
          title:"X - Large",
          xlarge:topProductSize.xlarge,
          xlargeStock:topProductSize.xlargeStock,
          xlargeAvailable:topProductSize.xlargeAvailable
          }
        topSizeData.push(xlarge);
    }
    if(topProductSize.xxlarge){
        let xxlarge={
          title:"XX - Large",
          xxlarge:topProductSize.xxlarge,
          xxlargeStock:topProductSize.xxlargeStock,
          xxlargeAvailable:topProductSize.xxlargeAvailable
          }
        topSizeData.push(xxlarge);
    }
    return topSizeData;
  }

export {filterTopSize}