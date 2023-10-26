export interface MenuItem {
  id: number;
  title: string;
  price: number;
  state: string;
  image: string;
  category: string;
  created_date: string;
  time: string;
  status: string;
}

export interface TableManagementItem {
  id: number;
  title: string;
  status: string;
  reservation: ReservationItem[];
}

export interface ReservationItem {
  id: number;
  time: string;
  info: {
    name: string;
    people: number;
    contact: string;
  };
}
