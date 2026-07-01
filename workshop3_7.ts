interface Product {
    id: number;
    name: string;
    price: number;
}

type Status = "Available" | "Out of Stock";

function printProductSummary(product: Product, status: Status): void {
console.log("--- สรุปข้อมูลสินค้า (Product Summary) ---");
console.log(`รหัสสินค้า (ID): ${product.id}`);
console.log(`ชื่อสินค้า: ${product.name}`);
console.log(`ราคา: ${product.price} บาท`);
console.log(`สถานะสินค้า: ${status === "Available" ? "มีสินค้าพร้อมจำหน่าย 🟢" : "สินค้าหมด 🔴"}`);
}

const sampleProduct: Product = {
    id: 101,
    name: "Thawanrat",
    price: 590
};

printProductSummary(sampleProduct, "Available");