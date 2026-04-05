import { Plus, Trash, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleForm } from "../store/invoiceSlice";
import { add, addDays, format } from "date-fns";

export default function InvoiceForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(() => {
    return {
      id: `INV${Math.floor(Math.random() * 10000)}`,
      status: "pending",
      billFrom: { streetAddress: "", city: "", postCode: "", country: "" },
      billTo: {
        clientEmail: "",
        streetAddress: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientName: "",
      items: [],
      paymentTerms: "Net 30 Days",
      projectdescription: "",
      invoiceDate: format(new Date(), "yyyy-MM-dd"),
      dueDate: format(addDays(new Date(), 30), "yyyy-MM-dd"),
      amount: 0,
    };
  });
  console.log(formData);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center overflow-y-auto">
      <div className="bg-slate-800 p-8 rounded-lg w-full max-w-2xl mt-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">New Invoice</h2>
          <button type="button" onClick={() => dispatch(toggleForm())}>
            <X size={25} />
          </button>
        </div>
        <form className="space-y-6">
          <div className="space-y-4">
            <h3>Bill Form</h3>
            <input
              value={formData.billFrom.streetAddress}
              type="text"
              placeholder="Street Address"
              required
              className="w-full bg-slate-900 rounded-lg p-3"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  billFrom: {
                    ...formData.billFrom,
                    streetAddress: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-4 ">
            <input
              type="text"
              placeholder="City"
              className="w-full bg-slate-900 rounded-lg p-3"
              value={formData.billFrom.city}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billFrom: { ...formData.billFrom, city: e.target.value },
                });
              }}
            />
            <input
              type="text"
              placeholder="Post Code"
              className="w-full bg-slate-900 rounded-lg p-3"
              required
              value={formData.billFrom.postCode}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billFrom: { ...formData.billFrom, postCode: e.target.value },
                });
              }}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full bg-slate-900 rounded-lg p-3"
              required
              value={formData.billFrom.country}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billFrom: { ...formData.billFrom, country: e.target.value },
                });
              }}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-violet-500 font-bold">Bill To</h3>
            <input
              type="text"
              placeholder="Client's Name"
              className="bg-slate-900 rounded-lg p-3 w-full"
              required
              value={formData.clientName}
              onChange={(e) => {
                setFormData({ ...formData, clientName: e.target.value });
              }}
            />
            <input
              type="email"
              placeholder="Client's Email"
              className="bg-slate-900 rounded-lg p-3 w-full"
              required
              value={formData.billTo.clientEmail}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billTo: {
                    ...formData.billTo,
                    clientEmail: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="Street Address"
              className="bg-slate-900 rounded-lg p-3 w-full"
              required
              value={formData.billTo.streetAddress}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billTo: { ...formData.billTo, streetAddress: e.target.value },
                });
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            <input
              type="text"
              placeholder="City"
              className="w-full bg-slate-900 rounded-lg p-3"
              value={formData.billTo.city}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billTo: { ...formData.billTo, city: e.target.value },
                });
              }}
            />
            <input
              type="text"
              placeholder="Post Code"
              className="w-full bg-slate-900 rounded-lg p-3"
              required
              value={formData.billTo.postCode}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  billTo: { ...formData.billTo, postCode: e.target.value },
                });
              }}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full bg-slate-900 rounded-lg p-3"
              required
              value={formData.billTo.country}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  billTo: { ...formData.billTo, country: e.target.value },
                })
              }
            />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="bg-slate-900 rounded-lg p-3"
                value={formData.invoiceDate}
                onChange={(e) => {
                  const newDate = e.target.value;
                  setFormData({
                    ...formData,
                    invoiceDate: newDate,
                    dueDate: format(
                      addDays(new Date(newDate), 30),
                      "yyyy-MM-dd",
                    ),
                  });
                }}
              />
              <select className="bg-slate-900 rounded-lg p-3" required>
                <option>Net 30 Days </option>
                <option>Net 60 Days</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Project Description"
              className="w-full bg-slate-900 rounded-lg p-3"
            />
          </div>

          <div className="space-y-4">
            <h3>Item List</h3>

            <div className="grid grid-cols-12 gap-4  items-center">
              <input
                type="text"
                placeholder="Item Name"
                className="bg-slate-900 rounded-lg p-3 col-span-5"
              />
              <input
                type="number"
                placeholder="Quantity"
                className="bg-slate-900 rounded-lg p-3 col-span-2"
                min="1"
                step="0.01"
                required
              />
              <input
                type="number"
                placeholder="Price"
                className="bg-slate-900 rounded-lg p-3 col-span-2"
                min="0"
                step="0.01"
                required
              />
              <div className="col-span-2 text-right">Total Amount</div>
              <button
                type="button"
                className="text-slate-400 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-700 flex items-center justify-center p-2 space-x-3 hover:bg-slate-600"
            >
              <Plus size={20} />
              <span>Add New Item</span>
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className=" bg-violet-500 hover:bg-violet-600 rounded-full  px-6 py-3 text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              className=" bg-violet-500 hover:bg-violet-600 rounded-full  px-6 py-3 text-white"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
