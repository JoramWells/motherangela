declare interface InsuranceInterface {
  box_address: string;
  discount_percentage: string;
  email: string | null;
  full_discount_on_all_services: string;
  insurance_id: number;
  insurance_limit_type_id: string;
  insurance_name: string;
  insurance_type_id: string;
  maximum_billable_amount: string;
  nhif_rebate: string;
  payment_percentage_in_patient: string;
  payment_percentage_out_patient: string;
  phone_no: string
  requires_claim_number: string
  revenue_expected: string
  status: string
  withholding_tax_application: string
}
