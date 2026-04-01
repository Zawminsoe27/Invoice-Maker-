import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Filter, Plus } from "lucide-react";
import { useSelector } from "react-redux";

const status = ["alll", "paid", "pending", "draft"];

export default function Header({ onNewInvoice }) {
  const { invoices } = useSelector((state) => state.invoices);
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Invoices</h1>
        <p className="text-slate">
          {invoices.length === 0
            ? `No Invoices`
            : `There are ${invoices.length} invoices. b`}
        </p>
      </div>
      <div className="flex items-center space-x-8">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2 text-white">
            <Filter size={20} />
            <span>Filter</span>
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg p-2 z-10">
            {status.map((s) => (
              <Menu.Item key={s}>
                <button className="w-full text-left px-4 py-2 rounded-lg capitalize">
                  {s}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>

        <button
          className="flex items-center space-x-2 px-4 py-2 bg-violet-700 rounded-full hover:bg-violet-600"
          onClick={onNewInvoice}
        >
          <div className="bg-white rounded-full p-2">
            <Plus size={16} className="text-violet-500" />
          </div>
          <p className="">Add Invoices</p>
        </button>
      </div>
    </header>
  );
}
