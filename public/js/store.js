const global = {
    estate_id: null,
    estate_dimension: null,
    building_id: null,
    user_id: null,
    renter_id: null,
    owner_id: null,
    contract_unique_id: null,
}

let contract = {
    end_rent: 0,
    rent_monthly: 0,
    rent_yearly: 0,
    first_deposit: 0,
    first_rent: 0,
    end_deposit: 0,
    charge: 0,
    charge_yearly: 0,
    input_monthly_rent: 0,
    input_deposit: 0,
    deposit_discount: 0,
    rent_discount: 0,
}
const setNullGlobal = () => {
    for (let key in global) {
        global[key] = null
    }
}

const setNullContract = () => {
    for (let key in contract) {
        contract[key] = null
    }
}
