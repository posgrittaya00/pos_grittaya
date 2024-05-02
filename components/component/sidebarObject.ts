type navigation = {
  readonly id: number;
  page: string;
  path: string;
  icon: string;
};

export const navigationMenu: navigation[] = [
  { id: 1, page: "แดชบอร์ด", path: "/dashboard", icon: "pi pi-circle" },
  { id: 2, page: "คลังสินค้าที่ขาย", path: "/sale", icon: "pi pi-box" },
  { id: 3, page: "คลังสินค้าที่สต็อก", path: "/stock", icon: "pi pi-list" },
  { id: 4, page: "แก้ไขสต็อก", path: "/edit", icon: "pi pi-pencil" },
  { id: 5, page: "สร้างออเดอร์", path: "/create", icon: "pi pi-file" },
];
