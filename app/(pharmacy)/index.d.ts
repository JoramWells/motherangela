declare interface MedicineCategory{
    category_name: string
}


declare interface MedicinePackageTypeInterface{
    package_description: string
}

declare interface MedicineStockInterface {
  appointment_type_allowed: string;
  buying_price: string;
  hospital_id: string;
  linked_item_id: string;
  medication_category?: MedicineCategory;
  medication_category_id: string;
  medication_group_id: string;
  medication_id: string;
  medication_name: string;
  medication_package_type: MedicinePackageTypeInterface;
  medication_package_type_id: string | null;
  price: string | null
  price_corporate: string | null
  price_foreigner: string | null
  quantity: number | null
  reorder_level: number | null
  sell_at_buying_price: string | null
  visible: string | null
}