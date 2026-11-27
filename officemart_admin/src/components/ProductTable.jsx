// src/components/ProductTable.jsx
import { categoryNames } from '../data/sample.js';

export default function ProductTable({ products }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>SKU</th>
                    <th>Danh mục</th>
                    <th>Giá</th>
                    <th>Tồn kho</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p) => (
                    <tr key={p.id} data-testid="product-row">
                        <td>{p.name}</td>
                        <td>{p.sku}</td>
                        <td>{categoryNames[p.category] ?? p.category}</td>
                        <td>{p.price.toLocaleString('vi-VN')}₫</td>
                        <td>{p.stock}</td>
                        <td>
                            <span data-testid="product-status">
                                {p.status === 'active' ? 'Đang bán' : 'Ngừng bán'}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}