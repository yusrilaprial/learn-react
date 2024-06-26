import "./index.css";
import Layout from "../../components/layout";

const MenuResto = () => {
  const menuItemStyle = {
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const menus = [
    {name: "Ayam Bakar", price: 15000},
    {name: "Nasi Goreng", price: 12000},
    {name: "Mie Goreng", price: 10000},
  ];

  return (
    <Layout>
      <h1>Menu Resto</h1>
      <div className="menu-list">
        {menus.map((menu, index) => (
          <div key={index} style={menuItemStyle}>
            <div>{menu.name}</div>
            <div>Rp {menu.price}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MenuResto;
