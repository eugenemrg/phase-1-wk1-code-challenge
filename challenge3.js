console.log(getNetSalary(20000, 15000))

/**
 * Returns a summary of employee net salary information.
 * Prints out net salary of an employee.
 * 
 * @param {number} employeeBasicSalary Basic salary of employee
 * @param {number} employeeBenefits Additional benefits and allowances to employee
 * @returns {object} employee net salary information including deductions e.g. taxes as an object
 */
function getNetSalary(employeeBasicSalary, employeeBenefits) {
    let employeeGrossIncome = employeeBasicSalary + employeeBenefits
    let NHIF = getNHIFContribution(employeeGrossIncome)
    let NSSF = getNSSFContribution(employeeGrossIncome)
    let PAYE = getPAYE(employeeGrossIncome, NHIF, NSSF)

    employeeTotalDeductions = NHIF + NSSF + PAYE
    employeeNetSalary = employeeGrossIncome - employeeTotalDeductions
    let salarySummary = {
        basicSalary: employeeBasicSalary,
        benefits: employeeBenefits,
        grossSalary: employeeGrossIncome,
        deductions: {
            insuranceRelief: NHIF,
            employeePensionContribution: NSSF,
            employeePAYE: PAYE
        },
        totalDeductions: employeeTotalDeductions,
        netSalary: employeeNetSalary
    }

    console.log(`Net Salary: ${employeeNetSalary}`);
    printSalarySummary(salarySummary)
    
    return salarySummary
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
    const personalRelief = 2400
    const deductions = totalDeductions.reduce((a, b) => a + b, 0)
    const taxableIncome = employeeGrossIncome - deductions
    let monthlyPAYEContribtion

    // Minimum monthly taxable income is KES. 24,001
    // Individuals earning less monthly exempt from income tax
    // since personal relief is greater than tax
    if (taxableIncome <= 24000) return 0

    if (taxableIncome <= 24000) {
        monthlyPAYEContribtion = taxableIncome * 0.1;
    } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
        monthlyPAYEContribtion = taxableIncome * 0.25
    } else if (taxableIncome > 32333) {
        monthlyPAYEContribtion = taxableIncome * 0.3
    }

    monthlyPAYEContribtion = monthlyPAYEContribtion - personalRelief
    monthlyPAYEContribtion = Number(monthlyPAYEContribtion.toFixed(2))
    return monthlyPAYEContribtion
}

function  printSalarySummary(salarySummary) {
    console.log(`
    Salary summary:

        Basic Salary: ${salarySummary.basicSalary}
        Benefits: ${salarySummary.benefits}

        Gross Salary: ${salarySummary.grossSalary}

        --------------------------

        Deductions:
            NSSF: ${salarySummary.deductions.employeePensionContribution}
            NHIF: ${salarySummary.deductions.insuranceRelief}
            PAYE: ${salarySummary.deductions.employeePAYE}
        Total deductions: ${salarySummary.totalDeductions}

        ---------------------------

        Net Salary: ${salarySummary.netSalary}
        `);
}