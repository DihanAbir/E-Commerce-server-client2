# External Links to learn insurance policy
https://www.coverfox.com/car-insurance/car-insurance-premium-calculator/?fs=FASTLANE_LANDING&ft=fl

# Shcema Fields For Auto Insurance

### Auto Policy Holder
0. holderID 
1. fullName -> string
2. email -> string
3. mobileNumber -> number
4. dateOfBirth -> date
5. gender -> enum(male, female, others)
6. maritalStatus -> enum(married, unmarried, divorced)
7. presentAddress
  * House No, Road No/Name, Area -> string
  * City -> string
  * State -> string
8. permanentAddress
  * House No, Road No/Name, Area -> string
  * City -> string
  * State -> string
10. nid -> string
11. passportNo -> string
12. purchasedPolicyIDs -> array (Object ID) **(foreign)
13. VehicleIDs -> array (Object ID) **(foreign)

### Vehicle Details
0. VehicleID
1. typeOfCar -> enum(private, commercial)
2. category -> enum(bus, truck, van, twoWheeler, threeWheeler)
3. brandName -> string
4. model -> string
5. launchYear -> number
6. carNo -> string
7. chassisNo -> string
8. carRegistrationDate -> date
9. carLiscenseImage -> ??
10. drivingLiscenseImage -> ??
11. carPrice -> number
12. policyIDs -> array(Object ID) **foreign

### Insurance Plans / Product
0. planID
1. typeOfInsurance -> enum(thirdParty, comprehensive)
2. covered -> array(string)
3. notCovered -> array(string)
4. premiumBreakup
  * baseCover [{ Basic Own Damage Premium } { Third Party Cover Premium }]
  * discounts [{ No Claim Bonus } { Other discounts }]
  * premiumDetails [{ Package Premium } { VAT }]
  * Final Premium -> number
5. planBenefits
6. isSold -> boolean (default: false)
7. insurerID -> Object ID() **foreign

### Insurer Details
0. insurerID
1. companyName -> string
2. tradeName -> string
3. logo 

### Auto Insurance Policy
0. policyID
1. planID (ObjectID) **foreign
2. policyHolderID (ObjectID) **foreign
3. vehicleID (ObjectID) **foreign
4. stage
5. purchaseDate
6. expiredate
7. renewalDate
8. questions -> [{ }]