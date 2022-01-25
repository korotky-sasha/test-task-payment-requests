export interface Payment {
  name: string;
  money_value: string;
  status: 'paid' | 'declined' | 'draft' | 'submitted' | 'viewed';
  date_info: string;
  due_date: string;
  hash_number: string;
  service_info: string;
}
