declare interface MaternityProfileInterface {
  address: string;
  anc_number: string;
  appointment_id: string;
  blood_transfusion: string | null;
  diabetes: string | null;
  drug_allergies: string | null;
  edd: Date | string | null;
  education: string | null;
  family_history_diabetes: string | null;
  family_history_hypertension: string | null;
  family_history_tuberculosis: string | null;
  family_history_twins: string | null;
  gravida: string | null;
  height: string | null;
  hypertension: string | null;
  lmp: Date | string | null;
  marital_status: string | null;
  maternity_profile_id: number | null;
  name_of_client: string | null;
  next_of_kin: string | null;
  next_of_contacts: string | null;
  next_of_kin_relationship: string | null;
  occupation: string | null;
  parity: string | null;
  patient_id: string | null;
  surgical_operations_history: string | null;
  telephone: string | null;
  tuberculosis: string | null;
}

declare interface AntenatalProfileInterface{
  blood_group: string | null
  hb: string | null
  hiv: string | null
  hiv_testing_done: string | null
  maternity_antenatal_profile_id: string
  maternity_profile?: MaternityProfileInterface
  maternity_profile_id: string
  rhesus: string | null
  serology: string | null
  tb_screening: string | null
  urinalysis: string | null
}