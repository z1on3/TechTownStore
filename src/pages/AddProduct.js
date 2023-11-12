import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    qty: 0,
    category: "",
    brand: "",
    img: null,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "http://127.0.0.1:8000/api/product/add";
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append('rating', '5.0/5.0');
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        setModalContent("Product added successfully!");
      } else {
        setModalContent("Failed to add product. Please try again.");
      }
    } catch (error) {
      setModalContent("An error occurred. Please try again later.");
    } finally {
      setModalVisible(true);
    }
  };

  return (
    <section className="h-screen w-full flex overflow-hidden bg-[#121212]">
      <nav className="w-64 flex flex-col px-4 py-8 bg-[#343a40] text-white">
        <Link className="mb-8 flex items-center justify-center" to="/">
          <div className="w-48">
              <img src="/images/techtown.png" alt="TechTown" />
          </div>
          <span className="sr-only">TechTown</span>
        </Link>
        <div className="flex flex-col space-y-1">
          <Link className="py-2 px-3 rounded hover:bg-[#495057]" to="#">
            Dashboard
          </Link>
          <Link className="py-2 px-3 rounded bg-[#495057]" to="#">
            Products
          </Link>
          <Link className="py-2 px-3 rounded hover:bg-[#495057]" to="#">
            Orders
          </Link>
          <Link className="py-2 px-3 rounded hover:bg-[#495057]" to="#">
            Customers
          </Link>
        </div>
      </nav>
      <main className="flex-1 flex flex-col overflow-y-auto text-white">
        <header className="flex items-center justify-between p-4 border-b border-zinc-200 bg-[#343a40]">
          <div className="flex gap-4 items-center">
            <svg
              className=" h-5 w-5 text-zinc-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              placeholder="Search here"
              type="search"
            />
          </div>
          <div className="flex gap-4 items-center">
            <svg
              className=" h-5 w-5 text-zinc-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <svg
              className=" h-5 w-5 text-zinc-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </header>
        <section className="p-6">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <Label className="text-base" htmlFor="name">
              Product Name
            </Label>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="name"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
            />
            <Label className="text-base" htmlFor="description">
              Product Description
            </Label>
            <textarea
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="description"
              rows="3"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
            />
            <Label className="text-base" htmlFor="price">
              Product Price
            </Label>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="price"
              type="number"
              name="price"
              onChange={handleInputChange}
              value={formData.price}
            />
            <Label className="text-base" htmlFor="qty">
              Product Quantity
            </Label>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="qty"
              type="number"
              name="qty"
              onChange={handleInputChange}
              value={formData.qty}
            />
            <Label className="text-base" htmlFor="category">
              Product Category
            </Label>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="category"
              type="text"
              name="category"
              onChange={handleInputChange}
              value={formData.category}
            />
            <Label className="text-base" htmlFor="brand">
              Product Brand
            </Label>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="brand"
              type="text"
              name="brand"
              onChange={handleInputChange}
              value={formData.brand}
            />
            <Label className="text-base" htmlFor="image">
              Product Image
            </Label>
            <input
              className="py-2 px-3 rounded-md border border-zinc-200 bg-[#121212]"
              id="img"
              type="file"
              name="img"
              onChange={handleInputChange}
              accept="image/*"
            />
            <div className="flex gap-4">
              <Button className="bg-[#007bff] text-white py-2 px-3 rounded-md" type="submit">
                Submit
              </Button>
              <Button className="bg-[#6c757d] text-white py-2 px-3 rounded-md" type="button">
                Cancel
              </Button>
            </div>
          </form>
        </section>
      </main>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p>{modalContent}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
