function getNetSalary(employeeBasicSalary, employeeBenefits) {

}

function getNHIFContribution(employeeGrossIncome) {

    const grossIncome = employeeGrossIncome
    let NHIFContribution

    if (grossIncome <= 5999) {
        NHIFContribution = 150
    } else if (grossIncome >= 6000 && grossIncome <= 7999) {
        NHIFContribution = 300
    } else if (grossIncome >= 8000 && grossIncome <= 11999) {
        NHIFContribution = 400
    } else if (grossIncome >= 12000 && grossIncome <= 14999) {
        NHIFContribution = 500
    } else if (grossIncome >= 15000 && grossIncome <= 19999) {
        NHIFContribution = 600
    } else if (grossIncome >= 20000 && grossIncome <= 24999) {
        NHIFContribution = 750
    } else if (grossIncome >= 25000 && grossIncome <= 29999) {
        NHIFContribution = 850
    } else if (grossIncome >= 30000 && grossIncome <= 34999) {
        NHIFContribution = 900
    } else if (grossIncome >= 35000 && grossIncome <= 39999) {
        NHIFContribution = 950
    } else if (grossIncome >= 40000 && grossIncome <= 44999) {
        NHIFContribution = 1000
    } else if (grossIncome >= 45000 && grossIncome <= 49999) {
        NHIFContribution = 1100
    } else if (grossIncome >= 50000 && grossIncome <= 59999) {
        NHIFContribution = 1200
    } else if (grossIncome >= 60000 && grossIncome <= 69999) {
        NHIFContribution = 1300
    } else if (grossIncome >= 70000 && grossIncome <= 79999) {
        NHIFContribution = 1400
    } else if (grossIncome >= 80000 && grossIncome <= 89999) {
        NHIFContribution = 1500
    } else if (grossIncome >= 90000 && grossIncome <= 99999) {
        NHIFContribution = 1600
    } else if (grossIncome >= 100000) {
        NHIFContribution = 1700
    }

    return NHIFContribution
}

function getNSSFContribution(employeeGrossIncome) {
    // NSSF - 6 percent employee contribution, limit 6000
    let NSSFContribution = employeeGrossIncome * 0.06
    NSSFContribution = Number(NSSFContribution.toFixed(2))
    return (NSSFContribution < 6000) ? NSSFContribution : 6000;
}

function getPAYE(employeeGrossIncome, ...totalDeductions) {

}

console.log(getNetSalary(10000, 10000))