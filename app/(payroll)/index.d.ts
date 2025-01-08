declare interface PayrollEmployeeRecordsInterface{
    active_status: number | null
    address: string | null
    bank_account_number: string | null
    bank_branch: string | null
    bank_id: string | null
    branch_code: string | null
    cellphone: string | null
    city_of_residence: string | null
    date_of_birth: Date | string | null
    date_of_start_of_regular_payment: Date | string | null
    deduct_nhif: string | null
    deduct_nssf: string | null
    department_id: string | null
    email: string | null
    employee_category: string | null
    employee_id: number
    employee_status_id: string | null
    full_name: string | null
    gender: string | null
    hire_date: Date | string | null
    hospital_id: string
    hourly_rate: string
    id_number: string | null
    insurance_relief: string | null
    job_number: string | null
    job_title_id: string
    kra_pin_number: string
    marital_status: string | null
    maximum_number_of_hours_per_month: string
    nationality: string
    nhif_number: string
    nssf_number: string
    pay_period_id: string
    pay_type_id: string
    payroll_reason_for_leaving_id: string | null
    period_date: string | null
    retire_date: Date | string | null
    tax_category_id: string | null
    tax_status_id: string | null
    termination_date: string | null
    user_id: string | null
}

declare interface PayrollEmployeeBenefitsFileInterface{
    amount: string | number | null
    employee_benefits_file_id: number
    employee_id: string | null
    other_income_type_id: string | null
    payroll_employee_record?: PayrollEmployeeRecordsInterface
    payroll_id: string | null
}
